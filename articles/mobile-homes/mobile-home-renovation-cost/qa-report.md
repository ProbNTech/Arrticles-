# QA Report: mobile-home-renovation-cost

QA pass date: 2026-10-01. Files edited: article.md, seo.md, workflow-notes.md (word count only). Sibling article `mobile-home-roof-replacement-cost/article.md` was read for roof-cost consistency; it was not edited.

## Issues found

| # | Location | Problem | Fix applied / left open (reason) |
|---|---|---|---|
| 1 | Roof section | Tear-off claim "$0.50 to $3.50 per sq ft" (attributed to Angi) did not match Angi's own page in this pass's search. That search returned "labor and removal $1.50–$4/sq ft" and "tear-off $1.20–$4/sq ft". The sibling roof article doesn't use $0.50–$3.50 either. | **Fixed.** Replaced it with Angi's "$300 to $2,000 for extra roof layer removal and structural repairs". The sibling article uses the same figure, and the Angi search confirmed it. |
| 2 | Roof section vs sibling roof article | This article gave only Angi's roof figures. The sibling article's Quick Answer uses wider multi-guide ranges (single-wide $1,300–$9,600, double-wide $1,875–$16,000). Readers could see the two as inconsistent. | **Fixed with a note.** The Angi figures ($1,900–$9,500 overall, ~$5,000 average, single-wide $1,300–$6,500, double-wide $3,150–$9,500) match the Angi row in the sibling's table exactly. I added a sentence saying other guides publish wider ranges, with an internal link to `/mobile-home-roof-replacement-cost/`. The $1,900–$9,500 overall range doesn't appear in the sibling article, but this pass's Angi search confirmed it. |
| 3 | Three tiers, "Full gut renovation" | [COST NEEDED] | **Resolved.** HomeGuide gives $40,000–$80,000. |
| 4 | Kitchen and Bathroom | Two [PARTIAL SOURCE] tags on the per-sq-ft figures | **Resolved.** The HomeGuide mobile home page ties the figures to that URL. I also added HomeGuide's project totals: kitchen $3,000–$20,000, bath $2,000–$17,600. |
| 5 | Flooring and Subfloor | [PARTIAL SOURCE] on the subfloor figures | **Resolved.** Angi's mobile home floor repair page confirms $2–$10/sq ft, $500–$700 typical, and $1,800–$3,000 for full replacement. |
| 6 | Exterior: skirting | [COST NEEDED] | **Resolved.** Angi gives a $2,400 average, with a range of $500–$7,700. |
| 7 | Flooring, Exterior, Permits | Bare citations with the anchor text "[HomeGuide]" / "[Angi]" placed after the sentence, not on the claim | **Fixed.** The links now sit on the specific figure, with descriptive anchor text. |
| 8 | What Real Renovators Say | [USER EXPERIENCE NEEDED] | **Resolved.** Added Our Repurposed Home's single-wide DIY remodel (under $3,000). It uses only details from the search excerpt tied to that URL. |
| 9 | H2s | "Cost Breakdown by Project" and "The Hidden Costs Most Budgets Miss" were not phrased as PAA questions | **Fixed.** They are now "What Do the Biggest Renovation Projects Cost?" and "What Hidden Costs Do Most Budgets Miss?" |
| 10 | Slug | The slug `mobile-home-renovation-cost-breakdown` didn't match the sibling-link path `/mobile-home-renovation-cost/` that other articles will use | **Fixed.** Changed it to `mobile-home-renovation-cost` in the article.md front matter, seo.md section 3 and the breadcrumb. A human should confirm (see below). |
| 11 | seo.md FAQ 1 | The answer relied on the article's unresolved [VERIFY] claim that pre-1976 homes hide outdated wiring and plumbing | **Fixed.** I rewrote it using only established facts (the HUD Code date and the article's licensed-electrician warning signs). Updated in both the list and the JSON. |
| 12 | seo.md FAQ 2 | The answer used the $7,500 Title I figure, which is still a [PARTIAL SOURCE] in the body | **Fixed.** I removed the specific figure and kept "lower loan limit" plus the advice to confirm with a lender. |
| 13 | seo.md Breadcrumb | Made-up `https://[your-domain]` placeholder | **Fixed.** Replaced with `{{SITE_URL}}`. |
| 14 | seo.md Internal links | Sibling suggestions had no paths, and several relevant siblings were missing | **Fixed.** Added `/slug/` paths for roof, kitchen ideas and remove-walls. I also added hardwood flooring, modernize interior, handicap bathroom cost and house lifting. Non-sibling topics are kept as plain suggestions. |
| 15 | seo.md Title | The character count note said 51; the actual count is 50 | **Fixed.** |
| 16 | Quick Answer | Checked: about 56 words, standalone, includes the safety line, and its figures match the body | No change needed. |
| 17 | Safety / voice / spelling | Checked: licensed-pro lines are present in the kitchen/bath, roof, leveling, older homes and DIY sections; there is no first-person doer; the disclosure line is present; there is no CTA; US spelling is used; none of the banned AI phrases were found | No change needed. |
| 18 | JSON blocks | All 3 parse (`python3 json.loads`) | OK. |
| 19 | Structure | One H1, keyword in the first 100 words, no duplicate H2s, no `#:~:text` fragments | OK. |

## Tags resolved this pass (with sources)
- Full gut [COST NEEDED] → https://homeguide.com/costs/mobile-home-renovation-cost
- Kitchen [PARTIAL SOURCE] → https://homeguide.com/costs/mobile-home-renovation-cost
- Bathroom [PARTIAL SOURCE] → https://homeguide.com/costs/mobile-home-renovation-cost
- Subfloor [PARTIAL SOURCE] → https://www.angi.com/articles/how-much-does-it-cost-fix-floors-mobile-home.htm
- Skirting [COST NEEDED] → https://www.angi.com/articles/mobile-home-skirting-installation.htm
- [USER EXPERIENCE NEEDED] → https://www.ourrepurposedhome.com/mobile-home-remodel/
- (Corrected figure, not a tag) Roof extra layer removal/structural $300–$2,000 → https://www.angi.com/articles/cost-to-replace-mobile-home-roof.htm

## Tags still open
- [VERIFY] marriage line repair claim (Single-Wide vs Double-Wide)
- [STAT NEEDED] regional labor variance
- [VERIFY] permit rules for plumbing/electrical/gas (Kitchen/Bath)
- [VERIFY] roof permit rules
- [VERIFY] permit need by jurisdiction (Hidden Costs)
- [VERIFY] pre-1976 homes hiding outdated wiring/plumbing
- [PARTIAL SOURCE: https://www.hud.gov/sites/documents/ti_pi_allowloanpar.doc] Title I limits $25,090 / $7,500. A hud.gov search returned the same figures, but in a generic summary. The HUD .doc is undated, and HUD has adjusted Title I manufactured-home limits since 2022, so the limits may have changed. Left open on purpose.
- [VERIFY] Title I through FHA-approved lenders
- [SOURCE NEEDED] other financing paths
- [STAT NEEDED] labor share of bids
- [VERIFY] DIY/pro permits; [VERIFY] load-bearing interior walls in manufactured homes
- [CASE STUDY NEEDED] a larger-scope project that documents hidden repairs. No linkable account was found.

## Word count
Body (excluding front matter): **1,861 words** (`wc -w`). The target is 1,700–1,800, so this is within ±10% (1,530–1,980). Before QA it was 1,738 by the same method (1,734 in workflow-notes).

## Searches used: 8/8
1. site:angi.com mobile home roof replacement cost / tear-off
2. mobile home skirting cost per linear foot (open)
3. site:angi.com mobile home skirting installation cost
4. site:homeguide.com mobile home renovation kitchen/bath/full gut
5. site:angi.com mobile home subfloor cost
6. site:hud.gov FHA Title I manufactured home limits
7. reddit renovated single-wide budget (open)
8. site:ourrepurposedhome.com single-wide remodel under $3,000

## For a human editor
- **Slug change:** `mobile-home-renovation-cost-breakdown` → `mobile-home-renovation-cost`, to match the sibling link paths. Revert it if the longer slug was intentional. If you do, update the sibling links that point to `/mobile-home-renovation-cost/`.
- **Breadcrumb path** uses `{{SITE_URL}}/mobile-homes/<slug>/`, but internal links use `/<slug>/`. Confirm the site's real URL structure.
- **Roof figures:** This article cites Angi only. The sibling roof article presents three guides with wider ranges. That is consistent, but not identical. Decide whether the Quick Answers should share one framing.
- **Angi tear-off:** The search excerpt gave two different tear-off figures ($1.20–$4/sq ft and $1.50–$4/sq ft for labor plus removal), so I avoided a per-sq-ft tear-off claim. Check the live Angi page if you want to add one back.
- **Our Repurposed Home example:** It is a DIY blog account, which is acceptable for a [USER EXPERIENCE NEEDED] tag under the brief. Spot-check the live page before publishing.
