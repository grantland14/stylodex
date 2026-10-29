# Review: brands like Chrome Hearts

2026-10-29, first run. Author: Ash. url_prefix `brands`, slug `chrome-hearts`.

## Category: rings, and why the anchor can't pass

Searches for this want Chrome Hearts' silver jewelry. Every editorial list on page one except one
eyewear list is about heavy silver (RetailBoss, Struga, the independent-makers half of
streetwear.directory), and rings are the piece those lists price side by side. So C = `rings`.

**Chrome Hearts sells no rings, or any jewelry, from its own online store.** chromehearts.com's shop
has Baccarat, Scents and Underwear (Boxers & Leggings, Intimates, Socks) only, and no official page
read names jewelry. So the anchor has no `rings` price, and the page can't be indexed. The only
fashion category its own store prices is underwear (Boxers & Leggings $95–$275, stored as the
`underwear` price). Nobody searching this wants underwear alternatives and no source names one,
so it wasn't used as C. Anchor status stays `verified` (live, sells underwear). No `off_category`.

## Picks: 9 renderable / 9 total

| Rank | Pick | Sources | Rings (own currency) | USD |
|---|---|---|---|---|
| 1 | Bill Wall Leather | 3 (streetwear.directory, Struga, RetailBoss) | $166–$42,806 (330) | same |
| 2 | The Great Frog | 3 (streetwear.directory, Struga, RetailBoss) | £130–£5,800 (223) | 172.74–7,706.80 |
| 3 | Hard Jewelry | 2 (Struga, RetailBoss) | $26.95–$372.95 (72) | same |
| 4 | Gaboratory | 2 (Struga, RetailBoss) | US$223–$2,290 (174) | same |
| 5 | Good Art HLYWD | 2 (streetwear.directory, RetailBoss) | $310–$6,825 (52) | same |
| 6 | Clocks and Colours | 1 (RetailBoss) | $69–$359 (108) | same |
| 7 | Werkstatt:München | 1 (Struga) | €175–€20,250 (100) | 194.83–22,544.33 |
| 8 | OSS | 1 (Struga) | €180–€660 (91) | 200.39–734.78 |
| 9 | Parts of Four | 1 (Struga) | €310–€12,340 (1,278) | 345.12–13,738.12 |

All `price_relation` are null (no anchor ring price). Ranked by sources, then lowest starting
price in USD. Ranges are each store's whole regular-price ring collection, gold and diamond pieces
included, so the tops are high. The copy names the silver entry pieces. FX: ECB 2026-10-28.

Not padded to 10. The next three each fail one rule: **Lone Ones** (2 sources, founded by Chrome
Hearts co-founder Leonard Kamhout, West Hollywood flagship, but its official site sells or prices
no rings), **AMBUSH** (rings listed, US shipping not confirmed), **King Baby** (Apart pool, rings
$145–$11,700, but no fetchable outside source). All three are in `human_check`.

**Sources.** Ahrefs had US SERP rows only for "brands like chrome hearts". Kept:
streetwear.directory, Struga (a competing silver brand that lists itself #1, so it doesn't count
for Struga itself), vieweyewear (eyewear only, no ring sellers), plus RetailBoss and two disco pages
found by WebSearch. Reddit, TikTok, Facebook and two forums (403) unread, with no workaround tried.
Five of nine picks rest partly or wholly on Struga, which is the weakest part of the page.

**Brand files** (all through `merge_brand.py`, patches in my scratchpad folder; `lint:facts`
passes): chrome-hearts updated; bill-wall-leather, the-great-frog, hard-jewelry, gaboratory,
good-art-hlywd, clocks-and-colours, werkstatt-munchen, oss, parts-of-four, lone-ones, ambush
created. Prices come from Shopify `products.json` (Gaboratory from its ocnk.net ring lists).
`ships_to` comes from each store's own `meta.json` `ships_to_countries`.

## Gate result (Check step)

`npx tsx` scratch script: `pipelinePages()` → `pickProblems`, `judgeBrandsLikePage`, now = 2026-10-29.

```
anchor missing: [ 'sizeRange', 'price:rings' ]
bill-wall-leather 1 null []   the-great-frog 2 null []   hard-jewelry 3 null []
gaboratory 4 null []          good-art-hlywd 5 null []   clocks-and-colours 6 null []
werkstatt-munchen 7 null []   oss 8 null []              parts-of-four 9 null []
indexable: false  reasons: [ 'anchor missing: sizeRange, price:rings' ]  renderable: 9
title: 9 Brands Like Chrome Hearts for Silver Jewelry and Leather
```

Every pick passes. The page renders `noindex` because Chrome Hearts sells no rings online.
`npm test` 29/29 pass.

## FAQ sources (Ahrefs `keywords-explorer-matching-terms`, "chrome hearts", questions, US)

| Question | Source query (volume) | Answer from |
|---|---|---|
| Who owns Chrome Hearts? | who owns chrome hearts (1,700) | chrome-hearts notes (Wikipedia, Complex/Chicago Tribune citations) |
| Where can you buy Chrome Hearts jewelry? | where to buy chrome hearts jewelry (150) | chromehearts.com shop nav + locations.html |
| Where is Chrome Hearts made? | where is chrome hearts made (200) | chrome-hearts notes (Wikipedia, V Magazine/WWD/WSJ citations) |

Skipped "why is chrome hearts so expensive", "is chrome hearts christian" and similar: no stored fact answers them.

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A "brands like Chrome Hearts" list for US shoppers is the site's purpose. |
| G2 | PASS | Store data no ranking page has: regular-price ring ranges, steel vs silver pricing, duties, sizing systems, return rules. No outside wording. FAQ answers come from stored facts. |
| G3 | PASS | Specifics: Hard Jewelry's $32.95 steel vs $52.95 silver Biohazard Ring, The Great Frog's prepaid duties and no-exchange rule, Werkstatt's French sizes and €50 non-EU return fee, Parts of Four's metal codes, OSS's all-sales-final. |
| G4 | PASS | No worn/tried claims. Ash's bio untouched. |
| G5 | PASS | `author: "Ash"`. Not YMYL. |
| G6 | PASS | Every claim traces (table below). |
| G7 | PASS (N/A) | Not YMYL. |
| G8 | PASS | Title uses the real count (9). Every pick sells rings online and ships to the US. |
| G9 | PASS | Silver-jewelry intent served. Bodies compare picks on price, returns, sizes and lead times. |
| G10 | PASS | Price, sizes, shipping, duties and returns per pick, a How to choose, and 3 FAQs incl. where to buy Chrome Hearts itself. |
| G11 | PASS | Intro 68 words, opens on the reader's problem (no rings online). Bodies open answer-first. |
| G12 | PASS | Prices read 2026-10-29. No dates in copy. |
| G13 | **FAIL** | Honest estimate is Medium (below). |
| G14 | PASS | No implied testing. Affiliate links via /go/ with disclosure (template). |
| G15 | PASS | 0 em dashes, 0 semicolons, no Markdown. Openers varied. |

**Estimated Page Quality:** Medium. The store data is real and specific, but the anchor can't be
compared on price, four picks rest on one source, and that source (Struga) is a competitor's blog.
Reddit (r/ChromeHeart), the strongest SERP evidence, is unread.
**Estimated Needs Met:** Moderately Meets. Biggest lifts: a human read of the Reddit threads, and
confirming Lone Ones (the most direct Chrome Hearts lineage) sells rings online.

## Voice check (voice.md "What we never write")
None present: no process narration or dates, no counts as the point (the one "widest range on this
list" in Clocks and Colours says why it matters), no verdicts, no invented experience, no hype.
"We" isn't used in bodies. "You" throughout. Brands are "it".

## AI-voice scan (ai-voice-avoid)

| Pattern | Found | Fix |
|---|---|---|
| Repetition | "is the one for / is the pick" opened 5 bodies | Gaboratory, Good Art, Werkstatt reworded |
| Sentences over 30 words | intro, closing, 7 body sentences | split |
| Unsupported claims | OSS "suits bigger hands than The Great Frog's letter sizes" (no conversion stored); BWL "covers a first ring and a lifetime one"; C+C "every ring" (some silver only); Hard "half" (14 vs 30) | cut or corrected ("under half", "most rings") |
| Rule of three | none left | — |
| Smell Test | Each body is built on that store's own products and rules | — |

## Fact trace

| Copy claim | Field |
|---|---|
| Chrome Hearts shop: underwear, scents, Baccarat, no jewelry; US boutiques | chrome-hearts `notes`, `copy_facts[0–1]` |
| Owners, founders, 1988, 1994 exit, made in Hollywood / Japan / France | chrome-hearts `notes` (Wikipedia), `copy_facts[2]` |
| BWL: Malibu 1985, crash, carves from silver block, cast in small numbers, made to order, Double Skull $216 open ring, $166 to >$40,000, no store | bill-wall-leather `notes`, `prices`, `us_stores`; `copy_facts[3]` |
| Great Frog: London 1972, Orchard St and Melrose stores, Small Skull £145, Skull & Crossbones £235 made to order silver, week to make, duties prepaid, UK sizes F½–Z+1, 28 days, no online exchange | the-great-frog `notes`, `size_range`, `returns_days`; `copy_facts[4–5]` |
| Hard: steel or .925, Biohazard $32.95/$52.95, DYT Coffin $42.95, Utah, US 3–13, 14 days | hard-jewelry `notes`, `prices.note`, `size_range`; `copy_facts[6]` |
| Gaboratory: Flat Bar US$223, Moon Face $2,223, 3–10 weeks, EMS $38.70, from-prices, wallet chains/wallets | gaboratory `notes`, `prices`; `copy_facts[7]` |
| Good Art: own LA foundry, Cigar Band $475 shape, Slim $385, free USPS Priority, US 3.5–14, 4–6 weeks / 3–5 days, 14 days credit, 20% fee | good-art-hlywd `notes`, `size_range`; `copy_facts[8–9]` |
| C+C: Salt & Bone $69/$129, Toronto, hand-carved in Bali, steel from $69, silver to $359, US 3–16 (widest of the nine), free >$100, 30 days, Shadow's Wake $289 | clocks-and-colours `notes`, `prices.note`, `size_range`; `copy_facts[10]` |
| Werkstatt: cross ring forged €385 winds twice, Lohmeyer 1996 master smith, own atelier, €175 band, French 49–68, €43, US duties on delivery, €50 fee | werkstatt-munchen `notes`, `size_range`; `copy_facts[11]` |
| OSS: Madrid, PSI €180, Centurion €200 hand-engraved, made to order, oxidized/black silver, €660 top, US 4–15, UPS 4–8 days, all sales final | oss `notes`, `prices`, `size_range`; `copy_facts[12]` |
| Parts of Four: free worldwide, duties paid, Crescent Rift MA €310, Sugerman 2011, Paris, MA / 18K / DIA codes, >€12,000, 14-day exchange/credit, Atelier NY and H. Lorenzo | parts-of-four `notes`, `prices`; `copy_facts[13]` |
| Prices "about $X" | each `prices` min/max_usd at ECB 2026-10-28 (£145 = $192.67, £235 = $312.26, €385 = $428.62, €175 = $194.83, €180 = $200.39, €200 = $222.66, €660 = $734.78, €310 = $345.12) |
| How to choose, Best for lines | restate the facts above only |
