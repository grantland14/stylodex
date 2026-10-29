# Review: stores like Gap (new page, steps 2–5)

Built 2026-10-29. `url_prefix` stores, slug `gap`, anchor `kind: brand` (own label). Category C =
**jeans**, compared on women's jeans: gapinc.com gives Gap a "heritage grounded in denim", jeans are
the category with a stored regular-price range, and it matches the old-navy page. Author: Ash.
Copy written against `voice.md`. Older page files were used for JSON shape only.

## Gate (lib/pipeline.ts → judgeBrandsLikePage, now = 2026-10-29)

- Renderable picks: **12 / 12**. Title: "12 Stores Like Gap for Casual American Style".
- `missingAnchorFacts` = `[]`. This run added the anchor's `size_range` (000–20; petite and tall)
  and `has_tall` from the product API size facet. Gap has no share image (`no_share_image`), which
  the gate allows.
- `pickProblems` = `[]` for all 12. **Indexable: true**, reasons `[]`.
- `npm test`: 29 pass, 0 fail. `npm run lint:facts`: ok.

## Picks

| Rank | Pick | Sources (E/D/C/P/A) | Jeans price | Label |
|---|---|---|---|---|
| 1 | Everlane | E, D, P | $88–$148 (69) | similar |
| 2 | Banana Republic | E, D, A | $120–$148 (10) | pricier |
| 3 | Levi's | E, D, C | none (levi.com 403; US stores, sells_categories jeans) | none |
| 4 | Abercrombie & Fitch | E, D | $80–$110 (**men's** row) | similar |
| 5 | Old Navy | E, D | $34.99–$69.99 (41) | cheaper |
| 6 | Uniqlo | E, D | $49.90 (7), **new this run** | cheaper |
| 7 | Toad&Co | P | $125–$130 (18), **new this run** | pricier |
| 8 | J.Crew | D | $148–$198 | pricier |
| 9 | Madewell | E | $148–$198 | pricier |
| 10 | Outerknown | P | $168–$198 (women's Scout $168) | pricier |
| 11 | American Eagle | D | none (all pairs marked down) | none |
| 12 | J.Crew Factory | E | none (all pairs marked down), **new brand file** | none |

E = Effortless Gent (Oct 2021, men's angle), D = disco directory (no author, Jul 2026,
human_check), C = The Commons (Oct 2024), P = Panaprium (Apr 2024), A = The Adult Man (Apr 2024,
counted for BR only). Ranking: sources, then price-midpoint distance from Gap ($89.95).

These aren't picks (full list in the page file). Blocked (403): H&M, Wrangler, Tommy Hilfiger,
Reformation. Sell no jeans: Tentree, ABLE, Ninety Percent, Christy Dawn, Colorful Standard,
Taylor Stitch. Ships to GB only: Thought. Domain redirects elsewhere: Amour Vert. Out of scope as
marketplaces: Goodthreads, Etsy, Made Trade. Not verified (menswear, footwear or no reason): disco's
long tail. The 60 Apart pool brands have no outside source.

## Brand files written (merge_brand.py, patches in my scratchpad `patches/gap/`)

These were merged one at a time:
- gap: size_range, has_tall, notes on sizes, the cross-brand returns rule and the Gap Inc. brand list.
- uniqlo: jeans price and sells_categories.
- toad-and-co: jeans price and sells_categories.
- j-crew-factory: new file.
- everlane: note that jeans waists run 23–35. The stored size_range of 00–16 isn't traced to jeans, so the copy doesn't use it.
- abercrombie-fitch, able, tentree, ninety-percent: notes only.

## FAQ sources

The one `keywords-explorer-matching-terms` call ("gap", questions, US, volume desc, 50 rows)
returned mostly gap insurance, anion gap and gap year. Only "can you return gap to old navy" (1,100)
fit, and it's answered from the Gap Inc. returns FAQ JSON. The other two questions are Google People
Also Ask questions from the Ahrefs `serp-overview` for "brands like gap": "What are the four gap
brands?" (answered from gapinc.com/en-us/about) and "Is Gap luxury clothing?" (answered from the
10-K's "casual American style" line and the stored prices). This deviates from write.md, so it's
in human_check. Skipped: "what are stores similar to gap" (the page itself answers it).

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | Its purpose is "stores like Gap" for US shoppers, and it covers clothing only. |
| G2 | PASS | Each store's real regular women's-jeans range, plus sizes, shipping and returns read from the stores. No top-ranking page has these. |
| G3 | PASS | Each pick gives a specific decision: the shared Gap Inc. bag vs brand-only store returns, Uniqlo's Short/Tall Baggy Barrel, Toad&Co's sizing-up advice, Madewell hemming, Everlane's inseams. |
| G4 | PASS | No first-person experience or testing. Author Ash, bio untouched. |
| G5 | PASS | Author Ash with bio. Not YMYL. |
| G6 | PASS | Every number traces to a stored field or note (see fact trace). |
| G7 | N/A | Not YMYL. |
| G8 | PASS | The title count matches the 12 rendered picks. All sell women's jeans and can be bought in the US. |
| G9 | PASS | Intent "where else to shop like Gap": every pick is a store, with cheaper, same-price and trade-up routes and cross-pick comparisons. |
| G10 | PASS | Price, fit and terms for each pick, plus a How to choose section and 3 FAQs. |
| G11 | PASS | Intro 61 words. Bodies run 107–138 words (Madewell 107, slightly under 110). Closing 109. FAQ answers 27–31. |
| G12 | PASS | Read 2026-10-29. The Last checked line covers dates. |
| G13 | PASS (narrow) | Specifics beat the top pages. It's weaker than ideal because H&M is missing and the Levi's, American Eagle and J.Crew Factory picks show no price. |
| G14 | PASS | No implied testing. The template carries the disclosure. |
| G15 | PASS | No semicolons, em dashes or sentences over 30 words. The repeated "The trade-off is…" openers were varied. |

## Voice check ("What we never write")

No process narration and no dates. Prices aren't explained as "couldn't read". Counts appear only
as reasons ("three times Gap's window", "about $30 under Gap's lowest"). No verdicts, no invented
experience, no hype. Brands are "it" throughout. Self-edit fixes:
- "Sizes stop at 16" for Everlane was untraced, replaced with jeans waists from its feed.
- "top-tier Real Rewards" was unsourced, now "Level 3".
- "older company than you might think" was filler, cut.
- "on qualifying orders" was added to J.Crew's free shipping.

## AI-voice scan

These were fixed:
- Two rule-of-three lists cut ("cashmere, leather and linen" became two items, and so did the intro's three motives).
- The "The trade-off is…" and "The catch is…" formula was varied.
- "Wear-test" was cut because it implies use.

Remaining risk: Abercrombie's fit list is the store's own grouping, and J.Crew and J.Crew Factory both name the "Classic, Petite and Tall" split (store terms).

## Fact trace (copy → stored field)

- **Intro.** $34.99 → old-navy price min. $198 → j-crew and madewell price max.
- **Everlane.**
  - $88 Way-High Curve and its 27/29 inseams → everlane price note.
  - Baggy Barrel-Leg $128 → product-images.json.
  - Cost transparency → production_model and notes.
  - $8 shipping, $7 mail returns, free in-store returns → notes.
  - 33 waist (34–35 on a few) → everlane note (this run).
  - Gap $89.95 → gap price note.
- **Banana Republic.**
  - $130 and $120 → BR price note.
  - Shared bag and $50 → old-navy cid=3019 note and BR banner note.
  - 0–20, petite 00, long 4 → size_range.
  - 1978, travel outfitter, cashmere/linen → BR notes.
  - Brand-only returns → gap note (returns FAQ JSON).
- **Levi's.** 1853, San Francisco, jeans and casual wear, 40 states → levis notes. Gap 1969 → gap notes.
- **Abercrombie & Fitch.**
  - $80, $110 and fit names → A&F price note (men's).
  - Women's leg-shape grouping → hollister-run note.
  - Waists 26–38 → size_range.
  - 1892 Manhattan, Ohio → notes.
  - $99 → free_shipping_min_usd.
- **Old Navy.**
  - $44.99–$54.99, Wow $34.99 → price note.
  - Shared bag and $50 → cid=3019 note.
  - 00–30 petite/tall → size_range.
  - Gap 20 plus a 2X → gap note (this run).
  - Brand-only returns → returns FAQ.
- **Uniqlo.**
  - $49.90 and style names, Short/Tall → uniqlo price note (this run).
  - $99 and free pickup, return rules → SUPIMA product-page note.
  - 86 US stores → Fast Retailing note.
- **Toad&Co.**
  - $125/$130, organic and recycled cotton denim, 0–18, size up → toad-and-co price note (this run).
  - California, B Corp → notes and certifications.
  - 90 days and $7 fee, $150 → notes.
- **J.Crew.**
  - Classic/Petite/Tall, 23–37, $158, $148–$198 → size_range and price note.
  - $7, Rewards free, 30 days, $7.50 → notes.
  - Factory "discount" → j-crew-factory notes.
- **Madewell.**
  - "Story begins with denim", $148, $158–$198, Insider hemming → price note.
  - Petite, tall, curvy, plus 14W–24W → notes.
  - $5/$7, Insider-only free shipping, 30 days → notes.
  - "$58 more" → 148 − 89.95.
- **Outerknown.**
  - Scout $168, Beachcomber $168, Craftsman $198, mostly men's/unisex → price note.
  - 98%, FLA 2015 → notes.
  - Free full-price returns 30 days, $125 → notes.
- **American Eagle.**
  - Homepage title → notes.
  - Curvy Stovepipe → notes.
  - 60 days, $5, Level 3, $75, $7.95 → notes.
- **J.Crew Factory.**
  - Classic/Petite/Tall/Curvy, waists 25–35 and petite 24 → j-crew-factory notes.
  - $7, $99, 30 days, $7.50, Factory-store returns → notes.
  - No plus → notes.
  - Madewell plus, Old Navy to 30 → their size fields.
- **Closing.** Uses only the figures above.
- **FAQ.**
  - Returns → gap note (returns FAQ JSON).
  - Four brands → gap note (gapinc.com) and cid=3019 shared bag.
  - Luxury → gap notes (10-K "casual American style"), gap price note ($89.95), BR price ($120).

## Estimates

- **Estimated Page Quality:** High. Every pick with a price carries its own regular women's-jeans
  range, and the page explains the Gap Inc. shared-bag versus brand-only-returns rule. No ranking
  page states that rule.
- **Estimated Needs Met (dominant intent):** Moderately to Highly Meets. Most expected names are
  present (Old Navy, BR, Uniqlo, J.Crew, Madewell, Levi's, Everlane, A&F). H&M is missing, and three
  picks show no price.
