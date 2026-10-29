# Review: stores like Lucy in the Sky (`/stores/lucy-in-the-sky`)

Author: Ash. Category: dresses. 15 picks, 15 renderable. Checked 2026-10-29.

## Gate result
`judgeBrandsLikePage` via `lib/pipeline.ts` (tsx script, `now` 2026-10-29): **indexable: true**, reasons `[]`,
renderable 15 / 15, every pick's `pickProblems` empty. Title: "15 Stores Like Lucy in the Sky for Party Dresses Designed in Los Angeles".
`npm run lint:facts`: ok. `npm test`: 30 pass, 0 fail.

Anchor: verified. This run added `size_range` (XXS–XL; waists 22–30.5 in), `has_plus` false and
`production_model` from the FAQ's FAQPage data. The anchor was missing `size_range` before, which would
have blocked indexing. The dresses price ($55.90–$99.90) was re-read and left unchanged.

## Quality gate (G1–G15)
| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A "stores like Lucy in the Sky" searcher wants other places for party, homecoming and formal dresses. Every pick sells dresses to US shoppers. |
| G2 | PASS | The ranking lists (styleyouroccasion 2022, lapassionvoutee 2022, retailboss 2024) give names and blurbs only. This page has full-price dress ranges read from each store's own feed, size ceilings against Lucy's XL, and return terms, set against Lucy's 14-day credit-only policy. FAQ answers come from Lucy's own FAQ, not from PAA text. |
| G3 | PASS | Concrete trade-offs for each pick: refund versus credit windows, return fees, tariffs or duties included, size ranges, shipping thresholds. No invented experience. |
| G4 | PASS | No first-person experience or credentials. |
| G5 | PASS | Author Ash, bio in `lib/authors.ts`. Not YMYL. |
| G6 | PASS | Every number traces to a stored field or note (trace below). Regular prices only. |
| G7 | N/A | Not YMYL. |
| G8 | PASS | The count is the real renderable count (15). "Party Dresses Designed in Los Angeles" is Lucy's known_for, from its own listing titles. |
| G9 | PASS | The intro names the two reasons people leave (credit-only returns, XL ceiling), and each pick opens with its answer. |
| G10 | PASS | Price, sizes, shipping and returns for every pick, a how-to-choose guide by refunds, try-on, size and budget, and FAQs on Lucy's returns, sizing, legitimacy and shipping. |
| G11 | PASS | Intro 64 words. Bodies 113–139 words. Closing 95 words. No preamble. |
| G12 | PASS | All prices and terms are from 2026-10-29. The template's "Last checked" line carries the date. |
| G13 | PASS | The top lists are 2022–2024, have no prices, and include a closed store (Tobi), a placeholder (Nasty Gal) and Topshop, which now redirects to ASOS. This page is live-checked and specific. |
| G14 | PASS | No implied testing. Affiliate links go through `/go/` per the template. The sort order is stated in the intro. |
| G15 | PASS | Read through as a whole. A 7-gram overlap scan against every other page file finds no shared sentences (product names excepted). Windsor's product was changed from the Naya dress, which the Akira page already names. |

**Estimated Page Quality:** High. Strongest reason: refund and size terms set against the two limits that send people away from Lucy in the Sky, for 15 live stores, where the ranking lists include closed ones.
**Estimated Needs Met:** Highly Meets. It would be better with Hello Molly and Lulus. Both have 4 sources but refuse the bot UA, so they need a human check.

## Voice check (`pipeline/voice.md` "What we never write")
- Process narration: none (no "we checked", dates or "its FAQ says"). The intro's last line describes the sort order, not the method.
- Spreadsheet sentences: none. Counts only appear as reasons ("upwards of 350 locations" as the reason to try on in person, "three sizes past where Lucy in the Sky stops").
- Verdicts on brands: none. Trade-offs are about returns, sizes, shipping or price.
- Invented experience: none. No fit or feel claims. "Does it run small" is answered with Lucy's own sizing note.
- Hype: none.
- No semicolons, em dashes, bold or italics. Longest sentence is 30 words. Brands are "it" (the one "they" in the Windsor body refers to homecoming and prom).

## AI-voice scan (`reference/ai-voice-avoid.md`)
- Rule-of-three lists cut in the closing (pairs instead). Two three-item lists are left in bodies where the store names three things (Selfie Leslie's labels; Princess Polly's refund, exchange or gift card).
- Avoided the stock openers used on sibling pages ("is where to go when", "is the closest swap", "is the cheapest way in"). They were rewritten after the overlap scan.
- Paragraph endings vary. Several bodies end on a pointer to another pick, not on a punchline.

## Fact trace
- Intro: Lucy store credit only and XL ceiling → `lucy-in-the-sky` notes (returns FAQ) and `size_range`. "LA party-dress look" → `known_for`. "Longer return windows" → 14 of 15 picks have `returns_days` above 14 (Storets matches at 14).
- Princess Polly: $49–$119 → prices.dresses. Celena Mini Dress Pink Floral $58 → product-images. US 0–12, Curve 14–20 → `size_range`. 30-day refund, exchange or gift card, free over $50 → notes / `free_shipping_min_usd`. Stores in Boston, Columbus, Santa Clara, Scottsdale → notes (store locator).
- Windsor: 350+ locations, special-occasion focus since 1957 → notes. $14–$199.90, beaded formal dress → price note. Verona Off-The-Shoulder Bow Back Velvet Formal Dress $74.90 → product-images. XL = US 15 → `size_range`. Free from $75, 30 days → fields.
- Boohoo: US 0–26, petite, tall → notes (size guide). Manchester, Boohoo Group → notes. $10.99, 6–8 business days, 21 days, $14.99 per parcel, "Discounts may not be based on former prices" → notes.
- Showpo: Sydney, US warehouse, some items from Australia, US 0–16, free over $100 / $9.95, 30 days with a 7-day refund then exchange or 110% credit → notes. Valerie Mini Dress $99.95 → notes (dresses page).
- PrettyLittleThing: petite 00–12, tall 0–14, plus 12–24, main 0–14, Manchester, Boohoo Group, $9.99, 21 days, $14.99 → notes.
- Missguided: free over $67.49, $4.49 under, own label mixed with other labels, markdowns (19 of 20 rendered), 30 days at customer's cost, clearance and final sale not returnable → notes.
- Petal & Pup: $59–$149, Denzella $59, Avina Maxi $79 → price note. AU, USD store, 30 days refund/credit/exchange, $9.95 deduction, XXS–XXL / 0–16, free over $80 → notes.
- Selfie Leslie: Vernon, California, XXS–4XL on some styles, $59–$155, Saints & Secrets / Lioness / Angel Biba → notes and price note. Cheer Twist Halterneck Maxi Dress Chocolate $89 → product-images. Free over $100, 30 days credit or free exchange, $9.75 refund fee, 40%+ final sale → notes.
- Tiger Mist: $69–$139, all own label → price note. Bria Mini Dress Cream $89 → product-images. US store in Los Angeles → notes (meta.json). XXS–XL, free over $75, 30-day refund or credit, free label for credit, $10 for a refund → fields and notes.
- White Fox: most dresses under $100 (354 of 415), Daily Reminder Mini Dress $49.99, Sunset Siren Sequin Mini Dress Olivine $69.99 → this run's price entry and note. Indianapolis, tariffs included, free over $100 to 49 states, credit only, 30 days from order, return postage → notes. XXS–XL, XXL on 9 → this run's note.
- Beginning Boutique: Brisbane, hoco in its store description, homecoming tag on 378 → notes. Allie Blue $64.99, Time To Shine $74.99, $54.99–$199.99 → this run's price entry and note. Vista, CA, same-day dispatch before 3:30pm PDT, free over $100, credit or exchange 30 days, $13.99 fee → notes. US 0–18 → this run's note.
- Storets: in-house plus selected labels, DHL Express from South Korea, "Sophisticated Fun", duties paid, $14.99 US, free over $200, 14 days, customer pays return shipping, S–L → notes and fields. $34.90–$128.90 → price. Mya Satin Scarf Mini Dress $85.90 → product-images.
- Venus: Jacksonville FL 1982, swim roots, sizes 2–24, 1X/2X, petite option, from $39, 159 of 162 under $100, bebe High Slit Maxi Dress - Magenta $79, 30-day refunds, $9 fee, $9.95 ground → notes, price note, product-images. "RSVP-ready" → `known_for`.
- Oh Polly: designed in London, makes its own garments → notes. $50–$315, median $120 (most above $99.90), long styles from $55 → price note. Embellished Corset Mini Dress in Pearl $140 → product-images. XXS–XXL. Refunds 7, exchanges 14, credit 28 days → notes.
- Red Dress: "Timeless dresses" → meta. Athens GA, 2005, one shop → notes. MINKPINK, ASTR The Label → notes. $46–$378, own label $46–$186, Blooming in Watercolor $54 → price note. Free over $150 continental US, exchange or credit 30 days, S/M/L on all with XS or XL on some → notes.
- Closing: refunds (Princess Polly, Tiger Mist), sequin minis under $100 (White Fox from $69.99, Beginning Boutique from $64.99), Windsor stores, Boohoo US 26, Venus 24, PrettyLittleThing petite and tall → as above.
- FAQs: returns, sizing, ship-from LA, designed in LA and produced internationally, 4–7 business days, LA return address → `lucy-in-the-sky` notes (FAQ).

## Open items (see `human_check` in the page file)
- Hello Molly (4 sources), Lulus (4) and Meshki (2) refuse the bot UA. Unverified brand files were created for Hello Molly, Meshki and Stelly.
- Lucy's price range is a sample (164 listing tiles). Its US shipping cost isn't stated.
- Boohoo, Showpo, PrettyLittleThing and Missguided render without a price.
