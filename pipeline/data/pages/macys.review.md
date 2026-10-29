# Review: stores like Macy's (steps 2–5)

Written 2026-10-29. Author: Ash. Page file `macys.json` (`url_prefix: stores`, category `womens-clothing`, like-for-like item women's jeans).

## Gate (step 3 check)

Loaded through `lib/pipeline.ts` → `judgeBrandsLikePage` (now = 2026-10-29), tsx script in the scratchpad:

- Rendered picks: **15 of 15** (every `pickProblems` returns `[]`).
- Title: "15 Stores Like Macy's for Fashion, Beauty and Home".
- **indexable: false.** Reason: `anchor missing: sizeRange, shipsTo, returnsDays, price:womens-clothing`. macys.com returns 403 to WebFetch (customerservice-macys.com didn't resolve), so the anchor's own store facts can't be read. Human check queued in `human_check`. No workaround tried.

Checks run: `npm run lint:facts` ok, `npm test` 29/29 pass.

## Evidence

The Ahrefs top 10s held no readable editorial list: `stores like macys` = reader votes (10best, unfetchable), Wikipedia's reference list, Quora (403), Reddit, store homepages, Yelp/Tripadvisor, videos; `similar to macys` = seven scraped similar-sites lists plus off-topic threads; `macys alternatives` and `brands like macys` returned no rows (4 calls used, the cap). The four kept lists were found with WebSearch and read in full:

| Source | Author, date | Stores used |
|---|---|---|
| Irreverent Gent, "17 Best Department Stores Like Macy's" | Dave Bowden, 2022, upd. Jun 2026 | 18 entries |
| SavingSays, "15 Stores Similar to Macy's" | no author, Oct 2025, upd. Aug 2026 (coupon site, weak) | 15 |
| GOBankingRates/AOL, "Macy's Is Closing Over 60 Stores…" | J. Arky, Apr 2025 | 4 |
| GOBankingRates/AOL, "Macy's Is Raising Prices…" | Jordan Rosenfeld, Jun 2025 | 5 + 2 marketplaces |

Deviation flagged for the coordinator: evidence came from WebSearch, not the Ahrefs SERP.

## Picks

| Rank | Pick | Sources | Price (women's jeans, regular) | Basis |
|---|---|---|---|---|
| 1 | Kohl's | 4 | none | 403; Kohl's 10-K (existing file) |
| 2 | Nordstrom | 3 | $20–$835 | existing file |
| 3 | Dillard's | 3 | $36–$350 | existing file |
| 4 | JCPenney | 2 | none | 503; **new** file from corporate.jcpenney.com |
| 5 | Bloomingdale's | 2 | none | 403; macysinc.com + 10-K |
| 6 | Belk | 2 | none | 403; **new** file from newsroom.belk.com |
| 7 | Neiman Marcus | 2 | none | 403; Exemplar (women's-clothing human check still open) |
| 8 | Target | 3 | $28–$74.99 (`jeans` row) | existing file |
| 9 | TJ Maxx | 3 | none | TJX site + 10-K |
| 10 | Nordstrom Rack | 3 | $15.38–$419.97 | existing file |
| 11 | Marshalls | 2 | none | TJX |
| 12 | Burlington | 2 | none (in-store examples only) | own homepage + SEC |
| 13 | Walmart | 2 | none | bot check; **new** file from Walmart 10-K |
| 14 | Ross | 1 | none | Ross SEC release |
| 15 | Bloomingdale's Outlet | 1 | none | macysinc.com |

Department stores first, then chains shopped for the same reason; within groups by source count. Anchor price unreadable, so every `price_relation` is null. Rejected: Saks Fifth Avenue (1 source, luxury slot covered), Saks OFF 5TH (unverified, shutting down), Lord & Taylor (1 weak source), Stein Mart (online only, 1 source), Macy's Backstage / Dillard's Clearance (part of anchor / Dillard's), Poshmark and eBay (marketplaces).

## FAQ sources (Ahrefs)

One `keywords-explorer-matching-terms` call: "macys", US, questions, volume desc, limit 40.

| Used | Question (US vol.) | Answered from |
|---|---|---|
| Yes | is macys closing (900) | macys.json notes (10-K: ~150 planned closures; store count 408) |
| Yes | what is macys backstage (350) | macys.json notes (macysinc.com: 300+ Backstage, store-within-store; 4 freestanding) |
| Yes | who owns macys (200) | macys.json parent_company + 10-K HQ note |

Skipped: price match, parade, hours, return policy, perfume refills, gift cards, military discount (no stored facts).

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A US directory answering "stores like Macy's" is the site's purpose. |
| G2 | PASS | No source wording reused. Original data: regular-price jeans ranges (Nordstrom, Dillard's, Target, Rack), shipping and return terms, store counts and labels from SEC filings and corporate sites. None of the four lists has prices. |
| G3 | PASS | Concrete trade-offs per pick: Dillard's 30 states and $150 free-shipping line, Bloomingdale's 32 stores, Burlington/Ross in-store only, Rack US-only shipping, Neiman's Last Call redirect. |
| G4 | PASS | No wear/try/test claims; Ash's bio untouched. |
| G5 | PASS | `author: "Ash"`; not YMYL. |
| G6 | PASS | Every claim traces to a stored field (below). Cut while checking: JCPenney "lower prices" (source opinion, not a stored fact), Kohl's "women's is its biggest department" (ranking without a reason), Target "most of what you'll see is own label" (not stored), "unlike Backstage" for Rack online (Backstage online status not stored). |
| G7 | PASS (N/A) | Not YMYL. |
| G8 | PASS | Title count = rendered picks (15). known_for from macysinc.com wording. |
| G9 | PASS | Dominant intent (other department stores) answered first; off-price and big-box follow. |
| G10 | PASS | Each pick says who it suits and points to another pick; How to choose maps uses to picks. Gap: 11 of 15 picks show no price (stores unreadable). |
| G11 | PASS | Intro 63 words, no process narration; bodies 111–122 words. |
| G12 | PASS | Facts read 2026-10-29; page `checked_at` set. |
| G13 | PASS (borderline) | Ranking lists have no prices and some stale entries (Stein Mart, Lord & Taylor stores). This page adds verified prices, policies, ownership and the Backstage/outlet structure. Weakness: few prices. |
| G14 | PASS | No affiliate bias in ranking (sources, then store type); no implied testing. |
| G15 | PASS | Read as a whole; cross-references consistent (Rack ships, Ross/Burlington don't; Kohl's 1,153 vs TJ Maxx 1,348). |

**Estimated Page Quality:** Medium-High. Strongest reason: verified ownership, store counts, labels and policies none of the ranking lists have. Held back by missing anchor facts and prices for most picks.
**Estimated Needs Met:** Highly Meets for "stores like Macy's" in breadth (15 real US stores, both department and off-price); Moderately Meets on comparison depth until the 403 stores get a browser price check.

## Voice check (`voice.md` "What we never write")

- Process narration: none (no "we checked", dates, "its site blocked us"; blocked stores simply show no price).
- Spreadsheet sentences: counts appear only with a reason (store counts → how easy it is to reach; 28 clearance centers → the Backstage equivalent).
- Verdicts on brands, invented experience, hype words: none.
- Rhythm: no semicolons, no em dashes, no sentence over 30 words (scripted check). "It" for brands. Contractions throughout.
- Moves: answer-first opener per pick, one useful thing each (label systems, The Runway, Rack in-store returns, Last Call redirect, Belk Market, dd's DISCOUNTS, Marilyn Monroe line), an honest trade-off, cross-pick pointers, use-case Best for lines, How to choose.

## AI-voice scan (ai-voice-avoid.md)

Fixed: colon reveals (#24) in the Nordstrom Rack and Ross openers rewritten as plain sentences; "from Kohl's up to Neiman Marcus" in the intro cut (#40); repeated "The catch is reach" varied (#5 anaphora). Left: one colloquial line ("the Southeast's answer to Macy's"), within the one-per-page allowance.

## Fact trace (copy → field)

- Intro: ~150 planned closures → macys.json notes (10-K); national brands + house labels → macys notes (market and private brands).
- Kohl's: moderately priced clothes/shoes/beauty/home, own brands priced under national, LC Lauren Conrad/Simply Vera exclusives, Sephora, 1,153 stores/49 states → kohls.json notes. Macy's Charter Club, Style & Co. → macys.json notes (10-K private labels).
- Nordstrom: $20–$835 → prices; Levi's $110, Madewell $148, MOTHER $248 → nordstrom.json page notes; free shipping no minimum, no return time limit, 00–28W petite/plus → nordstrom.json; Rack $15.38 → nordstrom-rack prices.
- Dillard's: departments, labels, Dillard's Exclusive, $36–$350, NYDJ $129, 272 stores/28 clearance/30 states, $150/$9.95, 30 days → dillards.json + Nordstrom page products_named.
- JCPenney: 600+ stores US/PR, apparel/home/beauty/jewelry, salon/portrait/optical, Marilyn Monroe line from $44, jeans $54, in stores and online, Liz Claiborne/a.n.a./St. John's Bay/Levi's/Nike, Catalyst Brands siblings → jcpenney.json. Kohl's 1,100+ → kohls.json.
- Bloomingdale's: Macy's, Inc., upscale, designers/contemporary/private labels, 32 + 25 Outlet → bloomingdales.json; Macy's 400-plus → macys.json (408).
- Belk: Charlotte, 1888, nearly 300 Belk and Belk Outlet locations, 16 Southeastern states, national + private labels, departments, Belk Market, belk.com/app → belk.json. Dillard's 30, Kohl's 49 → their files.
- Neiman Marcus: 1907, flagships, Saint Laurent/Givenchy/Toteme, digital and remote selling, Exemplar with Saks and Bergdorf → neiman-marcus.json; Last Call redirect → neiman-marcus-last-call.json.
- Target: 2,000+ stores/50 states, $28–$74.99 jeans, Universal Thread $38, 45+ owned brands, labels, 365/90-day returns → target.json.
- TJ Maxx: family apparel/beauty/jewelry/home, 20–60% (TJX's claim, attributed), The Runway in select stores, 1,348 stores → tj-maxx.json.
- Nordstrom Rack: off-price chain, MANGO $15.38, Akris $419.97, Levi's/Madewell/FRAME/Citizens, $89, 40 days, in-store returns, 00–28W, US only → nordstrom-rack.json + Nordstrom page products_named. TJ Maxx/Marshalls more stores → their files vs Rack's 348.
- Marshalls: full footwear line, broader men's, 1995, 1,255 stores US/PR, marshalls.com → marshalls.json.
- Burlington: Coats/Plus/Juniors/Kids/Baby departments, $19.99 dress, $69.99 coat, up to 60% off, 1,287 stores/47 states/DC/PR, no online shop → burlington.json. Ross more stores → ross file.
- Walmart: 4,611 stores, 50 states/DC/PR, fashion for adults and children, private and licensed labels, brand names significant, Walmart+ free shipping → walmart.json (10-K).
- Ross: 1,952 stores/44 states/DC/Guam/PR, 20–60% off department-store regular prices, family apparel/shoes/home, items vary by store, store links only online, dd's 376/23 → ross-dress-for-less.json.
- Bloomingdale's Outlet: Macy's, Inc., best names in clothing/accessories/home for less, 25 coast to coast → bloomingdales-outlet.json; Backstage mostly inside Macy's → macys.json.
- How to choose and FAQ: as above.

## Things that broke / notes for the coordinator

- Anchor facts (sizes, shipping, returns, price) unreadable: page won't index until a browser check fills them.
- Ahrefs returned nothing for the apostrophe-less "macys alternatives" / "brands like macys"; evidence came from WebSearch instead (flagged in `human_check`).
- macys.com, kohls.com, jcpenney.com (503), belk.com, walmart.com (bot check), Bloomingdale's, Neiman, TJ Maxx, Marshalls all refuse reads; no workaround tried.
