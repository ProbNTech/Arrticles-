# QA report: ADU vs DADU

## Issues found

| # | Location | Problem | Fix applied / left open |
|---|---|---|---|
| 1 | Cost section (Ballard paragraph) | "That works out to $325k–$400k (450–600 sq ft) and $375k–$550k (1,000 sq ft)" was presented as math from $400–$650/sq ft, but it doesn't compute (450–600 × $400–$650 = $180k–$390k; 1,000 × = $400k–$650k). | Fixed. Search confirmed these are the firm's own stated typical totals, so it is now worded and linked as such. |
| 2 | Zoning section, Seattle | Cited the odd `www.glb.seattle.gov` mirror subdomain; claim carried [VERIFY]. | Fixed. Replaced with the official `https://www.seattle.gov/sdci/permits/common-projects/accessory-dwelling-units` (returned by search). The search confirmed the 1,000/650 sq ft caps and no parking requirement, so [VERIFY] was removed. "Lowrise" is now explained. |
| 3 | Zoning section, Portland SDC | Cited the legacy `portlandoregon.gov/bds/article/569789` page and said "has waived" (past tense). It left out that the covenant also covers the main house. "SDC" was not explained. | Fixed. Now cites the current page `https://www.portland.gov/ppd/residential-permitting/adu-sdc-waiver`, uses present tense, says the covenant covers the ADU and the house, and explains system development charges. [VERIFY] removed. |
| 4 | Zoning section, Portland | Forced semantic term "Cities like Portland limit…" read awkwardly. | Fixed. Changed to "Portland limits…". The [VERIFY] on the 800 sq ft/75% rule stays because this pass didn't reconfirm it. |
| 5 | Zoning section, WA HB 1337 | [VERIFY] was attached to a sentence that was already a hedge. | Search (WA Legislature bill report, city summaries) confirmed two ADUs per lot, the owner-occupancy ban, and adoption deadlines that vary by city. [VERIFY] removed and the sentence now reads "how and when each city adopted it". |
| 6 | Cost section | [COST NEEDED] for a national attached-ADU range. | Partly resolved. Added Angi 2026 garage-to-ADU conversion at $60,000–$150,000. It fits with the UC Berkeley $90k median. Basement and addition ranges are still [COST NEEDED] (Angi's basement figures conflicted in the results, so they were not used). |
| 7 | Cost section, financing | [FACT NEEDED] on how lenders count ADU rent. | Resolved with Fannie Mae's 2026 policy (30% of qualifying income cap; purchase and limited cash-out refi; one-unit primary residence). |
| 8 | Privacy/rental section, property value | [STAT NEEDED]. | Replaced with Angi's figure (citing a NAR study) that ADUs add an average of 35%. [VERIFY] was added because this is a secondary citation, and the NAR study may measure listing prices rather than appraised value. A human should check the primary study. |
| 9 | Choose section | The site-visit recommendation didn't say "licensed". | Fixed. It now reads "a licensed ADU designer or general contractor". |
| 10 | seo.md FAQ 3 | The answer relied on "need permits in most places", which is still [VERIFY] in the body. | Fixed. It now says "check your local permit rules and building codes". |
| 11 | seo.md FAQ 2 | The covenant wording needed to match the corrected body. | Fixed in both the list and the JSON. |
| 12 | seo.md Breadcrumb JSON | Relative item URLs with no domain placeholder. | Fixed. Prefixed with `{{SITE_URL}}`. |
| 13 | seo.md internal links | No sibling articles were linked. | Added /3-season-vs-4-season-room/, /width-of-doorways-for-wheelchair-access/, /handicap-bathroom-remodel-cost/ and /pocket-door-for-small-bathroom/. The other topics stay as plain suggestions. |
| 14 | Slug | seo.md slug is `adu-vs-dadu-differences-costs`, but the site's sibling list uses `/adu-vs-dadu/`. | Left open for a human decision (see below). Both slugs are valid (lowercase, ≤6 words). |

Checks passed: one H1; keyword in the first 100 words; no duplicate H2s; question-style H2s; title 53 characters; meta 150 characters; front matter matches seo.md; both JSON blocks parse; no banned AI phrases; US spelling; no example.com; no `#:~:text` fragments; the Quick Answer is correctly omitted (comparison intent); the editorial disclosure is present; no CTA; safety/licensed-pro lines are intact.

## Tags resolved this pass (with sources)
- [FACT NEEDED] lender treatment of ADU rent: https://corr.pennymac.com/announcements/announcement-26-29
- [COST NEEDED] (partial: garage conversion): https://www.angi.com/articles/cost-to-convert-garage-to-adu.htm
- [STAT NEEDED] property value: https://www.angi.com/articles/how-much-value-does-an-adu-add.htm (now carries [VERIFY])
- [VERIFY] Seattle caps/parking: https://www.seattle.gov/sdci/permits/common-projects/accessory-dwelling-units
- [VERIFY] Portland SDC waiver/covenant: https://www.portland.gov/ppd/residential-permitting/adu-sdc-waiver
- [VERIFY] HB 1337 adoption: confirmed by https://lawfilesext.leg.wa.gov/biennium/2023-24/Pdf/Bill%20Reports/House/1337%20HBR%20HOUS%2023.pdf (the body still links the existing Commerce guidance PDF)
- Ballard totals: confirmed at https://ballardbackyardcottages.com/cost-to-build-a-dadu-in-seattle-2025-2026-update/

## Tags still open
- [COST NEEDED] national range for basement units and additions
- [STAT NEEDED] ×2: DADU rent premium vs attached; typical rents
- [VERIFY] ×5: table utilities row; Portland 800 sq ft/75% rule; "both types need permits in most places"; site visit assessing foundation/soil/sewer/electrical; 35% property value figure (secondary source)

## Word count
1,681 body words (`wc -w`, excluding front matter, link URLs and table pipes) vs a 1,500–1,600 target. That is within the ±10% tolerance. It was 1,593 before this pass.

## Searches used: 8/8
1. Seattle SDCI ADU size limits; 2. Portland SDC waiver covenant; 3. site:seattle.gov SDCI ADU page; 4. Ballard 2025–2026 DADU cost; 5. WA HB 1337; 6. Fannie Mae ADU rental income; 7. site:angi.com ADU conversion cost; 8. Angi ADU property value.
