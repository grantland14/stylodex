# Review: stores like TJ Maxx (redo, steps 2–5)

Redone 2026-10-29 under the new store rules (US stores count via `us_stores`; `sells_categories`
when no online price is readable; parent-company official sources count; discount department
stores and outlets count). Author: Ash. Copy rewritten from scratch against the new `voice.md`.

## Gate (lib/pipeline.ts → judgeBrandsLikePage, now = 2026-10-29)

- Renderable picks: **12 / 12**. Title: "12 Stores Like TJ Maxx for Off-Price Brand-Name Fashion".
- `pickProblems` returns `[]` for all 12.
- **Not indexable**: `anchor missing: sizeRange, shipsTo, returnsDays, imageUrl, price:womens-clothing`.
  The anchor now passes `status` (verified from tjx.com + TJX's 10-K), but tjmaxx.tjx.com still
  serves TJX's "Something went wrong" page to WebFetch, so its sizes, shipping, returns and price
  can only come from a human (human_check 1). Every `price_relation` is null for the same reason.
- `npm test` 27/27 pass; `npm run lint:facts` ok.

## Picks

| Rank | Pick | Type | Sources (W/I/M/R) | How it passes the gate |
|---|---|---|---|---|
| 1 | Marshalls | off-price | 4 | TJX 10-K + tjx.com: verified, us_stores, sells womens-clothing ("family apparel") |
| 2 | Nordstrom Rack | off-price | 4 | store read: ships US, jeans price row (sample) |
| 3 | Bloomingdale's Outlet | off-price | 4 | Macy's, Inc. site + 10-K: 25 locations, clothing; bloomingdales.com 403 |
| 4 | Ross | off-price | 3 | Ross's own release on SEC: 1,952 stores, apparel for the family |
| 5 | Burlington | off-price | 3 | own site (Ladies dept, store directory) + own release on SEC |
| 6 | Sierra | off-price | 3 | TJX 10-K: 145 stores, apparel for the whole family |
| 7 | 6pm | off-price (online) | 3 | store read: ships US, jeans price row |
| 8 | Gabe's | off-price | 1 | own site: Ladies dept, 20-state locator |
| 9 | Dillard's | department store | 3 | own release on SEC: 272 stores incl. 28 clearance centers; site nav Women |
| 10 | Macy's | department store | 2 | macysinc.com + 10-K (Women's Apparel, Backstage 300+); macys.com 403 |
| 11 | Kohl's | department store | 1 | Kohl's 10-K: 1,153 stores, Women's line; site 403 |
| 12 | Target | discount store | 4 | target.com women's page + corporate.target.com (50 states) |

W = 247wallst (Jan 2024), I = Irreverent Gent (updated June 2026), M = MoneyPantry (Dec 2023),
R = RankRed (June 2026). M and R were found by WebSearch for "brands like tj maxx" (no Ahrefs SERP
for that keyword); the three Ahrefs SERPs are from this morning's run and were not re-called.
Ranking: same-type (off-price) first by source count, then department stores, then Target, per
run-page.md. Rejected with reasons in the page file: Saks OFF 5TH (online closed, locator shows no
stores to WebFetch), Walmart (bot check, corporate page doesn't confirm apparel), Urban Outfitters
(full-price), HomeGoods (home only), marketplaces, defunct HauteLook/Last Call, own-label and resale.

## FAQ sources (Ahrefs)

One call: `keywords-explorer-matching-terms`, "tj maxx", US, terms=questions, volume desc, limit 50.

| Used | Question (US volume) | Answered from |
|---|---|---|
| Yes | what is tj maxx (500) | tj-maxx founded_year, notes (10-K: family apparel, Runway, 1,348 stores) |
| Yes | who owns tj maxx (500) | parent_company, notes (TJX US banners, Marmaxx) |
| Yes | is tj maxx going out of business (350) | notes (1,348 vs 1,333 stores; 45 Marmaxx net new stores planned) |

Skipped (no stored fact): opening hours and holidays, restock days, Apple Pay, pay, Black Friday,
dogs, return policy, returning TJ Maxx items at Marshalls and gift cards across stores (nothing
from TJX states it), "is tj maxx closing" (ambiguous with closing time), "what does tj maxx stand for".

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | "Stores like TJ Maxx" for US shoppers is the site's purpose. Clothing and beauty only. |
| G2 | PASS | No outside wording. The substance is each store's own facts: store counts and states, departments, named products and prices, return rules, label structures (Kohl's own vs exclusive, Target own labels vs Levi's), Backstage inside Macy's. |
| G3 | PASS | Specifics a list reader doesn't get: TJ Maxx vs Marshalls department split from TJX's 10-K, $9.95 mail-return deduction vs free store returns, 6pm's no-exchange rule, Target's one-year own-brand returns, dd's DISCOUNTS, Sierra's former name. No hands-on claims. |
| G4 | PASS | No wear/try/test claims; Ash's bio untouched. |
| G5 | PASS | author "Ash". Not YMYL. |
| G6 | **BLOCKED (publish)** | Every sentence traces (below). But five picks (Marshalls, Sierra, Bloomingdale's Outlet, Macy's, Kohl's) and the anchor rest on parent-company sources because the stores refuse WebFetch; Nordstrom Rack's range is a sample (human_check 2–3). |
| G7 | PASS (N/A) | Not YMYL. |
| G8 | PASS | "12 Stores Like TJ Maxx…" is the real rendered count. |
| G9 | **BLOCKED (publish)** | Intent served (the usual answers: Marshalls, Ross, Burlington, Nordstrom Rack, Kohl's). The price comparison half needs TJ Maxx's own prices, which only a human can read. |
| G10 | PASS | The names a searcher expects are all here except Saks OFF 5TH (its locator shows no stores to us) and Walmart; HomeGoods is pointed to in the closing for home. |
| G11 | PASS | Intro states what TJ Maxx is and how the list is sorted; each body opens on the answer. |
| G12 | PASS | Store counts from filings for the year ended Jan 2026 or Q2 2026; prices checked 2026-10-29. |
| G13 | **FAIL** | Honest estimate is Medium (below): no images, anchor side empty. |
| G14 | PASS | Links via /go/, disclosure in byline, no implied testing. |
| G15 | PASS | 0 em dashes, 0 semicolons, no Markdown; endings vary; no sibling duplicate. |

**Estimated Page Quality:** Medium. Strongest point: each pick says what the store is actually good
for and how it differs from TJ Maxx and from the others, from the stores' own facts. Holding it
back: no images and no TJ Maxx price, sizes or shipping.

**Estimated Needs Met:** Moderately to Highly Meets. Fix that moves it most: a human read of
tjmaxx.tjx.com (price, sizes, shipping, returns), then `/img/` images.

## Voice check (voice.md "What we never write")

- Process narration: none ("we checked", dates as narration, "its About page says": 0). Claims are
  attributed only where they are the store's pitch ("what TJX pitches as", "what Ross puts at").
- Spreadsheet sentences: counts appear only with why they matter (Ross's 1,952 stores → "when your
  nearest TJ Maxx is a drive away"; Dillard's 28 of 272 → "treat a nearby center as a bonus").
- Verdicts, invented experience, hype: none.
- Moves present: answer-first openers, one teachable thing per store (TJX department split, Rack's
  comparable value, Kohl's label tiers, Target's own labels, Sierra's old name, dd's DISCOUNTS),
  a trade-off per pick, cross-pick comparisons (Burlington vs Ross on plus, 6pm vs Rack on shipping
  and returns, Backstage vs Dillard's clearance), use-case Best for lines, How to choose by shopping
  style.

## AI-voice scan (ai-voice-avoid.md)

Fixed: 11 sentences over 26 words split (§6, §8); four three-item name lists cut to two (§3);
claims with no stored fact removed in drafting (Dillard's centers as "leftovers", outlet stock
coming from Bloomingdale's stores, Backstage turnover "like TJ Maxx", Burlington "before Ross" for
plus, "comparable value isn't a promise"). Remaining, judged fine: two colon setups (Target, Gabe's),
one "isn't X, but" (Kohl's, a factual store-type contrast). No §13/§14 words.

## Fact trace (copy → stored field)

| Claim | Source field |
|---|---|
| TJX pitch 20%–60% under full-price stores | tj-maxx notes (tjx.com) |
| TJ Maxx: jewelry, accessories, The Runway, select stores; 1,348 stores; founded 1976 | tj-maxx notes (10-K, tjx.com), founded_year |
| Marshalls: TJX, family apparel + home, 1,255 stores, full line of shoes for women/men/kids, broader men's, "shop both" | marshalls notes (10-K, tjx.com) |
| Nordstrom Rack: MANGO $15.38, Akris $419.97, Levi's/PAIGE, comparable value, 00–28W petite/plus, free over $89, 40 days, $9.95 per label, free store returns | nordstrom-rack prices[].note, size_range, notes |
| Bloomingdale's Outlet: 25 stores coast to coast, clothing/accessories/home for less, luxury to contemporary, owned by Macy's, Inc. | bloomingdales-outlet notes, parent_company |
| Ross: 1,952 stores in 44 states, family name brands and designer, 20–60%, no online store, stock varies, dd's 376 stores in 23 states, lower priced | ross-dress-for-less notes |
| Burlington: Coats/Ladies/Plus/Juniors/Kids/Baby depts, $69.99 coat, $19.99 dress, up to 60%, in-season branded, 1,287 stores in 47 states, no online clothes | burlington notes |
| Sierra: active/outdoor apparel, shoes, gear for the family, camping/fishing, home and pet, ex-Sierra Trading Post (2018), 145 stores, 24 planned, sierra.com | sierra notes (10-K) |
| 6pm: Zappos discount arm, Carhartt $17.99, Paige $279, mostly below MSRP, NYDJ/KUT/AG, plus to 26W, petite, 30 days, customer pays return postage, no exchanges, free over $100 | 6pm prices[].note, notes, size_range |
| Gabe's: up to 70% off vs original store prices, 20 states (NY, NJ, FL, MO, OK named), ladies'/men's/home/pets/gifts, no online shop | gabes notes |
| Dillard's: 272 stores, 28 clearance centers, 30 states, Sale and Clearance on site, Women/Juniors, Dillard's Exclusive | dillards notes |
| Macy's Backstage: 300+, store-within-store, 4 freestanding, "off price, on trend, arriving daily"; national and private brands | macys notes |
| Kohl's: moderately priced, 1,153 stores in 49 states, Sonoma Goods for Life/Croft & Barrow own brands priced under national, LC Lauren Conrad/Simply Vera Vera Wang exclusive, Sephora | kohls notes (10-K) |
| Target: 2,000+ stores in 50 states, A New Day/Universal Thread own labels, Levi's, $38 and $74.99 jeans, one-year own-brand returns | target notes |
| HomeGoods is TJ Maxx's home sister store | tj-maxx notes (10-K) |

## Publish conditions

1. Human read of tjmaxx.tjx.com: women's jeans price, sizes, US shipping, returns (unblocks indexing and price labels).
2. Human confirm the five parent-sourced picks are selling women's clothing on their own stores.
3. Full Nordstrom Rack jeans min/max; Saks OFF 5TH locator check.
4. `/img/` images (only Burlington and Ross have them).
