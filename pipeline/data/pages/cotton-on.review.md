# Self-review: stores like Cotton On (`stores/cotton-on`)

Author: Ash. Category: jeans. Checked 2026-10-29.

## Gate result (lib/gate.ts, via lib/pipeline.ts)

`npx tsx` script loading `pipelinePages()` and `judgeBrandsLikePage` (now = 2026-10-29):

- Title: "11 Stores Like Cotton On for Laid-Back Aussie Fashion"
- Renderable picks: **11 of 11** (`pickProblems` empty for every pick)
- **Indexable: false**. Only reason: `anchor missing: returnsDays`. Cotton On's policy is "No expiration on
  returns!", and the schema has no value for "no limit" (same gap as nordstrom). Coordinator decision in `human_check`.

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A "stores like X" directory page for US shoppers, inside Stylodex's purpose. |
| G2 | PASS | Original data: regular-price jean ranges, sizes, US shipping and return terms per pick, read from each store. Cotton On's own range was re-read across the full 220-tile grid ($10–$79.99, not the old 35-tile $69.99–$79.99). No top result gives prices. |
| G3 | PASS | Concrete decisions per pick: Cotton On's wash-by-wash pricing, Uniqlo's Short/Tall Baggy Barrel, AE's markdown pattern, True Classic's 2-pack price per pair, Gap's brand-only returns, Universal Standard's free exchanges vs paid refunds. |
| G4 | PASS | No first-person experience. "We"/"our pick" only as opinion with the fact beside it. |
| G5 | PASS | Author Ash (lib/authors.ts). Not YMYL. |
| G6 | PASS | Every number traces to a brand file or `named_products` (trace below). |
| G7 | N/A | Not YMYL. |
| G8 | PASS | Title count equals renderable picks (11). known_for from Cotton On Group's own brand page ("Laid-back", "taking the Aussie lifestyle to the world"). |
| G9 | PASS | Intent is "where else to shop instead of Cotton On". Answer-first opener per pick, then How to choose. |
| G10 | PASS (partial) | Budget, size, length, men's and sourcing routes covered. Tees and tops, Cotton On's other big lines, aren't compared. |
| G11 | PASS | Intro 75 words, picks 108–144 words, How to choose 118, FAQ answers 21–41. |
| G12 | PASS | No check dates in copy. One fact date: Everlane's May 2026 acquisition agreement. |
| G13 | FAIL (honest) | Estimated Medium. Readers expect H&M, Zara, Mango and Bershka (2 sources each) and Urban Outfitters (3); all are missing (403/429 or no US confirmation). Evidence is thin: two readable lists, one of them a manufacturer's branded post (Truekung), plus the directory. |
| G14 | PASS | No implied testing. Affiliate links via /go/ in the template. |
| G15 | PASS | Read as a whole: picks point to each other (Old Navy↔Gap, True Classic↔Abercrombie, Everlane→Universal Standard, boohoo↔PLT) without repeating sentences. |

- **Estimated Page Quality:** Medium. Strongest reason: real regular prices, sizes and return terms for every pick, and a corrected anchor range. What caps it: the best-known rivals couldn't be read, and evidence rests on two lists.
- **Estimated Needs Met:** Moderately Meets. One thing would make it better: verifying H&M, Zara and Mango, the alternatives readers expect first.

## Voice check (pipeline/voice.md "What we never write")
- Process narration: none (no "we checked", no check dates, no "its About page says", no mention of the directory).
- Spreadsheet sentences: none. Counts appear only as sizes, waists and prices tied to a reason.
- Verdicts: none. Criticism is of specific claims with evidence (boohoo/PLT's own "discounts may not be based on former prices" notice, Forever 21's non-returnable clearance).
- Invented experience: none. Cut "barrel cuts are easier to judge on" (implied fit experience).
- Hype: none. No semicolons, em dashes, bold or italics. Brands are "it". Contractions throughout. One colloquialism ("with the receipts to back it").

## AI-voice scan (wildcard-seo reference/ai-voice-avoid.md)
- Repeated phrasing with sibling pages: an n-gram check against every page file found shared runs (Abercrombie's price sentence, AE's $5 returns line, Everlane's cost-transparency line, boohoo's discount notice, the FAQ return answer, F21's product sentence). All rewritten. Remaining overlaps are short stock phrases and product names.
- Rule of three: lists are two or four items except product-line names (OG, Vintage Slim and Baggy Barrel).
- Sentence length: nothing over 30 words. Paragraph endings vary.

## Fact trace
- Intro "$30 in one wash and $79.99 in another": brands/cotton-on.json jeans price note (Barrel Jean).
- Cotton On: $10–$79.99, US 0–20, Petite and Curvy jeans, free delivery $75, no-expiry returns, founded 1991 by Nigel Austin, Geelong, group brands: brands/cotton-on.json (price, size_range, notes).
- Forever 21: $38/$44 products, XS–XXL + plus, free US shipping $50, 30-day returns, clearance not returnable, small denim range (4 denim trousers): brands/forever-21.json.
- Uniqlo: $49.90 all regular women's jeans, Baggy Barrel Short/Tall, XXS–XL, US stores (Fast Retailing list), free shipping $99, 30 days from ship date, customer pays return shipping: brands/uniqlo.json.
- American Eagle: homepage jeans banner, Curvy Fit, full prices $59.95–$89.95, markdowns 40–50%, free shipping $75, 60-day returns, $5 online returns (free Level 3/cardmembers): brands/american-eagle.json notes.
- Old Navy: $34.99–$69.99, Wow line at $34.99–$39.99, OG/Vintage Slim/Baggy Barrel mostly $44.99–$54.99, 00–30 + petite/tall, short/regular/long inseams, stores in 49 states, free shipping members $50, non-members $9, 30 days, Gap Inc.: brands/old-navy.json.
- True Classic: $79.99 single pairs, Slim/Straight, Comfort Stretch/Authentic Denim, waists 30–42, 2-pack $139.99, 100-day free returns, known for fitted tees (homepage title): brands/true-classic.json.
- Gap: $79.95–$99.95, most $89.95, named styles, 000–20 short/regular/long, petite/tall, Hailey Extra Baggy, returns 30 days only to Gap: brands/gap.json.
- Abercrombie & Fitch: $80 Relaxed/90s Straight, $90 Ultra Baggy, $110 Relaxed Workwear Jean, waists 26–38, free shipping $99: brands/abercrombie-fitch.json.
- Everlane: $88–$148, Way-High Curve $88 in two inseams, Baggy Barrel-Leg $128 (product-images.json), audited factories and published costs, waists 23–35, $8 standard shipping, returns 30 days ($7 mail, free in store), Shein agreement May 2026: brands/everlane.json.
- Universal Standard: 00–40, $118–$188, Seine $118, Bae Boyfriend Crop $138, inseams, free US shipping on full price, refunds $7.50 mail / $4.50 Happy Returns within 30 days, free exchanges: brands/universal-standard.json.
- boohoo: jeans page cuts and plus/petite/tall/maternity, US 0–26, "70% off almost everything" and discount notice, $10.99 shipping no tariff charges, 21 days, $14.99 deduction, 20% store-credit bonus, PLT sister (Boohoo Group): brands/boohoo.json.
- PrettyLittleThing: shapes and plus/petite/tall/Shape fits, US 00–24, 70%-off banners and discount notice, $9.99 shipping no threshold, 21 days, $14.99 deduction, IT-girl positioning: brands/prettylittlething.json.
- FAQ: Cotton On facts above; similar-brands answer from this page's picks and prices.
