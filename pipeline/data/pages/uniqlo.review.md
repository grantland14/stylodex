# Review: brands like Uniqlo (steps 2–5)

Written 2026-10-29. Author: Ash. Copy in `uniqlo.json` → `author`, `copy`.
Checked with `lib/gate.ts` through `lib/pipeline.ts` (tsx script, now = 2026-10-29):

- Title: "11 Brands Like Uniqlo for Simple, High-Quality Everyday Clothing"
- Rendered picks (rank order): muji, everlane, forever-21, honest-basics, gu, marks-spencer, colorful-standard, tentree, asket, mate-the-label, studio-nicholson. `pickProblems` returns `[]` for all 11.
- Verdict: **not indexable yet**. Only reason: `anchor missing: imageUrl` (no `/img/` asset yet, which the coordinator's image step adds). Once it's added, the page passes.
- `npm test`: 27/27 pass. `npm run lint:facts`: ok.

## Category

`tees` (T-Shirts). Uniqlo sells many product types, so C is the line its basics are built on. Its LifeWear page calls it "simple, high-quality, everyday clothing", and the outside lists frame it as basics (RUSSH, Stylight, LBB; Mumsnet's Muji tip is about T-shirts). The men's T-shirt is the like-for-like item every pick sells. Prices are regular-price men's tees (unisex where the store doesn't split). Multipacks and tanks are excluded. Anchor range: $9.90–$34.90, read from a truncated listing (`human_check`).

## Picks: 11 renderable of 11 (target 10–15, floor 6, not padded)

| Rank | Pick | Indep. sources | Tees (USD) | Relation |
|---|---|---|---|---|
| 1 | Muji | 4 (RUSSH, LBB, Mumsnet, zhihu) | 14.90–60 (36 items, all) | similar |
| 2 | Everlane | 2 (Stylight, LBB) | 34–88 (33 regular of 366) | similar |
| 3 | Forever 21 | 1 (zhihu) | 7.99–34.99 (10) | similar |
| 4 | Honest Basics | 1 (Good On You) | €14.90–27.90 ≈ 16.59–31.06 (5) | similar |
| 5 | GU | 1 (zhihu) | 6.90–29.90 (15 visible) | similar |
| 6 | Marks & Spencer | 1 (LBB) | 35.99–68.99 (**4-tee sample**) | pricier |
| 7 | Colorful Standard | 1 (RUSSH) | €35–50 ≈ 38.97–55.66 (106) | pricier |
| 8 | Tentree | 1 (The Commons) | 45 (98) | pricier |
| 9 | Asket | 1 (Good On You) | 65–95 (3) | pricier |
| 10 | MATE the Label | 1 (The Commons) | 78 (4, men's) | pricier |
| 11 | Studio Nicholson | 1 (RUSSH) | £95–110 ≈ 126.23–146.16 (8) | pricier |

Ranked by independent sources, then by how close the price range sits to Uniqlo's. The two zhihu answers count as one source.

Not picks (all in `rejected` with reasons). The biggest gaps:
- **Refuse WebFetch (403):** Zara (4 sources), H&M (3), Mango (3), COS and Arket (2 each). Monki and Weekday are H&M Group. These five would probably rank in the top six once verified, so they head `human_check`.
- **No readable prices:** Gap and Old Navy (product grid loads by script). American Eagle shows only one full-price tee.
- **Other:** Patagonia (maintenance page), New Look, Massimo Dutti and Stradivarius (403). Norse Projects prices in DKK and doesn't confirm US shipping.
- **Not checked:** Asian labels named only by zhihu, India-only labels named only by LBB, and marketplaces on Global Brands Magazine. The Apart Style pool (130 extra brands, e.g. Quince, Kotn) has no outside evidence.

## Anchor and human_check

Uniqlo is **verified**. The record was `unverified` after a 503 on another run. The homepage, men's listings and the SUPIMA product page all loaded this time, so `status` and `notes` were overwritten through merge_brand.
- Shipping: $7.99, free over $99 or with in-store pickup.
- Returns: 30 days from the shipping date.
- Sizes: XXS–3XL.
- Stores: 86 in the US (Fast Retailing, August 31, 2026).

faq-us.uniqlo.com refused WebFetch (403) and wasn't used. `human_check` (7 items): the anchor tee range (truncated listing); Zara, H&M, Mango and COS/Arket pick checks; the M&S sample range; and whether zhihu counts as evidence (GU and Forever 21 rest on it alone).

Shared brand files: new files for muji, gu, asket, tentree, studio-nicholson, colorful-standard and marks-spencer. `tees` prices were added to everlane and forever-21. honest-basics and mate-the-label were flipped from `off_category` (a dresses run) to `verified` with `--overwrite status,notes,website_url`, and their old notes are kept. Both are live and sell tees. Their dresses rows are unaffected because the gate checks the category price.

## FAQ sources (Ahrefs)

One call: `keywords-explorer-matching-terms`, "uniqlo", US, terms=questions, volume desc, limit 50.

| Used | Question (US vol) | source_query |
|---|---|---|
| Yes | Is Uniqlo Japanese? (1,200) | `is uniqlo japanese` |
| Yes | Who owns Uniqlo? (150) | `who owns uniqlo` |
| Yes | How much is Uniqlo shipping? (200) | `how much is uniqlo shipping` |
| Yes | Can you return Uniqlo online orders in store? (100) | `can you return uniqlo online orders in store` |

Skipped because no stored fact answers them:
- is uniqlo fast fashion (2,100)
- what is uniqlo (1,300; the intro covers it)
- is uniqlo good quality (800)
- Black Friday
- price adjustments
- the Dodgers deal
- self-checkout
- student and military discounts
- is it ethical or sustainable
- washing instructions

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | "Brands like Uniqlo" for US shoppers is the site's purpose. Only tees and basics are covered. |
| G2 | PASS | Store-level data that no ranking page has: regular-price tee ranges from each store's own feed, size ceilings, US shipping bars, return windows and fees. The FAQ comes from Ahrefs questions, not People Also Ask. |
| G3 | PASS | Concrete trade-offs: Muji stops at XL. Honest Basics charges €15 and takes 3–6 weeks to ship. The M&S 7-pack is $12.71 a tee. Asket sells by length. Studio Nicholson allows only 14-day returns. |
| G4 | PASS | No wear, try or test claims. Author bio not added to. |
| G5 | PASS | author "Ash". Not YMYL. |
| G6 | PASS, one caveat | Every sentence traces (table below). Caveats: the M&S range and Uniqlo's tee range come from truncated listings (`human_check`), and the Everlane/Shein line comes from that brand file's Wikipedia note. |
| G7 | PASS (N/A) | Not YMYL. |
| G8 | PASS | "11 Brands…" is the true count. "Simple, High-Quality Everyday Clothing" is Uniqlo's own LifeWear wording. |
| G9 | PASS | Each pick is placed against Uniqlo's price, sizes and shipping. The comparison covers both sides. |
| G10 | PASS, with one gap | The cheaper, same-price, bigger-size and organic routes are all covered. But Zara, H&M and Mango are missing, and a reader may still search for them. |
| G11 | PASS | The intro is 68 words and the answer starts at pick 1. |
| G12 | PASS | All facts are dated 2026-10-29 in the data. The "Last checked" line carries the date. |
| G13 | PASS (estimate High, borderline) | More specific than RUSSH, Stylight or Good On You on prices, shipping and sizes. The missing Zara/H&M/Mango keeps it from High-plus. |
| G14 | PASS | No sponsored claims. Selection criteria live on the method page. Affiliate links go through `/go/`. |
| G15 | PASS | Read as a whole. No near-duplicate of a sibling page. |

**Estimated Page Quality:** High. The strongest reason: every pick carries its regular-price tee range, size ceiling and US shipping/returns terms, read from its own store.
**Estimated Needs Met (dominant intent):** Moderately to Highly Meets. Verifying Zara, H&M and Mango (the most-named alternatives) would make it Highly Meets.

## Voice check (`voice.md` "What we never write")

- No process narration. There's no "we checked", no check dates and no "its About page says" in the copy. The intro's "the ones outside lists name most come first" describes the sort order only.
- No spreadsheet sentences. Counts appear only inside a reason, as in "under $13 a tee".
- No verdicts on brands. The Everlane/Shein line is a stated fact with no judgment.
- No invented experience.
- No hype words.
- No semicolons or em dashes. A brand is always "it", never "they". Contractions are used throughout.
- The intro opens on a reader moment ("You've bought the same Uniqlo crew neck in three colors…").
- Each pick opens answer-first with a named product and price, and ends on a trade-off that points to another pick (Muji → Honest Basics/M&S, F21 → GU, Tentree → Colorful Standard, Asket → Colorful Standard, MATE → Honest Basics, Studio Nicholson → Asket).
- Body lengths are 109–137 words. The closing is 114.

## AI-voice scan (ai-voice-avoid.md)

Fixed in drafting:
- "far more colors" and "if Uniqlo's color range feels thin" (unsourced comparisons) were cut.
- "almost all of them carry a print" was replaced with the stored fabric fact plus "plenty of the range carries a graphic" (78 of 164 descriptions say so).
- "rather than seasonal drops" (fake contrast) was cut.
- "the cheapest plain cotton tees in the US" (false: GU is cheaper) was replaced.
- The "Mujirushi Ryohin means no-brand quality goods" gloss wasn't in any fetched source. It was cut, and Muji's known_for was corrected to "Simple, Unbranded Goods".

No §13/§14 words found.

## Fact trace (copy → stored field)

- Uniqlo $9.90–$34.90, HEATTECH Ultra Warm $34.90 → uniqlo.prices.tees (+ note). Free over $99, $7.99, 30 days from shipping, return postage, store returns rule → uniqlo.notes (SUPIMA product page). Japanese, Yamaguchi City, Fast Retailing → uniqlo.hq_country, parent_company, notes (Wikipedia).
- Muji:
  - Product prices ($14.90, $19.90 pre-washed organic, $29.90, $60 loopwheel), XL/XXL → muji.prices.tees.note.
  - $80/$50 states and free label 30 days → notes (shipment, return-policy).
  - Unbranded → notes (Wikipedia). Same country → hq_country JP.
- Everlane:
  - $34 Essential Organic Crew (OCS organic), $38 Archive, $88 Thermal Henley, XS–XXL, colors on sale → everlane.prices.tees.note.
  - 30 days, $7 label, in-store free; Shein May 2026 → everlane.notes.
- Forever 21: $7.99 crew and V-neck, $34.99 Saint Velour, small range → forever-21.prices.tees.note. US only, free from $50, 30 days, $9.99 fee, final sale → forever-21.notes.
- Honest Basics:
  - Berlin → notes. €14.90 Basic T-shirt (70/30, 180 gsm, preshrunk), €27.90 Long Henley → prices.tees.note.
  - S–3XL → size_range. €15/kg, 3–6 weeks, no threshold, duties, 30 days, postage → notes.
- GU:
  - Fast Retailing → parent_company. $6.90 Cotton Color Crew, $14.90 Dry Ponte, $29.90 Cotton Boxy → prices.tees.note.
  - $79, pickup, 30 days from shipping, return postage, XS online only → notes (product page). SoHo flagship → notes (Wikipedia). XL → size_range.
- M&S:
  - USD store, duties included, $12.99, 4–11 days, $125, 28 days, $10 fee → notes.
  - $35.99, $88.99 7-pack ($12.71), $68.99 Autograph → prices.tees.note. 4XL → size_range.
- Colorful Standard: €35 Classic and Oversized, €50 Heavy Boxy, 100% organic, Portugal, XS–2XL, shades (Deep Black, Bubblegum Pink: feed titles) → prices.tees.note. $15 FedEx, $100, 90 days, €4.25 → notes.
- Tentree: $45 all regular tees, Juniper blend, graphic share, S–XXL → prices.tees.note. 10 trees → known_for/notes. $100/$7.50, $10 returns, free exchanges, 30%+ final sale → notes.
- Asket:
  - $65 The T-Shirt, Portugal, custom fabric, $95 Long Sleeve and Lightweight → prices.tees.note.
  - Permanent collection → known_for/notes. XS–XXL in three lengths, duties, $150, 30 days, $10, free exchanges → notes.
- MATE:
  - $78 men's heavyweight (GOTS, pocket, India), $68 Pima Classic (Regenerative Organic) → prices.tees.note. B Corp → certifications.
  - Mostly women's → notes (homepage title). XL/XXL → size_range. $200/$10, 30 days, $9 → notes.
- Studio Nicholson: £95 Bric, £110 Piu → prices.tees.note. Nick Wakeman 2010, fabric-first, store cities → notes (About). Duties, $100, 14 days, £10 → notes. XS–XXL → size_range.
- USD conversions → ECB 2026-10-28 (page `fx`).
