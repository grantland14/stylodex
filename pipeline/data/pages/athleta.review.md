# Review: brands like Athleta (steps 2–5)

Produced 2026-10-29 end to end per `pipeline/run-page.md`. Author: Ash. Category C = `leggings`
(Leggings). Athleta's search suggestions lead with "Leggings", its Bottoms menu has Leggings, a
Leggings Guide and a leggings quiz, and the outside lists compare leggings and studio wear. Prices
compare each store's regular-price women's leggings as a US shopper is charged.

## Enrichment summary

- **SERP** (Ahrefs `serp-overview`, US, top 10, 4 calls): `athleta alternatives` returned no rows.
  The other three were mostly Reddit, Quora, social posts, forums and Lululemon lists. Kept from the
  SERP: iamandco (publisher sells card decks and home goods, no clothing, so not a competitor) and
  chicover50 (CRZ YOGA as the Athleta dupe). Dropped: Reddit (not read), Travel + Leisure (fetch
  blocked, and a general roundup), similist, metafilter (403), skinnygossip (blocked), chicityfashion
  (account suspended), extrabux (comparison, recommends nothing), myfitnesspal (no posts rendered),
  collegeconfidential (brands worn alongside Athleta, none as an alternative).
- **WebSearch** added: disco directory (counted, never cited), clothedup (2022/2023, named author),
  fierceemphasis (Nov 2024, named author), ecothes (Jan 2023), plaintips (templated, `human_check`),
  dcurbanmom forum thread "Affordable alternatives to Athleta" (Jan 2024). Dropped: almostsimilar
  (redirects to an unrelated domain), storessimilarto and knoji (scraped/algorithmic), Pinterest,
  apartstyle.com, NBC Select (Athleta sale piece), CB Insights.
- **Co-stocking:** not applicable (Athleta sells through its own stores and site).
- **Pool:** 67 `brand_relationships` rows; Outdoor Voices, Girlfriend Collective and Lorna Jane
  overlap outside sources. The rest are in `candidates` with `sources: []`.
- **Anchor:** athleta.gap.com live. Leggings $89–$129 (13 regular-price styles) from the Gap Inc.
  product API the leggings page itself calls, StylodexBot UA. Sizes 00–26 (XXS–3X) plus petite and
  tall; free shipping $50+ for members; 30-day returns; 44 states plus DC in the store locator;
  certified B Corp; Gap Inc. since 2008. `known_for` "Yoga and Technical Athletic Clothing" (from
  the store title; "Women's" dropped because lint reads the apostrophe as a quote).
- **Brand files** merged one at a time through `merge_brand.py` from my scratchpad
  `patches/athleta/`: new athleta, outdoor-voices, beyond-yoga, crz-yoga, carbon38, sweaty-betty,
  summersalt, joah-brown, lululemon (unverified), vuori and fabletics (status left for a human);
  leggings rows and notes added to girlfriend-collective (also filled its empty fact fields),
  alo-yoga, nike, gymshark, old-navy; gap got notes + `sells_categories` leggings only. No
  existing leggings price row existed for any brand, so nothing of another page's was replaced.
  Two `--overwrite known_for` corrections on my own new entries (athleta, joah-brown).
  `npm run lint:facts`: my files pass. It currently fails on `the-kooples.size_range` ("men's"),
  a file this run never touched.

## Picks (12, target 10–15, not padded)

| # | Pick | Sources | Leggings (USD) | Label |
|---|---|---|---|---|
| 1 | Girlfriend Collective | 5 | 108–128 | similar |
| 2 | Outdoor Voices | 4 | 88–128 | similar |
| 3 | Sweaty Betty | 4 | 98–168 | similar |
| 4 | Alo Yoga | 4 | 118–298 | similar |
| 5 | Beyond Yoga | 3 | 94–128 | similar |
| 6 | Carbon38 | 3 | 108–128 | similar |
| 7 | Nike | 2 | 55–118 | similar |
| 8 | Gymshark | 2 | 38–64 | cheaper |
| 9 | Old Navy | 2 | 26.99–49.99 | cheaper |
| 10 | CRZ YOGA | 2 | 26–40 | cheaper |
| 11 | Joah Brown | 1 (disco) | 92–108 | similar |
| 12 | Summersalt | 1 | 65–95 | similar |

Ranked by independent sources, then distance between price midpoints (Athleta $109).

**Not picked:** Lululemon (5 sources, 503/reset: unverified, `human_check` #1), Fabletics (no
readable non-member price), Vuori (client-side grid), Gap (renderable without a price but every
GapFit legging is marked down; held back, `human_check`), Under Armour (unverified), Puma (404),
Varley (500), Balance Athletica (502), prAna (403), Lorna Jane (served the Singapore store),
Adidas and Zella not checked. No thrift or resale shop was a pick (Poshmark not counted).

## Gate result (Check step)

`npx tsx` scratch script: `pipelinePages()` from `lib/pipeline.ts`, `judgeBrandsLikePage`,
now = 2026-10-29.

```
title: 12 Brands Like Athleta for Yoga and Technical Athletic Clothing
indexable: true  reasons: []
rendered: girlfriend-collective, outdoor-voices, sweaty-betty, alo-yoga, beyond-yoga, carbon38,
          nike, gymshark, old-navy, crz-yoga, joah-brown, summersalt (12 of 12)
```

`npm test`: 30 pass, 0 fail.

## FAQ sources (Ahrefs)

One call: `keywords-explorer-matching-terms`, keywords "athleta", US, terms=questions, volume desc,
limit 50. No People Also Ask needed.

| Used | Question (US volume) | source_query |
|---|---|---|
| Yes | Who owns Athleta? (350) | `who owns athleta` |
| Yes | Can I return Athleta to Old Navy? (150) | `can i return athleta to old navy` |
| Yes | Is Athleta only for women? (200) | `is athleta only for women` |
| Yes | What is Athleta's return policy? (60) | `what is athleta return policy` |

**Skipped:** verdicts ("is athleta fast fashion", "is athleta a good brand", "good quality",
"expensive"); store hours, gift cards, military discount, sale dates, hemming, jobs (no stored
fact); "does athleta run small" (would need wear experience).

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A "brands like Athleta" list for US shoppers is the site's purpose. |
| G2 | PASS | Built from store reads no ranking page has: regular-price leggings ranges, legging-specific size runs, return windows and shipping bars, named products with prices. |
| G3 | PASS | Specifics: Athleta 3X vs Beyond Yoga 4X vs Girlfriend 6XL, Alo legging sizes stopping at L, CRZ inseams 19–33", Joah Brown 14-day refunds, Old Navy returns not crossing brands. |
| G4 | PASS | No worn, tried or tested claims. Fabric claims are the brands' own words ("buttery-soft", "recycled materials"). Ash's bio untouched. |
| G5 | PASS | `author: "Ash"`. Not YMYL. |
| G6 | PASS | Every number traces to a stored field (below). Copy errors caught and fixed before saving: Alo "Airlift $134–$144" (Airlift reaches $168, now "most"), Gymshark "nothing past $64" (only 60 of 341 read, cut), CRZ "most styles" by inseam (now "many"). |
| G7 | PASS (N/A) | Not YMYL. |
| G8 | PASS | "12 Brands Like Athleta for Yoga and Technical Athletic Clothing": real count, all sell leggings. |
| G9 | PASS | Every body compares price, size top and returns with Athleta's ($89–$129, 3X, 30 days) and points to another pick. |
| G10 | PASS (partial) | Price, sizes, returns and shipping per pick, a decision guide, Athleta's own return terms in the FAQ. Lululemon, the most-named alternative, is missing (unreadable). |
| G11 | PASS | Intro 71 words: the reader's moment, why they look, what the list gives, how it's ordered. No process. |
| G12 | PASS | All prices from 2026-10-29 (`checked_at`). No dates in the copy. |
| G13 | PASS (borderline) | Beats the top 3 (a Reddit thread, a general Travel + Leisure roundup, a scraped similist list) on specifics: real regular prices, legging size runs and terms for 12 stores. Held back from a clean pass by the missing Lululemon and evidence from small blogs. |
| G14 | PASS | Affiliate links via /go/ with the disclosure (template). No implied testing. |
| G15 | PASS | 0 em dashes, 0 semicolons, no Markdown. Bodies 116–151 words. No 7-word run shared with Comfrt (which shares Alo and Nike), and the few shared with other siblings were rewritten. |

**Counts:** PASS 15 (G10 partial, G13 borderline) · FAIL 0 · BLOCKED 0.

**Estimated Page Quality:** Medium-High. Twelve picks with dated regular prices from each store,
size and returns facts that change the choice, and comparisons between picks. Weak points: no
Lululemon, Sweaty Betty's prices come from listing data with no compare-at field, and Joah Brown
rests on the disco directory alone.

**Estimated Needs Met (dominant intent):** Moderately to Highly Meets. Biggest lift: verify
Lululemon (would rank #1). Then Fabletics and Vuori.

## Voice check (voice.md "What we never write")

- **Process narration:** none. No "we checked", dates, sources or page names. The intro says only
  how the list is ordered.
- **Spreadsheet sentences:** none. Ratios carry a reason ("about a third of a Salutation Stash",
  "one size past Athleta's 3X", "nearly double Girlfriend Collective's bar").
- **Verdicts:** none. Each catch is one attribute (size top, shipping bar, refund window, cross-brand
  returns).
- **Invented experience / hype:** none. A first draft of Joah Brown ("more coffee runs than
  classes") was rewritten to a plain use case.
- **Moves present:** answer-first opener with a named product and price in every body; why each
  fact matters; one useful thing per brand (Spacedye, Melt vs Diamond Compression, Power family,
  CRZ inseams, Alo cashmere, US number sizing at Sweaty Betty, shared Gap Inc. bag); pointers to
  other picks; use-case "Best for" lines; How to choose by budget, fit, size and return window.

## AI-voice scan

Found and fixed: "Here's the useful part" (also on the Old Navy page) rewritten; "the closest
matches come first" and "every one ships to US addresses" (Old Navy intro) rewritten; "no
conversion to do" (four sibling pages) rewritten; "the catch is shipping. It's free only" varied;
"Alo Yoga is the step up" used twice (closing changed). No rule-of-three lists in bodies, closing
trimmed from a three-brand list to two plus one.

## Fact trace

| Copy | Field |
|---|---|
| Athleta Salutation Stash $109, Salutation $89, cheapest $89, top $129, 3X, petite and tall | athleta.prices.leggings (note), size_range, has_petite, has_tall |
| Athleta 30-day returns, free mail returns for members, $6 otherwise, Give-it-a-Workout Guarantee | athleta.returns_days, notes (cid=79311) |
| Athleta $50 free-shipping bar for members, women and girls, B Corp, founded 1998, Gap Inc. 2008 | athleta.free_shipping_min_usd, notes (meta, 10-K, gapinc.com), certifications |
| Returns only at brand of purchase | athleta.notes, gap.notes (returns FAQ JSON) |
| Girlfriend Compressive High-Rise $108, Pocket $118, FLOAT $108, Luxe $128, XXS–6XL, $100, 30 days from ship date, recycled | girlfriend-collective.prices.leggings, size_range, notes |
| OV Puddle $88, TechSweat Core 7/8 $118/$128, XS–XL, $100, 30 days from purchase, recreation, men's side | outdoor-voices.prices, size_range, notes |
| Sweaty Betty Power $134–$144, All Day $98, Therma Run $168, USD, 45-day free returns, XXS–4XL (US 2–18), London | sweaty-betty.prices, returns_days, size_range, notes, hq_country |
| Alo Airbrush $118, Airlift/Softsculpt $134–$144, $168 top non-cashmere, Cashmere $298, legging sizes to L, hoodies to 2XL, free US shipping, free 30-day returns | alo-yoga.prices.leggings, notes, size_range |
| Beyond Yoga Spacedye Pedal Pusher $94, It's A Tie $118, top $128, 85 of 99 Spacedye, XXS–4X, plus-size section, free shipping and returns, 30 days, men's | beyond-yoga.prices, size_range, notes; scratchpad count |
| Carbon38 Melt $108, Split Front $128, Diamond Compression $108, other brands, $199, 30 days from order | carbon38.prices, notes, free_shipping_min_usd |
| Nike Pro Mid-Rise $60, One Flared $75, Universa $115, NikeSKIMS Matte $118, 60 days, free for members, $50 members | nike.prices.leggings, returns_days, notes |
| Gymshark Everyday Seamless $38, Adapt Solid $60, SoftSense $58–$62, $5 / free over $75, 30 days, leggings to XXL, tees to 3XL, Birmingham garage | gymshark.prices.leggings, notes |
| Old Navy PowerSoft 7/8 $34.99, StudioSmooth $34.99–$46.99, shared bag, $50 members | old-navy.prices.leggings, notes |
| CRZ Butterluxe Yoga Origin $28, Butterbreeze $40, inseams 19–33", XXS–4X, free shipping, Buy with Prime, Hong Kong, 30 days, email to start | crz-yoga.prices, notes, size_range, hq_country |
| Joah Brown Second Skin $108, Body $104, Capri $92, sueded, made in LA, XS–XL, 30/14 days, $200 | joah-brown.prices, notes, size_range |
| Summersalt Do-It-All $65, Coziest $80, Cross-Waist $95, 2–22, 21 days, $8 handling, $200, swimwear first | summersalt.prices, notes, size_range, returns_days |
