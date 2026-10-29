# Review: stores like Buckle (steps 2–5)

Written 2026-10-29 in one run (enrich, verify, pick, write). Author: Ash. Copy in `buckle.json` → `author`, `copy`.
Copy written against `pipeline/voice.md` (and the 2026-10-29 rule updates in enrich.md §1/§4c and write.md FAQ); earlier page files used for JSON shape only.

## Gate result

Loaded through `lib/pipeline.ts` (`pipelinePages`, with `loadMedia`) and judged with `judgeBrandsLikePage`, now = 2026-10-29 (script: scratchpad `buckle/check.ts`):

- Anchor missing: `[]` (status, website, known_for, hq, size_range, ships_to, returns_days, jeans price all present).
- `pickProblems` returns `[]` for all 14 picks.
- Verdict: **indexable**, no reasons. 14 picks render.
- Title: "14 Stores Like Buckle for Denim and Casual Fashion".
- `npm run lint:facts`: ok. `npm test`: 30 pass, 0 fail.

## Category

`jeans`. Buckle is a multi-brand store, and denim is what it sells most: 42.5% of fiscal 2025 net sales (Form 10-K, year ended Jan 31, 2026), its biggest merchandise category; homepage title leads with "Quality Jeans". Like-for-like item: women's jeans. Exception: Abercrombie & Fitch's stored range is men's jeans (its women's pages didn't load on earlier runs), and its body says so.

## Evidence

Ahrefs `serp-overview` (US, 4 calls): only `stores like buckle` returned positions. Its top 10 had no editorial Buckle list: Tillys' homepage, Similist (dropped by rule), Reddit (not read), buckle.com, storeslike.com (read; entries are the stores' own taglines, dropped as a scraped directory), and three general lists not about Buckle. Five WebSearch queries found the four kept lists (`web_search`):
ET = eTechShout (Jan 2, 2026, 11 stores), PT = PlainTips (undated, 10), SST = StoresSimilarTo (byline Nwose Onyinye, undated, 16; low quality but Buckle-specific), SS = SimilarStores (updated Oct 24, 2026, 10). Dropped: almostsimilar.com (redirects to an unrelated domain), temufinds.com (treats "Buckle" as a belt-buckle maker), similar-site tools, parasite subdomains.
No disco-directory source on this page. No secondhand or thrift candidates. Apart Style pool: no Buckle row in `public.brands`, so empty.

## Picks

| Rank | Pick | Sources | Price (women's jeans, USD) | Label |
|---|---|---|---|---|
| 1 | PacSun | 2 (PT, SST) | none (403) | null |
| 2 | maurices | 1 (SS) | 34.90–108 (71 regular, page 1 of 324) | similar |
| 3 | American Eagle | 4 (all) | none (all marked down) | null |
| 4 | Forever 21 | 3 | 38–44 (2 regular) | cheaper |
| 5 | Lucky Brand | 3 | none (all marked down) | null |
| 6 | Levi's | 3 | none (403) | null |
| 7 | Gap | 2 | 79.95–99.95 (40) | similar |
| 8 | Aeropostale | 2 | 64.95–69.95 (33) | similar |
| 9 | Old Navy | 2 | 34.99–69.99 (41) | similar |
| 10 | Nordstrom | 2 | 20–835 (sample) | similar |
| 11 | Dillard's | 1 | 36–350 (1,182) | similar |
| 12 | Superdry | 1 | 74.95–109.95 (22) | similar |
| 13 | Abercrombie & Fitch | 1 | 80–110 (men's, 64) | similar |
| 14 | Nordstrom Rack | 1 | 39.97–79.97 (sample) | similar |

Anchor: Buckle women's jeans $54.99–$308, regular price only, from both ends of the price-sorted listing (2,315 items; asc pages 1–4 all markdowns).
Order: same-type multi-brand mall chains first (PacSun, maurices), then by sources, ties by price closeness, unpriced after priced (`notes`).
Rejected (`rejected`): Urban Outfitters (4 sources, no US/jeans fact), Guess and Anthropologie (2 sources, 403), Lee (403), Hollister, Express, Free People, Zara, Torrid (unverified), Lane Bryant (all marked down, not checked further), Amazon (marketplace), Bluefly, UNTUCKit, Vineyard Vines (weak fit, not padded in).

Brand files touched (patches in scratchpad `buckle/patches/`, merged one at a time): buckle, maurices (new), nordstrom and dillards (jeans price row copied from their womens-clothing row, which was the women's jeans listing, same date), pacsun (jeans in sells_categories).

## FAQ sources

One Ahrefs call: `keywords-explorer-matching-terms`, keywords "buckle store", US, terms=questions, volume desc.

| Used | Question | source |
|---|---|---|
| Yes | What kind of store is Buckle? (50) | `what kind of store is buckle` |
| Yes | What store is similar to Buckle? | People also ask on `stores like buckle` (`source: people_also_ask`) |
| Yes | Is Buckle a high end store? | People also ask on `stores like buckle` (`source: people_also_ask`) |
| Yes | Can you return Buckle online orders in store? (10) | `can you return buckle online orders in store` |

Skipped: store near me / closest store (local), Afterpay (not stored), outlet store (not stored), plus size in store (not stored), western store (no stored fact either way), manager pay, shipping times, "blueberry buckle" (a cake).

## G1–G15

| Row | Result | Evidence |
|---|---|---|
| G1 People-first | PASS | A shopper replacing Buckle gets stores sorted by why they'd go there (brand mix, fit, price, shipping). |
| G2 Original value | PASS | Regular-price jeans ranges read from each store, Buckle's own $54.99–$308, brand overlaps (KanCan and Flying Monkey at maurices; Levi's, Good American, 7 For All Mankind at Dillard's) that no ranking list has. FAQ answers come from stored facts, not PAA paraphrase. |
| G3 Expertise visible | PASS | Concrete trade-offs per pick: shipping thresholds vs Buckle's card-member $99, size runs, return fees. |
| G4 Honest creator claims | PASS | No first-person experience; "we" not used for testing. Author Ash, bio untouched. |
| G5 Author | PASS | `author: "Ash"`. Not YMYL. |
| G6 Accurate | PASS | Fact trace below; every number from a brand file or this run's reads. |
| G7 Safe | N/A | Not YMYL. |
| G8 Honest title | PASS | "14 Stores Like Buckle for Denim and Casual Fashion": 14 real picks, all sell jeans. |
| G9 Intent + direct answers | PASS | Each pick opens with what it's best at; "How to choose" maps needs to picks. |
| G10 Complete | PASS | Price, sizes, shipping and returns per pick; men's shoppers pointed to A&F and PacSun. |
| G11 Most helpful first | PASS | Intro 71 words, no process; picks 105–128 words. |
| G12 Fresh | PASS | All prices read 2026-10-29; template shows the date. |
| G13 Better than what ranks | PASS | The ranking lists are taglines or one-line blurbs with no prices; this page has verified prices, sizes and policies. |
| G14 Commercial honesty | PASS | No implied testing; affiliate links go through the template's `/go/`. |
| G15 Craft | PASS | No em dashes, semicolons, bold; no sentence over 30 words (scripted check). |

## Voice check (`voice.md` "What we never write")

- Process narration: none (no "we checked", dates, "its page says", or what couldn't be confirmed).
- Spreadsheet sentences: none. Counts appear only as reasons (272 stores "so trying a pair on in person is often an option").
- Verdicts on brands: none. Invented experience: none ("feels", "runs small" absent). Hype words: none.
- One colloquialism ("yes, the name fits the brief", Forever 21).

## AI-voice scan (`ai-voice-avoid.md`)

Fixed: a "not X, a Y" contrast in Superdry; colon reveals in PacSun and Old Navy; four sentences over 30 words split; a filler joke ("you'll be there all evening") cut. Rule-of-three lists trimmed to two where possible (brand lists stay as facts). No AI vocabulary, no throat-clearing openers, no tidy moral endings.

## Fact trace (copy → stored field)

- Intro/closing/FAQ Buckle facts: `buckle.prices.jeans` ($54.99–$308), notes (BKE, Buckle Black, Levi's, Miss Me, Rock Revival; 440 stores, 42 states; denim 42.5%; 15–30 target from the 10-K note; 60-day returns, $6.99 mail fee, in-store free; $99 card-member free shipping; BKE Taylor Low Slung Baggy Wide Leg $79.99; KanCan and Flying Monkey in the listing).
- PacSun: notes (Seal Beach surf shop, baggy jeans, free shipping on jeans or over $59, US only, own label + other brands).
- maurices: `prices.jeans` + notes (m jeans Classic Mid Rise Flare $34.90, Silver Jeans Suki Curvy Embellished Slim Boot $108, KanCan, Flying Monkey, sizes 0–24, Curvy/Petite, free over $50, ships CA, returns anytime, $6.95 mail fee).
- American Eagle: notes (jeans-first title, Curvy fit, AE Curvy Super High-Waisted Baggy Wide-Leg Jean), `returns_days` 60, `free_shipping_min_usd` 75.
- Forever 21: price note (Low Rise Bootcut Denim With Wide Buckle Detail $44, Straight Leg Denim $38), notes (denim mostly skirts and shorts, online only, 50 states, free over $50, $9.99 return fee, clearance final), `size_range`.
- Lucky Brand: notes (1990, denim and Americana, cut names, waists 24–35, inseams 27–34, Extended Sizes 33–35 and 2XL), `free_shipping_min_usd` 85, `us_stores`. Nordstrom Rack brands note (Lucky, Levi's, Joe's).
- Levi's: Buckle listing (Cinch Baggy Wide Leg $84.95), notes (1853 San Francisco, stores in 40 states). Dillard's and Rack brand notes.
- Gap: price note (Curvy High Rise Stride Wide-Leg Ankle $79.95), size notes, rewards free shipping over $50, 30 days. Old Navy $34.99.
- Aeropostale: price note (flat $64.95 / $69.95 embellished: rhinestone heart, denim stars, lace flowers; low-rise names), sizes, free over $25, Wikipedia note (teens and young adults). Dillard's 7 For All Mankind.
- Old Navy: price note (Curvy Mid-Rise Wow Bootcut $34.99, Altuzarra $69.99), sizes 00–30 petite/tall, inseams, free over $50, 30 days.
- Nordstrom: price note (Roaman's $20, Burberry $835), shipping (free, no minimum), returns (no time limit), sizes.
- Dillard's: notes (Levi's, Good American, 7 For All Mankind; 272 stores, 28 clearance centers, 30 states; sizes; 30 days; free over $150, $9.95 under).
- Superdry: price note (Mid Rise Baggy $74.95, organic styles $109.95, Organic Cotton names), Wikipedia note (British, 2003), waists 24–34, US store in USD.
- Abercrombie & Fitch: price note (men's $80–$110, Relaxed Straight, 90s Straight, Baggy/Ultra Baggy $90, Relaxed Workwear $110, Baggy Workwear Pant $100), waists 26–38, ships US/CA free over $99, women's cuts from nav note.
- Nordstrom Rack: price note (Levi's 501 '90s $49.97, comparable value shown, brands), sizes, free over $89, 40 days; listing 2,961 vs Nordstrom 8,472 ("a fraction").

## Open items

See `human_check`: Buckle shipping terms (help center behind Cloudflare), Buckle size range (from product pages, not a size guide), PacSun/AE jeans prices, and Forever 21's `product-images.json` "jeans" entries, which are joggers and leggings, not jeans (coordinator: filter that feed before the page shows them. The top three picks have no jeans shots, so `lib/catalog.ts` would take F21's jogger as this page's first shot).

- **Estimated Page Quality:** High. Strongest reason: verified regular-price jeans ranges and policies for every priced pick, set against Buckle's own range.
- **Estimated Needs Met (stores like buckle):** Highly Meets. What would make it better: regular prices for PacSun, American Eagle, Lucky Brand and Levi's, and a fifth independent list.
