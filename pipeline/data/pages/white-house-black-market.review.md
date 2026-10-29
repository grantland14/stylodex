# Review: stores like White House Black Market

Page: `/stores/white-house-black-market` · C = `dresses` (regular-price dresses on each store's own site) · kind `brand` · author Ash · checked 2026-10-29.

## Anchor status

- **Verified, live.** Brand file from today's ann-taylor run reused (dresses $140–$295 across 75 regular-price dresses, 00–18 and XXS–XL in regular and petite, 60-day returns, $8.95 US standard shipping). This run added `us_stores: true` (its own store page at The Woodlands Mall, TX, with nearby Houston and Kingwood boutiques) and `founded_year: 1985` (Wikipedia). `human_check` has nothing for the anchor.
- **C = dresses.** Own label; its meta lists "tailored dresses, tops, pants" and Dresses is a top nav item. Same C as the Ann Taylor, Talbots, Loft and Coldwater Creek pages, so the shared price rows apply.

## Gate result (lib/pipeline.ts → judgeBrandsLikePage, 2026-10-29)

- **Indexable: yes.** `reasons: []`. Renders **10 of 10** picks, `pickProblems = []` for each: J.Crew, Talbots, Chico's, Ann Taylor, Loft, Banana Republic, Vince, Old Navy, Nordstrom, boohoo.
- Title: "10 Stores Like White House Black Market for Polished Black and White Clothing" (one "for").
- price_relation: `similar` for J.Crew, Talbots, Chico's, Banana Republic; `pricier` for Vince ($298 > $295); `cheaper` for Old Navy ($59.99 < $140). Null for Ann Taylor, Loft, Nordstrom, boohoo (no regular dress price stored; render via sells_categories).
- `npm run lint:facts` ok, `npm test` 30 pass / 0 fail.

## Evidence (honest note)

Thin. No Ahrefs SERP held a readable editorial alternatives list: Reddit (3 threads), Facebook answers, MetaFilter (403), similist, CB Insights, and two general over-40 lists (busbeestyle, Wardrobe Oxygen) that never frame anything as a WHBM alternative. Two keywords returned no SERP rows. WebSearch found temufinds (signed, 2024, updated 2025, 12 stores) and viraltalky (2023, 13 stores); gentstylez 503, almostsimilar redirects to an unrelated domain. Five picks have two sources, five have one. No disco page for WHBM. Ahrefs: 4 serp-overview, 1 matching-terms.

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A stores-like page for a stores-like search, built around the reader's two reasons to leave: the size ceiling (18/XL, no tall or plus) and wanting more choice. |
| G2 | PASS | Original data: regular-price dress ranges per store, size systems, return windows and fees, free-shipping thresholds, store counts. The two source lists give generic blurbs with no prices or policies. |
| G3 | PASS | Each pick gives a decision point and a trade-off (30 vs 60-day returns, size-type pricing, Chico's own scale, Loft/Ann Taylor return rule, Vince's free-shipping floor, boohoo's $14.99 return fee). |
| G4 | PASS | No experience claims. "We" not used for testing anything. |
| G5 | PASS | Author Ash (lib/authors.ts). Not YMYL. |
| G6 | PASS | Every number traces to a stored field or note (trace below). |
| G7 | N/A | Not YMYL. |
| G8 | PASS | Title count equals rendered picks; known_for matches the anchor's own meta. |
| G9 | PASS | Dominant intent (where else to buy polished workwear dresses) served: price-band matches first, then sizes; FAQs answer owner, returns, plus sizes, comparable stores. |
| G10 | PASS | Each pick has price or sizes, returns, shipping or stores. Anchor facts complete. |
| G11 | PASS | Intro 77 words, opens on the reader's moment, no process. |
| G12 | PASS | Read 2026-10-29; "Last checked" carries the date. |
| G13 | PASS (estimate) | Clearly more specific than the ranking lists; held back by thin evidence and 4 unpriced picks. |
| G14 | PASS | No client, no implied testing, no affiliate bias in ordering (sources then price closeness). |
| G15 | PASS | Bodies 118–135 words, three paragraphs, answer-first, cross-references between picks. |

**Estimated Page Quality:** High (low end). **Estimated Needs Met:** Highly Meets for "stores like WHBM"; Ann Taylor and Loft prices and more sources would strengthen it.

## Voice check (voice.md "What we never write")

- Process narration: none (no dates, "we checked", "its site says"). Spreadsheet sentences: none as the point ("more than 400 US stores" carries "easy to try on in person"; "358 stores" carries reachability; "widest range on this list" carries why). Verdicts, invented experience, hype: none.
- No semicolons, em dashes, colons, bold or italics in copy; no sentence over 30 words (script). A brand is "it".
- Moves: answer-first opener per pick; one useful thing each (J.Crew slip range, Talbots size-type pricing, Chico's 000–4 scale, Ann Taylor Work/Suit dress split, Loft vs Ann Taylor store returns, Banana Republic shared checkout and long sizes, Vince free-shipping floor, Old Navy's Occasion line, Nordstrom no-deadline returns, boohoo's "discounts may not be based on former prices"); honest catch per pick; use-case Best-for lines; How to choose by budget then size.
- Sibling overlap: 4-gram check against all page files; two identical sentences (Talbots sizes vs coldwater-creek, Nordstrom shipping vs kohls) and eight close ones rewritten. Remaining overlaps are product names and size strings only.

## AI-voice scan

- Fixed: colon reveals (2) rewritten; "the detail that trips people up" (invented) cut; "covers the office and a wedding" (unsupported) → "a night out"; "every US order ships free" → "nearly everything" (Nordstrom says "almost anything"); Vince free shipping limited to contiguous US Ground; "online only" for boohoo (not stored) → "an online store"; "more than at the other picks" (no comparison data) cut.
- No rule-of-three lists outside fact strings; "the catch"/"falls short"/"cuts both ways" each used once.

## Fact trace

- **Intro:** 18/XL ceiling, regular and petite only (WHBM size note); Old Navy under $60 (old-navy price); Vince satin slips (vince price note).
- **J.Crew:** $148–$298, Parc $198, Gwyneth $148, Column slip $298 (price note); petite and tall (has_petite/has_tall); 30 days, $7.50 label (notes).
- **Talbots:** plus 14W–24W, petite 0–16, misses 2–18; $99.50–$299; per-size-type ranges; Split Neck A-Line $119–$139; Luxe Ponte Sheath $179 (price note); WHBM Knit Crepe Belted Sheath $170 (WHBM price note); 30 days, $9.95 (notes); 437 US store pages (sitemap note).
- **Chico's:** Knitwell sister (knitwellgroup note); $109.50–$189.50, Printed Long Sleeved Maxi $149.50, Travelers Classic $109.50 (price note); 000–4 = US 0–22, 000P–4P, no plus/tall chart; 60 days; full-price online returns to boutiques; 500+ boutiques (notes).
- **Ann Taylor:** Tailored Workwear, Knitwell, Work Dresses/Suit Dresses nav, petite/tall/curvy, free US standard shipping $150+, "200 stores and counting" (ann-taylor notes).
- **Loft:** 00–18, XXS–XXL, petite/tall/curvy; 358 US stores; ships CA/GB/AU; free shipping $99; online returns not accepted at Ann Taylor or Loft Outlet; 30 days receipted, $9.95 label (loft notes).
- **Banana Republic:** $148–$280, Cashmere Turtleneck Mini $280, Knit Wrap Midi $198, Wrap-Neck Midi $220 (price note); 0–20, petite 00–12, long 4–12; "cashmere, leather, and linen"; free shipping $50+ for Rewards (notes); shared bag with Old Navy, Gap, Athleta (old-navy shipping note).
- **Vince:** $298–$628 (24 regular), Satin V-Neck Slip $398, Ruched-Side Knit $298 (price note); LA atelier, "understated luxury"; free contiguous-US Ground from $250; 30-day full-price returns; XXS–XL / 00–16, no petite (vince notes).
- **Old Navy:** $34.99–$59.99, Fit & Flare Ponte Mini $39.99, The Occasion Long-Sleeve Tie-Front Maxi $59.99 (price note); 00–30 petite/tall; 30-day free returns; free shipping $50 for Rewards (free to join); sale_pattern frequent promotions.
- **Nordstrom:** hundreds of labels incl. Adrianna Papell, Eileen Fisher (talbots-run note); Petal & Pup Laurel $89, Adrianna Papell Foiled Trumpet Gown $295, HELSI $495 (earthbound/akira notes); free US shipping, no minimum; no time limit on returns; 00–28W petite and plus (notes).
- **boohoo:** GB; US 0–26, petite/plus/tall; $10.99, 6–8 business days, no extra tariff; 21 days, $14.99 per parcel; "Discounts may not be based on former prices" (boohoo notes).
- **FAQ:** Knitwell owns WHBM, Chico's, Talbots, Ann Taylor, Loft (knitwellgroup notes); 60 days, $7 mail deduction (WHBM note); sizes as above. Sources: matching-terms questions "who owns…", "what is … return policy", "does … have plus sizes"; PAA "What store is comparable to White House Black Market?".

## Brand files touched (via merge_brand.py, own patches only)

- white-house-black-market: us_stores, founded_year, 2 sources, 2 notes.
- vince: new, verified, dresses price ($298–$628).
- francescas, the-limited: new, unverified (423; TLS failure/503).
- eileen-fisher, theory: one note each (still blocked).
