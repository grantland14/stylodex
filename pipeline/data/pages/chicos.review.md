# Review: stores like Chico's (`stores/chicos`)

Run 2026-10-29. Category `tops` (Chico's is `kind: brand`). Chico's own copy names knit tops and No
Iron shirts, its top category page is the Travelers collection (mostly tops), and tops pages lead its
product-type traffic in Ahrefs top pages (US): tunics 2,498, tops 1,654, 3/4-sleeve tops 1,570,
blouses 613 est. visits/mo, against dresses 2,152. So this page compares tops, not the dresses the
Talbots, Coldwater Creek, Ann Taylor and Loft pages use, which also keeps it from being a near-copy
of them. Like-for-like: women's shirts, blouses, tees, tanks, knit tops and tunics from each store's
own tops category, sweaters, cardigans, jackets, vests, kimonos and pullovers excluded by name,
regular (not marked down) US prices only.

## Gate (`lib/pipeline.ts` → `judgeBrandsLikePage`, tsx, now = 2026-10-29)

- **indexable: true**, reasons `[]`.
- Renderable picks: **14 of 14**, every pick `[]` problems.
- Title: "14 Stores Like Chico's for Wrinkle-Free Travel Clothes". `known_for` changed (shared field,
  `--overwrite known_for`) from "Comfortable Clothing for All Shapes", which put a second "for" in the
  title; new wording from the Travelers collection page ("Shop Women's Travel Clothes",
  "comfortable & wrinkle-free"). Queued in `human_check` to confirm.
- Anchor: verified; tops $34.50–$139.50 (84 regular of 599 tops, all 11 pages of 1,046 listings).
- `price_relation`: "similar" on all 10 priced picks (none below $34.50 or above $139.50 throughout);
  null on Ann Taylor, Loft, J.Crew, Lane Bryant (no regular tops price readable).
- `npm run lint:facts`: my brand fields pass. At the last run it failed on two files this run didn't
  touch (`2020ave.known_for`, `shop-style-shark.known_for`, quotes), written by other agents.

## Evidence

Ahrefs top 10 for all four keywords (`chicos alternatives` and `similar to chicos` empty). None of the
ranking pages recommends a store as an alternative to Chico's: they are over-40/over-50 shopping
guides (Wardrobe Oxygen, Fabulous After 40, Over 50 Feeling 40), forum threads about other stores, and
Reddit (not readable). Those list Chico's alongside others, so they don't count. WebSearch added three
editorial alternatives lists: eTechShout (2022, 19 stores), PlainTips (undated, 10), NeedleStar
(2026-08-29, 21), plus the disco directory profile (4 matches, evidence only, never named on the
page). Dropped: Beautymag (empty body), Fodor's and Knoji (403), storeslike.com, TSCentral, Similist,
Instya and similar directories (scraped). Candidate pool: 14 Apart Style rows; only Boden has outside
evidence.

Source counts per pick: Ann Taylor 4; J.Jill, Banana Republic, Loft 3; White House Black Market,
Coldwater Creek, Talbots, J.Crew 2; Soft Surroundings, Draper James, Lands' End, Boden, Johnny Was,
Lane Bryant 1. Six picks rest on one source (NeedleStar for five, eTechShout for Lane Bryant).

## Quality gate (G1–G15)

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A "stores like Chico's" list is what a brand directory is for. |
| G2 | PASS | Regular tops prices for 11 stores read today from their own catalogs, plus Chico's size-scale conversions and return terms. None of the ranking lists carry them. FAQ answers come from stored facts. |
| G3 | PASS | Concrete trade-offs per pick: WHBM stops at XL, Draper James' 20-day returns and .98 final sales, Talbots' size-type price ranges, Johnny Was' half-price final sale, Boden's UK vs US store. |
| G4 | PASS | No first-person experience or testing. Author Ash, bio untouched. |
| G5 | PASS | Author "Ash". Not YMYL. |
| G6 | PASS | Every number traces to a brand-file field or note (trace below). Two claims removed after a fact pass: "Chico's has no tall" (its homepage meta says tall) and "Talbots has the widest size spread". |
| G7 | N/A | Not YMYL. |
| G8 | PASS | Count = 14 rendered picks. Suffix from Chico's own Travelers page wording. |
| G9 | PASS | Each pick opens with who it suits, and 10 of 14 name a top and its price in the first paragraph. |
| G10 | PASS | Price (10 of 14), sizes, returns and shipping per pick, How to choose by size, price and returns, FAQ on owner, sizing and returns. Gap: four picks show no price. |
| G11 | PASS | Intro 59 words; bodies 106–136; closing 101; FAQ answers 29–35. |
| G12 | PASS | All tops prices read 2026-10-29; other terms from same-day brand files. |
| G13 | PASS | Beats the three alternatives lists on specifics: they give no prices, size ranges or return terms, and two are undated or four years old. |
| G14 | PASS | No implied testing; affiliate links via the template's `/go/`. Sister-brand ties stated. |
| G15 | PASS | Picks point to each other (J.Jill → WHBM, Ann Taylor → J.Jill/Soft Surroundings, Lands' End → WHBM/Johnny Was). 7-word overlap with every other page file checked: only size strings and fee phrases remain ("off if you use the prepaid label"). |

- **Estimated Page Quality:** High. Strongest reason: same-day regular tops prices for 11 stores,
  with the size, return and shipping terms that decide between them.
- **Estimated Needs Met:** Highly Meets. Would improve with Ann Taylor's and Loft's regular tops
  prices (bot challenge and a site-wide markdown today) and a second source for the six
  single-source picks.

## Voice check (`pipeline/voice.md`)

- Process narration: none (no "we checked", dates or sources in copy; the intro's "outside lists keep
  naming" describes the sort order only).
- Spreadsheet sentences: none. Counts used back a reason (200/358/400+ stores → trying on; "most of
  its tops cost more than $200" → splurge).
- Verdicts on brands: none. Invented experience: none (the intro's suitcase moment is the reader's).
- Hype words, semicolons, em dashes, bold: none. Contractions throughout; brands are "it".
- "Best for" lines: use cases, lowercase, 6–11 words.

## AI-voice scan (`ai-voice-avoid.md`)

- #1 binary contrasts: "Gap Inc. brand, not a Knitwell one" kept (a fact with a consequence); "rather
  than statement pieces" kept once.
- #3 rule of three: closing price line has three names in one list, the rest are two-item lists.
- #5 anaphora: "X is the pick..." appeared three times; Ann Taylor, J.Crew and Soft Surroundings
  openers rewritten.
- #8 rhythm: sentences ≤30 words; two long sentences split (Ann Taylor, Lands' End).
- #13 vague words: "significant", "deliberate" etc. none. Smell test: "the size chart is your
  friend" cut and replaced with Soft Surroundings' shipping fact.

## Fact trace (copy → stored field or note)

- Chico's: tops $34.50–$139.50, No Iron Linen Shirt $99.50 (chicos tops price note); 000–4 → US
  0–22, 2 = L/12, 1.5 = M/10, 2.5/3 = US 14/16, 4 = XXL (size-chart note); 60-day returns, $7 mail
  fee, full-price boutique returns, $8.95 standard (returns note); Knitwell / Sycamore Jan 2024 and
  group brands (Wikipedia and knitwellgroup notes).
- Ann Taylor: tailored workwear, ~200 stores (Knitwell note); tops beside suits and work pants, petite,
  tall, curvy sections, free shipping $150 (search-shell notes).
- J.Jill: Pima 3/4-Sleeve V-Neck Tee $49–$54, Wearever Ballet-Sleeve $59–$69, max $119 (tops note);
  Wearever tops page (new note); XS–4X petite tall, 60 days $8.95, free $150, 200+ stores.
- Banana Republic: $45–$200, Refined Scoop-Neck T-Shirt $45, Everyday Silk Shirt $178 (tops note);
  free $50 (field); 0–20 petite and long (size_range); Gap Inc. (parent_company).
- Loft: 00–18, XXS–XXL, petite/tall/curvy; 358 US stores; 30-day refund, $9.95 label; free $99;
  online returns to any Loft store (brand-file notes).
- WHBM: Easy V-Neck Tee $39.50, Button Front Lace Shirt $130, FORME camis (tops note); 60 days, $7,
  $8.95; 00–18, XXS–XL, regular and petite.
- Coldwater Creek: $47.50–$134.95, 34 of 117 tunics, River Song $69.95, Burnout Velvet $134.95 (tops
  note); XS–XL, petite, 1X–3X; 60 days $9.95; $9.99–$19.99 shipping; online only; owns Soft
  Surroundings (notes).
- Talbots: $34.50–$189 ranges across size types, Non-Iron Popover $109–$129, Supersoft tee
  $49.50–$59.50 (tops note); 2–18, petite 0–16, plus 14W–24W; 30 days $9.95; 437 store pages.
- J.Crew: Shirts & Tops / Tees & Tanks, button-up/cropped/statement/sleeveless, sleeve-length filters
  (new notes); Classic, Petite, Tall; $7 shipping; 30 days $7.50; Rewards free shipping.
- Soft Surroundings: $34–$129.95, Pima tee $39.95, Akari velvet shirt $129.95 (tops note); 2–18,
  petite, tall, 18W–24W; 60 days $9.95; US only; stores closed; $9.99–$19.99.
- Draper James: $50–$148, Easy Knit Top $50, Bateau Knit $148 (tops note); Reese Witherspoon,
  sizes, free $150, US only, Nashville store, 20 days, $6.95, .98 final (notes).
- Lands' End: No Iron Pinpoint $64.95, Supima tank $34.95, max $84.95 (tops note); 90 days; free $99
  US and Canada; petite to plus 30.
- Boden: Plain Cami $29, Sara Silk Shirt $220 (tops note); print names (new note); us.boden.com USD vs
  boden.com GBP; 1991 catalogue, US biggest market; XS–XL petite tall; 45 days.
- Johnny Was: $95–$498, 85 of 147 over $200, Audrey $298, Beaded Oversized $498 (tops note);
  Southern California; XXS–3X petite; free $125; free US mail returns 30 days; 50%+ off final.
- Lane Bryant: 10–40, 1904, 400+ US stores, Knitwell (notes); tees and Livi tops (new note).

## Open items (`human_check`)

Ann Taylor, Loft, J.Crew and Lane Bryant tops prices; Chico's `known_for` wording; Chico's `has_tall`
(homepage meta says tall, size chart has no tall table).
