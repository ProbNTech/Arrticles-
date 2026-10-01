# QA Report: Handicap Bathroom Remodel Cost

## Issues found

| # | Location | Problem | Fix applied / left open |
|---|---|---|---|
| 1 | Body, "three levels" list | Three project-level totals were all [COST NEEDED] | **Fixed.** Safety upgrades: Angi's renovation range of $1,500–$8,000. Full remodel: Angi's $5,600–$12,000, with HomeAdvisor's $16,000 as the top figure. Targeted modification: no package price exists, so the line now says that plainly and points to the sourced roll-in shower cost ($2,900–$6,600). |
| 2 | Quick Answer vs. body | The Quick Answer said a full roll-in shower conversion "can cost more" than $5,600–$12,000, but Angi defines that range as the *full remodel* range. | **Fixed.** Rewrote it as full remodel $5,600–$12,000 and lighter updates $1,500–$8,000, with large custom jobs costing more. It is about 48 words and keeps the licensed-pro line. |
| 3 | Intro | The intro promised "what documented projects reveal about where budgets tend to slip," but that section has no documented project ([USER EXPERIENCE NEEDED]). | **Fixed.** It now points ahead to the injury data, which the section does deliver. |
| 4 | Cost breakdown table | HomeAdvisor's line items add up to at least about $9,300, which is above its own $2,700 low end. That is a source inconsistency. | **Partly fixed.** Added a sentence saying not every project needs every line. An editor should confirm the $4,500–$8,500 flooring row on the live page, since it looks high for a small bathroom. |
| 5 | Hidden costs: contingency | [STAT NEEDED] | **Partly fixed.** Added the 10%–20% guideline, but the search summary did not tie the figure to one URL, so it carries [PARTIAL SOURCE]. |
| 6 | Manage costs: CAPS | [VERIFY] on the CAPS description | **Resolved** with NAHB's CAPS page. |
| 7 | Manage costs: VA | [FACT NEEDED] | **Resolved** with a link to the VA disability housing grants page. The HISA "$6,800 lifetime" figure carries [PARTIAL SOURCE], because the summary did not pin the amount to one URL and an older document gives $4,100. |
| 8 | seo.md, FAQ 1 | The answer relied on the [VERIFY] claim that grab bars must anchor into studs or blocking | **Fixed.** Rewrote it using only sourced facts (HomeGuide price, tile fees). |
| 9 | seo.md, FAQ 3 | The answer relied on the [VERIFY] claim that the ADA doesn't apply to private homes | **Fixed.** It now defers to the local building department. |
| 10 | seo.md note | The note said FAQ 3 and 4 depend on [VERIFY] tags | **Updated**, since both dependencies are now gone. |
| 11 | seo.md, internal links | No sibling articles were linked | **Fixed.** Added /width-of-doorways-for-wheelchair-access/ and /pocket-door-for-small-bathroom/. The other topics stay as plain suggestions. |
| 12 | Labor rate ($50–$150/hr) | Still [PARTIAL SOURCE] | **Left open.** A re-search showed the figure on Angi pages, but in a mixed context: electricians at $50–$150 and accessible-remodel labor at $45–$250. It was not tied clearly to the cited page. |
| 13 | Comfort-height toilet / raised seat | [COST NEEDED] | **Left open.** A search returned $90–$1,250 per toilet and about $375 to install, but no single URL was clearly tied to those figures. |
| 14 | Medicare | [VERIFY] | **Left open.** Medicare.gov results covered general DME rules only and gave no explicit statement on grab bars or remodels. |

These checks passed with no change needed:
- **Front matter and SEO fields.** The front matter matches seo.md. The title is 53 characters, the meta description is 149, and the slug is fine.
- **JSON and URLs.** Both JSON blocks parse. There are no example.com domains and no `#:~:text` fragments.
- **Structure.** There is one H1, the keyword appears within the first 100 words, and there are no duplicate H2s.
- **Language.** No AI-phrase list hits, and spelling is US.
- **Safety and voice.** The safety lines are intact for doorways (structural), the curbless floor, and electrical. The disclosure line is present.
- **ADA figures.** These match the Access Board guide: 17–19 in. seat height, a 42 in. side bar mounted at 33–36 in., and a 60 in. turning circle or T-shaped turning space.

## Tags resolved in this pass

| Tag | Source |
|---|---|
| [COST NEEDED] safety-upgrade tier: $1,500–$8,000 | https://www.angi.com/articles/remodel-bathroom-handicap-accessible-cost.htm |
| [COST NEEDED] full-remodel tier: $5,600–$12,000 (HomeAdvisor top end $16,000) | Same Angi page; https://www.homeadvisor.com/cost/additions-and-remodels/accessible-bathroom/ (already cited) |
| [COST NEEDED] targeted tier | Removed. It is replaced by a plain statement that no package price exists, plus the already-sourced roll-in shower range. |
| [VERIFY] CAPS | https://www.nahb.org/education-and-events/credentials/certified-aging-in-place-specialist-caps |
| [FACT NEEDED] VA grants | https://www.va.gov/housing-assistance/disability-housing-grants/ |

**Editor note on the $1,500–$8,000 figure.** Two angi.com-restricted searches gave the renovation and full-remodel ranges together. The $5,600–$12,000 range and its $8,400 average matched the cited page, so the $1,500–$8,000 renovation figure was attributed to that same page. Confirm it on the live page.

## Tags still open (article.md)

- **[COST NEEDED] × 5:** comfort-height toilet; raised toilet seat; accessible sink; curbless shower floor work; wall blocking.
- **[PARTIAL SOURCE] × 3:** labor rate; contingency of 10%–20%; HISA $6,800.
- **[FACT NEEDED] × 1:** Area Agency on Aging.
- **[VERIFY] × 15:**
  - Grab bar blocking and studs
  - Walk-in tub sit-while-filling
  - Under-sink pipes
  - Small-tile grip
  - Offset hinges
  - ADA not applying to private homes
  - IRC/IPC adoption
  - Permit rules
  - Curbless framing
  - Plumbing permits
  - NEC GFCI
  - Prefab installs faster
  - Medicaid waivers
  - Medicare
  - Tax deduction
- **[USER EXPERIENCE NEEDED] and [CASE STUDY NEEDED]:** the real-world section.

## Word count

The final body is 2,193 words (excluding front matter and URLs). The target is 2,000–2,100, and the ±10% band runs from 1,800 to 2,310, so the article is within tolerance.

## Searches used: 8/8

1. site:angi.com: handicap bathroom minor vs. full remodel costs
2. site:angi.com: "$1,500 to $8,000" renovation confirmation
3. Angi, HomeGuide and HomeAdvisor: comfort-height toilet and raised seat cost (not resolved)
4. Angi, HomeAdvisor, NKBA and NARI: contingency percentage (partial)
5. va.gov: HISA grant
6. medicare.gov: grab bars coverage (not resolved)
7. nahb.org: CAPS
8. site:angi.com: labor rate and accessible sink (not resolved)
