# Arrticles — Article Master Briefs

This repo holds the master brief prompts for our US home-improvement blog articles. Each brief is a copy of its Google Doc and sits in its own Markdown file, grouped into folders by topic.

Every brief uses the same step-by-step writing workflow. Only the **Article Brief** section changes from one file to the next: topic, search intent, keyword, audience and word count, plus the NeuronWriter semantic terms.

## How to use a brief

Open a brief and run each labeled step as a separate message in one conversation, in this order:

1. Master brief confirmation + competitor gap
2. Topical Entity Research
3. Outline
4. Intro (+ Quick Answer box)
5. Each body section
6. Conclusion
7. Full audit
8. Research & Source Resolution
9. Final clean rewrite
10. Publish formatting
11. SEO meta + slug

Each file starts with a front-matter block that lists the target keyword, search intent, word count and a link to the original Google Doc.

## Index

### Mobile homes — [`briefs/mobile-homes`](briefs/mobile-homes)

| Article | Intent | Words |
|---|---|---|
| [Mobile home renovation cost](briefs/mobile-homes/mobile-home-renovation-cost.md) | informational | 1700–1800 |
| [Kitchen ideas for mobile home remodel](briefs/mobile-homes/kitchen-ideas-for-mobile-home-remodel.md) | informational | 1400–1500 |
| [Can you remove walls in a mobile home?](briefs/mobile-homes/can-you-remove-walls-in-a-mobile-home.md) | informational / how-to | 1200–1300 |
| [Mobile home roof replacement cost](briefs/mobile-homes/mobile-home-roof-replacement-cost.md) | informational | 1600–1700 |

### Accessibility — [`briefs/accessibility`](briefs/accessibility)

| Article | Intent | Words |
|---|---|---|
| [Handicap bathroom remodel cost](briefs/accessibility/handicap-bathroom-remodel-cost.md) | informational | 2000–2100 |
| [Width of doorways for wheelchair access](briefs/accessibility/width-of-doorways-for-wheelchair-access.md) | informational | 1400–1500 |

### Interior design & lighting — [`briefs/interior-design-and-lighting`](briefs/interior-design-and-lighting)

| Article | Intent | Words |
|---|---|---|
| [How to modernize your home interior](briefs/interior-design-and-lighting/how-to-modernize-your-home-interior.md) | informational | 1800–2000 |
| [How to mimic sunlight indoors](briefs/interior-design-and-lighting/how-to-mimic-sunlight-indoors.md) | informational | _not set_ ⚠️ |
| [Walk-in closet dimensions](briefs/interior-design-and-lighting/walk-in-closet-dimensions.md) | informational | 1500–1600 |

### Doors & windows — [`briefs/doors-and-windows`](briefs/doors-and-windows)

| Article | Intent | Words |
|---|---|---|
| [Pocket door for small bathroom](briefs/doors-and-windows/pocket-door-for-small-bathroom.md) | informational | 12000–1300 ⚠️ |
| [Aluminium French door](briefs/doors-and-windows/aluminium-french-door.md) | informational | 1400–1500 |
| [How to measure window well covers](briefs/doors-and-windows/how-to-measure-window-well-covers.md) | informational | 1500–1600 |
| [Ideas for window well covers](briefs/doors-and-windows/ideas-for-window-well-covers.md) | informational | 1500–1600 |

### Flooring & stairs — [`briefs/flooring-and-stairs`](briefs/flooring-and-stairs)

| Article | Intent | Words |
|---|---|---|
| [How to install hardwood flooring](briefs/flooring-and-stairs/how-to-install-hardwood-flooring.md) | informational / how-to | 1500–1600 |
| [Parts of a staircase](briefs/flooring-and-stairs/parts-of-a-staircase.md) | informational | 1500–1600 |

### Additions & structural — [`briefs/additions-and-structural`](briefs/additions-and-structural)

| Article | Intent | Words |
|---|---|---|
| [ADU vs DADU](briefs/additions-and-structural/adu-vs-dadu.md) | informational | 1500–1600 |
| [House lifting methods](briefs/additions-and-structural/house-lifting-methods.md) | informational | 1600–1700 |
| [3-season vs 4-season room](briefs/additions-and-structural/3-season-vs-4-season-room.md) | informational / commercial investigation | 1400–1500 |

## Open issues copied from the source docs

These were copied exactly as they appear in the Google Docs. Fix them in the doc and here before running the brief:

- **How to mimic sunlight indoors**: the word count is still the placeholder `[WORDS]`.
- **Pocket door for small bathroom**: the word count reads `12000-1300`, which is probably a typo for `1200-1300`.

## Articles (drafts, QA'd)

Each brief has a written article in `articles/<category>/<slug>/`:

- `article.md`: the publish-ready article, with SEO title, slug and meta description in front matter
- `seo.md`: SEO title, meta, slug, FAQ / Article / HowTo / Breadcrumb JSON-LD, image placements, internal links
- `workflow-notes.md`: competitor gap, entity list, outline, full audit, research log and word-count check
- `qa-report.md`: what the QA pass found and fixed, which tags were resolved or left open, and the decisions left for a human editor

**URL conventions:** article URLs are flat (`{{SITE_URL}}/<slug>/`). Breadcrumbs go Home > category > article. Replace `{{SITE_URL}}` with the real domain before publishing.

**Status: not yet ready to publish.** Every article has had a QA pass, which covered:
- consistency, math and citation checks
- the safety rule, voice and US spelling
- SEO limits and JSON-LD validity
- internal links between the articles

Full source pages couldn't be opened during research (the network proxy blocked them), so every cited figure came from search-result summaries. An editor should click through each link before publishing. The remaining placeholder tags (`[VERIFY]`, `[COST NEEDED]`, `[USER EXPERIENCE NEEDED]`, `[PARTIAL SOURCE: …]`, …) are listed in each `qa-report.md`. Most of the `[VERIFY]` tags left are code and permit lines that the brief's safety rule keeps tagged on purpose.

| Article | Target words | Body words | Sources linked | Open tags | QA |
|---|---|---|---|---|---|
| [Handicap bathroom remodel cost](articles/accessibility/handicap-bathroom-remodel-cost/article.md) | 2000–2100 | 2199 | 11 | 26 | [QA report](articles/accessibility/handicap-bathroom-remodel-cost/qa-report.md) |
| [Width of doorways for wheelchair access](articles/accessibility/width-of-doorways-for-wheelchair-access/article.md) | 1400–1500 | 1566 | 10 | 5 | [QA report](articles/accessibility/width-of-doorways-for-wheelchair-access/qa-report.md) |
| [3 season vs 4 season room](articles/additions-and-structural/3-season-vs-4-season-room/article.md) | 1400–1500 | 1579 | 8 | 7 | [QA report](articles/additions-and-structural/3-season-vs-4-season-room/qa-report.md) |
| [Adu vs dadu](articles/additions-and-structural/adu-vs-dadu/article.md) | 1500–1600 | 1717 | 14 | 8 | [QA report](articles/additions-and-structural/adu-vs-dadu/qa-report.md) |
| [House lifting methods](articles/additions-and-structural/house-lifting-methods/article.md) | 1600–1700 | 1778 | 9 | 12 | [QA report](articles/additions-and-structural/house-lifting-methods/qa-report.md) |
| [Aluminium french door](articles/doors-and-windows/aluminium-french-door/article.md) | 1400–1500 | 1568 | 8 | 12 | [QA report](articles/doors-and-windows/aluminium-french-door/qa-report.md) |
| [How to measure window well covers](articles/doors-and-windows/how-to-measure-window-well-covers/article.md) | 1500–1600 | 1713 | 5 | 8 | [QA report](articles/doors-and-windows/how-to-measure-window-well-covers/qa-report.md) |
| [Ideas for window well covers](articles/doors-and-windows/ideas-for-window-well-covers/article.md) | 1500–1600 | 1586 | 11 | 13 | [QA report](articles/doors-and-windows/ideas-for-window-well-covers/qa-report.md) |
| [Pocket door for small bathroom](articles/doors-and-windows/pocket-door-for-small-bathroom/article.md) | 1200–1300 | 1337 | 6 | 12 | [QA report](articles/doors-and-windows/pocket-door-for-small-bathroom/qa-report.md) |
| [How to install hardwood flooring](articles/flooring-and-stairs/how-to-install-hardwood-flooring/article.md) | 1500–1600 | 1733 | 7 | 12 | [QA report](articles/flooring-and-stairs/how-to-install-hardwood-flooring/qa-report.md) |
| [Parts of a staircase](articles/flooring-and-stairs/parts-of-a-staircase/article.md) | 1500–1600 | 1716 | 12 | 10 | [QA report](articles/flooring-and-stairs/parts-of-a-staircase/qa-report.md) |
| [How to mimic sunlight indoors](articles/interior-design-and-lighting/how-to-mimic-sunlight-indoors/article.md) | 1500–1600 (assumed) | 1723 | 5 | 10 | [QA report](articles/interior-design-and-lighting/how-to-mimic-sunlight-indoors/qa-report.md) |
| [How to modernize your home interior](articles/interior-design-and-lighting/how-to-modernize-your-home-interior/article.md) | 1800–2000 | 2120 | 7 | 8 | [QA report](articles/interior-design-and-lighting/how-to-modernize-your-home-interior/qa-report.md) |
| [Walk in closet dimensions](articles/interior-design-and-lighting/walk-in-closet-dimensions/article.md) | 1500–1600 | 1727 | 8 | 3 | [QA report](articles/interior-design-and-lighting/walk-in-closet-dimensions/qa-report.md) |
| [Can you remove walls in a mobile home](articles/mobile-homes/can-you-remove-walls-in-a-mobile-home/article.md) | 1200–1300 | 1424 | 5 | 14 | [QA report](articles/mobile-homes/can-you-remove-walls-in-a-mobile-home/qa-report.md) |
| [Kitchen ideas for mobile home remodel](articles/mobile-homes/kitchen-ideas-for-mobile-home-remodel/article.md) | 1400–1500 | 1541 | 10 | 6 | [QA report](articles/mobile-homes/kitchen-ideas-for-mobile-home-remodel/qa-report.md) |
| [Mobile home renovation cost](articles/mobile-homes/mobile-home-renovation-cost/article.md) | 1700–1800 | 1862 | 8 | 13 | [QA report](articles/mobile-homes/mobile-home-renovation-cost/qa-report.md) |
| [Mobile home roof replacement cost](articles/mobile-homes/mobile-home-roof-replacement-cost/article.md) | 1600–1700 | 1832 | 10 | 15 | [QA report](articles/mobile-homes/mobile-home-roof-replacement-cost/qa-report.md) |
