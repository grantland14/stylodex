# Review: stores like Charlotte Russe (`/stores/charlotte-russe`)

Run 2026-10-29. Author: Ash. Category: dresses. 13 picks, all renderable.

## Anchor status
Charlotte Russe is **trading**, so the closed-store rules don't apply. charlotterusse.com is a live
Shopify store (861 products online), and its own locator (`/apps/api/v1/stores`) lists 191 Charlotte
Russe stores in 34 states plus Puerto Rico. Wikipedia: Chapter 11 in February 2019, all stores
closed, bought by Toronto-based YM Inc. in April 2019. Status `verified`, kind `brand` (own labels
Stitches and Urban Ladies, plus licensed lines). hq_country CA (YM Inc. and the CR Clicks Ecomm Inc.
footer address, both in Toronto).

## Check (lib/pipeline.ts + judgeBrandsLikePage, now = 2026-10-29)
```
indexable true reasons [] renderable 13 of 13
every pick: pickProblems = []
title: 13 Stores Like Charlotte Russe for Trends at Unbeatable Prices
```
`npm run lint:facts` ok. `npm test` passes.

## G1–G15
| Row | Result | Evidence |
|---|---|---|
| G1 | PASS | Replacement-store search, inside Stylodex's scope (women's fashion). |
| G2 | PASS | Regular-price dress ranges from each store's own feed or listing, sizes, shipping and returns terms. The ranking pages give none of these. The rue21 sister-store link (same owner, same Stitches label in both feeds) appears on no ranking page. |
| G3 | PASS | Concrete trade-offs per pick: VIP membership (JustFab), store-credit-only returns (AMIClubwear, Lucy in the Sky), $14.99 return fees (Boohoo, PLT), exchange-only (rue21), markdown-driven pricing (Forever 21, AE, Missguided). |
| G4 | PASS | No first-person experience or testing claims. Author Ash, bio untouched. |
| G5 | PASS | Author Ash. Not YMYL. |
| G6 | PASS | Every number traces to a brand file (below). Title count = renderable picks. |
| G7 | N/A | Not YMYL. |
| G8 | PASS | "13 Stores Like Charlotte Russe for Trends at Unbeatable Prices": known_for comes from the store's own meta ("unbeatable pricing", "latest ... trends"). |
| G9 | PASS | Intent: where else to buy cheap trend dresses. Answered by pick 1. "Is it still open" intent is handled by the FAQ. |
| G10 | PASS | Prices, sizes, shipping and returns per pick, plus a decision guide and the anchor's own terms in the FAQ. |
| G11 | PASS | Intro is 72 words. No preamble. |
| G12 | PASS | Every price and policy was read 2026-10-29. The template shows the date. |
| G13 | PASS (estimate) | The top 3 ranking pages (storeslikefinder unreadable, wholesale7, beautymag) are generic blurbs with no prices or policies. Four of them still list dead or absent stores (Topshop, Love Culture, Wet Seal, Nasty Gal). This page covers live stores only and gives real prices. |
| G14 | PASS | Affiliate links go through the template's /go/. No implied testing. Selection is from outside lists. |
| G15 | PASS | No sibling overlap. Each Best-for line is a different use case. |

Estimated Page Quality: High. Needs Met: Highly Meets for "stores like Charlotte Russe". Moderately Meets for readers who want the full catalog of 20–30 names, but those lists are padded with closed stores.

## Voice check (voice.md "What we never write")
- No process narration: none of "we checked", Stylodex, dates of checks, or "its About page says". "Its own advice is to size up" (Lucy in the Sky) states the brand's sizing advice as a fact and doesn't narrate our method.
- No spreadsheet sentences. "three to six times a Charlotte Russe dress" (Uniqlo) says why the gap matters.
- No verdicts on brands. I removed "too throwaway" (Lucy in the Sky) and "only dabbles in" (Windsor) because they were opinions with no fact behind them.
- No invented experience. No hype words.
- No semicolons and no em or en dashes in the prose. Every sentence is at most 30 words (I split six long ones).

## AI-voice scan (ai-voice-avoid.md)
- §1 "X rather than Y": two remain (Boohoo "judge the price you pay rather than the percentage", AE "watch the sale price rather than the tag"). Both are concrete advice, so I kept them.
- §3 rule of three: one remains, "homecoming, prom and formal gowns" (Windsor), which names the store's own occasion list. I rewrote the intro and the closing to avoid three-part lists.
- §34 importance flagging, §48 no-sacrifice claims, §49 mannered prose: none.
- Redundancy fixed: Boohoo's tariff line said the same thing twice, and "plain, everyday" was repeated in the Uniqlo body.

## Fact trace (copy → stored field)
- **Intro:** $10 and "nothing over $20" → charlotte-russe prices.dresses (34 regular, $10–$20). "Sold-out pieces rarely come back" → notes (FAQ: "we do not restock most of our items"). XL ceiling → size_range.
- **Forever 21:** $24.99 → prices.dresses (6 regular). Markdowns from $14.98 → price note. XS–XXL and plus section → size_range. Online only and US stores closed → notes (Wikipedia). Free shipping over $50 and $9.99 returns → notes.
- **Missguided:** $28.13 before markdown and mostly marked down → notes (19 of 20 rendered). Other labels in the listings → notes. $67.49, $4.49 and 30 days → free_shipping_min_usd, notes, returns_days. Bodysuits and swimwear final sale → notes.
- **Boohoo:** US 0–26 with petite, plus and tall → size_range, notes. Manchester, no tariff, $10.99, 6–8 days → notes. "70% off" banner and the former-prices disclaimer → notes. 21 days and $14.99 → returns_days, notes. Same group as PLT → parent_company.
- **Windsor:** $14 Velvet Rope dress, $199.90 top and most under $100 → price note (92% under $100). 1957 and 350+ stores in US/Canada → notes. XL (US 15) → size_range. Free shipping $75 → free_shipping_min_usd.
- **Rue21:** YM Inc. bought it in 2024 and reopened it → notes (Wikipedia). Stitches label → vendor in both stores' feeds. $16 maxi → rue21 notes (feed). About 120 stores, most in Georgia and Texas → notes (directory: 121, GA 12, TX 11). Men's clothes → Wikipedia and the store's meta. 14-day exchange, no refunds → notes.
- **PrettyLittleThing:** IT girl → known_for and About. 00–24, plus 12–24, petite, tall, maternity → notes. $9.99, 21 days, $14.99, store credit +10% → notes. 70% banner and disclaimer → notes.
- **American Eagle:** jeans headline and Curvy cuts → notes. Dresses mostly marked down about 31%, was $64.95, AE77 at $148 → notes. 60 days, $5, $75 → notes.
- **ModCloth:** $49 Circe, $329 Gunne Sax, 4X, Dangerfield and Orchid Bloom → price note. Marked-down dresses final sale → my modcloth note. $150 and $14 → notes.
- **AMIClubwear:** $11.50 Cami, $125.99 MABLE, Flying Tomato and KandyKouture, 3X → price note and size_range. LA → About. FREESHIP to the lower 48 → notes. 30 days, store credit, customer pays return postage → notes.
- **Lucy in the Sky:** LA design → page title and return address. $55.90 Ruched Fit and Flare → price note. Occasion menu and Ships in 24 Hours → notes. Small = US 2, size up → FAQ note. 14 days, store credit → returns_days, notes.
- **JustFab:** shoe-first and sells dresses → menu note. $49.95/month and skip between the 1st and 5th → notes. Free shipping $49 non-VIP vs $70 VIP, 60 days, Canada $9.95 → shipping note.
- **Uniqlo:** $59.90 Knitted Polo Dress → price note. Sale $19.90–$39.90 → price note (11 of 16 on sale). Fast Retailing and GU, 86 US stores, free shipping over $99 or with pickup, 30 days → notes. XXS–XL → size_range.
- **Target:** Wild Fable $28 Flocked Dot, A New Day $52 midi → price note. 90 days, 365 days for own brands → notes. Stores → us_stores.
- **Closing:** restates the facts above. "Target's 90 days and American Eagle's 60" → returns_days (JustFab's 60 days is omitted, not contradicted).
- **FAQ:** bankruptcy, closure, the April 2019 YM purchase and YM's other chains → Wikipedia notes. About 190 stores → locator (191). Returns and shipping → anchor notes.

## FAQ sources
One `keywords-explorer-matching-terms` call (questions, US). Queries used: "is charlotte russe still in business" (60), "who owns charlotte russe" (40), "does charlotte russe do returns" (50), "how much is charlotte russe shipping" (30). "is charlotte russe fast fashion" and "is charlotte russe good quality" were skipped because the stored facts can't answer them without a verdict.

## Things to know
- Uniqlo's dress range comes from 2 regular items. Target's and Lucy in the Sky's ranges are first-page samples. Charlotte Russe's own online dress assortment is small (35 in-stock dresses).
- Scripted requests used the UA `StylodexBot/1.0 (+https://stylodex.com)`, not the exact string now in run-page.md "Requests". No email or personal detail went into any request.
- Brand files written through merge_brand.py: charlotte-russe, missguided, lucy-in-the-sky, amiclubwear, justfab (new). Prices or notes added for modcloth and target. rue21 status corrected from unverified to verified with `--overwrite status`: it's a live store chain, and the earlier unverified status came from an empty jeans feed. lulus, torrid, shein, love-culture, gojane and romwe were recorded with their fetch results.
