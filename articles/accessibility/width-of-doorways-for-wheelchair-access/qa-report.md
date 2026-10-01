# QA report: width-of-doorways-for-wheelchair-access

## Issues found

| # | Location | Problem | Fix applied / left open |
|---|----------|---------|--------------------------|
| 1 | article.md, Quick Answer | "Many experts and builders prefer 36 inches" was an unsourced appeal to authority | Rewritten as advice ("If you can, aim for 36 inches...") with reasons; 54 words, standalone |
| 2 | article.md, first H2 | "many planners aim for 36 inches" unsourced generalization | Reworded to "it makes sense to aim for 36 inches" |
| 3 | article.md, "How wide is a wheelchair?" | Three [VERIFY] tags; manual range (23-27 in.) did not match source data | Replaced with Rehabmart figures (seat + ~8 in.; 18-in. seat = ~26 in.; 24-28 in. overall) and linked; transport claim linked to same guide; power chair figures updated and tagged [PARTIAL SOURCE] |
| 4 | article.md, cost section | "Simple fixes like hinges sit at the low end" implied Angi priced hinges; Angi's low end is a simple non-load-bearing job | Changed to "Simple jobs on a non-load-bearing wall" |
| 5 | article.md, cost section | Load-bearing [COST NEEDED] | Filled with $1,200-$6,000 plus [PARTIAL SOURCE] (search ties it to Angi but summaries blended two Angi pages) |
| 6 | seo.md, BreadcrumbList | example.com placeholder domain | Replaced with `{{SITE_URL}}`; JSON still parses |
| 7 | seo.md, internal links | No sibling articles linked | Added /handicap-bathroom-remodel-cost/, /pocket-door-for-small-bathroom/, /can-you-remove-walls-in-a-mobile-home/; removed the duplicate generic bathroom/pocket-door suggestions they replace |
| 8 | workflow-notes.md | Word count outdated | Updated |

Checked and passing: ADA 404.2.3 (32 in. min clear width, face of door to stop at 90 degrees; 36 in. for openings deeper than 24 in.), 403.5.1 (36 in., 32 in. for max 24 in. length), 304.3 (60-in. circle or T in 60-in. square), 404.2.4 (18 in. beyond latch, front approach pull side), FHA usable doors (nominal 32 in. = 31-5/8 in.; 34-in. door hung standard way acceptable inside units), ADA not applicable to private homes. All match the published standards. Other checks: one H1, keyword in first 100 words, no duplicate H2s, no AI stock phrases, US spelling, safety line present in widening section, disclosure line present, no CTA. Title 57 chars, meta 137 chars, slug 6 words; front matter matches seo.md. All JSON blocks parse. FAQ answers use only article facts, and no FAQ duplicates an H2. No `#:~:text` fragments.

## Tags resolved this pass
- Manual wheelchair width [VERIFY]: https://www.rehabmart.com/post/how-wide-are-wheelchairs (domain-restricted search)
- Transport wheelchair [VERIFY]: same Rehabmart guide
- Power chair [VERIFY]: converted to [PARTIAL SOURCE: https://www.1800wheelchair.com/news/what-is-the-average-size-of-a-electric-wheelchair/]
- Load-bearing [COST NEEDED]: converted to $1,200-$6,000 + [PARTIAL SOURCE: https://www.angi.com/articles/widening-doorway-cost.htm]

## Tags still open
- [VERIFY]: state/local residential accessibility rules (ADA scope section)
- [VERIFY]: permit/inspection rules (safety note)
- [COST NEEDED]: permit cost. Angi search results gave conflicting ranges ($50-$300 and $150-$500), probably from the two different Angi doorway pages, and could not be tied to one URL.
- [PARTIAL SOURCE] x2 (power chair widths; load-bearing cost)

## Word count
1,564 (`wc -w`, body after front matter, link URLs excluded, includes ~20 words of tag URLs) vs target 1,400-1,500. Within the +/-10% tolerance.

## Searches used: 7/8
1. site:angi.com widen doorway cost load-bearing header permit
2. Angi wheelchair doorway widening cost load-bearing permit (angi.com only)
3. "widening a doorway" load-bearing "$1,200 to $6,000" angi
4. standard adult manual wheelchair overall width
5. transport vs standard vs power wheelchair width (rehab sites)
6. Rehabmart "How Wide Are Wheelchairs" (rehabmart.com only)
7. 1800wheelchair electric wheelchair average width (1800wheelchair.com only)

