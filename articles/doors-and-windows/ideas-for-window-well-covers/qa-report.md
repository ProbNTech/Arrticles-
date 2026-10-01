# QA report: ideas for window well covers

## Issues found

| # | Location | Problem | Fix applied / left open |
|---|---|---|---|
| 1 | article.md, cost H2 | Three [COST NEEDED] tags plus a HomeAdvisor PARTIAL SOURCE note | **Fixed.** Replaced with HomeAdvisor's per-material ranges, attributed by name and linked inline: plastic $70–$200, polycarbonate $200–$300, metal $300–$700, custom metalwork up to $2,000 per well. Other guides give different figures (HomeGuide lists $250–$500+; CostOwl's snippet ran higher for polycarbonate), so the text calls the ranges ballpark figures. A HomeGuide PARTIAL SOURCE note was added because the snippet could not be tied to one HomeGuide page for certain. |
| 2 | article.md, first H2 | The 44-inch egress ladder rule was tagged [VERIFY] | **Fixed.** Linked to ICC's 2021 IRC R310.4.2 page, which is a jurisdiction-general model code. Added a line telling readers to confirm with their local code. |
| 3 | article.md, cost H2 | The sibling article "how to measure window well covers" was mentioned but not linked | **Fixed.** Added the relative link `/how-to-measure-window-well-covers/`. |
| 4 | article.md, experience H2 | "Until then, the takeaway..." read like an editor's note in published copy | **Fixed.** Removed "Until then." |
| 5 | seo.md, BreadcrumbList | Used the made-up placeholder `[SITE URL]` | **Fixed.** Changed to `{{SITE_URL}}`. |
| 6 | seo.md, meta description | The character count was given as 148; the real count is 147 | **Fixed.** |
| 7 | seo.md, FAQ 2 (in the list and the JSON) | The answer made claims the article never establishes ("common DIY job", "hire a pro for custom fits") | **Fixed.** Rewrote it using only article facts: the clip-down sheet is the simplest build, the local building department reviews egress plans, and a licensed electrician handles wiring. |
| 8 | seo.md, FAQ 3 (in the list and the JSON) | "Heavier or fixed covers may work there" went beyond what the article says | **Fixed.** Rewrote it to match the article's "you have more freedom" framing. |
| 9 | seo.md, internal links | The sibling article was not given as a path | **Fixed.** Now links to `/how-to-measure-window-well-covers/`. Other suggestions have no sibling article, so they stay plain text. |
| 10 | article.md, cost H2 | Diamondback and Mountainland custom prices ($329–$519) are above HomeAdvisor's $200–$300 polycarbonate range | **Left as is.** The two are consistent because the higher prices are custom covers. They keep their [VERIFY] tag because they are snippet-sourced sale prices. |
| 11 | article.md, first H2 | A [VERIFY] tag sits on the local-building-department advice rather than on a factual claim | **Left open.** It is harmless and the safety rule keeps it, but an editor may move or drop it. |

Checks that passed:
- There is one H1, and the keyword appears in the first 100 words.
- There are no duplicate H2s.
- Correctly, there is no Quick Answer box, because this is an informational listicle.
- The editorial disclosure line is present, and there are no CTAs.
- No first person is used as a hands-on doer.
- US spelling is used throughout, and none of the banned AI phrases appear.
- The electrical passage carries a licensed-electrician line.
- The title is 52 characters, the meta description 147, and the slug is 5 words.
- The front matter matches seo.md.
- All 3 JSON blocks parse.
- No FAQ question duplicates an H2.
- There are no `#:~:text` fragments and no example.com links.

## Tags resolved this pass
- [COST NEEDED] x3 and the HomeAdvisor PARTIAL SOURCE. Source: https://www.homeadvisor.com/cost/doors-and-windows/install-a-window-well-cover/. This was confirmed by a search restricted to homeadvisor.com, where this page was the top result and matched the per-material figures. It was cross-checked against HomeGuide and CostOwl.
- [VERIFY] on the 44-inch ladder rule. Source: https://codes.iccsafe.org/s/IRC2021P2/part-iii-building-planning-and-construction/IRC2021P2-Pt03-Ch03-SecR310.4.2

## Tags still open
- [VERIFY] on the local building department check (line 20).
- [VERIFY] on the MacCourt bubble cover's weight claim. A search found nothing explicit.
- [STAT NEEDED] on the grate load rating. Snippets cite "ICC 40 psf" and 100 psf for commercial grates, but none could be tied to an exact URL.
- [EXAMPLE NEEDED] for corrugated metal.
- [VERIFY] on the DIY plan review.
- [VERIFY] on wood chips and the drain.
- [VERIFY] on the NEC (a safety tag).
- [PARTIAL SOURCE] for HomeGuide (new this pass).
- [VERIFY] on the Diamondback and Mountainland prices.
- [PARTIAL SOURCE] for the DoItYourself thread.
- [USER EXPERIENCE NEEDED] on plastic covers cracking. The search found no specific, linkable post.
- [EXAMPLE NEEDED] for the inspector account.
- [VERIFY] on the "Lowest cost" table row.

## Word count
The body is 1,584 words (`wc -w`, front matter excluded). The target was 1,500–1,600, so it is within range.

## Searches used: 8/8
1. HomeGuide window well cover cost
2. Angi/HomeAdvisor cover cost by material
3. HomeAdvisor-only cover cost by material
4. A broad cover cost cross-check, excluding HomeAdvisor
5. ICC IRC R310 44-inch ladder rule
6. A forum account of a plastic cover cracking (nothing usable)
7. MacCourt weight claim (nothing usable)
8. Grate load rating in psf (no clear attribution)
