# Review: brands like MeUndies (steps 2–5)

Produced 2026-10-29 end to end per `pipeline/run-page.md`. Author: Ash. Category C = `underwear`
(Underwear). MeUndies' own title is "Comfortable Underwear, Loungewear & Pajamas", its help center
leads product questions with undies, and every outside source compares men's boxer briefs. Prices
compare single-pair men's boxer briefs. Multipacks are left out wherever a brand sells single pairs.
Pair of Thieves sells packs only, so it shows pack prices (see `category.why`).

## Enrichment summary

- **SERP** (Ahrefs `serp-overview`, US, 4 calls): `brands like meundies` and `meundies alternatives`
  returned results. `stores like meundies` and `similar to meundies` returned none.
  - **Top 10, readable editorial pages: one.** That was Gentleman's Gazette (best under $30, Oct
    2019, reviews MeUndies alongside the others).
  - **Not read:** Insider, NY Mag Strategist and Business Insider (WebFetch can't fetch them),
    pebblemag and knoji (403), and 3 Reddit threads (refused, no workaround tried).
  - **Dropped:** My Subscription Addiction (a subscription-box directory with no reasons),
    Thingtesting (its list renders empty), buy-from-europe (a templated directory), SilkCut (a
    competitor's own page), and CB Insights, Comparably, Similarweb and Craft (business data).
  - **Beyond the top 10:** I read two pages from the same pull because the top 10 had only one
    readable page: bestunder250 "Underwear Like MeUndies" (position 28) and Honest Brand Reviews,
    Mack Weldon vs MeUndies (position 92). **Flagged in `human_check`.** Every pick keeps at least
    one source without them.
- **Co-stocking:** Target stocks MeUndies (45 results). Its Men's Underwear brand filter lists
  MeUndies next to Pair of Thieves, PSD, Cariloha, Minus33, Hanes, Jockey and others, so those count
  as `co_stocked` evidence. Nordstrom no longer lists MeUndies.
- **Pool:** 22 `public.brand_relationships` rows, all women's lingerie or swim labels. None has
  outside evidence, so all were added with `sources: []`.
- **Anchor:** meundies.com answers 429 with a **Vercel bot challenge** to both WebFetch and curl. I
  didn't try to get around it.
  - `status: verified` rests on the official help center (help.meundies.com, served today) and
    Target's live listing.
  - Recorded: XS–4XL, 45-day returns (refund only), free US shipping over $75, ships to US, CA, GB
    and AU.
  - **No prices**, because prices come only from the store. `human_check` #1.
- **Brand files:** 8 merged through `merge_brand.py` from `patches/meundies/` in my scratchpad: meundies, mack-weldon,
  saxx, bn3th, pair-of-thieves, psd, cariloha, minus33 (all new). I made one `--overwrite known_for`
  fix on mack-weldon, because the apostrophe in "Men's" tripped the quote lint. `npm run lint:facts`
  passes.
- **Picks: 7.** The target was 10–15. I didn't pad the list.
  - **Blocked:** Calvin Klein and Hanes (403, 2 sources each), Jockey (403) and T-Bô (503).
  - **Rejected:**
    - RibbedTee became UnderFit and sells undershirts only.
    - ExOfficio's boxer briefs are all marked down.
    - Obviously states no HQ and accepts no change-of-mind returns.
    - Champion has 2 items.
    - Pact and Fruit of the Loom showed no readable products.

## Gate result (Check step)

`npx tsx` scratch script: `pipelinePages()` from `lib/pipeline.ts`, `judgeBrandsLikePage`,
now = 2026-10-29.

```
anchor missing: [ 'price:underwear' ]
mack-weldon 1 null []
saxx 2 null []
pair-of-thieves 3 null []
bn3th 4 null []
psd 5 null []
cariloha 6 null []
minus33 7 null []
indexable: false renders: 7 reasons: [ 'anchor missing: price:underwear' ]
title: 7 Brands Like MeUndies for MicroModal Underwear
```

**Gate: all 7 picks render. The page isn't indexable because the anchor has no price** (store
behind a bot challenge). Every `price_relation` is null on purpose, because the gate allows no label
without both prices. Once a human records MeUndies' boxer brief range, set the labels and the page
clears. `npm test`: 29 pass, 0 fail.

## FAQ sources (Ahrefs)

One call: `keywords-explorer-matching-terms`, keywords "meundies", US, terms=questions, volume desc,
limit 40.

| Used | Question (US volume) | source_query |
|---|---|---|
| Yes | What are MeUndies made of? (100) | `what are meundies made of` |
| Yes | How do you cancel a MeUndies membership? (150) | `how to cancel meundies subscription` |
| Yes | How long does MeUndies take to ship? (20) | `how long does meundies take to ship` |
| Yes | Where can you buy MeUndies? (10) | `where can you buy meundies` |

**Skipped:**
- Asking for a verdict or opinion: "are meundies good", "is meundies legit", "worth it", "is it
  ethical", "why so expensive".
- No stored fact: "who owns meundies" and "where are meundies made".
- No price read: "how much is the membership".
- Implies fit experience: "do meundies run small".

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A "brands like MeUndies" list for US shoppers is the site's purpose. |
| G2 | PASS | Built from store reads no single SERP page has: regular-price single-pair ranges, size runs, free-shipping thresholds, return rules, and named products with prices. |
| G3 | PASS | Specifics: Pair of Thieves' 101-day any-condition returns, BN3TH's contact-first 21-day rule, Mack Weldon's one-pair Try On Guarantee, PSD's $5 return fee, Cariloha's walk-in showrooms, Minus33's $50 shipping threshold. No fit or feel claims. |
| G4 | PASS | No worn, tried or tested claims. I removed every "soft" feel claim (product names excepted). Ash's bio untouched. |
| G5 | PASS | `author: "Ash"`. Not YMYL. |
| G6 | PASS | Every number traces to a stored field (table below). BN3TH's return window conflicts between two of its own pages (21 vs 30). I stored the stricter 21 and flagged it. |
| G7 | PASS (N/A) | Not YMYL. |
| G8 | PASS | "7 Brands Like MeUndies for MicroModal Underwear" gives the real count, and every pick sells boxer briefs. |
| G9 | PASS (partial) | Each body sets sizes, returns and shipping against MeUndies' XS–4XL, 45 days and $75. There's no price comparison with MeUndies itself, because its price isn't stored. |
| G10 | PASS (partial) | Gives price, sizes, US shipping and returns for each pick, plus a decision guide and the anchor's own terms in the FAQ. "Is it cheaper than MeUndies?" stays open until the anchor price is in. |
| G11 | PASS | Intro is 64 words: the reader's moment, what they'd change, and what the list gives. No process. |
| G12 | PASS | All prices from 2026-10-29 (`checked_at`). No dates in the copy. |
| G13 | **FAIL** | My honest estimate is Medium (below). Copy can't fix it: the evidence is thin and dated, and three picks rest on co-stocking alone. |
| G14 | PASS | Affiliate links go through /go/ with the disclosure (template). No implied testing. |
| G15 | PASS | 0 em dashes, 0 semicolons, no Markdown. Bodies run 118–134 words, nothing over 30 words, and endings vary. |

**Counts:** PASS 14 · FAIL 1 (G13) · BLOCKED 0.

**Estimated Page Quality:** Medium. The store data for all seven picks is real, dated and specific,
and the copy compares picks with each other. But the editorial evidence is three pages from
2019–2023, and Calvin Klein and Hanes, the two best-sourced misses, are blocked. The list is also
short of page one's length.

**Estimated Needs Met (dominant intent):** Moderately Meets. The biggest lift is the MeUndies price
range (unlocks price labels and indexing). After that, read the Reddit threads and the blocked
Insider and Strategist pages, then verify Calvin Klein and Hanes.

## Voice check (voice.md "What we never write")

- **Process narration:** none. No "we checked", dates, sources or "the brand says". Quoted
  positioning is given as the brand's own ("the pair it says made it famous").
- **Spreadsheet sentences:** none. Counts appear only with a reason ("about $5 a pair", "the
  shortest window here, and you have to contact it first").
- **Verdicts:** none. Each catch is about one attribute (sizes, returns, fabric, threshold).
- **Invented experience:** none. Hype: none.
- **Moves present:**
  - each pick opens answer-first with a named product and its price
  - why each fact matters (101 days vs MeUndies' unworn-only 45; buy Cariloha once you know your
    size because you pay return shipping both ways)
  - one thing taught per brand (Mack Weldon and SAXX line names give the fabric, BN3TH line names
    map to price)
  - a pointer to another pick in every body
  - use-case "Best for" lines
  - a How to choose guide by support, price, fabric and size

## AI-voice scan

| Pattern | Where found | Fix |
|---|---|---|
| §1 binary contrast | SAXX "fabric name, not the price"; Minus33 "rather than another modal pair", "not a drawer refill" | cut |
| §3 rule of three | Intro "pouch, return window or lower price"; closing "PSD…, Cariloha…, and Minus33…" | cut to two / split |
| §5 anaphora across bodies | "The catch is…" opening three third paragraphs | varied ("Sizes are the limit", "Time is the trade-off", "Returns are the weak spot") |
| §22 rhetorical setup | Minus33 "the odd one out, and that's the point" | "the wool option on this list" |
| §24 colon reveal | BN3TH "the way in: LENZING…" | split into two sentences |
| §34 emphasis crutch | Pair of Thieves "the real draw" | "the main reason to pick it" |
| §40 "From X to Y" | Intro price span; PSD collabs | "priced between…"; "such as…, plus…" |
| §8 length | SAXX sentence of 31 words | split |
| Feel claims | "soft boxer brief", "MeUndies' softness", "soft underwear", "soft basics", "softness" | replaced with fabric or plain wording |
| Overclaims caught in fact check | Mack Weldon "every boxer brief it sells is a single pair" (it sells packs too); BN3TH "cheaper than SAXX" (SAXX starts at $25); SAXX "most styles XS–XXL" (XS on about half); Minus33 "priciest pick" (SAXX tops at $45); Cariloha "better known for sheets" | all reworded to the stored fact |
| Smell Test | Each body is built on that brand's own lines and terms. None would fit another entry unchanged. | — |

## Fact trace

Brand files `data/brands/{slug}.json` (`prices[underwear].note`, `notes`). Page file
`data/pages/meundies.json`.

| Claim | Source |
|---|---|
| MeUndies 4XL on some prints, 45 days unworn and unwashed, $75 free shipping for non-members | meundies size_range, returns_days, free_shipping_min_usd, notes[2], notes[4], notes[6] |
| Membership you can cancel or skip | meundies notes[8] |
| FAQ: MicroModal Core and FeelFree, Breathe nylon and spandex, All Over Lace recycled nylon | meundies notes[3] |
| FAQ: cancel path, skip or pause, prices return to original | meundies notes[8] |
| FAQ: 1–2 days to ship from California, 3–10 business days US, 1–2 weeks CA/AU/NZ | meundies notes[7] |
| FAQ: Target stocks men's, women's and kids' | meundies notes[1] |
| Intro: $14.99 three-pack, $45 single pairs | pair-of-thieves price min; saxx price max (Smooth Luxe $45) |
| Mack Weldon 18-Hour Jersey $30 "made us famous", $30–$44 singles, AIRKNITx $34 lightest, SILVER $40 Supima and anti-odor, Try On Guarantee, S–XXL, $150 | mack-weldon prices note, notes[1–2], size_range |
| SAXX Vancouver, pouch inventor, Vibe Xtra $36 best seller (EcoVero, BallPark Pouch, fly), $25–$45 singles, Smooth Luxe Micro Modal $45, DropTemp Cooling Cotton $33, S–XXL all, XS on many, 4XL on a handful, 30 days, First Pair Guarantee | saxx prices note, notes[0–4] |
| Pair of Thieves packs only, 3-pack $14.99 (about $5 a pair), $14.99–$26.99, 4XL on most (37 of 60), 101 days any condition with free US return shipping, cotton-spandex cheapest pack, SuperFit Sport polyester with mesh vents | pair-of-thieves prices note, notes[3] |
| BN3TH Essentials $26 ECOVERO viscose, cotton and spandex, Original 3D Pouch, Pro Flex $26, Classic Icon $32, Pro Ultra $38, top $38, XS–XXL waists 27–44, $75 North America, 21 days, contact first | bn3th prices note, notes[1–3] |
| PSD prints and collabs (Marvel, SpongeBob, Ja Morant), Modal Solids $28, mostly $25/$28, Luxe Modal $32, solids from $18, XS–XXL, $99, 30 days, $5 fee unless Silver or Gold | psd prices note, notes[2–4] |
| Cariloha bamboo-viscose, #1 seller sheets, $22 solids, $28 prints (Turtle Wave, Pineapple Skull), S–2XL, showrooms in HI, AK, ME and Key West, 30 days in packaging with buyer-paid shipping, $100 | cariloha prices note, notes[0–4]; site menu "Our #1 Bestseller" under Sheets |
| Minus33 family-owned New Hampshire, Lightweight 100% merino $44.99 for hiking and everyday wear, three styles all $44.99, XS–4XL, Woolverino merino-nylon-spandex Woolmark and OEKO-TEX, $50 | minus33 prices note, notes[0–1] |
| Closing: pouch brands from $26 and $25, ~$5 a pair, 101 days, XXL cap, 3XL/4XL | as above |
