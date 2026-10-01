# QA Report: house-lifting-methods

## Issues found

| # | Location | Problem | Fix applied / left open (reason) |
|---|---|---|---|
| 1 | "Why Do Homeowners Lift a House?" | Flood-protection reason cited to Wikipedia (tertiary source) | Fixed: replaced with FEMA P-312 ch. 5 ("living area above all but the most severe floods"), confirmed by a fema.gov search |
| 2 | Same section | Renovation reason (new foundation / add floor) attributed to Wikipedia | Fixed: Wikipedia sentence removed; "new basement" bullet now links to HomeGuide, whose cost guide prices lifting plus a basement |
| 3 | Same section, bullet | "Insurance and resale" label: resale claim had no source | Fixed: relabeled "Lower flood insurance" |
| 4 | "Hydraulic Jacking With Steel Beams and Cribbing" | Unified hydraulic jacking description cited to Wikipedia | Fixed: replaced with The Devillier Group's explainer (industry source, confirmed by a site-restricted search); the wording now matches that source (central pump/manifold, equal fluid volume, same rate under unequal loads) |
| 5 | Same H3 | Structural passage had no licensed-pro line | Fixed: added a line that setting jacks and cribbing is for a licensed house-lifting crew |
| 6 | "House Leveling and Pier Systems" | Helical/push pier and slab jacking claims tagged [VERIFY] | Fixed: resolved with Angi's foundation repair methods guide (confirmed by a site-restricted search); dropped the unsupported "lift back toward level" wording; added a line to have an engineer or licensed foundation contractor diagnose first |
| 7 | "Extended Foundation Walls vs. Open Foundations" | V-zone open-foundation rule [VERIFY]; no local-check line | Partial: kept [VERIFY] (code claim) and added [PARTIAL SOURCE] FEMA Sandy foundation fact sheet; the search summary did not tie the rule clearly to one URL. Added a line to check with the local floodplain manager |
| 8 | "Planning Your Lifting Project" | Move-out and timeline claims [VERIFY] | Partial: kept [VERIFY]; added [PARTIAL SOURCE] HomeGuide. A search summary gave "4 to 8 weeks" and "2 to 7 days" for the lift itself, but the result did not tie these figures clearly to HomeGuide versus FEMA, so they were not added |
| 9 | Cost section | Structural engineer [COST NEEDED] | Left open: a HomeGuide search summary said $100 to $220/hr or 1% to 5% of project cost, but the page it came from was unclear (it may be the wall-removal guide). Permit figures found were for sill plate replacement and house moving, not lifting |
| 10 | seo.md, BreadcrumbList | No `item` URLs | Fixed: added `{{SITE_URL}}` placeholder item URLs; JSON re-validated |
| 11 | seo.md, internal links | No sibling articles suggested | Fixed: added /adu-vs-dadu/ and /parts-of-a-staircase/. Other topics are left as plain suggestions |
| 12 | Word count | Body was 1,697 before; new citations/safety lines add words | Now 1,746 (excluding PARTIAL SOURCE notes). This is within ±10% of the 1,700 upper target (max 1,870) |

Checks passed with no change needed: one H1; keyword in the first 100 words; no duplicate H2s; Quick Answer is 60 words, standalone and includes the safety line; title is 50 chars, meta description 153 chars, slug OK; front matter matches seo.md; all 3 JSON blocks parse; FAQ answers rely only on article facts with no unresolved [VERIFY]; FAQ questions do not duplicate H2s; no generic AI phrases; US spelling; no example.com domains or text-fragment URLs; editorial disclosure present; no CTA; cost ranges internally consistent (HomeGuide $10k-$40k elevate-only vs. Yahoo $20k-$60k typical, both shown as cited ranges).

## Tags resolved this pass
- [VERIFY] helical / push piers: https://www.angi.com/articles/6-types-foundation-repair.htm
- [VERIFY] slab jacking grout / polyurethane foam: https://www.angi.com/articles/6-types-foundation-repair.htm
- Wikipedia citation (x2) replaced: https://www.fema.gov/sites/default/files/documents/fema_elevating-your-house-chapter-5.pdf and https://thedevilliergroup.com/what-is-a-unified-hydraulic-jacking-system-and-why-do-we-use-them/ (plus HomeGuide for the basement bullet)

## Tags still open
- [VERIFY] flood openings no higher than 1 ft (code claim)
- [VERIFY] V zones require open foundations + [PARTIAL SOURCE] FEMA Sandy fact sheet
- [VERIFY] solid masonry homes harder to lift
- [VERIFY] table row: foundation type required by zone
- [VERIFY] permits / engineered plans required (code claim)
- [VERIFY] living in house not recommended + [PARTIAL SOURCE] HomeGuide
- [VERIFY] project takes weeks or longer + [PARTIAL SOURCE] HomeGuide
- [COST NEEDED] structural engineering
- [COST NEEDED] permits and inspections

## Final body word count
1,746 words (excluding front matter, H1, link URLs and PARTIAL SOURCE notes). Target 1,600-1,700. Within ±10%.

## Searches used: 8/8
1. FEMA / unified hydraulic jacking (general)
2. site:thedevilliergroup.com unified jacking (confirmation)
3. site:fema.gov elevation / retrofitting guide
4. site:fema.gov V zone open foundations
5. site:homeguide.com engineer / permit cost
6. Angi/HomeGuide/TOH/Bob Vila: helical and push piers, slab jacking
7. site:angi.com foundation repair methods (confirmation)
8. FEMA/HomeGuide/Angi: elevation timeline and moving out
