# Review: brands like Rick Owens (`/brands/rick-owens`)

Category **pants** (C = product type). Author Ash. Checked 2026-10-29.

## Gate result
`judgeBrandsLikePage` via `lib/pipeline.ts` (tsx script in the agent scratchpad), 2026-10-29:
- **indexable: true**, reasons: none
- renderable picks: **11 / 11** (no pick problems)
- title: "11 Brands Like Rick Owens for Draped Monochrome Tailoring"
- `npm run lint:facts`: ok. `npm test`: 30 pass.

## Quality gate (G1–G15)
| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A pants shopper priced out of Rick Owens' $665–$5,895 range is the reader. Every pick sells pants to the US. |
| G2 | PASS | Ranking pages give tiers ($–$$$$$) or old prices. This page has each brand's live regular-price pants range, named pairs, US duties, shipping and returns terms. None of that is in the top 5. |
| G3 | PASS | Trade-offs are specific: Ann D's €50 US return fee, Viridi-Anne's 3-day returns and unpaid duties, Isaac Sellam's 30-day dispatch, ROSEN's 15% restocking fee, Det Blev Sent's 28–34 waists. |
| G4 | PASS | No first-person use, try-on or fit claims. "We" isn't used for experience. |
| G5 | PASS | Author "Ash" with the bio in `lib/authors.ts`. Not YMYL. |
| G6 | PASS | Every number traces to a brand file (fact trace below). |
| G7 | N/A | Not YMYL. |
| G8 | PASS | Title count = renderable picks (11). known_for ending is inherited (see human check). |
| G9 | PASS | Alternatives with prices answer "brands like / alternatives / similar to Rick Owens". Each body opens with the answer. |
| G10 | PASS | Price, where to buy, US costs and returns per pick. FAQs cover cost, cheapest item and where to buy in the US. |
| G11 | PASS | Intro is 66 words. Picks start right after it. |
| G12 | PASS | Prices read 2026-10-29. The page carries the "Last checked" date. |
| G13 | PASS | Better than disco and myfavoritehello on the dominant intent: live US prices and costs, not price tiers or second-hand links. |
| G14 | PASS | Affiliate links go through `/go/`. There's no implied testing, and the method box states the criteria. |
| G15 | PASS | Only AllSaints is shared with a sibling page (zara, dresses), and its body is new wording about pants. |

**Estimated Page Quality:** High. Every pick carries its live US pants price range, a named pair and its real costs to a US buyer (duties, returns, shipping), which the ranking lists don't have.
**Estimated Needs Met:** Highly Meets for "alternatives to Rick Owens pants". A Rick-adjacent shoe section (Geobasket/Ramones intent) would make it better.

## Voice check (`pipeline/voice.md` "What we never write")
- No process narration: no "we checked", dates, "its About page says" or blocked-site notes. Fixed: "The label says every piece is made in France" became "Every piece is made in France."
- No spreadsheet sentences. Rankings come with a reason ("leather pair for less than Rick Owens' cheapest pants", "21 days, against Rick's 10").
- No brand verdicts and no invented experience. Brands are "it".
- No semicolons, em or en dashes, or bold in the copy. One sentence over 30 words was split (AllSaints).
- Picks are compared with each other in most bodies (Viridi-Anne → John Elliott/AMIRI, John Elliott → AMIRI, Craig Green → Isaac Sellam/Det Blev Sent, Isaac Sellam → AMIRI, Det Blev Sent → AMIRI, ROSEN → AllSaints, AllSaints → Det Blev Sent, Yohji → Ann D).

## AI-voice scan (`ai-voice-avoid.md`)
- Removed vague claims: "at a fraction of Rick Owens' prices" (not true at the top of Viridi-Anne's range), "just on a different look", "Denim is the heart of it", "something louder", and "the longest window on this list" (some picks have no stated window).
- No §13/§14 words. No "not X, it's Y" or "whether you're" constructions. Lists are two items or a named set.

## Fact trace
- Intro: $810 Berlin Drawstring, $5,895 max → rick-owens prices.pants note. €30 US shipping and duties in 12 states → rick-owens notes (shipping).
- Yohji: Japan-only delivery, Wooster St store and its lines → yohji-yamamoto notes. Y's, Ground Y and S'YTE descriptions → yohji-yamamoto notes (official store meta).
- Ann D: $635–$1,950, Michael $635, Agdar $1,390, Vive $750, made in Italy → prices.pants note. $25 shipping, free over $800, DDP, 14 days, €50 → notes. Gallici since 2023 → notes (about page).
- Viridi-Anne: $290.42–$1,355.28, Black Denim Wide $374.32, made in Japan → prices.pants. cm size tables → notes. Duties extra, 3-day returns, both-way shipping and card fee → notes.
- John Elliott: $198 Beach Sweats, $348 Canopy, $698 Big Jim, countries of make → prices.pants. Free US shipping, 14 days, $7 fee, free exchanges, WeHo and NY stores → notes. "About a quarter": $198 / $810.
- AMIRI: $650 Track Pant, $750 Baggy Jean, $2,390 Vintage Cut Leather, $4,490 crystal MX1, MX1 collection → prices.pants. Free US shipping and returns, 10 days → notes. Rick's €42 deduction and $3,050 leather Geth → rick-owens notes and prices.
- Fear of God: $350, $475, $1,190, $1,300 → prices.pants. ESSENTIALS final sale, 15 days, free over $100 → notes.
- Craig Green: £450/£475 (about $598/$631 at ECB 2026-10-28), elasticated wool with cord belt → prices.pants. £35, free from £500, DDP, 21 days → notes. XS–XL → size_range. Rick's 10 days → rick-owens returns_days.
- Isaac Sellam: $448/$475 US market, rubber-sheathed drawstrings, stapled 69 → prices.pants. Made in France, ships worldwide, 30 days / two months, returns at your cost → notes.
- Det Blev Sent: $330, $375, $445, $770, cuts, 100% cotton, gusset → prices.pants. 14 days, Brooklyn → notes. Waists 28–34 → size_range. "About half": $330 / $665.
- ROSEN: $269, $329–$349, $399, $629, custom size → prices.pants. Made to order, 20 working days, US$38, tariff email, 3 days, 15% fee → notes.
- AllSaints: $149, $229, $249, $569, chinos and sweatpants → prices.pants (men's). US storefront → existing notes.
- FAQs: Rick pants range and items → prices.pants. $65 items, $185 bandana, $194 Jumbo SS T → rick-owens notes. DHL 2–3 days and US stores → rick-owens notes.
- FAQ sources: "how much are rick owens" and "where to buy rick owens" (Ahrefs matching-terms, questions). "What is the cheapest Rick Owens item?" is People also ask on "rick owens alternatives".

## Open for a human
See `human_check` in the page file: C = pants vs sneakers, the inherited known_for "Draped Monochrome Tailoring" (from discobrands, not Rick Owens' own copy), Yohji at rank 1 with no price, ROSEN's conflicting returns pages, Det Blev Sent's US shipping basis, and rawlooks as sole evidence for Isaac Sellam and Det Blev Sent.
