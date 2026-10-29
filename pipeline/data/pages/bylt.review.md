# Review: brands like BYLT

Page: `/brands/bylt` · Title: **15 Brands Like BYLT for Drop-Cut Tees** · Category: tees (men's short-sleeve, regular price) · Author: Ash · Checked 2026-10-29

## Gate check (lib/pipeline.ts → judgeBrandsLikePage, 2026-10-29)
- indexable: **true**, reasons: none
- picks rendered: **15 / 15** (the gate's maximum). Price labels: 14 similar, 1 pricier (James Perse), all matching stored prices.
- Anchor: BYLT verified, every required fact present; image_url empty (coordinator's media step).

## Evidence
- Ahrefs SERP: `brands like bylt` and `bylt alternatives` returned top 10s; `stores like bylt` and `similar to bylt` returned no rows (4 calls).
- Counted sources: Ten/10 Apparel blog (self-listing excluded), INTO THE AM blog (self-listing excluded), Ringly (signed, found by WebSearch), theadultman (Cuts only), disco directory (Zanerobe, ASRV, James Perse, Cuts; never named on the page).
- Not counted: TexTale and Tapered blogs (self-promotion only), Reddit (unreadable), Ringly's Cuts page (other direction), greenlitcontent (compares, doesn't recommend), 1800dtc (no brands).
- Weakness: no independent publication ranks; the multi-brand lists are competitor blogs and a vendor page. 10 of 15 picks are single-source.

## Quality gate (G1–G15)
| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A shopping guide for people searching BYLT alternatives, inside Stylodex's purpose. |
| G2 | PASS | Every price range, size range, return window and shipping bar is read from the brands' own stores today; the ranking pages give none of the regular-price ranges. |
| G3 | PASS | Concrete trade-offs per pick (Fresh Clean Tees' $1.49 fee, Zanerobe's 14-day returns and US vs AUD prices, James Perse's 0–5 sizing, American Tall's Semi Tall line). |
| G4 | PASS | No first-person experience or testing claimed; "we" not used for anything we did. |
| G5 | PASS | Author Ash, bio in lib/authors.ts. Not YMYL. |
| G6 | PASS | Fact trace below; every number maps to a stored field or note. |
| G7 | N/A | Not YMYL. |
| G8 | PASS | Title count is the real rendered count (15); "Drop-Cut Tees" is BYLT's own signature line. |
| G9 | PASS | Intent is alternatives to BYLT tees; each pick answers first and compares to BYLT. |
| G10 | PASS | Price, sizes, shipping and returns per pick plus a how-to-choose and FAQs on returns, True Classic, Cuts and where to buy. |
| G11 | PASS | Intro 69 words; no preamble. |
| G12 | PASS | Prices read 2026-10-29; the page carries "Last checked". Black Friday markdowns excluded. |
| G13 | PASS | Top results are competitor blogs pushing themselves first; this page has neutral order and real regular prices for 15 brands. |
| G14 | PASS | No implied testing; affiliate links go through /go/ with disclosure (template). |
| G15 | PASS | No sentence shared with any sibling page (exact-sentence check across all page files). |

- **Estimated Page Quality:** High. Strongest reason: real, dated regular-price tee ranges, sizes and return windows for 15 brands, which none of the ranking pages give.
- **Estimated Needs Met:** Highly Meets. Would be better with Cuts (the most-recommended alternative) priced once its sale ends.

## Voice check (pipeline/voice.md "What we never write")
- Process narration: none (no "we checked", dates or method in copy).
- Spreadsheet sentences: none; counts appear only as reasons (sizes, days, dollars).
- Verdicts on brands: none. Invented experience: none (no "feels", "runs small").
- Hype words: none. No semicolons or em dashes. Brands are "it".

## AI-voice scan (ai-voice-avoid.md)
- Fixed: one binary contrast ("an upgrade, not a saving") cut; one "from X to Y" place list in an FAQ rewritten; one 30+ word sentence split (Vuori); an unsupported generalisation ("how most people buy training shirts") cut; "close kin" replaced.
- Checked: no rule-of-three runs as cadence, no throat-clearing openers, no inspirational endings.

## Fact trace (copy → stored field)
- BYLT: $35–$72, 25 tees, Drop-Cut $35, LUX $40, Slub $48 → bylt.prices.tees; 67/28/5 blend, S–3XL, no tall → notes; $99 free shipping, $7 label, 30 days, 22 stores in 11 states → free_shipping_min_usd, returns_days, notes.
- Vuori: $58–$88, Strato Tech V-Neck 96/4, Heavyweight Cotton $74, Merino 2.0 $88, XXS–3XL, $75, stores → vuori.prices.tees, notes, size_range, free_shipping_min_usd, us_stores.
- True Classic: $34.99/$39.99/$44.99, S–4XL, Tall, 100 days → prices.tees, notes, returns_days.
- Mack Weldon: $48/$58/$68/$88, XXL, $150, 30 days, Hudson Yards → prices.tees, size_range, notes.
- Rhoback: $58/$68, free 30-day returns, $150, Charlottesville → prices.tees, notes.
- Fresh Clean Tees: $23/$29/$35, Short/Regular/Tall, S–4XL, $1.49 fee, $100, 100-Day Guarantee, former name → prices.tees, notes.
- Tapered: $40/$44, £29 at home, 10-inch drop, 4–7 days to US, 45 days, S–XXXL, no US threshold → prices.tees note, notes.
- Marine Layer: $54/$64, Luxe 250 and Slub Pocket names, Absurdly Soft Tees, San Francisco, 365 days, $75, stores, S–2XL → prices.tees, notes.
- HIGHR: $58/$64, singles and packs, S–3XL, 90 days, $8 fee, $150, Canada, Los Angeles → prices.tees, notes.
- American Tall: $25/$27/$65, 6 ft–7 ft 1 in, Semi Tall 6 ft–6 ft 3, S–2XL, 30 days, $9 label, US and Canada → prices.tees, notes.
- TexTale: $45/$50/$95, Stain-Repel, S–3XL, $69, four countries, 30 days → prices.tees, notes.
- Ten Thousand: $62/$68/$88, New York, XS–XXL, free over $150 with free returns, 30 days → existing ten-thousand file.
- Buck Mason: $48/$62/$118/$138, predominately made in USA, XS–XXL, 365 days, stores → prices.tees, existing notes.
- Zanerobe: $63/$74, AUD 59.95, $20 or free over $250, duties paid, taxes customer's, 14 days, $10 fee, Tall Tee, XS–XXL → prices.tees, notes.
- ASRV: $68/$78/$108, fabric names, XS–XL with XXL on many, 30 days, four countries, no free threshold → existing asrv file.
- James Perse: $80/$105/$165/$250, sizes 0–5, 30 days full-price only, three US boutiques, worldwide → prices.tees, notes.
- FAQ Cuts: $54 regular, PYCA Pro 62/33/5, S–XXL → cuts.notes.

## Open items (human_check in the page file)
- Cuts (4 sources) and Ten/10 had every tee marked down in Black Friday sales; re-price after the sale. Cuts would become rank 1 and would need a body.
- Rhone (2 sources, 403) and Lululemon (1 source, 503) unverified.
- Rhoback and Buck Mason ranges were read from WebFetch text; confirm no struck-through prices.
- Shared-file change: True Classic size_range widened from jeans-only to "Tees S–4XL, jeans waists 30–42".
