# Review: brands like Lazy Oaf (steps 2–5)

Produced 2026-10-29 end to end per `pipeline/run-page.md`. Author: Ash. Category C = `tees`
(Tees): Lazy Oaf started in 2001 with hand-printed T-shirts, its top best-seller is a T-shirt, and
T-shirt product types (269) are second only to dresses (289) in its 2,353-product US feed, while
the outside sources' alternatives are mostly graphic-tee labels that sell no dresses (see
`category.why`). Prices are what a US shopper is charged: Lazy Oaf from its US storefront
uslazyoaf.com (the en-US hreflang target of lazyoaf.com, USD, cart.js), not converted from pounds.

## Enrichment summary

- **SERP** (Ahrefs `serp-overview`, US, 4 calls): `brands like lazy oaf`, `stores like lazy oaf`
  and `similar to lazy oaf` returned results; `lazy oaf alternatives` returned none.
  Kept 5 pages from the top 10: I AM & CO (11 brands), eTechShout (15), CoolSpotters (18),
  ViralTalky (6), BestUnder250 (5). Disco's Lazy Oaf page (16 brands; its title is on the Pinterest
  pin at #5) was read directly and counts as evidence, never named in copy. Dropped: Reddit (6
  threads plus the master list, refused, not worked around), Pinterest, Instagram, similist,
  Similarweb, the anchor's own sites, finder.com.au (410), freesiteslike (503), similarsitesearch
  (auto-generated). Maiazine and We Are Hairy People were read: both list Lazy Oaf beside other
  brands but recommend none as an alternative, so they give no sources. Good On You doesn't
  mention Lazy Oaf.
- **Independence caveat:** eTechShout and CoolSpotters share most brands and wording; counted as
  separate domains, flagged in `human_check`.
- **Co-stocking:** ASOS not read (errors on another run); none taken.
- **Pool:** 50 `public.brand_relationships` rows for lazy-oaf (read-only SQL). Valfré, O-Mighty,
  MARKET, Dolls Kill and UO also have outside sources; the other 42 are candidates with no sources.
- **Verified 24 candidates** via fetch (bot UA, or WebFetch where curl was refused). Brand files via
  `merge_brand.py`, patches in the scratchpad `lazy-oaf/patches/lazy-oaf/`: new princess-highway,
  gorman, brain-dead, aries, tombolo; a `tees` entry added to lazy-oaf, stussy, the-ragged-priest,
  dangerfield, valfre, o-mighty, anti-social-social-club, aelfric-eden, blackmilk (none had one, so
  nothing was overwritten); the-ragged-priest also got `hq_country` GB and `founded_year` 2007
  (empty before, from its meta.json). `npm run lint:facts`: ok.
- **US storefronts used:** uslazyoaf.com, dangerfield.com.au/en-us, princesshighway.com.au/en-us,
  gormanshop.com.au/en-us, us.ariesarise.com (all USD by cart.js). The Ragged Priest (GBP) and
  Blackmilk (AUD) have no US setting: converted at ECB 2026-10-28.
- **Rejected** (see `rejected`): Maisie Wilen (4 tees at $175–$275, no positioning text), Eckhaus
  Latta, Monki (403), Supreme (access denied / no products shown), Off-White, MSGM (404), Awake NY
  (401), MARKET (pool URL is a different Wisconsin store), Ice Cream (connect failed), Cactus Plant
  Flea Market (no tees), Blue Banana (stored file is a different, Madrid brand), retailers (UO,
  ASOS), Alltimers (closed), plus single-source brands past the 25 cap.
- **Price rule:** regular = in stock, no variant with compare_at_price above price. Tees = T-shirts
  and tees by title, short and long sleeve; tanks, vests, polos, multipacks, T-shirt dresses,
  sweatshirts and kids excluded.

## Gate result (Check step)

`npx tsx` scratch script: `pipelinePages()` from `lib/pipeline.ts`, `judgeBrandsLikePage`,
now = 2026-10-29.

```
indexable: true reasons: []
renderable: 13 / 13 (every pickProblems list empty)
title: 13 Brands Like Lazy Oaf for Irreverent Independent Streetwear
```

Price labels (anchor $59–$93): cheaper The Ragged Priest ($46.51–$50.49), Valfré ($58); pricier
Aries ($95–$195); the rest similar. Six picks rest on one source (disco or BestUnder250).

## G1–G15 (reference/google-search-quality.md, Part 9)

| Row | Result | Evidence |
|---|---|---|
| G1 People-first | PASS | A US shopper looking for Lazy Oaf-style tees; on topic for a brand directory. |
| G2 Original value | PASS | Regular-price US tee ranges, sizes, return windows and duties per brand, read from each store today; none of the ranking lists have prices. FAQ from Ahrefs questions, not PAA paraphrase. |
| G3 Expertise visible | PASS | Concrete trade-offs per pick (return windows, made-to-order wait, size ceilings, currency), named products with prices. |
| G4 Honest creator claims | PASS | No first-person experience; "we" not used for wearing or testing. Author Ash, bio untouched. |
| G5 Author | PASS | `author: "Ash"`; not YMYL. |
| G6 Accurate | PASS | Fact trace below; two misleading notes in brand files corrected during review (Dangerfield and Lazy Oaf US-vs-home price comparisons). |
| G7 Safe | N/A | Not YMYL. |
| G8 Honest title | PASS | 13 real picks; known_for from Lazy Oaf's own meta ("irreverent streetwear"). |
| G9 Intent match | PASS | Answers "brands like Lazy Oaf" with brands, each compared to Lazy Oaf and to each other. |
| G10 Complete | PASS | Price, sizes, shipping, returns per pick; How to choose by budget, graphics, returns; FAQ on US shipping. |
| G11 Helpful first | PASS | Intro 71 words, no process; answer-first opener in every body. |
| G12 Fresh | PASS | All prices 2026-10-29; template shows the Last checked date. |
| G13 Better than ranking | PASS | Ranking lists (2022–2026) have no prices, include defunct or luxury-only names and mostly duplicate each other; this one prices every pick for a US shopper. |
| G14 Commercial honesty | PASS | No client at #1; no implied testing; criticism is of specific terms (returns, duties, sizes). |
| G15 Craft | PASS | 7-gram check against every sibling page: no shared sentences; shared phrases with pages that share picks (aelfric-eden, unif, minga-london, madhappy, cold-culture, chrome-hearts, kendra-scott) were reworded. |

## Voice check (pipeline/voice.md "What we never write")

- Process narration: none (no "we checked", dates, "its About page says").
- Spreadsheet sentences: none. Rankings appear only with a reason ("the most forgiving terms on
  this list: 60 days…"; "cheapest of the main line").
- Verdicts on brands: none. Invented experience: none ("feels like a holiday" is the brand's own
  escapewear claim, not wear experience).
- Hype: none. No semicolons, em dashes, bold. "It" for brands throughout.
- Moves: answer-first line with a named product and price per pick, one useful thing per brand
  (Valfré: pick your sign; Ragged Priest: pick the cut; Blackmilk: shape before print; Gorman: cut
  is in the name; Aries: No Problemo line), an honest trade-off per pick, cross-pick pointers
  (Stüssy → Tombolo, Ragged Priest → Blackmilk, Gorman → Princess Highway, ASSC → Blackmilk,
  O-Mighty → Brain Dead/Aries), use-case Best for lines.

## AI-voice scan (reference/ai-voice-avoid.md)

Fixed during drafting: rule-of-three lists cut to two where they weren't the brand's own words
(ASSC "no returns, exchanges or store credit" → "not even for store credit"); stacked "and…, and…"
sentence split (Brain Dead); empty praise removed ("a good graphic tee"); unsupported "obvious one"
(Gorman) and "closest" superlatives (Dangerfield, Brain Dead "most relaxed") replaced with checkable
claims; repeated "Its US store charges in dollars" varied. Remaining triads are factual lists (a
brand's own "punk, goth and vintage-inspired"; Gorman's three cut names). Smell Test: every
sentence names this brand's product, price, size or term.

## Fact trace

- Intro: $62 (lazy-oaf tees, most $62); posting back to the UK (lazy-oaf notes: returns to UK
  warehouse); "irreverent, nostalgic" (lazy-oaf meta); $30–$195 (aelfric-eden min $29.95, aries max
  $195); all deliver to the US (every pick `ships_to` has US).
- Stüssy: $45–$65, Basic Stüssy Tee/8 Ball Tee $45, Lazy LS Tee $60 (stussy tees); XS–XXL (tees
  note); free over $200 (free_shipping_min_usd; lazy-oaf 200); 7 days, no exchanges (stussy notes);
  Lazy Oaf long sleeves from $77 (lazy-oaf tees note: Happy Tab LS $77).
- Dangerfield: positioning (dangerfield notes meta); $53–$71, Big Cat Tee, Sketchy Raglan Tee, Princess
  Highway and Black Friday tees in store, most marked down (tees note: 282 of 300); AU 6–20 / XS–3XL
  (tees note); 14 days (returns_days).
- The Ragged Priest: "British Grunge since 2007 … Designed in London" (meta, notes); £35–£38, about
  $47–$50 (tees, ECB); products and cut sizes (tees note); free US over $90; 28 days; Lazy Oaf
  Pompompurin Face T-Shirt (lazy-oaf tees note).
- Valfré: artist shop, tees only apparel, ceramics/stationery/bags (valfre notes); $58, Cósmica
  zodiac, S–XXL (tees); 21 days exchange/credit, 10% restocking fee (notes).
- O-Mighty: $46–$65, most $46–$48, named tees (tees note); womenswear, XL top size, DDU duties, 7-day
  credit/exchange, buyer pays return shipping (o-mighty notes, size_range).
- Princess Highway: positioning (meta); $35–$62, named tees, most marked down (tees note 30 of 36);
  AU 6–20 = US 2–16 (notes size navigation); sold in Dangerfield's store (dangerfield tees note); 14
  days (refund policy note).
- Gorman: positioning (meta); $91–$118, Right Meow Baby Tee $91, Right Meow Placement Oversized Tee
  $118, cut names (tees note); AU 4–20 = US 0–16; shipping by weight, no free threshold abroad; 14
  days (notes).
- ASSC: $55–$85, NFL tees $55, Cancelled Again Tee $75 (tees note); made to order 4–6 weeks + 1–2 weeks,
  all sales final, S–XXL some XS (anti-social-social-club notes, size_range).
- Brain Dead: meta positioning; $32–$95, named tees, XS–XXL (tees); 7 days from delivery (notes);
  Lazy Oaf collabs (LO x DHMIS, LO x Lauren Martin in lazy-oaf tees note).
- Tombolo: meta (escapewear, original artwork, unisex sizing, NYC); $88–$108 and named tees, 9 of 12
  terry, 3XL on some (tees note); free over $75, 30 days, $6 fee (notes).
- Aelfric Eden: $29.95–$69.95, 47 of 54 at $34.95–$49.95, named tees, XS–XL (tees note); free over $50,
  30 days (stored fields).
- Blackmilk: A$35–A$99, about $25–$70; Pikachu Electricity Giant Tee A$79 ($55.56), Meow Cotton Baby
  Tee A$49 ($34.46), Giant tees S and L (tees note); XXS–XXL = US 2–20, 60 days, free intl from A$119
  ≈ $84 (notes).
- Aries: About text (luxury streetwear, trash culture, outsider art); $95–$195, Jolene Wizard $95,
  Temple SS Tee $105 in two versions, No Problemo from $56, XXS–XXL (tees note); 14 + 14 days, buyer
  pays postage (notes).
- How to choose: ranges above; returns 60/30/7/7/none (blackmilk, tombolo, stussy, brain-dead, assc).
- FAQ (Ahrefs `keywords-explorer-matching-terms`, "lazy oaf", questions, US; source_query on each):
  US shipping (lazy-oaf notes: $200 free, duties at checkout, US returns from $19 to UK warehouse;
  uslazyoaf.com USD); founder (About: Gemma Shiel, North London garage, 2001, East London stall);
  what is (meta: irreverent streetwear for men and women, youth nostalgia, teenage rebellion; tees
  $59–$93, most $62, XS–XXXL). Skipped: vegan, fast fashion, ethical, why expensive, shipping time,
  where to buy (no stored facts).

## Part 9 lines

- **Estimated Page Quality:** High (original, dated price and terms data for every pick; no Low
  triggers). Main weakness: six picks rest on a single outside source and two of the multi-source
  lists may share an origin.
- **Needs Met:** Highly Meets for "brands like Lazy Oaf" (US shopper wanting similar tees); Moderately
  Meets for readers after Lazy Oaf-style dresses or knitwear, which this tees page doesn't price.
