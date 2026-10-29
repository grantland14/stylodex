# Review: brands like Quince (steps 2–5)

Written 2026-10-29. Author: Ash. Copy in `quince.json` → `author`, `copy`.
Checked with `lib/gate.ts` through `lib/pipeline.ts` (tsx script, now = 2026-10-29):

- Title: "9 Brands Like Quince for High-Quality Essentials at Low Prices"
- Rendered picks: everlane, naadam, fair-indigo, boden, buck-mason, toad-and-co, alex-mill, kowtow, jenni-kayne. `pickProblems` returns `[]` for all nine.
- Verdict: **not indexable**. Only reason: `anchor missing: imageUrl` (no `/img/` asset yet; the coordinator's media step).
- `npm test`: 27/27 pass. `npm run lint:facts`: ok.

## Category

`sweaters`. Quince's homepage leads its category tiles with Sweaters and Cashmere and puts "$50 Cashmere" at the top, and the editorial lists frame the comparison around cashmere. Prices compare women's sweaters (cardigans, turtlenecks and vests in; tees, sweatshirts, sweater dresses and accessories out).

Anchor range: $29.90–$1,000 over 401 listings. The $1,000 is a single 100% Vicuña Crewneck Sweater (the next is $249.90). With it in, every pick is `similar`. That is correct per `computePriceRelation`, but it's in `human_check` as a decision for Ash.

## Picks: 9 renderable of 9 (target 10–15, floor 6, not padded)

| Rank | Pick | Sources | Women's sweaters (USD, regular price) | Gate |
|---|---|---|---|---|
| 1 | Everlane | 3 (Guide of Fashion #1, The Commons #5, Elegance Edit #1) | 98–218, 187 items | [] |
| 2 | NAADAM | 2 (Guide of Fashion #7, Elegance Edit #3) | 78–528, 85 items | [] |
| 3 | Fair Indigo | 1 (Guide of Fashion #15) | 59.90–89.90, 9 items | [] |
| 4 | Boden (US store) | 1 (Elegance Edit #7) | 89–249, 103 items | [] |
| 5 | Buck Mason | 1 (Guide of Fashion #14) | 98–358, 15 items (collection page) | [] |
| 6 | Toad&Co | 1 (The Commons #1) | 118–240, 50 items | [] |
| 7 | Alex Mill | 1 (Guide of Fashion #10) | 148–398, 141 items | [] |
| 8 | Kowtow (US store) | 1 (The Commons #2) | 199–229, 4 items | [] |
| 9 | Jenni Kayne | 1 (Guide of Fashion #13) | 225–625, 124 items | [] |

Ranking is by sources, then by starting price against Quince's $29.90 (a midpoint is meaningless with the vicuña outlier).

Why nine. The three readable lists name 27 brands. Blocked or missing one gate fact: Reformation (3 sources, 403), Cuyana (no domestic return window, support site 403), UNIQLO (returns FAQ 403, category page renders 36 of 65), Sézane, COS and Aritzia (403), Marcella (policies 403). Too thin or no regular price: Organic Basics (one full-price sweater), M.M.LaFleur (all knitwear marked down), American Giant (none in stock at full price), Pact (no products rendered). Off-category: Italic (home goods now), ABLE, Girlfriend Collective, Aurate. UpWest is an empty store. Poshmark is a marketplace. 39 Apart Style pool brands have no outside source. Each is in `rejected`. The quickest route to 10+ is the human checks on Reformation, Cuyana and UNIQLO.

## FAQ sources (Ahrefs)

One call: `keywords-explorer-matching-terms`, "quince", US, terms=questions, volume desc, limit 40.

| Used | Question (US volume) | source_query |
|---|---|---|
| Yes | What is Quince clothing? (1,800) | `what is quince clothing` |
| Yes | Why is Quince so cheap? (400) | `why is quince so cheap` |
| Yes | Are Quince returns free? (700) | `are quince returns free` |
| Yes | Where is Quince located? (1,000) | `where is quince located` |

Skipped: "is quince legit / a good brand / good quality / ethical / fast fashion" (7,200 and below). These need a verdict that stored facts can't support. Also skipped: the quince fruit and quinceañera queries (other meanings), "who owns quince" (founders are stored, but ownership isn't), Black Friday and sales, "does quince have stores", "where is quince clothing made" and "is quince a chinese company" (nothing stored).

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | The page serves "brands like Quince" for US shoppers, which is what the site is for. |
| G2 | PASS | The substance is store-level data no ranking page has: regular-price sweater ranges from each store's own catalog, named products with prices, size runs, return windows and fees, and shipping thresholds. Outside lists supply only the candidate names. |
| G3 | PASS | The specifics are concrete: 12-gauge vs 12-gauge cashmere, the $12.75 NAADAM return fee, Kowtow's duties-paid US warehouse, Boden's petite and tall collections, GOTS on Fair Indigo's yarns but not finished pieces. |
| G4 | PASS | No wear, try or test claims. Nothing added to Ash's bio. |
| G5 | PASS | author "Ash", byline links to /authors/ash. Not YMYL. |
| G6 | PASS | Every sentence traces to a stored fact (table below). The anchor's known_for wording is taken from Quince's own homepage title. |
| G7 | PASS (N/A) | Not YMYL. |
| G8 | PASS | "9 Brands Like Quince…" is the true count. |
| G9 | PASS | The intent (where else to buy Quince-style essentials) is answered for each pick, with the comparison to Quince made on price, material, sizes and returns. |
| G10 | PASS (thin) | Covers cashmere, organic cotton, plus, petite/tall and walk-in stores. Reformation and UNIQLO, which readers will expect, are missing (blocked). |
| G11 | PASS | The intro opens on the reader's moment, then gives the price reality and sort order. There's no preamble. |
| G12 | PASS | All checks are dated 2026-10-29. The template's "Last checked" line carries the date. |
| G13 | PASS (borderline) | Estimate below. It beats the top lists on verified prices and terms, but has 9 entries against Guide of Fashion's 15. |
| G14 | PASS | Affiliate links go through /go/ with disclosure (template). No implied testing. |
| G15 | PASS | One British word appears inside a product name ("Keyhole Jumper"). No duplicate wording with sibling pages. |

## Voice check (`voice.md` "What we never write")

- No process narration: no "we checked", dates, "its About page says" or blocked-site mentions. Kowtow's "calls itself ethical from seed to garment" names the brand's own claim rather than asserting it.
- No count is the point of a sentence. The counts that remain carry a reason: "31 stores… if you'd rather try before you buy", and the multiple-of-Quince price comparisons.
- No verdicts, no invented experience ("feels", "runs small"), no hype words.
- Each pick opens answer-first with a named product and price, teaches one useful thing, names a trade-off and points to another pick.

## AI-voice scan (ai-voice-avoid.md)

- §7: no em dashes, no semicolons (scripted check).
- §8: no sentence over 30 words. One 31-word Boden sentence was split.
- §3: lists are mostly pairs. The intro list has four items because each one maps to a pick.
- §13/14: none of "significant", "deliberate", "seamless" or "elevate".
- Removed "Read the label with that in mind" (§38, meta) and "aren't stuck with one shape" (an unsupported size claim).
- The closing "if you'd rather buy one statement piece" was kept, because it names two specific picks.

## Fact trace

| Copy claim | Field / source |
|---|---|
| Quince $50 cashmere crew, $29.90 cotton-cashmere crew, 12-gauge, Grade A Mongolian | quince.prices.sweaters.note; quince.notes[3] |
| Quince free shipping, 365-day free returns, US + CA only, San Francisco, 2019 Last Brand → 2020 | quince.free_shipping_min_usd, returns_days, ships_to; notes[2], [4] |
| Quince factory-direct, no agents/wholesale/storefronts; essentials incl. bags, jewelry, furniture | quince.production_model; notes[0], [1] |
| Everlane publishes costs; Cashmere Slim Crew $148 recycled blend; $98–$218; XXS–XXL; 30 days, $7 label | everlane.notes; prices.sweaters (note incl. sizes); returns_days |
| NAADAM Mongolia; Original $98 100% 12-gauge; Basic $78–$88; to 3X; 14 days, $12.75, sale final; free from $175 | naadam.notes; prices.sweaters.note; returns_days; free_shipping_min_usd |
| Fair Indigo $59.90–$89.90; Boyfriend Cardigan $89.90 Tanguis, Lima; cooperatives; GOTS yarns not finished; free shipping; 60 days | fair-indigo.prices; notes; production_model; returns_days |
| Boden joyful color; Elsie $170 Good Cashmere Standard, machine washable; Camilla $89; Fair Isle/embroidered $160–$220; USD US store; 45 days; XS–XL, petite/tall | boden.notes; prices.sweaters.note + products.json items; returns_days; size_range |
| Buck Mason 365 days, free in store/$8 mail; $98–$358; Featherweight $188, Surplus $98, California Classic $348; XS–XXL; mostly USA, crew imported | buck-mason.notes; prices.sweaters.note; production_model; size_range |
| Toad&Co B Corp, California; Bianca $120 organic/recycled cotton; Peak Merino $148; $118–$240; 90 days, $7; free over $150; XS–XL | toad-and-co.notes; certifications; prices.sweaters.note; returns_days; free_shipping_min_usd |
| Alex Mill "Uniforms for Individuals"; argyle, Fair Isle, stripes; Nico $178; washed cashmere Marais $298; $148–$398; free over $200; 21 days; SoHo + UES stores; mostly to XL | alex-mill.known_for; notes; prices.sweaters.note + item titles |
| Kowtow certified organic cotton, "ethical from seed to garment", NZ; US warehouse, duties included; Composure $199, Keyhole $229 red polo collar, tie; XXS–XXL; free over $200; 14 days at own cost | kowtow.notes; prices.sweaters.note; size_range |
| Jenni Kayne best-selling Cocoon fit; Cashmere Cocoon $475; Cotton Cocoon $395 organic cotton + polyamide; Flynn $325; to 3X; 31 US stores; 21 days, $12 fee | jenni-kayne.prices.sweaters.note; notes |
| "about three / four / more than nine of Quince's $50 crews" | 148/50, 199/50, 475/50 from stored prices |
| FAQ answers | quince.notes[0]–[4] |

## Incident (shared scratchpad), please check

My first merge loop ran `merge_brand.py` over every `*.json` in the scratchpad `patches/` folder. Other page agents share that folder, so the loop also re-merged about 60 of their patch files (abercrombie-fitch … yes-friends). For patches that were already merged this was a no-op, because empty-only fill and source union change nothing. But each patch's `prices` entry replaced the same-category entry, and patches that weren't merged yet were applied early. The loop also created `pipeline/data/brands/ks2.json` (`{"size_range": "Tees XS–4XL"}`) from a stray patch. My attempt to delete it was refused, so **the coordinator should delete it and diff the other brand files.** My own later files are in a separate folder.

**Estimated Page Quality:** High (borderline). Its strongest asset is verified regular-price ranges, sizes and return terms for every pick, which no ranking list has.
**Estimated Needs Met:** Highly Meets for "brands like Quince" if Reformation and UNIQLO clear their human checks. Without them a reader may search again.
