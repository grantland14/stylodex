# Review: brands like Scuffers (hoodies)

Checked 2026-10-29. Author: Ash. Category: hoodies (Scuffers' best sellers are led by hoodies: 37 of 78 overall, 27 of 30 in Best Sellers USA).

## Gate result (lib/pipeline.ts + judgeBrandsLikePage)
`npx tsx <scratchpad>/scuffers/tools/check.ts`, now = 2026-10-29:
`{"indexable":true,"reasons":[],"rendered":12,"total":12,"title":"12 Brands Like Scuffers for Oversized Hoodies From Madrid"}`. Every pick: `pickProblems` empty. `npm run lint:facts`: ok.

## Quality gate (google-search-quality.md Part 9)
| Row | Result | Evidence |
|---|---|---|
| G1 People-first purpose | PASS | Answers the search ("brands like Scuffers") for US shoppers, the site's main market, with what they pay and how returns/duties work. |
| G2 Original value | PASS | US-market prices read from each store's own US localisation (Scuffers €79 → $109; Nude Project €69 → $99; Blue Banana €69.90 → €94.90 for the US), duties, return windows. None of the source lists has prices or US terms. |
| G3 Expertise visible | PASS | Concrete trade-offs per pick: final-sale policies (Akimbo, Von Dutch, Berlinc), made-to-order sizing (Yujin), fabric weights (450/500 gsm, 14 oz), duties paid vs not. |
| G4 Honest creator claims | PASS | No first-person experience. "We" only in "the one we'd start with". Nothing about how anything feels on. |
| G5 Author | PASS | author "Ash"; bio in lib/authors.ts, nothing added. |
| G6 Accurate | PASS | Fact trace below; every number from a stored field or note. Three overclaims fixed in self-review (Berlinc "everything 500 gsm", Dormers "most hoodies", Gramicci "at any time"). |
| G7 Safe | N/A | Not YMYL. |
| G8 Honest title | PASS | "12 Brands Like Scuffers for Oversized Hoodies From Madrid": 12 = rendered count; known_for built from Scuffers' FAQ ("The fit of our products is oversized"), its hoodie-led best sellers and Madrid address (human_check on wording). |
| G9 Intent and direct answers | PASS | Each pick opens with the answer (why it's a Scuffers alternative + a named product and price). FAQs answer first. |
| G10 Complete | PASS | Price, sizes, US shipping, duties and returns covered per pick; FAQ covers base, shipping time, stores, hoodie price. |
| G11 Helpful first, no filler | PASS | Intro 69 words; bodies 113–131 words, all within voice.md 110–170; closing 112. |
| G12 Fresh | PASS | All prices and policies read 2026-10-29; "Last checked" shown by the template, not in copy. |
| G13 Better than what ranks | PASS | Ahrefs shows no ranked SERP; the web results (Worthy Born, a brand's own blog, TikTok) carry no prices, US terms or regular-price checks. |
| G14 Commercial honesty | PASS | Catches stated for every pick (no returns, made to order, customs paid by buyer, small range). No pick is promoted over the facts. |
| G15 Craft | PASS | Read as a whole: picks cross-refer (Yujin → Blanks, Akimbo → Berlinc, Picante → Berlinc, Von Dutch → Nude Project, WeSC → Blanks, MWM → Yujin, Gramicci → Dormers). American spelling. |

- **Estimated Page Quality:** High. Strongest reason: the real US price, duty and return terms for 13 stores, which no ranking page has.
- **Estimated Needs Met (dominant intent):** Highly Meets. Would improve with a second independent source per pick (all 12 rest on one).

## Voice check (voice.md "What we never write")
- Process narration: none (no "we checked", dates, "its About page says"). "Its own listings say the hoodies run small" (Yujin) states what the brand says, not our method.
- Spreadsheet sentences: none. No product counts in copy. Rankings ("closest match on price", "cheapest route") each carry the why in the same sentence.
- Verdicts on brands: none. Catches are about specific policies (returns, customs, sizing).
- Invented experience: none.
- Hype: none ("iconic" from Von Dutch's own meta not used; "luxury" is Picante's own self-description).
- No semicolons, no em dashes, no bold. Contractions throughout. Brands are "it".
- Disco (discobrands.co) is evidence for Yujin, WeSC, Von Dutch: never named, linked or quoted in copy.

## AI-voice scan (ai-voice-avoid.md)
Found and fixed: #40 "from X to Y" (intro "from Madrid neighbors to American labels"; Von Dutch "run from velour zips to spider-logo pullovers"); #24 colon reveals (Gramicci opener, Nude Project opener, Von Dutch collaborations, Akimbo "The catch is big:"); #1 binary contrasts (WeSC "rather than a heavy winter one", Blanks "the hoodie rather than a graphic"). Rule-of-three: lists kept to two where possible; the closing's three-brand list is a factual grouping. Smell test: openers vary (is / has / covers / is the pick), paragraph lengths vary, no tidy moral endings.

## Fact trace (copy → stored field)
- Scuffers $109/$119, €79/€82, ≈$88/$91, 14 days, $400, import taxes covered, stores, 2018, founders: brands/scuffers.json prices[hoodies] note + notes (shipping policy, refund policy, FAQ, FashionUnited, ldnfashion); FX ECB 1.1133.
- Gramicci $115, GCE 87% cotton, 1982 Ventura garage, climbing shorts, G-Pants, $175, 30 days, $9 label, free exchanges: gramicci.json price note + notes.
- Yujin $78/$82, 5XL, Essential Otaku $70, tie-dye $158–$160, runs small, made to order, no wrong-size returns, anime streetwear: yujin-clothing.json.
- Berlinc midweight (Scuffers Raw Butter Hoodie page) vs 500 gsm (V2 Monochrome and Heather Gray descriptions), $120/$95, best seller remake, small batches, pre-orders 6–8 weeks, next-day shipping, $200, 7-day exchanges, no refunds: berlinc.json.
- Dormers Club $110 Arch, $100 Signature Basic, $125 Pin, $140 Follow Ur Drms Zip Up, Vancouver Gastown store, 6–12 days, $7, $150, XS–XXXL, 14 days, buyer pays postage, drops/collabs not returnable: dormers-club.json.
- Blue Banana €94.90 (≈$106), €69.90 Spain, 100% organic cotton, regular fit, X embroidery, XS–XXL, €5.90, €125, customs to customer, 30 days, exchanges ES/PT only: blue-banana.json.
- Von Dutch $65 Remi Waffle and Velour Zip Up, $130 Spider Crest and YSL, $135 Hardfest, early 2000s, WSG, trucker caps, XS–2XL/XL, no returns, exchanges with own label: von-dutch.json.
- Nude Project 2018, two friends, Spanish, $99 Origins, $129/$139, Biggie $129, 42 Greene St NY, duties included, $400, 30 days, 400 g fleece regular fit, size down on zip-ups (Ying-Yang Zip-Up note): nude-project.json.
- WeSC $88 (Enzyme Wash Palm Logo, Skater Glitch, Pizza), oversized dropped shoulder, Stockholm 1999, skate and music, LA warehouse, $150, S–XXL, loopback summer fleece, 14 days, buyer pays postage: wesc.json.
- Blanks by Thirteen $78 Perfect Hoodie, $85 Faded Black, 450 GSM, California-milled combed cotton, made in USA, pre-shrunk, washer/dryer, blank-apparel company, slightly oversized, size down, S–XXL, $100, 30 days, Blanks Limited no restock: blanks-by-thirteen.json.
- Mod Wave Movement $182–$330, $194 oversized, $330 Vanguard Dogs (€290 Spain), dark fashion/Asian aesthetics/genderless, XXS, from €30, duties not included, 14 days: mod-wave-movement.json.
- Akimbo Club $160 Hoodie 14 oz brushed cotton relaxed/boxy, $170 Zip-Up, $250 Watch-Peeker, Utah fulfillment, USPS Priority, vintage pieces, US sales final: akimbo-club.json.
- Picante $270 Everyday Hoodie, boxy/slightly cropped, heavy organic brushed-back cotton, garment dyed/hand-sprayed, XS–XXL, take normal size, £145 UK, duties included, $300, 14 days at buyer's cost, $720 faux-fur zip-up: picante.json.
- Closing and best-for lines reuse only the facts above.

## FAQ sources
Ahrefs keywords-explorer-matching-terms (US, "scuffers", questions), one call: where is scuffers based (150), how long does scuffers take to ship to the us (10), does scuffers have stores (20), how much are scuffers hoodies (10). Skipped as unanswerable from stored facts: is scuffers legit, is scuffers fast fashion, who owns scuffers (ownership not stored beyond founders), does scuffers have sales.

## Open items (see page human_check)
SERP empty in Ahrefs, evidence from WebSearch only; US-market pricing rule; Akimbo's vintage line vs §4c; HOURS (Cloudflare 403); Scuffers us_stores; WeSC $150 vs $100 banner; anchor known_for wording.
