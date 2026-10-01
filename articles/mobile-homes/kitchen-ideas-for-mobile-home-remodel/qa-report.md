# QA Report: Kitchen Ideas for Mobile Home Remodel

## Issues found

| # | Location | Problem | Fix applied / left open |
|---|----------|---------|-------------------------|
| 1 | seo.md FAQ 3 (sink) + JSON-LD | Answer relied on the unresolved [VERIFY] plumbing-through-floor claim | Fixed. The article claim is now sourced (Mainstream plumbing guide), and the FAQ text was reworded to match the sourced claim exactly, in both the list and the JSON |
| 2 | seo.md FAQ 2 (granite) + JSON-LD | Answer relied on the unresolved [VERIFY] countertop-weight claim, and it also claimed butcher block is lighter (unsourced) | Fixed. Sourced to Slabwise in the article. The FAQ now says only "granite weighs several times more per square foot than laminate" |
| 3 | seo.md FAQ note | Note said the schema must wait on [VERIFY] tags | Updated to name the sources now used |
| 4 | article.md, "What makes... different?" | Plumbing-through-belly claim was [VERIFY] | Resolved with an inline link (search returned the claim tied to that URL) |
| 5 | article.md, same section | "Since mid-1976" federal code was [VERIFY] | Resolved as "since 1976" and linked to themhpexchange.com (its title ties HUD standards to 1976). "mid-" dropped because the June date was not tied to a single URL |
| 6 | article.md, island section | 36–42 in. clearance was [VERIFY] and vague | Resolved. Now: NKBA guideline of 42 in. work aisle (one cook) and 36 in. walkway, linked to Lily Ann Cabinets (confirmed by a site-restricted search) |
| 7 | article.md, countertops | Laminate/butcher block lighter than stone was [VERIFY] | Granite vs. laminate resolved (Slabwise). The butcher-block weight claim was removed instead of being asserted, and readers are told to check its weight with the seller |
| 8 | article.md, cabinet paint | Bonding primer claim [VERIFY] | Changed to [PARTIAL SOURCE: hunker.com…]. The Hunker title matches the topic, but the summary did not tie the exact steps to that URL |
| 9 | article.md, cost section | [COST NEEDED] on "prices vary a lot by region" | The unsourced claim was removed. The sentence is now plain advice ("compare prices"), so no tag is needed |
| 10 | article.md, lighting | "Lighting makes a huge difference" (generic) | Rewritten as "Good lighting helps a lot." |
| 11 | seo.md BreadcrumbList | example.com placeholder domain | Replaced with {{SITE_URL}} |
| 12 | seo.md internal links | No sibling articles linked | Added 4 sibling links: /mobile-home-renovation-cost/, /can-you-remove-walls-in-a-mobile-home/, /how-to-modernize-your-home-interior/, /how-to-mimic-sunlight-indoors/. Other topics kept as plain suggestions. The "remodel costs by room" bullet was merged into the renovation-cost link |

Checks that passed with no change: one H1; keyword in the first 100 words; no duplicate H2s; FAQ questions don't duplicate H2s; title 58 chars, meta 152 chars, slug 6 words; front matter matches seo.md; all 3 JSON blocks parse; US spelling; editorial disclosure present; no CTA; no first-person doer voice; safety lines present for electrical, gas, structural and plumbing; no #:~:text URL fragments; Quick Answer box correctly absent (ideas/listicle format); cost math is plausible ($150–$250/sq ft × a small kitchen falls inside $3k–$20k).

## Tags resolved this pass
- Plumbing through the floor/belly: https://mainstreamhomeservices.com/blog/mobile-home-plumbing-guide/
- Federal code since 1976: https://themhpexchange.com/post/how-hud-standards-in-1976-revolutionized-the-factory-built-home-industry
- Island clearance (NKBA 42 in. / 36 in.): https://www.lilyanncabinets.com/cabinet-articles/kitchen-island-overhang/
- Granite vs. laminate weight: https://slabwise.com/questions/countertop-weight
- [COST NEEDED] (regional pricing): removed by dropping the unsourced claim, not resolved with a figure

## Tags still open
- L24 [VERIFY]: whether remodel permits are set by state/local departments and required for alterations (safety rule; needs a jurisdiction-general source)
- L36 [PARTIAL SOURCE: hunker.com]: vinyl/laminate cabinet prep and bonding primer
- L62 [VERIFY]: primer for vinyl-covered wall panels
- L66 [VERIFY]: NEC/local permit for hardwired lighting (safety rule)
- L84 [VERIFY]: non-standard manufactured-home cabinet sizes / no back panel
- L88 [VERIFY]: structural/permit safety note (safety rule)

## Word count
Body: ~1,540 words (wc -w, with front matter and link URLs excluded). Target: 1,400–1,500. That is about 3% over and within ±10%.

## Searches used: 8/8
1. mobile home sink plumbing through floor/underbelly
2. granite vs. laminate countertop weight
3. site:mainstreamhomeservices.com plumbing guide
4. site:slabwise.com countertop weight
5. HUD code 1976 effective date
6. NKBA island clearance
7. site:lilyanncabinets.com island clearance
8. painting vinyl-wrapped mobile home cabinets with bonding primer
