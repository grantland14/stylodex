# Review: stores like Old Navy (new page, steps 2–5)

Built 2026-10-29. `url_prefix` stores, slug `old-navy`, anchor `kind: brand` (own label).
Category C = **jeans** (women's jeans as the like-for-like item): the store's own jeans page opens
"Famous jeans since '94. Now in sizes 00-30, petite and tall." Author: Ash. Copy written against
the new `voice.md`; older page files used for JSON shape only.

## Gate (lib/pipeline.ts → judgeBrandsLikePage, now = 2026-10-29)

- Renderable picks: **10 / 10**. Title: "10 Stores Like Old Navy for Affordable Clothing for the Family"
  (`known_for` was set by another run from the homepage title; see human_check).
- `pickProblems` returns `[]` for all 10.
- **Not indexable**: `anchor missing: imageUrl` only (no `/img/` asset yet; the coordinator's
  image step fixes it). Anchor is verified with jeans $34.99–$69.99 (41 styles), sizes, US
  shipping, 30-day returns.
- `npm test` passes (0 fail); `npm run lint:facts` ok.

## Picks

| Rank | Pick | Kind | Sources (Y/M/E/A/D) | Jeans price | Label |
|---|---|---|---|---|---|
| 1 | Gap | brand | M, E, D | $79.95–$99.95 (40 styles) | pricier |
| 2 | Target | retailer | Y, M | $28–$74.99 (page-1 sample) | similar |
| 3 | Banana Republic | brand | M, D | $120–$148 (10 styles) | pricier |
| 4 | J.Crew | brand | M, E | $148–$198 (existing row) | pricier |
| 5 | American Eagle | brand | M, D | none (all visible pairs marked down; sells_categories jeans) | none |
| 6 | Nordstrom Rack | retailer | M | $39.97–$79.97 (page-1 sample) | similar |
| 7 | Aeropostale | brand | M | $64.95–$69.95 (existing row) | similar |
| 8 | Everlane | brand | M | $88–$148 (existing row) | pricier |
| 9 | Madewell | brand | M | $148–$198 (existing row) | pricier |
| 10 | Alex Mill | brand | E | $225 (5 jeans) | pricier |

Y = GOBankingRates on Yahoo Shopping (Feb 2026), M = MoneyPantry (Jan 2024), E = Effortless Gent
(Nov 2021), A = MoneyLion on AOL (Jul 2026), D = disco brand directory (no author, Jul 2026;
human_check). Ranking: independent sources, then price-midpoint distance from Old Navy ($52.49).

Not picks (full list with reasons in the page file): **H&M** (5 sources) and **Zara** (3): 403 to
WebFetch and curl, and the parent sites don't confirm US stores or jeans. **TJ Maxx** (3),
**Marshalls** (2), **Ross** (2): verified via parent filings, but nothing official says they sell
jeans. **Uniqlo** (2): jeans page 503 twice. Forever 21: no regular-price jeans. Hollister, Urban
Outfitters, Walmart, Kohl's, Primark, Levi's, Abercrombie, JCPenney, PacSun: blocked or unconfirmed.
Kids' stores and the 26 pool-only brands: no outside source.

## Prices: method

- **Gap Inc. brands (Old Navy, Gap, Banana Republic)**: the category grid renders by script, so
  prices come from `api.gap.com/commerce/search/products/v2/cc`, the public endpoint the page
  itself names (`commerceProductsSearchUrl`), read with curl and the StylodexBot UA. Women's jeans
  only. Price = `regularPrice` for colorways not marked down (priceType R, or P = temporary promo
  without a "price as marked"/clearance flag); priceType M dropped. Almost every item carries a
  temporary promo, so this reading of "regular price" is in human_check.
- Target and Nordstrom Rack: page-1 WebFetch samples (clearance, "reg", "Previous Price" and
  promo-range tiles excluded).
- Alex Mill: full Shopify `products.json`, denim jeans only (corduroy excluded).

## FAQ sources (Ahrefs)

One call: `keywords-explorer-matching-terms`, "old navy", US, terms=questions, volume desc, limit 40.

| Used | Question (US volume) | Answered from |
|---|---|---|
| Yes | who owns old navy (500) | old-navy parent_company, notes (gapinc.com: Colma, 1994; combined bag) |
| Yes | what is old navy return policy (350) | old-navy returns_days, notes (returns JSON: 30/45/60 days, free returns, final sale) |
| Yes | does old navy have free shipping (300) | old-navy free_shipping_min_usd, notes (cid=3019: $50 members, $7 under, $9 nonmembers) |

Skipped (no stored fact): hours and holidays, price matching, price adjustments, returning Gap
items to Old Navy (the combined bag is stored, cross-brand returns are not), Apple Pay, pay,
military discount, "is old navy fast fashion" (opinion), going out of business, Super Cash.

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | "Stores like Old Navy" for US shoppers is the site's purpose; clothing only. |
| G2 | PASS | Ranking pages are name lists. This page has each store's real regular women's-jeans range, sizes, shipping and returns, read from the stores. FAQ answers come from Old Navy's own terms, not PAA text. |
| G3 | PASS | Specific decisions per pick (which line to start with, the shared Gap Inc. bag, Rack store returns vs $9.95 labels, Madewell hemming, AE's 60 days vs $75 shipping bar). No invented experience. |
| G4 | PASS | No first-person experience or testing; author Ash, bio untouched. |
| G5 | PASS | Author Ash with bio in `lib/authors.ts`. Not YMYL. |
| G6 | PASS | Every number traces to a stored field or note (fact trace below). |
| G7 | N/A | Not YMYL. |
| G8 | PASS | Title count = 10 rendered picks; every pick sells women's jeans and ships to the US. |
| G9 | PASS | Intent "where else to shop like Old Navy": answered with stores, sorted closest first, each with price and who it suits; comparisons across picks. |
| G10 | PASS | Price, sizes, shipping and returns per pick, plus a how-to-choose guide and three FAQs. |
| G11 | PASS | Intro 65 words, bodies 115–130 words, no preamble. |
| G12 | PASS | Prices and terms read 2026-10-29; the page carries the Last checked date. |
| G13 | PASS (narrow) | Beats the top pages on specifics (real prices, sizes, return windows). Weaker than ideal because H&M and Zara, the two most-named alternatives, are missing until a human verifies them. |
| G14 | PASS | No implied testing; affiliate disclosure is the template's. Criteria are stated in the method box. |
| G15 | PASS | No semicolons, em dashes, or sentences over 30 words; no near-duplicate wording across bodies. |

## Voice check ("What we never write")

None found: no process narration (no "we checked", dates, "its About page says"), no
spreadsheet sentences (counts only as reasons, e.g. "$7 under Old Navy's cheapest regular pair"),
no verdicts, no invented experience ("feels", "runs small"), no hype words. "It" for brands
throughout. One colloquialism ("the quiet win"). Removed in self-edit: "doesn't pool or stop
short" (fit claim with no fact), "the brand describes itself as" (attribution), "nearly three
times" (overstated; now "well over twice").

## AI-voice scan (ai-voice-avoid.md)

Fixed: two three-item lists (intro, Nordstrom Rack labels) cut to two items; no "whether you're...",
"elevate", "game-changer", "seamless", "dive in"; no paragraph-ending punchlines in a row; sentence
lengths varied. Remaining risk: "Here's the useful part" (Gap) and "Two things to know before
ordering" (J.Crew) are signposts; kept once each, different wording.

## Fact trace (copy → stored field)

- Intro: $28 → target price min; $225 → alex-mill price; "ships to US addresses" → ships_to US on all 10.
- Gap: Gap Inc. → gap.parent_company; denim history → gap notes (gapinc.com "heritage grounded in denim"); $89.95 items, $79.95 low → gap price note; shared bag → old-navy notes (cid=3019); $50 / 30 days → gap free_shipping_min_usd, returns_days; petite section → gap has_petite + price note; Old Navy top $69.99 → old-navy price.
- Target: $28 items, Universal Thread styles ≤$40, Wild Fable fits, Levi's $74.99 → target price note; $7 under → 34.99 − 28; 90 days / 365 days → target returns_days + notes; 2,000+ US stores → target notes (corporate.target.com).
- Banana Republic: $130 / $120 → BR price note; 1978 travel outfitter, cashmere/leather/linen → BR notes; 0–20, petite 00–12, long 4–12 → size_range; same bag → old-navy notes; Old Navy to 30 → old-navy size_range.
- J.Crew: Classic/Petite/Tall, waists 23–37, $158 barrel/slim-wide, $148–$198 → j-crew size_range + price note; 30 days, $7.50, $7, rewards free → j-crew notes.
- American Eagle: jeans-first homepage → AE notes (title); Curvy Fit → AE notes; 60 days, $5, $75 → AE notes; Old Navy $50 → old-navy free_shipping_min_usd; Aeropostale $25 → aeropostale free_shipping_min_usd.
- Nordstrom Rack: $40–$80, Levi's/Madewell, 501 '90s $49.97 vs $110 → rack jeans price note; 00–28W petite/plus → size_range; $89, 40 days, $9.95, free store returns → rack notes.
- Aeropostale: $64.95, $69.95 embellished, low-rise baggy → aeropostale price note; younger → notes (young adults and teenagers); 000–20 short/long → size_range; hoodies/graphic tees → known_for; $25 → free_shipping_min_usd; Universal Thread cheaper → target note.
- Everlane: cost transparency → production_model + notes; Way-High Curve $88 in two inseams, Heavyweight Boot Flare $148 → price note; 00–16 → size_range; 30 days from ship, $7 mail, free in store, $8 shipping, CA/GB/AU → notes.
- Madewell: $148 most, story begins with denim → price note (About); free hemming for Insiders → price note; petite/tall/curvy/plus 14W–24W → notes; J.Crew sister, same $148–$198 → parent_company + both prices; Insider-only free shipping, 30 days, CA/GB/AU → notes; Everlane $88 → everlane price.
- Alex Mill: $225, Jane 14 oz no stretch, Bessette/Violet made in LA, waists 24–32 → alex-mill jeans price note; 21 days, $200 → returns_days, free_shipping_min_usd; timeless not trendy, two New York stores → alex-mill notes.
- Closing: all figures above. FAQ: see FAQ table.

## Estimates

- **Estimated Page Quality:** High. Strongest reason: every pick carries its own verified
  regular women's-jeans price range and terms, which no ranking page has.
- **Estimated Needs Met (dominant intent):** Highly Meets for "where else to buy jeans and basics
  like Old Navy"; would be better with H&M and Zara verified (human_check 1–2), since searchers
  expect them.
