# QA Report: walk-in-closet-dimensions

## Issues found

| # | Location | Problem | Fix applied / left open (reason) |
|---|---|---|---|
| 1 | article.md, "Three Numbers" formula | "Add the storage depth on each wall you plan to use" gives the wrong width for L-, U- and island layouts (the back wall doesn't add to width). | Reworded to "the walls that face each other across the closet" and added a worked 24 + 24 = 48 in = 4 ft example. |
| 2 | article.md, Island H3 | 36 in clearance (California Closets) was offered as the "comfortable target" inside a 10 x 10 ft room, but 24 + 36 + 24 (island) + 36 + 24 = 144 in = 12 ft. | Added the 12 ft math. A 24-in-deep island is stated as an assumption, which is what makes HomeGuide's 10 x 10 ft / 24 in clearance work. |
| 3 | article.md, rod heights | "Long-hang sections ... sit higher on a single rod" contradicted the 80 in top rod (a single rod is usually lower, around 66 in). | Replaced with Angi's 66 in single-rod figure and a link. |
| 4 | article.md, conclusion | "Hanging depth is fixed at about 24 inches" contradicted HomeGuide's 20 in tight-space option given earlier. | Changed to "stays close to 24 inches." |
| 5 | article.md, Quick Answer | "7 x 10 ft common size" wasn't backed up anywhere in the body. | Added an Angi-linked line to the layout intro. |
| 6 | article.md, rod heights | [PARTIAL SOURCE] on 80/40 in double hang. | Resolved with an Angi closet-shelving-height link. |
| 7 | article.md, drawer clearance | [VERIFY] with no source. | Changed to [PARTIAL SOURCE] for the Inspired Closets design page. The search summary matched the idea but didn't clearly tie it to that URL. |
| 8 | article.md, accessibility | Lower/pull-down rods [VERIFY]. It also didn't mention that the ADA covers public buildings, not homes. | Added the U.S. Access Board 15–48 in reach range and the public-buildings caveat, and resolved the tag. |
| 9 | article.md, lighting | NEC closet fixture rule [VERIFY]. | Linked a town building-department NEC "Luminaires in Clothes Closets" PDF. No specific clearance numbers are stated, and the licensed-electrician and local-code lines are kept. |
| 10 | article.md, budget | [COST NEEDED]. | Resolved: Angi gives $1,000–$8,000 for a walk-in. |
| 11 | article.md, walls | [VERIFY] was on "permit rules vary by state and city." That is the brief's check-local-code line itself, not a code claim. | Tag removed. The licensed contractor / structural engineer line is kept. **Editor may restore it if preferred.** |
| 12 | article.md, conclusion | Banned phrase "whether you're". | Rewritten. |
| 13 | article.md, several spots | Word count grew above range after sourced additions. | Trimmed filler (section intro, two-person paragraph, walls intro, conclusion). |
| 14 | seo.md, BreadcrumbList | Used example.com. | Replaced with {{SITE_URL}}. |
| 15 | seo.md, FAQ 1 | Answer used a claim not in the article ("shelving usually doesn't change structure"). | Rewritten to use only the article's permit line (text and JSON). |
| 16 | seo.md, FAQ 3 | "Subtract 24 in for each wall" had the same width-math ambiguity as #1. | Clarified to "each facing wall" across each measurement (text and JSON). |
| 17 | seo.md, internal links | No sibling articles were linked. | Added /how-to-mimic-sunlight-indoors/, /can-you-remove-walls-in-a-mobile-home/, /width-of-doorways-for-wheelchair-access/ and /how-to-modernize-your-home-interior/. |

Checks passed with no change:
- One H1, no duplicate H2s.
- Keyword appears in the first 100 words.
- Quick Answer is 60 words.
- Title is 49 characters and the meta description is 144; they match the front matter.
- Slug is 4 words.
- All 3 JSON blocks parse.
- FAQ questions are not H2 duplicates.
- US spelling, no CTA, and the disclosure line is present.
- Double-sided math (24 + 24 + 24 = 6 ft; with a 36 in aisle = 7 ft), U-shaped 7 ft (36 in aisle), the 7 x 7 two-person closet (36 in aisle) and the ADA 30 x 48 in figure are all consistent.

## Tags resolved (with sources)
- [PARTIAL SOURCE] 80/40 in double hang → https://www.angi.com/articles/closet-shelving-height.htm
- [VERIFY] long-hang rod height → 66 in, https://www.angi.com/articles/closet-shelving-height.htm
- [VERIFY] lower/pull-down rods → 15–48 in reach range, https://www.access-board.gov/ada/guides/chapter-3-operable-parts/
- [VERIFY] NEC closet lighting rules → https://www.townofnaples.org/vertical/sites/%7B16A86E29-4A60-4E08-9440-2A862262DC56%7D/uploads/Luminaires_in_Clothes_Closets_(1).pdf
- [COST NEEDED] → $1,000–$8,000 walk-in, https://www.angi.com/articles/how-much-do-custom-closets-cost.htm
- [VERIFY] permit-rules line → removed as a general check-local-code line (see #11)

## Tags still open
- [PARTIAL SOURCE: inspiredclosets.com/.../how-to-design-a-walk-in-closet-that-works-for-you/ — verify before publishing] (drawer clearance)
- [EXAMPLE NEEDED] (L-shaped corner solutions)
- [USER EXPERIENCE NEEDED] (homeowner account of a tight walk-in)

## Word count
- Body by `wc -w`: 1,726 (includes URLs and table markup). Prose only: about 1,701.
- Target: 1,500–1,600. That is within the ±10% tolerance (max 1,760).

## Searches used: 7/8
1. site:homeguide.com custom closet cost
2. site:angi.com custom closet cost walk-in
3. NEC 410.16 clothes closet luminaire clearance
4. site:angi.com double hang rod 80/40
5. closet aisle drawer clearance (closet and home-services sites)
6. ADA 811 / 308 reach range (access-board.gov, ada.gov)
7. site:angi.com single rod long-hang height
