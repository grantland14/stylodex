# Review: stores like Lands' End (2026-10-29)

Author: Ash. URL prefix `stores` (kind brand: Lands' End sells its own label). Category `coats-jackets`.

## Gate (`lib/pipeline.ts` → `judgeBrandsLikePage`, tsx, now = 2026-10-29)

- **indexable: true**, reasons `[]`. Anchor missing facts: none (only `image_url`, which is optional).
- Renderable picks: **7 of 7**, every pick `[]` problems, all `price_relation: similar` against
  Lands' End's $49.95–$699.95.
- Title: "7 Stores Like Lands' End for Family Clothing and Outerwear".
- Check script: `<scratchpad>/lands-end/build/gate-check.ts`.

## Category

`coats-jackets`. Lands' End's 10-K calls it "a leading digital retailer of solution-based apparel,
swimwear, outerwear"; its homepage title is "Quality Clothing, Swimwear, Outerwear and Footwear".
Swimwear is the other hero line, but every outside source compares it with outerwear and outdoor
brands, and one forum thread is about kids' coats. Like-for-like item: men's jackets and coats,
vests excluded (the scope of the stored Eddie Bauer, Orvis and Filson prices).

## Picks: 7 renderable of 7 (target 10–15, floor 6, not padded)

| # | Pick | Sources | Regular price | Note |
|---|---|---|---|---|
| 1 | Eddie Bauer | 4 | $109–$499 | existing brand file (Filson run) |
| 2 | Orvis | 3 | $119–$449 | existing brand file |
| 3 | Merrell | 1 | $155–$165 | new; 2 regular-price jackets |
| 4 | FatFace | 1 | $132–$344 | new; 12 of 84 listings read |
| 5 | Smartwool | 1 | $190–$375 | new |
| 6 | Peter Manning NYC | 1 | $148–$495 | new |
| 7 | Filson | 1 | $199–$1,199 | existing brand file |

Ranked by sources, then by how close each range's midpoint sits to the Lands' End regular-price
median ($129.95). Short of the 10-pick target because the best-sourced brands are blocked:
L.L.Bean (5 sources, CAPTCHA page), Patagonia (2, maintenance page), The North Face (2, 403),
Columbia (2, 403). All four are in `human_check`; with them the page would reach 11.

## Anchor and human_check

Lands' End verified from its own store: men's outerwear listing data (118 products, 55
regular-price jackets), free-shipping popup, returns page, About page, a product page for sizes;
`us_stores` from its 10-K ("Company Operated stores, located in the U.S."). Seven human checks are
queued in the page file: L.L.Bean first, then the three blocked outdoor brands, the store locator,
the Willis & Geiger top price, FatFace's truncated range and missing policies, Merrell's Lando
Raincoat, and the disco evidence.

## Evidence

Kept: Trails and Freedom (9 alternatives), Find Your Paradise (peer grouping: L.L.Bean, Eddie
Bauer, Orvis), Effortless Gent (for L.L.Bean only; it's an L.L.Bean list that calls Lands' End "a
direct competitor"), Primer (Peter Manning), DC Urban Moms 2013 and 2021 threads, and the disco
directory's Lands' End page (found through its sitemap, not on the SERP; never cited on the page).
Dropped: 4 Reddit threads, 3 Quora pages (403), 3 Facebook pages, CB Insights, Craft.co, Distill
Intelligence, Similist, two L.L.Bean lists, a Tillys brand index, Put This On (a value-brand list,
not alternatives), Fedora Lounge (no Lands' End mention), Kitchen Knife Forums (403).
Co-stocking: Kohl's (403) and Nordstrom (search disallowed by robots.txt) not read.
No secondhand or thrift shops among the picks.

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A stores-like page for US shoppers replacing Lands' End outerwear, which is Stylodex's purpose. |
| G2 | PASS | Regular prices read from each store today, named products against named Lands' End products, size and returns comparisons; none of the ranking pages has prices. |
| G3 | PASS | Concrete decisions per pick: which product to compare, what's the same, what's the catch (returns window, size ceiling, short range). |
| G4 | PASS | No first-person experience; nothing worn or tested is implied. Ash's bio untouched. |
| G5 | PASS | Author Ash, bio in `lib/authors.ts`. Not YMYL. |
| G6 | PASS | Every number traces to a brand file (fact trace below). Title count = renderable picks. |
| G7 | PASS | N/A, not YMYL. |
| G8 | PASS | "7 Stores Like Lands' End for Family Clothing and Outerwear": the body covers seven outerwear sellers; known_for comes from the About page ("clothing and footwear for all the family") and the 10-K. |
| G9 | PASS | Each pick opens with what it replaces; the comparison covers both sides (prices, shipping, returns, sizes). |
| G10 | PASS | Prices, sizes, shipping and returns per pick, a How to choose guide, 4 FAQs from real queries. Missing L.L.Bean is the gap a reader would notice (see G13). |
| G11 | PASS | Intro 70 words; answer-first openers; no filler. |
| G12 | PASS | Prices and terms read 2026-10-29; the page shows the Last checked date. |
| G13 | BLOCKED (publish) | Better than Trails and Freedom on specifics, but a "stores like Lands' End" reader expects L.L.Bean, and it can't be verified (bot wall). With L.L.Bean, Patagonia, The North Face and Columbia confirmed by a human, it's High; without them it's High-minus. |
| G14 | PASS | No client, no implied testing; affiliate disclosure is in the template. |
| G15 | PASS | Read as a whole; no near-duplicate of the Filson page (different anchor products and comparisons). |

## Voice check (voice.md "What we never write")

- Process narration: none (no "we checked", no dates of checking, no sources named in copy).
- Spreadsheet sentences: none. The "mostly under $200" in the intro tells the reader where Lands'
  End's prices sit.
- Verdicts on brands: none. Catches are about attributes (returns window, size ceiling, range).
- Invented experience: none. Hype words: none.
- No semicolons, no em dashes, no bold. Brands are "it". Contractions throughout.

## AI-voice scan (reference/ai-voice-avoid.md)

- #24 colon reveals: two removed (intro "the same thing: …", Peter Manning opener).
- #1 binary contrast: "Pay it for the wool, not for choice" rewritten.
- #3 rule of three: FatFace sizes line cut from three fit names to two.
- Removed unsupported claims while editing: "warmest" (Smartwool), "softer English look"
  (closing), "heavier coat" (Filson), "single jacket ships free here" (wrong: it ships free at
  Lands' End too), "the fit the Big & Tall range doesn't cover" (not stored).
- Sentence lengths: max 28 words; paragraphs 1–4 sentences.

## Fact trace (copy → stored field)

- Intro: Squall and Expedition names, "mostly under $200" → `lands-end.notes` (named products; 44 of
  55 under $200).
- Eddie Bauer: Superior Down Waterproof Hooded Parka $349, Cirruslite $129, Packable Rainfoil $109 →
  `eddie-bauer.prices[coats-jackets].note`; $99 US only, 30 days, $3.50 label, stores closed April
  2026 → `eddie-bauer.notes`. Lands' End Expedition Parka $359.95, $99, 90 days → `lands-end`.
- Orvis: 1856 Field Coat $198, canvas, flannel lining, corduroy collar, XXL, $6 no minimum,
  Manchester VT 1856, US stores, $449 PRO jackets → `orvis` notes and price note. Canvas Barn
  $129.95 → `lands-end.notes`. Eddie Bauer 3XL on about half → `eddie-bauer.notes`.
- Merrell: Ironvale $165, Pineforge $155, $75 free shipping, free returns and exchanges → price
  note, notes; 1981, Wolverine World Wide, hiking boots → Wikipedia note. Wanderweight $199.95 →
  `lands-end.notes`.
- FatFace: $132 Worker Jacket, $228 Canvas Jacket, $344 Pendeen coat → price note; Méribel 1988,
  Next plc, England → Wikipedia note; XS–4XL, short/long, Tall → `size_range`, notes; USD US store
  → notes. ThermaCheck $49.95 → `lands-end.notes`.
- Smartwool: Smartloft Hybrid $225 (50% recycled wool, merino-blend lining, stretch panels), Active
  Fleece $190, Winterloft Hooded $375 → price note, notes; 1994 Steamboat Springs, ski socks →
  notes; $89, free 30-day returns, XS–XXL → fields.
- Peter Manning NYC: 5'1"–5'10", X sizes broader at same length → fit-guide note; Milan Car Coat
  $248, Polartec Fleece $148, Bomber $158 → price note; free US shipping and returns, 30 days, Fit
  Shop on Broadway → notes. Wool Car Coat $299.95, Big & Tall/Tall → `lands-end.notes`.
- Filson: Lined Tin Cloth Cruiser $429, Mackinaw Wool Cruiser $599, Canvas Outfitter and Dry Wax
  Short Cruiser $199, $1,199 top, some made in USA, lifetime guarantee, $99, 30 days → `filson`.
  Squall Waterproof Barn Jacket $199.95 → `lands-end.notes`.
- Closing: size ceilings (Orvis XXL, Smartwool XXL, FatFace 4XL, Lands' End 4XL and Big & Tall),
  return windows → the fields above.
- FAQ: Lands' End, Inc., Nasdaq LE, Dodgeville, Sears 2002–2014, Kohl's 2020 → Wikipedia and 10-K
  notes; 90 days, proof of purchase, $8.95, merchandise credit free → returns note; $99 US and
  Canada, exclusions, 4–10 business days → free-shipping note; own US stores → 10-K note.

## Sources and counts

- Ahrefs: 4 `serp-overview` calls ("lands end alternatives" returned nothing), 1
  `keywords-explorer-matching-terms` (questions). FAQ queries: "who owns lands end" (500), "what is
  lands end return policy" (250), "does lands end have stores" (150), "does lands end have free
  shipping" (80). Skipped "is lands end a good brand" (needs a verdict).
- Brand files written via `merge_brand.py` (patches in my scratchpad folder only): new lands-end,
  peter-manning, fatface, smartwool, merrell; new `unverified` the-north-face, columbia,
  helly-hansen, under-armour; notes appended to ll-bean and patagonia.

## Estimates

- **Estimated Page Quality:** High (borderline). Strongest reason: real regular prices and named
  product-to-product comparisons no ranking page has.
- **Estimated Needs Met (dominant intent):** Moderately to Highly Meets. The one thing that would make
  it better: L.L.Bean, the brand nearly every source names first, once a human can verify it.
