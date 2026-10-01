# QA Report: How to Modernize Your Home Interior

## Issues found

| # | Location | Problem | Fix applied / left open |
|---|---|---|---|
| 1 | article.md, lighting / Choose the Right Bulb | energy.gov URL carried a `#:~:text&` text-fragment suffix | Fixed: suffix removed, URL otherwise unchanged |
| 2 | article.md, same sentence | "can last 25 times longer" overstated DOE's "up to" wording | Fixed: "can last up to 25 times longer" |
| 3 | article.md, paint section (trim bullet) | Banned phrase "seamless look" | Fixed: "makes the room look clean and unbroken" |
| 4 | article.md, paint section | [COST NEEDED] + PARTIAL SOURCE (Angi) for whole-interior painting | Fixed: resolved with Angi figures and inline link |
| 5 | article.md, Swap Out Old Light Fixtures | [COST NEEDED] + PARTIAL SOURCE (HomeGuide) for fixture replacement | Fixed: resolved with HomeGuide figures and inline link |
| 6 | article.md, hardware section | [COST NEEDED] for hardware | Fixed: resolved with HomeGuide cabinet-hardware figures |
| 7 | article.md, floors section | [COST NEEDED] for hardwood refinishing; "may cost less than replacing" was an unsourced comparison | Fixed: resolved with NerdWallet refinishing figures; comparison reworded to "price out refinishing before you replace it" |
| 8 | article.md, kitchen section | [COST NEEDED] for countertops | Fixed: resolved with Angi countertop installation figures |
| 9 | article.md, paint section | NAR "painting one interior room = Joy Score 10" — a search summary of the NAR 2025 report gave 9.3 | Left open: [VERIFY] added. Sources disagree; the PDF needs a human check |
| 10 | article.md, paint section | NAR "50% whole home / 41% one room": a search summary said painting one room (41%) was the *most frequent* recommendation, which contradicts 50% for the whole home | Left open: [VERIFY] added |
| 11 | article.md, kitchen section | NAR "kitchen upgrade Joy Score 10" not confirmed by this pass's search | Left open: [VERIFY] added |
| 12 | seo.md, FAQ 3 (text + JSON) | Answer relied on the now-[VERIFY] 50% Realtor stat | Fixed: answer now cites only the confirmed 118% wood-flooring figure |
| 13 | seo.md, BreadcrumbList | `example.com` placeholder domain | Fixed: replaced with `{{SITE_URL}}` |
| 14 | seo.md, internal links | No links to real sibling articles | Fixed: added 6 sibling links (/how-to-mimic-sunlight-indoors/, /how-to-install-hardwood-flooring/, /kitchen-ideas-for-mobile-home-remodel/, /can-you-remove-walls-in-a-mobile-home/, /pocket-door-for-small-bathroom/, /mobile-home-renovation-cost/); other topics kept as plain suggestions |
| 15 | article.md, lighting safety note | NEC sentence ~40 words (reading level) | Fixed: split into three sentences; [VERIFY] and licensed-pro line kept |
| 16 | article.md, hardware section + conclusion | Filler ("Small parts you touch every day add up fast", repeating the prior line; "Small wins build momentum.") | Fixed: cut |

Checks that passed: one H1; keyword in first 100 words; no duplicate H2s; Quick Answer 54 words, standalone, with licensed-pro line; safety lines on electrical, ladder, and load-bearing-wall passages; no first-person doer voice; disclosure line present; no CTA; US spelling; title 58 chars, meta 151 chars, slug 6 words; front matter matches seo.md; all 3 JSON blocks parse; FAQ questions do not duplicate H2s.

## Tags resolved in this pass

| Tag | Resolved as | Source |
|---|---|---|
| [COST NEEDED] interior painting | $965–$3,089, avg about $2,022 | https://www.angi.com/articles/how-much-does-it-cost-paint-interior-house.htm |
| [COST NEEDED] light fixture replacement | $100–$700 with pro installation | https://homeguide.com/costs/cost-to-replace-or-repair-a-light-fixture |
| [COST NEEDED] hardware | $1–$30/piece materials; $6–$60/piece installed | https://homeguide.com/costs/cost-to-install-cabinet-hardware |
| [COST NEEDED] hardwood refinishing | $3–$8/sq ft; $1,100–$2,700 avg | https://www.nerdwallet.com/home-ownership/home-improvement/learn/cost-to-refinish-hardwood-floors |
| [COST NEEDED] countertops | $1,882–$4,485 avg; $40–$150/sq ft installed | https://www.angi.com/articles/how-much-does-it-cost-install-countertops.htm |
| PARTIAL SOURCE (Angi paint), PARTIAL SOURCE (HomeGuide fixture) | Removed; figures now tied to those exact URLs | as above |

Note: each cost is single-source (the brief asks for 2 searches per cost). Budget allowed one search per cost. All are 2026 pages.

## Tags still open

- [VERIFY] NAR Joy Score 10 for painting one room (conflicting search summary: 9.3)
- [VERIFY] NAR 50% / 41% Realtor painting recommendations (possible contradiction)
- [VERIFY] NAR kitchen upgrade Joy Score 10
- [VERIFY] permit/inspection rules for fixture swaps (safety/code, stays open by rule)
- [VERIFY] NEC-based local electrical code (safety/code)
- [VERIFY] permit rules for wall removal (safety/code)
- [PARTIAL SOURCE: lumens.com] 2700K–3000K warm white (not searched; lower priority)
- [USER EXPERIENCE NEEDED] homeowner account section

Confirmed this pass: NAR 2025 new wood flooring cost recovery of 118%.
The official NAR PDF found in search (for checking items 9–11): https://cms.nar.realtor/sites/default/files/2025-04/2025-remodeling-impact-report_04-09-2025.pdf

## Word count

Body after edits: ~2,110 words (link URLs, table dividers and tags excluded). Target 1,800–2,000; within ±10% (max 2,200). Before QA it was ~1,973.

## Searches used: 8/8

1. site:angi.com cost to paint interior of house
2. site:homeguide.com cost to replace light fixture
3. site:homeguide.com cost to refinish hardwood floors per square foot (returned NerdWallet and others)
4. site:angi.com countertop installation cost
5. cost to replace cabinet hardware knobs pulls per piece
6. site:nerdwallet.com cost to refinish hardwood floors
7. site:homeguide.com cost to install cabinet hardware per piece
8. NAR 2025 Remodeling Impact Report new wood flooring cost recovered Joy Score paint interior room
