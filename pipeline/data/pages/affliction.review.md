# Review: brands like Affliction (step 5 copy)

Written 2026-10-29 by the step-5 pass, following `pipeline/write.md` as tightened after Ash's
Jaded London feedback (no process narration, 40–70 word intro, no dates or attribution chains in
copy). Author: Ash. Copy in `affliction.json` → `author`, `copy`. Category C = `graphic-tees`
(Graphic Tees): short-sleeve tees are 844 of 1,802 products (47%) on afflictionclothing.com and
"Mens Graphic Tees" is the store's largest line (see `category.why`).

## Enrichment check (enrich.md §3, lib/gate.ts) before writing

All six picks re-checked against their brand files: `status` verified, a `graphic-tees` price with
min/max/min_usd/max_usd, `ships_to` contains US, ≥1 outside evidence item, reason ≥40 chars, stored
`price_relation` equal to `computePriceRelation` against the anchor's $39–$88 (Metal Mulisha $28–$38
→ cheaper, the other five overlap → similar). Anchor: verified, every `missingBrandFacts` field
present, `/img/brands/affliction.webp` exists in `images.json`.

Gap fixed this pass (via `merge_brand.py`, patch in scratchpad):
- **Venum `known_for`** was null → "Combat Sports Gear and Fightwear", from the store's own homepage
  meta description ("Shop Venum, the #1 combat sports brand. Explore boxing gloves, MMA gear,
  fightwear and more…", https://www.venum.com/, fetched 2026-10-29). `hq_country` stays null (no
  brand-stated HQ; the US store is run by DBV distribution in Vernon, CA). The step-4 `gate_gaps`
  list in `picks[3]` still names known_for; it was left as step 4 wrote it.

Not fixed (not gate fields for picks, still in `human_check`): Alchemy England `returns_days`,
Metal Mulisha free-shipping threshold and non-US countries, True Religion (307 loop; would be a 7th
pick), Obphoria evidence quality, the two Reddit threads, Buckle co-stocking.

## Gate result (Check step)

Script: `npx tsx` on a scratch file that loads `pipelinePages()` from `lib/pipeline.ts` and runs
`judgeBrandsLikePage` with now = 2026-10-29.

```
anchor missing: []
ed-hardy 1 similar []
metal-mulisha 2 cheaper []
jnco 3 similar []
venum 4 similar []
alchemy-england 5 similar []
sullen 6 similar []
indexable: true rendered: ed-hardy, metal-mulisha, jnco, venum, alchemy-england, sullen reasons: []
title: 6 Brands Like Affliction for Full-Coverage Graphic Tees
```

**Gate: indexable, 6/6 picks render** (exactly MIN_PICKS: losing any one pick drops the page below
the gate). `npm test`: 25/25 pass.

## FAQ sources (Ahrefs)

One call: `keywords-explorer-matching-terms`, keywords "affliction", country US, terms=questions,
order volume desc, limit 40 (440 units).

| Used | Question (US volume) | source_query |
|---|---|---|
| Yes | What is Affliction clothing? (250) | `what is affliction clothing` |
| Yes | Where can you buy Affliction clothing? (90) | `where to buy affliction clothing` |
| Yes | How much are Affliction shirts? (40) | `how much are affliction shirts` |
| Yes | Who owns Affliction clothing? (50) | `who owns affliction clothing` |

Skipped: "what does affliction mean" / bible / band / book / game queries (not the brand);
is affliction fast fashion (200; only "most products made in the USA" stored, which doesn't answer
it), does it run small (80, 40; no fit data), what style is it (100; would be opinion), is it a
christian brand / emo / good / bad (no facts), why so expensive (50; opinion), when was it founded
(80; folded into the first answer).

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A "brands like Affliction" list for US shoppers is the site's whole purpose. |
| G2 | PASS | No outside site's wording is used. The substance is Stylodex's own store reads: regular-price tee counts and ranges, size runs, free-shipping bars, return terms, stock lines. FAQ answers come from brand-file facts, not PAA text. |
| G3 | PASS | Specifics a SERP reader can't get in one place: Metal Mulisha is the only pick wholly under Affliction's $39 floor, Sullen's 5X on 130 of 135 styles, Ed Hardy stopping at XXL against Affliction's 4X, JNCO's $10 flat shipping and 21-day returns, Venum's $75 free-shipping bar, Alchemy's Fort Worth warehouse, the parked affliction.com domain. No hands-on fit or fabric knowledge, by design. |
| G4 | PASS | No first-person wear/try/test claims, no "we checked" narration. Ash's bio not added to. |
| G5 | PASS | `author: "Ash"`, byline to /authors/ash (`lib/authors.ts`). Not YMYL. |
| G6 | PASS | Every number and claim traces to a stored field (table below). The anchor is verified. Title is built by `brandsLikeTitle` from the stored `known_for` (wording in `human_check`). Template rounding: `priceRange` shows whole dollars, so chips will read $25–$90 (Venum), $25–$49 (Sullen) against $24.99–$89.99 / $25–$48.95 in copy (same issue as on Jaded London, outside the copy). |
| G7 | PASS (N/A) | Not YMYL. |
| G8 | PASS | "6 Brands Like Affliction for Full-Coverage Graphic Tees": the real rendered count, and every pick sells graphic tees. |
| G9 | PASS | Both sides of the comparison are present: every body places the pick's tee price against Affliction's $39–$88 and its size run against Affliction's 4X, and the gate's price labels match stored prices. |
| G10 | PASS | Price, sizes, US shipping and returns for each pick plus the anchor's own range and where to buy it. Gaps a reader might still search (fit, quality) can't be answered from stored facts. |
| G11 | PASS | Intro is 59 words: what Affliction is known for, what the six share, the price spread. No preamble or method talk. |
| G12 | PASS | All prices from 2026-10-29 (`checked_at`); the template carries the "Last checked" line. No dates in copy. |
| G13 | **FAIL** | Honest estimate is Medium (below). Copy can't fix it: needs stronger evidence and images. |
| G14 | PASS | Affiliate links via /go/ with the disclosure. No implied testing. No client at #1. |
| G15 | PASS | 0 em dashes, 0 semicolons, no Markdown. Bodies end differently (a returns rule, a sale-final note, a returns window, a returns condition, a shopping tip, a shipping bar). Only page of its kind for this anchor. |

**Counts:** PASS 14 (G1–G12, G14, G15) · FAIL 1 (G13) · BLOCKED 0.

**Estimated Page Quality:** Medium. The store-level data for every pick (and the anchor) is real
and specific, but four of six picks rest on a single outside source, and that source is a clothing
brand's own undated blog list (Obphoria). The ranking SERP is mostly Reddit threads we couldn't read.
Three picks (Metal Mulisha, Alchemy England, Sullen) have no share image and no pick has graphic-tee
product photos yet, on a query where readers want to see the prints.

**Estimated Needs Met (dominant intent):** Moderately Meets. What would move it most: read the two
Reddit threads (`human_check`) to add independent evidence, verify True Religion as a 7th pick
(a buffer above MIN_PICKS), then product photos of each brand's tees.

## AI-voice scan

| Pattern (ai-voice-avoid) | Where found | Fix |
|---|---|---|
| Unsupported comparison (fact trace) | Intro "draw on the same tattoo, motocross and fight culture": no stored fact ties Affliction itself to tattoo or MMA | "the same" cut; the line now describes the picks only |
| Unsupported claim | Metal Mulisha "co-founders … run it from San Juan Capistrano" (current management not stored), then "where they co-founded it" (founding place not stored) | Split: co-founders named, then "it's based in San Juan Capistrano" (terms page) |
| §13 evaluative framing | Venum "a combat sports brand first" | "a combat sports brand that sells…" |
| Unstated degree | Sullen "the bigger sizes cost a little more" | "cost more" (stored note says only that larger sizes cost more) |
| §40 "from X to Y" | Intro price spread | Kept: write.md prescribes this form for the price spread. Other "from" hits are literal (ship from a warehouse, buy from a store) |
| §1, §2, §16, §19–§26, §33, §34, §48 | none ("not just", "rather than", "really/just/simply", "may", "matters", "without…") | — |
| §3 rule of three | "tattoo art or motocross and fight culture" is two groups | — |
| §47 every section ends the same | No repeated closing form | — |
| Smell Test | Each body is built on that brand's own numbers and lines (rhinestone boxy tees, Venum x UFC, The Mummy prints, 460+ Artist Series artists). None would fit another entry unchanged | — |

## Fact trace

Brand files are `data/brands/{slug}.json`; page file is `data/pages/affliction.json`.

| Claim in copy | Source field |
|---|---|
| **Intro** | |
| California label | affliction `hq_country` US; `notes[2]` (Seal Beach, California) |
| known for full-coverage graphic tees | affliction `known_for`; `notes[6]` (About: "embraced full-coverage designs") |
| short-sleeve tees nearly half its catalog | `notes[5]` (844 of 1,802 = 47%); page `category.why` |
| most of the six draw on tattoo art or motocross and fight culture | ed-hardy `known_for`; sullen `known_for`; metal-mulisha `known_for`; venum `known_for` (4 of 6) |
| all ship to the US | each pick `ships_to` contains US |
| $24.99 at Venum, $115 at Ed Hardy | venum `prices[graphic-tees].min`; ed-hardy `prices[graphic-tees].max` (lowest min / highest max of the six) |
| Affliction's own $39–$88 | affliction `prices[graphic-tees]` |
| **Ed Hardy** | |
| tattoo art of Don Ed Hardy | `known_for`; `notes[0]` |
| Zumiez stocks it alongside Affliction | picks[0] `evidence[1]`; page `co_stocking` Zumiez rows |
| 41 men's styles, $45–$115, starts above $39 | `prices[graphic-tees]` (item_count 41) vs affliction min 39 |
| $115 rhinestone boxy tees | `prices[graphic-tees].note` |
| sizes stop at XXL; Affliction to 4X | `size_range`; affliction `size_range` |
| women's line $29.25–$60 | `prices[graphic-tees].note` |
| free over $100; sale items not returnable | `free_shipping_min_usd` 100; `notes[3]` ("sale items final") |
| **Metal Mulisha** | |
| freestyle motocross and MMA | `known_for`; `notes[0]` (meta) |
| co-founders Brian Deegan and Larry Linkogle; based in San Juan Capistrano | `notes[1]` (terms page; own archive pages) |
| cheapest pick, 83 tees $28–$38, under $39 | `prices[graphic-tees]`; lowest max of the six; `price_relation` cheaper |
| most styles to 4XL; Affliction 4X | `size_range` (4XL on 74 of 96); affliction `size_range` |
| Zumiez carries both | picks[1] `evidence[1]` |
| 30-day returns, sale final | `returns_days` 30; `notes[2]` |
| **JNCO** | |
| LA, wide-leg jeans since 1985 | `known_for`; `founded_year` 1985; `notes[0]` |
| 22 tees, $50–$80, inside Affliction's range | `prices[graphic-tees]`; anchor 39–88 |
| nearly every tee in XXXL | `prices[graphic-tees].note` (XXXL on 32 of 33) |
| jeans $130–$350, waists 24–44 | `prices[jeans]`; `size_range`; `notes[2]` |
| $10 flat US shipping, no free threshold | `notes[1]`; `free_shipping_min_usd` null |
| returns close after 21 days | `returns_days` 21 |
| **Venum** | |
| combat sports brand; boxing gloves, MMA gear, fightwear | `known_for` (added this pass; homepage meta) |
| Venum x UFC line | `notes[0]` (nav) |
| 86 men's cotton tees, start below $39; most $24.99–$49.99; $89.99 top | `prices[graphic-tees]` and `note` |
| many to XXXL, a few to XXXXL | `size_range` (XXXL 96 of 150, XXXXL 25) |
| free over $75; unworn, 30 days | `free_shipping_min_usd` 75; `returns_days` 30; `notes[2]` |
| **Alchemy England** | |
| gothic jewelry, Leicestershire, since 1977 | `founded_year` 1977; `hq_country` GB; `notes[0]` ("Alchemy Gothic Official Site"), `notes[1]` (About: HQ in Leicestershire; jewellery and giftware) |
| small tee line, horror prints The Mummy, Curse of Frankenstein | `prices[graphic-tees].note`; `notes[1]` ("tees are a small apparel range") |
| every tee $40, near the bottom of Affliction's range | `prices[graphic-tees]` 40–40; anchor 39–88 |
| S–XXXL | `size_range` |
| US orders from Fort Worth warehouse, free over $100 | `notes[0]`, `notes[2]`; `free_shipping_min_usd` 100 |
| rings and pendants are the main line | `notes[1]` ("Jewellery is the main line (pendants, earrings, rings)") |
| **Sullen** | |
| tattoo lifestyle brand, Southern California, since 2001 | `known_for`; `founded_year` 2001; `notes[0]` |
| every graphic original work by a tattoo artist; 460+ in Artist Series | `notes[0]` (FAQ) |
| 102 tees $25–$48.95, under Affliction's $88 | `prices[graphic-tees]`; anchor max 88 |
| bigger sizes cost more | `prices[graphic-tees].note` |
| nearly every style to 5X, widest run here | `size_range` (4X and 5X on 130 of 135) vs others (XXL–XXXXL; Affliction 5X on 17 of 488) |
| free over $99 | `free_shipping_min_usd` 99 |
| **FAQ** | |
| US brand, 2005, Seal Beach | affliction `hq_country`; `founded_year` 2005; `notes[2]`, `notes[6]` |
| founders' graphic design and screen printing backgrounds; full-coverage designs | page `category.why`; `notes[6]` |
| afflictionclothing.com; affliction.com parked | `website_url`; `notes[0]` |
| Zumiez carries hundreds of pieces, tees included | page `co_stocking` Zumiez row (358 items) |
| men's tees $39–$88, XS–4X; women's $36–$64 | `prices[graphic-tees]` and `note`; `size_range` |
| Affliction Holdings LLC | `parent_company`; `notes[2]` |
| passion project between friends, 2005; most products made in the USA | `notes[6]`; `production_model` |

## Publish conditions (outside the copy)

1. `/img/` share images for Metal Mulisha, Alchemy England and Sullen (`no_share_image`), and
   graphic-tee product photos for every brand (`product-images.json` has none for this category).
   Not gate fields for picks, but they weigh on G13.
2. `human_check` rows: Obphoria as evidence (4 picks rest on it alone), the Reddit threads, True
   Religion as a 7th pick. With exactly 6 picks, any pick that later fails drops the page to noindex.
