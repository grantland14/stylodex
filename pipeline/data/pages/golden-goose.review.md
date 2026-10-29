# Review: brands like Golden Goose (`/brands/golden-goose`)

Category **sneakers** (C = product type). Author Ash. Checked 2026-10-29.

## Gate result
`judgeBrandsLikePage` via `lib/pipeline.ts` (tsx script in the agent scratchpad, `golden-goose/gate-gg.ts`), 2026-10-29:
- **indexable: true**, reasons: none
- renderable picks: **13 / 13** (no pick problems)
- title: "13 Brands Like Golden Goose for Distressed Handmade Italian Sneakers"
- `npm test`: 30 pass. `npm run lint:facts`: none of this page's 14 brand files flagged. The run fails on three files other agents wrote at the same time (2020ave, dicks-sporting-goods, shop-style-shark: quotes); not touched.

## Quality gate (G1–G15)
| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A US shopper put off by Golden Goose's $350–$2,520 sneakers is the reader. Every pick sells sneakers to the US from its own US store. |
| G2 | PASS | The ranking lists give model names and old or no prices. This page has each brand's live regular-price US sneaker range, named shoes, and the costs that differ (duties, return fees, restocking, free-shipping lines, sizes). |
| G3 | PASS | Trade-offs are specific: Vintage Havana's $9 restocking fee and half-size gap, P448's $8 refund fee and brand-specific sizing, Koio's $14 + 5%, Oliver Cabell's $240 free-shipping line, Dolce Vita's final-sale clearance, Sepol's 2–3 week factory shipping. |
| G4 | PASS | No try-on, fit-feel or comfort claims. "We" isn't used for experience. |
| G5 | PASS | Author "Ash" with the bio in `lib/authors.ts`. Not YMYL. |
| G6 | PASS | Every number traces to a brand file (fact trace below). |
| G7 | N/A | Not YMYL. |
| G8 | PASS | Title count = renderable picks (13). known_for is new (see human check). |
| G9 | PASS | Alternatives with prices answer "brands like / alternatives to Golden Goose". Each body opens with the answer and a named shoe. |
| G10 | PASS | Price, costs, sizes and returns per pick; FAQs cover price, where made, the dirty look and the best dupe. |
| G11 | PASS | Intro is 68 words; picks follow. |
| G12 | PASS | Prices read 2026-10-29; the template shows "Last checked". |
| G13 | PASS | Better than The Modest Man (2021) and The Mom Edit on the dominant intent: current US prices and costs for 13 live brands, where those lists carry dead links (Cariuma has closed) and few prices. |
| G14 | PASS | Affiliate links go through `/go/`. No implied testing. |
| G15 | PASS | No pick is shared with a sibling page; all 13 brand files are new. |

**Estimated Page Quality:** High. Each pick carries its live US sneaker range, a named shoe and the real costs to a US buyer, which none of the ranking lists have.
**Estimated Needs Met:** Highly Meets for "brands like Golden Goose". Weakest spots: OluKai is a loose fit, and Converse, Adidas and Nike (two sources each) aren't on the page because their stores weren't read.

## Voice check (`pipeline/voice.md` "What we never write")
- No process narration, dates or "its site says". Sources are referred to only as "most lists" (Vintage Havana, Veja), never named.
- No spreadsheet sentences. Comparisons carry a reason ("about a fifth of the price of the cheapest Super-Star", "Golden Goose's women's sizes stop at a US 12").
- No brand verdicts, no invented experience. Brands are "it".
- No semicolons, dashes or bold in the copy. Three sentences over 30 words were split (Dolce Vita twice, Esquivel, OluKai).
- Picks compared with each other in every body (VH→Steve Madden, P448→Koio, SM→Dolce Vita, Veja→VH, OC→Veja, DV→Freda, Sepol→Freda, Esquivel→Koio, Koio→P448, Bed Stu→P448, Greats→OC, OluKai→DV/SM).
- One colloquialism ("left-field pick"); a second "the catch" was reworded.

## AI-voice scan (`ai-voice-avoid.md`)
- Removed overclaims: "far easier return policy" (Golden Goose returns are free too) became "twice Golden Goose's return window"; "which none of the other budget picks offer" (unverified) cut; "the one Golden Goose comparisons name" (one source) cut; "least like Golden Goose of anything here" cut.
- No §13/§14 words, no "not X, it's Y", no "whether you're". Lists are pairs or named sets (stores, the closing guide).

## Fact trace
- Intro: Super-Star from $580, crystal styles past $2,000, lived-in finish, handmade in Italy → golden-goose prices.sneakers note and notes (Super-Star page, footer).
- Vintage Havana: $50–$155, Denisse Taupe Olive $125 → prices.sneakers note; women 5.5–11 and half sizes to 8.5 → size_range + notes; $9 shipping, 14 days, shipping not refunded, $9 restocking → notes. "About a fifth": $125 / $580.
- P448: $225–$345, John White - Gold $235 → prices; Marche → production_model; duties included, sizing per sneaker, EU 35–50, 14 days, $8 fee → notes.
- Steve Madden: $74.95–$169.95, Catcher $74.95, Mavis $159.95, most marked down → prices note; .99 clearance final sale, store returns, free over $99, 30 days → notes; women to 14, men to 17 → size_range.
- Veja: $135–$330, Campo $175 → prices; 28 days, free returns and shipping over $95, made in Brazil, Campo leather origin, sizes 35–49 → notes; Paris → Wikipedia note.
- Oliver Cabell: $169.99–$249.99, Low 1 $224.99 → prices; founded 2018, sells direct → notes; sizes → size_range; SoHo store, free over $240, $20 refund deduction, 30 days → notes. "About $50 less": $224.99 − $175.
- Dolce Vita: 4–15 and 6W–13W → size_range; $135–$165, Zina $139 incl. Zina Wide, markdowns → prices note; $125 free shipping, 30 days, clearance final → notes. Golden Goose women to US 12 → golden-goose size_range.
- Sepol: $279–$409.90, Estrella $299.90, New Estrella $349.90 → prices; Istanbul factory 1971, factory-direct 2–3 weeks, US only, free shipping and 30-day free returns → notes; 6.5–14 → size_range. Overlap with Golden Goose's $350 Yatay → golden-goose prices note.
- Freda Salvador: $298–$378, Eda $298, Inde $378 → prices; Spain, Italy, El Salvador → production_model; stores, 14 days, $12 restocking → notes; 5–11 → size_range.
- Esquivel: Weekender $250, Dandy Hi $329 → prices; Southern California atelier → production_model + notes; free US shipping, 14 days, unworn with box and bags, shipping non-refundable → notes; sizes → size_range.
- Koio: $185–$345, Capri $275, Primo $325 → prices; Florence → production_model; NYC 2014, men's only → notes; US 7–16 → size_range; free over $150, 14 days, $14 + 5% → notes.
- Bed Stu: vegetable-tanned, hand-dyed, patina → notes (FAQ); Harry $195, Lynox $285 → prices; León factory, free over $149, 30 days, $10 refund fee without Redo → notes; sizes → size_range.
- Greats: $159–$225, Royale Knit 2.0 $179 → prices; Brooklyn → notes; 7–16, some to 18 → size_range + notes; 15 days, $8.95 fee, free over $125, US only → notes. Oliver Cabell Low 1 from $179.99 → oliver-cabell prices note.
- OluKai: $100–$160, Mio Lī $140, Pehuea Lī $100, Kou Lace Up $160 → prices; Hawaiian islands, free over $120, Hawaii stores → notes; 30 days, free exchanges → notes; sizes → size_range.
- FAQs: price range, Yatay $350, Super-Star $580, Ball Star $595, $2,520 → golden-goose prices note. Made in Italy, Milan, US warehouse → notes. Lived-in effect → notes. Best dupe: Vintage Havana most-sourced (page evidence), $50–$155; P448 $225–$345 → prices.
- FAQ sources: "how much are golden goose shoes", "where are golden goose shoes made", "why do golden goose shoes look dirty" (Ahrefs matching-terms, questions). "What is the best Golden Goose dupe?" is People also ask on "brands like golden goose".

## Human check
See `human_check` in the page file: known_for (title ending), Vintage Havana and Sepol hq_country, P448 free-shipping conflict, Veja size range from one product, Veja evidence via the Marni collaboration, OluKai as a loose 13th pick.
