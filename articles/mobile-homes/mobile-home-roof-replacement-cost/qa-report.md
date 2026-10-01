# QA Report: Mobile Home Roof Replacement Cost

## Issues found

| # | Location | Problem | Fix applied / left open |
|---|---|---|---|
| 1 | Cost table, Angi row | "Typical total" gave only an average; Angi's published range ($1,900–$9,500) was missing | Fixed: row now reads "$1,900–$9,500 (avg. about $5,000)", confirmed by site-restricted search |
| 2 | Material table vs. cost table | HomeGuide's metal ($2,500–$19,200 / $5,000–$32,000) and membrane ($2,000–$12,000 / $4,000–$20,000) ranges exceed HomeGuide's own overall single-/double-wide ranges ($1,500–$9,600 / $3,000–$16,000). Figures confirmed as HomeGuide's own, so this is an inconsistency in the source and could confuse readers | Fixed: added a sentence after the sources line explaining the top-end material figures are premium, large-roof jobs |
| 3 | Material section, shingles | Said shingles are an option "as part of a roof-over" [VERIFY]. HomeGuide says most contractors do not recommend shingles for flat mobile home roof-overs because of weight, so the claim contradicted a cited source | Fixed: replaced with the IRC 2:12 minimum slope (cited, framed as a model code for site-built homes) plus HomeGuide's weight note. A narrower [VERIFY] stays on whether IRC rules apply to HUD-code homes |
| 4 | Material section, lifespan | Lifespan by material unsourced [VERIFY] | Resolved: HomeGuide 10–80 years; metal 30–80 years |
| 5 | Data plate section | "HUD code since 1976" [VERIFY] and data plate location [PARTIAL SOURCE] | Resolved: June 15, 1976 date and the three data plate locations cited to HUD's labels page; contents updated to wind zone, snow load and roof load per that page |
| 6 | Recoat/repair/replace, Repair bullet | [COST NEEDED] | Resolved with HomeGuide flat roof repair average ($300–$1,100), labeled as general flat-roof figures |
| 7 | seo.md meta description | Character note said 153; actual is 154 (still ≤155) | Fixed note |
| 8 | seo.md FAQ #3 | Lifespan claim relied on an unresolved [VERIFY] | Fixed: now uses HomeGuide's 30–80-year metal figure, which the article establishes. JSON re-validated |
| 9 | seo.md internal links | No links to sibling articles | Fixed: added /mobile-home-renovation-cost/, /can-you-remove-walls-in-a-mobile-home/, /kitchen-ideas-for-mobile-home-remodel/; other topics kept as plain suggestions |
| 10 | Fixr figures (table, triple-wide, FAQ #4) | Needed confirmation | Confirmed by search; math checks out (e.g., 2,050 sq ft × $4.50 = $9,225) |
| 11 | Quick Answer | Checked: 55 words, standalone, safety line present, figures match table min/max | No change |
| 12 | Structure / SEO | One H1, keyword in first 100 words, no duplicate H2s, title 51 chars, slug 5 words, front matter matches seo.md, no example.com, no text fragments | No change |
| 13 | Voice / safety / localization | First-person-as-doer absent, disclosure present, no CTA, safety notes in roof-over and data plate sections, US spelling | No change |

## Tags resolved this pass
- [VERIFY] material lifespans → https://homeguide.com/costs/mobile-home-roof-replacement-cost
- [VERIFY] HUD code since 1976 → https://www.hud.gov/hud-partners/manufactured-home-labels
- [PARTIAL SOURCE] data plate location/contents → https://www.hud.gov/hud-partners/manufactured-home-labels
- [VERIFY] shingles need pitch → https://codes.iccsafe.org/content/IRC2018/chapter-9-roof-assemblies (2:12 minimum) and HomeGuide's mobile home roof page (shingles not recommended for flat roof-overs); replaced by a narrower [VERIFY] on HUD-code applicability
- [COST NEEDED] repair cost → https://homeguide.com/costs/flat-roof-repair-cost
- Confirmed without tag change: all Fixr, Angi and HomeGuide figures in both tables and the roof-over price.

## Tags still open (15)
- 12 × [VERIFY]: IRC applicability to HUD-code homes; permit/community approval; bowstring trusses; layer limits; missing data plate next steps; coating heat reflection; repeated repairs vs. replacement; coating recoat interval; Garage Journal account; Homesteading Today account; who pulls the permit / community sign-off; park rules on roof types
- [STAT NEEDED] regional labor variation
- [COST NEEDED] permit fees
- [PARTIAL SOURCE: RoofVista] truss load capacity vs. site-built homes

## Word count
- Final body: 1,828 words (H1 through disclosure, URLs excluded). Target 1,600–1,700; +10% ceiling 1,870. Within tolerance.

## Searches used: 8/8
1. homeguide.com mobile home roof cost by material/width
2. angi.com mobile home roof per sq ft / width
3. fixr.com mobile home roof by width/sq ft
4. hud.gov data plate / 1976
5. angi/homeguide/fixr mobile home roof repair cost
6. iccsafe.org IRC R905.2.2 shingle slope
7. homeguide.com flat roof repair cost
8. homeguide.com roof lifespans by material
