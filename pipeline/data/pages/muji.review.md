# Review: stores like Muji (steps 2–5)

Written 2026-10-29. Author: Ash. Copy in `muji.json` → `author`, `copy`.
Checked with `lib/gate.ts` through `lib/pipeline.ts` (tsx script, now = 2026-10-29):

- anchor missing: none
- every pick: `pickProblems` = []
- **indexable: true**, 10 of 10 picks render, reasons: none
- title: "10 Stores Like Muji for Minimalist Japanese Basics", prefix `stores`
- `npm run lint:facts`: ok. `npm test`: 30 pass.

## Category

`tees` (T-Shirts). Muji sells home goods and stationery too, and Stylodex covers fashion only, so
the page is about Muji's clothing. T-Shirts sit under Best Sellers in muji.us's own menu, and its
apparel page sells "casual, minimalist Japanese style". The like-for-like item is the men's
regular-price tee, the same definition as the Uniqlo page, so the Uniqlo, Everlane and GU prices
are reused from that run (all checked 2026-10-29).

Anchor `known_for` was "Simple, Unbranded Goods" (Wikipedia, home-goods sense). It's now
"Minimalist Japanese Basics", from the apparel page meta, so the title is about clothing. This is in
`human_check`.

## Evidence

Ahrefs `serp-overview` was run for 4 keywords. "similar to muji" returned no SERP. The editorial
pages for these keywords are mostly home goods (Bob Cut Magazine, Hunker, Daiso and furniture
lists) or Japanese-brand guides that never call a brand a Muji alternative (Japan Wonder Travel,
Japanese Taste, The Japan School). Reddit, Tripadvisor (403) and Knoji (403) weren't read.

The outside sources that do count:
- the disco directory (21-brand list, plus the Muji profile). It's evidence only and isn't named
  in the copy.
- brandslike.info, an unsigned directory treated the same way as disco. It's in `human_check`.
- one zhihu answer, which names Uniqlo.

## Picks: 10 renderable of 10 (target 10–15, floor 6, not padded)

| # | Pick | Sources | Tees (regular) | Relation |
|---|---|---|---|---|
| 1 | Uniqlo | 3 | $9.90–$34.90 | similar |
| 2 | Everlane | 2 | $34–$88 | similar |
| 3 | Organic Basics | 1 | $35–$43 | similar |
| 4 | Frank And Oak | 1 | CA$35–79 (≈$25–$56) | similar |
| 5 | GU | 1 | $6.90–$29.90 | similar |
| 6 | A.P.C. | 1 | $85–$330 | pricier |
| 7 | Norse Projects | 1 | $90–$215 | pricier |
| 8 | nanamica | 1 | $90–$250 | pricier |
| 9 | Margaret Howell | 1 | $125–$190 | pricier |
| 10 | Bassike | 1 | $130–$280 | pricier |

Picks are ranked by source count, then by how close their price range sits to Muji's ($14.90–$60).

Brand file changes:
- New files: norse-projects, nanamica, margaret-howell, bassike.
- Patched: organic-basics (tees, shipping, returns, sizes, known_for), frank-and-oak (tees),
  a-p-c (tees; `size_range` overwritten from "Mini bags to large totes" to XXS–3XL),
  muji (known_for, notes).

Not picks (full reasons are in `rejected`):
- COS and Arket (2 sources each) and Weekday return 403. They're in `human_check`.
- Pact: no readable prices.
- Acne Studios: logo and graphic tees at $300–$520, with no reason tying it to Muji.
- ssstein: no US shipping stated, and no change-of-mind returns.
- Blue Blue Japan and Mr. Olive: sites need JavaScript.
- Frev: the proxy refused it.
- my beautiful landlet: no online store.
- CDG SHIRT and Greats: not tees.

## Anchor and human_check

The Muji anchor is verified (brand file, men's tee feed re-read today). Only `image_url` is missing,
and that's optional. Human checks:
1. COS and Arket would become picks once checked.
2. Directory-only evidence: 8 of the 10 picks rest on one directory source.
3. The known_for change.
4. Uniqlo's tee range came from a truncated listing.
5. Norse Projects' US shipping rests on its US market selector.

## FAQ sources

- "is muji japanese" (200) and "does muji ship to us" (30): Ahrefs matching-terms, questions.
- "are muji and uniqlo related" (30): Ahrefs matching-terms, questions.
- "Is MUJI a cheap brand?": People also ask on "brands like muji" (`source: people_also_ask`).

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | Clothing-only "stores like Muji" for US shoppers. Home goods are left out on purpose. |
| G2 | PASS | Each store's own regular-price tee range, sizes, US shipping bar, duties and return terms. No ranking page has this, and the top results are home-goods lists. |
| G3 | PASS | Concrete trade-offs: Uniqlo's $99 bar and paid returns, Everlane's $7 label, Frank And Oak's 15 days, A.P.C.'s logo tees, Norse's import taxes, Bassike's $12 returns. |
| G4 | PASS | No wear, try or test claims. The author bio is unchanged. |
| G5 | PASS | Author "Ash". Not YMYL. |
| G6 | PASS, caveat | Every sentence traces (see the table below). Caveat: Uniqlo's range comes from a truncated listing. |
| G7 | N/A | Not YMYL. |
| G8 | PASS | "10 Stores…" is the true count. "Minimalist Japanese Basics" comes from Muji's own apparel copy. |
| G9 | PASS | Each pick is set against Muji's prices, sizes, shipping or loopwheel tee. The clothing intent is honored. |
| G10 | PASS, gap | Cheaper, same-price, bigger-size and premium routes are all covered. COS and Arket are missing, and readers may look for them. |
| G11 | PASS | The intro is 70 words, and the answer starts at pick 1. |
| G12 | PASS | All facts are dated 2026-10-29 in the data. |
| G13 | PASS (High, borderline) | More useful than the ranking home-goods lists for the clothing intent. The thin directory evidence and missing COS/Arket hold it back. |
| G14 | PASS | No sponsored claims. Affiliate links go through `/go/`. |
| G15 | PASS | Reads as a whole. No sentences are reused from uniqlo.json or the other sibling pages. |

**Estimated Page Quality:** High. Every pick carries its own store's regular-price tee range and its
US shipping and returns terms.
**Estimated Needs Met (dominant intent):** Moderately to Highly Meets. Adding COS and Arket would
lift it.

## Voice check

- No process narration, no dates and no source names.
- No spreadsheet sentences. "Most sit under $30" answers the cheapness question.
- No verdicts. The Everlane/Shein line is a stated fact. No invented experience. No hype.
- No semicolons and no em dashes. A brand is "it". Contractions are used throughout.
- The intro opens on a reader moment.
- Each pick opens answer-first with a named product and price.
- Picks are compared with each other: GU → Uniqlo/Organic Basics for sizes, A.P.C. → Margaret
  Howell for returns, Norse → Margaret Howell for duties, nanamica ↔ Muji Loopwheel.
- Body lengths are 113–128 words. The closing is 99.

## AI-voice scan

Fixed while drafting:
- "undercuts anything Muji sells" was false (Muji sells $2 bags). It now reads "every tee".
- "priciest store here" for Bassike was false (A.P.C. tops out at $330). It now reads "highest starting price".
- "the same slow method" became "the same loopwheel method".
- Repeated "the pick for" and "step up" were varied.

No three-item lists in the copy.

## Fact trace (copy → stored field)

- **Muji:**
  - $19.90 organic crewneck, $14.90, $29.90 Heavyweight, $40 Loopwheel, $60 top, XL ceiling, 25 of 35 under $30 → muji.prices.tees + notes.
  - $80/$50 states, $9/$15 tiers, free label, 30 days, NY/MA/OR stores → muji.notes.
  - Tokyo, Ryohin Keikaku, 1980, no-brand quality goods → notes (Wikipedia, re-read).
- **Uniqlo:** $24.90 SUPIMA (3XL), $9.90 DRY, $34.90 HEATTECH, AIRism, 86 US stores, $99, return postage, Fast Retailing → uniqlo.prices.tees + notes.
- **Everlane:** $34 OCS organic crew, $88 Thermal Henley, XS–XXL → prices.tees.note. Cost transparency, $7 label, Shein May 2026 → notes. $75 → free_shipping_min_usd.
- **Organic Basics:** $35/$42/$43 tees, XXS–3XL → prices.tees. B Corp, Copenhagen, US warehouse, 30 days, refund fee, free exchanges → notes and certifications.
- **Frank And Oak:** CA$35 Essential Slim (100% cotton, 180gsm, layering), CA$45, CA$79, XS–XXL → prices.tees.note. 15 days, sale final → notes and sale_pattern. USD at ECB 2026-10-28.
- **GU:** $6.90, $14.90 Dry Ponte, $29.90 Boxy Long, $79, XL, Fast Retailing → gu.prices.tees + notes.
- **A.P.C.:** Ollie $150 organic, Rue Madame $185 embroidered, Brain Dead $85 → prices.tees.note. US/CA only, 14 days, $10 → notes.
- **Norse Projects:** Standard $90 (organic, Portugal, ribbed collar, twin-needle), Heavy Loose $100, Elmelunde $110 (heavyweight organic, garment dyed, relaxed), XS–XXL, VAT and import taxes, 14 days, Copenhagen → norse-projects.json.
- **nanamica:** Loopwheel COOLMAX Jersey Tee $90 (50/50, half-century-old machines, logo), Pocket Tee $120 "signature", utility and sports, NY store, $200, 14 days, discounted final → nanamica.json.
- **Margaret Howell:** MHL. Simple $125 (cotton linen, garment dyed, boxy), Flatlock $145, Guernsey/Smock $175, mainline $190, XS–XX, US duties included plus state tax, 28 days, London → margaret-howell.json.
- **Bassike:** Regular Fit $130 (lightweight organic single jersey, twisted seams, made in Australia), Boxy Midweight and Fitted Henley $170, $280 top, XXS–XXL, duties included, $300, $12 returns, 14 days, sale exchange/credit only → bassike.json.
