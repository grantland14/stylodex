# Review: brands like Filson (steps 2–5)

Written 2026-10-29. Author: Ash. Copy in `filson.json` → `author`, `copy`.
Checked with `lib/gate.ts` through `lib/pipeline.ts` (tsx script, now = 2026-10-29):

- Title: "13 Brands Like Filson for Waxed Canvas and Wool Outerwear"
- Rendered picks (rank order): barbour, woolrich, orvis, schott-nyc, belstaff, duluth-trading, taylor-stitch, pendleton, eddie-bauer, kakadu-australia, outback-trading, tom-beckbe, thursday-boot-co. `pickProblems` returns `[]` for all 13.
- Verdict: **indexable** (`reasons: []`). Only gap: no `/img/` image for any brand yet (optional, the coordinator's image step adds it).
- `npm test`: 0 fail. `npm run lint:facts`: ok.

## Category

`coats-jackets` (Coats & Jackets). Filson sells bags and clothing too, but outerwear is its biggest line (189 products in men's Outerwear) and its signature pieces are the Tin Cloth and Mackinaw Wool Cruisers. The outside lists name outerwear makers above all, and Stridewise and Bushcraft USA compare Filson jackets directly. Bags are a strong second (Dryden Backpack in Bestsellers, Stridewise's Journeyman list). That could be a later page. Anchor range: $199–$1,199, 103 regular-price jackets from `products.json`, vests excluded.

## Picks: 13 renderable of 13 (target 10–15, floor 6, not padded)

| Rank | Pick | Indep. sources | Jackets (USD) | Relation |
|---|---|---|---|---|
| 1 | Barbour | 6 (LDN, CasualGeo, PlainTips, MyCasualStyle, PeachBox, Bushcraft) | 265–1,040 (23 read, truncated) | similar |
| 2 | Woolrich | 6 (LDN, Coolector, CasualGeo, PlainTips, MyCasualStyle, PeachBox) | 500–1,100 (15) | similar |
| 3 | Orvis | 5 (LDN, CasualGeo, PlainTips, MyCasualStyle, PeachBox) | 119–449 (16) | similar |
| 4 | Schott NYC | 4 (LDN, Coolector, CasualGeo, PlainTips) | 145–1,995 (117) | similar |
| 5 | Belstaff | 3 (LDN, CasualGeo, MyCasualStyle) | 395–2,495 (35, US store) | similar |
| 6 | Duluth Trading | 3 (PeachBox, Charm, Bushcraft) | no price (sells_categories) | none |
| 7 | Taylor Stitch | 2 (LDN, Coolector) | 188–1,248 (37) | similar |
| 8 | Pendleton | 2 (LDN, Coolector) | 168–625 (13) | similar |
| 9 | Eddie Bauer | 2 (MyCasualStyle, PeachBox) | 109–499 (25) | similar |
| 10 | Kakadu Australia | 2 (Expedition Portal, Bushcraft) | 159.99–220 (9) | similar |
| 11 | Outback Trading | 2 (Expedition Portal, Bushcraft) | 54–289.99 (45) | similar |
| 12 | Tom Beckbe | 1 (Stridewise backpacks), plus a Bushcraft mention | 295–595 (22) | similar |
| 13 | Thursday Boot Co. | 1 (Stridewise jacket comparison) | 120–689 (99) | similar |

Ranked by independent sources, then by how close the price range is to Filson's. Every price is USD from the brand's own US storefront: Shopify `products.json` where it's served (regular price = no `compare_at_price` markdown), otherwise the category page through WebFetch.

Not picks (all in `rejected` with reasons):
- **Refused WebFetch:** Carhartt (8 sources, 403), L.L.Bean (6, firewall page), Fjällräven (4, 403), Flint and Tinder / Huckberry (3, 403). Patagonia (3) served a maintenance page twice. Written as `unverified` (no Flint and Tinder file). Carhartt, L.L.Bean and Fjällräven would probably make the top five, so they head `human_check`.
- **Doesn't sell C:** Red Wing Heritage (4 sources, boots and shirts only). Left `verified`, no coats-jackets price.
- **Not checked:** RRL, Timberland, Columbia (2 sources each). Single-source names (Private White V.C., Levi's, Buck Mason and others), bag-only and boot-only names, and the 45 Apart Style pool brands with no outside evidence.

## Anchor and human_check

Filson: `verified`, products.json readable. Ships to US and Canada, and its shipping page says it doesn't accept UK orders. Free US shipping over $99, 30-day returns, lifetime guarantee against defects, Seattle flagship (`us_stores: true` from the About page, since the store locator didn't render). `human_check` holds: the anchor's hero prices, Barbour's truncated range, Outback's $54 Tall listing (it shows no markdown, but the regular-length jacket is $119.99), the three blocked brands, Duluth's missing price (site-wide 30% off) and Eddie Bauer's closed stores (from Wikipedia).

## Evidence

Four Ahrefs `serp-overview` calls (US): brands like filson, filson alternatives, stores like filson, similar to filson. I read 9 editorial pages: LDNFASHION (Oct 2026, 22 brands), The Coolector (Feb 2024, 20), Casual Geographical (2021/2023, 9), PlainTips (10), MyCasualStyle (Dec 2021, 13), ThePeachBox (10 + 4), Charm.io (Sep 2024, 5), and two Stridewise comparisons. I also read 2 forum threads (Expedition Portal, Bushcraft USA). Not used: Reddit (4 threads), YouTube (5), Washington Fly Fishing (TollBit gate, not followed), Pinterest, Similist, Modvisor, Shop Sleuth, Knoji (403), Thingtesting (empty), Altitude (no alternatives framing), Gear Patrol (American-made roundup). Co-stocking: the Getz's Heritage page returned 404.

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | Its own "brands like Filson" page for US shoppers who want Filson-style outerwear. That's what Stylodex is for. |
| G2 | PASS | The ranking lists give history blurbs and no prices. This page adds verified regular-price ranges, named products with prices, return windows, size ranges and shipping terms, plus tips (Belstaff's UK vs US store, Schott's model-number names). |
| G3 | PASS | Concrete tradeoffs per pick: Kakadu's 15-day returns, Taylor Stitch's 21-day window, Orvis stopping at XXL, Woolrich's $500 floor. No invented experience. |
| G4 | PASS | No first-person experience or credentials. "We" isn't used for any claim of trying things. |
| G5 | PASS | Author Ash, bio in `lib/authors.ts`. Not YMYL. |
| G6 | PASS | Every number traces to a brand file field or note (fact trace below). The title count matches the renderable picks. |
| G7 | N/A | Not YMYL. |
| G8 | PASS | The title says 13 brands and the page renders 13. "Waxed Canvas and Wool Outerwear" matches the category and both of Filson's outerwear subnav lines. |
| G9 | PASS | The intent is a list of alternatives. Answer-first openers, with each pick compared against a Filson product and price. |
| G10 | PASS | Price, sizes, shipping and returns per pick, a "How to choose" decision guide, and 2 FAQs from real queries. |
| G11 | PASS | The intro is 71 words, then the picks. No preamble. |
| G12 | PASS | Prices are from 2026-10-29. The page shows "Last checked". The copy has no dates. |
| G13 | PASS | The top 3 (LDNFASHION, The Coolector, Casual Geographical) have no prices or policies. This page is more specific on every pick. Estimated High. |
| G14 | PASS | No implied testing. Affiliate disclosure comes from the template. No client at #1. |
| G15 | PASS | Read as a whole. Each pick body has a different shape and opener, and the closing names different picks than the intro. |

## Voice check (voice.md "What we never write")

- Process narration: none ("we checked", dates, "its About page says", rankings by source count all absent). Missing facts (Duluth price, Orvis return days) are left out, not explained.
- Spreadsheet sentences: none. Ranges read as words. Two relative claims carry their reason ("the longest here by far" for Duluth's one-year returns, "the lowest ceiling on this list" for Kakadu).
- Verdicts, invented experience, hype: none.
- Rhythm: no semicolons, em dashes, bold or italics. Longest sentence is 30 words (Woolrich, Pendleton). Bodies run 111–127 words. Best-for lines run 5–9 words, lowercase, use cases.
- "it" for brands throughout. "They" appears only for jackets (Duluth) and for the brands as a group (intro).

## AI-voice scan (reference/ai-voice-avoid.md)

Fixed: "The middle is where it gets interesting" (cut), and a third "The catch is" opener (Kakadu, changed to "Returns are the weak spot"). I swapped a rule-of-three ("Bedale, Ashby and Beaufort") for two items, and "from English waxed cotton to Oregon wool and Australian oilskin" for two. I found no stacked hedges, no "it's worth noting", no "whether you're X or Y" and no summary closers.

## Fact trace (copy → stored field)

- Intro: Mackinaw Wool Cruiser $599 and Tin Cloth Cruiser $429 → filson.prices note.
- Barbour: Bedale $425, 6oz waxed cotton, sizes 30–52, sponge clean only → barbour notes. Beaufort $450, collaborations up to $1,040 → prices note. Free over $100 → free_shipping_min_usd. 30 days → returns_days.
- Woolrich: Buffalo Check Puffer Parka $1,100, Wool-Blend Jacket $500 → prices note. 1830, Woolrich PA, Bologna → founded_year, hq_country, notes. $200 shipping → free_shipping_min_usd.
- Orvis: 1856 Field Coat $198, canvas, flannel lining, corduroy collar, XXL max → notes. $449 top, wading/upland jackets → prices note. Barbour sold on site → prices note. $6 flat → notes.
- Schott: 1913 New York, much made in US → notes, production_model. A-2 $735, $1,995 top, 8438 $275 → prices note. Model-number names → product titles in prices note. 6XL → size_range. 30 days, $9.95 → notes.
- Belstaff: Trialmaster $675, 6 oz waxed cotton, duties included, $10 delivery, 30-day free returns → notes. Pioneered wax cotton → Wikipedia note. UK store in pounds → notes. Carrier $395, $2,495 → prices. XS–6XL → size_range.
- Duluth: Fire Hose jackets flannel-lined/insulated/hooded, product names → notes. One-year returns, $7.99 fee waived on exchanges → returns_days 365, notes. $50 shipping, stores, Canada → fields, notes.
- Taylor Stitch: Maritime $188, Moto $1,248, Drover Suede $798, waxed ripstop down → prices note, products.json. Stores SF and Seattle, free shipping/returns, 21 days, Last Call final sale, XXL → notes, fields.
- Pendleton: own mills OR/WA → production_model. Lookout Valley $550, Gorge $275, CPO $325, $625 top, $168 floor → prices note. 60 days, free in stores, $150 → fields, notes.
- Eddie Bauer: Seattle 1920 → notes. Superior Down parka $349, Cirruslite $129, $499 top → prices note. 3XL on about half → notes. Stores closed → us_stores false, notes. $99, $3.50/$10 fees → notes.
- Kakadu: under $220, Iron Bark $199, Gold Coast $189.99 → prices note. Family-run, Cape Jaffa lighthouse → notes. 5XL → size_range. 15 days and restocking fee → returns_days, notes.
- Outback: founder brought dusters to the US → notes. Stockman $289.99, Pathfinder $279.99 → prices note. Tall, XS–4XL → size_range, has_tall. 30 days, $150, Canada → fields.
- Tom Beckbe: Alabama, 2015, sporting tradition, Tensaw US-sewn, Dundee mill, 6 stores (Atlanta, Middleburg) → notes. Tensaw Mossy Oak $525, Chatom $375, Fowler $595 → prices note. Tall M–XXL → size_range. 30-day refund, 45-day credit → notes.
- Thursday: Denim Trucker $120, Bronco $689, Stallion $649 → prices note, products.json. Free over $50, free returns over $80 within 30 days → notes. S–XXL mostly → notes.
- Filson comparisons: Lined Mackinaw Wool Packer Coat $1,199, cheapest jacket $199, 3XL, Long sizes on a handful, Sportsman line → filson notes and prices.
- FAQ: made in USA (14 listings, Seattle sewing, vetted partner factories) and Seattle/1897/First Avenue/SODO → filson notes.

## Estimates

- **Estimated Page Quality:** High. Every pick carries checked US prices and policies that the ranking pages don't have.
- **Estimated Needs Met (dominant intent):** Highly Meets. Verifying Carhartt and L.L.Bean, the two most-named brands, would make it better.
