# QA Report: How to Install Hardwood Flooring

## Issues found

| # | Location | Problem | Fix applied / left open (reason) |
|---|---|---|---|
| 1 | seo.md HowTo, step 3 | Schema said "Run boards perpendicular to the joists" as flat fact; the article tags that claim [VERIFY] | Fixed: reworded to "Plan the board direction (most installers run boards perpendicular to the floor joists)" to match the article's hedge; added "dry-lay rows to plan the stagger," which the article's Step 3 includes |
| 2 | seo.md HowTo, step 4 | Schema left out the article's "test the nailer on a scrap" instruction | Fixed: added it so the step text matches the article |
| 3 | seo.md HowTo supply list vs article supplies | Schema listed "Finish nails"; the article's supplies list didn't (though Steps 3 and 5 face-nail with a finish nailer) | Fixed: added "Finish nails for face-nailing the first and last rows" to the article's supplies list |
| 4 | article Step 4 | Nail spacing "6 to 10 inches… within a couple of inches of each end [VERIFY]" was unsourced and wider than the NWFA spec | Fixed: replaced with the NWFA nail-down spec (6–8 in., 1–3 in. from end joints, at least 2 per board, for 3/4 in. solid plank 3 in. or wider), with an inline link |
| 5 | article Step 3 | Expansion gap "1/2 to 3/4 inch [VERIFY]" | Partly fixed: changed to NWFA's about 3/4 inch for solid plank. Tagged [PARTIAL SOURCE] because the search summary didn't clearly tie the figure to the NWFA PDF |
| 6 | article cost H2 | The "$3 to $8/sq ft" labor figure didn't match the HomeAdvisor and Angi search results (which show $3–$6 nationally) | Fixed: national figure changed to $3–$6, still marked [PARTIAL SOURCE] + [COST NEEDED] because summaries mixed several pages. Added two linked Angi city figures (Dallas $3–$8, Houston $3–$9) |
| 7 | article intro | Said "One couple's biggest lesson"; the source shares two lessons, so "biggest" overstates it | Fixed: changed to "One lesson from a pair of DIY bloggers" |
| 8 | article Step 3 | "which looks best" stated as fact | Fixed: changed to "which many people find looks best" |
| 9 | article conclusion | "whether you're" (on the generic-phrase list) | Fixed: changed to "if you're" |
| 10 | seo.md FAQ (text + JSON) | The "tight schedule" reason in the hire-a-pro answer isn't established in the article | Fixed: answer now uses only the article's points (open plans, angles, closets, stairs) |
| 11 | seo.md title/meta counts | Labels said 55/149 characters; actual counts are 56/148 | Fixed the labels. Both are within limits |
| 12 | seo.md BreadcrumbList | Used a made-up placeholder domain, `https://[YOUR-DOMAIN]` | Fixed: replaced with `{{SITE_URL}}` |
| 13 | seo.md internal links | No links to sibling articles | Fixed: added /parts-of-a-staircase/, /how-to-modernize-your-home-interior/, /mobile-home-renovation-cost/. The other topics stay as plain suggestions |
| 14 | Checks that passed | One H1; keyword variant in the first 100 words; no duplicate H2s; Quick Answer is 59 words and standalone (no structural/electrical work, so no safety line needed); structural safety note present in Step 2; disclosure line present; no CTA; US spelling; all 4 JSON blocks parse; front matter matches seo.md; slug is 5 words; no `#:~:text` fragments; NWFA moisture (4%/2%) and flatness (1/4 in. in 10 ft or 3/16 in. in 6 ft) figures match the well-known NWFA values | None needed |
| 15 | article Step 1 citation | The moisture rule cites the 2008 NWFA edition hosted on aurorahardwood.com. A 2025 NWFA guideline exists at nwfa.org | Left open: the editor may want to re-cite the current NWFA PDF after checking that it gives the same 4%/2% rule. The 2008 date is already noted in the text |

## HowTo schema vs article steps
All 5 schema steps match the article's "Step 1"–"Step 5" H2s in order and by name (without the "Step N:" prefix). Each step's text now uses only what that article section states. Tool and supply lists match the article's lists. totalTime and estimatedCost are still left out correctly (time is [VERIFY]; cost is [COST NEEDED]).

## Tags resolved this pass
- Nail spacing [VERIFY]: resolved with the NWFA Installation Methods: Nail-Down (2019) PDF, https://www.wfswholesale.com/uploads/6/5/3/7/65378521/nwfa-installation-methods-2019.pdf
- Cost section: added city labor figures linked to https://www.angi.com/articles/how-much-does-hardwood-flooring-cost/tx/dallas and https://www.angi.com/articles/how-much-does-hardwood-flooring-cost/tx/houston. The national figure is still open.
- Expansion gap [VERIFY]: changed to [PARTIAL SOURCE: https://nwfa.org/wp-content/uploads/2026/02/NWFA-Installation-Guidelines.pdf]. This narrows the tag but does not fully resolve it.

## Tags still open
- [PARTIAL SOURCE: oregonfloortrends.com] (DIY difficulty)
- [VERIFY] beginner time per room
- [VERIFY] warranty void claim
- [VERIFY] extra material / waste allowance
- [VERIFY] 15-lb roofing felt
- [VERIFY] acclimation timing (text defers to the manufacturer)
- [VERIFY] structural repair / permit rules (safety; kept as the rule requires)
- [VERIFY] felt overlap
- [VERIFY] perpendicular to joists (NWFA PDFs seem to support this, but the summary was not clearly tied to a URL)
- [PARTIAL SOURCE: nwfa.org guidelines] expansion gap
- [PARTIAL SOURCE: homeadvisor.com] + [COST NEEDED] national labor $3–$6/sq ft (HomeAdvisor results mixed $3–$6, $4–$8 and $1–$15 across pages)

## Word count
Body (H1 through disclosure, link URLs excluded): 1,730 words, or about 1,714 without the PARTIAL SOURCE notes. Target 1,500–1,600; the ±10% limit is 1,760. Within the limit, near the top end.

## Searches used: 7/8
1. site:homeadvisor.com hardwood installation labor cost
2. homeadvisor.com-restricted hardwood installation cost 2025
3. homeadvisor install-wood-flooring labor phrase search
4. site:angi.com hardwood installation labor cost
5. NWFA perpendicular / expansion / fastener spacing
6. NWFA nail-down fastener spacing (restricted to oldewoodltd.com and wfswholesale.com)
7. NWFA expansion space 3/4" (restricted to nwfa.org, woodfloorbusiness.com, hardwoodfloorsmag.com)
