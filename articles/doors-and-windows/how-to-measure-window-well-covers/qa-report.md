# QA report: how to measure window well covers

## Issues found

| # | Location | Problem | Fix applied / left open (reason) |
|---|----------|---------|----------------------------------|
| 1 | Quick Answer + Step 2 | "Nearest 1/8 inch" stated as what makers ask for; search showed Guardian asks to round **up to the nearest half inch** for some rectangular covers, contradicting the claim | Fixed: Step 2 now says record exactly (1/8 inch if you can), then follow the seller's rounding rule, with the Guardian half-inch example. Quick Answer changed to "record both precisely". Tag kept as PARTIAL SOURCE (search summary, page not fetched). |
| 2 | Why a wrong measurement... | Cost "$30 to $2,000" not found on the cited HomeAdvisor page; HomeAdvisor results show plastic $70–$200, metal $300–$700, labor $40–$100. Angi results confirmed plastic $70–$200 | Fixed: replaced with HomeAdvisor figures, inline link, PARTIAL tag removed. |
| 3 | Egress section | "Some sources also cite a maximum opening force [VERIFY]" was vague; IRC R310.4 wording is "force greater than that required for the normal operation of the escape and rescue opening" (no fixed lb number) | Fixed: sentence rewritten to the code's wording; kept under the existing PARTIAL SOURCE (jaspector) tag since the exact page attribution is still unconfirmed. Stray [VERIFY] removed. |
| 4 | Step 5 | Top-of-well to top-of-window-frame, both sides, was PARTIAL | Resolved: search tied it clearly to Window Well Experts' blog guide; now an inline link. Window-type detail (slider, crank-out) not confirmed, so it carries [VERIFY]; "double-hung, glass block" dropped as unverified. |
| 5 | Step 1 | Flange/lip on metal wells [VERIFY] | Rewritten to "flat flange where they bolt to the house and a rolled lip along the top edge" with [PARTIAL SOURCE: surebuilt-usa.com] (search summary mentioned pre-punched flanges and rolled top edges; attribution across results ambiguous). |
| 6 | seo.md BreadcrumbList | `[SITE URL]` placeholder instead of `{{SITE_URL}}` | Fixed (3 item URLs + note). |
| 7 | seo.md FAQ Q4 | "What if my window well is made of stone or doesn't have a standard shape?" duplicates the H2 on odd-shaped wells | Replaced with "How much does a window well cover cost?" using the now-resolved HomeAdvisor figures (text + JSON-LD). |
| 8 | seo.md internal links | Sibling article not given as a relative path | Fixed: `/ideas-for-window-well-covers/`. Other suggestions have no sibling article and stay plain. |
| 9 | seo.md HowTo note/step 2 | Note referred to the cost still being PARTIAL; step 2 lacked the rounding caveat | Updated note; step 2 now says follow the seller's rounding rule. |
| 10 | workflow-notes.md | Final word count out of date | Updated to 1,676. |

Checks passed with no change: one H1; keyword in H1 and at ~word 90 of intro; no duplicate H2s; IRC figures (9 sq ft, 36 in, ladder over 44 in) correct; safety/pro lines present for sloped-cover drilling and foundation cutting; editorial disclosure present; no CTA; US spelling; no example.com; no `#:~:text` fragments; title 54 chars, meta 151 chars, slug 6 words; front matter matches seo.md; all JSON blocks parse; Quick Answer 57 words (incl. label), standalone.

## Tags resolved this pass
- Window above well measurement: https://windowwellexperts.com/blog/how-to-measure-window-well-covers/
- Cover cost and labor: https://www.homeadvisor.com/cost/doors-and-windows/install-a-window-well-cover/ (plastic range cross-checked against Angi search results)
- "Maximum opening force" [VERIFY]: replaced by the IRC R310.4 force wording (kept under existing PARTIAL tag)

## Tags still open
- Intro: made-to-order covers hard to return [VERIFY]
- Step 1: flange/rolled lip [PARTIAL SOURCE: surebuilt-usa.com]
- Step 2: Guardian half-inch rounding [PARTIAL SOURCE: guardiancovers.com measuring guides]
- Step 5: window type affects cover fit [VERIFY]
- Overhang: up to about 2 inches [VERIFY] (results mention 1–2 in, but attribution unclear and some pages are AI-style)
- Template section: shops accept templates/photos [VERIFY]
- Egress: IRC local adoption [VERIFY] (kept per safety rule)
- Egress: cover release from inside / force [PARTIAL SOURCE: jaspector.com]

## Word count
Body (intro through conclusion, excl. front matter, H1, disclosure): 1,676 words incl. Quick Answer (~1,619 without). Target 1,500–1,600; ceiling at +10% is 1,760. Within tolerance; no trim needed.

## Searches used: 8/8
1. site:homeadvisor.com window well cover cost  2. site:angi.com window well cover cost  3. IRC R310.4 covers force wording  4. site:dli.mn.gov egress cover release  5. site:guardiancovers.com 1/8 inch  6. site:windowwellexperts.com window above well  7. overhang "2 inches"  8. corrugated metal well flange/lip
