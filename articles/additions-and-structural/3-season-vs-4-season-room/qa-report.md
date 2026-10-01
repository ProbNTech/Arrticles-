# QA report: 3-season-vs-4-season-room

## Issues found

| # | Location | Problem | Fix applied / left open |
|---|---|---|---|
| 1 | Intro, para 1–2 | The keyword showed up only as "Knowing the difference between a 3 season and 4 season room…" in paragraph 2, so the caller asked for an earlier, clearer placement | Fixed. Paragraph 1 now ends with "So what is the difference between a 3 season and 4 season room?" (about word 41 of the body). Paragraph 2 starts "Knowing the answer saves you…" |
| 2 | Codes H2, IECC sentence | A window U-factor of 0.50 in zones 4–8 is the older (2009-era) value. A search of newer IECC text shows 0.45 | Fixed. The sentence now says "about 0.45 in colder zones" and adds that the value and zones vary by code edition [VERIFY]. The U-factor still needs a human check against the edition in force locally |
| 3 | Value H2, ANSI Z765 | "Finished, heated, above-grade space" misstated the standard. ANSI Z765 defines finished area as "suitable for year-round use" | Fixed. The wording now matches the standard, and the existing MeasureFloorPlan link stays |
| 4 | Value H2, mini-split claim [VERIFY] | The claim that a room heated by a mini-split may not count conflicts with sources. Those sources say a space heater or window AC disqualifies a room, but a permanent heating and cooling system can qualify it | Fixed and resolved with a PlanSnapper citation (see below) |
| 5 | 4-season H2, safety para | [VERIFY] was attached to the licensed-pro recommendation, not to the unsourced claim that the room "needs a stronger foundation" | Fixed. The tag now sits on that claim ("often needs…"), and the safety line stays intact |
| 6 | Cost drivers, "Permits and local labor rates [COST NEEDED]" | Unresolved cost tag | Partly resolved. The bullet now gives a permit range, tagged [PARTIAL SOURCE: angi.com sunroom cost] because Angi ($250–$1,500) and HomeGuide ($200–$500) disagree and the search summary didn't tie each figure cleanly to its URL |
| 7 | Comparison table | Per-sq-ft figures appeared in the cost H2 but not in the table | Added the HomeGuide per-sq-ft ranges to the table so the two sections match. Math check: HomeGuide's 10x10 example of $8k–$23k equals $80–$230/sq ft, which is consistent |
| 8 | seo.md FAQ 4 | The answer relied on "heavier four-season room," which is linked to a [VERIFY] claim | Softened to "the sunroom's added load" in both the list and the JSON-LD |
| 9 | seo.md internal links | No links to sibling articles | Added /adu-vs-dadu/, /aluminium-french-door/ (US-spelled anchor text), /how-to-mimic-sunlight-indoors/ and /mobile-home-renovation-cost/. Other topics stay as plain suggestions |
| 10 | Codes H2, IRC categories | Checked Category IV and V descriptions against IRC R301.2.1.1.1 and UpCodes | No change needed. They match the search results |
| 11 | Houzz [PARTIAL SOURCE] | The thread still couldn't be confirmed | Left open |

Other checks passed: one H1; no duplicate H2s; FAQ questions differ from H2s; no Quick Answer box, which is correct for comparison intent; the disclosure line is present; no CTA; no first-person doer voice; US spelling; no example.com; no `#:~:text` fragments; title 50 chars; meta 149 chars; slug has 6 words; front matter matches seo.md; all 3 JSON blocks parse.

## Tags resolved this pass
- Mini-split/space-heater GLA [VERIFY]: resolved with https://plansnapper.com/learn/sunroom-square-footage-appraisal (a space heater or window AC doesn't qualify; a permanent HVAC system comparable to the house does).
- Permits [COST NEEDED]: converted to [PARTIAL SOURCE: https://www.angi.com/articles/how-much-does-sunroom-cost.htm]. Not fully resolved.

## Tags still open
- [VERIFY]: 4-season room often needs a stronger foundation, more electrical, and HVAC
- [VERIFY]: IECC window U-factor value/zones vary by edition
- [PARTIAL SOURCE]: permit fee range (Angi vs HomeGuide disagree)
- [STAT NEEDED]: resale return by room type
- [PARTIAL SOURCE]: Houzz homeowner accounts (thread 3444781 vs 3443686 unconfirmed)
- [VERIFY]: conversion may change code category/permits (safety rule)
- [COST NEEDED]: convert-later vs build-now. A search summary cited a $10k–$30k conversion cost, but it wasn't attributable to a specific URL, so it wasn't used

## Word count
1,577 words (wc -w, H1 through the disclosure line). The target is 1,400–1,500, so the allowed ±10% band is 1,260–1,650. Within range.

## Searches used: 7/8
1. HomeGuide sunroom cost 3/4-season per sq ft
2. IECC thermally isolated sunroom U-factor / R-values
3. IRC sunroom Categories IV/V
4. Houzz thread confirmation (not found)
5. ANSI Z765 finished area / sunroom GLA
6. Sunroom permit cost (Angi/HomeGuide)
7. Cost to convert 3-season to 4-season room
