# Review: stores like Nordstrom (steps 2–5)

Written 2026-10-29. Author: Ash. Page file `nordstrom.json` (`url_prefix: stores`, category `womens-clothing`, like-for-like item women's jeans).

## Gate (step 3 check)

Loaded through `lib/pipeline.ts` → `judgeBrandsLikePage` (now = 2026-10-29), tsx script in the scratchpad:

- Rendered picks: **11 of 11** (every `pickProblems` returns `[]`).
- Title: "11 Stores Like Nordstrom for Fashion, Shoes, Jewelry and Beauty".
- **indexable: false.** Reasons: `anchor missing: returnsDays, imageUrl`.
  - `imageUrl`: coordinator step (images.mjs).
  - `returnsDays`: Nordstrom's policy is "There are no time limits for returns or exchanges." The schema has no value for "no limit", so it stays null. Needs a coordinator decision (schema + gate change with tests). Any number would be false.

Checks run: `npm run lint:facts` ok, `npm test` 27/27 pass.

## Picks

| Rank | Pick | Sources | Price (women's jeans, regular) | Basis |
|---|---|---|---|---|
| 1 | Bloomingdale's | 5 | none | 403; verified via macysinc.com + Macy's 10-K; us_stores |
| 2 | Saks Fifth Avenue | 3 | none | 403; verified via exemplarluxurygroup.com (formerly Saks Global); us_stores |
| 3 | Macy's | 3 | none | 403; macysinc.com + 10-K; us_stores |
| 4 | Neiman Marcus | 2 | none | 403; Exemplar releases; us_stores (human check on "women's clothing") |
| 5 | Dillard's | 1 | $36–$350 (1,182 items), similar | own store, all 15 pages |
| 6 | Bergdorf Goodman | 1 | none | 403; Exemplar; us_stores (Fifth Ave) |
| 7 | Lord & Taylor | 1 (weak source) | $234.90–$3,165.90 (2,473), similar | own Shopify store, full collection |
| 8 | Revolve | 3 | none (sells_categories) | own store; range not readable |
| 9 | Shopbop | 2 | $78–$1,550 (946), similar | existing file |
| 10 | Nordstrom Rack | 2 | $15.38–$419.97 (sample), similar | existing file |
| 11 | Zappos | 2 | $64.95–$395, similar | own store, all 17 pages |

Anchor Nordstrom: verified, $20–$835 (min from full low-to-high sort; max is a sample, human check). Department stores first, then multi-brand stores shopped for the same reasons.

## FAQ sources (Ahrefs)

One `keywords-explorer-matching-terms` call: "nordstrom", US, questions, volume desc, limit 40.

| Used | Question (US vol.) | Answered from |
|---|---|---|
| Yes | nordstrom return policy how many days (600) | nordstrom.json notes (return policy page) |
| Yes | who owns nordstrom (600) | nordstrom.json notes (Wikipedia) |
| Yes | what is the difference between nordstrom and nordstrom rack (350) | nordstrom-rack.json + nordstrom.json |
| Yes | is nordstrom expensive (300) | nordstrom.json price row and notes |

Skipped: price match, store hours, anniversary-sale dates, gift cards at Rack, "is it legit", "going out of business" (no stored facts). Rack-return questions (2,100 etc.) are partly covered in the Rack body; only online Rack orders are stored.

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A directory answering "stores like Nordstrom" for US shoppers is the site's purpose. |
| G2 | PASS | No source wording reused. Original data: regular-price jeans ranges read from Dillard's (1,407 items), Lord & Taylor (2,662), Zappos (1,648) and Nordstrom itself; return windows and fees; parent-company facts (Exemplar rename, Backstage, The Outlet). None of the ranking lists has prices. |
| G3 | PASS | Concrete trade-offs per pick: Dillard's $150 free-shipping line vs Nordstrom's free shipping, Lord & Taylor's 14 days + $24 + 12%, Revolve's 24–48 waists vs Nordstrom's 23–36, Rack returns at any Nordstrom. No hands-on claims by design. |
| G4 | PASS | No wear/try/test claims; Ash's bio untouched. |
| G5 | PASS | `author: "Ash"`; not YMYL. |
| G6 | PASS | Every claim traces to a stored field (below). Two claims cut while checking: Dillard's "do most of the work" and Zappos "fill most" (not computed), Lord & Taylor "European denim Nordstrom doesn't carry" (not stored). |
| G7 | PASS (N/A) | Not YMYL. |
| G8 | PASS | Title count = rendered picks (11). known_for built from Nordstrom's homepage title. |
| G9 | PASS | Dominant intent (department-store alternatives) answered first: Bloomingdale's, Saks, Macy's, Neiman. Off-price and online picks follow. |
| G10 | PASS | Each pick says who it suits and points to a better pick when it doesn't; How to choose maps needs to picks. Gap: five department stores show no price/sizes/shipping (store unreadable). |
| G11 | PASS | Intro 75 words, no process narration; bodies 110–132 words. |
| G12 | PASS | Prices and policies read 2026-10-29; page `checked_at` set. |
| G13 | PASS (borderline) | Top results (Have Clothes Will Travel, BrandShopper, ReviewsXP) have no prices, dated content and errors. This page adds verified prices, returns and ownership. Weakness: 5 of 11 picks without prices. |
| G14 | PASS | No affiliate bias in ranking (sources, then store type); no implied testing. |
| G15 | PASS | Read as a whole; picks cross-reference each other without contradiction. |

**Estimated Page Quality:** High. Strongest reason: real regular-price ranges and return terms that none of the ranking lists have.
**Estimated Needs Met:** Highly Meets for "stores like Nordstrom"; better with prices, sizes and shipping for Bloomingdale's, Saks, Macy's, Neiman and Bergdorf (browser check).

## Voice check (`voice.md` "What we never write")

- Process narration: none ("we checked", dates as narration, "its site blocked us" all absent; blocked stores simply show no price).
- Spreadsheet sentences: none as the point; counts appear only with a reason (Macy's 400+ locations = easiest to reach; Dillard's 28 clearance centers = worth a detour).
- Verdicts on brands: none. Invented experience: none. Hype words: none.
- Rhythm: no semicolons, no em dashes, no sentence over 30 words (scripted check). "It" for brands.
- Answer-first opener, one useful thing per pick (The Outlet, Backstage, Exemplar siblings, Last Call redirect, clearance centers, Rack returns at Nordstrom), honest trade-off, cross-pick pointers, use-case Best for lines, How to choose.

## AI-voice scan (ai-voice-avoid.md)

Fixed: dramatic fragment "One store, two price levels." (#9) cut; "The holiday season is when it's most itself" (#49 mannered) rewritten plainly; "Even if you never buy one, it tells you exactly what kind of store this is" (#35 fake depth) cut; "Not near Manhattan?" (#23 rhetorical question) rewritten. Left: one playful metaphor ("designer floor turned all the way up"), within the one-colloquialism allowance.

## Fact trace (copy → field)

- Intro: Levi's, Madewell, MOTHER, Burberry jeans → nordstrom.json price note + page notes; free shipping → nordstrom notes (shipping page); no return deadline → nordstrom notes (return policy).
- Bloomingdale's: designers/contemporary/private labels, 1872, 32 + 25 The Outlet, coast to coast → bloomingdales.json notes; Nordstrom 350+ → nordstrom notes; Macy's sister → parent_company.
- Saks: luxury fashion, 1924, NY flagship, luxury markets, Exemplar rename + chapter 11 → saks-fifth-avenue.json notes; OFF 5TH site shut, stores open → saks-off-5th.json notes.
- Macy's: 400+ locations, fashion/beauty/home, outside + private brands, Backstage inside stores + freestanding → macys.json notes.
- Neiman: designers, 1907, flagships → neiman-marcus.json notes; Holiday Book century, Verdura cuff, wake boat → page notes; Exemplar → parent_company; Last Call redirect → neiman-marcus-last-call.json.
- Dillard's: $36–$350, NYDJ Marilyn $129 → prices + pick products_named; labels → notes; 1938 Arkansas, 272 stores, 30 states, 28 clearance centers, sizes, $150/$9.95, 30 days → dillards.json.
- Bergdorf: Fifth Ave & 57th, 1901, women's and men's stores, BG.com, designers, 125-year exclusives → bergdorf-goodman.json notes + page notes.
- Lord & Taylor: 1826 Lower Manhattan, stores closed 2020, partners abroad, $234.90 Sunflower, past $3,000, top labels, 14 days/$24/12%, free over $300 → lord-and-taylor.json.
- Revolve: labels, AGOLDE 90's Pinch Waist $208 → products_named; sizes, waists, free shipping/returns, 30/60 days → revolve.json; Nordstrom waists 23–36 → nordstrom size_range.
- Shopbop: $78 Free People, $1,550 Marni, MOTHER/AGOLDE depth, 1999, Amazon 2006, free shipping, 15/30-day returns, sizes, no petite/plus filter → shopbop.json.
- Nordstrom Rack: 1973 basement origin, MANGO $15.38/$69.99, Akris $419.97/$995, labels, sizes, returns at any store, 40 days, $89, US only → nordstrom-rack.json.
- Zappos: Seattle shoe shop → nordstrom notes; go-to for shoes, Amazon, $64.95/$395, labels, filters, free US shipping incl. territories/APO, 60-day free returns → zappos.json.
- FAQ: as listed above.

## Things that broke / notes for the coordinator

- Anchor `returns_days` can't be represented (unlimited). Page won't index until that's decided.
- Five department stores and Net-a-Porter, Selfridges, Harrods, Ssense return 403 (Harvey Nichols, ASOS 503). No workaround tried.
- `dillards.json` and `macys.json` were being written by another agent at the same time; merge kept their values (Dillard's known_for "Department Store With Clearance Centers").
- Lord & Taylor rests on one weak source (BrandShopper: anonymous, templated). Editorial call whether to keep it.
