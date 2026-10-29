# Review: brands like UNIF (steps 2–5)

Run 2026-10-29 per `pipeline/run-page.md`. Author: Ash. url_prefix `brands`, slug `unif`.
Category C = `tops`. Tops are UNIF's largest newly made product type (Women's Tops 61 of 482
products. One-off Vintage resale is 226, Women's Shoes 50). Every outside list compares clothing
labels, not shoes. Platform boots are the hero line, so C is in `human_check`.

## Enrichment

- **SERP (Ahrefs, 4 calls, US):** `brands like unif`, `stores like unif` and `unif alternatives`
  returned data. `similar to unif` returned nothing. Five editorial pages from the top 10 were kept:
  iamandco (10 brands, no byline), charm.io (5, 2025-03-06), clothedup (10, Faith Lemaster,
  2021/2023), etechshout (17, 2022-01-28) and ewuta (10, Tony Brian, 2023-10-23). The discobrands
  directory entry (4 similar brands) is the sixth source. It is evidence only and is never named on
  the page. Dropped: Reddit, TikTok, YouTube, Instagram, Pinterest, Etsy, Quora and Facebook (not
  read). Who What Wear and Maiazine don't mention UNIF. Popsugar (WebFetch refused) is about Urban
  Outfitters. fortunategoods.com is parked. blowra gave a 503 and an expired certificate.
  storeslike.com is a templated directory. modvisor gave a 503. Lemon8 is thrift shops (rule 4c).
  soxy and plaintips sit outside the top 10. soxy copies etechshout's list, and plaintips is
  generic, so neither was counted.
- **Co-stocking:** none. Dolls Kill's `/collections/unif` feed has no products.
- **Pool:** 42 `brand_relationships` rows for `unif`. Most are streetwear or goth brands (Hellstar,
  VLONE, Killstar, Disturbia…). Six also have outside sources: The Ragged Priest, Killstar,
  Disturbia, Dolls Kill, Hot Topic and Urban Outfitters.
- **Anchor: verified.** unifclothing.com is a Shopify store in USD, Los Angeles. It has 44
  regular-price tops at $38–$108 in XS–XL. Free US shipping starts at $150. Returns must start within
  5 days. Sale and vintage pieces are final. 12 tops tagged final-sale were excluded as markdowns
  (they sit at 80% of a sibling style's price, see `human_check`). `founded_year` is left empty
  because the sources conflict. **human_check:** C (tops vs boots), the final-sale exclusion, the two
  status corrections, Urban Outfitters, and Disturbia's US-store URL.
- **Verified this run:** the anchor plus 18 candidates. That gives 14 picks, and the rest are in
  `rejected` with reasons. Not picked: Nasty Gal (4 sources, a Coming Soon page), Urban Outfitters
  (4 sources, the site refuses reads, no tops price), ASOS (unverified, a marketplace), New Girl
  Order (parked domain, no own store found) and Folkster (an Irish occasion-wear store, 5 regular
  tops). No bot wall was worked around: Joanie Clothing gave 403 on one try.
- **Brand files**, from patches in `scratchpad/unif/patches/`, merged one at a time with
  `python3 -I pipeline/merge_brand.py`:
  - New: `unif`, `dangerfield`, `blackmilk`, `valfre`, `disturbia` (website_url = the US store
    disturbia.us, USD, duties included), `goodbye-bread`, `big-bud-press`.
  - Tops price added: `the-ragged-priest`, `lazy-oaf`, `killstar`, `sister-jane`, `hot-topic`.
  - `wildfox`, `o-mighty`: tops price added, and `--overwrite status` changed off_category to
    verified. Both are live fashion stores. The old status recorded a category miss, which
    enrich.md says stays verified.
  - `goodbye-bread`: `--overwrite sale_pattern` (an apostrophe failed lint:facts).
  - `dollskill`: its tops price ($29–$79, another agent's, same day) was reused unchanged.
- `npm run lint:facts`: ok.

## Gate (step 3)

`npx tsx` script: loads the page with `pipelinePages()` from `lib/pipeline.ts`, then runs
`judgeBrandsLikePage(page, 2026-10-29)`.

```
{"indexable":true,"reasons":[],"rendered":14,"total":14,"title":"14 Brands Like UNIF for Vintage-Inspired Clothing and Shoes"}
```
No pick has gate problems. Every price_relation is `similar`, because each range overlaps UNIF's
$38–$108.

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | Stylodex is a directory of verified similar brands, and this page is that directory's purpose. |
| G2 | PASS | The ranking pages carry no prices, sizes, shipping or returns. Every pick here has its own store's regular-price tops range and its return window set against UNIF's 5 days. |
| G3 | PASS | Concrete trade-offs per pick: free-shipping thresholds vs UNIF's $150, no exchanges at BlackMilk, OMIGHTY's credit-only returns, Hot Topic's tops under Girls, Disturbia's duties. |
| G4 | PASS | No first-person experience. "We" appears only in the method box. No fit or feel claims. |
| G5 | PASS | Author Ash, bio from `lib/authors.ts`. Not YMYL. |
| G6 | PASS | Each number traces to a stored field (trace below). Conversions use ECB 2026-10-28. |
| G7 | N/A | Not YMYL. |
| G8 | PASS | "14 Brands Like UNIF for Vintage-Inspired Clothing and Shoes": 14 is the gate's real count, and known_for comes from UNIF's homepage title. |
| G9 | PASS | The intent is shops like UNIF. Each body opens with the brand and why it fits, with a named top and price. |
| G10 | PASS | Price, sizes, shipping and returns per pick, plus a How to choose section by budget, size, returns and look. |
| G11 | PASS | The intro is 78 words, then picks. No preamble about UNIF's history. |
| G12 | PASS | All prices read 2026-10-29. The page carries the Last checked date. |
| G13 | PASS | The top 3 (Reddit, iamandco, charm.io) give names and blurbs only. Here every pick has verified prices and terms, and the picks are compared with each other. |
| G14 | PASS | No pick is paid placement. Ranking follows outside sources (method box). Affiliate links go through `/go/` with disclosure. |
| G15 | PASS | Bodies were checked for repeated openers and lead-ins ("The catch is…" varied). Not a near-duplicate of Jaded London, Minga London or Selkie: the category and picks differ. |

**Estimated Page Quality:** High. Every pick carries verified store prices and policies that the
ranking lists don't have.
**Estimated Needs Met:** Highly Meets for "brands like UNIF". Adding Urban Outfitters (4 sources)
once its prices can be read would make it better.

## Voice check (`voice.md` "What we never write")

- Process narration: none (no "we checked", no dates, no source names).
- Spreadsheet sentences: none. Counts appear only as reasons ("half of UNIF's starting price",
  "three steps past UNIF's XL").
- Verdicts on brands: none. Invented experience: none (no fit or feel claims; "soft" and "more
  structure" were cut).
- Hype: none. Contractions are used, and each brand is "it". No semicolons, em dashes, bold or
  italics.

## AI-voice scan (`ai-voice-avoid.md`)

Found and fixed: the repeated lead-in "The catch is" (4×) and "The trade-off is" (2×). They are now
varied or cut. "Here's the useful part:" became "One tip:". Repeated "X is the pick for" openers
were varied (Killstar, Goodbye Bread, Big Bud Press). Lists were checked for rule-of-three (the
Dangerfield labels line was reworded). No hedging stacks, and no "whether you're…".

## Fact trace (copy → stored field)

- **UNIF:** $38–$108, Raglan Baby Tee $45, Sora Cami $55, Slint Top $108, the 5-day returns, sale
  items final, free shipping over $150, XS–XL, tracking, LA, some styles made in LA, and the Parker
  Platform Boot $198–$228. All from `brands/unif.json` (`prices.tops.note`, `notes`,
  `returns_days`, `size_range`, `production_model`).
- **The Ragged Priest:** Afterlife Skeleton Graphic Baby T-Shirt £35, Chamber Black Hardware Wrap
  Top £38, £35–£38 → `prices.tops`. Free over $90, 28 days, UK → existing fields and `meta.json`
  note.
- **BlackMilk:** Kirie Cotton Baby Tee AUD 59, Black Tie Front Tee AUD 35, max AUD 129 (under $100)
  → `prices.tops`. Free from AUD 119 (about $84), 60 days, no exchanges, XXS–XXL → `notes` and
  fields.
- **Lazy Oaf:** Broken Wings £45, Not Perfect Ruched Vest £40, Big Face Flower Shirt £95, XS–XXXL,
  Curve to UK 24 → `prices.tops` and `notes`. Free over $200, 28 days, London → existing fields.
- **OMIGHTY:** $46–$65, Hard To Get $46, Bambi Pointelle Tee $65, 2016 Corset Cami $55, Sorry For
  Being A Mom Leopard Tank $50, XS–XL, 7 days credit or exchange only, sale final → `prices.tops`
  and `notes`.
- **Dangerfield:** AUD 38–98, Andie Classic 90'S Tee, Affinity Goth Lace Top, Princess Highway and
  Black Friday vendors, AU 4–24 / US 0–20, shipping by weight, 14 days → `prices.tops`, `notes`,
  `known_for`.
- **Valfré:** Cósmica tees $58, S–XXL, ships from LA, tees its only apparel, ceramics, stationery
  and home, 21 days, 10% restocking → `prices.tops` and `notes`.
- **Hot Topic:** $18.90–$78.90, Reaperess Razor Back Top, Unique Vintage Black Lace Smocked Blouse,
  Spiral, /girls/tops → `prices.tops` and `notes`. 5XL, free over $75, 30 days, pop-culture
  known_for → existing fields.
- **Killstar:** $40–$85, Dead Come Alive T-Shirt $55, Funeral Rose Blouse $65, Astraria Corset Top
  $60, markdown share, 4XL → `prices.tops` and `notes`. Free over $175, 14 days → existing fields.
- **Big Bud Press:** LA, made in LA and the USA, mostly 100% cotton, Baby Tee - Vintage Tee
  Off-White $52, Cropped Tank Top $45, Pantry Button-Up $135, XXS–7XL, shipping by weight, 14-day
  US returns, contact first → `prices.tops`, `notes`, `production_model`, `materials`.
- **Disturbia:** US store, USD, duties included, free over $175, $40–$68, Void Bloom $40, Ouro $46,
  US 2–20, 30 days from dispatch, most tops on markdown → `prices.tops` and `notes`.
- **Dolls Kill:** $29–$79, mostly sold out or marked down, free over $50, XXS–3X, 30 days, US →
  existing `dollskill.json`. "Multi-brand boutique" → `kind: retailer`.
- **Wildfox:** free US shipping with no minimum, 60-day refunds, $44.99–$54, Rhinestone Nova and
  Micky Varsity $44.99, Alma Rugby Polo $54, XS–XL, graphic tees as its core → `prices.tops` and
  `notes`.
- **Goodbye Bread:** $19–$64, Baby Girl Camo Crop Tee $19, Bite Me Tee $38, 100+ brands, its own
  label, free over $80, free US returns, 60-day store credit, sale and clearance not returnable,
  XS–3XL → `prices.tops` and `notes`.
- **Sister Jane:** £59–£125, Vence Check Bow Top £59, Bianca Bow Blouse £69, DREAM Darling Lamé Bow
  Blouse £125, XXS–L, 14 days, London, romantic → `prices.tops` and existing fields.
- **FAQ:** "what is unif" and "is unif legit" come from Ahrefs matching-terms. "Where is UNIF
  clothing located?" is People Also Ask on `unif alternatives`. "Is UNIF fast fashion?" and "Why is
  UNIF so expensive?" were skipped because no stored fact answers them.
