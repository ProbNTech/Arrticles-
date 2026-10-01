# QA Report: Pocket Door for Small Bathroom

## Issues found
| # | Location | Problem | Fix applied / left open |
|---|---|---|---|
| 1 | Quick Answer | No licensed-pro line even though the box mentions retrofitting an existing wall (structural/wiring) | Fixed: rewrote the box to 58 words and added "a licensed pro should handle any structural or wiring changes" |
| 2 | Wall section, "Enough wall length" | "Roughly the door's width again, plus framing [VERIFY]" | Resolved with Fine Homebuilding (rough opening = 2x door width + 1 in), plus a worked example (30-in door, about 61-in rough opening) |
| 3 | Cost section, bullets | Angi new-construction/retrofit figures had no inline link | Fixed: linked to Angi. Cross-checked against Angi: single pocket door $550–$1,850 new, $1,550–$2,950 retrofit; average $1,050, range $800–$2,500. All match. |
| 4 | Cost section, Fixr width line | 32-in figure not linked; "many small bathrooms use narrower doors" unsourced | Fixed: linked to Fixr, added the Fixr 36-in figure ($1,550–$2,950), and rephrased the unsourced claim |
| 5 | Cost section, demolition bullet | "often the biggest part of a retrofit" unsourced | Cut |
| 6 | Hardware section | [PRODUCT NAME NEEDED] | Resolved: Johnson Hardware 1500SC Series soft-close frame kit (up to 165 lb, 2x4 wall), framed as an example |
| 7 | Glass options | "Can make a dark bathroom feel bigger" unsourced | Cut the claim; kept [EXAMPLE NEEDED] |
| 8 | Barn door section | "Cheaper and easier to install" and side-gap privacy claim unsourced | Resolved with Fixr comparison ($500–$1,200 barn vs $500–$2,900 pocket, installed; barn doors may not seal and give no acoustic control). "Easier" dropped. |
| 9 | Barn door section | "slides seamlessly into the wall" (banned phrasing) | Rewritten as "slides out of sight into the wall" |
| 10 | Conclusion | "That one check will save you more money and stress than any other step" (unsupported claim) | Rewritten as "That one check tells you which cost range above applies to you" |
| 11 | Intro / trade-offs | Minor filler ("you've been looking for"; "that wall space is hard to give up") | Trimmed |
| 12 | seo.md FAQ 1 | "Common DIY job" not established in the article | Rewritten using only article facts, with licensed contractor/electrician/engineer and local-permit lines |
| 13 | seo.md FAQ 3 | Repeated the body's lost-wall-space point | Replaced with "How heavy a door can a pocket door frame hold?" (answered from the Johnson Hardware example cited in the body) |
| 14 | seo.md FAQ 2 | Needed a check that $1,550–$2,950 was really Fixr's 36-in figure and not Angi's retrofit figure | Confirmed: Fixr lists 36-in at $1,550–$2,950. No change. |
| 15 | seo.md Breadcrumb | `https://example.com` placeholder | Replaced with `{{SITE_URL}}` |
| 16 | seo.md internal links | No links to sibling articles | Added 5 sibling links (handicap-bathroom-remodel-cost, width-of-doorways-for-wheelchair-access, can-you-remove-walls-in-a-mobile-home, how-to-modernize-your-home-interior, walk-in-closet-dimensions); the rest stay as plain suggestions |

Checks that passed: one H1; keyword in H1 and first 100 words; no duplicate H2s; title 56 characters, meta 141 characters, slug 5 words; front matter matches seo.md; all 3 JSON blocks parse; no `#:~:text` fragments; US spelling; editorial disclosure line present; no CTA; safety lines intact (structural, electrical, permits [VERIFY]).

## Tags resolved this pass
- [VERIFY] on wall length: https://www.finehomebuilding.com/project-guides/windows-doors/trouble-free-pocket-doors
- [PRODUCT NAME NEEDED]: https://johnsonhardware.com/1500sc-series-soft-close-pocket-door-frame-kits
- Unsourced barn door cost/privacy claims (untagged before): https://www.fixr.com/comparisons/pocket-door-vs-barn-door
- Re-confirmed existing citations: https://www.angi.com/articles/cost-pocket-door.htm and https://www.fixr.com/costs/pocket-door-installation

## Tags still open
- [STAT NEEDED]: square feet saved (sources disagree: 9–12, 14 and 15 sq ft; not searched again)
- [VERIFY]: walker/wheelchair access benefit
- [VERIFY]: sound/odor gaps. Search summaries say pocket doors "don't seal as tightly as standard doors", but the line could not be tied to one URL (Angi or Fixr comparison page).
- [EXAMPLE NEEDED]: privacy latch
- [VERIFY]: track/roller repair difficulty
- [VERIFY]: header/load-bearing and permits (safety/code; stays open by rule)
- [VERIFY]: NEC/electrical codes (safety/code; stays open by rule)
- [COST NEEDED]: rerouting plumbing/wiring (Angi lists these as retrofit add-ons but gives no figure)
- [VERIFY]: solid-core sound blocking
- [EXAMPLE NEEDED]: glass door
- [VERIFY]: accessible lever hardware
- [USER EXPERIENCE NEEDED]: homeowner account. Leads for the editor (thread titles only; no individual post was verified): https://www.houzz.com/discussions/2591117/pocket-door-for-bathroom, https://www.houzz.com/discussions/4565455/pocket-door-vs-standard-door-for-master-bath-entry, https://www.houzz.com/discussions/3902774/pocket-doors-love-them-or-hate-them

## Word count
Body: 1,337 words (was 1,287). Target 1,200–1,300. That is 3% over the top of the range, within ±10%.

## Searches used: 8/8
1. site:angi.com pocket door cost (confirmed the Angi figures)
2. site:fixr.com pocket door 32/36-in costs
3. fixr/angi pocket vs barn door
4. pocket door rough opening width (open web)
5. site:fixr.com barn door cost/privacy
6. reddit/houzz/diychatroom experience (failed: reddit is blocked; counted against the budget)
7. houzz/diychatroom/gardenweb experience
8. site:johnsonhardware.com soft-close frame kit
