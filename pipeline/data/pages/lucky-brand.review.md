# Review: brands like Lucky Brand (`brands/lucky-brand`)

Checked 2026-10-29. Author: Ash. Category: jeans.

## Gate result (lib/pipeline.ts → judgeBrandsLikePage, run with tsx)
- indexable: **true**, reasons: none
- renderable picks: **15 / 15** (every pick has an empty `pickProblems`). Title: "15 Brands Like Lucky Brand for Premium Denim and Americana".
- Side effect on another page: `buckle.json` ran 14/14 before; with Lucky's new jeans price row, its `lucky-brand` pick (price_relation null) fails "price label doesn't match stored prices", so Buckle renders 13 and stays indexable. Fix for the coordinator: set that pick's `price_relation` to `"similar"` (Buckle $54.99–$308 vs Lucky $129). Not edited here (not this page's file).
- Anchor price caveat (human_check): Lucky's only regular-price jeans are the Madhappy x Lucky Brand collab at $129. Everything else was marked down from a "Comp. Value". The labels (2 cheaper, 3 similar, 4 pricier, 6 unpriced and unlabelled) match stored prices but should be recomputed after the sale.

## G1–G15
| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A brand-alternatives page for people shopping Lucky Brand jeans; the site's purpose. |
| G2 | PASS | Original data: regular-price jeans ranges read from each store (Joe's, Miss Me, Scotch & Soda, Silver, Lucky today; others from today's brand files), size runs, return windows and fees, store footprints from official locators. None of the outside lists carry prices or sizes. |
| G3 | PASS | One concrete detail per pick (which line to start with, length options, return-window catch), comparisons between picks (Madewell vs J.Crew, Silver vs Gap, Lee and Wrangler, Miss Me vs AE). |
| G4 | PASS | No first-person experience; "we" absent from claims of wearing or testing. Author bio untouched. |
| G5 | PASS | Author "Ash" (lib/authors.ts). Not YMYL. |
| G6 | PASS | Every number traced below. No prices claimed for unreadable stores (Levi's, True Religion, Lee, AE, Guess, Wrangler). |
| G7 | N/A | Not YMYL. |
| G8 | PASS | Title count 15 matches 15 rendered picks; known_for from Lucky's own "Rooted in premium denim, Americana". |
| G9 | PASS | Intent (other brands to buy instead of Lucky) answered pick by pick, plus How to choose. |
| G10 | PASS | Price, sizes, shipping/returns or where to buy for each; FAQ covers owner, price, closure, similar brands. |
| G11 | PASS | Intro 69 words, answer-first bodies, no preamble. |
| G12 | PASS | Prices and terms read 2026-10-29; dates live in data and the Last checked line, not the copy. |
| G13 | PASS (estimate) | Ranking lists (CoolSpotters 2022, PlainTips undated) give names and one line each; this page has prices, sizes, return terms and stores for each. |
| G14 | PASS | No pick favoured commercially; affiliate links via /go/ with the template disclosure. |
| G15 | PASS | Read as a whole; openers vary; 6-word shingle check against every other page file: only product names, prices and short fact phrases overlap. Five near-copies (Madewell x2, Gap, J.Crew, AE return fee) and the shared intro sort line were rewritten. |

- **Estimated Page Quality:** High, because each pick carries checked prices, sizes and return terms that the outside lists don't have.
- **Estimated Needs Met:** Highly Meets. Better: regular-price ranges for Levi's, Lee, True Religion and Guess (bot walls), and a wider Lucky range once the sale ends.

## Voice check (voice.md "What we never write")
- Process narration: none (no "we checked", check dates, "its About page says", or blocked-site talk). Historic dates (1853, May 2026 Lee sale announcement) are facts, not method.
- Spreadsheet sentences: none. Counts are supporting detail ("stores in 46 states", "24 US states").
- Verdicts on brands: none (cut a True Religion line about its bankruptcies). Invented experience: none. Hype words: none.
- A brand is "it" throughout ("they" only for returns and items).

## AI-voice scan (ai-voice-avoid.md)
Fixed: colon reveals (Gap "Sizes are the other draw:", Miss Me "One thing to watch:", Naked & Famous opener), rhetorical setups ("The practical difference is reach", "The stores are the easy part", "The catch is time"), From-X-to-Y (intro, True Religion), rule of three (intro "maybe… maybe… maybe"), three sentences over 30 words split. Kept: one trade-off line per pick. No semicolons, no em or en dashes in copy, no bold.

## Fact trace (copy → stored field)
- Lucky: $129 full price, Madhappy x Lucky Brand Baggy, comp values $89.50–$149 → `lucky-brand.prices[jeans]` + notes; waists 24–35, inseams 27–34 → `size_range`; 60-day returns → `returns_days` (Return Policy FAQ); free shipping over $85 → `free_shipping_min_usd`; no petite/plus section → notes (hollister run filters); owner ABG / Catalyst operator → `parent_company` + notes (Wikipedia); founded 1990 Vernon → notes.
- Levi's: 1853 San Francisco, jeans/casual wear/accessories for men, women, kids, ~3,300 stores, 40 states → `levis` notes (levistrauss.com, locator). Cinch Baggy Wide Leg Jean $84.95 → `buckle.prices[jeans].note`.
- True Religion: 2002, El Segundo → notes (Wikipedia); 24 US states, Canada, Mexico, "Designer Jeans" → notes (locations.truereligion.com).
- Lee: 1889 Salina, zipper fly 1920s, Lazy S 1944, Greensboro, Kontoor sale to ABG announced May 2026 → notes (Wikipedia); 22 states → notes (locations.lee.com).
- Madewell: premium denim, $148 most / $198 top, plus 14W–24W, petite/tall/curvy, Denim Atelier, Insider hemming, 30-day returns, J.Crew Group → `madewell` prices, size_range, notes.
- Gap: 1969 SF, $79.95–$99.95, High Rise '70s Flare $89.95, 000–20, petite/tall, short/regular/long inseams, $50 free shipping for Good Rewards, 46 states, 30-day returns → `gap` prices + notes.
- Miss Me: LA 2001, statement/rhinestone denim, Lilia Bootcut $94, Bandit Baggy Wide $149, waists 23–34, inseams 30/32/34, free shipping $150, 30 days from ship date, Buckle's Universal Boot $129 → `miss-me` + `buckle` notes.
- Scotch & Soda: Amsterdam 1985, $108–$178, Essentials The Sky Straight $108, The Wave Super Wide Leg $178, waists 24–34 by inseam, free US delivery over $200, 30 days → `scotch-soda`.
- Buckle: BKE, Miss Me, Levi's, Wrangler, 7FAM; Very J $54.99, 7FAM Dojo $308; 440 stores, 42 states; waists 22–38; 60 days, free in store, $6.99 mail; denim biggest category → `buckle`.
- Naked & Famous: Montreal, Canada-sewn Japanese denim, no washes; from $141, Bestie Black Lightweight $143, up to $495; waists 23–44; free hemming; $10 US shipping; store-credit refunds → `naked-and-famous` (imogene-and-willie run).
- J.Crew: $148–$198, western studded straight, embellished lowrider $188, Classic/Petite/Tall, waists to 37, $7 standard shipping, Rewards, $7.50 label → `j-crew`.
- Silver Jeans Co.: $88–$108, Avery Straight $94, Tuesday Baggy Wide $104, free shipping no minimum, 45-day free returns, 22–36 / 00–16, petite and plus → `silver-jeans-co`.
- Joe's Jeans: Joe Dahan, LA 2001, creative director, fit-first; Hi Honey $168, Harlowe Studded $328; waists 23–34, petite; $200 free ground; 30 days from delivery, $7 label; CA, UK, FR, MX, AU → `joes-jeans`.
- American Eagle: Classic and Curvy, curvy Super High-Waisted Baggy Wide-Leg, 60 days, free shipping $75, $5 online returns (free for Level 3 and cardmembers), 1977 Pittsburgh → `american-eagle`.
- Guess: Marciano brothers 1981, LA; straight/mom/wide/skinny/bootcut/flare; 8 states incl. CA, TX, FL, NY; ABG owns 51% → `guess` notes.
- Wrangler: rodeo use, 13MWZ 1947, Western Collection, 22 states, Kontoor, PRCA endorsement 1974 → `wrangler` notes. Buckle carries Wrangler → `buckle` notes.
- FAQ: owner/operator → `lucky-brand` notes (Wikipedia); $129 + comp values → prices note; still selling, free shipping $85, US stores → `lucky-brand`. Questions from Ahrefs matching-terms ("lucky brand", questions) and one People also ask ("What brand is similar to Lucky Brand?").
