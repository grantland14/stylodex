# Review: brands like Polène (`/brands/polene`)

Author: Ash. Category: `handbags`. Checked 2026-10-29.

## Gate (lib/pipeline.ts + judgeBrandsLikePage, 2026-10-29)
```
{"indexable":true,"picks":["demellier","strathberry","songmont","jw-pei","charles-keith","quince","loewe"],"reasons":[],"title":"7 Brands Like Polène for Parisian Leather Handbags"}
```
Anchor missing facts: none. Every pick's `pickProblems`: empty. 7 picks (target 10–15, floor 6): not padded.

## Evidence
- SERP (Ahrefs `serp-overview`, US, 4 calls): `brands like polene` and `similar to polene` returned results; `polene alternatives` and `stores like polene` returned none.
- Read and kept: Parisa Wang journal (6 alternatives; its self-listing isn't counted) and Ashley Miller Daniels' Polène dupe guide.
- Not readable: Reddit (3 threads), Vogue US and UK, Elle UK (WebFetch can't fetch), Medium and PurseForum (403), Pinterest. Grazia SG and two Mumsnet threads were read but don't frame brands as alternatives to Polène, so they were dropped.
- Pool: 83 `brand_relationships` rows across two Polène records. Only DeMellier and Strathberry also have outside evidence.
- Not picked: Cuyana (fails the gate: no size range, no stated US return window), Romytisa (403, unverified), LaRosa Style (sells bags under Polène's own model names), Parisa Wang (self-listed only), Amazon unbranded dupes.

## Quality Gate (G1–G15)
| Row | Result | Evidence |
|---|---|---|
| G1 People-first | PASS | A shopper comparing handbag brands to Polène. It's Stylodex's core purpose. |
| G2 Original value | PASS | Real US prices, exchange-rate conversions, duty, shipping and return terms from each store. Neither source page has these. |
| G3 Expertise visible | PASS | Concrete trade-offs per pick (currency, duties, return postage, 14 vs 28 vs 30 vs 365 days, faux vs real leather). |
| G4 Honest creator claims | PASS | No first-person use or testing. "We" isn't used for experience. Author bio unchanged. |
| G5 Author | PASS | Author Ash, bio in `lib/authors.ts`. Not YMYL. |
| G6 Accurate | PASS | Every number traces to a stored fact (trace below). |
| G7 Safe | N/A | Not YMYL. |
| G8 Honest title | PASS | "7 Brands Like Polène for Parisian Leather Handbags": the count is the real count, and every pick sells handbags. |
| G9 Intent match | PASS | Each pick opens with what it's best for compared with Polène, plus a named bag and its price. |
| G10 Complete | PASS | Price, materials, where it's made, shipping, duties and returns per pick. How to choose plus 4 FAQs from real searches. |
| G11 Helpful first | PASS | Intro is 64 words. No preamble. |
| G12 Fresh | PASS | All prices and terms were read 2026-10-29 (DeMellier GBP converted at the ECB rate of 2026-10-28). The page shows a Last checked line. |
| G13 Better than ranking | PASS | Beats Parisa Wang (typical-price ranges, no models) and the dupe guide (Amazon-heavy) on specificity: named bags, US prices and US terms. Fewer brands than the 20-brand Vogue list, though, so this is the weakest row. |
| G14 Commercial honesty | PASS | No pick is favoured. Affiliate links go through `/go/` with disclosure (template). No implied testing. |
| G15 Craft | PASS | Read whole. American spelling. Each body has a different shape and trade-off. |

Estimated Page Quality: High. Every pick carries checkable US prices and terms that the ranking pages don't have.
Estimated Needs Met: Highly Meets for "brands like Polène". It would be better with 3–5 more sourced picks (Cuyana once its returns window is confirmed, plus brands named in the Vogue and Reddit pages we can't read).

## Voice check (voice.md "What we never write")
- Process narration: none (no "we checked", no dates, no sources named in the copy).
- Spreadsheet sentences: none. The one ranking ("14 days, the shortest on this list") says why it matters ("not the place to order three and decide later").
- Verdicts, invented experience, hype: none.
- No semicolons, em dashes, bold or italics. Brands are "it". Contractions throughout.

## AI-voice scan (ai-voice-avoid.md)
- Fixed: a mannered opener for Loewe ("starting point rather than the goal", §49) became plain. "The step up" was repeated three times, so two are reworded. A filler line in Songmont ("That's rare at this price", with no fact behind it) is cut.
- Checked: no rule-of-three lists, no "not just X but Y", no "whether you're…", no no-sacrifice claims. Every pick has a different paragraph shape.

## Fact trace
- Polène $220–$1,190, median $610, Numéro Un $580, Nano $470, Micro $220, Numéro Neuf $610, Cyme $620, Cyme Mini from $480, Button Bow Box $1,190 → `brands/polene.json` prices note, page notes (eng.polene-paris.com feeds). Taxes on US delivery, 30-day returns, made in Ubrique, Italian calf leather, Cyme "waves, folds, and curves", Andalusia → polene notes (Cyme product page). Founded 2016, Paris → FR meta.json. New York and Costa Mesa boutiques, US store run from New York → polene notes.
- DeMellier £365–£665 (≈$485–$884), Midi New York £475 (≈$631), Nano Montreal £365, London/Spain, free US shipping with duties included, 28-day free returns → `brands/demellier.json`.
- Strathberry $495–$995, Kite on a Chain $495, Tote $995, Mosaic Nano $635, Edinburgh/Ubrique, Music Bar, free duty-paid US shipping, 30-day free returns → `brands/strathberry.json`.
- Songmont median $429, $219–$758, Song Bag $269–$519 (four sizes), Chinese, Eastern minimalist, free US shipping over $100, US returns shipping covered within 30 days → `brands/songmont.json`.
- JW PEI median $139, Joy Shoulder Bag $99, Lucia Woven $139, LA, 2018, vegan leather and faux suede, free shipping from $200, customer pays returns, 30 days → `brands/jw-pei.json`.
- Charles & Keith $49–$229, Gabine $229, Calla Tote $139 (about 24% of $580), Singapore, 1996, shoes/bags/accessories, free over $125, 30 days, UPS label $8.50 → `brands/charles-keith.json`.
- Quince $26–$198, Sloane Handwoven Mini $120, Hudson Suede Tote $174 (under a third of $620), factory-direct, always-free shipping, 365 days → `brands/quince.json` (handbags price, existing notes).
- Loewe $650 Small Basket bag, Mini Scarf bag $2,400, free shipping, 14-day returns, Spanish (hq ES) → `brands/loewe.json`.
- FAQ answers → polene facts above. Questions come from Ahrefs `keywords-explorer-matching-terms` (questions): where is polene from (40), where are polene bags made (20), how much are polene bags (10), where to buy polene in usa (10).

## Human check
See `human_check` in polene.json: Polène's US shipping fee, Cuyana's US return window (it would become pick 8), Romytisa (403), and Strathberry's full price range (partial read).
