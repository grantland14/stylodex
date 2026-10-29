# Review: brands like Eddie Bauer (2026-10-29)

Author: Ash. URL prefix `brands`. Category `coats-jackets`.

## Gate (`lib/pipeline.ts` → `judgeBrandsLikePage`, tsx, now = 2026-10-29)

- **indexable: true**, reasons `[]`. Anchor missing facts: none (only `image_url`, which is optional).
- Renderable picks: **11 of 11**, every pick `[]` problems, all `price_relation: similar` against
  Eddie Bauer's $109–$499.
- Title: "11 Brands Like Eddie Bauer for Outdoor Clothing and Outerwear".
- Check script: `<scratchpad>/eddie-bauer/build/gate-check.ts` (output in `build/gate.out`).
- `npm run lint:facts`: ok.

## Category

`coats-jackets`. Eddie Bauer's known_for is "Outdoor Clothing and Outerwear", its stored material is
goose down, and every outside source compares it with outerwear makers. Dresses are its only other
stored category and no source compares it on dresses. Like-for-like item: men's jackets and coats,
vests and fleece excluded (the scope of the stored Eddie Bauer, Orvis, Filson and Lands' End prices).

## Picks: 11 renderable of 11 (target 10–15, floor 6, not padded)

| # | Pick | Sources | Regular price | Note |
|---|---|---|---|---|
| 1 | Orvis | 3 | $119–$449 | existing brand file (Filson run) |
| 2 | Marmot | 3 | $110–$650 | new; 46 jackets, all 4 listing pages |
| 3 | Filson | 3 | $199–$1,199 | existing brand file |
| 4 | Lands' End | 2 | $49.95–$699.95 | existing brand file (Lands' End run) |
| 5 | Arc'teryx | 2 | $180–$1,200 | new; 60 jackets, US store |
| 6 | Gramicci | 1 | $150–$332 | existing file; coats-jackets price added |
| 7 | KÜHL | 1 | $149–$699 | new; 46 jackets |
| 8 | Merrell | 1 | $155–$165 | existing brand file (2 jackets) |
| 9 | Stio | 1 | $129–$799 | new; 21 jackets |
| 10 | Taylor Stitch | 1 | $188–$1,248 | existing brand file |
| 11 | 66°North | 1 | $170–$1,850 | new; 99 outer layers, USD store |

Ranked by independent sources, then by how close each range's midpoint sits to Eddie Bauer's ($304).
Existing prices (Orvis, Filson, Lands' End, Merrell, Taylor Stitch, Eddie Bauer) were all read today
by sibling runs and were not overwritten. Short of 15 because the best-sourced brands are blocked:
L.L.Bean (6 sources), Patagonia, The North Face and Columbia (5 each), Timberland (3).

## Anchor and human_check

Eddie Bauer verified from its own store in earlier runs today (men's outerwear products.json, refund
and shipping policies, Wikipedia for owner, founding and store closures); not re-read. Seven human
checks are queued in the page file: L.L.Bean first, then Patagonia / The North Face / Columbia,
Arc'teryx's shell range (first product list only), Arc'teryx free shipping (promo bar, no minimum
stated) and KÜHL's US-only ships_to, 66°North's USD feed, the disco evidence, and Apparelnbags
(a wholesale seller's blog).

## Evidence

Kept: Apparelnbags (10 brands; seller's blog with byline and fact-checker), Career Successify (11),
Trails and Freedom (9), the disco directory's Eddie Bauer page (21; never cited on the page), a DC
Urban Moms thread (OP asks for alternatives to L.L.Bean and Eddie Bauer). Effortless Gent and
Knitwear.io are L.L.Bean lists and count for L.L.Bean only.
Dropped: 5 Reddit threads (WebFetch refuses reddit.com), a Facebook post, Quora, Thingtesting (no
brands in the fetched page), Owler and Distill (business databases), Similist (scraped), The Modest
Man and disco's L.L.Bean page (about L.L.Bean), Fedora Lounge (not an Eddie Bauer list).
"eddie bauer alternatives" returned no SERP. Co-stocking: none read.
No secondhand or thrift shops among the picks. Multi-brand stores named in the thread (REI, Huckberry,
Sierra, Backcountry) are rejected as brand picks.

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A brands-like page for US shoppers replacing Eddie Bauer outerwear, Stylodex's purpose. |
| G2 | PASS | Regular prices read from each store, named products against named Eddie Bauer products, size, shipping and returns comparisons. None of the ranking pages has prices. |
| G3 | PASS | Each pick says which product to start with, what's the same, and the catch (size ceiling, return fee, shipping cost). |
| G4 | PASS | No first-person experience; nothing worn or tested is implied. Ash's bio untouched. |
| G5 | PASS | Author Ash, bio in `lib/authors.ts`. Not YMYL. |
| G6 | PASS | Every number traces to a brand file (fact trace below). Title count = renderable picks. |
| G7 | PASS | N/A, not YMYL. |
| G8 | PASS | "11 Brands Like Eddie Bauer for Outdoor Clothing and Outerwear": the body covers eleven outerwear makers. |
| G9 | PASS | Each pick opens with what it replaces; comparisons cover both sides (price, sizes, shipping, returns). |
| G10 | PASS | Prices, sizes, shipping and returns per pick, a How to choose guide, 4 FAQs from real queries, including the store-closure question most searchers have. |
| G11 | PASS | Intro 72 words; answer-first openers; no filler. |
| G12 | PASS | Prices and terms read 2026-10-29; the page shows the Last checked date. |
| G13 | BLOCKED (publish) | Better than every ranking list on specifics, but a reader expects L.L.Bean, Patagonia, The North Face and Columbia, the four most-named brands, and none can be verified (bot walls). With them it's High; without them, High-minus. |
| G14 | PASS | No client, no implied testing; affiliate disclosure is in the template. |
| G15 | PASS | Read as a whole. 6-word-shingle check against every other page file: shared runs are product names and stock phrases ("is the one to start with"); the sentences shared with the Lands' End and Filson pages were rewritten. |

## Voice check (voice.md "What we never write")

- Process narration: none (no "we checked", no check dates, no sources named in copy). The April 2026
  store closure is a fact about the brand, not about our method.
- Spreadsheet sentences: none. Counts appear only with a reason ("64 years older", "$24 below
  Eddie Bauer's line", "half as long again").
- Verdicts on brands: none. Catches are attributes (size ceiling, return fees, shipping cost).
- Invented experience: none. Hype words: none.
- No semicolons, no em dashes, no bold. Brands are "it". Contractions throughout. Max sentence 25 words.

## AI-voice scan (reference/ai-voice-avoid.md)

- Scaffolding: "It helps to know that" (Orvis) cut.
- Unsupported claims removed while editing: "lighter pick" (Gramicci anorak), "for longer arms"
  (Filson Long sizes), "isn't nylon" (Gramicci), "a jacket and boots in one order clears that easily"
  (Merrell boot prices not stored), "suits a second jacket more than a swap" (Taylor Stitch), KÜHL
  "stores include Seattle and Boulder" (only Boston is open; the rest are marked coming soon).
- Rule of three: none in copy. Smell test: each body names its own products and numbers.

## Fact trace (copy → stored field)

- Intro: stores closed April 2026 → `eddie-bauer.notes` (Wikipedia); $109–$499 → `eddie-bauer.prices[coats-jackets]`.
- Orvis: US stores → `us_stores`; 1856 Field Coat $198, canvas, plaid flannel lining, R65 $119, PRO ToughShell $449, $6 no minimum, XXL, Vermont 1856 → `orvis` notes and price note. KÜHL XXXL, Filson 3XL → their `size_range`.
- Marmot: Yukon $400, PreCip Eco $135, Highlander $250, GORE-TEX Mammoth $650 → price note; $8, Rewards $49+, US only, free 30-day returns, S–XXL → notes. Eddie Bauer Superior $349, Rainfoil $109 → anchor price note.
- Filson: Lined Tin Cloth Cruiser $429, Canvas Outfitter $199, $1,199, lifetime guarantee, some made in USA, 3XL and Long, $99, $8 card refund fee, Seattle → `filson`.
- Lands' End: Expedition $359.95, Wanderweight $199.95, 90 days, US stores, $99 US and Canada, 4XL, Big and Tall, promo-code prices → `lands-end`. Eddie Bauer free shipping US only → anchor notes.
- Arc'teryx: Cerium $380, Squamish $180, Beta $400 / AR $650 / SV $800, $180–$1,200, free shipping and returns, 30 days, XS–XXL, Canadian → `arcteryx`.
- Gramicci: XXS–XL, unisex, Coldfront $332, WR Anorak $190, Denim Trucker $200, $150–$332, 1982 Mike Graham Ventura garage, $175, $9 US returns → `gramicci`.
- KÜHL: Tall (Impakt Jacket Tall $165), 45 days, $7.50, hiking pants (homepage meta), Burr $149, Arktik $599, Ükon $699, XXXL, Boston open with Seattle and Boulder coming soon, $100 → `kuhl`.
- Merrell: Ironvale $165, Pineforge $155, $75, free returns and exchanges, Wolverine World Wide, hiking boots and trail shoes → `merrell`. Cirruslite $129 → anchor price note.
- Stio: Jackson WY 2011, Pinion $299, Hometown $379, $99, free 30-day returns, Canada $65, Second Light Windshell $129, Objective Pro $799, XXXL on about half, Extra Small on a few, Stephen Sullivan Founder/CEO → `stio`.
- Taylor Stitch: Maritime $188, Moto Steerhide $1,248, Drover Bourbon Suede $798, free US shipping, SF and Seattle stores, some made in USA, 21 days, Last Call final sale, XXL → `taylor-stitch`.
- 66°North: extreme weather (homepage meta), Dyngja Down Bomber $540, Dyngja Down Jacket $620, Höfði Anorak $170, 1926, protective clothing for workers at sea, DDP duties, $350 / $20, XS–2XL with 3XL on some, 30 days, customer pays return shipping → `66-north`.
- Closing: the size ceilings, return windows and Orvis's $6 flat shipping above.
- FAQ: going out of business (5,200/mo), who owns (450), is it expensive (100), where from (80), all from one Ahrefs matching-terms call. Answers → anchor notes (Wikipedia: Chapter 11 February 2026, stores closed April 30 2026, O5 Group, HQ New York City, Seattle 1920) and anchor prices. Skipped "is eddie bauer a good brand" (needs a verdict).

## Sources and counts

- Ahrefs: 4 `serp-overview` calls ("eddie bauer alternatives" returned nothing), 1
  `keywords-explorer-matching-terms` (questions).
- Brand files via `merge_brand.py` (patches in `<scratchpad>/eddie-bauer/patches/` only): new
  marmot, kuhl, stio, arcteryx, 66-north; new `unverified` mountain-hardwear, timberland;
  coats-jackets price added to gramicci; a note appended to patagonia.
- Not picked after a look: Salomon (help pages 403), Mammut (no readable listing prices), Trew Gear
  (only 3 regular-price jackets), Todd Snyder (Cloudflare challenge).

## Estimates

- **Estimated Page Quality:** High (borderline). Strongest reason: real regular prices with
  product-to-product comparisons against Eddie Bauer's own parkas, which no ranking page has.
- **Estimated Needs Met (dominant intent):** Moderately to Highly Meets. The one thing that would
  make it better: L.L.Bean, Patagonia, The North Face and Columbia once a human can verify them.
