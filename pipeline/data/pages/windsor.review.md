# Review: stores like Windsor (steps 2–5)

New page, 2026-10-29. Author: Ash. url_prefix `stores`, slug `windsor`, category `dresses`.
Copy written against the current `pipeline/voice.md`.

## Gate (lib/pipeline.ts → judgeBrandsLikePage, now = 2026-10-29)

- Renderable picks: **7 / 7**. Title: "7 Stores Like Windsor for Special Occasion Dresses".
- `pickProblems` returns `[]` for all 7.
- **Not indexable yet**: `anchor missing: imageUrl` only (the coordinator's image step). Once
  `/img/brands/windsor` exists the page passes.
- `npm test` 27/27 pass; `npm run lint:facts` ok.

## Picks

| Rank | Pick | Source | Price row | How it passes |
|---|---|---|---|---|
| 1 | Princess Polly | E | $49–$119 (840 dresses, full feed), similar | US store, ships US, free over $50, US stores |
| 2 | Oh Polly | B | $50–$315 (729, full feed), similar | US store, ships US only |
| 3 | Showpo | E | none (30 of 3,161 rendered) | sells_categories dresses, ships from US warehouse |
| 4 | Fashion Nova | B | none (only sale prices rendered) | sells_categories dresses, ships US |
| 5 | PrettyLittleThing | B | none (grid client-side) | sells_categories dresses, ships US/CA |
| 6 | boohoo | B | none (grid client-side) | sells_categories dresses, ships US/CA |
| 7 | Revolve | E | none (16 of 21,498 rendered) | sells_categories dresses, ships US |

B = Bolivia's Home, "12 Stores Like Windsor" (Evelyn Edwards, updated Oct 8 2026).
E = E! Online, "The 10 Best Websites to Buy... Prom Dresses" (Jenny Lee, Mar 11 2024), in the AI
overview for "stores like windsor".

**Reviewer call needed on E.** It's a best-prom-dress-sites list with Windsor at #1, not a
"stores like Windsor" list. I counted it because it recommends the other sites for the same need
and ranks for the query. Showpo, Princess Polly and Revolve rest on it alone; without it the page
has 4 picks and goes noindex.

Ranking: every pick has one source (Lulus, the only two-source candidate, is unverified), so rank
follows price closeness to Windsor's $14–$199.90, then source order, with Revolve (multi-brand,
designer-heavy) last. All picks are the same type as Windsor (women's dress-led fashion stores)
except Revolve.

Thin evidence: only 2 editorial pages across the four keywords; "windsor alternatives" and
"similar to windsor" returned no SERP. Reddit (3 threads), TikTok, Facebook, YouTube and two dress
sellers' own listings were dropped.

Not picked (reasons in the page file): Lulus (403, human check, would be #1), Macy's and
Bloomingdale's (verified for womens-clothing only, dresses not confirmed by an official source),
Zara, H&M, Urban Outfitters, Free People (unverified in their brand files), ASOS (503), SHEIN
(nothing readable), ROMWE, Missguided (readable but no regular prices or policies), Rent the
Runway (rental), Amazon (marketplace), 12 pool-only brands.

## Anchor

Windsor verified from windsorstore.com: full Shopify feed (1,367 in-stock regular-price dresses,
$14–$199.90, median $64.90), Our Story (1937, Zekaria family, special occasion dresses since 1957,
350+ stores), locator, size guide (XXS–XL, US 00–15), the store's own policy search (ships to US,
CA, GB, AU and more) and product JSON-LD (30-day returns). Free shipping $75+ from the homepage.
hq_country US from RetailBoss and FashionUnited. `human_check` 1: dresses carry an
"HR-refund:14days" tag and the help centre is 403, so the 30 days may be store credit only for
dresses. The copy doesn't state Windsor's return window.

## FAQ sources (Ahrefs)

One call: `keywords-explorer-matching-terms`, "windsor store", US, questions, volume desc, 40 rows.

| Used | Question (US volume) | Answered from |
|---|---|---|
| Yes | what is windsor store (40) | windsor notes (Our Story, locator: 1937, 1957, 350+ stores) |
| Yes | does windsor have plus size in store (50) | windsor size_range, notes; pick size ranges |
| Yes | who owns windsor store (10) | windsor notes (Our Story: Zekaria family) |

Skipped (no stored fact): store pickup, Afterpay/Klarna/Apple Pay, returning online orders in
store (help centre 403), restocks, "is windsor store legit", store-near-me and mall-location
questions.

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | "Stores like Windsor" for US shoppers is the site's purpose; fashion scope. |
| G2 | PASS | No outside wording. Substance is each store's own facts: full-feed price spreads, size charts, refund vs credit windows, shipping lines, return charges. |
| G3 | PASS | Original data: Windsor/Princess Polly/Oh Polly ranges and medians from full feeds, Oh Polly's 7-day refund rule, Showpo's 7/30 split, PLT/boohoo $14.99 charge and credit bonuses, Fashion Nova's Comp. Value framing. |
| G4 | PASS | No wear/try/test claims. "Try it on the day it lands" is advice, not experience. Ash's bio untouched. |
| G5 | PASS | author "Ash". Not YMYL. |
| G6 | PASS | Every sentence traces (below). Unpriced picks say no price rather than estimate one. |
| G7 | PASS (N/A) | Not YMYL. |
| G8 | PASS | "7 Stores Like Windsor..." is the real rendered count. |
| G9 | PASS | Intent (where else to buy prom, homecoming, party dresses near Windsor's prices) served by budget and size. Lulus, the most expected name, is missing (403). |
| G10 | **BLOCKED (publish)** | Lulus and Macy's are the obvious missing names; both need a human check. |
| G11 | PASS | Intro says what Windsor is known for and how the list is sorted; each body opens on the answer. |
| G12 | PASS | Prices and policies read 2026-10-29. |
| G13 | **FAIL** | Honest estimate is Medium (below): 7 picks, 5 without a price, no images yet. |
| G14 | PASS | Links via /go/, disclosure in byline, no implied testing. |
| G15 | PASS | 0 em dashes, 0 semicolons, no Markdown; endings vary; no sibling duplicate. |

**Estimated Page Quality:** Medium. Strongest point: every pick says what it does better than
Windsor or another pick, from the store's own facts (refund windows, size charts, shipping lines).
Holding it back: 5 of 7 picks render without a price, and evidence is one source per pick.

**Estimated Needs Met:** Moderately Meets. What moves it most: a human read of Lulus (and Macy's
dresses), then images.

## Voice check (voice.md "What we never write")

- Process narration: none (no "we checked", no dates of checks, no "its About page says").
- Spreadsheet sentences: counts appear only with why they matter ("minis outnumber maxis more
  than two to one, so it's strongest for homecoming"; medians to say Oh Polly costs more).
- Verdicts, invented experience, hype: none.
- Moves: answer-first openers, one teachable thing per store (Oh Polly's refund clock, Fashion
  Nova's Comp. Value, PLT's discount footnote, Revolve shop-by-brand), trade-offs on a specific
  attribute, picks compared with each other (Princess Polly → Oh Polly, Fashion Nova → PLT/boohoo,
  boohoo → Princess Polly's stores, Revolve's LIONESS → Princess Polly), use-case Best for lines,
  How to choose by budget then size.
- Contractions throughout; brands are "it".

## AI-voice scan (wildcard-seo reference/ai-voice-avoid.md)

Fixed before saving: "The catch is" used three times (kept once, PLT); "the useful thing to
know" / "the useful move" (cut); a 35-word sentence with a rule-of-three list in boohoo (split);
"show the kind of long dress it does well" (praise without a fact, replaced with a price
comparison). Remaining: no em dashes, no semicolons, no "whether you're", no closing summaries.

## Fact trace

| Copy | Field |
|---|---|
| Intro: special-occasion dresses for decades, most under $100 | windsor notes (Our Story 1957; RetailBoss "go-to"), price note (92% under $100) |
| PP: under $100, max $119, Kaylanie $69, Sura $119, minis 2:1 | princess-polly prices[dresses] + note (588 minis, 223 maxis) |
| PP: Windsor typical ~$65 | windsor price note (median $64.90) |
| PP: US 0–12, Curve to 20, US stores, free over $50 | princess-polly size_range, notes |
| Oh Polly: corset/fishtail, gowns to $315, Fishtail Gown $85, median $120 | oh-polly prices[dresses] note |
| Oh Polly: UK, designs and makes its own, US store in dollars, XXS–XXL | oh-polly notes (About, meta.json), size_range |
| Oh Polly: refund 7 / exchange 14 / credit 28 | oh-polly notes (returns page) |
| Showpo: Pietra $99.95, Alexandria $199.95, Sydney 2010, US warehouse, $100/$9.95, US 0–16, Curve, 7/30 days, 110% credit | showpo notes, size_range, free_shipping_min_usd |
| Showpo: sits where Windsor's formal dresses do | windsor price note (long dresses $38.90–$199.90) |
| Fashion Nova: Plus+Curve, $75 / $6.99, 2006 LA store, Beverly Hills, US/CA/UK/AU, Comp. Value | fashion-nova notes, ships_to |
| PLT: petite 00–12, plus 12–24, tall, shape; Manchester 2012, Boohoo Group; $9.99, no free line; footnote; 21 days, $14.99 | prettylittlething notes, parent_company |
| boohoo: US 0–26, petite/tall/plus; 21 days, $14.99, 20% vs 10% credit; $10.99, no tariff charges, 6–8 days | boohoo notes, prettylittlething notes |
| Revolve: free shipping and returns, LIONESS Original Sin $69, MAJORELLE Tracy $328, XXS–4X, 30/60 days, gowns over $200 | revolve notes (homepage header, returns, dresses page), size_range |
| Revolve: LIONESS at Princess Polly | princess-polly price note (vendors include Lioness) |
| How to choose | as above |
| FAQ | windsor notes (Our Story, locator), size_range; pick size ranges |
