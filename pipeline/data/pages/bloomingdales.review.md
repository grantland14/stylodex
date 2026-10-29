# Review: stores like Bloomingdale's (steps 2–5)

Written 2026-10-29. Author: Ash. Page file `bloomingdales.json` (`url_prefix: stores`, category `womens-clothing`, like-for-like item women's jeans).

## Gate (step 3 check)

Loaded through `lib/pipeline.ts` (`brandFromJson`, `pageFromJson`) → `judgeBrandsLikePage` (now = 2026-10-29), tsx script in the scratchpad:

- Rendered picks: **11 of 11** (every `pickProblems` returns `[]`).
- Title: "11 Stores Like Bloomingdale's for Luxury Designers and Contemporary Labels".
- **indexable: false.** Reasons: `anchor missing: sizeRange, shipsTo, returnsDays, price:womens-clothing`. bloomingdales.com (homepage, women's jeans, the customer-service return article) returns 403 to WebFetch and the bot UA. No workaround. Needs a browser check (`human_check` #1).

Checks run: `npm run lint:facts` ok, `npm test` 30/30 pass.

## Picks

| Rank | Pick | Sources | Price (women's jeans, regular) | Basis |
|---|---|---|---|---|
| 1 | Nordstrom | 5 | $20–$835 (existing file) | own store |
| 2 | Saks Fifth Avenue | 5 | none | 403; Exemplar sources (existing file); us_stores |
| 3 | Neiman Marcus | 3 | none | 403; Exemplar (existing); us_stores |
| 4 | Bergdorf Goodman | 3 | none | 403; Exemplar (existing); us_stores |
| 5 | Macy's | 3 | none | 403; macysinc.com + 10-K (existing); us_stores |
| 6 | Shopbop | 2 | $78–$1,550 (existing) | own store |
| 7 | Century 21 | 1 (weak source) | none (doesn't sell online) | **new file**: c21stores.com about, returns, brand directory (542 Women's brands); one NYC store |
| 8 | Lord & Taylor | 1 (weak source) | $234.90–$3,165.90 (existing) | own Shopify store |
| 9 | Dover Street Market | 1 | $358–$4,220 (16 items, full collection) | **new file**: US e-shop Shopify feed + policies; NY and LA stores |
| 10 | FWRD | 1 | none (16 of 1,909 render) | **new file**: own store via WebFetch; sells_categories |
| 11 | Revolve | 1 (weak source) + Apart pool | none (existing) | own store |

Anchor price unreadable, so every `price_relation` is null. Order: source count, then department stores first within ties.

## Evidence

Ahrefs `serp-overview` (4 calls): only "stores like bloomingdales" returned rows; "brands like", "alternatives" and "similar to" returned none. Its one readable editorial list: Effortless Gent. Five more found by WebSearch and read: ViralTalky, BestChinaProducts, ShopBack (three-way comparison, counted for Nordstrom and Saks only), The Zoe Report, ClothedUp. Dropped: Similist and other scraped similar-site lists, Reddit (refused), Quora, YouTube, store homepages, lists about Nordstrom or Neiman. No disco directory page exists for Bloomingdale's.

Rejected candidates (reasons in the page file): Verishop (password page), Farfetch (marketplace), Harrods, Ssense, Harvey Nichols, W Concept (unreadable), Barneys, Need Supply (closed), The Dreslyn (domain redirects to an unrelated site), Intermix (final-sale banner), Mr Porter (menswear only), Boden, Reiss (single brands), Rent the Runway (rental), and 14 Apart pool brands with no outside source.

## FAQ sources

One `keywords-explorer-matching-terms` call: "bloomingdales", US, questions, volume desc, limit 40.

| Used | Question (US vol.) | Answered from |
|---|---|---|
| Yes | is bloomingdales owned by macy's (100) | bloomingdales.json parent_company + notes (10-K HQ, store count) |
| Yes | is bloomingdales still in business (150) | bloomingdales.json notes (store count) |
| Yes | is bloomingdales high end (30; also PAA "Is Bloomingdale's considered high end?") | bloomingdales.json notes + macys.json 10-K note |
| Yes | when was bloomingdales founded (30) | bloomingdales.json founded_year + notes |

Skipped (no stored facts): is it legit, price match, return policy, free returns, returns to The Outlet or Bloomie's, store hours, sales, Afterpay, alterations.

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A directory answering "stores like Bloomingdale's" for US shoppers is the site's purpose. |
| G2 | PASS | Original data the ranking lists don't have: DSM's full regular-price jeans range ($358–$4,220) from its US feed, Century 21's in-store-only return terms, FWRD's shipping and size limits, Lord & Taylor's 48-state delivery and 14-day returns, parent-company facts (Exemplar, Macy's, Inc. closures, Backstage). No source wording reused. |
| G3 | PASS | Concrete trade-offs per pick: Shopbop's 15-day free-return window, DSM's 14 days vs Shopbop's 30, FWRD's XXL/34 waist ceiling vs Revolve's 4X/48, Century 21's receipt-and-ID returns, Macy's closures. No hands-on claims by design. |
| G4 | PASS | No wear/try/test claims. Ash's bio untouched. |
| G5 | PASS | `author: "Ash"`. Not YMYL. |
| G6 | PASS | Every claim traces to a stored field (below). Cut while checking: "a floor away" (store layout not stored), "contemporary" labels for Shopbop/Revolve (not stored), Revolve "widest waist range here" (other stores' waists unknown), Neiman "curated edit" wording. |
| G7 | PASS (N/A) | Not YMYL. |
| G8 | PASS | Title count = rendered picks (11). known_for from the anchor file. |
| G9 | PASS | Dominant intent (department-store alternatives) answered first: Nordstrom, Saks, Neiman, Bergdorf, Macy's. Off-price and online picks follow. |
| G10 | PASS | Each pick says who it suits and points to a better pick when it doesn't. How to choose maps needs to picks. Gap: five department stores and the anchor show no price, sizes or shipping (stores unreadable). |
| G11 | PASS | Intro 66 words, no process narration. Bodies 112–123 words. |
| G12 | PASS | Prices and policies read 2026-10-29. Page `checked_at` set. |
| G13 | PASS (borderline) | Top results (Effortless Gent 2023, ClothedUp 2023, ViralTalky 2023) list Barneys and Verishop, which are closed, and have no prices or policies. This page adds verified prices, returns and ownership. Weakness: 5 of 11 picks and the anchor without prices. |
| G14 | PASS | Ranking by sources, then store type. No affiliate bias, no implied testing. |
| G15 | PASS | Read as a whole. Picks cross-reference each other (Saks→Shopbop/Revolve, Neiman→Century 21, Lord & Taylor→FWRD, FWRD↔Revolve). Wording checked against the Nordstrom and Macy's pages, which share six picks: different products, labels and angles (Neiman remote selling vs Holiday Book; Bergdorf Cucinelli/Akris vs Manolo/Schiaparelli). |

**Estimated Page Quality:** High. Strongest reason: real regular-price ranges and return terms, and it drops the closed stores the ranking lists still recommend.
**Estimated Needs Met:** Highly Meets for "stores like Bloomingdale's". It would be better with Bloomingdale's own prices, sizes and returns (browser check).

## Voice check (`voice.md` "What we never write")

- Process narration: none. No "we checked", dates or blocked-store explanations. Unreadable stores simply show no price.
- Spreadsheet sentences: none as the point. Counts carry a reason: Macy's 408 vs 32 = easiest to reach, Bergdorf single store = look at Neiman, DSM 14 days = half of Shopbop's.
- Verdicts on brands: none. Invented experience: none. Hype words: none.
- Rhythm: scripted check, no sentence over 30 words, no three same-length sentences in a row. No semicolons or em dashes. "It" for brands.
- Moves: answer-first opener with a named product where one is stored, one useful thing per pick (Rack/The Outlet, OFF 5TH closing, Last Call redirect, BG.com, Backstage, Shopbop's 15-day window, Century 21's receipt-and-ID rule, import duties, DSM's denim as a price guide, FWRD/Revolve sisters, Revolve's 60-day exchange), an honest trade-off, cross-pick pointers, use-case Best for lines, How to choose.

## AI-voice scan (ai-voice-avoid.md)

Fixed: "curated edit" (#13/#46 brochure) rewritten. Rule-of-three lists cut to two (Neiman's designers, Neiman's flagships, Revolve's labels, DSM's labels, Lord & Taylor's labels). "Its policies are the reason to switch" (unsupported comparison with the anchor) rewritten. Left: one colloquialism ("from the sofa"), within the allowance. Smell test: every sentence names this store's facts.

## Fact trace (copy → field)

- Intro: 32 stores → bloomingdales.json notes (store count); designers + contemporary labels → known_for + notes.
- Nordstrom: $20–$835 → prices; Madewell $148 → macys.json pick products_named; free shipping, no return limit, 00–28W petite/plus, 350+ locations incl. Local and Rack → nordstrom.json notes/size_range; The Outlet → bloomingdales.json notes.
- Saks: 1924, NY flagship, luxury markets, Exemplar/Saks Global → saks-fifth-avenue.json notes; Bloomingdale's contemporary-to-luxury + private labels → bloomingdales.json notes, macys.json 10-K note; MOTHER/AGOLDE → shopbop.json, revolve.json; OFF 5TH → saks-off-5th.json.
- Neiman: assortment from top luxury designers, 1907, Altuzarra, Dries Van Noten, stores/digital/remote selling, Beverly Hills, NorthPark → neiman-marcus.json notes; Last Call → neiman-marcus-last-call.json; Century 21 off-price → century-21.json.
- Bergdorf: 1901, Fifth Ave & 57th, women's and men's stores, BG.com, Brunello Cucinelli, Michael Kors Collection, leading and emerging designers → bergdorf-goodman.json notes; 125th year exclusives Akris, Roger Vivier → nordstrom.json page notes (Bergdorf Sep 10 2026 release); Neiman flagships → neiman-marcus.json.
- Macy's: 408 locations, fashion/beauty/home, market + private brands, Charter Club, I-N-C, 300+ Backstage store-within-store and freestanding, ~150 planned closures, Bold New Chapter, Bloomingdale's "upscale, premium contemporary-to-luxury" → macys.json notes; Nordstrom free US shipping → nordstrom.json.
- Shopbop: $78 Free People, MOTHER most styles (70), Amazon 2006, ships CA/GB/AU, free US no minimum, 00–24, waists 22–38, 15-day free / $10 to day 30 → shopbop.json.
- Century 21: off-price, up to 65% off MSRP, 22 Cortlandt St, family-owned, Gindi cousins 1961, 542 Women's brands incl. FRAME, AGOLDE, Theory, Vince, Gucci and Prada on the homepage list, new inventory daily, limited drops, no online sales, 30-day in-store returns with receipt + ID → century-21.json; The Outlet 25 coast to coast → bloomingdales.json / bloomingdales-outlet.json.
- Lord & Taylor: 1826 Manhattan, stores closed 2020, online only, $234.90 Sunflower, past $3,000 ($3,165.90), Gucci/Balenciaga most-stocked, duties included, partners ship from abroad, 48 contiguous states, 14 days, $24 fee → lord-and-taylor.json; FWRD 30 days + free label → fwrd.json.
- DSM: Comme des Garçons-led nav, DSMNY e-shop, Marc Jacobs $358, The Row $990, Versace embroidered $4,220, Simone Rocha, Miu Miu, NY and LA stores, ground free over $125, 14-day returns → dover-street-market.json; Shopbop 30 days → shopbop.json.
- FWRD: Revolve Group, GRLFRND $235, KHAITE Danielle $620 (and $820/$890 above it), couture houses to emerging talents, free 2-day US, 30 days, free label, XXS–XXL/0X, waists to 34 → fwrd.json; Revolve AGOLDE/FRAME, 4X → revolve.json.
- Revolve: waists 24–48, XXS–4X, US 00–24/26, AGOLDE/FRAME, AGOLDE 90's Pinch Waist $208 (nordstrom.json products_named), free shipping and returns, 30/60 days, founded 2003 → revolve.json; Shopbop/FWRD ranges → their files; KHAITE, Isabel Marant on FWRD → fwrd.json notes.
- How to choose: restates the bodies' facts.
- FAQ: as listed above.

## Things that broke / notes for the coordinator

- The anchor can't index until bloomingdales.com is read in a browser (sizes, shipping, returns, women's jeans price).
- Only one Ahrefs keyword had rows. Five of six lists came from WebSearch (same as the Macy's page). Two are weak (BestChinaProducts, ViralTalky) and are the only source for Century 21, Lord & Taylor and Revolve.
- W Concept serves a JavaScript app to the bot UA and 403 to WebFetch, so its US shipping couldn't be stored. thedreslyn.com redirects to an unrelated .id domain.
- New brand files: `fwrd`, `dover-street-market`, `century-21`. Anchor file got one 403 note. All merged through `merge_brand.py`.
