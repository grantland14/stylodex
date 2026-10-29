# Review: stores like Rainbow (`/stores/rainbow`)

Run 2026-10-29. Author: Ash. Category: dresses. 14 picks, all renderable.

## Anchor status
Rainbow (Rainbow Shops) is **trading**. rainbowshops.com is a live Shopify store (704 women's dresses
and 206 plus-size dresses in its public feeds, collections updated 2026-10-29), and its store locator
and FAQ say it runs more than 800 stores across the US, Puerto Rico and the US Virgin Islands.
Wikipedia: founded 1935 in New York City, HQ East New York, Brooklyn, privately held by the Chehebar
family. Status `verified`, kind `retailer` (about two thirds house label, plus Almost Famous, Iris,
Madden Girl and others). No closed-store rules apply.

## Category
`dresses`. The brief asks for a product type, and `womens-clothing` already carries a different
like-for-like item on other pages. Google's sitelinks for "stores like rainbow" are Clothing, New,
Tops and Dresses; Ahrefs top pages put /collections/womens-dresses (top keyword "rainbow dress",
4,100/month) and /collections/pink-dresses among its leading product-type pages. Bodysuit pages draw
more traffic, but from generic "bodysuit" searches. Rainbow's regular-price dresses: $7.99–$39.97
(183 of 704 at full price; plus dresses $12.99–$29.97).

## Check (lib/pipeline.ts + judgeBrandsLikePage, now = 2026-10-29)
```
indexable: true reasons: [] rendered: 14 / 14
every pick: pickProblems = ok
title: 14 Stores Like Rainbow for Affordable Plus Size & Women’s Fashion
```
`npm run lint:facts`: ok.

## Evidence (honest note)
The four Ahrefs SERPs held no readable editorial list: two keywords returned nothing, and the rest
were Reddit (not read), Facebook posts (title only), the anchor, storeslike.com (templated, dropped
as on the Charlotte Russe page), CB Insights (company-database competitor list) and unrelated pages.
Five editorial lists found by WebSearch were read: clothedup (2023), etechshout (2024), plaintips
(undated, old), joingerald (2025), soxy (undated, low quality; its rue21, 2020AVE and American Eagle
mentions are not counted). Eight picks rest on one or two sources. The evidence is real but thin.

## G1–G15
| Row | Result | Evidence |
|---|---|---|
| G1 | PASS | Replacement-store search for a budget women's and plus-size chain, inside Stylodex's scope. |
| G2 | PASS | Regular-price dress ranges from each store's own feed, size ranges, shipping and returns terms. The lists that rank give store names and one-line blurbs only. |
| G3 | PASS | Concrete trade-offs per pick: no plus range and $100 free-shipping bar (Charlotte Russe), $14.99 return deductions (Boohoo, PLT), store-only (rue21, Citi Trends), Do Not Remove dress tags (Ashley Stewart), store-credit-only returns (Dressbarn), comparison-value pricing (Fashion Nova). |
| G4 | PASS | No first-person experience or testing claims. Author Ash, bio untouched. |
| G5 | PASS | Author Ash. Not YMYL. |
| G6 | PASS | Every number traces to a brand file (fact trace below). Title count = renderable picks. |
| G7 | N/A | Not YMYL. |
| G8 | PASS | known_for is Rainbow's own title, "Affordable Plus Size & Women’s Fashion"; the body covers both the cheap trend stores and plus sizes. |
| G9 | PASS | Intent: where else to buy cheap trend and plus-size clothes. Pick 1 answers it; "is it closing / who owns it / what kind of store" handled in the FAQ. |
| G10 | PASS | Prices, sizes, shipping and returns per pick, a decision guide, and the anchor's own shipping in the FAQ. |
| G11 | PASS | Intro 64 words, no preamble. |
| G12 | PASS | Every price and policy read 2026-10-29; the template shows the date. One older official fact: Citi Trends' dresses rest on its April 2024 10-K (human_check). |
| G13 | PASS (estimate) | The ranking lists (clothedup, etechshout, soxy) give no prices, sizes or terms, and include closed stores (Topshop, Deb Shops, Wet Seal). This page gives verified, current numbers for every live pick. |
| G14 | PASS | No sponsored framing; affiliate links go through /go/ with the template disclosure. No implied testing. |
| G15 | PASS | 5-word shingle overlap with sibling pages' bodies for the same brands is 9% at most (Old Navy vs loft). |

- **Estimated Page Quality:** High. Strongest reason: real regular-price ranges and terms for every pick, which no ranking page has.
- **Estimated Needs Met:** Highly Meets for "stores like Rainbow"; better with H&M or Shein verified, since searchers expect them.

## Voice check (voice.md "What we never write")
None present: no process narration (no "we checked", dates, "its page says"), no count as the point of
a sentence (590 stores and 400+ stores each sit with why they matter), no verdicts on brands, no
invented experience, no hype words. Brands are "it". No semicolons, em dashes, bold or italics.

## AI-voice scan (ai-voice-avoid.md)
Fixed: seven binary contrasts ("not one night out", "not a lucky break", "rather than a price",
"not the percentage", "not a weekend top-up", "rather than going-out pieces", "more than a hunt"),
one three-part intro list (cut to two), two sentences over 30 words (Target, Ashley Stewart, split).
Removed unverified comparisons: "Rainbow has neither" petite nor tall, "Rainbow doesn't offer at
all", Charlotte Russe "undercuts Rainbow" (Rainbow's cheapest is $7.99), Fashion Nova "past a 24"
(no Fashion Nova size range stored), Target "doesn't list a plus range", Old Navy Occasion "line tops
out", "figure-hugging" (an outside list's phrase, replaced with Fashion Nova's own "bold, fearless").
Left as is: a few sentences open with "So", spread across picks.

## Fact trace
- Intro: under $40 = rainbow prices.dresses max 39.97; XS to 4X = rainbow size_range and homepage meta.
- Charlotte Russe: $10–$20, Dolman Eyelet Mini Dress $10, Printed Scoop Neck Mini Dress $12.99 = brand prices + product-images.json; about 190 stores, online returns in store, rarely restocks (FAQ), XL ceiling, no plus, $100 = charlotte-russe notes; Rainbow $75 = rainbow free_shipping_min_usd.
- Boohoo: US 0–26, petite, tall, 70% banners and disclaimer, $10.99, 6–8 days, no tariff charges, 21 days, $14.99 = boohoo notes. Fashion Nova LA, $75 = fashion-nova notes.
- Forever 21: $24.99 full price, Satin Lace Cutout Mini Dress $24.99 (product-images.json), markdowns from $14.98, XS–XXL + plus section, stores closed, online only, $9.99 returns, clearance final, $50 = forever-21 prices/notes; Rainbow 1X–4X collection = rainbow notes.
- Old Navy: $34.99 High-Neck Jersey Mini Swing Dress, $59.99 The Occasion maxi = price note; 00–30, petite, tall, 49 states, 30 days, members free over $50 = old-navy notes.
- rue21: YM Inc., sister of Charlotte Russe, women's dresses and men's apparel, lookbook and store locator only, "fashion at better prices" = rue21 notes; Charlotte Russe 48 contiguous states = charlotte-russe notes.
- Citi Trends: off-price, about 590 stores in 33 states, juniors/missy/plus, own and national labels = citi-trends notes (2026 10-K); up to 50% less = homepage meta; racks change = 10-K "always-changing" + "items will vary by store"; 30 days with receipt and tag, clearance final = refund page; dresses = 2024 10-K.
- Lane Bryant: 10–40, 400+ stores, 40% off promo on most dresses = lane-bryant notes; Ashley Stewart 36 and $44.50 = ashley-stewart.
- PrettyLittleThing: US 00–24, petite/tall/plus, Manchester, Boohoo sister, $9.99, no threshold, 21 days, $14.99, 70% banner note = prettylittlething notes; Rainbow bodycon collection = rainbowshops.com collections.json (womens-bodycon-dresses).
- Target: own labels on the dress page, $28 Wild Fable Flocked Dot Ruffle Mini Dress, $52 A New Day Faux Suede Drop Waist Midi Dress, 90 days, 365 days on Target brands = target prices/notes.
- Ashley Stewart: 10–36, $44.50 Square Neck Bodycon Tank Dress, $59.50 A Line Ponte Dress, $79.50 max, free 30-day returns, Do Not Remove tag, 21 states, 28+ online only, $9.95 economy = ashley-stewart prices/notes.
- Fashion Nova: bold/fearless (About), Plus+Curve, US/CA/GB/AU, $75 free, $6.99, 3–7 days, Night Well Spent dress $34.99 vs $49.99, 2006 one LA store = fashion-nova notes; "full price on nearly every dress" = ashley-stewart price note (73 of 74 regular).
- Avenue: 14–32, 752 dresses, Lucia Plisse Maxi $99.99 vs $139.95, Stretch Cotton T-Shirt Maxi $29.99, 60 days, $10.99, e-gift free = avenue notes; Rainbow plus rail 206 = rainbow notes.
- Woman Within: 12W–44W, S–8X, comfortable casual, knit and crinkle dresses, Thermal Knit A-Line $44.39 vs $73.99, 60 days, $10.99 = woman-within notes.
- Dressbarn: $74.95 Women's Tweed Fit & Flare, $388 Pretty Petals Mesh Cocktail Dress, XS–XL, 4–18, 0X–5X, petite, 48 states, 30 days store credit, return postage = dressbarn prices/notes.
- Closing: figures above. FAQ: 800+ stores and territories, $75 = rainbow notes; Chehebar family, Brooklyn 1935 = Wikipedia note; sizes, new stock, under $40 = rainbow; 3–7 days, ship-to-store free over $15 and about 2 days extra = shipping policy note.

## FAQ sources
All four from one Ahrefs keywords-explorer-matching-terms call (questions for "rainbow shops", "rainbow store", "rainbow clothing", US): "is rainbow shops going out of business" (20), "who owns rainbow shops" (70), "what kind of store is rainbow" (20; also a People also ask question on the "stores like rainbow" SERP), "how long does rainbow shops take to ship" (20). "is rainbow shops legit" (100) skipped: the stored facts can say it's the official store but not judge legitimacy.

## Rejected (see page file)
H&M (3 sources), Topshop (3), Shein, ASOS, Nasty Gal, Deb Shops (2 each), American Eagle, Maurices,
2020AVE, Torrid, Wet Seal, Lands' End, Gymboree (1 each).
