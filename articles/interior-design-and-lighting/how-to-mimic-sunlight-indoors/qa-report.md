# QA report: how to mimic sunlight indoors

## Issues found

| # | Location | Problem | Fix applied / left open |
|---|---|---|---|
| 1 | article.md, "What makes sunlight look like sunlight?" | Daylight-vs-indoor brightness claim tagged [STAT NEEDED] | Fixed. Replaced with the PLOS One / PMC study figure (median outdoor 1,175 lux vs. indoor 179 lux, about 8x) with an inline link |
| 2 | article.md, "What happens when researchers recreate daylight…" | Said BROAD is an unreviewed preprint [VERIFY]. The study was published in *Depression and Anxiety* (2022) | Fixed. Now cites the peer-reviewed Wiley version (link moved from medRxiv to Wiley) and adds the result: both groups improved similarly |
| 3 | article.md, solar tube cost | $600–$1,100 (avg $850) only had a single-search PARTIAL source (HomeGuide) | Fixed. Angi's 2026 guide gives the same range and average. Now cited to Angi inline. The HomeGuide URL came from an earlier session's search, so it was not re-cited |
| 4 | article.md, GE Sun Filled CRI 97 | [VERIFY] | Changed to PARTIAL. gelighting.com/sun-filled-led was returned and the search summary gives CRI 97, but the figure isn't explicitly tied to that URL |
| 5 | article.md, LRV sentence | [VERIFY], and the scale wasn't explained | Changed to PARTIAL (Wikipedia LRV page). Added the 0–100 scale explanation. A primary paint-maker source is preferred |
| 6 | article.md, "daylight" bulbs at 5000K–6500K | Factual claim was untagged and unsourced (the FAQ also relies on it) | Added a PARTIAL source (ENERGY STAR CFL guide PDF). The search summary describes 5000–6500K as "daylight" but doesn't firmly tie it to that PDF |
| 7 | seo.md FAQ #4 | "Should I keep daylight bulbs on in the evening?" duplicated the H2 "Should your indoor lighting change through the day?" | Replaced with "Do I need a light therapy box to mimic sunlight?", using only facts cited to Mayo Clinic in the article. Updated the JSON-LD to match |
| 8 | seo.md FAQ #3 | The question asked about "UV or infrared"; the answer and the article only address UV | Narrowed the question to UV bulbs (list and JSON-LD) |
| 9 | seo.md BreadcrumbList | Used `example.com` | Replaced with `{{SITE_URL}}` |
| 10 | seo.md internal links | No sibling articles referenced | Added `/how-to-modernize-your-home-interior/`. No other sibling is topically relevant; the other suggestions stay plain |

Checks passed with no change needed:
- One H1 and no duplicate H2s; the keyword is in the first 100 words.
- Quick Answer is 57 words and standalone. No safety line is needed because it covers only plug-in bulbs and decor.
- The safety lines (electrical and roof/height) are intact and carry code-related [VERIFY] tags.
- No banned AI phrases, no first-person doer voice, no CTA. The disclosure line is present.
- US spelling is used throughout. No `#:~:text` fragments.
- Front matter matches seo.md (title 53 chars, meta 143 chars, slug 5 words). All JSON blocks parse.

## Tags resolved this pass
- [STAT NEEDED] daylight vs. indoor lux: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8263252/
- [VERIFY] BROAD peer-review status: https://onlinelibrary.wiley.com/doi/10.1002/da.23281
- [PARTIAL SOURCE] solar tube cost: https://www.angi.com/articles/how-much-solar-tubes-cost.htm

## Tags still open
- [PARTIAL SOURCE] mn.gov, incandescent bulbs at about 2,700K
- [PARTIAL SOURCE] comledlamp.com, midday daylight at 5000–5500K (weak manufacturer source)
- [PARTIAL SOURCE] energystar.gov CFL_PRG.pdf, daylight bulbs at 5000–6500K (new)
- [PARTIAL SOURCE] occ.ohio.gov, under-600-lumen mood lighting
- [PARTIAL SOURCE] ledvance.com, full-spectrum vs. daylight
- [PARTIAL SOURCE] gelighting.com, GE Sun Filled CRI 97 (was [VERIFY])
- [PARTIAL SOURCE] Wikipedia LRV, LRV scale (was [VERIFY])
- [VERIFY] NEC/permits for hardwired fixtures (safety; intentionally kept)
- [VERIFY] roof permits for solar tubes (safety; intentionally kept)
- [USER EXPERIENCE NEEDED] homeowner/renter account (a search found no linkable post)

## Word count
- Body: about 1,681 words, excluding URLs and PARTIAL tag text (1,716 raw).
- Target: 1,500–1,600 (assumed). That is about 5% over the upper bound, within ±10%.

## Searches used: 7/8
1. Daylight vs. indoor lux
2. GE Sun Filled CRI 97
3. site:angi.com solar tube cost
4. BROAD trial publication
5. site:sherwin-williams.com LRV
6. ENERGY STAR color temperature
7. Reddit windowless-room account (no usable result)
