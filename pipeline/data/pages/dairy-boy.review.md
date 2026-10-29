# Review: brands like Dairy Boy (steps 2–5)

Produced 2026-10-29 end to end per `pipeline/run-page.md`. Author: Ash. Category C = `sweatshirts`
(Sweatshirts): Dairy Boy's hero product (its first product was an embroidered sweatshirt; coverage
ties it to camo sweatshirts), priced from its own Sweatshirts & Hoodies collection. See
`category.why`.

## Result in one line

**Not indexable: 1 renderable pick of 1 (gate floor is 6).** The evidence base for this subject
is thin, and the list is not padded.

## Enrichment summary

- **SERP** (Ahrefs `serp-overview`, US, 4 calls): all four keywords (`brands like dairy boy`,
  `stores like dairy boy`, `dairy boy alternatives`, `similar to dairy boy`) returned no positions.
- **WebSearch** (8 queries): two pages recommend alternatives to Dairy Boy and were kept:
  - Penn State student brand analysis (2023-09-13): "One brand that I would consider to be their
    competitor is madhappy."
  - LBB, "Love Dairy Boy's Preppy Clothing? 7 Indian Brands To Bookmark Instead" (Days For
    Clothing, TRAPIN, SIX5SIX, LAB 88, Spacelines, Stamp Duty, Lovebirds).
  - Read and dropped as peer-grouping, not recommendations: The Vault (UW–Madison), Lunch Culture,
    The Everygirl, Fetch Collective, TCU360 (they group Dairy Boy with Parke, The Bar, Daily Drills,
    Set Active). Cosmopolitan preppy list never mentions Dairy Boy. BoF 403, wildlabsky 410.
    TikTok, resale sites, brandsearch.co and apartstyle.com not used.
- **disco** (new rule): no Dairy Boy page exists (sitemap of 6,227 URLs checked).
- **Co-stocking:** none. Dairy Boy sells direct (site, pop-ups, Nantucket store). The 2023
  Urban Outfitters collab isn't a current stockist; urbanoutfitters.com returns 403.
- **Pool:** Apart Style's `public.brands` has no Dairy Boy row, so `brand_relationships` is empty.
- **Verified** through `merge_brand.py` (patches in the scratchpad `dairy-boy/patches/`):
  new files `dairy-boy`, `madhappy`. `npm run lint:facts`: ok.
- **LBB candidates all fail §3:** five sell no regular-price sweatshirts (DFC, TRAPIN, Spacelines,
  Lovebirds; SIX5SIX's are all marked down), LAB 88 ships within India only, and Stamp Duty's
  quarter-zips are woven cotton/wool outerwear pullovers, not sweatshirts. No files written.
- **Price rule:** regular = in stock, no variant with compare_at above price. Madhappy's 38
  licensed hoodies tagged "Final Sale" have no markdown, so they count as regular (enrich.md:
  a sale tag with no markdown is still regular price). Range $150–$225.

## Gate result (Check step)

`npx tsx` scratch script: `pipelinePages()` from `lib/pipeline.ts`, `judgeBrandsLikePage`,
now = 2026-10-29.

```
indexable: false
reasons: [ "only 1 publishable picks (need 6)" ]
renderable: [ "madhappy" ]   total picks: 1
anchorMissing: []
pickProblems: { madhappy: [] }
title: "1 Brands Like Dairy Boy for Camo Sweatshirts and Country Loungewear"
```

Note for the coordinator: the title helper prints "1 Brands" for a single pick. It only matters
if a one-pick page is ever rendered; the page is noindex either way.

## G1–G15

| Row | Result | Evidence |
|---|---|---|
| G1 People-first | PASS | A Dairy Boy shopper wanting a sweatshirt swap is Stylodex's core audience. |
| G2 Original value | PASS | Regular-price sweatshirt ranges, fabrics, return windows and fees from each store; no ranking page has them. FAQ answered from stored facts. |
| G3 Experience | PASS (scoped) | No first-hand claims; specifics are store facts (fabric, made in LA, fees). |
| G4 Honest creator claims | PASS | No tried/wore/felt language; nothing beyond Ash's bio. |
| G5 Author | PASS | author "Ash"; not YMYL. |
| G6 Accurate | PASS | Every number traces to a brand-file field or price note (fact trace below). |
| G7 Safe | N/A | Not YMYL. |
| G8 Honest title | FAIL (blocked by gate) | "1 Brands Like…" promises a list it can't deliver well; the page is noindex until it has 6+ picks. |
| G9 Intent | FAIL | The intent is a list of alternatives; one pick doesn't serve it. |
| G10 Complete | FAIL | A reader would need a second search for more options. |
| G11 Helpful first | PASS | Intro states the price line; the pick opens answer-first. |
| G12 Fresh | PASS | Prices and policies read 2026-10-29. |
| G13 Better than ranks | FAIL | Fewer options than the TikTok and listicle results people see. |
| G14 Commercial honesty | PASS | Closing tells readers to stay with Dairy Boy when price or camo is the point. |
| G15 Craft | PASS | No spelling issues; no em dashes, semicolons or bold. |

G8–G10 and G13 can't be fixed by writing; they need more evidenced picks. The gate already keeps
the page out of the index.

## Voice check (`pipeline/voice.md` "What we never write")

- Process narration: none (no "we checked", dates, sources or method in the copy).
- Spreadsheet sentences: none. Ranges read as words.
- Verdicts on brands: none. Trade-offs are about attributes (shipping threshold, final sale).
- Invented experience: none ("heavier" and "weight" come from Madhappy's "Heavyweight Fleece"
  and Dairy Boy's own "without the weight of a traditional sweatshirt").
- Hype: none.
- Moves: answer-first opener with a named product and price; why facts matter (store credit
  waives the $12 fee); one useful thing (licensed hoodies are final sale); honest catch; use-case
  Best for; How to choose comparing both stores. Comparison between picks isn't possible with one.

Lengths: intro 69 words, Madhappy body 150, How to choose 105, Best for 8, FAQ answers 20–32.

## AI-voice scan (`ai-voice-avoid.md`)

Checked for rule-of-three lists (one trimmed from the FAQ price answer), em dashes, semicolons,
"not just X but Y", stacked hedges, hype vocabulary and same-length sentence runs. None remain.

## Fact trace

| Copy | Source field |
|---|---|
| Dairy Boy sweatshirts $88–$95 | dairy-boy prices.sweatshirts min/max |
| Oversized Crewneck ($88), Diana Rollneck and Oversized Hoodie ($95) | dairy-boy price note |
| Camo crews cotton French terry; Cloud Terry skips the weight | dairy-boy materials + price note (product copy) |
| Lowcountry and Decoy Camo crews and hoodies | dairy-boy price note |
| Free US shipping over $175 | dairy-boy free_shipping_min_usd |
| 18-day returns, $10.95 fee, 30 days store credit, final-sale categories | dairy-boy returns_days + notes |
| Paige Lorenze, 2021, New England roots, clothing/denim/housewares | dairy-boy founded_year + notes (About Us) |
| Westport CT address; 14 Federal Street, Nantucket | dairy-boy notes (privacy policy, store page) |
| Classics Fleece Crewneck $165, 100% cotton heavyweight, made in LA | madhappy price note + notes |
| Zip-up $185 | madhappy price note |
| XXS–XXL relaxed unisex fit | madhappy size_range + notes |
| 30-day returns; $12 refund fee waived for credit/exchange | madhappy returns_days + notes |
| Free US shipping from $200 | madhappy free_shipping_min_usd |
| Dodgers, Disney, Peanuts hoodies final sale | madhappy price note (Final Sale tags) + FAQ note |
| Madhappy US shops | madhappy us_stores + notes |

## Estimated Page Quality and Needs Met

- **Page Quality: Medium.** Accurate and original on what it covers, but one option is too thin
  for the query.
- **Needs Met: Slightly Meets** for "brands like dairy boy". Correctly noindex until real picks
  exist.
