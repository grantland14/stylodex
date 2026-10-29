# Self-review: brands like AllSaints (`/brands-like-allsaints`)

Category `leather-jackets` (new product type; see `category.why`). Author: Ash. Checked 2026-10-29.

## Gate (lib/gate.ts via lib/pipeline.ts, `judgeBrandsLikePage`)

```
title: 11 Brands Like AllSaints for Leather Jackets, Denim and Knitwear
indexable: true reasons: [] anchor missing: []
renderable 11 / 11
```
Every pick: `pickProblems` empty. Price labels: Acne Studios and Rick Owens `pricier`, the other nine `similar`
against AllSaints' $499–$1,799. `npm run lint:facts`: ok.

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A US shopper searching "brands like AllSaints" wants other places to buy the same kind of jacket; the page answers that and nothing else. |
| G2 | PASS | The value is the verified regular US prices, sizes, shipping and return terms read from each store (49 AllSaints listings, 13 Kooples, 15 Acne, 34 Rick Owens…). No ranking page has prices. |
| G3 | PASS | Concrete decisions and trade-offs per pick: recycled vs grained leather (ANINE BING), €42 return deduction and state duties (Rick Owens), $10 refund fee (AGOLDE, Kooples), size ceilings (Affliction 4X). |
| G4 | PASS | No first-person experience, no "we tried". Fit statements are the brands' own (Kooples "choose the size above", AGOLDE "true to size"). |
| G5 | PASS | Author Ash, bio in lib/authors.ts, not extended. Not YMYL. |
| G6 | PASS | Every number traces to a stored field (fact trace below). EUR prices converted at the ECB 2026-10-28 rate and labelled "about". |
| G7 | N/A | Not YMYL. |
| G8 | PASS | Title count is the real renderable count (11); known_for is the anchor's shared value. |
| G9 | PASS | Dominant intent (alternatives to AllSaints, mostly its leather) served; picks compared with each other and with AllSaints; "How to choose" splits by budget, suede and size. |
| G10 | PASS | Price, sizes, shipping and returns for each pick; FAQ covers ownership and luxury positioning. |
| G11 | PASS | Intro 60 words, each pick answers first. No process narration. |
| G12 | PASS | All prices read 2026-10-29; the template shows the Last checked date. |
| G13 | PASS | Top results: an older blogger list without prices (HCWT), a retailer-heavy undated list (I AM & CO), forum threads. This page is more specific on every pick. |
| G14 | PASS | No pick is promoted beyond its facts; trade-offs stated for each (returns, recycled leather, duties, thin ranges). Affiliate disclosure is the template's. |
| G15 | PASS | Sibling overlap checked with 5-word shingles against all 138 other page files: no shared sentences; six near-phrases reworded. |

**Estimated Page Quality:** High. Strongest reason: every pick carries a verified, like-for-like US leather-jacket price range plus the return terms that actually differ between them.
**Estimated Needs Met (dominant intent):** Highly Meets. Would be better with a cheaper tier: Mango, Zara and & Other Stories are named by sources but their stores block the bot (human check).

## Voice check (voice.md "What we never write")
- Process narration: none ("when the range was read" removed in drafting).
- Spreadsheet sentences: none; ranges are in words, counts only as "six of its eight" where the point is the recycled-leather trade-off.
- Verdicts on brands: none.
- Invented experience: none.
- Hype: none. No semicolons, em dashes, bold or italics. One colloquialism ("Here's the thing to know"); "Fair enough" cut.

## AI-voice scan (reference/ai-voice-avoid.md)
Found and fixed: a rule-of-three city list (five Rick Owens cities cut to "New York and Los Angeles, among others"); repeated "half of AllSaints' window" (kept twice, Kooples and Alexander Wang, varied for Acne); "most forgiving return policy here" (false superlative, cut); "the deepest leather ranges" (false, Rick Owens and Affliction carry more, cut). Sentence lengths mixed, no sentence over 30 words.

## Fact trace (copy → stored field)
- Intro: Dalby biker $569 → allsaints notes (leather jackets). "a couple for less" → Kooples min_usd 439.75, Affliction 495 vs AllSaints 499.
- Kooples: €495 lambskin biker, XXS–XXL, fitted/size-up advice, US $10 return fee → the-kooples notes; €395 zip-up → notes; about $551 / $440 → ECB 1.1133; 14 days → returns_days; Paris → hq/notes (Wikipedia); euro display + Global-e → price note.
- Acne: $3,000 bomber, $3,050 lamb Leather jacket, $3,300 calf Runway biker, EU 32–42 / 44–54 → acne-studios notes; free express shipping, duties included, free returns, 14 days → notes, returns_days; Stockholm → notes.
- Rick Owens: $2,580–$11,500, Gary Jkt, Classic Biker $2,990 → leather-jackets price note + notes; DHL €30, duties in listed states, 10 days, €42 deduction, US stores NY/LA → rick-owens notes.
- ANINE BING: $550 Cyrus, $1,150 Sandy grained leather, six of eight recycled, XXS–XL, free US shipping/returns, sale final → anine-bing notes/price note. AllSaints lamb/sheep → allsaints notes. Sadler $499 → allsaints notes.
- AGOLDE: LA denim label → notes (homepage meta); Nahla $575 recycled, suede $750, Blair lamb suede $995 true to size → notes/price note; 30 days, $10 refund fee → returns_days, notes; XS–XL → size_range.
- Belstaff: Gangster Icon 1969, women's nappa $1,225, Outlaw $1,725 café-racer hand-waxed, Trialmaster $1,975 cow leather 18-hour waxing, patina → belstaff leather-jackets note + notes; flat $10 delivery, free 30-day returns → existing notes, returns_days; "marks down a lot" → notes (18 of 39 marked down). AllSaints shearling $1,679–$1,799 → allsaints notes.
- Affliction: $595 most, Top Legend $495, embroidery on Dakota/Willow, Quilted Cross $700 waxed buffalo, genuine leather, up to 4X → affliction leather-jackets note + notes; 30 days → returns_days. AllSaints men's XXXL → allsaints size_range.
- Alexander Wang: blazer $1,495, puffer and bomber $1,595, distressed moto $1,995 worn-in finish, belt at hem, XS–XL and US 0–12, free over $350, 14 days → alexander-wang price note, notes, size_range, free_shipping_min_usd, returns_days.
- Sandro: women's $1,095 red, $1,130 range incl. Oversized, men's $1,265, $1,905 in three colours, shearling from $2,220, free standard ground, prepaid label, 30 days → sandro notes/price note, returns_days.
- Cult Gaia: Matthew $1,598 unisex bomber, Jarvis $1,998 lamb boxy cropped, Matthieu $2,298, XXS–XXL, free over $150, clothing 14 days, dresses and bags → cult-gaia notes, price note, size_range.
- rag & bone: suede truckers/Harrington $998, Ricky $1,298, Mercer blazers $1,298/$1,398, Penelope $1,498, Terri $3,598, New York style + British tailoring, free ground shipping, free returns 30 days, no exchanges → rag-bone price note, notes, known_for, returns_days.
- Closing: all figures above. FAQ 1: AllSaints $499–$1,799, Acne from $3,000, Kooples $440–$774. FAQ 2: Lion Capital, Lyndon Lea, 1994, London, founders → allsaints notes (Wikipedia). FAQ 3: picks' price labels.
- FAQ sources: "is allsaints a luxury brand" (300/mo) and "who owns allsaints" (40/mo; "who owns all saints" 80) from Ahrefs matching-terms questions; "What are all saints comparable to?" from Google People also ask on "stores like allsaints".

## Open items (see page `human_check`)
- The Kooples is priced in euros; confirm the US checkout charge (Global-e) and US delivery cost.
- ANINE BING and AGOLDE include recycled (regenerated) leather; confirm Ash is fine counting it under leather jackets.
- New category `leather-jackets` needs a `stylodex.categories` row, and `pipeline/product-images.mjs` has no word filter for it.
