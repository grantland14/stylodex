# Review: brands like Mirror Palais (steps 2–5)

Written 2026-10-29 in one run (enrich, verify, pick, write). Author: Ash. Copy in `mirror-palais.json` → `author`, `copy`.
Copy written against `pipeline/voice.md`. Sibling page files were used for JSON shape only, and no picks are shared with the Selkie, Damson Madder or Polène pages, so no sentence is reused. All requests used the StylodexBot User-Agent only, with no personal details sent.

## Gate result

Loaded through `lib/pipeline.ts` (`pipelinePages`) and judged with `judgeBrandsLikePage`, now = 2026-10-29 (script: scratchpad `mirror-palais/tools/gate-mp.ts`):

- Anchor missing: `[]`. Mirror Palais is `verified` with every required fact. No image yet (optional).
- `pickProblems` returns `[]` for all 9 picks.
- Verdict: **indexable**, no reasons. 9 picks render.
- Title: "9 Brands Like Mirror Palais for Dreamy, Nostalgic Dresses".
- `npm run lint:facts`: ok. `npm test`: 30 pass, 0 fail.

## Category

`dresses`. 412 of the 762 Shop All items are in Dresses, the homepage title leads with "Silk Dresses", and every outside source compares dresses. Regular-price dresses and gowns run $395–$5,995 (75 items, median $995). 33 "Sample" pieces (Archive Sale, final sale) are excluded.

## Picks

| Rank | Pick | Source | Dresses (regular price, USD) | Label | Notes |
|---|---|---|---|---|---|
| 1 | Orseund Iris | disco | $395–$3,400 (6) | similar | Brooklyn. Many designs made in NY. XXS–XL. Studio walk-ins |
| 2 | Nana Jacqueline | Lane Creatore | $225–$2,300 (247) | similar | West Hollywood flagship. XS–XL, runs 1–2 sizes small. Free US returns |
| 3 | Fleur du Mal | Lane Creatore | $98–$998 (114) | similar | NY lingerie label. Free US shipping from $195. 30-day returns. 4 boutiques |
| 4 | Nookie | Lane Creatore | $220–$780 (US market, edge check) | similar | Sydney. XXS–XXL. Buyer pays duties |
| 5 | BEC + BRIDGE | Lane Creatore | $260–$680 (289, US store) | similar | Made in Sydney. US 0–16. Free over $250 |
| 6 | House of CB | disco | $195–$269 (31, sample) | cheaper | London. Free US delivery. 28 days. LA store |
| 7 | Norma Kamali | Lane Creatore | $135–$575 (225) | similar | NY. Washable jersey. Free Ground shipping. 30 days |
| 8 | With Jéan | disco | $157–$256 (23) | cheaper | NYC flagship. Free US shipping over $150, no duties |
| 9 | For Love & Lemons | Lane Creatore | none (existing file, verified) | null | Renders without a price label |

All picks have one independent source, so the order is by the gap between each pick's median price and Mirror Palais' $995 median (`notes`). **9 picks, below the 10–15 target, not padded.** The evidence for Mirror Palais is thin. The SERP is Reddit, TikTok, the brand's own pages and a REVOLVE list that refuses reads, and most dupe posts name Amazon sellers.

Rejected (in `rejected`):
- Unverified, site refused or no official store found: Reformation, Free People, The Bar, Mirae, V. Chapman, Michael Costello, Stone Cold Fox (both domains parked, not concluded defunct), Superdown and NBD (REVOLVE labels), Zaful, ASOS. All of them are in `human_check`. Superdown has 2 sources.
- Not a pick: REVOLVE (stocks Mirror Palais itself; sources point to other labels sold there), Amazon sellers (marketplace listings).
- Apart Style pool: no `brand_relationships` row for Mirror Palais.

## FAQ sources

Ahrefs `keywords-explorer-matching-terms` (questions, US, "mirror palais"): "why is mirror palais so expensive" (10), "when was mirror palais founded" (0) used. "Does Mirror Palais have physical stores?" is from Google's People Also Ask for "stores like mirror palais" (`source: people_also_ask`). Skipped: "what is mirror palais aesthetic" and "is Mirror Palais legit" (no stored fact answers them), "who owns mirror palais" (stored facts say who founded it, not who owns it).

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A dress-alternatives page for someone put off by Mirror Palais' price, wait or returns, which is what Stylodex is for. |
| G2 | PASS | Prices, sizes, shipping and returns come from each brand's own store (products.json, policies). The ranking pages give dupe products with old prices. None of them compare returns, shipping or size ranges. |
| G3 | PASS | Concrete decisions: store credit only vs refunds, $15 restocking fee, Nana Jacqueline runs 1–2 sizes small, Nookie's buyer-paid duties. Each pick points to a better pick for a named need. |
| G4 | PASS | No experience is claimed. Nothing was worn or tried, and the copy only describes what brands sell and state. Author Ash, bio untouched. |
| G5 | PASS | Author "Ash" set. Not YMYL. |
| G6 | PASS | Every number traces to a stored field (fact trace below). The title count (9) and "Dreamy, Nostalgic Dresses" trace to the gate and `known_for`. |
| G7 | N/A | Not YMYL. |
| G8 | PASS | "9 Brands Like Mirror Palais for Dreamy, Nostalgic Dresses": 9 dress brands, as promised. |
| G9 | PASS | Intent is cheaper or easier alternatives to Mirror Palais dresses. Every pick has a dress and price (or a named dress for FLL), and the closing guide sorts by budget, size and returns. |
| G10 | PASS | Price, sizes, shipping, returns and where to try on are covered per pick. FAQ covers why it costs what it does and whether it has stores. |
| G11 | PASS | Intro is 68 words and goes straight to the list. No preamble about the brand. |
| G12 | PASS | Prices dated 2026-10-29 in the data, so the page's "Last checked" line covers them. No year claims in the copy. |
| G13 | PASS | The top results are Reddit threads and a dupe post with 2024 prices and Amazon links. This page has current regular prices, US shipping and returns terms for nine brands with their own stores. |
| G14 | PASS | Affiliate links go through `/go/` with the template's disclosure. No implied testing. |
| G15 | PASS | Read through as a whole. Each pick body is distinct, and pointers between picks don't loop. |

**Estimated Page Quality:** High. Every pick's price, size and returns facts are read from the brand's own store, and the copy turns them into choices (refund vs credit, duties, sizing).
**Estimated Needs Met (dominant intent):** Highly Meets. Readable REVOLVE prices (Superdown, The Bar) would add the cheapest dupes people search for and take it past 10 picks.

## Voice check (`voice.md` "What we never write")

- Process narration: none (no "we checked", dates, "its About page says", or blocked checks).
- Spreadsheet sentences: none. "Nine labels" in the intro is the list size, not the point.
- Verdicts on brands: none. Trade-offs are about specific attributes: restocking fee, sizing, duties, fabric, return postage.
- Invented experience: none. "Fit" appears only as checking a fit in a store.
- Hype words: none (scanned for iconic, must-have, elevate, high quality).
- Contractions throughout. A brand is "it". No semicolons, em dashes, bold or italics. One colloquial line at most ("Read the size chart twice").

## AI-voice scan (`ai-voice-avoid.md`)

- Fixed: three-item list in the Orseund Iris catch, cut to two. "a good one if it's…" tag after a long sentence, split into its own sentence. "matters"-style flag: none.
- Fixed: unsupported claims cut ("slips are what a lingerie label does best", "most pieces are cut close to the body", "lace-trimmed" for FLL, "most of the range sits between $225 and $500").
- Checked: no "not X, it's Y", no "rather than merely", no "whether you're", no trailing participles. Longest sentence 25 words.
- Smell test: each body names its own products, prices and policies, so none would fit another brand.

## Fact trace

- Intro: made to order and months' wait → `mirror-palais.notes` (made-to-order 3–6 months, Plunging Back Cowl 3–4 months). Store credit only → returns note. "Under $500": every pick's min price, or FLL's Abby $239. "Ship to US": every pick's `ships_to`.
- Orseund Iris: $395 start, Little Darling Slip $525 silk jersey, Le Cinéma $995 wool bodice and silk chiffon halter → `prices[dresses].note`. Made in NY, studio walk-ins Thu–Sun, $15 restocking fee → `notes`. Mirror Palais $395 → anchor price.
- Nana Jacqueline: Emeline $480, Naomi $400, Mirelle $2,300, range $225–$2,300 → price note. Flagship, mulberry silk, 1–2 sizes smaller, XS–XL, free US returns within 14 days → `notes`. Mirror Palais store credit or exchange → anchor notes. BEC + BRIDGE US 16 → `size_range`.
- Fleur du Mal: go-to for slips, Juliet $328 silk georgette, Le Stretch $98, free from $195, 30 days, $10 refund fee, wear-sign rule, 4 boutiques → `notes`, price note, `free_shipping_min_usd`, refund policy. Nookie's gowns are its biggest type (161 of 451) → Nookie notes.
- Nookie: Moonrise Gown $3,995 → anchor notes. $780 top, $220–$780 US, Valerie $420, Lene $330 → price note. XXS–XXL → `size_range`. Ships from AU, duties, $40 refund fee, voucher free → `notes`. Norma gown $140 → Norma notes.
- BEC + BRIDGE: US 0–16, Dakota $380, Juliet Corset $420, free over $250, cheapest $260 → price note, `free_shipping_min_usd`. Plunging Back Cowl $1,495 → anchor price note. Sydney, produced locally, signature party dresses, 14/21 days, return postage → `notes`.
- House of CB: $195–$269, Akaia $255 → price note (sample). Bodycon, free US delivery in 2–3 working days, 28 days, Melrose store, Nordstrom concessions, return postage, sale refunds to gift card → `notes`. With Jéan $157 → price.
- Norma Kamali: Classic Supermodel $595 stretch body-con → anchor notes. Halter Turtle Side Slit Gown $140, Diana $195 polyester and spandex → Norma notes and price note. Over 50 years, washable and easy-care, free Ground, 30 days, $8.95 → `notes`. Fleur Juliet → Fleur price note.
- With Jéan: $157–$256, Lana $158, Lady Di $395 → price notes. 2017, best friends, made in China, free over $150, no duties, Wooster St, $14 refund fee, sale final → `notes`.
- For Love & Lemons: Abby $239, Bailey $689, 2010, lifelong best friends, flattering cuts and detail, free over $250, $10 under, 21 days after shipping, XL top, $10 refund, 25% on worn → existing `for-love-lemons` notes and fields.
- How to choose: every figure above (under $270 = HoCB $269 and With Jéan $256 max, under $150 = Norma $135 and Fleur $98, $220–$780 = Nookie and BEC + BRIDGE range).
- FAQs: vintage fabrics, limited launches, made-to-order, made in NYC, fair wages and waste → anchor notes. Gaia, Queens, 2019, almost a decade as a stylist, designed in New York → About note. Try-ons at the NYC office, REVOLVE/FWRD/Moda Operandi → shipping and stockists notes.

## Open items (also in `human_check`)

Confirm C and `known_for`. Confirm Mirror Palais' sample-sale exclusion, Nookie's US prices (edge check) and House of CB's sample range. Possible extra picks after a human read: Superdown (2 sources), Reformation, The Bar, V. Chapman and other REVOLVE-sold labels. Run `pipeline/images.mjs` for images.
