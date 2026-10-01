# QA report: parts-of-a-staircase

## Issues found

| # | Location | Problem | Fix applied / left open |
|---|---|---|---|
| 1 | Railing system, balusters | Gap limit given only as "set by code [VERIFY]"; the IRC 4" sphere figure was missing, and the FAQ relied on that unsourced claim | Fixed. Added the model IRC 4" sphere rule (with the 4 3/8" open-side-of-stair allowance) and linked the Viewrail 4" sphere page and the jaspector IRC 2018 R312.1.3 summary. [VERIFY] kept (code claim, local adoption varies). |
| 2 | Landings and Winders | "Code sets minimum winder tread depths [VERIFY]" had no figure or source | Fixed. Added 10" at the walkline / 6" at the narrow end with the Viewrail winder code link. [VERIFY] kept (code claim). |
| 3 | Treads section / FAQ 3 | FAQ said open-riser gaps are "limited by code", but the body never established that | Fixed. Added the model IRC open-riser rule (4" sphere where the stair is more than 30" above the floor) with the Viewrail open riser link + [VERIFY]. FAQ 3 reworded to say the model code limits the gap and local rules vary (no numbers). |
| 4 | FAQ 1 (list + JSON) | Rested on the formerly unsourced spacing claim | Reworded to "the model building code limits the gaps" plus a local-rules line. Both copies updated and kept identical. |
| 5 | Safety section, injury stat | "1,076,558 people a year" is an annual average over 1990-2012, but the text read like a single-year count | Added "an average of". |
| 6 | Stair builders section | The Oz Stair sentence was about 35 words (flagged for readability in the audit) | Split into two sentences. The claim and link are unchanged. |
| 7 | seo.md internal links | No links to real sibling articles | Added /how-to-install-hardwood-flooring/ and /how-to-modernize-your-home-interior/. Other topics are left as plain suggestions. |
| 8 | IRC number consistency | Checked: riser max 7 3/4", tread min 10", handrail 34-38", nosing 3/4"-1 1/4" (not required when the tread is 11" or deeper), baluster 4" sphere | All consistent across the body, the Quick Answer (which has no numbers) and the FAQ (which has no numbers). A 2024 IRC search returned the same riser, tread and handrail values. No change needed. |
| 9 | Stringers, "wider stairs may add one down the middle" | Search sources disagree on the threshold (36" vs 48" vs 16" o.c.) | Left open. [VERIFY] kept, and no figure was added. |
| 10 | Other checks | AI-phrase grep, H1 count (1), duplicate H2s (none), keyword in the first 100 words, title 52 chars, meta 152 chars, slug 4 words, front matter = seo.md, JSON parses, no example.com, no #:~:text URLs, editorial disclosure present, no CTA | All pass. No change needed. |

## Tags resolved this pass
None were fully removed. The code [VERIFY] tags stay under the brief's safety rule. Three code claims that had been vague now carry specific figures and inline sources:
- Baluster 4" sphere / 4 3/8" stair allowance: https://resources.viewrail.com/code-compliance/railing-code/4-sphere-rule and https://www.jaspector.com/codes/irc-2018/ch03-building-planning/guard-height-baluster-spacing-irc-2018/
- Winder 10" walkline / 6" minimum: https://resources.viewrail.com/code-compliance/stair-code/winder-staircase-code-requirements
- Open riser 4" sphere above 30": https://resources.viewrail.com/code-compliance/stair-code/open-riser-code-requirements

## Tags still open
- [VERIFY] x9: nosing, middle stringer, stringer safety note, handrail height, baluster gap, open riser gap, winder depth, riser/tread limits, safety-section permit note.
- [USER EXPERIENCE NEEDED] x1. Lead for an editor (not used, because the search summary did not tie a specific quote to a specific URL): https://www.contractortalk.com/threads/loose-newel-post.81163/ and https://www.doityourself.com/forum/decks-patios-porches-walkways-driveways-stairs-steps-docks/634736-loose-stair-newel.html. Open these, confirm a quote, then attribute it.

## Word count
Body is 1,666 words (excluding front matter, H1, table pipes and URLs). Target is 1,500-1,600, so this is +4% and within ±10%.

## Searches used: 6/8
1. IRC R312.1.3 4" sphere / 4 3/8"
2. IRC winder tread depth
3. Third / center stringer width threshold
4. 2024 IRC riser / tread / handrail confirmation
5. IRC R311.7.5.1 open riser 4" sphere
6. Homeowner / contractor wobbly newel post account
