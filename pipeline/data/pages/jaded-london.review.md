# Review: brands like Jaded London (step 5 copy)

Written 2026-10-29 by the step-5 pass. Author: Ash. Copy in `jaded-london.json` → `author`, `copy`.
Verified with `lib/gate.ts` (via `lib/pipeline.ts`, now = 2026-10-29) and a `STYLODEX_DATA=pipeline`
preview build: 7 picks render, title "7 Brands Like Jaded London", page `noindex`.
Gate verdict: `anchor missing: status, knownFor, sizeRange, shipsTo, returnsDays, imageUrl, price:jeans`.

## Picks written and skipped

| Rank | Pick | Written? | Why (checked against the brand file) |
|---|---|---|---|
| 1 | The Ragged Priest | Written | verified; jeans price GBP 70–80 with min/max/min_usd/max_usd; ships_to has US; 3 evidence items; reason 149 chars (≥40) |
| 2 | Edikted | **Skipped** | `prices` is empty: every one of 484 jeans had compare_at above price (50% off sitewide sale), so no regular price. Gate: "doesn't sell jeans" |
| 3 | mnml | Written | verified; USD 72–98; ships_to US; 1 evidence; reason ok |
| 4 | JNCO | Written | verified; USD 130–350; ships_to US; 1 evidence; reason ok |
| 5 | Manière De Voir | Written | verified; jeans row USD 155–200 (the `womenswear` row is ignored, category must be jeans); ships_to US; 1 evidence |
| 6 | Represent | Written | verified; USD 245–260; ships_to US; 1 evidence |
| 7 | Motel Rocks | Written | verified; USD 89–114; ships_to US; 1 evidence |
| 8 | Affliction | Written | verified; USD 99.95–125; ships_to US; 1 evidence |
| 9 | LIONESS | **Skipped** | ships_to is CA, GB, AU only: its "Delivery to" list doesn't name the US. Gate: "doesn't ship to the US" |

Gate run on the saved file: all 7 written picks return `[]` from `pickProblems`. Edikted → `["no body","doesn't sell jeans"]`, LIONESS → `["no body","doesn't ship to the US"]`.

## FAQ sources (Ahrefs)

One call: `keywords-explorer-matching-terms`, keywords "jaded london", country US, terms=questions, order volume desc, limit 30 (330 units).

| Used | Question (US volume) | source_query |
|---|---|---|
| Yes | Where can I buy Jaded London outfits? (200) | `where can i buy jaded london outfits?` |
| Yes | Where is Jaded London based? (40) | `where is jaded london based` |
| Yes | What is Jaded London? (50) | `what is jaded london` |

Skipped because no stored fact answers them: is jaded london fast fashion (250; no production facts), how long does it take to ship / ship to US / ship from (150, 90, 40; ships_to empty), is it legit / good quality / a good brand / designer (150, 70, 20, 40; no facts, would be opinion), does it run small (100; no size data), why so expensive / is it expensive (40, 10; no anchor price, and the stockist prices are explicitly "not stored"), restock, returns, has a store (no facts), who owns it (30; only founders stored, parent_company null, so "who founded" is all we could say, which doesn't answer the question).

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A brand-alternatives directory answering "brands like Jaded London" for US shoppers is the site's whole purpose. |
| G2 | PASS | The core of each entry is Stylodex's own store read on 2026-10-29 (regular-price counts and ranges, waists, thresholds, return terms, restocking fees, leg lengths), none of which is on discobrands.co or worthybornedit.com. Their one-line quotes are used only as attributed evidence. FAQ answers come from stored facts, not PAA text. |
| G3 | PASS | Basis stated ("when Stylodex checked on October 29, 2026"), and specifics a SERP reader can't get: Motel Rocks' 30/32/34 inch legs and returns counted from dispatch, Affliction's $7 restocking fee and parked affliction.com domain, JNCO's 20–50 inch openings. Caveat: no hands-on fit or fabric knowledge, by design. |
| G4 | PASS | No first-person wear/try/test claims anywhere. "We checked" is true (checked_at on every brand). Ash's bio is not added to. |
| G5 | PASS | `author: "Ash"`, byline links to /authors/ash with the bio from `lib/authors.ts`. Not YMYL, so no reviewer needed. |
| G6 | **BLOCKED (publish)** | Every sentence traces to a stored field (table below), but the anchor is `unverified`: "known for its jeans" rests on `category.why`, which is PROVISIONAL until a human confirms jadedldn.com (human_check rows 1 and 7). Also outside the copy, see "Template issues" below: the page's "How we pick" box says prices are in US dollars, which is false for The Ragged Priest (GBP). |
| G7 | PASS (N/A) | Not YMYL. |
| G8 | PASS | Title from `brandsLikeTitle`: "7 Brands Like Jaded London", the real count of rendered picks. No knownFor suffix because the anchor has none. Meta description ("7 verified alternatives… with jeans prices, sizes and US shipping for each") is delivered. |
| G9 | **BLOCKED (publish)** | The style-match intent is served, but the comparison half is missing: Jaded's own prices, sizes and shipping are unverified, so no pick can be labeled cheaper/similar/pricier. Needs the human_check on jadedldn.com. |
| G10 | **BLOCKED (publish)** | A reader comparing against Jaded still needs a second search for Jaded's own price, sizes and US shipping (its top question cluster in Ahrefs is shipping time). Can't be filled from stored facts. |
| G11 | PASS | Intro opens on what Jaded is known for, then the list's criteria and the self-contained stat sentence (prices $72–$350 on 2026-10-29). No history lesson, no filler paragraphs. |
| G12 | PASS | All prices dated 2026-10-29 in copy; the GBP conversion names its Oct 28 rate; checked within 90 days. |
| G13 | **FAIL** | Honest estimate is Medium (below). Not fixable in copy: needs the anchor verified and pick images. |
| G14 | PASS | Affiliate links via /go/ with "We may earn a commission" in the byline; selection criteria stated in the intro; no implied testing. |
| G15 | PASS | Read as a whole after edits; no em dashes, semicolons or Markdown (scanned: 0/0/0). Only page of its kind, so no sibling duplicate. Closers varied across bodies. |

**Counts:** PASS 11 (G1, G2, G3, G4, G5, G7, G8, G11, G12, G14, G15) · BLOCKED 3 (G6, G9, G10) · FAIL 1 (G13).

**Estimated Page Quality:** Medium. The strongest thing on the page is the dated, store-level data for every pick (regular-price counts and ranges, waists, thresholds, return terms), but the style match itself rests on two outside listicles' one-liners, there are no images on a style query, six of the seven picks have a single outside source, and the anchor side of the comparison is empty. Against Reddit threads with real shopper experience and listicles with images, that's typical-plus, not clearly better. That is a FAIL on G13.

**Estimated Needs Met (dominant intent):** Moderately Meets. What would move it most: verify jadedldn.com (price, sizes, US shipping) so every pick gets a cheaper/similar/pricier label against Jaded, then add `/img/` images.

## AI-voice scan

| Pattern (ai-voice-avoid) | Where found in draft | Fix |
|---|---|---|
| §3 rule of three | Intro: "match it on jeans and style, each is named…, and all of them ship to the US"; then "live, shipped to the US and sold regular-price jeans"; mnml: "designed…, made in limited quantities and sold direct" | Cut to two items each; US shipping folded into the stat sentence |
| §1 contrast ("rather than") | The Ragged Priest: "calls itself a grunge label rather than streetwear" | Replaced with the brand's own line: bills itself as "Grunge Clothing & Fashion." |
| §1 contrast ("more than") | Affliction: "on this list for its graphics more than its denim cuts" (also an unsupported inference) | "Affliction earns its place on style." |
| §5 anaphora across entries | "It suits you if…" closing four bodies; "discobrands.co picks it for…" opening five | Closers varied (Start here / It suits you / Go here / Shop it / Choose it / Try it first / Look here); list attribution varied |
| §40 "from X to Y" | JNCO: "leg openings from 20 to 50 inches" | "20–50 inch leg openings" (remaining regex hits are literal: "products from The Ragged Priest", "from dispatch") |
| §6 "and"-chaining | FAQ 3 draft had three clauses joined by "and" | Split into separate sentences |
| §45 circular writing | FAQ 3 repeated the intro's discobrands quote | Replaced with the Revolve denim page and the UO UK line |
| Em dashes / semicolons | none | 0 and 0 on final scan |
| §13, §16, §33, §34, §48 | none found ("significant", "deliberate", "really/just/simply", "may", "matters", "without…") | — |
| Smell Test | Each body is built on that brand's own numbers and terms; none would fit another entry unchanged | — |

Fact-accuracy fixes made in the same pass (not voice): removed "oldest brand here" for JNCO (founded_year null for 4 picks), "the other British brand" for Represent (The Ragged Priest and Motel Rocks have no hq_country), "pick for men's jeans" for Represent (only discobrands says "menswear"), "four sizes" for mnml, "made by its production team" for Motel Rocks (stored: "production team in Canggu"), "stockists lead with its jeans" in FAQ 3 (UO's stored listing was mostly tops), and "Jaded London sells through its own store" in FAQ 1 (unconfirmed).

## Fact trace

Brand files are `data/brands/{slug}.json`; page file is `data/pages/jaded-london.json`.

| Claim in copy | Source field |
|---|---|
| **Intro** | |
| Wikipedia: UK streetwear brand, founded 2013 | jaded-london `founded_year` 2013; `notes[1]` |
| known for its jeans | page `category.why` (PROVISIONAL) |
| discobrands.co quote "very baggy denim and cargos…going-out pieces" | page `category.why` |
| Dolls Kill jeans collection carried 18 of its styles | page `category.why`; `co_stocking` Dolls Kill row |
| seven brands; each named by an outside source | 7 picks passing `pickProblems`; each pick's `evidence` |
| live and shipping to the US, checked October 29, 2026 | each pick `status` verified, `ships_to` contains US, `checked_at` 2026-10-29 |
| regular-price jeans between $72 (mnml) and $350 (JNCO) | mnml `prices[jeans].min` 72; jnco `prices[jeans].max` 350 (TRP $93.01–$106.30 sits inside) |
| Jaded's own store blocked our checks; no labels | jaded-london `notes[0]`, `notes[5]`; `prices` []; picks `price_relation` null |
| **The Ragged Priest** | |
| strongest outside case | picks[0] `independent_sources` 3 (highest on page) |
| only pick named by both lists we could read | picks[0] `evidence` (discobrands + worthybornedit); the only two `serp` rows with `kept: true` are those pages; no other rendered pick has both |
| quote "statement jeans, distressed finishes and alternative Y2K styling" | picks[0] `evidence[0].note` |
| Dolls Kill: 18 Jaded jeans, 91 Ragged Priest products | picks[0] `evidence[2].note` |
| 8 regular-price jeans, £70–£80 | the-ragged-priest `prices[jeans]` min 70, max 80, item_count 8, currency GBP |
| 4 baggy, 4 flared by product name | `prices[jeans].note` |
| waists 24–38 | `prices[jeans].note`; `size_range` "denim W24–W38" |
| charges in pounds, about $93–$106 at Oct 28 rate | `notes[4]` (cart.js GBP); `min_usd` 93.01, `max_usd` 106.3, `fx_date` 2026-10-28 |
| "Grunge Clothing & Fashion" | `known_for`; `notes[0]` |
| **mnml** | |
| lowest starting price of the seven | mnml min 72 vs TRP 93.01, Motel 89, Affliction 99.95, JNCO 130, MDV 155, Represent 245 (USD) |
| 85 regular-price jeans, $72–$98, Oct 29 | mnml `prices[jeans]` |
| free over $50, lowest threshold here | `free_shipping_min_usd` 50 vs TRP 90, Motel 95, Represent 175, MDV 250 (JNCO, Affliction none) |
| baggy, flare and rave cuts | picks[2] `reason`; `prices[jeans].note` |
| discobrands associates baggy shapes with Jaded | page `category.why` |
| quote "baggy denim, cargos and washed streetwear fits for everyday wear" | picks[2] `evidence[0].note` |
| designed in a downtown LA studio, limited quantities | `notes[1]`; `production_model` |
| waists 28–42; TRP 24–38 | mnml `size_range`; the-ragged-priest `size_range` |
| 30-day returns; under $100 | `returns_days` 30; `prices[jeans].max` 98 |
| **JNCO** | |
| wide-leg jeans in Los Angeles since 1985 | `founded_year` 1985; `notes[0]` ("Los Angeles since 1985"); picks[3] `reason` |
| tagline "The Original Wide-Leg Jeans Since 1985" | `known_for` |
| quote "very wide-leg denim with a rave and skate attitude" | picks[3] `evidence[0].note` |
| leg volume the same list says drives Jaded's jeans | page `category.why` ("exaggerated leg volume that drives this label's jeans") |
| 62 regular-price women's jeans, $130–$350, waists 24–44 | jnco `prices[jeans]`; `size_range`; `notes[2]` |
| widest waist range on this page | 24–44 vs TRP 24–38, mnml 28–42, Represent 28–38, Motel 24–36, Affliction 24–34 (women's) |
| 20–50 inch leg openings (store filters) | `notes[2]` |
| men's jeans $130–$350 | `prices[jeans].note` |
| no free shipping; $10 flat, $25 AK/HI | `free_shipping_min_usd` null; `notes[1]` |
| returns close after 21 days | `returns_days` 21 |
| **Manière De Voir** | |
| "women's going-out pieces" in Jaded's look | page `category.why` |
| quotes "sculpted fashion silhouettes", "shape-first approach to women's going-out dressing" | picks[4] `evidence[0].note` |
| About: founded 2013; in-house team designs every piece | `founded_year` 2013; `notes[0]`; `production_model` |
| Wikipedia gives 2013 for Jaded | jaded-london `founded_year`; `notes[1]` |
| head office SoHo, New York; US store prices in dollars | `notes[0]`; `notes[1]` |
| 31 women's jeans, $155–$200, wide/straight/flared, none on sale | `prices[jeans]` (jeans row) and its `note` |
| sizes US 0–12 | `size_range` |
| free shipping at $250, highest bar on page | `free_shipping_min_usd` 250 (others 50–175) |
| 14-day returns; sale items e-gift card only | `returns_days` 14; `notes[2]` |
| **Represent** | |
| "a British luxury streetwear brand" | `notes[0]` (About page) |
| brothers George and Mike Heaton, Manchester, 2011 | `notes[0]`; `founded_year` 2011 |
| Wikipedia: Jade and Grant Goulden, siblings | jaded-london `notes[1]` |
| quotes "washed, oversized menswear", "faded finishes and roomy fits" | picks[5] `evidence[0].note` |
| highest starting price here | min 245 (next highest MDV 155) |
| 5 regular-price jeans $245–$260, R3 Baggy Jean, waists 28–38 | `prices[jeans]` and `note`; `size_range` |
| ships from inside the US, free over $175 | `notes[4]`; `free_shipping_min_usd` 175 |
| 14-day returns, $9 USPS return | `returns_days` 14; `notes[4]` |
| **Motel Rocks** | |
| 97 regular-price jeans $89–$114 on US store; 44 on sale | `prices[jeans]` and `note` (97 of 141); `website_url` us.motelrocks.com |
| biggest regular-price range of any pick | 97 vs mnml 85, JNCO 62, MDV 31, TRP 8, Represent 5, Affliction 5 |
| Roomy 43, Parallel 41, Flared 28 | `prices[jeans].note` |
| worthybornedit.com ranks it second; quote | picks[6] `evidence[0].note` ("#2") |
| designed in-house in London, production team in Canggu, Bali | `production_model` |
| waists 24–36; 30/32/34 inch legs only | `size_range`; `notes[1]`; `prices[jeans].note` |
| no petite or tall range | `has_petite` false, `has_tall` false |
| 30-day returns counted from dispatch; under $115 | `returns_days` 30; `notes[1]`; max 114 |
| **Affliction** | |
| quotes "tattoo-style graphics with a Y2K feel", "era-referencing statement styling" | picks[7] `evidence[0].note` |
| 5 regular-price women's jeans $99.95–$125, waists 24–34 | `prices[jeans]`; `size_range` |
| 6 regular-price men's styles $120–$138.95, waists 27–44 | `prices[jeans].note`; `size_range` |
| Wikipedia: Seal Beach, California; owned by Affliction Holdings LLC | `notes[2]`; `parent_company` |
| store is afflictionclothing.com; affliction.com parked | `website_url`; `notes[0]` |
| $8.95 flat US shipping, no free threshold | `notes[3]`; `free_shipping_min_usd` null |
| 30-day returns, $7 restocking fee | `returns_days` 30; `notes[4]` |
| prices in the middle of this list | $99.95–$125 vs page range $72–$350 |
| **FAQ** | |
| Revolve Jaded London Denim page, 14 denim items | page `category.why`; `co_stocking` Revolve row |
| Dolls Kill jeans collection, 18 Jaded jeans | page `category.why` |
| Urban Outfitters UK listed 72 Jaded products, Oct 28, 2026 | jaded-london `notes[2]`; `co_stocking` UO en-gb row ("first run could read it on 2026-10-28") |
| jadedldn.com blocked checks Oct 28 and 29 | jaded-london `notes[0]`, `notes[5]`; page `human_check[0]` |
| Wikipedia: based in the UK, no city | jaded-london `notes[1]`; `hq_country` GB |
| UO UK: UK-based, founded in East London around 2013 | jaded-london `notes[2]` |
| founded 2013 by siblings Jade and Grant Goulden; Wikipedia cites The Times, Vogue Business, Dazed | jaded-london `notes[1]` |
| UO UK: "Y2K realness with a rebellious edge" | jaded-london `notes[2]` (stockist copy, attributed as such) |

## Template issues (outside the copy, not changed here)

- `src/pages/[prefix]-like-[slug].astro` "How we pick" box says "Prices are in US dollars from each brand's own store", and `src/pages/how-we-pick.astro` item 3 says the same. The Ragged Priest's chip and table cell show £70–£80. One of those lines is wrong on this page. The copy itself says the store charges in pounds.
- `lib/format.ts` `priceRange` rounds to whole units, so Affliction's chip shows $100–$125 while the stored (and written) price is $99.95–$125.

## Publish conditions

1. Human check on jadedldn.com (page `human_check` rows 1–7): store live, jeans price, sizes, US shipping, returns, known_for, jeans as hero line. That clears G6/G9/G10, lets every pick get a price label (bodies will then need a line on cheaper/similar/pricier), and lets the anchor pass `missingAnchorFacts`.
2. `/img/` images for the anchor (gate) and ideally every pick (G13).
3. Re-assess G13 after 1 and 2. Also fix the "US dollars" template line.
