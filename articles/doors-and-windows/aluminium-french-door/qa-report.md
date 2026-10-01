# QA Report: Aluminium French Door

## Issues found

| # | Location | Problem | Fix applied / left open (reason) |
|---|---|---|---|
| 1 | article.md H1 | UK spelling "Aluminium" in body H1 (checklist 8) | Fixed: H1 now "Aluminum French Doors: What to Know Before You Buy" |
| 2 | article.md intro | UK spelling used as the keyword in the body | Fixed: "An aluminum French door (spelled "aluminium" in the UK and on many listings)". This is the one allowed body use and keeps the keyword variant in the first 100 words |
| 3 | article.md conclusion | "aluminium French door", a second UK spelling in the body | Fixed: changed to "aluminum"; also rewrote the formulaic "If there's one thing to take away, it's this:" |
| 4 | article.md + seo.md meta description | Used "aluminium" (rule 8 allows UK spelling only in the SEO title/keyword field) | Fixed in both files and in the Article schema description; now 125 chars |
| 5 | seo.md image alt text #1 | "aluminium" | Fixed: "aluminum" |
| 6 | article.md + seo.md slug | Slug `aluminium-french-door-guide` did not match the site's sibling slug list (`/aluminium-french-door/`), so sibling links would break | Fixed: slug is now `aluminium-french-door` in both files. **Human to confirm** |
| 7 | seo.md BreadcrumbList | `example.com` placeholder domain | Fixed: replaced with `{{SITE_URL}}`; JSON re-validated |
| 8 | seo.md internal links | No sibling articles linked | Fixed: added 5 relevant siblings with relative paths. Other topics stay as plain suggestions |
| 9 | seo.md FAQ 1 | "Often used for interior doors" is not established in the article (and Angi's page did not state it in search results) | Fixed: replaced with "Does the finish on aluminum French doors fade?", which uses the article's HomeGuide fact. FAQ JSON updated and parsed |
| 10 | Energy section | Low-E/gas fills [VERIFY] | Resolved with DOE FEMP link; added a plain-language Low-E definition |
| 11 | Energy section | [STAT NEEDED] on bill savings | Partly addressed: ENERGY STAR "up to 13%" figure added as [PARTIAL SOURCE]. Kept [STAT NEEDED] for single-door savings because the 13% covers all of a home's windows, doors and skylights |
| 12 | Options section | Anodizing definition [VERIFY] | Resolved with an Aluminum Extruders Council link. Dropped the unsourced "metallic look" wording |
| 13 | Options section | Safety-glazing code claim was generic | Now names the model IRC (as the brief requires); kept [VERIFY] per the safety rule (local adoption varies, and the sources found were only municipal handouts) |
| 14 | Cost section | Installed cost [PARTIAL SOURCE] | Resolved: HomeAdvisor search result ties $2,000–$5,000 (avg $3,500) to that URL; added its $6,000+ premium figure |
| 15 | Cost section | "One of the more affordable French door options" had no source | Fixed: now attributed to Angi ("budget-friendly"). Added Angi's caveat that aluminum may not last as long |
| 16 | Cost section | [COST NEEDED] on upgrade costs | Left open: no per-upgrade prices found; the sentence was shortened |
| 17 | Why-aluminum section | "Cost guides also note" cited one source | Fixed: "HomeGuide also notes" |
| 18 | Energy section | Anchor text "Angi describes aluminum as a poor insulator" mixed the source name into the link | Fixed: anchor is now on the claim itself, "a poor insulator" |
| 19 | Body | Filler lines ("Numbers only tell part of the story, though.", "Tight seals protect both comfort and your energy bills.", "simply", "in general terms") | Cut |
| 20 | "What Is" section | "single door version" | Hyphenated: "single-door version" |
| 21 | workflow-notes.md | Word count listed as ~1,493, but the actual count after edits is 1,564 | Updated |
| 22 | Intro vs Angi | Intro says the doors "last for years", while Angi says plain aluminum "won't last as long" and Marvin says aluminum outlasts vinyl | Left open: the sources disagree. The article now carries Angi's caveat, and the Marvin moisture claim stays [PARTIAL SOURCE]. **Human editor to decide** |

Checks passed with no changes:
- Exactly one H1, and no duplicate H2s.
- The Quick Answer box is correctly omitted (informational, noun-phrase keyword).
- The structural safety line is intact, and there are no step-by-step instructions for licensed work.
- The editorial disclosure line is present, and there is no CTA.
- No text-fragment URLs.
- The title is 49 characters and the meta description is 125.
- Front matter matches seo.md.
- All 3 JSON blocks parse.
- FAQ questions don't duplicate any H2, and no FAQ relies on a [VERIFY].

## Tags resolved this pass
- Installed cost [PARTIAL SOURCE] resolved by https://www.homeadvisor.com/cost/doors-and-windows/french-doors-installation-cost/ (avg $3,500; $2,000–$5,000; premium $6,000+).
- Low-E / gas fills [VERIFY] resolved by https://www.energy.gov/cmei/femp/purchasing-energy-efficient-residential-windows-doors-and-skylights
- Anodizing definition [VERIFY] resolved by https://aec.org/anodizing
- Unsourced "affordable" claim now cites https://www.angi.com/articles/average-cost-of-french-doors.htm

## Tags still open
- [VERIFY] outswing doors and wind-driven rain
- [VERIFY] coastal / salt-air use
- [VERIFY] safety glazing under the model IRC (code claim, so it stays open per the safety rule). A candidate for a human check is IRC R308.4.1, which treats glazing in doors as a hazardous location; search results showed this only in municipal handouts.
- [VERIFY] impact standards by county
- [VERIFY] permit and inspection rules
- [VERIFY] rinsing more often near the ocean
- [PARTIAL SOURCE] Marvin moisture resistance. The search summary covered aluminum outlasting vinyl and resisting UV and heat, but not rot or swelling specifically.
- [PARTIAL SOURCE] ENERGY STAR "up to 13%". It wasn't clear whether the figure came from the product page or a factsheet.
- [STAT NEEDED] energy savings from a single door
- [COST NEEDED] the cost of each upgrade
- [EXAMPLE NEEDED] hardware matching
- [USER EXPERIENCE NEEDED] installer/homeowner section

## Word count
Body (H1 through the disclosure line, excluding URLs) is **1,564** words. The target is 1,400–1,500, so this is within ±10% (max 1,650).

## Searches used: 8/8
1. site:homeadvisor.com French doors installation cost
2. site:marvin.com vinyl vs aluminum windows differences moisture
3. site:angi.com aluminum French doors cost poor insulator interior moderate climates
4. site:energy.gov low-e coatings gas fills windows doors insulation
5. site:energystar.gov windows doors skylights energy savings average household
6. anodizing aluminum electrochemical process thickens natural oxide layer
7. IRC R308.4.1 glazing in doors hazardous location safety glazing
8. FEMP purchasing energy-efficient residential windows doors skylights (energy.gov)
