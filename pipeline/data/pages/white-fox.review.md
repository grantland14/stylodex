# Review: stores like White Fox (steps 2–5)

Written 2026-10-29. Author: Ash. Copy in `white-fox.json` → `author`, `copy`.
Checked with `lib/gate.ts` through `lib/pipeline.ts` (tsx script, now = 2026-10-29):

- Title: "12 Stores Like White Fox for Australian Clothes and Accessories"
- Rendered picks: 12 of 12. `pickProblems` returns `[]` for every pick. `missingAnchorFacts` returns `[]`.
- Verdict: **indexable** by the gate (no reasons).
- `npm test`: 30/30 pass. `npm run lint:facts`: ok.

## Category

`tops`. Tops are White Fox Boutique's largest product type: 1,773 of 6,740 products in its US `collections/all` feed (Dresses 1,117, Swimwear 582, Outerwear 579, Pants 568). Its hoodies, which people also search for, are filed under Outerwear (285 hoodies), and most of the brands outside lists name don't sell hoodies, so tops is the like-for-like category. The like-for-like price is regular-price tops in USD from each store's US tops collection. Anchor: $29.99–$99.99, 1,290 items, median $49.99.

## What White Fox charges US shoppers, and whether it ships to the US

- **Ships to the US: yes.** The US store (whitefoxboutique.com, "White Fox Boutique USA", USD) ships to the US, Canada and Mexico. US orders "are dispatched from our warehouse in Indianapolis". Orders placed before 12 PM US Eastern on a weekday go out the same day.
- **Prices:** in USD, with tariffs included ("The prices on our United States store have been adjusted to include tariffs"). There are no customs charges at delivery. Full-price tops run $29.99–$99.99. Full-price hoodies run $54.99–$89.99, and most are $69.99.
- **Shipping:** free standard shipping over $100, "49 states included" (homepage cart config). The standard rate under $100 couldn't be read (human_check).
- **Returns:** store credit only, 30 days from when the order is *placed*. The customer pays return postage, sale items are final, and credit expires in 12 months.
- It's online only (no shops), and it doesn't wholesale ("We do not wholesale our products to other sellers or stores"). So there's no co-stocking evidence.
- Shared-file corrections: `ships_to` changed from [US] to US, CA, MX (US store) plus GB and AU (its own regional stores). Also set `free_shipping_min_usd` to 100 and `us_stores` to false. The tops price was re-read under the enrich.md markdown rule: same min and max, 1,290 items. The earlier tag-strict read gave 820.

## Evidence

For the four keywords (Ahrefs `serp-overview`, US, 4 calls):
- `stores like white fox` and `brands like white fox` returned results. `white fox alternatives` and `similar to white fox` returned none.
- Kept:
  - ldnfashion, "Brands Like White Fox: 12 Labels Worth Knowing" (18/09/2026, editorial).
  - lapassionvoutee, "31 Unique Online Stores Like White Fox" (2022). Items 16–31 are listed without descriptions.
  - A Mumsnet thread (2024) asking for an alternative to a White Fox tracksuit. It names Pangaia and Mars The Label, both hoodies, so neither is a tops pick.
- Added from one WebSearch: the disco directory "26 Brands like White Fox" (discobrands.co, unsigned, Jul 2026). Under Ash's new rule it counts as evidence and is **never named, linked or quoted on the page**. The copy doesn't mention it. Its /premium sub-page repeats the same brands, so it's counted once.
- Dropped:
  - Reddit (4 threads): unfetchable, no workaround tried.
  - TikTok, Instagram and Facebook pages: not readable.
  - Store homepages (Tiger Mist, Peppermayo): not alternatives lists.
  - Two scraped spam pages: no editorial content.
  - apartstyle.com: excluded by rule.
  - Ahrefs competitor pages: traffic data, not recommendations.
- Apart Style pool (read-only SQL, `public.brand_relationships` for white-fox-boutique): 21 brands. PrettyLittleThing, Oh Polly, Venus, VICI and ASOS also have outside sources. The other 16 are pool-only and rejected.

## Picks: 12 renderable of 12 (target 10–15, floor 6, not padded)

Ranked by independent sources, then by how close the full-price tops range sits to the anchor's $29.99–$99.99 (sum of |log min ratio| and |log max ratio|). Every priced pick overlaps the anchor's range, so `price_relation` is `similar`. PrettyLittleThing has no price, so it's last of the 3-source group.

| # | Pick | Sources | Tops, full price (USD) | Items | New this run | Gate |
|---|---|---|---|---|---|---|
| 1 | Princess Polly | 3 | 29–110 | 913 | reused | [] |
| 2 | Beginning Boutique | 3 | 29.99–119.99 | 218 | new file | [] |
| 3 | Tiger Mist | 3 | 49–105 | 56 | reused | [] |
| 4 | Showpo | 3 | 49.95–119.95 | 30 (sample of 646) | tops price | [] |
| 5 | PrettyLittleThing | 3 | no price (client-side grid) | – | sells_categories tops | [] |
| 6 | Lioness | 2 | 30–90 | 223 | reused | [] |
| 7 | Oh Polly | 2 | 32–105 | 159 | tops price | [] |
| 8 | Peppermayo | 2 | 45–98 | 313 | reused | [] |
| 9 | I.AM.GIA | 2 | 49–179 | 67 | reused | [] |
| 10 | SABO | 2 | 56.16–283.14 | 203 | new file | [] |
| 11 | Motel Rocks | 1 | 36–98 | 454 | reused | [] |
| 12 | Petal & Pup | 1 | 37–109 | 339 | reused | [] |

Rejected (reasons in the page file):
- Meshki has 3 sources, but www.meshki.us returns 403 to the bot UA and to WebFetch. Its bare domain answered once, for `meta.json`, before the refusal. That wasn't used further, so there's no workaround.
- Hello Molly (403/429) and Stelly (password page, feeds 401) aren't verified. No brand files were written for them.
- Fashion Nova: no regular prices.
- boohoo: no prices, and it overlaps PLT (same group, same returns charge).
- Not counted: SHEIN, H&M and Free People (unverified files) and Nasty Gal (`off_category` set by another run). No status was changed.
- Single-source brands beyond these were left unchecked, within the cap of 25 verifications.

Price-method note: rows reused from earlier runs (Princess Polly, Tiger Mist, Lioness, Peppermayo, I.AM.GIA, Motel Rocks, Petal & Pup) also dropped sale-*tagged* items. This run's rows (White Fox, Oh Polly, Beginning Boutique, SABO) use only the enrich.md markdown test. For White Fox the min and max came out the same either way.

Shared brand files: every write went through `python3 -I pipeline/merge_brand.py`, one named patch at a time, each from `<scratchpad>/white-fox/patches/white-fox/`. That covered white-fox (`--overwrite ships_to,free_shipping_min_usd`), oh-polly, showpo, prettylittlething, beginning-boutique (new) and sabo (new).

## Quality gate (G1–G15)

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | Someone searching "stores like White Fox" wants other stores to buy the same tops from. The page lists 12 that sell tops to the US. |
| G2 | PASS | The ranking pages list names with a line each. This page adds each store's own full-price tops range, sizes, shipping threshold and return rules, set against White Fox's. |
| G3 | PASS | Named products with prices, size ceilings, return windows and fees. Also comparisons between picks: Lioness vs Oh Polly windows, Oh Polly vs Motel Rocks for plain halters, Tiger Mist sending larger sizes to Beginning Boutique and Princess Polly. |
| G4 | PASS | No first-person experience and no fit or feel claims. Ash's bio is untouched. |
| G5 | PASS | Author Ash. Not YMYL. |
| G6 | PASS | Fact trace below. The title count (12) matches the rendered picks. |
| G7 | N/A | Not YMYL. |
| G8 | PASS | The title promises 12 stores, and the page delivers 12 that all sell tops to the US. |
| G9 | PASS | Each body says what's alike and what's different from White Fox (price, sizes, returns, shipping). |
| G10 | PASS | Price, sizes, shipping and returns for every pick, a How to choose section, and FAQs on returns, hoodies and origin. |
| G11 | PASS | The intro is 70 words and gets to the list. Each body opens answer-first. |
| G12 | PASS | Prices were read 2026-10-29. The template's "Last checked" line carries the date. |
| G13 | PASS | More specific than page one: real US prices, US return rules and size ranges per store. |
| G14 | PASS | Affiliate links go through `/go/`. No implied testing. Picks are ranked by evidence and price closeness, not commission. |
| G15 | PASS | Read through whole. Bodies for reused brands were written fresh, not reworded from the Edikted or Dressed in Lala pages (their "Daily Define is the name to look for" and Lioness/White Fox sentences were avoided). |

**Estimated Page Quality:** High. The strongest reason is store-verified US prices, sizes and return terms for 12 stores, set against White Fox's own (tariffs included, store credit only, 30 days from order).
**Estimated Needs Met (dominant intent):** Highly Meets. One thing would make it better: Meshki (3 sources) and a full-range Showpo price, both waiting on a human check.

## Voice check (`voice.md` "What we never write")

- **Process narration:** none. No "we checked", dates or method talk. The intro says how the list is sorted, which the page shape allows. The disco directory is never mentioned.
- **Spreadsheet sentences:** none. Numbers come with a reason, like "half White Fox's threshold", "nine fewer than White Fox" and "two of them get you there".
- **Verdicts on brands:** none. Trade-offs are about specific terms (credit-only returns, $13.99 fee, 7-day refund window, 14 days plus six weeks in transit).
- **Invented experience:** none.
- **Hype:** none.
- **Rhythm:** no semicolons, no em or en dashes in the copy, no bold. No sentence over 30 words (script check). Paragraphs vary between 1 and 4 sentences.
- **Contractions:** used throughout. Brands are "it". The one "they" refers to return windows and was rewritten anyway.
- **Colloquialisms:** "shipping maths" is the only one. "On the table" and "for better and worse" were cut.

## AI-voice scan (`ai-voice-avoid.md`)

- **Rhetorical question hook:** BB's "So where's the catch?" was replaced with a plain sentence. One question is left in the closing ("Want something dressier?").
- **Rule of three:** the Oh Polly return windows (7, 14, 28 days) are data, not rhetoric. The intro and closing use pairs.
- **Colon reveals:** none in the copy.
- **Unsupported claims cut:** "rarely go on sale" (Peppermayo, generalised from one read), "most of the range sits between $50 and $60" (Tiger Mist, not stored), "plain colors" (Oh Polly, not stored), "for longer torsos and sleeves" (PLT tall range, not stored), "free US shipping on any order" (Lioness: true only for US-warehouse items, now qualified).
- **Tidy conclusion:** none. The closing is a decision guide.

## Fact trace

Anchor (white-fox.json):
- Store credit only, 30 days from order, sale final, 12-month credit, customer pays postage: notes (refund-policy.json).
- Free over $100: `free_shipping_min_usd`, notes (cart config).
- Indianapolis and tariffs included: notes (order-enquiries and shipping FAQs).
- Online only, no wholesale: notes.
- Tops $29.99–$99.99: `prices.tops`.
- XL ceiling: `size_range`.
- Hoodies $54.99–$89.99, most $69.99: notes (collections/all feed).
- Australian: `hq_country`, meta.
- Halters: 283 halter tops in the tops feed.

Picks:
- **Princess Polly:**
  - $29–$110, Daily Define Tube Top $29: `prices.tops`.
  - Afelia Strapless Corset Top $59: product-images.json.
  - 30 days from delivery with refund, free from $50: notes, field.
  - US 0–12, Curve to 20: `size_range`.
  - Shops in Scottsdale, Santa Clara, Boston, Columbus: notes (store locator).
- **Beginning Boutique:**
  - Nora White Jersey Halter Neck Top $29.99, Elsa Cropped Baby Tee $34.99, BB Exclusive label: price note.
  - 2008: `founded_year` (About).
  - Australian: `hq_country` (terms).
  - US 00–18: `size_range`.
  - Free from $100: field.
  - Customs covered: notes (meta).
  - Credit or exchange only, $13.99 fee, 30 days from delivery: notes.
- **Tiger Mist:**
  - Bella Baby Tee $49, Ember Bandage Top $105: price note.
  - Lydiah Top $55, Elliot Top $59: product-images.json.
  - $75: field.
  - 30 days, refund or credit note, free label for credit, $10 for refunds: notes.
  - XXS–XL: field.
- **Showpo:**
  - Odile Bodysuit $49.95, Gigi corset top $79.95: new price note (first 30 of 646).
  - Sydney 2010: notes.
  - US warehouse, free over $100: notes.
  - US 0–16 (XXS–XXXXL): `size_range`, notes.
  - Refund in the first 7 days, then exchange or 110% credit to day 30: notes.
- **PrettyLittleThing:**
  - 00–24, plus 12–24 (L–3XL), petite 00–12, tall: notes (size guide).
  - Manchester 2012, Boohoo Group: notes.
  - $9.99 per order: notes.
  - 21 days, $14.99 per parcel, credit +10%: notes.
- **Lioness:**
  - Kaia Cami $30, Notting Hill Shirt $90: price note.
  - Nice Nights Top $70: product-images.json.
  - Sydney: notes.
  - US warehouse free standard, AU-warehouse items $8 or free over $95: notes.
  - XXS–XXL: field.
  - In Beginning Boutique's range: BB tops feed vendor list (10 Lioness), BB price note.
  - 30 days from delivery, free credit or exchange, $15 off refunds: notes.
- **Oh Polly:**
  - Asymmetric Ruched Tank Top $35, Modal Halterneck Tank Top $42, Satin Lace-Up Corset Top $100, mostly corsets, tanks and crop tops: new price note.
  - Designed in London: notes (meta).
  - XXS–XXL: field.
  - 7/14/28 days: notes.
- **Peppermayo:**
  - Hollywood Baby Tank Top $45, Ellington Long Sleeve Top $98, 313 of 314 at regular price: price note.
  - Aaliyah Bustier Top (Cream Polka Dot) $68: product-images.json.
  - US 0–18: field.
  - $99, duties and taxes included: notes.
  - 14 days refund, 21 credit or exchange, full price only: notes.
- **I.AM.GIA:**
  - Blare Boob Tube $49, Buffy Latex Corset $179: price note.
  - Ina Tank $59, Zoya Top $79: product-images.json.
  - US warehouse, duties covered: notes.
  - XXS–XL: field.
  - 30 days from purchase, $10 refund label, free label for credit: notes.
  - Showpo to US 16: showpo `size_range`.
- **SABO:**
  - Azalia Tank and Illaria Top $60.84, Orion Top $283.14, median $88.92: new price note.
  - Summer dresses, playsuits and two-piece sets: meta.
  - Duties included, free over $175: notes (shipping page).
  - 14 days from delivery, $20 label, back to Australia, up to six weeks, no exchanges: notes (returns page).
  - XXS–XXL, XXXL on 145: price note.
- **Motel Rocks:**
  - Halternecks the largest type, Kindos Halter Top $36, Arsenia Off Shoulder Top $98: price note.
  - Miruna Halterneck Top $52: product-images.json.
  - London and Bali: `production_model`.
  - Vintage and printed: `known_for`.
  - XXS–XXL: field.
  - $95: field.
  - 30 days from dispatch: notes.
  - Oh Polly Modal Halterneck Tank Top $42: oh-polly price note.
- **Petal & Pup:**
  - Tulla Graphic Tee $55, Paolina Lace Tee $59: product-images.json.
  - 338 of 339 under $100: price note.
  - Australian: `hq_country`.
  - Free from $80, $9.95 under: notes.
  - XXS–XXL, 0–16: `size_range`.
  - 30 days from delivery, refund, credit or exchange, $9.95 off refunds: notes.

Intro: "most start under $50" means 10 of the 11 priced picks start below $50 (SABO starts at $56.16).

FAQ, from Ahrefs `keywords-explorer-matching-terms` (questions, US):
- "does white fox do returns" (100)
- "where can i buy white fox hoodies" (100)
- "where is white fox from" (50)

Skipped because no stored fact answers them: "who owns white fox" (250), "is white fox fast fashion" (90), "is white fox korean" (80). Marvel and Minecraft "White Fox" questions are off-topic. People also ask wasn't needed.
