# Review: stores like Hollister (`stores/hollister`)

Checked 2026-10-29. Author: Ash. Category: jeans.

## Gate result (lib/pipeline.ts → judgeBrandsLikePage)
- indexable: **false**
- reasons: `anchor missing: status, knownFor, sizeRange, shipsTo, returnsDays, imageUrl, price:jeans`
- renderable picks: **15 / 15** (every pick has an empty `pickProblems`). Title: "15 Stores Like Hollister" (no known_for yet).
- Blocker is the anchor only: hollisterco.com serves a "Client Challenge" page to WebFetch on every URL (re-tried once today, no workaround). See `human_check`. Images are the coordinator's step.

## G1–G15
| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A store-alternatives page for people shopping Hollister jeans; squarely the site's purpose. |
| G2 | PASS | Original data: regular-price jeans ranges read from each store (A&F, Tillys, Forever 21 today; others from today's brand files), size runs, return windows and fees, store footprints from 10-Ks. None of the ranking lists carry prices or sizes. |
| G3 | PASS | Concrete trade-offs per pick (fees, size cut-offs, which fit line to start with), comparisons between picks. |
| G4 | PASS | No first-person experience; "we" absent from claims of wearing or testing. Author bio untouched. |
| G5 | PASS | Author "Ash" (lib/authors.ts). Not YMYL. |
| G6 | PASS | Every number traced below. No Hollister prices or sizes claimed (unverified). |
| G7 | N/A | Not YMYL. |
| G8 | PASS | Title "15 Stores Like Hollister" matches 15 rendered picks. |
| G9 | PASS | Intent (where else to shop like Hollister) answered pick by pick, with how-to-choose. |
| G10 | PASS | Price, sizes, shipping/returns and where to buy for each; FAQ covers owner, closure, origin. |
| G11 | PASS | Intro 69 words, answer-first bodies, no preamble. |
| G12 | PASS | Prices and terms read 2026-10-29; dates live in data and the Last checked line. |
| G13 | PASS (estimate) | Top results list names with one-line reasons and no prices; this page has prices, size runs and return terms for each. |
| G14 | PASS | No pick is favoured commercially; affiliate links go via /go/ with the template disclosure. |
| G15 | PASS | Read as a whole; bodies don't share openers; no sibling overlap (only "stores" jeans page). |

- **Estimated Page Quality:** High, because each pick carries checked prices, sizes and return terms the ranking lists don't have.
- **Estimated Needs Met:** Highly Meets once the anchor is verified; adding Hollister's own jeans range (price labels) would make it better.

## Voice check (voice.md "What we never write")
- Process narration: none (no "we checked", dates, "its About page says", or blocked-site talk in copy).
- Spreadsheet sentences: none. Counts appear only as supporting detail ("stores in 42 states").
- Verdicts on brands: none. Invented experience: none ("feels", "runs small" absent). Hype words: none.
- One colloquialism ("cheap-and-cheerful", Cotton On).

## AI-voice scan (ai-voice-avoid.md)
Fixed: binary contrast (Old Navy "the sizing, not one style"), colon reveal (Forever 21 "One thing to know:"), rhetorical setups (Levi's "Here's the useful part", Buckle "That mix is the useful part", J.Crew "The useful detail is length", Madewell "The part worth knowing", A&F "What changes is the polish"), From-X-to-Y on A&F fit names, three-item lists trimmed (AE returns comparison, Lucky fit names, Buckle brands, closing). No semicolons, no em dashes, no bold.

## Fact trace (copy → stored field)
- Intro: picks' ships_to/us_stores; A&F Co. parent (hollister.parent_company).
- A&F: parent and New Albany HQ (hollister + abercrombie-fitch notes); $80–$110, Relaxed Straight $80, Baggy $90, 90s Straight, waists 26–38, women's cuts (abercrombie-fitch prices.jeans + notes); free over $99, ships US/CA (free_shipping_min_usd, ships_to). "polished, grown-up" from evidence notes (ClothedUp, Lemon8, knitwear).
- AE: 60-day returns, $5 mail returns, free over $75, US only (american-eagle returns_days, notes, ships_to); Classic/Curvy fits, AE Lowest Rise Extra Baggy Jean (notes, 2026-10-29); Madewell/J.Crew 30 days (returns_days).
- Aeropostale: $64.95/$69.95, embellished styles, low-rise cuts, 000–20 short/long, men's 26–46, free over $25, 1987, Catalyst Brands, teens/young adults (prices.jeans note, size_range notes, founded_year, parent_company). A&F 38 (abercrombie-fitch.size_range).
- Forever 21: $38/$44 and both product names (prices.jeans note), denim mostly skirts/shorts (same feed), online only after closing US stores 2025, ships 50 states, free over $50, 30 days, $9.99 fee, clearance non-returnable (notes, returns_days).
- Lucky: premium denim and Americana, 1990 (notes); Hollister first store 2000 (hollister notes); Lil Maggie flare, Sweet boot/straight, waists 24–35, inseams 27–34, no petite/plus filter (notes 2026-10-29); US stores, free over $85 (us_stores, free_shipping_min_usd). Madewell petite and plus (madewell notes).
- Levi's: 1853 San Francisco, jeans and casual wear for men, women, children, US locator (levis notes). Tillys Levi's Superlow Loose $74.99, RSQ $54.99 (tillys prices note). Buckle stocks Levi's, Wrangler, Miss Me (buckle notes).
- Gap: beach-shack stores (hollister notes, Wikipedia), casual American style (known_for), fit tiles (gap notes), 46 states (store locator note), sells online (Gap Inc. 10-K note), Gap Inc. owns Old Navy (old-navy.parent_company).
- Old Navy: 00–30 petite and tall, Rockstar Super Skinny bestseller, 49 states + DC + PR, women/men/kids/baby (old-navy notes, size_range); widest run vs Aeropostale 20, Cotton On 20, Madewell 24W. Madewell 14W–24W.
- Madewell: premium denim brand, $148 mostly, up to $198, Denim Atelier, Insider hemming, Insider-only free shipping, 30 days, J.Crew Group (prices note, notes, returns_days, parent). J.Crew has no plus (j-crew.size_range).
- Everlane: published costs (notes, production_model), $88–$148, The Way-High Curve Jean $88 with 27"/29" inseams, 00–16, 30 days, $7 label, free in store, audited factories, ships US/CA/GB/AU (prices note, size_range, notes, ships_to).
- Buckle: denim 42.5%, Levi's/Miss Me, BKE, Buckle Black, Ace High, brand-name ~53%, ages 15–30, 42 states (buckle notes, 10-K). Tillys free over $70 (tillys.free_shipping_min_usd).
- J.Crew: $148–$198, Zoe barrel and slim-wide $158, western straight studs $148–$198, waists 23–37, Classic/Petite/Tall on 7 of 9, 30 days, $7.50 (prices note, size_range, notes). Shared parent with Madewell (parent_company). "upscale version" from Style Your Occasion evidence note.
- Cotton On: $69.99/$79.99, 91 Straight, Curvy Stretch Wide, gap-proof waist, no return limit, free return shipping, US 0–20, Petite/Curvy, free over $75, 1991, Geelong (prices note, notes, size_range, founded_year).
- Tillys: Irvine/Orange County, RSQ $49.99–$54.99, RSQ Low Rise Baggy $54.99, Levi's Premium 501 '90s Loose $109.99, RSQ top seller, juniors 0–13 and waists 23–33, free over $70, 33 states (tillys prices note, notes, size_range). Surf/skate from knitwear evidence note.
- Superdry: 2003, Cheltenham, $74.95–$109.95, mostly organic cotton, Mid Rise Baggy $74.95 in five colors, organic skinny/wide-leg $109.95, USD store, waists 24–34 (superdry notes, prices note, size_range).
- Closing: as above. FAQ: owner/abercrombie kids (hollister notes, corporate page), Gilly Hicks and 523 vs 306 stores and websites (A&F 10-K FY2025, hollister notes), fictional 1922 backstory and 2000 Columbus first store (hollister notes, Wikipedia).

## Not done / open
- Anchor unverified (human_check): status, price, sizes, shipping, returns, known_for.
- Urban Outfitters (7 sources) and PacSun (6) are the strongest missing picks; both refuse WebFetch.
- 7 picks render without a price (AE and Lucky all-marked-down; Levi's, Gap, Old Navy, Buckle listings don't render). Forever 21's range rests on 2 regular-price items.
- `npm run lint:facts` fails on `albaray.known_for` (another agent's brand file, not touched here); every brand this run wrote passes.
