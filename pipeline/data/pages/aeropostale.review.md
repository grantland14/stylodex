# Review: stores like Aeropostale (new page, steps 2–5)

Built 2026-10-29. `url_prefix` stores, slug `aeropostale`, anchor `kind: brand` (own label).
Category C = **jeans** (women's jeans as the like-for-like item): the homepage title leads with
jeans, the nav has a top-level Jeans section, and women's jeans ($64.95–$69.95) are the anchor's
only readable regular-price line. Author: Ash. Copy written against `voice.md`; older page files
used for JSON shape only.

## Gate (lib/pipeline.ts → judgeBrandsLikePage, now = 2026-10-29)

- Renderable picks: **12 / 12**. `pickProblems` returns `[]` for every pick.
- **Indexable: true**, reasons `[]`. `missingAnchorFacts` = `[]` (this run added the anchor's
  `returns_days` 60 and `us_stores`).
- Title: "12 Stores Like Aeropostale for Jeans, Hoodies and Graphic Tees".
- `npm test` 30 pass / 0 fail; `npm run lint:facts` ok. No `/img/` images yet (coordinator).

## Picks

| Rank | Pick | Kind | Sources | Jeans price | Label |
|---|---|---|---|---|---|
| 1 | Old Navy | brand | ET, L8, PT, AW, SST | $34.99–$69.99 | similar |
| 2 | Forever 21 | brand | ET, L8, PT, VT, SST | $38–$44 (2 items) | cheaper |
| 3 | American Eagle | brand | ET, L8, PT, SST | none (all marked down) | none |
| 4 | Gap | brand | ET, PT, VT, SST | $79.95–$99.95 | pricier |
| 5 | Abercrombie & Fitch | brand | ET, PT, VT, SST | $80–$110 (men's) | pricier |
| 6 | PacSun | retailer | ET, PT, SST | none (jeans page 403) | none |
| 7 | Charlotte Russe | brand | ET, PT | $12.99–$29.99 (new row, 98 jeans) | cheaper |
| 8 | Banana Republic | brand | ET, PT | $120–$148 | pricier |
| 9 | Loft | brand | ET (hon.), AW | none (all marked down) | none |
| 10 | maurices | retailer | AW | $34.90–$108 | similar |
| 11 | Target | retailer | AW | $28–$74.99 (page-1 sample) | similar |
| 12 | Nordstrom Rack | retailer | AW | $39.97–$79.97 (page-1 sample) | similar |

ET = eTechShout (Jan 2024), L8 = Lemon8 @isabel.kish (Jul 2024), PT = PlainTips (undated),
VT = ViralTalky (updated Mar 2024), AW = allwomenstalk "outgrown Aeropostale" (Apr 2018),
SST = StoresSimilarTo (2025, named author). disco's profile (Stradivarius, Hollister, Pull & Bear,
Urban Planet) is recorded as evidence only, never cited; none of its brands became a pick.
Ranking: independent sources, then price closeness to $64.95–$69.95.

Evidence note: Ahrefs SERPs for all four keywords left nothing keepable ("aeropostale
alternatives" and "similar to aeropostale" returned no SERP), so the lists came from WebSearch as
on the Tillys run. The sources are old or SEO-style; the weakest (AW, 2018) is the only source
for picks 10–12.

Not picks (full reasons in the page file): **Hollister** (6 sources, challenge page), **Rue21**
(4, no online shop, jeans unconfirmable), **H&M** (3, unverified), Zara, Reformation, Fashion Nova
(no jeans feed), Pull & Bear and Stradivarius (403), Urban Planet (unreachable), TJ Maxx /
Marshalls / Ross (no jeans fact), Amazon (marketplace). No secondhand or thrift shops.

## Quality gate (G1–G15)

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A shopper's comparison page for a real search ("stores like aeropostale"), inside Stylodex's purpose. |
| G2 | PASS | Prices, sizes, shipping and returns come from each store's own pages; no ranking page has them. |
| G3 | PASS | Concrete trade-offs per pick (sizes stop at 15, $100 free-shipping bar, 30 vs 60-day returns). |
| G4 | PASS | No first-person experience. "We" never claims trying or wearing anything. |
| G5 | PASS | Author Ash, bio in `lib/authors.ts`; not YMYL. |
| G6 | PASS | Every number traced below. One correction made in drafting (A&F gap is ~$10, not $15). |
| G7 | N/A | Not YMYL. |
| G8 | PASS | Title count = 12 renderable picks; body covers jeans plus each store's basics. |
| G9 | PASS | Intent (where else to shop) answered by pick 1 in the first lines; comparison by price, size and fit. |
| G10 | PASS | Price, size, shipping and returns per store, plus a how-to-choose guide and owner/returns FAQs. |
| G11 | PASS | Intro 63 words, then picks. No preamble about Aeropostale's history. |
| G12 | PASS | All prices read 2026-10-29; page `checked_at` shown by the template. |
| G13 | PASS | Ranking pages are bare lists from 2018–2025 with no prices or sizes; this one has verified, dated prices and sizes per store. |
| G14 | PASS | No pick is a client; affiliate links go through `/go/` with the template's disclosure. |
| G15 | PASS | Read as a whole; bodies differ in structure and point; not a duplicate of the Hollister page copy. |

- **Estimated Page Quality:** High. Strongest reason: every pick carries its own store's
  regular-price jeans range, sizes and shipping, which no ranking page offers.
- **Estimated Needs Met:** Highly Meets. Better with Hollister verified (the most-named
  alternative is missing) and American Eagle, Loft and PacSun prices.

## Voice check (`voice.md` "What we never write")

- Process narration: none (no "we checked", dates, sources or "couldn't verify" in copy).
- Spreadsheet sentences: none. Rankings appear only with a reason ("roughly double… so be sure
  about the fit first").
- Verdicts on brands: none. Invented experience: none (removed one unsupported fit claim for AE's
  Curvy cut while drafting). Hype words: none.
- No semicolons, em dashes, bold or italics. Contractions throughout. Brands are "it".

## AI-voice scan (`ai-voice-avoid.md`)

Found and fixed: colon reveals (#24) in Old Navy, American Eagle, PacSun and Nordstrom Rack; "from
X to Y" framing (#40) in Banana Republic and Loft; throat-clearing "The good news is" (#19) in the
intro; a three-item line list in Old Navy (#3). Remaining three-item lists are factual store
groupings in the closing. Anaphora (#5): every body opens "X is…", which is the answer-first
format voice.md asks for; second sentences vary.

## Fact trace

- Intro: $64.95 → aeropostale prices.jeans.min; "a third of the price" → charlotte-russe $20
  Brooklyn jeans (price note); "much wider sizes" → old-navy size_range 00–30.
- Old Navy: $34.99–$69.99, Curvy Mid-Rise Wow Bootcut $34.99, OG/Rockstar $44.99–$54.99 →
  old-navy jeans price note; 00–30 petite and tall → size_range; Aeropostale stops at 20 →
  aeropostale size_range; 49 states → old-navy note; free over $50, 30 days → fields;
  Aeropostale 60 days → aeropostale returns_days; CR jeans stop at 15 → charlotte-russe size_range.
- Forever 21: $38 and $44 named items, mostly skirts and shorts → jeans price note and notes;
  markdowns, clearance not returnable → sale_pattern; XS–XXL Plus, free over $50 → fields.
- American Eagle: Classic/Curvy fits, AE Lowest Rise Extra Baggy Jean, AE Curvy Super
  High-Waisted Baggy Wide-Leg Jean → AE notes; 60-day returns, free over $75, $5 online returns
  (Level 3 and cardmembers free) → fields and notes; Aeropostale $25 → free_shipping_min_usd.
- Gap: $79.95–$99.95, Hailey Extra Baggy and '70s Flare $89.95 → price note; 000–20 with
  short/regular/long, petite, tall → notes; 46 states plus PR, free over $50, 30 days → notes.
- A&F: $80 Relaxed Straight / 90s Straight, $110 Relaxed Workwear → price note ($80 − $69.95 ≈
  $10); waists 26–38 → size_range; Aeropostale men's 26–46 → aeropostale notes; Hollister
  sister → hollister notes (A&F Co.); ships CA, free over $99 → fields.
- PacSun: baggy jeans, other labels → homepage meta, kind note; Seal Beach 1980, Anaheim →
  Wikipedia note; free jeans shipping, $59, AK/HI/PR excluded → shipping fine print note.
- Charlotte Russe: $12.99–$29.99, Brooklyn Low Rise Baggy Medium $20, Brooklyn Studded $25 →
  new jeans price row; Brooklyn/London/Paris/Soho fit names → homepage nav note; jeans 00–15, no
  plus, free $100, 48 contiguous states → size_range, has_plus, shipping note.
- Banana Republic: $120–$148, 90S Straight $120, Icon Classic Wide-Leg $130 → price note;
  0–20, petite 00–12, long 4–12, free over $50, US stores → fields; Gap from $79.95 → gap price.
- Loft: Rivete line, slim flare, selvedge → loft notes (this run); 00–18, XXS–XXL, petite/tall/
  curvy → size_range; 30-day refunds then credit, $9.95 label, 358 US stores → notes;
  "work and weekends" → Knitwell tagline "for work and play" (loft note).
- maurices: 0–24, plus 14W–24W, inseams two inches apart → about page and size chart notes;
  Classic Mid Rise Flare $34.90 ($64.95 − $34.90 ≈ $30), m jeans $44.99–$49.99, Silver $108 →
  price row and notes; returns anytime with receipt, free over $50 → notes and field; women's
  store → homepage title.
- Target: Wild Fable Low-Rise Straight $28, Universal Thread $28–$40, Levi's 501 Curve $74.99 →
  price note; 90-day returns, US stores → fields; many labels → known_for and notes.
- Nordstrom Rack: $39.97–$79.97, Levi's 501 '90s $49.97, Madewell '90s Creased $79.97, brands →
  price note; 00–28W petite plus, waists 23–36, free $89, 40 days → fields and notes.
- Closing: price groupings → price_relation of each pick; size claims as above.
- FAQs: Catalyst Brands, 1987, Thousand Oaks and Short Hills, teens and young adults →
  aeropostale Wikipedia note; 44 states plus PR, US/territories/APO-FPO shipping, free over $25 →
  locator and shipping notes; 60 days, tags and proof, $8 mail fee, in-store exchanges → return
  policy note; luxury → jeans price row. Questions from Ahrefs matching-terms ("aeropostale",
  questions): who owns aeropostale (350), is aeropostale still in business (150), what is
  aeropostale return policy (80), is aeropostale a luxury brand (70).
