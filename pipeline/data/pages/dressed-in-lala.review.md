# Review: brands like Dressed in Lala (steps 2–5)

Written 2026-10-29. Author: Ash. Copy in `dressed-in-lala.json` → `author`, `copy`.
Checked with `lib/gate.ts` through `lib/pipeline.ts` (tsx script, now = 2026-10-29):

- Title: "13 Brands Like Dressed in Lala for Bold Graphic Tees and Knits"
- Rendered picks: 13 of 13. `pickProblems` returns `[]` for every pick. `missingAnchorFacts` returns `[]`.
- Verdict: **indexable** by the gate (no reasons).
- **But read the evidence caveat below before releasing it.** Every pick rests on one co-stocking source, and no editorial page names any alternative to Dressed in Lala (human_check #1).
- `npm test`: 29/29 pass. `npm run lint:facts`: ok.

## Category

`tops`. Tops & Tunics is Dressed in Lala's largest product type: 212 of the 800 products in its `collections/all` feed, against Bottoms 211 (split across shorts, skirts and pants), Sweaters 110 and Dresses 84. It's also the largest type among best-sellers (17 of 47). Its graphic tees and tanks sit in it, and Nordstrom files its tees under Tops > Graphic Tees. The like-for-like price is full-price women's tops (tees, tanks, tube tops, blouses, jerseys), knitwear, sweatshirts and outerwear excluded, the same rule as the Edikted page. Anchor: $42–$168, 125 items, median $72.

## Evidence (thin, read this)

For the four keywords (Ahrefs `serp-overview`, US, 4 calls):
- `brands like dressed in lala` and `stores like dressed in lala` returned results. `dressed in lala alternatives` and `similar to dressed in lala` returned none.
- Not one readable editorial page recommends brands as alternatives to Dressed in Lala:
  - Read, but never mention it: curvilyfashion "15 Joyful Brands with Plus Sizes", danielaaraya "50+ colorful clothing brands", thelaurenlist plus-size list, nokillmag "10 Cool Indie LA Brands", maiazine. WhoWhatWear's L.A. roundup returned its title only.
  - Thingtesting's "alternatives" tab renders empty.
  - Not readable or not allowed: Reddit (4 threads, incl. "Brands like Lisa Says Gah, Dressed in Lala…"), TikTok discover pages (no captions), Instagram tag pages, a YouTube video, smartgrooming.uk "Dressed in Lala Dupes" (HTTP 523 twice), apartstyle.com (excluded by rule), Instya and sitelike.org (automated directories).
- Apart Style pool: `public.brand_relationships` has no Dressed in Lala row (read-only SQL; only Lala Berlin and Alala match "lala").
- **Co-stocking is the only evidence** (enrich.md §1.4b). Nordstrom stocks Dressed in Lala (115 items on its brand page). Its Groupie Knit Graphic Baby Tee breadcrumb is Women > Clothing > Tops > Graphic Tees. That page ("Women's Graphic Tees", 1,563 items) lists Dressed in Lala in its brand filter beside about 250 brands. Candidates came from that filter, limited to brands that sell their own printed or graphic women's tops. Licensed character merch, luxury houses and sportswear were left out.

So each pick has `independent_sources: 1`, kind `co_stocked`, the same Nordstrom URL. That's a weaker signal than an editorial "brands like X" list: it says Nordstrom sells both in the same department, not that anyone recommends one in place of the other. The gate accepts it, and enrich.md allows it. Whether to index on it is Ash's call (human_check #1). If the smartgrooming.uk post loads later, it may add editorial sources.

## Picks: 13 renderable of 13 (target 10–15, floor 6, not padded)

Every pick has exactly one source, so ranking is by closeness of the full-price tops range to the anchor's $42–$168 (sum of |log min ratio| and |log max ratio|). Every `price_relation` is `similar`: no pick's range sits wholly above or below the anchor's.

| # | Pick | Tops, full price (USD) | Items | Sizes | New this run | Gate |
|---|---|---|---|---|---|---|
| 1 | Spiritual Gangster | 48–168 | 63 | XS–XL | file + price | [] |
| 2 | I.AM.GIA | 49–179 | 67 | XXS–XL | reused (Edikted run) | [] |
| 3 | Damson Madder | 55–180 (/en-us) | 84 | US 2–16 | tops price | [] |
| 4 | Junk Food | 34–138 | 374 | XXS–XXL | file + price | [] |
| 5 | Petal & Pup | 37–109 | 339 | XXS–XXL, 0–16 | tops price | [] |
| 6 | Princess Polly | 29–110 | 913 | US 0–12, Curve 14–20 | reused | [] |
| 7 | Lauren Moshi | 66–240 | 718 | XS–XL | file + price | [] |
| 8 | Lioness | 30–90 | 223 | XXS–XXL | reused | [] |
| 9 | Tyler McGillivary | 85–218 | 35 | XS–4XL | file + price | [] |
| 10 | Aviator Nation | 69–89 (boyfriend tees only) | 128 | S–XL, XS most | file + price | [] |
| 11 | Parks Project | 34–65 (women's cut) | 18 | XS–3XL | file + price | [] |
| 12 | Rachel Antonoff | 158–268 | 10 | XS–XXL, 1X–3X | file + price | [] |
| 13 | FARM Rio | 30–998 | 99 | XXS–XL | tops price | [] |

Rejected (in the page file with reasons): Edikted (no regular-price tops stored), Jaded London, Free People and Topshop (unverified files), Chopova Lowena (tops to $965), LUUKAA (plain blouses, no specific reason), Paloma Wool (EUR, lower priority), Disturbia (no usable regular price), Daydreamer, Friday Feelin' and Smak Parlour (store domain not confirmed), Hush (429), Cotton On (not checked).

Shared brand files: all writes went through `merge_brand.py`, one patch at a time, each patch from `patches/dressed-in-lala/`. New: dressed-in-lala, lauren-moshi, spiritual-gangster, parks-project, junk-food, aviator-nation, rachel-antonoff, tyler-mcgillivary. Tops prices added: damson-madder, farm-rio, petal-and-pup. Source note appended: princess-polly, i-am-gia, lioness. No `--overwrite` used, and no `status` changes.

## Quality gate (G1–G15)

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A shopper searching "brands like Dressed in Lala" wants other labels to buy from. The page lists 13 that sell tops to the US. |
| G2 | PASS (with caveat) | The ranking pages are social posts and one Apart Style list. Prices, sizes, shipping and return terms come from each store's own feed and policies, so the page couldn't be written from the top 5. The caveat is the evidence base, not the copy. |
| G3 | PASS | Concrete prices, named products, size ceilings, return windows and fees, plus trade-offs between picks (Tyler McGillivary vs I.AM.GIA past XL, Junk Food vs Lauren Moshi for graphic tees). |
| G4 | PASS | No first-person experience. "We" never claims a try-on. Ash's bio untouched. |
| G5 | PASS | Author Ash, bio in `lib/authors.ts`. Not YMYL. |
| G6 | PASS | Fact trace below. Title count (13) matches rendered picks, and "Bold Graphic Tees and Knits" comes from the anchor's own positioning and its two largest lines. |
| G7 | N/A | Not YMYL. |
| G8 | PASS | The title promises 13 brands. The page delivers 13, all selling tops. |
| G9 | PASS | Serves "brands like": each body says what's alike and what's different from Dressed in Lala. |
| G10 | PASS | Price, size, shipping and returns per pick, a How to choose section, and FAQs on ownership and location. |
| G11 | PASS | The intro is 63 words and gets to the list. Each body opens answer-first. |
| G12 | PASS | Prices read 2026-10-29. The template's "Last checked" line carries the date, so the copy doesn't. |
| G13 | PASS (borderline) | Clearly more specific than anything on page one (social posts and a reddit thread). It's held back by the single co-stocking source per pick. |
| G14 | PASS | Affiliate links go through `/go/`. No implied testing. No pick is favored for commercial reasons. Ranked by price closeness. |
| G15 | PASS | Read through whole. Princess Polly, I.AM.GIA and Lioness bodies were written fresh, not reworded from the Edikted page (its "Daily Define is the name to look for" and store-list sentences were avoided). |

**Estimated Page Quality:** High. The strongest reason is original, store-verified prices, sizes and return terms for 13 brands, set against the anchor's own.
**Estimated Needs Met (dominant intent):** Highly Meets. One thing would make it better: an outside editorial source per pick, so the "like" rests on more than shared shelf space at Nordstrom.

## Voice check (`voice.md` "What we never write")

- Process narration: none. No "we checked", dates, "its About page says", or method talk. The intro says how the list is sorted (allowed by the page shape).
- Spreadsheet sentences: none. Counts appear only with a reason ("one size past Lala's 3XL", "a week less than Lala gives you", "half Lala's threshold").
- Verdicts on brands: none. Trade-offs are about attributes (sizes stop at XL, 14-day returns, refund label fees).
- Invented experience: none. No fit or feel claims. "Vintage feel" (Aviator Nation) is the brand's own stated process. "Classic fit" (Lauren Moshi Croft) is its product spec.
- Hype words: none.
- Rhythm: no semicolons, no em dashes, no bold. No sentence over 30 words. Paragraph lengths vary.
- Contractions throughout. Brands are "it".
- Colloquialisms: one "yes," aside (Rachel Antonoff).

## AI-voice scan (`ai-voice-avoid.md`)

- §1 binary contrasts: "rather than slogans", "rather than original art", "about the shape more than the print" are plain comparisons, each with a fact behind it. A drafted "less humor here" (Petal & Pup) was replaced with "trend-led rather than slogan-led", which its own positioning supports.
- §3 rule of three: Petal & Pup's "fitted, printed and more date night" and Damson Madder's "stripes, checks and patterned tops" were cut to two.
- Also §3: the intro's three-way "pay less, size past 3XL, more days" was cut to two. Rachel Antonoff's "seafood tower, pasta, ski-town map" list was cut to one example.
- §24 colon reveals: a drafted "is classic Moshi:" was rewritten as a plain sentence. Petal & Pup's "shows the style:" became a comma. The remaining colons introduce sizes.
- §34 importance flags, §48 no-sacrifice claims, §26 tidy conclusions: none. The closing is a decision guide, not a summary.

## Fact trace

Anchor (dressed-in-lala.json): tops $42–$168 (`prices.tops`). $62 tee = Being Yourself Is Cool Tee, Show Me Your Kitties Tee and others (price note). The tiger tee is the Sticks and Stones Oversized Tiger Tee. 3XL = `size_range`, and "oversized" is from its product copy ("S/M is equivalent to unisex XL, L/XL to unisex 3XL", notes). 21 days = `returns_days`. $200 = `free_shipping_min_usd`. $5 flat = notes (shipping policy). Hockey jerseys $148–$168 = price note. 100% cotton tees = notes. Shop LaLa, LLC and Lindon, UT = `parent_company`, notes (terms, contact page). Lex = notes (product copy). Sale final = notes (returns page). Nordstrom stocks it = notes.

- Spiritual Gangster: $48–$168, Dakota Crop Tank $58, Moon Magic $78, 100% cotton, mostly tanks = `prices.tops` note. Yoga studio house brand = notes (Our Story). XS–XL = `size_range`. $99 = `free_shipping_min_usd`. 21 days from shipment = notes. Moon and meditation prints = product copy in the price note's examples.
- I.AM.GIA: $49–$179, Blare Boob Tube, Buffy Latex Corset = `prices.tops` note. US warehouse and duties = notes. 30 days, free label for credit, $10 refund fee = notes. XXS–XL = `size_range`.
- Damson Madder: $55–$180 US, Samara $95 = new tops price note. London = `hq_country` GB and notes. Duties covered, $250 free shipping, 28 days, $20 refund label, free exchanges = notes. Organic or recycled cotton = `materials`, notes. US 2–16 = `size_range`.
- Junk Food: since 1998, licensed graphics (Blondie, NFL), washes and vintage details = notes (meta). $34, typical $52, SuperGirl X Blondie $58 = price note. $75 = `free_shipping_min_usd`. Continental US only, no exchanges, 30 days = notes. XXS–XXL = `size_range`.
- Petal & Pup: typical $59, Xanthe Mesh Top $59, under $100 = new price note. Australian = `hq_country`. $80, 30 days, $9.95 = notes. XXS–XXL, 0–16 = `size_range`.
- Princess Polly: $29–$110, Daily Define Tube Top = `prices.tops` note. US 0–12, Curve to 20 = `size_range`. $50 = `free_shipping_min_usd`. US stores from Scottsdale to Boston = notes (store locator).
- Lauren Moshi: hand-drawn art, cut and sewn in LA = notes (meta, about). Croft Lucky Cat $121, 100% cotton, screen print and crystal appliqué, classic fit = price note and product copy. $66–$240, typical $110 = price note. Free continental US shipping and returns, 30 days = notes. XS–XL = `size_range`. N. Robertson Blvd store = notes.
- Lioness: $30–$90, Kaia Cami, Notting Hill Shirt = `prices.tops` note. Sydney = notes. US warehouse, free standard US shipping = notes. XXS–XXL, 30 days = fields.
- Tyler McGillivary: XS–4XL on every top, $85–$218, Dover Tank Stop Sign $90, Zora Scoop Tee $113, collage and painted prints = price note and product copy. Brooklyn, bold colors and unique shapes = notes (meta). $250, 14 days, sale for credit or exchange = notes.
- Aviator Nation: 1970s California, breaking-down process = notes. Boyfriend tees $69–$89, Logo V-Neck $89, cotton/poly/rayon = price note. S–XL with XS on most = notes. 30 days, $9.50, more than 20% off final = notes.
- Parks Project: $34–$65, Zion $42, Naturalist Club $36 with embroidered park animals = price note. Over $2.9 million = notes (about). XS–3XL = `size_range`. 30 days, free exchanges, $9 fee = notes. Hayes Valley store = notes.
- Rachel Antonoff: $158–$268, Lillian Turtleneck Seafood Tower $178, sheer mesh, Lillian best-selling, more marked down than not (20 of 35) = price note and product copy. XS–XXL, 1X–3X = `size_range`. $300, 14 days, 30%-off final = notes.
- FARM Rio: Tropical Groove tee $39.95, adidas tees from $30, typical $198, Borbofly $198, $998 leather shirt = new price note. XXS–XL = notes. Free returns and exchanges within 30 days, final sale exchange only = notes.
- FAQ: ownership, location and shipping = anchor notes. Questions from Ahrefs `keywords-explorer-matching-terms` (questions, US): "who owns dressed in lala" (80), "is dressed in lala legit" (30), "where is dressed in lala located" (0). "Is dressed in lala fast fashion" (30) was skipped: no stored fact answers it.
