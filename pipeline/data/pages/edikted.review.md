# Review: stores like Edikted (steps 2–5)

Written 2026-10-29. Author: Ash. Copy in `edikted.json` → `author`, `copy`.
Checked with `lib/gate.ts` through `lib/pipeline.ts` (tsx script, now = 2026-10-29):

- Title: "14 Stores Like Edikted for Affordable Street-Style Trends"
- Rendered picks: 14 of 14. `pickProblems` returns `[]` for every pick.
- Verdict: **not indexable**. Reasons: `anchor missing: imageUrl, price:tops`.
  - `price:tops`: Edikted is running "50% OFF SITEWIDE" (homepage banner with countdown). All 3,985 tops in its feed have a compare-at price above the selling price, so there is no regular price to store. Re-check after the sale (human_check #1).
  - `imageUrl`: `images.json` has edikted as `blocked` (HTTP 429, rate limiting). Re-run `pipeline/images.mjs` (human_check #2).
  - Both gaps clear without touching the copy. Once they're filled, every `price_relation` (now null, as the gate requires) gets set from the stored prices.
- `npm test`: 27/27 pass. `npm run lint:facts`: ok.

## Category

`tops`. Tops are Edikted's largest and best-selling line. The tops feed holds 3,985 tops, against 484 jeans and 769 dresses. 116 of 289 best-sellers are Top, T-Shirt or Tank Top. The like-for-like price is each store's tops collection at regular price.

## Evidence

For the four keywords (Ahrefs `serp-overview`, US, 4 calls):
- `stores like edikted` and `brands like edikted` returned two readable editorial pages:
  - worthybornedit, "15 Stores Like Edikted for Trendy Y2K Clothing" (a style list, 15 brands).
  - Good On You, "6 More Sustainable Alternatives to Edikted" (a sustainability list, 6 brands).
- `edikted alternatives` and `similar to edikted` returned no SERP data.
- Dropped: Reddit (6 URLs, unfetchable, no workaround), Instagram, TikTok, Similarweb (scraped), the ASOS brand index, Edikted's own site, and lists about other brands (Princess Polly, Free People, Brandy Melville, women over 40, cottagecore).
- Co-stocking: ASOS stocks Edikted, but it returned 503, so it was not used.
- Pool: 18 Apart Style pool brands. Only Jaded London and Tiger Mist have an outside source.

Candidates: 21 with a source and 16 pool-only.

## Picks: 14 renderable of 14 (target 10–15, floor 6, not padded)

Every pick has exactly one independent source, and the anchor has no price. The ranking is:
1. worthybornedit picks first (same-style list), then Good On You picks.
2. Within each group, lowest full-price top first, then more priced items.
3. Exception: Dolls Kill sits last in its group because its price row rests on 9 items.

| # | Pick | Source | Tops, full price (USD) | Items | Gate |
|---|---|---|---|---|---|
| 1 | Princess Polly | worthybornedit #11 | 29–110 | 913 (first 4,000 of feed) | [] |
| 2 | White Fox | worthybornedit #6 | 29.99–99.99 | 820 | [] |
| 3 | Lioness (US store) | worthybornedit #12 | 30–90 | 223 | [] |
| 4 | Revice Denim | worthybornedit #2 | 32–48 | 24 | [] |
| 5 | Outcast ("Outkast") | worthybornedit #4 | 35–105 | 324 | [] |
| 6 | Motel Rocks | worthybornedit #7 | 36–98 | 454 | [] |
| 7 | The Kript | worthybornedit #10 | 36–89 | 21 | [] |
| 8 | Peppermayo (US store) | worthybornedit #14 | 45–98 | 313 | [] |
| 9 | I.AM.GIA | worthybornedit #3 | 49–179 | 67 | [] |
| 10 | Tiger Mist | worthybornedit #15 | 49–105 | 56 | [] |
| 11 | Miaou | worthybornedit #5 | 78–395 | 72 | [] |
| 12 | Dolls Kill | worthybornedit #9 | 29–79 | 9 (newest 1,000) | [] |
| 13 | Frankie Collective | Good On You #3 | 30–185 | 407 | [] |
| 14 | Afends | Good On You #1 | AUD 49.99–99.99 (35.16–70.32) | 97 | [] |

Rejected (reason recorded in `rejected` for each):
- Jaded London: unverified, 403.
- Garage: 403.
- Urban Outfitters: unverified retailer.
- Triarchy: sells jeans, not tops (off_category).
- Plant Faced Clothing: only 2 regular-price tops, mostly merch.
- Neu Nomads: TENCEL work and travel blouses at $78–$295. It shares no specific reason with Edikted.
- CHNGE: slogan tees, and the site isn't Shopify, so regular and sale prices can't be separated.
- The 16 pool-only brands.

Brand-file changes (all through `merge_brand.py`):
- New files: revice-denim, i-am-gia, outcast, white-fox, princess-polly, peppermayo, tiger-mist.
- Tops prices added to miaou, motel-rocks, dollskill, afends, lioness, frankie-collective and the-kript.
- Corrections:
  - **edikted** `known_for`: "Gen-Z Online Fashion Brand" → "Affordable Street-Style Trends", from its homepage meta. The old value read as "…for Gen-Z Online Fashion Brand" in the title. Also `us_stores` true (21 US stores on its own store page) and `founded_year` 2020.
  - **the-kript** `website_url`: thekript.com → www.thekriptstore.com, the domain worthybornedit links to. thekript.com served a JS challenge. Status is now verified.
  - **lioness** `ships_to`: adds US. us.lionessfashion.com ships from a US warehouse. The jaded-london page rejected Lioness for "doesn't ship to the US", so that page's coordinator may want to re-check it.

## FAQ sources (Ahrefs)

One call: `keywords-explorer-matching-terms`, "edikted", US, terms=questions, volume desc, limit 40.

| Used | Question (US volume) | source_query |
|---|---|---|
| Yes | Where is Edikted based? (150) | `where is edikted based` |
| Yes | How many Edikted stores are there? (80) | `how many edikted stores are there` |
| Yes | When was Edikted founded? (70) | `when was edikted founded` |
| Yes | What is Edikted's return policy? (40) | `what is edikted return policy` |

Skipped because no stored fact answers them, or the answer would rest on an outside verdict:
- is edikted legit (1,300), fast fashion (700), good quality (350), ethical, like Shein, child labor.
- Shipping time (250 and below) and where it ships from.
- Who owns it (200). Only the founders are stored, not the ownership.
- Sale timing, student discount, ambassador, gift cards, "is edikted israeli".

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | "Stores like Edikted" for US shoppers is the site's purpose. Every pick sells tops to the US. |
| G2 | PASS | Each body uses each store's own regular-price tops range, named products, sizes, US shipping thresholds and return terms. None of it comes from the two source lists, which give no prices. No source wording is used. |
| G3 | PASS | Specifics a SERP reader can't get: White Fox's 30 days count from the order, Lioness's split-warehouse shipping, The Kript's duty-paid shipping from Montreal, Afends's XS–XL = US 2–10, Princess Polly's Curve sizes to US 20, and which stores refund versus give credit only. |
| G4 | PASS | No wear, try or test claims. The bio is not added to. |
| G5 | PASS | author "Ash", byline to /authors/ash. Not YMYL. |
| G6 | PASS | Every number traces to a stored fact (table below). Edikted's own prices are never stated. |
| G7 | PASS (N/A) | Not YMYL. |
| G8 | PASS | The title's "14" is the real count. "Affordable Street-Style Trends" is Edikted's own positioning ("street style and runway trends… affordable prices"). |
| G9 | **BLOCKED (publish)** | The comparison with Edikted's own prices is missing until its sale ends. Sizes, shipping and returns are compared with Edikted. Price labels (cheaper/similar/pricier) are null. |
| G10 | PASS | 14 stores covering budget, size, corset, vintage and organic needs, plus a "How to choose" by size, budget and returns. ASOS, Garage and Jaded London are missing (unreadable). |
| G11 | PASS | The intro is 74 words and goes straight to why you'd look elsewhere. No preamble. |
| G12 | PASS | All facts are checked 2026-10-29. The template's "Last checked" line carries the date. |
| G13 | PASS (Medium-High) | Against the top results (worthybornedit has no prices, sizes or shipping; Good On You covers 6 sustainability brands), this page is more specific. Estimate below. |
| G14 | PASS | Affiliate links go through `/go/` with the disclosure line. No implied testing. The ranking criteria are stated in the intro ("starts with the ones whose full-price tops cost least"). |
| G15 | PASS | Read through whole. No near-duplicate phrasing across bodies. Each opens differently. |

**Estimated Page Quality:** Medium-High until the anchor's price lands. The strongest reason is the per-store US return and shipping detail that no ranking page has.
**Estimated Needs Met (dominant intent):** Moderately to Highly Meets. Edikted's regular tops price would make it better: it would let each store be labeled cheaper or pricier.

## Voice check (`voice.md` "What we never write")

- Process narration: none. There is no "we checked", no dates and no source names in the copy.
- Spreadsheet sentences: none. Counts appear only to make a point ("a couple of dozen tanks and tees, enough for a matching top and not much more").
- Verdicts on brands: none. "Returns are fair" is followed by the terms.
- Invented experience: none. There are no fit or feel claims, and sizes are stated as ranges.
- Hype: none.
- Moves present:
  - Answer-first openers with a named product and price.
  - One thing taught per brand, for example the Daily Define fabric, White Fox's return clock, Lioness's warehouses and Frankie's one-size pieces.
  - Honest catches on specific attributes.
  - Picks compared with each other: Outcast and White Fox are sent to Princess Polly or The Kript for refunds, Tiger Mist is set against Princess Polly and White Fox on price, and Miaou is set against The Kript on corsets.
  - Use-case "Best for" lines.
  - "How to choose" by size, budget and returns.

## AI-voice scan (`ai-voice-avoid.md`)

Found and fixed:
- A colon reveal (Tiger Mist returns), rewritten.
- "From X to Y" (I.AM.GIA prints), changed to "prints like…".
- An unsupported superlative ("which nobody else here offers", Lioness). It was cut because three stores have no stored threshold.
- "Lower than most stores here" (Tiger Mist), replaced with named comparisons.
- Three 20-word sentences in a row (Dolls Kill), restructured.
- Sentences of 31 and 33 words (Outcast, I.AM.GIA), split.
- "Stretchy" (Peppermayo, an inferred feel), cut.
- "Each label sizes differently" (Dolls Kill, not stored), cut.

No semicolons, em dashes, "not X but Y" constructions, rule-of-three openers or tidy summary endings remain. Brands are "it" throughout.

## Fact trace

| Copy claim | Field / source |
|---|---|
| All tops price ranges and item counts | `brands/{slug}.json` → `prices[tops]` (feed URLs in `source_url`) |
| Named products and prices (Daily Define Tube Top $29, Test Drive Halter / Core Strengths Tank $29.99, Kaia Cami $30, Bare Cami $40 viscose, Starlet Tank $32, DJ Baby Tee $35, corset tops from $50 (Cressida), Kindos Halter $36, Raceline $41–$45, Barlyn Cami $39 mesh, Elara Corset $62, Michelle Corset $89, Hollywood Baby Tank $45, Blare Boob Tube $49, T-Rex Tank $55, Buffy Latex Corset $179, Bella Baby Tee $49, Elisa Corset Top $69, Brigit Bandage $75, Jinx Tank $88, Stella Tank $135, Libra Corset $195 / latex $395, Pastel Pop $29, Moto Dickini $79, Rework Cycling Tank $30, Colts NFL Corset $89, Basis Rib Halter AUD 49.99, Carmen Baby Tee AUD 69.99) | Each store's tops `products.json`, regular price, in stock, 2026-10-29 |
| Daily Define = lower-impact fabric, 87% reclaimed polyamide; Curve US 14–20 | princess-polly notes (product .js pages) |
| Princess Polly free shipping $50, 30-day refund/exchange, 4 named US stores | princess-polly `free_shipping_min_usd`, `returns_days`, notes (store locator) |
| White Fox Australian, US Eastern dispatch, 3XS, store credit only, 30 days from order | white-fox `hq_country`, notes |
| Lioness US warehouse free standard, AU items $8 under $95, split parcels, XXS–XXL, $15 refund deduction | lioness notes (us.lionessfashion.com policies) |
| Revice jeans-first, $7.88 flat, free over $100, 30-day exchange/credit, 40%+ final sale | revice-denim `known_for`, notes |
| Outcast crop tops + corsets (300 + 118 of 456), $130, store credit minus postage, no change-of-mind refunds | outcast price note, notes |
| Motel halternecks largest type, XXS–XXL, $95, designed in-house in London, 30 days | motel-rocks price note, `size_range`, `free_shipping_min_usd`, notes |
| The Kript Y2K line, Montreal, duties paid, $8.99 / free over $150, 14 days, refund option | the-kript `known_for`, notes |
| Peppermayo US 0–18 (272 of 314), halter/cami/bustier/corset types, duties included, $99, 21 / 14 days | peppermayo price note, notes |
| I.AM.GIA US warehouse, duties covered, 30 days, free credit label, $10 refund fee | i-am-gia notes |
| Tiger Mist $75 free US shipping, 30 days, $10 refund label | tiger-mist notes |
| Miaou French-born, SoCal-inspired, corsets largest type, 1XL–4XL on some tops, 14-day credit/exchange, $9.95 fee, $250 | miaou notes and price note |
| Dolls Kill multi-brand (Current Mood, Club Exx, Von Dutch, Ed Hardy), women's to 3X, $50, gift-card returns, 30 days | dollskill notes, `size_range`, `free_shipping_min_usd`, `returns_days` |
| Frankie one-of-one vintage/rework, US studio, 15-day store credit, XS–2XL | frankie-collective notes, `size_range` |
| Afends Byron Bay, hemp/organic, AUD, $150 free / $17.50, 12+ business days, XS–XL = US 2–10, refunds full-price only | afends notes; AUD→USD at ECB 2026-10-28 (0.703285) |
| Edikted tops XS–XL, return fee $4.90, free US shipping over $80, LA, founded 2020 online by Shwartzenberg and Alon, first shop NY 2023, 21 US stores in 12 states + 2 UK + 1 Bangkok | edikted notes, `free_shipping_min_usd`, `returns_days`, `founded_year`, `us_stores` |

## Open items for the coordinator

1. Edikted tops price after the sale (the only content blocker), then set `price_relation` on all 14 picks.
2. Edikted image (429).
3. The Dolls Kill tops row rests on 9 items.
4. Lioness now ships to the US, so the jaded-london rejection reason is stale.
5. The edikted `notes` field has one superseded store-count line. `merge_brand.py` now appends notes and never removes them. The later line (21 US stores) is correct.
