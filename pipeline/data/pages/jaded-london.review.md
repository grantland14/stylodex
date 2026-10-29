# Review: brands like Jaded London (step 5 copy)

Written 2026-10-29 by the step-5 pass; revised the same day (edit pass 2: no outside sites' wording, no per-body dates, varied endings). Author: Ash. Copy in `jaded-london.json` → `author`, `copy`.
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
| G2 | PASS | No sentence uses discobrands.co, worthybornedit.com or Urban Outfitters wording (pass 2 removed every quote; scan: 0 hits for both domains and for each quoted phrase). Style is described only with each brand's own tagline, About text or product names, and the substance is Stylodex's own store read: regular-price counts and ranges, thresholds, return terms, fits, leg lengths, fees. The outside sources are shown separately by the template as evidence. FAQ answers come from stored facts, not PAA text. |
| G3 | PASS | The basis is stated once ("We checked every brand's own store…", dated in the intro), with specifics a SERP reader can't get: Motel Rocks' 30/32/34 inch legs and returns counted from dispatch, Affliction's $7 restocking fee and parked affliction.com domain, JNCO's 20–50 inch openings, Manière De Voir's e-gift-card-only sale refunds. Caveat: no hands-on fit or fabric knowledge, by design. |
| G4 | PASS | No first-person wear/try/test claims. "We checked" is true (checked_at on every brand). Ash's bio is not added to. |
| G5 | PASS | `author: "Ash"`, byline links to /authors/ash with the bio from `lib/authors.ts`. Not YMYL, so no reviewer needed. |
| G6 | **BLOCKED (publish)** | Every sentence traces to a stored field (table below), but the anchor is `unverified`: "best known for baggy jeans" rests on `category.why`, which is PROVISIONAL until a human confirms jadedldn.com (human_check rows 1 and 7). Also outside the copy (see "Template issues"): the "How we pick" box says prices are in US dollars, which is false for The Ragged Priest (GBP). |
| G7 | PASS (N/A) | Not YMYL. |
| G8 | PASS | Title from `brandsLikeTitle`: "7 Brands Like Jaded London", the real count of rendered picks. Meta description ("7 verified alternatives… with jeans prices, sizes and US shipping for each") is delivered. |
| G9 | **BLOCKED (publish)** | The style-match intent is served, but the comparison half is missing: Jaded's own prices, sizes and shipping are unverified, so no pick can be labeled cheaper/similar/pricier. Needs the human_check on jadedldn.com. |
| G10 | **BLOCKED (publish)** | A reader comparing against Jaded still needs a second search for Jaded's own price, sizes and US shipping (its biggest question cluster in Ahrefs is shipping time). Can't be filled from stored facts. |
| G11 | PASS | Intro opens on what Jaded is known for (attributed), then what the list matches on, what was checked and the self-contained stat sentence ($72–$350 on 2026-10-29). Bodies open on each brand's own positioning or its strongest number. No filler. |
| G12 | PASS | One "as of" date for all prices, in the intro, plus the template's "Last checked October 29, 2026". The GBP conversion says it's at the exchange rate on the day we checked. All checks within 90 days. |
| G13 | **FAIL** | Honest estimate is still Medium (below). Copy can't fix it. It needs the anchor verified and pick images. |
| G14 | PASS | Affiliate links via /go/ with "We may earn a commission" in the byline. Selection criteria stated in the intro. No implied testing. |
| G15 | PASS | Read as a whole after pass 2: no em dashes, semicolons or Markdown (0/0/0). Last sentences now differ in form (a stockist fact, a waist comparison, a brand trait, buying advice, a return cost, a return-clock note, a domain warning) and none follows the "X if you want" pattern. Only page of its kind, so no sibling duplicate. |

**Counts:** PASS 11 (G1, G2, G3, G4, G5, G7, G8, G11, G12, G14, G15) · BLOCKED 3 (G6, G9, G10) · FAIL 1 (G13).

**Estimated Page Quality:** Medium. The strongest thing on the page is the store-level data for every pick (regular-price counts and ranges, fits, thresholds, return terms), now in Stylodex's own words. But the reason each brand is "like Jaded" now shows only as an evidence line, with no images on a style query, and six of the seven picks have one outside source each. The anchor side of the comparison is empty. Against Reddit threads with real shopper experience and listicles with images, that's typical-plus, not clearly better. That is a FAIL on G13.

**Estimated Needs Met (dominant intent):** Moderately Meets. What would move it most: verify jadedldn.com (price, sizes, US shipping) so every pick gets a cheaper/similar/pricier label against Jaded, then add `/img/` images.

## AI-voice scan

Pass 1 (first draft):

| Pattern (ai-voice-avoid) | Where found | Fix |
|---|---|---|
| §3 rule of three | Intro list of checks, mnml "designed…, made… and sold direct" | Cut to two items, or folded into another sentence |
| §1 contrast ("rather than", "more than") | The Ragged Priest "a grunge label rather than streetwear", Affliction "graphics more than its denim cuts" | Replaced with the brand's own line, or cut |
| §40 "from X to Y" | JNCO "from 20 to 50 inches" | "20–50 inches" (remaining regex hits are literal: "from dispatch") |
| §6 "and"-chaining, §45 circular | FAQ 3 | Split, and the repeated quote removed |

Pass 2 (coordinator edit):

| Pattern | Where found | Fix |
|---|---|---|
| §5 anaphora / §47 every section ends the same | All seven bodies ended on "X if you want…" (Start here / It suits you / Go here / Shop it / Choose it / Try it first / Look here) | Cut five of them. Kept two who-it-suits ideas, folded in or phrased differently: Manière De Voir's sale advice ("so buy anything discounted in a size you're sure of"), Motel Rocks' "check the inseam before the waist" |
| §27/G2: borrowed wording | 12 quoted phrases from discobrands.co / worthybornedit.com, 1 from Urban Outfitters ("Y2K realness…") | All removed. Only brand-own text remains in quotes: the six brands' taglines/About lines and the search phrase "brands like Jaded London" |
| Date repetition | "On October 29" in five bodies, "October 28 exchange rate" | Removed from bodies. One date stays in the intro's stat sentence. The GBP line says "at the exchange rate on the day we checked" |
| Weak link as a reason | Represent's sibling-founder parallel with Jaded | Cut |
| Overstatement found while rewriting | JNCO "a week sooner than most picks", mnml "one of only two picks past a 38" (Affliction men's goes to 44), intro "the lists we read center on its denim" (only discobrands' title says denim), Represent "the one pick that offers" a luxury baggy jean | Rewritten to exact comparisons: "against 28–30 days at four of the other six picks", "past the 38 where The Ragged Priest and Represent stop", "one … list is titled for its baggy denim", the closing claim cut |
| §13, §16, §33, §34, §48 | none ("significant", "deliberate", "really/just/simply", "may", "matters", "without…") | — |
| Smell Test | Each body is built on that brand's own numbers and terms. None would fit another entry unchanged | — |

## Fact trace

Brand files are `data/brands/{slug}.json`; page file is `data/pages/jaded-london.json`.

| Claim in copy | Source field |
|---|---|
| **Intro** | |
| Wikipedia: UK streetwear brand, founded 2013 | jaded-london `founded_year` 2013; `notes[1]` |
| best known for baggy jeans | page `category.why` (PROVISIONAL) |
| one "brands like Jaded London" list is titled for its baggy denim | page `category.why` (discobrands title "…for Baggy Denim and Y2K"); `serp` kept row note |
| Revolve stocks it on a dedicated denim page | page `category.why`; `co_stocking` Revolve row |
| seven brands; each recommended alongside Jaded by an outside source | 7 picks passing `pickProblems`; each pick's `evidence` |
| checked each store for live jeans range, regular prices, sizes, US shipping, returns | each pick `status` verified, `prices[jeans]`, `size_range`, `ships_to` contains US, `returns_days`; `checked_at` 2026-10-29 |
| On October 29, 2026, regular-price jeans between $72 (mnml) and $350 (JNCO) | mnml `prices[jeans].min` 72; jnco `prices[jeans].max` 350; `checked_at` 2026-10-29 (TRP's $93.01–$106.30 sits inside) |
| Jaded's own store blocked our checks; no more/less label | jaded-london `notes[0]`, `notes[5]`; `prices` []; picks `price_relation` null |
| **The Ragged Priest** | |
| bills itself as "Grunge Clothing & Fashion" | `known_for`; `notes[0]` ("Official Online Store \| Grunge Clothing & Fashion") |
| 8 regular-price jeans, £70–£80 | `prices[jeans]` min 70, max 80, item_count 8, currency GBP |
| 4 baggy, 4 flared by product name | `prices[jeans].note` |
| charges in pounds, about $93–$106 at the day's exchange rate | `notes[4]` (cart.js GBP); `min_usd` 93.01, `max_usd` 106.3, `fx_date` 2026-10-28 (ECB rate in use on the 2026-10-29 check) |
| free over $90; 28-day returns | `free_shipping_min_usd` 90; `returns_days` 28 |
| only pick with a stockist in common with Jaded on record; Dolls Kill collection carries Jaded's jeans and 91 Ragged Priest products | picks[0] `evidence[2]` (the only `co_stocked` evidence among the 7 rendered picks) |
| **mnml** | |
| lowest starting price on the page | min 72 vs Motel 89, TRP 93.01, Affliction 99.95, JNCO 130, MDV 155, Represent 245 (USD) |
| lowest free-shipping bar | `free_shipping_min_usd` 50 vs TRP 90, Motel 95, Represent 175, MDV 250 (JNCO, Affliction none) |
| 85 regular-price jeans, $72–$98 | `prices[jeans]` |
| homepage title "Modern Streetwear - mnml Wardrobe Essentials" | `notes[0]` |
| product names lean baggy, plus flare, skinny and rave styles | `prices[jeans].note` (titles: 78 baggy, 56 flare, 41 skinny, 27 rave) |
| designed in a downtown LA studio, limited quantities | `notes[1]`; `production_model` |
| 30-day returns | `returns_days` 30 |
| waists 28–42, past the 38 where TRP and Represent stop | mnml `size_range`; the-ragged-priest `size_range` (W24–W38); represent `size_range` (W28–W38) |
| **JNCO** | |
| tagline "The Original Wide-Leg Jeans Since 1985"; made in LA since 1985 | `known_for`; `founded_year` 1985; `notes[0]` ("Los Angeles since 1985") |
| 62 regular-price women's jeans, $130–$350, waists 24–44 | `prices[jeans]`; `size_range`; `notes[2]` |
| widest waist range on this page | 24–44 (20 in) vs mnml 28–42, Affliction men's 27–44, TRP 24–38, Represent 28–38, Motel 24–36 |
| men's jeans at the same $130–$350 | `prices[jeans].note` |
| no free shipping; $10 flat, $25 AK/HI | `free_shipping_min_usd` null; `notes[1]` |
| returns close after 21 days, against 28–30 at four of the other six | `returns_days` 21 vs TRP 28, mnml 30, Motel 30, Affliction 30 (MDV, Represent 14) |
| leg openings of 20–50 inches (store filters) | `notes[2]` |
| **Manière De Voir** | |
| About: "bridge the gap between high fashion and the high street" | `notes[0]`; `known_for` |
| 31 women's jeans, $155–$200, wide/straight/flared, US 0–12 | `prices[jeans]` and `note`; `size_range` |
| Reece Wabara, founder and CEO, 2013; in-house team designs sketch to sample | `notes[0]`; `founded_year`; `production_model` |
| head office SoHo, New York | `notes[0]` |
| free over $250, highest bar on the page | `free_shipping_min_usd` 250 (others 50–175) |
| 14-day returns; sale items e-gift card only | `returns_days` 14; `notes[2]` |
| **Represent** | |
| "a British luxury streetwear brand" | `notes[0]` (About page) |
| highest starting price here | min 245 (next highest MDV 155) |
| 5 regular-price jeans $245–$260: R3 Baggy Jean, Heaton Jean, R5 Curve Jean; waists 28–38 | `prices[jeans]` and `note`; `size_range` |
| brothers George and Mike Heaton, Manchester, 2011; flagships London, Manchester, LA | `notes[0]`; `founded_year` 2011 |
| ships from inside the US, free over $175 | `notes[4]`; `free_shipping_min_usd` 175 |
| US return $9 by USPS, within 14 days | `notes[4]`; `returns_days` 14 |
| **Motel Rocks** | |
| describes itself as "Vintage & Printed Women's Fashion" | `known_for`; `notes[0]` |
| biggest regular-price jeans range of any pick: 97, $89–$114, US store | `prices[jeans]` (97 vs mnml 85, JNCO 62, MDV 31, TRP 8, Represent 5, Affliction 5); `website_url` us.motelrocks.com |
| Roomy 43, Parallel 41, Flared 28 | `prices[jeans].note` |
| designed in-house in London, production team in Canggu, Bali | `production_model` |
| every jean in a 30, 32 or 34 inch leg | `notes[1]`; `prices[jeans].note` (L30–L34) |
| no petite or tall range | `has_petite` false, `has_tall` false |
| free over $95 | `free_shipping_min_usd` 95 |
| 30-day returns counted from dispatch | `returns_days` 30; `notes[1]` |
| **Affliction** | |
| homepage title "Affliction Clothing – Live Fast"; no other self-description | `notes[1]`; `known_for` null |
| 5 regular-price women's jeans $99.95–$125, waists 24–34 | `prices[jeans]`; `size_range` |
| 6 regular-price men's styles $120–$138.95, waists 27–44 | `prices[jeans].note`; `size_range` |
| Wikipedia: Seal Beach, California; owned by Affliction Holdings LLC | `notes[2]`; `parent_company` |
| $8.95 flat US shipping, no free threshold | `notes[3]`; `free_shipping_min_usd` null |
| 30-day returns, $7 restocking fee | `returns_days` 30; `notes[4]` |
| afflictionclothing.com; affliction.com is parked | `website_url`; `notes[0]` |
| **FAQ** | |
| Revolve Jaded London Denim page, 14 denim items | page `category.why`; `co_stocking` Revolve row |
| Dolls Kill jeans collection, 18 Jaded jeans | page `category.why` |
| Urban Outfitters UK listed 72 Jaded products, Oct 28, 2026 | jaded-london `notes[2]`; `co_stocking` UO en-gb row ("first run could read it on 2026-10-28") |
| jadedldn.com blocked checks Oct 28 and 29 | jaded-london `notes[0]`, `notes[5]`; page `human_check[0]` |
| Wikipedia: based in the UK, no city | jaded-london `notes[1]`; `hq_country` GB |
| UO UK: UK-based, founded in East London around 2013 (paraphrased, attributed, not quoted) | jaded-london `notes[2]` |
| founded 2013 by siblings Jade and Grant Goulden; Wikipedia cites The Times, Vogue Business, Dazed | jaded-london `notes[1]` |
| stockists sell it as a denim brand | page `category.why` ("Retailers stock it as a jeans brand") |

## Template issues (outside the copy, not changed here)

- `src/pages/[prefix]-like-[slug].astro` "How we pick" box says "Prices are in US dollars from each brand's own store", and `src/pages/how-we-pick.astro` item 3 says the same. The Ragged Priest's chip and table cell show £70–£80, so that line is wrong on this page. The copy itself says the store charges in pounds.
- `lib/format.ts` `priceRange` rounds to whole units, so Affliction's chip shows $100–$125 while the stored (and written) price is $99.95–$125.

## Publish conditions

1. Human check on jadedldn.com (page `human_check` rows 1–7): store live, jeans price, sizes, US shipping, returns, known_for, jeans as hero line. That clears G6/G9/G10 and lets every pick get a price label (the bodies will then need a line on cheaper/similar/pricier). It also lets the anchor pass `missingAnchorFacts`.
2. `/img/` images for the anchor (gate) and ideally every pick (G13).
3. Re-assess G13 after 1 and 2. Also fix the "US dollars" template line.


## Revision 2026-10-29 (coordinator, after Ash's feedback)
Intro, all bodies and FAQ answers rewritten to remove process narration ("we checked", dates,
"X describes it as", Wikipedia/About-page attributions, what we couldn't verify). No new facts:
every number and claim still traces to the same brand-file fields as in the fact trace above.
FAQ answers are now 15–35 words, answer only.
