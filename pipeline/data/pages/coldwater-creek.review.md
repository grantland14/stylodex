# Review: stores like Coldwater Creek

Page: `/stores/coldwater-creek` · C = `dresses` (regular-price dresses on each store's own site) · kind `brand` · author Ash · checked 2026-10-29.

## Anchor status

- **Still trading, not defunct.** coldwatercreek.com is a live store (86 in-stock dresses in its product sitemap; catalogs on request). Wikipedia: Chapter 11 in April 2014, relaunched online and by catalog in November 2014, closed its 13 stores in 2020; Newtimes Group bought the name and stock in September 2020. Its privacy policy and terms name Coldwater International LLC (Fort Lauderdale) with affiliate Soft Surroundings. So `status: verified`, `us_stores: false`, ships to the US only. Closed-store rules don't apply; the copy says it has no stores.
- **C = dresses.** Own label (kind brand). Ahrefs top pages (US): /clothing/dresses is the top product-type page (est. 3,741 visits/mo) ahead of tunics (1,502) and sweaters (860).
- **Anchor price:** $119.95–$388 across 39 regular-price dresses, read from each product page (the grid is script-rendered; its search API was not used). 33 own-label $119.95–$159.95, 6 Komarov $298–$388. 47 marked-down dresses excluded.

## Gate result (lib/pipeline.ts → judgeBrandsLikePage, 2026-10-29)

- **Indexable: yes.** `reasons: []`. Renders **8 of 8** picks, `pickProblems = []` for each: White House Black Market, Talbots, Chico's, J.Jill, Shopbop, Lane Bryant, Loft, Cotton Traders.
- Title: "8 Stores Like Coldwater Creek for Comfortable Tunics and Pull-On Pants". known_for came from another run and fits the brand, not the dresses comparison: queued in `human_check`.
- price_relation `similar` for the five priced picks, each matching `computePriceRelation`; null for Lane Bryant, Loft, Cotton Traders (no readable regular dress price; render via sells_categories).
- `npm run lint:facts` ok, `npm test` 30 pass / 0 fail.

## Evidence (honest note)

Thin. Readable sources: plaintips (10 alternatives) and one Wardrobe Oxygen reader comment (Cotton Traders, L.L.Bean, Lands' End, Appleseed's). Every pick is single-source. storeslike.com and similist dropped as templated; MetaFilter, Knoji, Well-Trained Mind (2), Fodor's, Cruise Critic are behind Cloudflare (403); blowra has an expired certificate; modvisor 503. Not worked around. Ahrefs: 4 serp-overview, 1 top-pages, 1 matching-terms.

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A stores-like page for a stores-like search; the reader lost the stores, so in-person options matter. |
| G2 | PASS | Original data: regular-price dress ranges from each store, sizes, return windows and fees, shipping, US store counts. plaintips gives one-line blurbs with no prices or policies. |
| G3 | PASS | Each pick has a decision and a trade-off: Chico's own sizing, 30 vs 60-day returns, UK duties, size ceilings, free-shipping thresholds. |
| G4 | PASS | No experience claims. "We" only in the intro's ordering line. |
| G5 | PASS | Author Ash (lib/authors.ts). Not YMYL. |
| G6 | PASS | Every number traces to a stored field or note (trace below). |
| G7 | N/A | Not YMYL. |
| G8 | PASS (flag) | Count equals rendered picks. known_for wording is tunics/pants while the page compares dresses; accurate, flagged in human_check. |
| G9 | PASS | Dominant intent (where to shop instead now there are no stores) served: price-band matches first, then in-person, plus sizes and one overseas option; FAQs answer "is it closing / does it have stores". |
| G10 | PASS | Each pick has price or size, returns, shipping or stores. Anchor facts complete. |
| G11 | PASS | Intro 76 words, opens on the reader's moment. |
| G12 | PASS | Read 2026-10-29; "Last checked" carries the date. |
| G13 | PASS (estimate, marginal) | Better than plaintips/storeslike on specifics, but 8 single-source picks; 3 without a price. |
| G14 | PASS | No client, no implied testing. |
| G15 | PASS | Bodies 111–126 words, three paragraphs, each points to another pick where it fits better. |

**Estimated Page Quality:** High (low end): the only page on the SERP with real prices, sizes and return terms for each store. **Estimated Needs Met:** Highly Meets for "where do I shop now"; more sources and prices for Lane Bryant and Loft would make it stronger.

## Voice check (voice.md "What we never write")

- Process narration: none. Spreadsheet sentences: none as the point ("over 500 boutiques" carries "if you miss shopping in person"). Verdicts, invented experience, hype: none.
- No semicolons, dashes, colons in copy, bold or italics; no sentence over 30 words (script). A brand is "it".
- Moves: answer-first opener per pick; one useful thing each (Chico's 000–4 sizing, Shopbop price filter and drop-off window, Lane Bryant promo check, Cotton Traders duties); honest catch; cross-references between picks; use-case Best-for lines; How to choose by price, stores, sizes.

## AI-voice scan

- Fixed overclaims: "lace for occasions" → "the odd lace dress"; "Chico's and Loft are the ones with the most locations" (WHBM store count unknown) → "both have hundreds of stores"; "returning to a store is the cheaper route" (not stated for online orders) cut.
- Watched "The catch is" (one use) and "The trade-off is" (one use). No rule-of-three lists beyond facts, no colon reveals.

## Fact trace

- **Intro/FAQ:** stores closed 2020 (13), 2014 bankruptcy, Newtimes 2020 (Wikipedia note); US-only shipping (shipping note); Coldwater International LLC, Fort Lauderdale, Soft Surroundings affiliate (privacy/terms note); Plus 1X–3X = 16W–26W, misses XS–XL, petites (size chart note); $9.99 and up shipping (shipping note); own dresses $119.95–$159.95 (price note).
- **White House Black Market:** $140–$295, Faux Wrap Sheath Dress $150 (price note); "polished black and white... pops of color", Business Casual in title, 00–18, petite (notes); 60 days, $7 mail-return fee (notes).
- **Talbots:** 2–18, petite 0–16, plus 14W–24W; $99.50–$299; Polished Ponte Sheath $169–$189; Belted Wool Blend Shirtdress $219–$249; RSVP Paisley Lace; modern classic; 30 days, $9.95 label (talbots file).
- **Chico's:** 500+ US boutiques (about-us note); $109.50–$189.50, Ponte Godet Long-Sleeve Dress $129.50 (price note); 000–4 → US 0/XS to 20–22, petite 000P–4P, no plus chart; 60 days; full-price online returns to full-price boutiques (notes).
- **J.Jill:** XS–4X, petite, tall; 60 days, $8.95 label; free at $150 else $9.95; 200+ stores; $109–$149, Marled Mock-Neck $109, Faux-Suede Shirtdress $149 (j-jill file).
- **Shopbop:** Amazon group, many labels; $75–$2,590, Romera $166, Lyon Maxi $189 (price note); free US shipping no minimum; 30 days, free drop-off within 15 days, $10 after; 00–24 (notes).
- **Lane Bryant:** 10–40 (meta); 1904 (Knitwell, Wikipedia); 400+ US stores (Knitwell); 40% off promo on dresses page; rewards free standard shipping on $75 (notes).
- **Loft:** 00–18, XXS–XXL, petite/tall/curvy; 358 US stores; 30 days, $9.95 label; Knitwell family with Ann Taylor, Talbots, Chico's, Lane Bryant, WHBM; "everyday fashion for work and play" (loft notes, knitwellgroup.com). Coldwater tall only in select pants (size chart).
- **Cotton Traders:** British (Wikipedia, Altrincham); USD US store; US 4–28 (size chart); men's too (title); ships from UK, 7 working days, duties may apply; 60 days, $9.95 deducted (notes).
- **How to choose:** price bands and size ceilings above; Shopbop "widest choice" = 4,654 dress results vs single-label stores.
