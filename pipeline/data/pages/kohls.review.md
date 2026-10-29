# Review: stores like Kohl's (steps 2–5)

Run 2026-10-29. Author: Ash. C = `womens-clothing` (Kohl's 10-K: Women's is its largest line of
business, $3,601M of 2025 net sales). Like-for-like price item: women's jeans, as on the TJ Maxx
and Nordstrom pages.

## Gate (lib/pipeline.ts → judgeBrandsLikePage, now = 2026-10-29)

- Renderable picks: **11 / 11**. Title: "11 Stores Like Kohl's for Great Brands and Incredible Value".
- `pickProblems` returns `[]` for all 11.
- **Not indexable**: `anchor missing: sizeRange, shipsTo, returnsDays, price:womens-clothing`.
  kohls.com, its catalog pages and cs.kohls.com return 403 to WebFetch (not worked around), so these
  can only come from a human (human_check 1). Every `price_relation` is null for the same reason.
- `npm test` 29/29 pass; `npm run lint:facts` ok.

## Picks

| Rank | Pick | Type | Sources (F/G/S/Q) | How it passes the gate |
|---|---|---|---|---|
| 1 | Macy's | department store | 4 | existing file: macysinc.com + 10-K; macys.com 403 |
| 2 | JCPenney | department store | 3 (F, G, Q) | **new file**: corporate.jcpenney.com (600+ US/PR stores, apparel; Liz Claiborne capsule); jcpenney.com 503 |
| 3 | Dillard's | department store | 3 (F, S, Q) | existing file: store read, jeans price $36–$350 |
| 4 | Nordstrom | department store | 3 (F, S, Q) | existing file: store read, jeans price $20–$835 (max a sample) |
| 5 | Target | discount store | 4 | existing file: target.com + corporate.target.com |
| 6 | TJ Maxx | off-price | 3 (F, S, Q) | existing file: tjx.com + TJX 10-K |
| 7 | Ross | off-price | 3 (F, S, Q) | existing file: Ross's own release on SEC |
| 8 | Walmart | discount store | 3 (F, G, S) | **new file**: Walmart 10-K ("apparel for adults and children", 4,611 US stores); walmart.com bot check |
| 9 | Burlington | off-price | 2 (F, S) | existing file: own site + release on SEC |
| 10 | Marshalls | off-price | 1 (F) | existing file: tjx.com + TJX 10-K |
| 11 | Old Navy | single-brand chain | 1 (F) | existing file; this run added `womens-clothing` to sells_categories from the women's jeans page |

F = FinanceBuzz (updated Sept 2026; the one editorial page in the Ahrefs SERP), G = GOBankingRates
on AOL (Mar 2025), S = SavingsGrove (Feb 2026), Q = QuerySprout (Dec 2021, framed as competitors,
counted as supporting only: no pick rests on Q alone). Ahrefs returned no SERP for "kohls
alternatives", "similar to kohls" or "brands like kohls" (4 calls used); G, S, Q came from WebSearch.
Ranking: department stores first (same type) by source count, then the value chains by source count.
Rejected with reasons in the page file: Belk (1 source, belk.com 403), HomeGoods (home only),
warehouse clubs, Amazon, Express, QVC, Ulta, Gap/Neiman Marcus/Bloomingdale's (Q only), Apart pool.

## FAQ sources (Ahrefs)

One call: `keywords-explorer-matching-terms`, "kohls", US, terms=questions, volume desc, limit 60.

| Used | Question (US volume) | Answered from |
|---|---|---|
| Yes | what does kohls sell (200) | kohls notes (10-K: moderately-priced proprietary and national brand apparel, footwear, accessories, beauty, home; Sephora within Accessories; Sonoma, Croft & Barrow, Apt. 9) |
| Yes | who owns kohls (250) | parent_company; notes (1,153 stores, 49 states, website; LC Lauren Conrad, Simply Vera Vera Wang) |

Skipped (no stored fact): opening hours, Kohl's Cash and Sephora, Amazon returns, return policy,
Apple Pay, price adjustments, store closings, Needoh/Pokémon stock, dogs, credit card questions,
"does amazon own kohls" (no stored fact says who doesn't own it).

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | "Stores like Kohl's" for US shoppers is the site's purpose; clothing-led stores only. |
| G2 | PASS | Stored store facts the ranking lists don't carry: Dillard's and Nordstrom regular-price jeans ranges and sizes, Nordstrom no-limit returns, Target 1-year own-brand returns, Old Navy 00–30, Macy's Backstage, Walmart same-day pickup. Comparisons between picks are ours. |
| G3 | PASS | Concrete trade-offs per pick (Dillard's 30 states and $150 free shipping vs Nordstrom free shipping; in-store-only Ross/Burlington vs TJ Maxx online). |
| G4 | PASS | No first-person experience; "we" is never claimed to have shopped or tried anything. |
| G5 | PASS | Author Ash, bio in lib/authors.ts. Not YMYL. |
| G6 | PASS | Every number traces to a brand-file field or note (fact trace below). |
| G7 | PASS | N/A (not YMYL). |
| G8 | PASS | Title count 11 = renderable picks; known_for from Kohl's own release wording. |
| G9 | PASS | Answers "where else can I shop like Kohl's" with same-type stores first, then value chains, each with a use case. |
| G10 | PASS | How to choose covers budget, trade-up, off-price and basics; FAQ covers what Kohl's sells and who owns it. |
| G11 | PASS | Intro 77 words, no preamble; each pick opens answer-first. |
| G12 | PASS | All facts checked 2026-10-29 (page and brand files); dates live in data, not copy. |
| G13 | PASS (with caveat) | More specific than FinanceBuzz/SavingsGrove on sizes, shipping, returns and real prices where readable. But 7 of 11 picks show no price because their stores refuse reads, which caps it. |
| G14 | PASS | No implied testing; affiliate links via the template's /go/ with disclosure. |
| G15 | PASS | Read as a whole; picks cross-refer without repeating each other's openers. |

**Estimated Page Quality:** High. Strongest reason: store-level facts (sizes, returns, shipping,
regular-price jeans ranges) turned into choices between named stores.
**Estimated Needs Met:** Highly Meets once the anchor's own facts are filled; the one improvement
is readable prices for Macy's, JCPenney, Walmart and the off-price chains (human check).

## Voice check (voice.md "What we never write")

None present: no process narration, dates, "we checked", source names, verdicts, invented
experience or hype. No semicolons, em dashes, bold or italics. Contractions throughout; brands are
"it". One colloquialism ("half the fun"). Every body 112–125 words; Best for lines 7–10 words,
lowercase, no full stop; closing 104 words.

## AI-voice scan (ai-voice-avoid.md)

Fixed in drafting: two sentences over 30 words split (Walmart, Old Navy); a repeated "label's"
construction (JCPenney); a doubled EDLP sentence (Walmart); unsupported comparatives removed
("closest to Kohl's in price", "more designer denim" than Kohl's, "more range than any store here",
"costs you nothing" returns, TJ Maxx "no store labels"). No "not X, it's Y" constructions, no
rule-of-three tails, no colon reveals, no "whether you're". Smell test: every sentence names a
store-specific fact.

## Fact trace

- Intro: Sonoma Goods for Life, Croft & Barrow, cheaper store labels → kohls notes (10-K: proprietary brands generally lower selling prices than national brands).
- Macy's: market and private brands, women's/men's/kids', Backstage 300+ and 4 freestanding → macys notes.
- JCPenney: apparel, home, jewelry, beauty; private and national brands; US and Puerto Rico; Liz Claiborne petite to plus, blazers and pleated trousers, in-store and JCPenney.com → jcpenney notes. Old Navy 00–30 → old-navy size_range.
- Dillard's: $36 Celebrity Pink/YMI, $350 Johnny Was, NYDJ/Levi's/Good American, 00–16 and 1X–3X petite/plus, clearance centers, 30 states, $150 free shipping → dillards prices + notes. Kohl's 49 states → kohls notes. Nordstrom free shipping no minimum → nordstrom notes.
- Nordstrom: $20 Roaman's, $835 Burberry ("past $800"), free US shipping, no return time limit, 00–28W petite and tall → nordstrom prices + notes. Dillard's 3X → dillards notes.
- Target: all 50 states, Universal Thread High-Rise Vintage Straight $38, Levi's High-Rise Cinch Baggy $74.99, A New Day, Wild Fable, Lee, Lucky Brand, 90 days, 365 days own brands with receipt → target notes.
- TJ Maxx: off-price family apparel, beauty, home; The Runway in select stores; Marshalls shoes and menswear; tjmaxx.com → tj-maxx and marshalls notes. Ross/Burlington no online ordering → their notes.
- Ross: name-brand and designer apparel, shoes, home, whole family; no online ordering; "items will vary by store"; 44 states → ross notes.
- Walmart: EDLP, apparel for adults and children, shoes, jewelry, accessories, all 50 states, Time and Tru, Free Assembly, same-day pickup and delivery → walmart notes. Target Levi's → target notes.
- Burlington: coats (known_for, Coats department), Ladies/Mens/Juniors/Plus, beauty, shoes; in-store only; 47 states, DC, PR; store directory by state → burlington notes.
- Marshalls: same family apparel, beauty, home; footwear for women, men, kids; broader men's; shop both chains; marshalls.com → marshalls notes.
- Old Navy: $34.99 Curvy Mid-Rise Wow Bootcut, $69.99 Old Navy x Altuzarra, most $44.99–$54.99 OG/Vintage Slim/Rockstar, Wow line cheapest, 00–30 petite and tall, free shipping $50 rewards members, 30-day returns → old-navy prices + notes.
- FAQ: kohls notes (10-K, 1,153 stores, 49 states, Sephora, exclusive brands).
