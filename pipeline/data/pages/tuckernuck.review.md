# Review: stores like Tuckernuck

Page: `/stores/tuckernuck` · C = `dresses` (regular-price, in-stock dresses on each store's own dress collection) · kind `retailer` · author Ash · checked 2026-10-29.

## Kind and category

- **Kind retailer.** Tuckernuck sells its own labels (Tuckernuck, Tnuck Sport, Tnuck Beach and others, per its Designers page "Our Labels") next to outside designers (Ulla Johnson, La DoubleJ, Barbour, MOTHER). Its dresses feed has 83 labels in stock, and 346 of the 1,125 in-stock dresses are its own label.
- **C = dresses, not womens-clothing.** run-page.md picks the department a multi-brand store's searches are about. For Tuckernuck that's dresses: Ahrefs top pages put `/collections/ladies-dresses` first after the homepage (top keyword "tuckernuck dresses"), followed by sale, cocktail and day dresses. The SERP questions ask for "dupes for Tuckernuck dresses". Dresses is also the like-for-like item every pick sells. Using it also keeps this page off the `womens-clothing` price entries, which other pages use for jeans.

## Gate result (lib/pipeline.ts → judgeBrandsLikePage, 2026-10-29)

- **Indexable: yes.** `reasons: []`. Renders **13 of 13** picks, with `pickProblems = []` for each: Avara, J.Crew, Quince, Hill House Home, Jude Connally, Sail to Sable, Mahi Gold, Southern Tide, Draper James, Cabana Life, Petal & Pup, Mary Square, RIHOAS.
- Title: "13 Stores Like Tuckernuck for Colorful, Classic Dresses". `known_for` paraphrases the About page, so a human should confirm it (`human_check`).
- Anchor dresses $88–$4,195 (1,125 in stock, including designer gowns). Every price_relation is `similar` except RIHOAS (`cheaper`, max $66), and each one matches `computePriceRelation`. Anchor has no image yet (optional; coordinator's media step).
- Checks run: `npm run lint:facts` ok, `npm test` 0 fail.

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A "stores like" page for a stores-like search, inside the site's purpose. |
| G2 | PASS | The original data: regular-price, in-stock dress ranges read from each store's own feed, plus shipping thresholds, return windows and fees, and sizes. Pink Chickadee and TeriLyn Adams give one-line blurbs with no prices or policies. |
| G3 | PASS | Each pick gives a decision and a trade-off, such as return fees and windows, .98 final-sale prices, the $500 free-shipping line, UPF, plus sizes, delivery times, or buyer-paid returns. |
| G4 | PASS | No experience claims. "We" appears only in the intro's ordering line. Nothing says anything was tried on. |
| G5 | PASS | Author Ash (lib/authors.ts). Not YMYL. |
| G6 | PASS | Every number traces to a stored field or brand note (fact trace below). |
| G7 | N/A | Not YMYL. |
| G8 | PASS | The title count equals the rendered picks (13). The body is about dresses, matching the "Dresses" known_for. |
| G9 | PASS | Dominant intent (where else to get the Tuckernuck dress look) is served first by the one multi-label boutique and the own-label-priced brands. Budget, prints, plus-size and sun-protection readings are covered in "How to choose". |
| G10 | PASS | Each pick has cost, sizes, shipping and returns. Anchor facts are complete. |
| G11 | PASS | The intro is 58 words and opens on the reader's moment. No preamble. |
| G12 | PASS | Read 2026-10-29. The template's "Last checked" line carries the date. |
| G13 | PASS (estimate) | The two ranking pages name brands with a quote-line each. This page adds verified prices, return terms and sizes, and compares the picks with each other. |
| G14 | PASS | No client at #1 and no implied testing. Affiliate handling is in the template. |
| G15 | PASS | Bodies are 111–125 words, in three paragraphs each. Each points to another pick where it fits better. |

## Voice check (voice.md "What we never write")

- Process narration: none (no "we checked", dates, sources or "couldn't confirm").
- Spreadsheet sentences: none as the point. Rankings carry a reason ("the slowest here" with delivery days, "biggest dress range… so filter by length").
- Verdicts on brands: none. Invented experience: none (no fit or feel). Hype words: scanned, none.
- No semicolons, em/en dashes, bold or italics in copy. No sentence over 30 words (script). A brand is "it". "They" only refers to returns, items or founders.
- Moves: answer-first opener per pick. One useful thing each (Jude Cloth name, .98 rule, Checkout+, shop-by-shape at Mahi Gold, exchange to dodge fees). Honest catch per pick. Cross-references between picks. Use-case Best-for lines.

## AI-voice scan (ai-voice-avoid.md)

- Fixed #24 colon reveal: "Returns are the best part: 30 days…" (Southern Tide) became two sentences. A script check found no other ": " in copy.
- Fixed an overclaim: "so it's cheaper than Tuckernuck's own label" (Draper James, ranges overlap) became "mostly undercuts".
- Watched "The catch is" (one use, Avara) and "Sizes are the catch" (Quince). Different structures, accepted.

## Fact trace

- **Intro:** $298 is a common Tuckernuck own-label price point (tuckernuck price note). "under $70" is RIHOAS max $66.
- **Avara:** labels and range $68–$138, Dark Denim Midi (Flying Tomato) $88, median/common $88 and $98 (avara price note). Dallas boutique (store locator note). $5 shipping under $100, free over $100 (shipping note). "less than Tuckernuck's cheapest own-label dress": $98 + $5 < $118 (tuckernuck note). "about half the price": median $98 vs own-label median $213. 21 days, $6.95, sale final (refund note). XXS–XXXL (size_range). Quince free returns (quince notes).
- **J.Crew:** $148–$298, Parc $198, Gwyneth $148, Natasha $178 (j-crew dresses note, from another page's run, same day). 30 days, $7.50, $7 shipping, Rewards (j-crew notes).
- **Quince:** silk maxi slip $114.90, cotton cashmere from $59.90, Tencel Modal $60 (quince dresses note). Factory-direct (production_model). Free shipping and 365-day returns (notes). XS–XL, 1X–3X on some (size_range).
- **Hill House Home:** Tuckernuck stocks it (17 in Tuckernuck's feed, price note). Ellie Nap Dress $178, $128–$498, most $228–$298 (price note, common points). Bedding 2016 and Nap Dress (homepage meta note). XXXS–4XL (size_range). 15 days, $12 fee, Checkout+ $3.79 (refund note). $250 free shipping (homepage note).
- **Jude Connally:** American-made (homepage title note, production_model). $160–$298, Alexia in Jude Cloth $198 (price note). 82 of 137 in Jude Cloth, lightweight and brushed (notes). Free standard shipping (shipping note). 14 days, $8 label (refund note).
- **Sail to Sable:** "chic meets preppy" (homepage meta note). $168–$288, tunic flare $198, gingham shirt dress $188 (price note). XXS–XXXL vs Mahi Gold XS–XL (size_range; Mahi Gold XXS–XL, so "stops at XL" holds). $500 free shipping, 15-day refund, 30-day credit, SALE final, New Jersey warehouse (notes).
- **Mahi Gold:** beach and resort dresses, packable (homepage note). Made in the USA whenever possible (about note). Bimini $190, Charleston $195, Annie, $175–$278 (price note). Free over $150, 15 days, $8, free exchanges (notes).
- **Southern Tide:** 2006, polo shirt, Greenville SC (about note). Bailee Performance Dress $148, $138–$228, 14 dresses (price note). 30 days free, nine more than Tuckernuck's 21 (refund notes). Free over $150, US only, XS–XL (notes). Tnuck Sport and polo dresses (tuckernuck about note; Margaret Polo Dress in price note).
- **Draper James:** Reese Witherspoon, Southern-inspired (homepage note). Sizes (size_range). Layla Mini $158, $98–$188, most of the range on sale (price note: 95 of 117 marked down). .98 final, 20 days, $6.95, Happy Returns or store, Nashville, US only, free from $150 (notes). "mostly undercuts": median $158 vs own-label $213.
- **Cabana Life:** UPF 50+ (homepage note). Shift dresses most common, White Leaf $112, Delray $116, $74–$170, up to 3X (price note, size_range). Below Mahi Gold's $175 min. 30 days, free from $195 (notes).
- **Petal & Pup:** Australian, US store in USD (notes). $59–$149, most $89–$109, Avina Maxi $79, 1,042 dresses (price note). Free over $80, 3–6 business days, 30 days, $9.95 (notes). "younger and more trend-led" is from its meta "affordable, on trend, young women's fashion".
- **Mary Square:** Cameron $90, Carolina T-Shirt $55, under $135 (max $132) (price note). Women-owned, pajamas and gifts (notes). XS–XL, 1X–2X. Butner NC, 7–10 days, $7.95, +$5 credit, exchange or credit avoids return shipping fee (policy notes).
- **RIHOAS:** $30–$66, Blue Floral Ruched Slip Midi $39 (price note). "elegant with retro charm" (homepage title note). Free over $69, US 7–12 days, ships CA/GB/AU, 14 days, buyer pays return shipping, XS–XL (notes).
- **How to choose:** the ranges above. "$150 to $300" spans J.Crew $148–$298, Jude $160–$298, and most Hill House $228–$298.
- **FAQ:** what is (about and designers notes, Ahrefs top pages); stores (store locator note); based (about note, 2012, DC); returns (returns note). Source queries come from one Ahrefs matching-terms call (US, "tuckernuck", questions): what is tuckernuck (400), does tuckernuck have stores (150), where is tuckernuck based (60), what is tuckernuck return policy (30).

## Estimates

- **Estimated Page Quality:** High. Its strongest reason is that every pick has verified regular-price dress ranges, sizes and return terms that the two ranking lists don't have.
- **Estimated Needs Met (dominant intent):** Highly Meets. One thing would make it better: LOFT (two sources), if a human can read its store.

## Open items for Ash

1. Confirm `known_for` "Colorful, Classic Dresses" (title suffix).
2. Evidence is thin: two independent editorial pages, and 10 of 13 picks are single-source (Pink Chickadee). They're within the gate, but they're worth a look before the wave.
3. LOFT (2 sources) is unverified because of a redirect loop. Vineyard Vines, Talbots and Lands' End are live, but their dress grids are unreadable. L.L.Bean, Old Navy, Banana Republic and Gap weren't checked for dresses this run.
