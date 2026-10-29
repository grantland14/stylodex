# Review: stores like Tillys (steps 2–5)

Written 2026-10-29 in one run (enrich, verify, pick, write). Author: Ash. Copy in `tillys.json` → `author`, `copy`.
Copy written against `pipeline/voice.md`; earlier page files used for JSON shape only.

## Gate result

Loaded through `lib/pipeline.ts` (`brandFromJson` + `pageFromJson`, with `loadMedia`) and judged with
`judgeBrandsLikePage`, now = 2026-10-29 (script: scratchpad `tillys-page/bin/gate.ts`):

- Anchor missing: `[]`.
- `pickProblems` returns `[]` for all 11 picks.
- Verdict: **indexable**, no reasons. 11 picks render.
- Title: "11 Stores Like Tillys for Casual Apparel and Footwear".
- `npm run lint:facts`: ok. `npm test`: passes.

## Category

`mens-clothing` (department, since Tillys is a multi-brand store). Men's is Tillys' biggest department in its 10-K (36% of net sales vs Womens 28%), and tillys.com/men/ ranks on "stores like tillys". Like-for-like item: men's short-sleeve T-shirts. Reasons in `category.why`.

## Evidence

Ahrefs `serp-overview` (US, 4 calls): `stores like tillys` and `brands like tillys` returned positions, `tillys alternatives` and `similar to tillys` returned none. No Tillys-specific editorial list in either top 10 (store homepages, Reddit, Quora, a stores-like-PacSun list that names Tillys, a 403 trade article). Three WebSearch queries (precedent: TJ Maxx, Damson Madder) found three kept lists, recorded in `web_search`:
HB = Honest Brand Reviews (Susie Johnson, July 2023, 10), ET = eTechShout (Jan 2026, 15), SX = Soxy blog (undated, 10). ExpertBeacon 403; ctdata/shacknews parasite copies dropped; Similist dropped. Reverse-direction lists (stores like PacSun / Hollister naming Tillys) are not counted.
Pool: 25 `brand_relationships` rows (24 brands); Zumiez, PacSun, Volcom, Forever 21 and Aeropostale also have outside sources.

## Picks

| Rank | Pick | Sources | Price (men's tees, USD) | Label | Notes |
|---|---|---|---|---|---|
| 1 | Zumiez | 3 | 24.99–64.95 (60-item sample, Zumiez run) | similar | |
| 2 | PacSun | 3 | none | null | category pages 403 (earlier run) |
| 3 | Hot Topic | 2 | 12.99–50.90 (547, Zumiez run) | similar | |
| 4 | Aeropostale | 2 | none | null | grid served no tees; Comp. Value pricing |
| 5 | Volcom | 1 | 22.00–42.00 (101 regular, Shopify feed) | similar | new brand file; Tillys stocks it |
| 6 | Forever 21 | 1 | 7.99–34.99 (9 regular, Shopify feed) | similar | mens-clothing added |
| 7 | Cotton On | 1 | 7.00–34.99 (6 regular styles, SFCC page) | similar | mens-clothing added |
| 8 | Neff | 1 | 17.50–21.99 (98, Shopify feed) | cheaper | new brand file |
| 9 | Vans | 1 | none | null | own US stores |
| 10 | American Eagle | 1 | none | null | men's tees nearly all marked down |
| 11 | Old Navy | 1 | none | null | grid loads by script |

Anchor: Tillys $29.99–$45.00, a 14-item sample (human_check row 1).
Order: same-type multi-brand stores first, then single-brand labels by sources, then price closeness, unpriced last (`notes`).
Rejected (in `rejected`): Urban Outfitters (3 sources but no US shipping/store fact), Hollister and H&M (unverified), Anthropologie (403), Nasty Gal (US site "Coming Soon"), ASOS (marketplace), J.Jill (women's only), Missguided, Boohoo, Fashion Nova, 6pm, Zaful, Eddie Bauer (weaker fit or men's line not read: not padded in), 19 pool-only brands.

## FAQ sources (Ahrefs)

One call: `keywords-explorer-matching-terms`, keywords "tillys", US, terms=questions, volume desc, limit 30.

| Used | Question (US volume) | source_query |
|---|---|---|
| Yes | What is Tillys? (450) | `what is tillys` |
| Yes | What is Tillys' return policy? (100) | `what is tillys return policy` |
| Yes | Who owns Tillys? (70) | `who owns tillys` |

Skipped: is tillys legit / a good brand (opinion), opening hours, military discount, pay and hiring (out of scope), fast fashion (no production facts), going out of business / closing (no stored fact either way), delivery time (no transit time stored), price match, Afterpay, gift cards, RDR2 necklace (a video game).

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A stores-alternatives page for US shoppers is the site's purpose. |
| G2 | PASS | Nothing taken from the three lists beyond which stores they name. Bodies are built from each store's own pages: shipping rules (PacSun's jeans-ship-free rule, Volcom to Canada), return windows and fees, size runs (Hot Topic tall, Neff to 2XL), named tees with prices, the shared Santa Cruz x Pokémon tee at Zumiez and Tillys. None of the lists has prices or terms. |
| G3 | PASS | Store-level specifics a SERP reader can't get from the ranking lists: tee prices, return fees ($6.95 Tillys, $7 Volcom card refunds, $9.99 Forever 21, $5 AE), no-limit returns at Cotton On, free return shipping at Neff. No hands-on claims, by design. |
| G4 | PASS | No wear/try/test claims, no invented experience. Ash's bio untouched. |
| G5 | PASS | `author: "Ash"`. Not YMYL. |
| G6 | PASS | Every number traces to a stored field or brand note (table below). Title from `known_for` and the real count. Caveat: Tillys, Zumiez and Cotton On ranges are samples (price notes, human_check). |
| G7 | PASS (N/A) | Not YMYL. |
| G8 | PASS | Count is the real rendered count (11). |
| G9 | PASS | "Stores like Tillys" intent served: Zumiez, PacSun and Hot Topic (multi-brand mall stores) first, then labels the lists name. Seven picks carry a price label; four render without a price, so the comparison is partial for them. |
| G10 | PASS | Price, sizes, shipping, returns or store presence for every pick; "How to choose" routes by goal (brands, jeans, sizes, budget, Canada). |
| G11 | PASS | Intro 72 words, no process; every body opens on what the store is best for. Bodies 109–133 words. |
| G12 | PASS | All facts dated 2026-10-29 in the data. No dates in the copy. |
| G13 | **FAIL** | Honest estimate Medium–High, scored Medium (use the lower rating). The page beats the three readable lists on data, but the evidence base is thin (three weak blog lists, 7 of 11 picks single-source, the strongest same-type rival Urban Outfitters missing for want of a US fact), 4 picks have no price and images are the coordinator's. Copy can't fix that. |
| G14 | PASS | Affiliate links via /go/ with disclosure (template). No implied testing. |
| G15 | PASS | Read as a whole: 0 semicolons, 0 em dashes, no Markdown. Openers varied after the AI-voice pass. No near-duplicate sibling: the Zumiez page shares four picks but every shared body here is new and compares against Tillys. |

**Counts:** PASS 14 · FAIL 1 (G13) · BLOCKED 0.

**Estimated Page Quality:** Medium (Medium–High, scored down). Strongest reason: store-level tee prices, shipping and returns for eleven stores that no ranking list has.

**Estimated Needs Met (dominant intent):** Moderately Meets. Biggest lift: a US fact for Urban Outfitters, PacSun and Aeropostale tee prices, and images.

## Voice check (`voice.md` "What we never write")

- Process narration: none (no "we checked", dates, "according to", or source lists).
- Spreadsheet sentences: none as the point. Rankings carry their reason ("the cheapest tee on this page" → four cost less than one Tillys tee; "the lowest bar of any store here" for Aeropostale's $25 free shipping).
- Verdicts on brands: none. Trade-offs are attribute-specific (Zumiez sizes, Neff 2XL and US-only, Forever 21 online only, Old Navy style).
- Invented experience, hype words: none.
- Brand as "it" throughout. Contractions throughout. One colloquialism ("a sensible drive").

## AI-voice scan (`ai-voice-avoid.md`)

Found and fixed: five "X, not Y" contrasts (#1) rewritten; repeated "The X is the Y." second-paragraph openers (#5 anaphora) varied; five "is the pick" openers cut to one; a colon reveal (#24) in Cotton On split. Remaining colons: two (Zumiez collab, Aeropostale list), each introducing a concrete item. No rule-of-three lists of adjectives, no participial puffery, no "whether you're".

## Fact trace

| Copy | Source field |
|---|---|
| Tillys tees $29.99–$45, free shipping $70, 30 days, $6.95 return label, free in-store return, not shipping abroad, filter to 5XL | tillys `prices.mens-clothing`, `free_shipping_min_usd`, `returns_days`, notes (Zumiez run) |
| Men's is Tillys' biggest department; Irvine HQ; NYSE TLYS; 1982 World of Jeans and Tops; Shaked and Levine; RSQ; stores in more than 30 states; stocks Volcom, Vans | tillys notes (10-K, Wikipedia, About, brands page) |
| Zumiez Shaka Wear $24.99, Affliction $64.95, Power Dot $31.95, free $64.94, 30 days, store returns free, XS–3XL | zumiez price note, notes, `size_range` |
| PacSun Seal Beach surf shop, baggy jeans/hoodies/graphic tees, free over $59 or with jeans/pants, US only, own label plus brands | pacsun notes |
| Hot Topic $12.99–$50.90, Shaka Wear 7.5 Oz $15.90, XS–5XL, LT–4XLT, free $75, 30 days store or mail, $1.99 pre-order surcharge | hot-topic price note, notes |
| Aeropostale free $25, waists 26–46, XXL/XXXL online only, baggy/mega/super baggy, Comp. Value | aeropostale notes (incl. this run) |
| Volcom 1991 skate/surf/snow, $22 Workwear, $40 Walleye, $42 top, 155 of 256 marked down, Canada at US rates, free $99, 30 days, $7 card refund, gift card free | volcom price note, notes |
| Forever 21 $7.99 crew, XS–XXXL, $34.99 Velour Rhinestone, online only after closing US stores, free $50, 30 days, $9.99 fee, clearance final | forever-21 price note, notes |
| Cotton On $7 Easy T-Shirt, $34.99 Fitted Henley, no time limit, free return shipping, free $75, Australian, markdowns | cotton-on price note, notes |
| Neff $21.98 Garfield Ballin, snow and skate headwear, Irvine, free $50, 45 days, return shipping paid, S–2XL, US only | neff-headwear price note, notes |
| Vans 1966, original action sports footwear company, youth-culture apparel, VF Corporation, Century City store, locator by state | vans notes |
| AE 60 days, $5 online return, free $75, $7.95, Lived-In $11.99 vs $19.95, Snoopy/Ford graphics, additional sizes online | american-eagle notes |
| Old Navy Gap Inc., 49 states plus DC and PR, big and tall, kids' extended sizes, free returns 30 days, Premier 45, free $50 for Rewards, combined bag | old-navy notes |
