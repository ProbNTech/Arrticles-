// Convert articles/<category>/<slug>/article.md -> docx/<category>/<slug>.docx
const fs = require("fs");
const path = require("path");
const { marked } = require("marked");
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, ExternalHyperlink,
  Table, TableRow, TableCell, WidthType, ShadingType, BorderStyle, AlignmentType,
  LevelFormat, Footer, PageNumber, TableLayoutType,
} = require("docx");

const ROOT = process.argv[2];
const OUT = path.join(ROOT, "docx");
const FONT = "Calibri";
const CONTENT_W = 12240 - 2 * 1440; // US Letter minus 1" margins
const TAG_RE = /(\[(?:VERIFY|STAT NEEDED|COST NEEDED|FACT NEEDED|EXAMPLE NEEDED|PRODUCT NAME NEEDED|USER EXPERIENCE NEEDED|CASE STUDY NEEDED|SOURCE NEEDED|QUICK ANSWER BOX|PARTIAL SOURCE:[^\]]*)\])/g;

const decode = (s) => s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
  .replace(/&quot;/g, '"').replace(/&#39;/g, "'");

// Split plain text so placeholder tags get a yellow highlight.
function textRuns(text, fmt = {}) {
  text = decode(text);
  return text.split(TAG_RE).filter((p) => p !== "").map((p) =>
    TAG_RE.test(p) && (TAG_RE.lastIndex = 0, true)
      ? new TextRun({ text: p, ...fmt, bold: true, highlight: "yellow" })
      : new TextRun({ text: p, ...fmt }));
}

// Inline marked tokens -> docx runs
function inline(tokens, fmt = {}) {
  const out = [];
  for (const t of tokens || []) {
    switch (t.type) {
      case "strong": out.push(...inline(t.tokens, { ...fmt, bold: true })); break;
      case "em": out.push(...inline(t.tokens, { ...fmt, italics: true })); break;
      case "codespan": out.push(...textRuns(t.text, { ...fmt, font: "Consolas" })); break;
      case "br": out.push(new TextRun({ text: "", break: 1 })); break;
      case "link":
        out.push(new ExternalHyperlink({
          link: t.href,
          children: inline(t.tokens, { ...fmt, style: "Hyperlink" }),
        }));
        break;
      case "del": out.push(...inline(t.tokens, { ...fmt, strike: true })); break;
      case "text":
        if (t.tokens && t.tokens.length) out.push(...inline(t.tokens, fmt));
        else out.push(...textRuns(t.text, fmt));
        break;
      case "escape": out.push(...textRuns(t.text, fmt)); break;
      case "html": break;
      default: if (t.text) out.push(...textRuns(t.text, fmt));
    }
  }
  return out;
}

function listParas(list, level, out) {
  for (const item of list.items) {
    let first = true;
    for (const tok of item.tokens) {
      if (tok.type === "list") { listParas(tok, level + 1, out); continue; }
      const runs = inline(tok.tokens || [{ type: "text", text: tok.text || "" }]);
      out.push(new Paragraph({
        children: runs,
        numbering: first
          ? { reference: list.ordered ? `num-${out.numId}` : "bullets", level }
          : undefined,
        indent: first ? undefined : { left: 720 * (level + 1) },
        spacing: { after: 80 },
      }));
      first = false;
    }
  }
}

const border = { style: BorderStyle.SINGLE, size: 4, color: "BFBFBF" };
const borders = { top: border, bottom: border, left: border, right: border };

function table(tok) {
  const n = tok.header.length;
  const w = Math.floor(CONTENT_W / n);
  const widths = Array(n).fill(w);
  const cell = (c, head) => new TableCell({
    borders, width: { size: w, type: WidthType.DXA },
    shading: head ? { fill: "DCE6F1", type: ShadingType.CLEAR, color: "auto" } : undefined,
    margins: { top: 60, bottom: 60, left: 100, right: 100 },
    children: [new Paragraph({ children: inline(c.tokens, head ? { bold: true } : {}) })],
  });
  return new Table({
    width: { size: w * n, type: WidthType.DXA }, columnWidths: widths,
    layout: TableLayoutType.FIXED,
    rows: [new TableRow({ tableHeader: true, children: tok.header.map((c) => cell(c, true)) }),
      ...tok.rows.map((r) => new TableRow({ children: r.map((c) => cell(c, false)) }))],
  });
}

function blocks(tokens, ctx, quote = false) {
  const out = [];
  for (const t of tokens) {
    switch (t.type) {
      case "heading": {
        const lvl = [null, HeadingLevel.TITLE, HeadingLevel.HEADING_1, HeadingLevel.HEADING_2, HeadingLevel.HEADING_3][Math.min(t.depth, 4)];
        out.push(new Paragraph({ heading: lvl, children: inline(t.tokens) }));
        break;
      }
      case "paragraph":
        out.push(new Paragraph({
          children: inline(t.tokens),
          ...(quote ? {
            shading: { fill: "EEF4FB", type: ShadingType.CLEAR, color: "auto" },
            border: { left: { style: BorderStyle.SINGLE, size: 24, color: "2E75B6", space: 8 } },
            indent: { left: 240, right: 240 },
          } : {}),
        }));
        break;
      case "blockquote": out.push(...blocks(t.tokens, ctx, true)); break;
      case "list": {
        const arr = []; arr.numId = ctx.nextNum++;
        if (t.ordered) ctx.numConfigs.push(arr.numId);
        listParas(t, 0, arr); out.push(...arr);
        break;
      }
      case "table": out.push(table(t), new Paragraph({ children: [] })); break;
      case "hr":
        out.push(new Paragraph({ border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "BFBFBF", space: 1 } }, children: [] }));
        break;
      case "code": out.push(...t.text.split("\n").map((l) => new Paragraph({ children: [new TextRun({ text: l, font: "Consolas", size: 18 })] }))); break;
      case "space": case "html": break;
      default: if (t.text) out.push(new Paragraph({ children: textRuns(t.text) }));
    }
  }
  return out;
}

function metaTable(meta) {
  const rows = [["SEO title", meta.title], ["Meta description", meta.meta_description],
    ["URL slug", meta.slug], ["Target keyword", meta.target_keyword]];
  const w1 = 2400, w2 = CONTENT_W - w1;
  return new Table({
    width: { size: CONTENT_W, type: WidthType.DXA }, columnWidths: [w1, w2],
    rows: rows.map(([k, v]) => new TableRow({ children: [
      new TableCell({ borders, width: { size: w1, type: WidthType.DXA },
        shading: { fill: "F2F2F2", type: ShadingType.CLEAR, color: "auto" },
        margins: { top: 60, bottom: 60, left: 100, right: 100 },
        children: [new Paragraph({ children: [new TextRun({ text: k, bold: true, size: 20 })] })] }),
      new TableCell({ borders, width: { size: w2, type: WidthType.DXA },
        margins: { top: 60, bottom: 60, left: 100, right: 100 },
        children: [new Paragraph({ children: [new TextRun({ text: v || "", size: 20 })] })] }),
    ] })),
  });
}

async function build(mdPath, outPath) {
  const raw = fs.readFileSync(mdPath, "utf8");
  const m = raw.match(/^---\n([\s\S]*?)\n---\n/);
  const meta = {};
  if (m) for (const l of m[1].split("\n")) {
    const i = l.indexOf(":"); if (i > 0) meta[l.slice(0, i).trim()] = l.slice(i + 1).trim().replace(/^"|"$/g, "");
  }
  const body = m ? raw.slice(m[0].length) : raw;
  const ctx = { nextNum: 1, numConfigs: [] };
  const content = blocks(marked.lexer(body), ctx);
  const nums = [{ reference: "bullets", levels: [0, 1, 2].map((lv) => ({
    level: lv, format: LevelFormat.BULLET, text: ["•", "◦", "▪"][lv], alignment: AlignmentType.LEFT,
    style: { paragraph: { indent: { left: 720 * (lv + 1), hanging: 360 } } } })) },
  ...ctx.numConfigs.map((id) => ({ reference: `num-${id}`, levels: [0, 1].map((lv) => ({
    level: lv, format: lv ? LevelFormat.LOWER_LETTER : LevelFormat.DECIMAL, text: `%${lv + 1}.`,
    alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720 * (lv + 1), hanging: 360 } } } })) }))];

  const doc = new Document({
    creator: "Editorial team", title: meta.title || path.basename(outPath, ".docx"),
    description: meta.meta_description || "",
    styles: {
      default: { document: { run: { font: FONT, size: 22 }, paragraph: { spacing: { after: 140, line: 276 } } } },
      paragraphStyles: [
        { id: "Title", name: "Title", basedOn: "Normal", next: "Normal", run: { size: 40, bold: true, color: "1F3864", font: FONT }, paragraph: { spacing: { before: 240, after: 240 } } },
        { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 30, bold: true, color: "1F3864", font: FONT }, paragraph: { spacing: { before: 320, after: 120 }, outlineLevel: 0 } },
        { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 25, bold: true, color: "2E75B6", font: FONT }, paragraph: { spacing: { before: 240, after: 100 }, outlineLevel: 1 } },
      ],
      characterStyles: [{ id: "Hyperlink", name: "Hyperlink", basedOn: "DefaultParagraphFont", run: { color: "0563C1", underline: { type: "single" } } }],
    },
    numbering: { config: nums },
    sections: [{
      properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
      footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER,
        children: [new TextRun({ children: [PageNumber.CURRENT], size: 18, color: "808080" })] })] }) },
      children: [metaTable(meta),
        new Paragraph({ spacing: { before: 120 }, children: [new TextRun({ text: "Highlighted tags are open items to resolve before publishing.", italics: true, size: 18, color: "808080" })] }),
        ...content],
    }],
  });
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, await Packer.toBuffer(doc));
}

(async () => {
  const base = path.join(ROOT, "articles");
  for (const cat of fs.readdirSync(base).sort()) {
    for (const slug of fs.readdirSync(path.join(base, cat)).sort()) {
      const md = path.join(base, cat, slug, "article.md");
      if (!fs.existsSync(md)) continue;
      const out = path.join(OUT, cat, `${slug}.docx`);
      await build(md, out);
      console.log("wrote", path.relative(ROOT, out));
    }
  }
})().catch((e) => { console.error(e); process.exit(1); });
