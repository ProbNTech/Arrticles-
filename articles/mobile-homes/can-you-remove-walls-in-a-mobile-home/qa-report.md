# QA Report: Can You Remove Walls in a Mobile Home?

## Issues found

| # | Location | Problem | Fix applied / left open |
|---|---|---|---|
| 1 | article.md, "Do You Need a Permit or an Engineer?" | Misattributed regulation. The article said HUD Part 3285 requires that an *alteration* add no loads unless designed by a registered PE/architect. Search of 24 CFR 3285.903 shows that engineer/architect clause applies to add-on or attached accessory structures, not to interior alterations. Only the "contact the LAHJ before any alteration" part applies. | Fixed. Removed the misattributed sentence and kept the LAHJ claim. The citation now points to the specific section URL (eCFR 3285.903) with descriptive anchor text. Added "ask your local building department whether it also requires an engineer's stamped plan [VERIFY]". |
| 2 | article.md, cost section | Two [COST NEEDED] tags plus two [PARTIAL SOURCE] notes on the headline cost claim. | Partly fixed. Non-load-bearing cost resolved as two attributed ranges (Angi $300–$1,000; HomeGuide $500–$2,000). Engineer fee resolved (HomeGuide $300–$1,000). Load-bearing total left as [COST NEEDED] because the sources disagree too much (see the open tags below). |
| 3 | article.md, load-bearing section | [PARTIAL SOURCE] mcmcommunities on the marriage line and ridge beam. | Resolved by a site search. Converted to an inline link, and added the guide's point that any full or partial wall on the line is load-bearing. The unsourced "Treat the marriage line as load-bearing every time" now rests on that point. |
| 4 | article.md, marriage wall section | Two [PARTIAL SOURCE] mcmcommunities notes (beam on posts; problems surfacing years later). | Resolved. Converted to inline links on the specific claims. |
| 5 | article.md, "What Other Owners Have Learned" | [USER EXPERIENCE NEEDED]: the account was linked but no details were given. | Resolved with details tied to the Rocky Hedge Farm page: they opened the kitchen and living room, the wall is two walls joined together and thicker, they hired a construction company to remove it and install a large beam, and they call it one of their best design choices. Written in the third person. |
| 6 | article.md, single-wide shear walls | Structural passage had no explicit pro line in the paragraph itself. | Added: "have a structural engineer check it before anything comes out." |
| 7 | article.md, "Which Walls Are Usually Safe" | "until a pro says otherwise" was vague for a structural call. | Changed to "until a structural engineer says otherwise." |
| 8 | seo.md FAQ #2 | The answer (resale/insurance) relied on an unresolved [VERIFY]. | Replaced with "Why is the marriage wall thicker than other interior walls?", which uses facts the article establishes. |
| 9 | seo.md FAQ #4 | Relied on the [VERIFY] claim that the manufacturer can identify structural walls from the serial number. | Reworded to use only the data plate, serial number and floor-plan step from the conclusion. |
| 10 | seo.md FAQ #3 | "Many single-wides have few or no load-bearing interior walls" rests on a [PARTIAL SOURCE]. | Softened to the shear-wall caution and an engineer check. A note in seo.md flags that it still depends on a partial source. |
| 11 | seo.md BreadcrumbList | Used `https://example.com`. | Replaced with `{{SITE_URL}}`. |
| 12 | seo.md internal links | No links to real sibling articles. | Added /mobile-home-renovation-cost/, /kitchen-ideas-for-mobile-home-remodel/, /mobile-home-roof-replacement-cost/ and /how-to-modernize-your-home-interior/. The other topics stay as plain suggestions. |
| 13 | seo.md notes | The FAQ and HowTo notes were out of date after the changes. | Updated. estimatedCost is still omitted because the load-bearing cost is unresolved. |
| 14 | article.md intro | Wordy hint sentence. | Tightened it, which saves words for the length budget. |

Checks that passed with no change: one H1; keyword in the first 100 words; no duplicate H2s; Quick Answer is 57 words, standalone and includes the engineer/permit line; title 60 chars; meta 140 chars; slug 5 words; front matter matches seo.md; every JSON block parses; US spelling; editorial disclosure present; no CTA; no first-person doer; no `#:~:text` fragments; no structural step-by-step.

## Tags resolved this pass

- Non-load-bearing wall cost [COST NEEDED]/[PARTIAL SOURCE angi]: https://www.angi.com/articles/how-much-does-it-cost-remove-wall.htm ($300–$1,000) and https://homeguide.com/costs/cost-to-remove-a-wall ($500–$2,000)
- Engineer fee [COST NEEDED]/[PARTIAL SOURCE homeguide]: https://homeguide.com/costs/cost-to-remove-a-wall ($300–$1,000 for load-bearing wall calculations). Angi's search summary gave $350–$800, which falls inside this range, but the figure was not tied clearly to one Angi URL, so Angi is not cited for it.
- Marriage line supports ridge beam, beam on posts, and problems years later (3 x [PARTIAL SOURCE]): https://www.mcmcommunities.com/blog/a-guide-to-removing-walls-in-a-mobile-home
- [USER EXPERIENCE NEEDED]: https://www.rockyhedgefarm.com/removing-the-marriage-wall-in-our-mobile-home/
- HUD citation narrowed to https://www.ecfr.gov/current/title-24/subtitle-B/chapter-XX/part-3285/subpart-J/section-3285.903

## Tags still open (14)

- [VERIFY] exterior walls off-limits (searches did not tie the claim to one URL)
- [PARTIAL SOURCE forum.mobilehome.com] single-wide shear walls
- [VERIFY] Florida/Gulf high-wind relevance
- [PARTIAL SOURCE manufacturedhomepartsandaccessories.com] ceiling-height sign
- [VERIFY] manufacturer can identify walls from the serial number
- [VERIFY] wiring/plumbing/ducts in walls
- [EXAMPLE NEEDED] drywall over vinyl panels
- [VERIFY] engineer's stamped plan required locally (new)
- [VERIFY] applicability to already-installed homes
- [VERIFY] local permit variation
- [VERIFY] land-lease community rules
- [VERIFY] resale/insurance impact
- [COST NEEDED] load-bearing wall removal total. Angi: avg $5,700; $1,200–$3,000 single-story; up to $10,000 multi-story. HomeGuide: $4,000–$10,000 single-story; $9,000–$15,000 multi-story. Too far apart to merge into one range.
- [VERIFY] mobile vs. site-built pricing

## Word count

1,424 (`wc -w`, H1 through disclosure) / about 1,412 prose. Target 1,200–1,300; the ±10% ceiling is 1,430. Within tolerance but near the top.

## Searches used: 7/8

1. site:angi.com wall removal cost; 2. site:homeguide.com wall removal + engineer; 3. Angi confirmation; 4. 24 CFR 3285.903; 5. site:mcmcommunities.com marriage line; 6. single-wide shear walls (no clean attribution, so nothing resolved); 7. site:rockyhedgefarm.com marriage wall.
