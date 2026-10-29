# Review: brands like Selkie (steps 2–5)

Written 2026-10-29 in one run (enrich, verify, pick, write). Author: Ash. Copy in `selkie.json` → `author`, `copy`.
Copy written against `pipeline/voice.md`. Earlier page files were used for JSON shape only. All requests used the StylodexBot User-Agent only, with no personal details sent.

## Gate result

Loaded through `lib/pipeline.ts` (`pipelinePages`, which runs `brandFromJson` + `pageFromJson` with `loadMedia`) and judged with `judgeBrandsLikePage`, now = 2026-10-29 (script: scratchpad `selkie/gate.ts`):

- Anchor missing: `[]`. (Selkie is `verified` with all required facts. There's no image yet, which is optional.)
- `pickProblems` returns `[]` for all 8 picks.
- Verdict: **indexable**, no reasons. 8 picks render.
- Title: "8 Brands Like Selkie for Fanciful, Romantic Party Dresses".
- `npm run lint:facts`: ok. `npm test`: 29 pass, 0 fail.

## Category

`dresses`. Selkie's About page leads with "stand out party dresses". Its dresses collection holds 305 regular-price dresses and gowns ($109–$1,500, median $359). Every outside source compares dresses. Reasons are in `category.why`.

## Picks

| Rank | Pick | Sources | Dresses (regular price) | Label | Notes |
|---|---|---|---|---|---|
| 1 | PrettyLittleThing | 2 (duuupe, whatthefab) | none | null | Its grid loads by script, so the existing `sells_categories` is used. Petite/tall/plus 00–24 |
| 2 | Elliatt | 1 (Lane Creatore) | $168–$870 (801, US market) | similar | Ships from LA with no duties. XXS–XXL |
| 3 | Ester Manas | 1 (discobrands) | €190–€1,960 ≈ $212–$2,182 (38) | similar | Handmade in Brussels. XS–4XL. Buyer pays duties |
| 4 | Jen's Pirate Booty | 1 (charm.io) | $110–$375 (48) | similar | $10 restocking fee. XS–XL |
| 5 | Bardot | 1 (Lane Creatore) | $139–$329 (24 of 242, sample) | similar | US 0–12. 30-day returns |
| 6 | Selfie Leslie | 1 (duuupe) | $59–$155 (3,614) | similar | Multi-brand retailer with its own label. Some styles to 4XL |
| 7 | LIONESS | 1 (Lane Creatore) | $55–$115 (84, US store) | similar | Existing file. Dresses price added |
| 8 | Witch Bitch Thrift | 1 (charm.io) | $12–$495 (225, median $25) | similar | Secondhand. All sales final. Sizes to 6X |

All the price labels are "similar" because Selkie's range is so wide ($109 pinafore to $1,500 made-to-order gown). The order is by sources, then by the gap between each pick's median and Selkie's $359 median (`notes`). **8 picks, below the 10–15 target, not padded.** The evidence for Selkie is thin: the SERP is mostly Reddit, Facebook and TikTok, plus dupe posts that name Amazon sellers.

Rejected (in `rejected`):
- Unverified because the site refused reads: ASTR the Label, Lulus, Flynn Skye, Francesca's, Chaser. All five are in `human_check`.
- Not usable for other reasons: Shrimps (only 3 regular-price dresses), Angelic Pretty (no prices), Alice McCall (defunct per its source, and its domain now points to an unrelated site), MORE TO COME (no store of its own), Vatki (Shopify "Unavailable Shop"), Shein (marketplace), Fab Finds Boutique (no specific reason), and Amazon/Walmart/Etsy sellers (marketplaces).
- Apart Style pool brands: 27 of them, none with an outside source.

## FAQ sources (Ahrefs)

One call: `keywords-explorer-matching-terms`, keyword "selkie", US, terms=questions, volume desc, limit 30.

| Used | Question (US volume) | source_query |
|---|---|---|
| Yes | Is Selkie fast fashion? (30) | `is selkie fast fashion` |
| Yes | Where does Selkie ship from? (10) | `where does selkie ship from` |
| Yes | What is a Selkie dress? (30) | `what is a selkie dress` |

Skipped because no stored fact answers them:
- Mythology questions (what is a selkie, 2,100): off-topic.
- "Is selkie legit" and "is selkie a good brand": opinion.
- "Does selkie run small": that would be invented experience.
- "Why is selkie so expensive": its cause isn't stored.
- Sale, financing, next-day delivery, authentication and try-on questions.

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A brands-alternatives page for US shoppers is the site's purpose. |
| G2 | PASS | The outside lists supply only which brands are named. Bodies come from each store's own pages: US-market prices, return fees ($10 JPB restocking, $14.99 PLT parcel, $9.75 Selfie Leslie refund, $15 LIONESS refund), duty rules (Elliatt none, Ester Manas buyer pays), size ceilings and named dresses. No ranking page has prices or terms. |
| G3 | PASS | Concrete numbers and trade-offs for every pick. No hands-on knowledge is claimed, by design. |
| G4 | PASS | No wear, try or test claims. Ash's bio is untouched. |
| G5 | PASS | `author: "Ash"`. Not YMYL. |
| G6 | PASS | Every number traces to a stored field or note (table below). Caveats: Bardot's range is a 24-dress sample, and Elliatt's prices come from Shopify's country=US market (both in `human_check`). |
| G7 | PASS (N/A) | Not YMYL. |
| G8 | PASS | The count is the real rendered count (8). The subtitle is built from Selkie's own words. |
| G9 | PASS | "Brands like Selkie" intent: dresses at Selkie's price, cheaper alternatives, and a pre-owned option. The top SERP result asks for "affordable pre-owned places", which Witch Bitch Thrift serves. Seven of eight picks carry a price label. |
| G10 | PASS | Price, sizes, shipping and returns for every pick (PLT has no price). "How to choose" routes readers by budget, size and occasion. |
| G11 | PASS | The intro is 71 words with no process narration. Each body opens on what the brand is best at for this reader. |
| G12 | PASS | All facts checked 2026-10-29 (shown in the template's "Last checked" line). No dates appear in the copy. |
| G13 | **FAIL** | Honest estimate: Medium to Medium–High, scored Medium under the lower-rating rule. The page beats the readable lists (charm.io has 5 brands with no prices; the dupe posts are mostly Amazon listings) on data. But 7 of 8 picks are single-source, it has 8 picks against a 10–15 target, there are no images yet, and PLT has no price. Copy can't fix that. Adding the blocked candidates (ASTR, Lulus) after a human read would. |
| G14 | PASS | Affiliate links go via /go/ with disclosure (template). No implied testing. |
| G15 | PASS | No semicolons, em dashes or Markdown (0/0/0). No near-duplicate sibling page. |

**Counts:** PASS 14 · FAIL 1 (G13) · BLOCKED 0.

**Estimated Page Quality:** Medium. Strongest reason: store-level US prices, size ceilings, shipping and return costs for eight shops that none of the ranking pages carry.

**Estimated Needs Met (dominant intent):** Moderately Meets. The biggest lifts would be more verified picks (ASTR, Lulus, Flynn Skye if readable), images, and a PLT dress price.

## Voice check (`voice.md` "What we never write")

- Process narration: none. No "we checked", dates, "its About page says", or ranking-by-mentions line.
- Spreadsheet sentences: none. The counts (3,614 styles, 801 dresses) stay in the data. Copy uses ranges and "half its dresses cost $25 or less", which says why it matters.
- Verdicts on brands: none. The trade-offs are about specific attributes (size ceilings, return fees, duties, final sale).
- Invented experience: none. One cut in the AI-voice pass: "the long, easy shape this label does best" (JPB).
- Hype: none.
- Moves present: an answer-first opener per pick, a named product with its price in 7 of 8 bodies (PLT has none stored from its own store), a useful detail per brand, an honest catch, cross-pick pointers (Elliatt→Ester Manas, JPB→Selfie Leslie/Witch Bitch, Bardot→Selfie Leslie, LIONESS→Selfie Leslie, Ester→Elliatt, PLT→Witch Bitch), use-case "Best for" lines, and "How to choose".

## AI-voice scan (`ai-voice-avoid.md`)

- Fixed four sentences over 30 words (Elliatt, Selfie Leslie ×2, PLT).
- Fixed a rule-of-three list ("occasion, cocktail and party dresses" became "occasion and party dresses").
- Cut a vague payoff ("that gap adds up fast") and replaced it with a fact (half the delivery cost).
- Cut "you're far more likely to clear it" and replaced it with "the Adrie clears it on its own".
- Remaining three-part lists are factual sets (refund, exchange or credit) or the budget guide in "How to choose".
- No "they" for brands. Contractions throughout. One colloquialism at most.

## Fact trace

| Claim in copy | Source field |
|---|---|
| Rainbow Puff Dress $290. Puff Dresses $249–$335. Range $109–$1,500. XXS–6X | `brands/selkie.json` prices[dresses].note, size_range |
| Runs of 15 to 20. Small runs and pre-sells. Polyester | selkie notes (learn-more page) |
| $20 shipping, free over $350. Ships from China, no expedited. 7–10 working days | selkie notes (shipping) |
| Wildfox co-founder Kimberley Gordon. LA-designed | selkie notes, production_model |
| PLT 00–24 with petite/tall/plus/maternity, $9.99, 21 days, $14.99, Manchester, Boohoo | `prettylittlething.json` size fields, notes, parent_company |
| Elliatt $168–$870. Puff $238–$675. Floriana $238. Nathalie $598. LA warehouse, no duties, $15 ground, 14 days, instant exchanges, XXS–XXL, Sydney | `elliatt.json` prices note, notes, size_range; feed `dresses-us.json` |
| Ester Manas XS–4XL, €190 Butter Easy Slip, €1,250 Black Polka Dots Signature, €1,960 top, Brussels deadstock, €30 / free over €350, duties, 14 days. USD at ECB 1.1133 | `ester-manas.json`, page `fx` |
| JPB $110–$375, Countryside $110, Lapis $285, kaftans/kimonos, free over $200, $10 restocking, 14 days, sale not refundable, XS–XL | `jens-pirate-booty.json`; feed `jpb-dresses.json` |
| Bardot Adrie $219, Natalya $139, 30 days, US ship origin, $10 / free over $200, AU sizing to US 12 | `bardot.json` prices note, notes |
| Selfie Leslie ≤$155, Lovers Lane $89, Hayden $69, MIKA & GALA/LIONESS, free over $100, 30 days, $9.75, 40%+ final sale, XS–XL with some to 4XL | `selfie-leslie.json`; feed `selfie-dresses.json` |
| LIONESS ≤$115, Melrose $70, Kiss & Tell $55, luxury-trend cue, free US shipping, 30 days, $15 refund deduction, XXS–XXL | `lioness.json` prices[dresses], notes |
| Witch Bitch half ≤$25, 6X, IGIGI $24, $495 Jil Sander, under $100, all sales final, New Haven | `witch-bitch-thrift.json` prices note, notes; feed `dresses.json` |
| €1,960 and $12 in intro | ester-manas and witch-bitch-thrift price max/min |
