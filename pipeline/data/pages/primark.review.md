# Self-review: stores like Primark (`stores/primark`)

Author: Ash. Category: tops (women's tops and T-shirts). Checked 2026-10-29.

## Gate result (lib/gate.ts, via lib/pipeline.ts)

`npx tsx` script loading `pipelinePages()` and `judgeBrandsLikePage` (now = 2026-10-29):

- Title: "13 Stores Like Primark for Affordable Everyday Essentials"
- Renderable picks: **13 of 13** (no pick has a gate problem)
- **Indexable: false**. Only reason: `anchor missing: status, sizeRange, shipsTo, returnsDays, price:tops`.
  primark.com, corporate.primark.com and abf.co.uk (parent) all serve a "Challenge Validation" bot check to
  curl and WebFetch. Nothing was worked around. Status is `unverified`; the fixes are in `human_check`.
- Structural note for the coordinator: `missingBrandFacts` needs `shipsTo` on the anchor. If Primark US
  has no online delivery, the page stays non-indexable even after a human verifies it, unless the gate
  accepts `us_stores` for the anchor (a gate change with tests). Flagged in `human_check`.
- Every `price_relation` is null because there's no anchor price.
- `npm run lint:facts`: ok. `npm test`: 0 failures.

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A "stores like X" page for US shoppers. It fits Stylodex's purpose. |
| G2 | PASS | The original data is each pick's regular-price tops range, read from the stores today (10 new tops price rows), plus shipping, returns and size facts from the brand files. The ranking lists give none of this. The FAQ comes from Ahrefs questions and one People also ask question, answered from stored facts. |
| G3 | PASS | Concrete decisions per pick: Old Navy's app-only extra 20%, Gap returns not accepted at Old Navy despite the shared bag, Yes Friends' duty-paid $9.95 vs Honest Basics' €15 plus duties, Armedangels' $15 flat fee on a $38 tee, Boohoo's own small print on discounts. |
| G4 | PASS | No first-person experience. "We" and "our pick" appear only as opinion with the fact next to it. |
| G5 | PASS | Author Ash (lib/authors.ts). Not YMYL. |
| G6 | PASS | Every number traces to a brand file, the page's `named_products` or the Primark file (trace below). |
| G7 | N/A | Not YMYL. |
| G8 | PASS | Title count equals renderable picks (13). `known_for` "Affordable Everyday Essentials" comes from Primark US's president, quoted in FashionUnited. |
| G9 | PASS | Intent: where to buy Primark-style cheap basics in the US. Answer-first opener per pick, then How to choose. |
| G10 | PASS (partial) | Budget, in-person, organic and size routes are all covered. Primark's own prices are missing, so the reader can't compare against Primark directly. That's the anchor block. |
| G11 | PASS | Intro is 67 words. Each pick opens with the answer. |
| G12 | PASS | Prices are dated 2026-10-29 in the data. The copy's dates are facts (Forever 21's 2025 closures, Primark's 2015 US debut and planned 2027 spin-off), not freshness claims. |
| G13 | FAIL (honest) | Estimated Medium. There's no editorial list in the US top 10 for any of the four keywords, so the evidence is six lower-quality lists found by search (one is a knitwear manufacturer's blog). The most-named alternatives (H&M, TJ Maxx, Marshalls, Shein, Zara, ASOS) are missing because their sites block reads or no official source confirms they sell tops. The human_check queue is what lifts this. |
| G14 | PASS | No implied testing. Affiliate links go through /go/ in the template. |
| G15 | PASS | Read as a whole. Picks cross-reference each other (Target vs Missguided returns, Old Navy vs Gap, Yes Friends vs Honest Basics vs Armedangels, Boohoo vs PrettyLittleThing). Six-word shingles checked against every sibling page: one shared sentence (urban-outfitters) and the longer shared runs (charlotte-russe, old-navy, kohls, h-m, cider, windsor, rainbow, quince) were reworded. What remains is stock phrasing ("is the one to start with"). |

- **Estimated Page Quality:** Medium. Strongest reason: real regular-price tops ranges and US shipping and return terms for 9 of 13 picks. What caps it: Primark itself, and the best-known alternatives, couldn't be read, and the outside evidence is thin.
- **Estimated Needs Met:** Moderately Meets. The one thing that would make it better: Primark's own US tops prices, then H&M as a verified pick.

## Voice check (pipeline/voice.md "What we never write")
- Process narration: none. One draft line ("Its own website couldn't give us prices") was cut.
- Spreadsheet sentences: none. Counts appear only with a reason: Uniqlo's 86 US stores (trying on), JCPenney's 600+ against Primark's 47 (easier to reach), Nordstrom Rack's 40-day window.
- Verdicts on brands: none.
- Invented experience: none. Fit wording is the brand's own (Armedangels "relaxed and European").
- Hype: none.
- Contractions throughout. Brands are "it" (one "they" refers to tops). No semicolons, no em or en dashes in the copy.
- Pick bodies 110–126 words, 3 paragraphs each. Best-for lines 7–10 words, lowercase, no full stop. How to choose 116 words. FAQ answers 25–28 words.

## AI-voice scan (wildcard-seo reference/ai-voice-avoid.md)
Found and fixed:
- "From X to Y" (#40): the intro's "from Target's $8 tees to organic cotton labels". Rewritten.
- Binary contrasts (#1): "judge the price you pay, not the percentage", "a once-a-season order rather than a quick top-up", "the ceiling rather than what you'll usually pay". Rewritten.
- Rhetorical setups (#22): "The catch is returns.", "The store closures are the thing to know.", "Sizing is the useful part.", "Read the banners carefully.", "Sending things back is the expensive part.", "One thing catches people out.". Cut. One kept as the page's honest trade-off (Honest Basics, "Shipping is the catch.").
- Rule of three (#3): Target's three house labels, Boohoo's "petite, plus and tall", Uniqlo's three fabric lines, Armedangels' three materials. Cut to two.
- Repetition: "Returns ... Returns" (Target), "figure ... figure" (Nordstrom Rack), "600 stores" twice (JCPenney). Fixed.
- Smell test: each body names its brand's own facts, so none of it could move to another page.

## Fact trace (copy → stored field)
- **Intro**: "under 50 US stores" = `brands/primark.json` notes (47 per FashionUnited; 43 per Wikipedia, July 2026). "$8" = Target `prices.tops.min`.
- **Target** (`brands/target.json`): $8–$28 = `prices.tops`; A New Day $8, Wild Fable Flyaway Top $25 = `named_products`; house labels = tops price note; 90 days and 365 days with receipt = returns note; buy in store = `us_stores`.
- **Missguided**: $5.40–$10.70 = `prices.tops`; Fitted Crop Top $5.40 = `named_products`; other sellers' labels and markdowns = tops price note; $4.49 under $67.49 = shipping note / `free_shipping_min_usd`; 30 days at own cost, bodysuits not returnable = returns note.
- **Forever 21**: LA, 1984, US stores closed 2025, online relaunch = Wikipedia note; $9.98 Seamless Tank Bodysuit, $36.99 Striped Knit Cropped Halter Top = `named_products` / `prices.tops`; most marked down = tops price note (323 of 360); XXL plus section = `size_range`; free from $50 = `free_shipping_min_usd`; $9.99 returns, clearance/final sale = returns note.
- **Old Navy**: 49 states = store-locator note; Gap Inc., 1994 = `parent_company`, `founded_year`; $12.99 tank = `named_products`; most $19.99–$39.99 = tops price note; app 20% = tops price note; $50 rewards, free to join = shipping note; free 30-day returns by mail or store = returns note; shared bag = shipping note.
- **Uniqlo**: Crew Neck and Soft Ribbed T-Shirt = sells_categories note (this run); Fast Retailing, GU = Wikipedia note; Supima, AIRism = `materials`; men's tees $9.90–$34.90 = `prices.tees`; XL top size = `size_range`; 86 US stores = Fast Retailing note; free over $99 or pickup, 30 days, customer pays = shipping/returns note.
- **Yes Friends**: £12 (about $16) and £16 = `named_products`, `prices.tops.min_usd` 15.95; 65p = Our Story note; $9.95 duties included = delivery note; tees the biggest type = dresses price note (37 of 118).
- **Gap**: $29.95 and $19.95 = `named_products`; $89.95 corduroy/vegan suede = tops price note; free from $50 = `free_shipping_min_usd`; returns only at brand of purchase = returns FAQ note; shared bag = Old Navy shipping note; 46 states = store-locator note.
- **Armedangels** (new file): Cologne = imprint note; $38 LUALAA, $48 IDAARA = `named_products`; organic cotton, fair trade, Fair Wear Leader = FAQ note, `certifications`; $15 flat = shipping note; $53 = 38 + 15; relaxed European fit, 30 days at own cost = FAQ note; "less than half" = Yes Friends $15.95 vs $38.
- **Boohoo**: US 0–26, petite 5ft 3in, tall = size-guide note; Manchester = Wikipedia note; 70% off and the discount small print = dresses-page note; $10.99 no extra tariff = delivery note; 21 days, $14.99, 20% credit = returns note; PrettyLittleThing same terms = PLT returns note.
- **Honest Basics**: €12.90 (about $14), €14.90 (about $17) = `named_products`, ECB 2026-10-28; Berlin, "friendly prices" = About note; organic and recycled cotton = `materials`; €15 up to 1 kg, 3–6 weeks, duties = shipping note.
- **Nordstrom Rack**: most $19.97–$39.97, $14.97 and $22.97 tees, ALICE + OLIVIA $158.97 = tops price note / `named_products`; comparable value = price note; 40 days, Rack-store returns, $9.95 label, $89 free shipping = shipping/returns note.
- **JCPenney**: 600+ stores, national and private brands, Kemmerer 1902 = corporate-information note; Penneys name clash in the 1970s = `brands/primark.json` Wikipedia note (1976); Marilyn Monroe collection, exclusive, Off-the-Shoulder Top $44 = Oct 1 2026 release note; Liz Claiborne petite to plus = May 2026 release note; "ten times Primark's 47" = 600 / 47.
- **PrettyLittleThing**: IT-girl, Manchester, 2012, Kamani brothers, Boohoo Group = About note; 00–24, petite, maternity, tall 0–14 = size-guide note; $9.99, 21 days, $14.99, 10% credit = delivery/returns notes; Forever 21 free from $50 = F21 `free_shipping_min_usd`.
- **How to choose**: every claim repeats a body fact above ("both start under $17" = Honest Basics $14.36, Yes Friends $15.95).
- **FAQ**: Boston 2015 and 47 stores = Primark notes (Wikipedia, FashionUnited); Target $8 and Old Navy $12.99 = `prices.tops.min`; ABF and the spin-off by late 2027 = Primark notes; Dublin 1969, Penneys in Ireland = Primark notes.

## Evidence and method notes
- Ahrefs serp-overview, 4 calls (US): only "stores like primark" returned positions. Its top 10 is Quora, Reddit, Digital Spy, Facebook, TripAdvisor (all unreadable or off-topic), Birmingham Live (Lefties, no US), RetailWire (429) and a Jerusalem Post piece with no alternatives. The People also ask box gave one FAQ.
- WebSearch found the six kept lists. pedropauloexecutivecoaching.com was dropped as off-topic SEO filler that near-duplicates GrowthNavigate. Competitor-analysis and 2015 news pages were dropped as not shopper recommendations. No disco directory page exists for Primark (sitemap checked).
- Single-source picks: Honest Basics (Good On You), Nordstrom Rack and JCPenney (Flaunt Your Fashion), PrettyLittleThing (AZKNIT only; it leaves the page if AZKNIT is discounted).
