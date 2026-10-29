# Review: stores like TJ Maxx (steps 2–5)

Written 2026-10-29. Author: Ash. Copy in `tj-maxx.json` → `author`, `copy`.
Checked with `lib/gate.ts` through `lib/pipeline.ts` (tsx script, now = 2026-10-29):

- Title: "2 Stores Like TJ Maxx for Off-Price Brand-Name Fashion"
- Rendered picks: nordstrom-rack, 6pm. `pickProblems` returns `[]` for both.
- Verdict: **not indexable**. Reasons: `anchor missing: status, sizeRange, shipsTo, returnsDays, imageUrl, price:womens-clothing` and `only 2 publishable picks (need 6)`.
- `npm test`: 25/25 pass after the new data files.

## Category

`womens-clothing`. TJ Maxx is a multi-brand off-price store (`kind: retailer`). The runbook names womens-clothing as the usual department, and TJX's own page leads with "brand-name fashion". The like-for-like item for prices is **women's jeans**, which both picks list as a category of its own. For off-price stores the stored price is each store's listed selling price. The compare-at or MSRP figure is a reference only and is not stored as a price.

## Picks: 2 renderable of 2 (target 10–15, floor 6, not padded)

| Rank | Pick | Sources | Price row (USD, women's jeans) | Gate |
|---|---|---|---|---|
| 1 | Nordstrom Rack | 2 (24/7 Wall St. #7, Irreverent Gent #1) | 15.38–419.97, **119-item sample** (pages 1 and 42 of ~3,000) | [] |
| 2 | 6pm | 1 (Irreverent Gent #25) | 17.99–279, full listing, 1,309 items | [] |

Why only two. The rule is that picks are off-price stores like the anchor. The two readable lists name 11 off-price stores:
- Verified: Nordstrom Rack and 6pm.
- Site refuses WebFetch: Marshalls, Sierra (TJX error page) and Bloomingdale's Outlet (403). These go to human_check.
- No online store, so the gate's US-shipping rule fails them: Saks OFF 5TH (its site reads "SaksOFF5TH.com is Shutting Down"), Burlington and Ross.
- Retired into a parent: HauteLook (now Nordstrom Rack) and Last Call (now the Neiman Marcus sale page).
- Dillard's Clearance Centers belongs to a department store.

The other 20 candidates are department stores, mass merchants, marketplaces, full-price or own-label shops, resale or home stores. Each is in `rejected` with its reason. Two policy questions are in `human_check`:
1. Can a stores page list US chains that only sell in their stores?
2. Can department stores appear on an off-price anchor's page?

## FAQ sources (Ahrefs)

One call: `keywords-explorer-matching-terms`, "tj maxx", US, terms=questions, volume desc, limit 40.

| Used | Question (US volume) | source_query |
|---|---|---|
| Yes | What is TJ Maxx? (500) | `what is tj maxx` |
| Yes | Who owns TJ Maxx? (500) | `who owns tj maxx` |

Skipped because no stored fact answers them: opening and closing times and holiday hours (3,400 and below), restock days (3,400 and 900), Apple Pay (2,300), "is tj maxx closing" (1,300; nothing stored, and the closing store found was Saks OFF 5TH's site), pay (1,100), Black Friday, dogs, the return policy and cross-store returns with Marshalls (700 and below; anchor returns unverified, third-party figures conflict and were not stored), gift cards, and "what does tj maxx stand for" (700; nothing stored).

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | "Stores like TJ Maxx" for US shoppers is the site's purpose. Copy covers clothing and beauty scope only. |
| G2 | PASS | The bodies use no outside wording. The substance is store-level data: 6pm's full 1,310-item jeans listing (33 brands, median 40% under MSRP, 123 petite and 28 plus styles), Nordstrom Rack's sizes, comparable-value example and return terms. |
| G3 | PASS (thin) | Specifics a SERP reader can't get: the $89 vs $100 free-shipping bars, 40 vs 30 days, free in-store returns vs paid return postage, 6pm's Kentucky outlet. There are only two entries, though. |
| G4 | PASS | No wear, try or test claims. Bio not added to. |
| G5 | PASS | author "Ash", byline goes to /authors/ash. Not YMYL. |
| G6 | **BLOCKED (publish)** | Every sentence traces (table below). But the anchor is `unverified`, "Off-Price Brand-Name Fashion" is built from tjx.com rather than the store, and Nordstrom Rack's price chip shows a sampled range (human_check). |
| G7 | PASS (N/A) | Not YMYL. |
| G8 | PASS | "2 Stores Like TJ Maxx…" is the true count. |
| G9 | **BLOCKED (publish)** | There is no TJ Maxx price, size or shipping data, so neither pick can be labeled cheaper, similar or pricier. That half of the comparison is missing. |
| G10 | **FAIL** | Two picks don't answer "stores like TJ Maxx". A reader will search again for Marshalls, Ross and Burlington, which this page can't list (unverified or store-only). |
| G11 | PASS | The intro opens on what TJ Maxx is, then what the picks share and where prices start. There is no preamble. |
| G12 | PASS | All checks are dated 2026-10-29. The template's "Last checked" line carries the date. |
| G13 | **FAIL** | The estimate is Low to Medium (below). |
| G14 | PASS | Affiliate links go through /go/ with the disclosure. There is no implied testing. |
| G15 | PASS | 0 em dashes, 0 semicolons, no Markdown. The two bodies end differently. |

**Estimated Page Quality:** Low to Medium. The data on the two stores is real and specific. But a two-entry list for a query whose page-one lists run 16 and 25 is thin, it leaves out the obvious answers, and the anchor side is empty.

**Estimated Needs Met:** Slightly Meets. What would move it most:
1. Decide the store-only and department-store policy.
2. Human-verify Marshalls, Sierra, Bloomingdale's Outlet and tjmaxx.tjx.com.

## AI-voice scan

| Pattern | Where | Fix |
|---|---|---|
| §40 "from X to Y" | NR body "Labels run from Levi's and Madewell up to FRAME and Akris" | Changed to "Levi's and Madewell sit next to FRAME and Akris" |
| Dated past tense (process narration) | "Akris wide-leg jeans were $419.97" | Changed to present: "an Akris wide-leg pair is $419.97 against $995" |
| Example not stored | First draft used a JASON WU $39.97/$198 example that isn't in the brand file | Replaced with the stored Akris min/max item |
| §3 rule of three, §1 contrasts, §13, §16, §34, §48 | none found | — |
| Smell test | Each body is built on that store's own numbers | — |

## Fact trace

| Claim | Source field |
|---|---|
| **Intro** | |
| TJ Maxx is TJX's off-price chain, brand-name fashion for less than full-price stores | tj-maxx `parent_company`; `notes[1]` ("largest off-price retailer…", "brand-name fashion", "for way less"); `notes[2]` (20–60% below full-price retailers, TJX claim, paraphrased as "for less") |
| two stores, big-name denim marked down from its usual price | nordstrom-rack `prices[0].note` (comparable value); 6pm `prices[0].note` (1,231 of 1,310 on sale against MSRP) |
| both ship anywhere in the US | `ships_to` ["US"] for both; shipping notes |
| jeans start at $15.38 (Nordstrom Rack), $17.99 (6pm) | `prices[0].min` for each |
| **Nordstrom Rack** | |
| Nordstrom's off-price chain, Seattle, 1973 | `parent_company`; `founded_year`; `notes[3]` |
| bigger denim range here, about 3,000 women's jeans | `prices[0].note` (2,961–3,069 listed) vs 6pm 1,310 |
| Levi's, Madewell, FRAME, Akris; priced under a listed comparable value | `prices[0].note` (brands seen; "Comparable value" reference) |
| Akris wide-leg pair $419.97 against $995 | `prices[0].note` (max item) |
| sizes 00 to 28W, petite and plus filters | `size_range`; `has_petite`, `has_plus`; `notes[2]` |
| free shipping over $89 | `free_shipping_min_usd` 89 |
| online orders back free to any Nordstrom or Rack store within 40 days | `returns_days` 40; `notes[1]` |
| **6pm** | |
| discount arm of Zappos, since 2007, one outlet store in Shepherdsville, KY | `parent_company`; `notes[1]` |
| 1,310 women's jeans, 33 brands, mostly KUT from the Kloth, NYDJ, AG, Joe's Jeans | `prices[0].note` |
| typical pair 40% under MSRP | `prices[0].note` (median 40% off) |
| 123 petite styles, 28 plus-size cuts | `notes[4]` |
| free shipping needs $100, otherwise $3.95 | `free_shipping_min_usd` 100; `notes[2]` |
| returns close after 30 days; you pay the postage back | `returns_days` 30; `notes[3]` |
| **FAQ** | |
| founded 1976, owned by TJX; fashion, jewelry, accessories; Runway department in select stores, high-end luxury | tj-maxx `founded_year`; `parent_company`; `notes[1]` |
| TJX also runs Marshalls and Sierra in the US | tj-maxx `notes[2]` (US brands) |
| TJX bought Marshalls in 1995, formed Marmaxx with TJ Maxx | marshalls `notes[1]` |

## Publish conditions

1. Human check on tjmaxx.tjx.com: live status, women's jeans price, sizes, shipping, returns and known_for (`human_check` 1–5).
2. Policy calls on store-only chains and department stores (`human_check` 10–11). Then human-verify Marshalls, Bloomingdale's Outlet and Sierra (6–8). Even with all of these, the page reaches 6 picks only if the policy opens up.
3. Replace Nordstrom Rack's sampled range with the full listing's min/max (9).
4. Add `/img/` images.
