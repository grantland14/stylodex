# Review: stores like Altar'd State (`/stores-like-altard-state`)

Author: Ash. Category: dresses. Checked 2026-10-29.

## Gate result (lib/pipeline.ts → judgeBrandsLikePage, run 2026-10-29)
- indexable: **false**
- reasons: `anchor missing: status, knownFor, sizeRange, shipsTo, returnsDays, price:dresses`
- renderable picks: **9 / 9** (red-dress, christy-dawn, faithfull-the-brand, cleobella, jens-pirate-booty, madewell, american-eagle, nordstrom, lucky-brand). Title: "9 Stores Like Altar'd State".
- Blocker is the anchor only: every altardstate.com URL returns HTTP 403 to the StylodexBot UA and to WebFetch. No workaround. See `human_check`.
- `npm run lint:facts`: ok.

## Sources
- Ahrefs: 4 `serp-overview` (only "stores like altard state" returned positions), 1 `site-explorer-top-pages` (category), 1 `keywords-explorer-matching-terms` (FAQ).
- Kept: disco directory list + premium sub-page + brand page (evidence only, never named), one Lemon8 creator post, and five press pieces (Mpls.St.Paul ×2, WCPO, Eastside, Ann Arbor Observer) plus 1808 Delaware. Dropped: MsDressly (store recommending itself), swiftwellnessmag (no alternatives), Facebook/TikTok (no readable content), Reddit (not fetched), Coresight/Owler (503).
- Every pick is single-source. The best-sourced candidates (Anthropologie 5, Free People 4, Lulus 3) all 403; Francesca's (3) is liquidating.

## G1–G15
| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A shopping list for people who like Altar'd State's boho dresses; inside Stylodex's purpose. |
| G2 | PASS | Regular-price dress ranges, size runs, shipping and return terms read from each store's own feed and policy pages; none appear on the ranking pages. FAQ answers come from stored facts, not PAA paraphrase. |
| G3 | PASS | Concrete specifics per pick: price bands, which label carries the cheap pieces (Red Dress own label), store-credit-only returns, restocking fees, 7-day windows, where it's made. |
| G4 | PASS | No first-person experience; nothing says we wore or tried anything. Author Ash, bio unchanged. |
| G5 | PASS | Author "Ash" set. Not YMYL. |
| G6 | PASS | Every number traces to a brand file (fact trace below). |
| G7 | N/A | Not YMYL. |
| G8 | PASS | Title "9 Stores Like Altar'd State" (no known_for suffix while the anchor is unverified); the body delivers nine stores. |
| G9 | PASS | Intent "stores like Altar'd State" served with stores selling boho dresses; two PAA questions answered. |
| G10 | PASS | Price, sizes, shipping and returns per pick, plus a how-to-choose guide. Anchor's own prices missing (BLOCKED by the anchor, not the copy). |
| G11 | PASS | Intro 57 words, picks start right after. |
| G12 | PASS | All prices and terms read 2026-10-29; the page carries a last-checked date. |
| G13 | PASS (with caveat) | Beats the SERP (a self-promoting store blog, an unsigned directory, social posts) on specifics. Caveat: thin evidence and three big names missing (blocked), so not Highest. |
| G14 | PASS | No implied testing; affiliate links via /go/ handled by the template. |
| G15 | PASS | 6-word shingle check against every sibling page: only product names overlap (AE77 Crinkle Lace Slip Cami Dress, ASTR Abrianna dress). Bodies written fresh. |

## Voice check (pipeline/voice.md "What we never write")
- Process narration: none (no "we checked", dates, sources named in copy; disco never named).
- Spreadsheet sentences: none. Counts appear only as reasons ("most of them cost less than $100").
- Verdicts on brands: none. Trade-offs are about attributes (returns, sizes, shipping).
- Invented experience: none. Hype words: none.
- Contractions throughout; brands are "it"; no semicolons, em dashes, bold or italics; no sentence over 28 words.

## AI-voice scan (ai-voice-avoid.md)
- Fixed: a three-part list in the intro (§3) cut to two; "Just know…" (§16) removed; "sits in the middle of the range", "Returns are the weak spot", "The catch is returns" and similar phrasing shared with sibling pages rewritten; one 31-word sentence split (§6).
- Kept on purpose: parentheses asides (human signal), one "So"-free paragraph opener rule respected.
- Smell test: every paragraph names a store, product or term specific to this page.

## Fact trace
- Intro: boho, gifts + home goods mix → altard-state notes (Mpls.St.Paul 2016, WAG 2019). "Size past XL" → christy-dawn/faithfull XXL, madewell 14W–24W, nordstrom plus.
- Red Dress: Athens GA, 2005 → red-dress founded_year/notes (About Us). <$100, $46–$378, own label $46–$186 → prices[dresses] note. Could Stay Here Forever… $62 → note. ASTR The Label, Anna Cate (max $378) → note. $150 free continental US → free_shipping_min_usd + note. 30 days exchange/store credit only → returns_days + note. Stops at L (XL on 31 of 529) → notes. Madewell 24W → madewell size_range.
- Christy Dawn: $198–$628, Dawn Dress $198 → prices note. Regenerative cotton, deadstock, Farm-to-Closet → materials + notes (FAQ, homepage). LA and Mexico → production_model. San Vicente Blvd store → notes. XS–XL, XXL on 78 of 124 → notes. 7 days, $12 fee → returns_days + refund note. $12 flat until $500 → free_shipping_min_usd + FAQ note. "A third of that" → $62 vs $198.
- Faithfull: Australian, ships from Riverside CA → hq_country, shipping note. Sant Roc $230, $180–$430 → prices note. USD store, free $300, $15 → meta.json + shipping note. Linen → 22 of 117 descriptions (prices note). B Corp → certifications. XS–XXL on all → notes. 7 days, 105% credit → refund note.
- Cleobella: handmade with artisans in Bali → production_model + Our Story. $238–$428, Meadow $248, Aphrodite $398 → prices note. Sunset Beach flagship → notes. $200 free (min dress $238) → free_shipping_min_usd. Big sale section (87 of 119 marked down), sale final → prices note + refund note. 16 days, $12 fee → returns_days + note. XS–XL → size_range.
- Jen's Pirate Booty: Westlake Village, kaftans → jens-pirate-booty notes + known_for. $110–$375, Countryside $110 → prices note. Senorita Bonita $285 → product-images.json. Free $200 → notes. 14 days, $10 restocking, buyer pays postage → notes. XS–L on most → notes.
- Madewell: plus 14W–24W, petite, tall, "availability varies by style" → notes. $118–$168 → prices[dresses]. J.Crew Group → parent_company. 30 days, free US exchange label → notes. Insider free shipping, $5/$7 → notes. 100+ countries → notes.
- American Eagle: marked down (29 of 30 tiles) and AE77 $148 full price → american-eagle notes. 60 days full refund, $5 online returns (free top tier/cardmembers), free from $75 → returns_days + notes. Founded 1977 → founded_year.
- Nordstrom: Baltic Born Veronica $65, Petal & Pup Laurel $89, ASTR Abrianna $138, 39,568 dresses → nordstrom notes. No return time limit, store or mail → notes. Free shipping, AK/HI/PR, no minimum → notes. Petite and plus → has_petite/has_plus.
- Lucky Brand: 1990, denim → founded_year + Our Story note. Border Print Tiered Maxi, Ruffle Peasant Mini, lace, print mix, all marked down → my dresses note. Free $85 → free_shipping_min_usd. US stores → us_stores. 35 waist → size_range.
- Closing: all from the bodies above.
- FAQ 1: pick facts. FAQ 2: Anthropologie/Free People most-compared (press tally in page notes), Francesca's liquidation → rejected[francescas] (Urban Milwaukee 2026-02-18). FAQ 3: Bible verses (Mpls.St.Paul 2016), gives back (Eastside 2018), faith-based mission (WCPO) → altard-state notes. FAQ 4: 2009, Knoxville, Walters and Mason, products → WAG 2019 note.

## Estimates
- **Estimated Page Quality:** Medium-to-High once the anchor is verified. Strongest reason: every pick carries real full-price dress ranges and return terms no ranking page has. Holding it back: single-source evidence and three of the most-named stores (Anthropologie, Free People, Lulus) missing because they refuse the bot.
- **Estimated Needs Met:** Moderately to Highly Meets. Adding Anthropologie and Free People after a human check, and Altar'd State's own dress range for price labels, would make it Highly Meets.

## Open items
- Anchor unverified (human_check): status, dresses price, sizes, shipping, returns, US stores, known_for.
- Nine picks, under the 10–15 target. Gap would pass the gate as a tenth but was left out (petite-typed, promo-only dresses; nothing specific to say). Anthropologie, Free People and Lulus would take it to 12 after a human check.
