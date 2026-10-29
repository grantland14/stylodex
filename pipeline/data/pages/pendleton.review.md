# Review: brands like Pendleton (steps 2–5)

Written 2026-10-29. Author: Ash. Copy in `pendleton.json` → `author`, `copy`.
Checked with `lib/gate.ts` through `lib/pipeline.ts` (tsx script, now = 2026-10-29):

- Title: "12 Brands Like Pendleton for Wool Shirts"
- Rendered picks (rank order): woolrich, filson, johnson-woolen-mills, j-crew, taylor-stitch, barbour, 3sixteen, faherty, uniqlo, gitman, freenote-cloth, schott-nyc. `pickProblems` returns `[]` for all 12.
- Verdict: **indexable** (`reasons: []`). Only gap: no `/img/` image yet for any brand (optional; the coordinator's image step adds it).
- `npm test`: 30 pass, 0 fail. `npm run lint:facts`: none of the 13 brand files written here is flagged. The run still exits 1 on other agents' files (`minkpink.known_for`, `sandro.known_for`, `the-kooples.size_range`, all quotes), which were not touched.

## Category

`shirts` (Shirts). Pendleton also sells blankets and home goods, which Stylodex doesn't cover, so the page is about its clothing. Its clothing is led by wool shirts. The men's nav opens with Wool Shirts (page title "Cozy Men's Wool Shirts"), and the Board Shirt ($198, 100% pure virgin wool) is the hero piece. The outside evidence about clothing is about shirts too: the Bushcraft USA thread asks for a wool shirt alternative to Pendleton, the SERP's Reddit and Facebook results are about Pendleton flannels and wool shirts, and Disco ties Faherty to Pendleton's flannel shirting. `coats-jackets` is already stored for Pendleton (Filson page), but no source compares Pendleton on jackets.

Like-for-like item, the same filter on every store: men's woven shirts at regular price (button-ups, flannels, wool shirts, overshirts). Tees, knits, polos, sweatshirts, shirt jackets and padded or quilted overshirts are excluded. Anchor range: **$88–$230**, 70 regular tiles (Wool Shirts 38, Cotton & Linen 33; 38 marked down excluded; the $248 Forest Twill Shirt Jacket excluded). No brand had a `shirts` price before this run, so no other page's price was overwritten.

## Picks: 12 renderable of 12 (target 10–15, floor 6, not padded)

| Rank | Pick | Indep. sources | Shirts (USD) | Relation |
|---|---|---|---|---|
| 1 | Woolrich | 3 (Disco, PlainTips, Bushcraft) | 155–195 (12) | similar |
| 2 | Filson | 2 (Disco, Bushcraft: 4 posters) | 99–249 (54) | similar |
| 3 | Johnson Woolen Mills | 1 (Bushcraft: 3 posters) | 99.95–259.95 (10) | similar |
| 4 | J.Crew | 1 (Disco) | 89.50–168 (12 of 16 read; 104 listed) | similar |
| 5 | Taylor Stitch | 1 (Disco) | 118–188 (84) | similar |
| 6 | Barbour | 1 (Disco) | 100–290 (84) | similar |
| 7 | 3sixteen | 1 (Disco) | 175–285 (52) | similar |
| 8 | Faherty | 1 (Disco) | 148–348 (58) | similar |
| 9 | Uniqlo | 1 (PlainTips) | 49.90 (3) | cheaper |
| 10 | Gitman | 1 (Disco, as "Gitman Vintage") | 250–325 (58) | pricier |
| 11 | Freenote Cloth | 1 (Disco) | 220–360 (83) | similar |
| 12 | Schott NYC | 1 (Bushcraft) | 75–490 (21) | similar |

Ranked by independent sources, then by how close the range sits to $88–$230 (sum of the gaps at each end). Prices are USD from each brand's own US store: Shopify `products.json` where served (regular = no `compare_at_price` markdown on any variant), SFCC tiles with no strike-through (Pendleton, Barbour), J.Crew's page data (`maxDiscountPercentage` 0), and WebFetch for Uniqlo.

Not picks (all in `rejected` with reasons):
- **Refused or unreachable:** Carhartt (2 sources, 403), Patagonia (2, maintenance page), Levi's, Walker Slater, Billy Reid, Todd Snyder, Icebreaker (403 to curl and WebFetch), Nigel Cabourn and Kitsbow (hosts outside this session's network; Kitsbow's domain redirects to a Treet resale store).
- **No US shipping:** Swanndri ("We do not currently ship to the United States").
- **Verified but not picked:** Stormy Kromer (one woven shirt), Topo Designs (bags-led, 8 regular shirts, no wool), Brooks Brothers (45 of 69 sport shirts marked down, a source that names it only as the oldest American clothier, and gate gaps).
- **Not checked:** L.L.Bean, Ralph Lauren/RRL, The North Face, Fjällräven (unverified in their brand files today), boot and hat names (Chippewa, Canada West, Stetson, Johnston & Murphy), and Howlin, Filippa K, Bleu de Paname, Bison Bushcraft (over the 25-candidate cap).

## Anchor and human_check

Pendleton: `verified`, store readable with the bot UA. Ships only within the US and Puerto Rico, free shipping at $150, 60-day returns, US stores. This run filled `size_range` ("XS–5X; Tall M–3X") and `has_tall`, and changed `known_for` with `--overwrite` from "Wool Clothing and Blankets" to "Wool Shirts" so the title is about clothing. `human_check` holds: that `known_for` change (it's shared; check it on the Filson page), J.Crew's truncated listing, Uniqlo's WebFetch-only read, Gitman's name and founding year, the blocked Carhartt/Patagonia/L.L.Bean, and Faherty's `hq_country` (Wikipedia only).

## Evidence

Four Ahrefs `serp-overview` calls (US): brands like pendleton, pendleton alternatives, stores like pendleton, similar to pendleton (no data). Most "alternatives" results are about blankets and were dropped as out of scope. Kept and read: the Disco directory (23 brands, counted, never named or quoted in copy), PlainTips (10 brands), and the Bushcraft USA "Pendleton alternative?" thread (wool shirts, 14 replies; the old forum URL 404s, read at the current one). Dropped: Reddit (5 threads, unfetchable), YouTube, TollBit-gated forums (Ask Andy twice, ArcheryTalk; not followed), a Styleforum thread with no replies, the Facebook group (no replies readable), brand-owned pages (WeatherWool, Duckworth, Kraffs), general roundups (My Green Closet, The Good Trade), and scraped lists (Modvisor, Knoji). No co-stocking page ranked. Apart Style's pool overlapped with sourced brands only at Barbour, Gitman, Nigel Cabourn, Stetson and L.L.Bean; the pool alone was never used as evidence.

## Self-review

### G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A shirt-by-shirt guide for people replacing or skipping a Pendleton wool shirt. Clothing only, no blankets. |
| G2 | PASS | The page's data isn't on the ranking pages: regular-price shirt ranges from 13 stores under one filter, named shirts with prices, sizes, origin, shipping and return windows. The ranking lists give no prices. |
| G3 | PASS | Concrete specifics: fabric blends (85/15 wool-nylon, 60/40 cotton-wool, 50% wool CPO), ounce weights, Long/Tall/Big sizes, return windows compared (7 to 60 days), the $490 Schott top end explained as a leather shirt. |
| G4 | PASS | No first-person experience or testing. "We" isn't used for any experience claim. Author Ash, bio unchanged. |
| G5 | PASS | Author "Ash" with the bio in `lib/authors.ts`. Not YMYL. |
| G6 | PASS | Every number traces to a brand file field or note (trace below). Two wrong drafts were caught and fixed before saving: "Pendleton's cheapest flannel is the $118 Burnside" (its Doublebrushed Burnside lists from $99.50) and Uniqlo "under a quarter" of $198 ($49.90 is 25.2%). |
| G7 | N/A | Not YMYL. |
| G8 | PASS | "12 Brands Like Pendleton for Wool Shirts": 12 is the rendered count. Several picks are cotton, and each of those bodies says so in plain words (Woolrich, J.Crew, 3sixteen, Uniqlo), with a wool option named instead. |
| G9 | PASS | The intent is alternatives to Pendleton's shirts. Each pick answers "how does it compare" against the Board Shirt or a named Pendleton shirt. |
| G10 | PASS | Price, fabric, sizes (incl. Tall/Big), shipping and returns per pick, plus a "How to choose" by need. The FAQ covers the Board Shirt, its care, origin and US-made wool. |
| G11 | PASS | Intro 58 words, then picks. No preamble. |
| G12 | PASS | Prices and policies all read 2026-10-29. The template shows the date, so the copy carries none. |
| G13 | PASS | Better than the top 3 for shirts: Disco and PlainTips list names without prices or shirt detail, and Bushcraft is one thread. This page prices the shirts and compares them with each other. |
| G14 | PASS | Affiliate links via `/go/` with disclosure (template). No implied testing. No pick is paid placement. |
| G15 | PASS | Read whole: no repeated openers across picks, no sentence reused from the Filson, Eddie Bauer or Lands' End pages (those cover jackets, and their Woolrich, Filson, Barbour, Taylor Stitch and Schott bodies are about outerwear). |

**Estimated Page Quality:** High. Strongest reason: original, dated shirt prices and specs across 13 stores, under one stated filter, that no ranking page has.
**Estimated Needs Met (dominant intent):** Highly Meets. What would make it better: Carhartt and L.L.Bean, the two most familiar names the sources mention, if their stores can be read.

### Voice check (`voice.md` "What we never write")

None present: no process narration (no "we checked", dates or source names in copy), no spreadsheet sentences (counts appear only with the reason they matter, e.g. "three of them cost less than one Board Shirt"), no verdicts on brands, no invented experience, no hype words. "We" never appears. Brands are "it". One colloquialism ("Here's the catch").

Moves present: answer-first opener per pick with a named product and price, why each fact matters (return windows against Pendleton's 60 days, a $12.99 ship cost under JWM's $200 line, collar sizes on a 14-day return window), one useful thing per brand (Barbour's fit names, Schott's leather top end, JWM's short vs Long Tail), an honest trade-off per pick, picks compared with each other (JWM vs Woolrich, Faherty vs 3sixteen, Taylor Stitch vs J.Crew, Schott vs Uniqlo), use-case Best-for lines, and a "How to choose" that names picks by need.

### AI-voice scan (`ai-voice-avoid.md`)

- Em dashes: 0. Semicolons: 0. No bold or italics.
- Fixed: a three-part list in the first closing draft (JWM, Filson, Schott in one sentence) split into two sentences. Two sentences over 30 words (Filson's box pleat, Barbour's fit names) split. Removed two extra colloquialisms ("earned its keep", "a fair fight on price"). Removed "in between" (unclear reference) from the closing.
- Checked and clean: "not X, it's Y" contrasts, "not only… but also", "without sacrificing", evaluative adjectives (deliberate, measured), fake-strong verbs, trailing significance tags, rhetorical questions, meta-commentary.

### Fact trace

| Claim in copy | Field |
|---|---|
| Board Shirt $198, assembled in El Salvador, midweight, 100% pure virgin wool, flap pockets, square bottom, care steps | pendleton.notes (Board Shirt, item 50050) |
| Pendleton $150 free shipping, US and Puerto Rico only, 60-day returns, sizes to 5X, Tall | pendleton.free_shipping_min_usd, notes, returns_days, size_range |
| Pendleton Burnside Cotton Flannel $118, Painted Hills Chamois $168, Snap-Front Western Canyon $210 | pendleton.notes (named shirts) |
| Pendleton wool woven in its own mills in Oregon and Washington, wool from near the Pendleton mill | pendleton.production_model, notes |
| Woolrich $155 / $185, all cotton, lightweight flannel, overshirts from $435, 3XL, $200 free shipping, 30-day returns | woolrich.prices[shirts], notes, free_shipping_min_usd, returns_days |
| Filson Wool Guide $249, Alaskan Guide $149 (brushed both sides, box pleat), Long M–2XL, 3XL, $99, 30 days | filson.prices[shirts].note, notes, free_shipping_min_usd, returns_days |
| JWM since 1842, Johnson VT, $169.95, 85/15 wool-nylon 18–20 oz, untucked length, Long Tail $169.95–$199.95, 4XL, Tall, $200 free / $12.99, Canada | johnson-woolen-mills.notes, prices, ships_to |
| J.Crew $128 flannel, $168 chamois (best seller), poplin $89.50 | j-crew.prices[shirts].note, notes |
| Taylor Stitch Shore Shirt $168, 60/40, camp collar, two flap pockets, made in China, $118–$188, Jack $118, free shipping, 21 days, XXL | taylor-stitch.notes, prices, free_shipping_min_usd (0), returns_days, size_range |
| Barbour Dunoon $160, Cliff $100, fit names, Paul Smith $200, Norbit $290, $100 free, 30 days | barbour.prices[shirts].note, notes, free_shipping_min_usd, returns_days |
| 3sixteen Crosscut $285, 18+ years, Japanese cotton, washed after sewing, crossed yoke, enamel buttons, from $175, 2X, 10 days | 3sixteen.notes, prices, returns_days |
| Faherty $248 Banshu flannel, relaxed, 30-inch, Oxford $148, Sashiko $348, XS–XXL, $150, 60 days, 80+ US stores, ships CA/GB | faherty.notes, prices, size_range, returns_days, ships_to, us_stores |
| Uniqlo three flannels $49.90, $99 free, 30 days | uniqlo.prices[shirts], notes, free_shipping_min_usd, returns_days |
| Gitman Lafayette TN, Tan Flannel $295 Albini, from $250 Indigo Denim, fits, Big and Tall, collars 14½–22, free standard shipping, 14-day returns | gitman.production_model, prices.note, notes, size_range, returns_days |
| Freenote Sinclair $320 (10 oz Japanese denim, rope-rimmed snaps), Dayton LS Harlequin $340 (70% wool, Japan), Dayton Chambray $220, sewn in USA, 7 days, S–XXL | freenote-cloth.notes, prices, returns_days |
| Schott 7810 $125 (heavyweight 50% wool blend, anchor buttons, 30-inch back), 7310P $155 (20 oz), imported, 3XL, cotton flannel $80, cowhide $490, $100 free | schott-nyc.notes, prices.note, free_shipping_min_usd |
| Comparisons ($51 more, $30 less, $38 under, $87 more, $37 under, $40 less, $73 under, about a quarter, more than twice) | arithmetic on the prices above |
