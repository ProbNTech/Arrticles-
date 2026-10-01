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

## Articles (drafts)

Each brief has a written article in `articles/<category>/<slug>/`:

- `article.md`: the publish-ready article, with SEO title, slug and meta description in front matter
- `seo.md`: SEO title, meta, slug, FAQ / Article / HowTo / Breadcrumb JSON-LD, image placements, internal links
- `workflow-notes.md`: competitor gap, entity list, outline, full audit, research log and word-count check

**Status: drafts, not yet ready to publish.** During research, full web pages could not be opened (the network proxy blocked them), and the session's 200-search limit ran out. So:

- Every cited figure comes from search-result summaries. An editor should click each link and confirm the figure before publishing.
- Claims that could not be sourced keep the brief's placeholder tags (`[VERIFY]`, `[COST NEEDED]`, `[USER EXPERIENCE NEEDED]`, `[PARTIAL SOURCE: …]`, …). Each article's `workflow-notes.md` research log lists them, with candidate sources where any were found.

| Article | Target words | Sources linked | Open tags |
|---|---|---|---|
| [Handicap bathroom remodel cost](articles/accessibility/handicap-bathroom-remodel-cost/article.md) | 2000–2100 | 9 | 30 |
| [Width of doorways for wheelchair access](articles/accessibility/width-of-doorways-for-wheelchair-access/article.md) | 1400–1500 | 9 | 7 |
| [3 season vs 4 season room](articles/additions-and-structural/3-season-vs-4-season-room/article.md) | 1400–1500 | 7 | 8 |
| [Adu vs dadu](articles/additions-and-structural/adu-vs-dadu/article.md) | 1500–1600 | 11 | 12 |
| [House lifting methods](articles/additions-and-structural/house-lifting-methods/article.md) | 1600–1700 | 8 | 11 |
| [Aluminium french door](articles/doors-and-windows/aluminium-french-door/article.md) | 1400–1500 | 5 | 14 |
| [How to measure window well covers](articles/doors-and-windows/how-to-measure-window-well-covers/article.md) | 1500–1600 | 3 | 10 |
| [Ideas for window well covers](articles/doors-and-windows/ideas-for-window-well-covers/article.md) | 1500–1600 | 9 | 17 |
| [Pocket door for small bathroom](articles/doors-and-windows/pocket-door-for-small-bathroom/article.md) | 1200–1300 | 3 | 14 |
| [How to install hardwood flooring](articles/flooring-and-stairs/how-to-install-hardwood-flooring/article.md) | 1500–1600 | 4 | 13 |
| [Parts of a staircase](articles/flooring-and-stairs/parts-of-a-staircase/article.md) | 1500–1600 | 8 | 9 |
| [How to mimic sunlight indoors](articles/interior-design-and-lighting/how-to-mimic-sunlight-indoors/article.md) | 1500–1600 (assumed) | 3 | 12 |
| [How to modernize your home interior](articles/interior-design-and-lighting/how-to-modernize-your-home-interior/article.md) | 1800–2000 | 2 | 12 |
| [Walk in closet dimensions](articles/interior-design-and-lighting/walk-in-closet-dimensions/article.md) | 1500–1600 | 4 | 9 |
| [Can you remove walls in a mobile home](articles/mobile-homes/can-you-remove-walls-in-a-mobile-home/article.md) | 1200–1300 | 2 | 20 |
| [Kitchen ideas for mobile home remodel](articles/mobile-homes/kitchen-ideas-for-mobile-home-remodel/article.md) | 1400–1500 | 6 | 11 |
| [Mobile home renovation cost](articles/mobile-homes/mobile-home-renovation-cost/article.md) | 1700–1800 | 5 | 19 |
| [Mobile home roof replacement cost](articles/mobile-homes/mobile-home-roof-replacement-cost/article.md) | 1600–1700 | 7 | 19 |
