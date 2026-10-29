# Review: brands like Dr. Martens (`brands/dr-martens`)

Checked 2026-10-29. Author: Ash. Category C = `boots` (first footwear category on Stylodex).

## Gate result (lib/pipeline.ts → judgeBrandsLikePage, now = 2026-10-29)
- **Indexable: yes.** Reasons: none. 12 of 12 picks render.
- Title: "12 Brands Like Dr. Martens for Air-Cushioned Leather Boots".
- Order: Solovair, Thursday Boot Company, Jim Green, Blundstone, Red Wing Heritage, GORAL, Frye, Nisolo, Will's Vegan Store, Velasca, Unmarked, Viberg (independent sources, then price-range closeness to Dr. Martens' $130–$430).
- Price labels: 10 `similar`, Unmarked and Viberg `pricier`.
- `npm run lint:facts`: all brands this page wrote pass. The command currently exits 1 on three other agents' files (2020ave, dicks-sporting-goods, shop-style-shark), not touched here.

## Anchor
- `verified`. drmartens.com gives the StylodexBot UA a bot-challenge page (not worked around), so store facts come from WebFetch: boots category, 3 pages, 81 items, $130–$430, no markdowns; 1460 product page; size guide; terms (free shipping $50+); drmartensplc.com (HQ, 1960 origin).
- **returns_days 30 is the soft spot** (human_check #1): the support article renders client-side and the old URL returns 401, so 30 days came from the search-index text of the official article, not a fetch. The copy doesn't use the anchor's returns.

## Evidence
- Editorial: stridewise (8 brands), cobbledgoods (10), goodonyou (9), fashionbeans (7). Disco directory: two pages, counted as one source, never named on the page.
- Dropped: Reddit (refuses), YouTube, TikTok, Pinterest, Instagram, Facebook, Amazon, Editorialist, and tdpri (sends bots to a TollBit paywall).
- Solovair has 4 sources, five picks have 2, six have 1 (Frye, Nisolo, Will's, Velasca, Unmarked, Viberg).
- Out: Beckett Simonon (2 sources, but every boot shows a compare-at markdown), Timberland (2 sources, 403, still unverified). Clarks, Underground England, Buffalo London, Conker and Sorel return 403. Wolverine, Danner, Grenson and Vagabond are reachable but weren't read: re-run candidates.

## G1–G15
| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A directory of brand alternatives is the site's purpose. Boots are Dr. Martens' core line, and every source compares boots. |
| G2 | PASS | US prices from each store, return windows, duty terms, widths and US shops. None of the top results has them (stridewise and cobbledgoods give one price each, goodonyou none). |
| G3 | PASS | Concrete trade-offs per pick: the $15 Solovair return label, Red Wing's account-only free shipping, Frye's $275 threshold, 14-day windows, AU/UK sizes stamped on Blundstones, Viberg's store-credit-only returns. |
| G4 | PASS | No first-person experience. Nothing says how a boot feels or fits on. Ash's bio is untouched. |
| G5 | PASS | Author Ash. Not YMYL. |
| G6 | PASS | Every number traces to a stored fact (trace below). The "12" in the title is the real count. |
| G7 | N/A | Not YMYL. |
| G8 | PASS | known_for "Air-Cushioned Leather Boots" comes from the 1460 page (100% leather upper, air-cushioned sole). The page covers boots only. |
| G9 | PASS | The intent is boots like Docs, and the page serves both close copies (Solovair, Thursday, Frye's Phoebe Combat) and the "better-made" reading (Red Wing, GORAL, Viberg). The SERP supports both. |
| G10 | PASS | Price, shipping, returns and sizes for each pick, a decision guide and 4 FAQs (ownership, origin, fit, Solovair link). |
| G11 | PASS | The intro is 71 words, opens on the $180 1460 moment and makes the factory point. No preamble. |
| G12 | PASS | Prices are from 2026-10-29, all in USD. "Last checked" comes from the template. |
| G13 | PASS | Better than the top 3: stridewise has 8 brands with some old prices, cobbledgoods lists slow-fashion makers with "from" prices, and goodonyou gives no prices or reasons. This page is US-priced across 12 brands with landed-cost terms. |
| G14 | PASS | No sales voice. The disclosure comes from the template. Trade-offs are stated for every pick. |
| G15 | PASS | Read as a whole, with varied openers. No sibling page uses `boots`. Thursday and Red Wing copy is written fresh, not taken from the jackets pages. |

**Estimated Page Quality:** High. The strongest reason is the US landed-cost detail per boot brand (duties, thresholds, return windows and fees), which no ranking page gives.
**Estimated Needs Met (dominant intent):** Highly Meets for "boots like Docs" shoppers. It's weaker for people who want cheap look-alikes: the budget picks are Will's Vegan Store ($80+) and Jim Green ($149.99+), and the Amazon-only dupes aren't picks.

## Voice check (voice.md "What we never write")
- No process narration: no "we checked", no dates and no source names in the copy. The disco directory is never named.
- No spreadsheet sentences. "Three times" (Viberg) and "a quarter of the price" each carry a reason.
- No brand verdicts, no invented experience, no hype words.
- No semicolons, em dashes or en dashes in the copy. Two colons. Contractions throughout. A brand is "it".
- Every pick has an answer-first line with a named product and price, one useful detail (widths, AU/UK sizing, the account-only shipping, pre-orders exchange-only), an honest catch, and a pointer to another pick. Best-for lines are use cases.

## AI-voice scan (ai-voice-avoid.md)
- Fixed: five "X is the pick for…" openers were reworded (GORAL, Nisolo, Velasca, Unmarked). Rule-of-three in the intro ("resoled, ship free, a year") was cut to two. An unsupported "best-known name" (Iron Ranger) became a price comparison. A "welted" claim for GORAL was removed because it isn't stored. Velasca's "desert/Chelsea/dress rather than lace-ups" line was removed because its collections contradict it.
- Kept: one colloquialism ("Quite a lot, it turns out").
- Smell test: every sentence names a brand, product, price, size or term.

## Fact trace (copy → stored field)
- Intro: 1460 $180 → dr-martens notes (1460 page). 35 years under licence → solovair notes (history). Duties paid → solovair/goral/wills shipping notes. A full year → wills returns_days 365.
- Solovair: 8 Eye Derby $239, Vegan from $219/$229 → price note + feed. Goodyear-welted, handmade in UK, Wollaston, 35 years → notes (history). Vintage MIE $280 → dr-martens price note. $150 free, duties paid, 30 days, $15 DHL → notes. Men's 4–15 → size_range.
- Thursday: Stomper $235, Combat $190, Rebel $198, $549 Shinki Cordovan → price note. Widths, 6–16, women's 4–13 → notes (boots). $50 free, 30 days, free returns over $80 → existing notes (refund policy).
- Jim Green: AR8 $219.99, Highlander Pro $149.99 → price note. Jadon $210 → dr-martens notes. Hand crafted in SA, US warehouse, 48 states $50, 60 days, $10 sale restocking → notes. US 7–14 with halves → size_range.
- Blundstone: #500 $209.95, $189.95–$284.95, All-Terrain Thermal → price note. 2976 $180 → dr-martens notes. Hobart 1870, five US shops, AU/UK stamp, sizes → notes.
- Red Wing: Blacksmith $329.99, Iron Ranger $359.99, $279.99 low → price note. Goodyear welt, resoleable, Minnesota repairs, Clara B/D 5–12 → notes. 30 days, free return shipping, store returns, $50 with account, $10 guest → notes.
- GORAL: Sharman $490, $422–$575 → price note (US setting). Duties prepaid, $400 free, 14 days, pre-orders exchange-only, Poland 1936, Sheffield 2005, US 7–14 → notes.
- Frye: Phoebe Combat $248 (leather, cushioned insole, EVA) → notes. Harness 12R $498, Paul Chukka $188 → price note. $12, $275, 30 days → notes. Sizes → size_range.
- Nisolo: Go-To Lace Lug $248 (water-resistant suede, EVA, contrast welt, speed hooks) → notes. Lug Chelsea 2.0 $248, Vera/Vida $368, $228 → price note. $150 free, 14 days → notes. 5–13 → size_range.
- Will's: Dock Boots $143, Portugal, 69% biobased → notes. $80–$243, most under $180 (81 of 108 boots) → price note + feed. Free US shipping, no minimum, no duties, 365 days → notes. Vegan 1460 Felix $180 → dr-martens notes.
- Velasca: Fruttiroeu $590 (full-grain, Vibram) → notes. $340–$870, Umbrelèe → price note. USD → price currency.
- Unmarked: Riot $550 (bison, Vibram, Stormwelt) → notes. $450–$2,500 crocodile → price note. $500 free, made to order and ready to ship, repairs and rebuilds, 14 days, no exceptions for fit → notes. US 4–14 → size_range.
- Viberg: since 1931, stitchdown, $1,300–$2,240 → notes + price note. $30 shipping, 14 days store credit → notes. US 5–13 → size_range.
- FAQ: plc, Camden, 1 April 1960, Wollaston → dr-martens notes (drmartensplc.com). Size advice and width difference → dr-martens notes (size guide). Solovair 35 years, $229 vegan derby → solovair notes. Sister-brand question from People also ask (SERP "brands like dr martens").

## Open items (also in `human_check`)
1. Dr. Martens returns_days (search-index source).
2. Spot-check the anchor's WebFetch-read prices.
3. Thursday's shared `size_range` is "XS–3XL" (jackets), which is wrong on a boots page. It needs a per-category size field or a combined value.
4. GORAL US prices come from the store's US setting (the base feed is GBP).
5. `product-images.mjs` has no `boots` word list. Solovair's feed includes boot and care-kit bundles, and GORAL's includes shoes.
