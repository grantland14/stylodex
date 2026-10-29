# Self-review: stores like H&M (`stores/h-m`)

Author: Ash. Category: dresses. Checked 2026-10-29.

## Gate result (lib/gate.ts, via lib/pipeline.ts)

`npx tsx` script loading `pipelinePages()` and `judgeBrandsLikePage` (now = 2026-10-29):

- Title: "14 Stores Like H&M" (no `known_for` on the anchor, so no "for …" suffix)
- Renderable picks: **14 of 14**
- **Indexable: false**. Only reason: `anchor missing: status, knownFor, sizeRange, shipsTo, returnsDays, imageUrl, price:dresses`.
  H&M's US store returns 403 to WebFetch and to a plain StylodexBot request. Nothing was worked around.
  The fixes are in `human_check`. Once the anchor is verified with a dress price, every `price_relation`
  (null now) can be set.

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A "stores like X" directory page for US shoppers. It sits in Stylodex's purpose. |
| G2 | PASS | The original data is each pick's regular-price dress range, sizes, US shipping and return terms, read from the stores (14 brand files). The top results give none of this. The FAQ comes from Ahrefs questions and is answered from stored facts. |
| G3 | PASS | Concrete decisions per pick: Oak + Fort's 20%-off final-sale line, Storets' S/M and M/L sizing with duties paid, AE's markdowns vs list price, Afends' AU-to-US size mapping. |
| G4 | PASS | No first-person experience. "Our pick" and "we" appear only as opinion, with the fact next to it. |
| G5 | PASS | Author Ash (lib/authors.ts). Not YMYL. |
| G6 | PASS | Every number traces to a brand file or the page's `named_products` (trace below). |
| G7 | N/A | Not YMYL. |
| G8 | PASS | The title count equals the renderable picks (14). |
| G9 | PASS | Intent is "where else to shop instead of H&M". Answer-first opener per pick, then how to choose. |
| G10 | PASS (partial) | Budget, fit and sustainability routes are all covered. H&M's own prices are missing, so a reader can't compare against H&M directly. That gap is the anchor block. |
| G11 | PASS | Intro is 64 words. Picks open with the answer. |
| G12 | PASS | Prices are dated 2026-10-29 in the data. The copy has no dates except Everlane's May 2026 acquisition and Forever 21's 2025 store closures (facts, not freshness claims). |
| G13 | FAIL (honest) | Estimated Medium-to-High. The top lists (PureWow, 24/7 Wall St.) lead with Zara, Mango and Uniqlo. Those are the obvious answers, and they're missing here because their sites block reads. The picks lean towards smaller online brands. Fixing the human_check queue is what lifts this. |
| G14 | PASS | No implied testing. Affiliate links go through /go/ in the template. |
| G15 | PASS | Read as a whole. Picks cross-reference each other without repeating. |

- **Estimated Page Quality:** Medium-High. Strongest reason: real regular prices, sizes and return terms for every pick. What caps it: H&M itself, and its best-known rivals, couldn't be read.
- **Estimated Needs Met:** Moderately to Highly Meets. One thing would make it better: verifying Mango, Uniqlo, COS, & Other Stories and Zara, the alternatives readers expect.

## Voice check (pipeline/voice.md "What we never write")
- Process narration: none (no "we checked", no dates of checks, no "its About page says").
- Spreadsheet sentences: none. Counts appear only with a reason: Frank And Oak's two dresses (so it's a quick visit), and "most picks sit between $60 and $200" (a budget guide).
- Verdicts on brands: none. The Everlane/Shein line states a fact for ethics-led readers.
- Invented experience: none. Pixie Market's "runs small" is the brand's own FAQ advice, attributed to the brand.
- Hype: none.
- Contractions are used throughout. Brands are "it". No semicolons, no em dashes in the copy.
- Pick bodies are 110–138 words. Best-for lines are 7–10 words, lowercase, no full stop. How to choose is 106 words. FAQ answers are 28–29 words.

## AI-voice scan (wildcard-seo reference/ai-voice-avoid.md)
Found and fixed:
- Colon reveals (#24): Forever 21 "read the tag: …", Kotn "the refund window is short: …", Everlane "One thing to know …: …". All rewritten as plain sentences.
- Rhetorical setups (#22): AE "Here's the useful part.", Storets "Sizing is the thing to know.", Oak + Fort "The rule to remember…". Cut. One remains on purpose, Afends "The catch is the trip.", as the page's honest trade-off.
- Fake rhetorical question (#23): Frank And Oak "Want more choice…?". Rewritten.
- Rule of three (#3): intro, Frank And Oak, Toad&Co, J.Crew, closing, and a three-product Storets sentence. Cut to two.
- Binary contrast (#1): Frank And Oak "one good dress, not a rail…". Rewritten.
- Sentences over 30 words: the AE and Storets sentences were split.
- Smell test: each body names its brand's specific facts, so none of it could be moved to another page.

## Fact trace (copy → stored field)
- Intro: no numbers.
- **Forever 21** (`brands/forever-21.json`): $24.99 = `prices.dresses` min/max. Products and prices are in `named_products` (products.json feed). "LA label" comes from the homepage mission in `notes`. US stores closed in 2025 and the brand came back online: Wikipedia, in `notes`. "Most of the range carries a markdown" is the price note (92 of 103 marked down). Clearance and final sale can't be returned, and returns cost $9.99 within 30 days: `notes`, `returns_days`. XS–XXL plus a plus section: `size_range`. Free over $50, US only: `free_shipping_min_usd`, `ships_to`. Storets from $34.90: Storets `prices.dresses.min`.
- **Afends**: A$109.99–A$159.99 ≈ $77–$113 = `prices.dresses` (ECB 2026-10-28). Elodie A$109.99 ≈ $77 and Helena A$139.99 ≈ $98 come from `named_products` × 0.70327. Byron Bay and organic hemp: `notes`, `known_for`. XXXS–XXL and US 2–10: `size_range`. Free over $150, otherwise $17.50, 12+ business days: `notes`. 30-day refunds on full-price items only: `returns_days`, `sale_pattern`. Toad&Co 90 days: toad-co `returns_days`.
- **Kotn**: CA$118–CA$158 ≈ $84–$112 = `prices.dresses`. Ghina CA$118, Samira CA$128 ≈ $91 (× 0.71195): `named_products`. Designed in Canada, Egyptian cotton, Nile Delta: homepage meta in `notes`. Duties on US orders, free labels, 15 days for a refund and 30 for an exchange or credit: `notes`. XS–XL: `size_range`. Sale is final: `sale_pattern`. Everlane XXS–XXXL: everlane `size_range`.
- **Frank And Oak**: City Dress CA$159 ≈ $113 and Polo Sweater Dress CA$165 ≈ $117: `named_products`, `prices.dresses` (2 items). Natural fibers and dependable essentials: homepage meta in `notes`. Free return shipping to the US, 15 days for a label, sale-event purchases final: `notes`, `sale_pattern`. Madewell $118–$168: madewell `prices.dresses`.
- **Madewell**: $118–$168 = `prices.dresses`. Petite, Tall and Plus 14W–24W across dresses: `size_range` and the size-chart note. Rugby Polo $118 and Chrissy $138: `named_products` (dresses page). Known for denim: `known_for` "Jeans, Tees, Sweaters + More". J.Crew sister brand: `parent_company`. Outside labels at higher prices (LESET $650, Banjanan $400): dresses price note. $5 or $7 shipping unless Insider, 30-day returns, free exchange label: `notes`. J.Crew from $148: j-crew `prices.dresses.min`.
- **American Eagle**: list prices $59.95–$89.95, Cable Knit $74.95, AE77 $148, most of the range marked down: pick `price_note` and `named_products` (dresses page). 60-day returns, free over $75, online returns $5: `returns_days`, `free_shipping_min_usd`, `notes`. Toad&Co's 90 days is the only longer window. Forever 21 $24.99.
- **Storets**: $34.90–$128.90 = `prices.dresses`. Alena $34.90 and Luna $128.90: `named_products`. In-house designs, DHL Express from South Korea, pays US duties, from $14.99, free over $200: `notes`. S/M and M/L, stops at L: `size_range`. 14 days, customer pays postage, no direct exchanges: `returns_days`, `notes`.
- **Everlane**: $58–$198 = `prices.dresses`. Weekend Tee $58 and Cashmere Polo $198: `named_products`. Publishes material, labor and transport costs: `production_model` and its detail note. XXS–XXXL and 00–16: `size_range`. 30 days, $7 mail fee, free in-store: `notes`. Shein agreed to buy it in May 2026: `parent_company` (Wikipedia). Toad&Co is a B Corp: toad-co `certifications`.
- **Abercrombie & Fitch**: $70–$200 = `prices.dresses`. YPB minis at $70–$85 and the 100% Cotton Lace-Trim Slash Midi at $200: price note. Ohio and 1892: `notes`, `founded_year`. US and CA, free over $99: `ships_to`, `free_shipping_min_usd`. The page is dresses and jumpsuits: the source URL. Madewell has petite and tall: madewell `has_petite`, `has_tall`.
- **Oak + Fort**: $78–$168 = `prices.dresses`. Off Shoulder Open Back Mini $78 and Maxi With Tassel Slit $168: price note and `named_products`. Vancouver studio, woman founded and led, USD store: `notes`. Free over $100, otherwise $7.99: `notes`. 20% off or more is final, full price returnable in 21 days, customer pays postage: `sale_pattern`, `returns_days`, `notes`. XXS–XL and 0–12: `size_range`.
- **Pixie Market**: $82–$199 = `prices.dresses`. Plaid Lace Trim $82 and Attica Linen Gold Cuff $199 (title marked BESTSELLER): `named_products`. NYC, 2006, PM label and sister labels: `notes`. Runs small unless oversized: FAQ in `notes`. XS–L: `size_range`. 20 days, $8 label fee, free over $100, otherwise $7.95: `notes`. Everlane to XXXL.
- **Toad&Co** (new file): $92–$188 = `prices.dresses`. Rosemarie $92 and Alpineglo $188: `named_products`. California, 1996, B Corp, organic cotton and hemp: `notes`, `founded_year`, `certifications`, `materials`. Free over $150: `free_shipping_min_usd`. $7 refund fee, none on exchanges or credit, final sale not returnable: `notes`. XS–XL: `size_range`. Afends seersucker and maxi styles: afends price note.
- **J.Crew**: $148–$298 = `prices.dresses` (merged this run). Gwyneth $148 and Parc $198 in plaid, houndstooth and other versions: price note and `named_products`. Madewell sister brand at $118–$168. $7 standard shipping, free for Rewards members, 30 days with $7.50 off for the prepaid label: `notes`. Second priciest after Spell: by `prices.dresses.max`.
- **Spell**: $230–$399 = `prices.dresses`. Frances $230 and Viola Gown $330: `named_products`. Byron Bay, separate USD US store: `notes`. Free over $150, 30 days on full-price styles, sale is store credit only: `notes`, `sale_pattern`. XXS–3XL: `size_range`. Afends at about a third of the price: $77–$113 vs $230–$399.
- **How to choose**: every range above. "Under $40" covers Forever 21 ($24.99) and Storets' low end ($34.90).
- **FAQ**: Hennes & Mauritz and the first shop "Hennes" in 1947: h-m `parent_company`, Wikipedia note. Owner, and COS, & Other Stories, ARKET and Weekday as sister brands: hmgroup.com/about-us note. Västerås 1947, Stockholm HQ, Fifth Avenue 2000: Wikipedia note. Source queries: "what does h&m stand for" (1,400/mo), "who owns h&m" (250), "where is h&m from" (150), from one Ahrefs matching-terms call (questions, US).

## Sources
- SERP: 4 Ahrefs serp-overview calls (US). 7 editorial pages read. Popsugar couldn't be fetched. Reddit, Quora and social pages were dropped.
- Candidates: 48 (pool overlap: Gap, American Eagle, Zara, Mango, Pixie Market). 14 picks: 6 with 2 sources, 8 with 1.
- Rejected: 34, each with a reason in the page file.
