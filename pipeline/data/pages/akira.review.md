# Review: stores like Akira (`/stores/akira`)

Author: Ash. Category: dresses. 14 picks, 14 renderable. Checked 2026-10-29.

## Gate result
`judgeBrandsLikePage` via `lib/pipeline.ts` (tsx script, `now` 2026-10-29): **indexable: true**, reasons `[]`,
renderable 14 / 14, every pick's `pickProblems` empty. Title: "14 Stores Like Akira for Trending Clothing and Shoes".
`npm run lint:facts`: ok. `npm test`: 30 pass, 0 fail.

## Quality gate (G1–G15)
| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A "stores like Akira" searcher wants other places to buy the same going-out dresses; every pick sells dresses to US shoppers. |
| G2 | PASS | The ranking pages are bare lists (etechshout, plaintips, viraltalky) with no prices; this page carries full-price dress ranges read from each store's own feed, sizes, shipping lines and return terms, plus the Flying Tomato overlap between AMI Clubwear and Pink Ice. FAQ isn't PAA paraphrase. |
| G3 | PASS | Concrete numbers and trade-offs per pick (return fees, store-credit-only returns, duty-paid US prices, size ceilings vs Akira's 3X). No invented experience. |
| G4 | PASS | No first-person experience or credentials. "We" never claims to have worn or tested anything. |
| G5 | PASS | Author Ash, bio in `lib/authors.ts`. Not YMYL. |
| G6 | PASS | Every number traces to a stored field or note (trace below). Prices are regular price only. |
| G7 | N/A | Not YMYL. |
| G8 | PASS | Title count is the real renderable count (14); "Trending Clothing and Shoes" is Akira's own og:title wording. |
| G9 | PASS | Intro states what Akira is and what the list gives; each pick opens with the answer. |
| G10 | PASS | Price, sizes, shipping and returns per pick, plus a how-to-choose guide by budget, size, stores and refunds. |
| G11 | PASS | Intro 69 words; bodies 98–141 words (Fashion Nova 98, under the 110 target, rather than pad it); closing 107; no preamble or padding. |
| G12 | PASS | All prices and terms read 2026-10-29; the page's "Last checked" line carries the date. |
| G13 | PASS | Beats the top lists (2023–2024, no prices, two include closed stores like Tobi and a placeholder Nasty Gal) on accuracy and specifics. |
| G14 | PASS | No implied testing; affiliate links go through `/go/` per template. Criteria stated in the intro. |
| G15 | PASS | Read through whole; no duplicated intro or closing wording from sibling pages. |

**Estimated Page Quality:** High. Strongest reason: real full-price dress ranges and return terms for 14 live stores, where the ranking lists name closed or placeholder stores.
**Estimated Needs Met:** Highly Meets. Would be better with Lulus and ASOS priced (both have 2–3 sources but refuse fetches; human check).

## Voice check (`pipeline/voice.md` "What we never write")
- Process narration: none ("we checked", dates, "its About page says" absent). The intro's sort line describes order, not method.
- Spreadsheet sentences: none. Counts appear only as reasons ("nearly all of them cost under $100", "more than half of its dresses", "more than 350" stores as the reason to try in person).
- Verdicts on brands: none. Trade-offs are about returns, sizes or price.
- Invented experience: none. No fit or feel claims.
- Hype: none ("iconic", "must-have", "high quality" absent).
- No semicolons, em dashes, bold or italics in the copy. No sentence over 30 words (longest 29). Brands are "it".

## AI-voice scan (`reference/ai-voice-avoid.md`)
- #24 colon reveal: "Here's the catch: every return…" (Dolls Kill) rewritten as a plain sentence. "Look at the label names before you buy:" (Pink Ice) split into two sentences.
- #44/#47 formula: "The catch is…/Size is the catch/Sizes are the catch" appeared seven times; varied to "Returns cost you, though", "It falls short on size", "though" clauses. One "The catch is" kept (AMI Clubwear).
- #3 rule of three: closing lists cut to pairs ("AMI Clubwear and Dolls Kill… and Venus", "Windsor and Nordstrom"). One three-name sentence left in the closing budget line (SABO, For Love & Lemons, Revolve) because each names a different price tier.
- Unsupported claims cut: Venus "that's where it's strongest" and "rather than letters" (its feed is mostly XS–XL), Windsor "rather than a Saturday mini" (it sells minis), Fashion Nova "still leans hard into going-out dresses" and "Akira's 1X to 3X" (Fashion Nova's size range isn't stored), Revolve "twice Akira's window for swaps", Nordstrom "strongest on service", "there's often one near an Akira" and its jeans-derived size line, For Love & Lemons fabric sentence, Pink Lily "softer look".
- Smell test: every paragraph names a store-specific fact.

## Fact trace
Anchor (`brands/akira.json`): founded 2002 Chicago, over 40 stores in over 18 states, name = Erikka backwards (notes, About Us); dresses $29.90–$299.90, 733 items, median $89.90, 575 under $100 (prices.dresses); 3X top size = US 26–28 (size guide note); free shipping $75 (free_shipping_min_usd); 30 days from order date (returns_days, notes); priciest minis Stand Out Chain $249.90 / Starlet $219.90 (price note, feed).
- Venus: $39–$168, 159 of 162 under $100, Velvet Cowl Neck Midi Dress $79 (prices.dresses, feed); 1982 Jacksonville swim origin, sizes 2–24 (notes, About); petite option on 15 dresses (price note); vacation and wedding-guest edits (nav in notes); 30 days, $9 fee, Checkout+ (notes, returns); US only (ships_to, shipping note).
- SABO: $67.86–$416.52, Dimmi Dress $74.88, Zaco top end, median $124.02 (prices.dresses); Brisbane 2011, in-house design (notes, About); duties included, nothing on delivery, free over $175 (notes, shipping); 2XS–3XL = US 0–14 (sizing chart note); 14 days, $20 label (returns note).
- Pink Ice: $17.99–$89.99, Rachel Ribbed $17.99, Palm Beach Maxi $39.99, Love Stitch + Flying Tomato 39 of 68 (prices.dresses); LA, multi-label (notes, meta); free over $50, 30 days from ship date, refund to original tender (notes); dresses stop at Large (size_range, price note).
- AMI Clubwear: $11.50–$125.99, mostly Flying Tomato (prices.dresses note); Tempting Me Print Mini Dress $64 (cocktail-dresses feed, regular); LA (notes); S–3X (size_range); FREESHIP lower 48, 30 days store credit only, customer pays postage (notes).
- Dolls Kill: Widow and Club Exx house labels (notes); Club Exx Sensory Escapade Bodycon Dress $59, most dresses marked down (dresses note, this run); XXS–3X (size_range); free over $50 (free_shipping_min_usd); 2011 San Francisco (notes, Wikipedia); gift-card-only returns (notes).
- Windsor: 350+ stores, since 1957 special-occasion, homecoming and prom (notes); $14–$199.90 (prices.dresses); Naya Lace-Up High Slit Sequin Column Dress $79.90 (product-images.json); free $75, 30 days (fields); XXS–XL, US 15 (size_range).
- For Love & Lemons: Abby Mini Dress $239 (JSON-LD 23900.00 USD and 4 × $59.75, notes); maxi $689, Morrigan Gown on the dress page (notes); founders and 2010, "flattering cuts and exquisite attention to detail" (notes, About); XXS–XL (size_range); free over $250, 21 days from shipping, $10 US fee (notes).
- Princess Polly: $49–$119, 98% under $100 (prices.dresses); Celena Mini Dress $58 (product-images.json); Gold Coast 2010, US stores AZ/CA/MA/OH (notes); US 0–12, Curve 14–20 (size_range); free over $50, 30 days refund/exchange/gift card (notes).
- Pink Lily: $38–$78, Garden Gypsy Multi Floral Mini Dress $58, Maize and Tailoria (prices.dresses, feed); Bowling Green KY, Tori Gerbig, in-house designs (notes); minis 27, florals 25, sweater 5, tee 2 of 91 (feed count, this run); free over $79, 30 days, free store credit, $7.95 refund fee (notes); XS–XL (size_range).
- Tiger Mist: $69–$139, Midori $105, Cleo $79, Sasha $139, 95 of 117 minis (prices.dresses, feed); US store in USD, free over $75 (notes, meta); 30 days, free label for credit, $10 off refunds (notes); XXS–XL (size_range).
- Forever 21: $24.99 full price, Satin Lace Cutout Mini Dress (prices.dresses, product-images.json); LA-born, US stores closed 2025 (notes); XS–XXL + plus, free over $50, 30 days, $9.99 fee, final sale and clearance not returnable, 92 of 103 dresses marked down (fields, notes).
- Fashion Nova: Plus+Curve section, 2006 one LA store, Beverly Hills HQ, sale price vs Comp. Value, free over $75, ships to CA/GB/AU (notes, fields). Windsor and Princess Polly stores (us_stores).
- Revolve: LIONESS Original Sin Dress $69, LIONESS Stars Align Mini Dress $79, MAJORELLE Tracy Gown $328 (windsor-run note on its dresses page); free shipping and returns, 30 days refund / 60 exchange, XXS–4X US 00–24/26 (notes).
- Nordstrom: free US shipping no minimum, no time limit on returns, 350+ locations (notes); Petal & Pup Laurel A-Line $89, Baltic Børn Veronica Velvet Maxi $65, ASTR Abrianna $138, Adrianna Papell and Dress the Population (dresses note, this run).
- FAQ: "is akira legit" and "what does akira mean" (Ahrefs matching terms, questions) answered from the anchor's About notes and refund policy.

## Open items
See `human_check` in `akira.json`: Akira's GB shipping, Lulus/ASOS/GoJane fetch refusals, Wet Seal's unavailable store, Venus's conflicting free-shipping line, and the small Forever 21 price sample. New brand files from this run (venus, pink-ice, for-love-lemons, pink-lily, tobi, asos, akira) have no images yet; the coordinator runs `images.mjs` and `product-images.mjs`.
