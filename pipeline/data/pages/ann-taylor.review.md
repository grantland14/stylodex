# Review: stores like Ann Taylor (`stores/ann-taylor`)

Run 2026-10-29. Category `dresses` (Ann Taylor is `kind: brand`; workwear/suiting aren't single
product types; dresses lead its title's product list and have 481 URLs in its product sitemap).

## Gate (`lib/pipeline.ts` → `judgeBrandsLikePage`, tsx, now = 2026-10-29)

- **indexable: false**. Reason: `anchor missing: sizeRange, returnsDays, price:dresses`.
- Renderable picks: **15 of 15**, every pick `[]` problems.
- Title: "15 Stores Like Ann Taylor for Tailored Workwear".
- Why the anchor gaps: anntaylor.com sends product, category, customer-service and store pages to
  `/px?url=…` (a bot challenge) for WebFetch and curl. Not worked around. Status is `verified` from
  the parent's official site (Knitwell Group) plus the readable store shell (nav, $150 free-shipping
  offer, ©2026 footer). Queued in `human_check`. Fixing the three anchor facts makes it indexable.
- `price_relation` is null on every pick (the gate rejects a label without both prices).

## Quality gate (G1–G15)

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A "stores like Ann Taylor" list is exactly what a brand directory exists for. |
| G2 | PASS | Regular dress prices, size runs, return and shipping terms from each store are the original data. None of the five ranking lists carry them. FAQ answers come from stored facts, not PAA paraphrase. |
| G3 | PASS | Concrete trade-offs per pick (Hobbs ships from the UK and charges for returns, M.M.LaFleur has a 21-day window, WHBM stops at 18), with the numbers that back them. |
| G4 | PASS | No first-person experience or testing claims. Author Ash, bio untouched. |
| G5 | PASS | Author "Ash" set. Not YMYL. |
| G6 | PASS | Every number traces to a brand-file field or price note (fact trace below). |
| G7 | N/A | Not YMYL. |
| G8 | PASS | Title count = 15 rendered picks; "Tailored Workwear" is the anchor's stored `known_for` (Knitwell: "timeless, tailored style", "go-to brand for women's workwear"). |
| G9 | PASS | Each pick opens with the answer: what it's best at for an Ann Taylor shopper, plus a named dress and price. |
| G10 | PASS | Price, sizes, shipping, returns and a who-should-skip line per pick, plus a How to choose guide. Gap: no Ann Taylor price to compare against (anchor blocked). |
| G11 | PASS | Intro 65 words, no preamble; bodies 111–130 words. |
| G12 | PASS | All prices and terms read today; the template's "Last checked" line carries the date. |
| G13 | PASS | Beats the top 3 (pink chickadee, Corporette, Have Clothes Will Travel) on specifics: none of them give regular prices, size runs or return terms. |
| G14 | PASS | No implied testing. Affiliate links go through `/go/` per template. |
| G15 | PASS | Read through as a whole; picks cross-reference each other without repeating openers. |

- **Estimated Page Quality:** High. Strongest reason: real, same-day regular prices and terms for
  15 stores that the ranking lists don't have.
- **Estimated Needs Met (dominant intent):** Highly Meets once indexable. The one thing that would
  make it better: Ann Taylor's own dress price range, so each pick could say cheaper or pricier.

## Voice check (`pipeline/voice.md` "What we never write")

- Process narration: none (no "we checked", dates, "its About page says"). Loft and Brooks Brothers
  render without a price and the copy doesn't explain why.
- Spreadsheet sentences: none. The one count used ("358 US stores") is the reason the Loft line
  matters (try-on reach).
- Verdicts on brands: none. Trade-offs are about attributes (return fees, size ceilings, no tall range).
- Invented experience: none. Removed "ponte holds its shape better than jersey" (not stored).
- Hype words: none. No semicolons, em dashes, bold or italics. Contractions throughout. Brands are "it".

## AI-voice scan (`ai-voice-avoid.md`)

- #1 binary contrasts: cut two "rather than / not a whole wardrobe" constructions (Loft, Old Navy);
  one remains (Madewell, dress-down Fridays vs client meetings), kept as the honest trade-off.
- #3 rule of three: cut three-item lists in Brooks Brothers, Banana Republic and M.M.LaFleur.
- #5 anaphora, #19 throat-clearing, #25 inspirational endings, #40 "whether you're": none found.
- Sentence lengths: max 30 words; paragraphs 1–4 sentences, mixed.
- Removed two unsupported "blazer" claims (Old Navy, Everlane): blazers aren't in stored facts.

## Fact trace (copy → stored field)

- Intro: no facts beyond the anchor being a source of work dresses (`known_for`).
- J.Crew: $148–$298, Parc $198, Gwyneth $148 → `j-crew.prices[dresses]` note. Petite and tall →
  `has_petite/has_tall`. 30 days, $7.50 label, $7 shipping, Rewards free → `notes` (shipping, returns).
- Loft: Knitwell sister, "everyday fashion for work and play" → `known_for`, `notes`. 358 US stores,
  00–18, XXS–XXL, petite/tall/curvy, 30 days receipted, store returns to store, $9.95 label → `loft.notes`.
- WHBM: $140–$295, Knit Crepe Belted Sheath $170, Faux Wrap Sheath $150 → price note. Black and white
  with pops of color → `notes` (meta). 00–18 regular/petite, petite free ship/returns, 60 days, $7 →
  `notes`. Talbots and Maggy London to 24W → their `size_range`.
- Talbots: petite 0 to 24W, misses 2–18, petite 0–16, plus 14W–24W → `size_range`. Polished Ponte
  Sheath from $169, Belted Wool Blend Shirtdress from $219, $99.50–$299 → price note. 30 days, $9.95,
  $8.95 flat, Canada/UK → `notes`, `ships_to`. No tall → size charts note.
- M.M.LaFleur: $199–$399, Maaza $249, Ashtin $359 (Luxe Flex Suiting) → price note. New York, Power
  Casual → `notes` (meta). 00–20 / XS–XXL → `size_range`. 21 days, $400 → `returns_days`,
  `free_shipping_min_usd`.
- Banana Republic: $148–$280, cashmere mini $280, Knit Wrap Midi $198 → price note. Cashmere and
  linen pitch, store locator by US state, shared bag → `notes`. 0–20, petite, long → `size_range`.
  $50 rewards → `free_shipping_min_usd`.
- Quince: $159.90 top, 100% Silk Jersey Midi Wrap Dress $159.90 → existing `prices[dresses]` note.
  Factory-direct, free shipping, 365 days, XS–XL + 1X–3X, Canada → `notes`, `size_range`, `ships_to`.
- Hobbs: 1981 London, $210–$780, Theodora $210, Petula $250 → `founded_year`, price note. UK
  warehouses, 2–3 days, $350/$8, no charges on delivery, US 2–18 = UK 6–22, petite, returns not
  free → `notes`.
- Old Navy: $34.99–$59.99, Ponte Mini $39.99, Occasion maxi $59.99 → price note. Affordable family
  clothing → `known_for`. 00–30 petite/tall → `size_range`. Gap Inc. + shared bag → `parent_company`,
  banana-republic notes. $50, 30 days → fields.
- Brooks Brothers: "original authority on American style", shirt and sheath dresses (page title),
  00 (XXS)–16 (XL), $200, US stores → `notes`, `size_range`, fields.
- Madewell: $118–$168 → price. J.Crew sibling → `parent_company`. Denim → `known_for`. Standard,
  petite, tall, plus 14W–24W across dresses, availability varies → `notes`. CA/GB/AU, 30 days → fields.
- J.Jill: $109–$149, Wearever $109, Faux-Suede Shirtdress $149 → price note. XS–4X petite/tall,
  $150 (= Ann Taylor's $150 offer, `ann-taylor.free_shipping_min_usd`), 60 days, 1959 Berkshires,
  200+ stores → `notes`.
- Boden: joyful colors → `known_for`. $99–$460, Marcia $149, Alex Ponte $220, Jacquard $460 → price
  note. Petite/tall, 45 days (vs 30 at J.Crew and Talbots), stops at XL → fields.
- Maggy London: $79–$218, Aniya $148, Hope $178 → price note. Desk to dinner, sizes, $100,
  $11.95 + $5, Final Sale → `notes`.
- Everlane: $58–$198, Cashmere Polo $198, Weekend Tee $58, mostly minis (16 of 26) → price note.
  Clean luxury, publishes costs → `known_for`, `production_model`. XXS–XXXL, $75, 30 days, CA/GB/AU → fields.
- FAQ: Knitwell portfolio, 1954, Times Square, Loft "work and play", 200+ stores, Store Locator
  link → `ann-taylor.notes`, `loft.known_for`.

## Sources and counts

- Ahrefs: 4 `serp-overview` calls ("ann taylor alternatives" empty), 1 `keywords-explorer-matching-terms`
  (questions). FAQ queries: "who owns ann taylor" (150), "is ann taylor and loft the same" (150),
  "is there an ann taylor near me" (70). Skipped questions the facts can't answer (luxury, plus
  sizes, returning to Loft, Factory online).
- Editorial evidence: 5 pages. Picks: J.Crew 4 sources; Loft, WHBM, Talbots 3; eight picks at 2;
  Boden, Maggy London, Everlane 1.
- Brand files written via `merge_brand.py` (patches in my scratchpad folder only): new ann-taylor,
  talbots, white-house-black-market, loft, hobbs, j-jill, m-m-lafleur, maggy-london, brooks-brothers;
  ralph-lauren and theory as `unverified`; dresses prices added to banana-republic, boden, old-navy.
  Quince's same-day dresses entry from another run was left as is.
