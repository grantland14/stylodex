# Review: brands like YoungLA (steps 2–5)

Produced 2026-10-29 end to end per `pipeline/run-page.md`. Author: Ash. Category C = `tees` (Tees):
"Shirts For Him" (115 products) is YoungLA's largest men's collection and 11 of its 30 men's best
sellers are tees (see `category.why`). Copy written to the rewritten `pipeline/voice.md`.

## Enrichment summary

- **SERP** (Ahrefs `serp-overview`, US, 4 calls): `brands like youngla` and `youngla alternatives`
  returned results; `stores like youngla` and `similar to youngla` returned none. Kept one page:
  disco's "brands like YoungLA" list (independent directory, byline, affiliate disclosure). Reddit
  (3 threads, refused, not worked around), Facebook, TikTok, Instagram not read; Similarweb dropped
  (traffic tool); Thingtesting read but lists no brands.
- **Co-stocking:** none. YoungLA sells direct plus one flagship (Westfield Topanga).
- **Pool:** 35 Apart Style pool brands added with `sources: []`; only Gymshark, Alphalete and
  Ryderwear overlap the outside evidence.
- **Verified:** anchor + 11 brand files through `merge_brand.py` (new: youngla, gymshark, kill-crew,
  gymreapers, darc-sport, jed-north, vanquish-fitness, inaka-power, ryderwear, ten-thousand, asrv;
  alphalete as `unverified`). `npm run lint:facts`: ok.
- **Picks: 10 of 12 candidates with a source.** Rejected: Alphalete (403 to curl and WebFetch,
  human check), Civil Regime (unannotated "also worth a look" link, 23-product licensed-drop store).
- **Price rule:** regular = no compare-at above price and no markdown tag. Campaign tags with no
  compare-at (Vanquish "10th-anniversary-sale", Gymreapers "cp:SeptEOSSale") are treated as
  eligibility tags, not markdowns: a change from the Affliction run, flagged in `human_check`.

## Gate result (Check step)

`npx tsx` scratch script: `pipelinePages()` from `lib/pipeline.ts`, `judgeBrandsLikePage`,
now = 2026-10-29.

```
anchor missing: [ 'imageUrl' ]
vanquish-fitness 1 similar []
gymshark 2 similar []
kill-crew 3 similar []
gymreapers 4 similar []
darc-sport 5 similar []
jed-north 6 similar []
inaka-power 7 pricier []
ryderwear 8 pricier []
ten-thousand 9 pricier []
asrv 10 pricier []
indexable: false rendered: 10 ... reasons: [ 'anchor missing: imageUrl' ]
title: 10 Brands Like YoungLA for Gym Wear and Streetwear
```

**Gate: 10/10 picks render; not indexable only because the anchor has no `/img/` image yet**
(the coordinator's media step). Every pick passes `pickProblems`. `npm test`: pass.

## FAQ sources (Ahrefs)

One call: `keywords-explorer-matching-terms`, keywords "youngla", US, terms=questions, volume desc,
limit 40.

| Used | Question (US volume) | source_query |
|---|---|---|
| Yes | Who owns YoungLA? (400) | `who owns youngla` |
| Yes | When was YoungLA founded? (70) | `when was youngla founded` |
| Yes | Where does YoungLA ship from? (40) | `where does youngla ship from` |
| Yes | Does YoungLA do returns? (30) | `does youngla do returns` |

Skipped: what is youngla (folded into the founding answer), athlete/sponsorship/pay questions,
student discount, Afterpay, restock timing, "is it legit/good/fast fashion" (no stored facts or
opinion only), how to wash (no care data).

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A "brands like YoungLA" list for US shoppers is the site's purpose. |
| G2 | PASS | Nothing paraphrased from disco: its picks are the evidence, the substance is our store reads (regular-price tee ranges, size runs, free-shipping bars, return terms, named products with prices). FAQ answers come from brand facts. |
| G3 | PASS | Specifics a SERP reader can't get in one place: Kill Crew's S–5XL on every tee, Darc Sport's final-sale-only policy, Ryderwear's duties-paid US orders and store-credit returns, Gymreapers' $30 Basic Shirt in 22 colors, Vanquish in pounds converted, Ten Thousand's 14-day mail-by rule, ASRV's product codes matching its size guides. No fit/feel claims, by design. |
| G4 | PASS | No worn/tried/tested claims, no process narration. Ash's bio untouched. |
| G5 | PASS | `author: "Ash"`. Not YMYL. |
| G6 | PASS | Every number traces to a stored field (table below). Anchor verified. |
| G7 | PASS (N/A) | Not YMYL. |
| G8 | PASS | "10 Brands Like YoungLA for Gym Wear and Streetwear": real count, every pick sells gym tees. |
| G9 | PASS | Each body places price and size run against YoungLA's $30–$48 and XXL; price labels match stored prices. |
| G10 | PASS | Price, sizes, US shipping and returns per pick, plus a decision guide and the anchor's own terms in the FAQ. Fit/quality can't be answered from stored facts. |
| G11 | PASS | Intro 71 words: the reader's reason to look elsewhere (XXL cap, price), then what the list gives and how it's sorted. |
| G12 | PASS | All prices from 2026-10-29 (`checked_at`); no dates in copy. |
| G13 | **FAIL** | Honest estimate is Medium (below). Copy can't fix it: every pick rests on one outside source. |
| G14 | PASS | Affiliate links via /go/ with disclosure (template). No implied testing. |
| G15 | PASS | 0 em dashes, 0 semicolons, no Markdown. Bodies end differently (pointer to another pick, a returns rule, a shipping fact). No near-duplicate sibling. |

**Counts:** PASS 14 · FAIL 1 (G13) · BLOCKED 0.

**Estimated Page Quality:** Medium. The store data for all ten picks is real, dated and specific,
and the copy compares picks with each other, but all ten rest on a single editorial source (disco)
and the ranking SERP is mostly Reddit threads we couldn't read. Two picks are thin at full price
(Darc Sport: one $45 design; Inaka Power: five $50 tees).

**Estimated Needs Met (dominant intent):** Moderately Meets. Biggest lift: read the two r/YoungLA
threads (`human_check`) for independent evidence, then verify Alphalete as an 11th pick.

## Voice check (voice.md "What we never write")

- Process narration: none (no "we checked", dates, "its About page says"; one "the brand says"
  removed from Ryderwear).
- Spreadsheet sentences: counts appear only as reasons ("22 colors, so it's the easy way to stock
  up", "24 colors"); no product-count sentences.
- Verdicts on brands: none. Catches are about specific attributes (returns, sizes, shipping bar).
- Invented experience: none. Hype words: none.
- Moves present: answer-first opener per pick with a named product and price; why each fact
  matters (pounds → convert; 30 business days ≈ six weeks; final sale → buy elsewhere if unsure);
  one thing taught per brand; an honest trade-off; pick-to-pick pointers in every body; use-case
  Best for lines; How to choose by size, budget, fabric and returns.

## AI-voice scan

| Pattern | Where found | Fix |
|---|---|---|
| §34 "matters" | Ryderwear "If a refund matters" | "If you want the option of a refund" |
| §48 "without…" | Gymreapers "clear the $75 bar without trying" | cut |
| §22/§24 setup + colon reveal | Darc "Here's the catch: every order…" | "The catch is returns. Every order is final sale…" |
| §3 rule of three | Closing "Vanquish, Gymshark and Ryderwear"; returns list; Gymreapers size triplet | cut to two items each |
| Unsupported claim | Ten Thousand Interval Shirt "if you sweat through cotton tees" (no fabric fact) | replaced with 24 colors and the $88 Cordura version |
| Unsupported claim | Kill Crew "logo front and center"; Gymreapers "bigger graphic" | cut / replaced with size fact |
| Overclaim | ASRV "every tee is named after its fabric" (Seamless Training Tee isn't) | "most of its tees" |
| §8 sentence length | Inaka 32 words, ASRV 34 words | split |
| §1 "rather than" / §2 / §16 / §40 | none in copy | — |
| Smell Test | each body is built on that brand's own lines and terms; none would fit another entry unchanged | — |

## Fact trace

Brand files `data/brands/{slug}.json` (price `note`, `notes`); page file `data/pages/youngla.json`.

| Claim | Source |
|---|---|
| YoungLA tees $30–$48, stop at XXL | youngla prices.tees (92 items), size_range |
| compression tee / baggy sweats | youngla prices note (compression tees), notes[0] (Baggy Ass Sweats etc. in best sellers) |
| Batman and Naruto lines | youngla notes[2] (collections) |
| YoungLA $100 free shipping, 60-day returns | youngla free_shipping_min_usd, returns_days, notes[3–4] |
| most ship free past a set spend | free_shipping_min_usd set on 8 of 10 picks |
| Vanquish S–XXXL, £20–£36 ≈ $27–$48, Evolve Slim Fit £25 ≈ $33, Tekken £36 ≈ $48, London, $110, 30 days | vanquish-fitness size_range, prices.tees, notes[1–3] (FX 1.32876) |
| Gymshark Arrival $22, Power $36, Power Washed Oversized Boxy $40, 2012 Birmingham garage, NY office, XS–3XL, $75, 30 days, 60% final sale | gymshark prices note, notes[0–3] |
| Kill Crew S–5XL all, XXS on most, $40–$48, Relaxed Fit Lux $46, Script $40, athletic/relaxed/oversized collections, charity, $75, 30 business days | kill-crew prices note, notes[1–5] |
| Gymreapers Basic Shirt $30 in 22 colors, Axis Raglan $48, Discipline Division $58, belts and sleeves, $75, 2XL all / 3XL on 74 / 4XL on 39 of 127, refund minus shipping | gymreapers prices note, notes[0–3]; 22 regular-price "Basic Shirt - {color}" products |
| Darc yearly collections 2022–2026, Big Wolf Head $45 S–3XL, markdowns, Darc Sunday Sale, $150, final sale | darc-sport prices note, notes[0–1] |
| Jed North ≤$35, Tactical $25, Titan 2.0 $35, stringers/posing trunks/muscle-fit denim, Toronto + Houston warehouse, $100, S–3XL, 30 days refund or credit | jed-north prices note, notes[0–3] |
| Inaka cropped/oversized $50 tees, S–XXL, shorts bigger line, Sugar Land, ships US/CA/GB/AU, 10mm belts | inaka-power prices note, notes[0,2], ships_to |
| Ryderwear $50–$65, Element Seamless $52, Pursuit Oversized $65, designed for a muscular build, Australia 2009, duties paid, $120, XS–3XL on nearly every tee, 30-day store credit | ryderwear prices note, notes[0–3] |
| Ten Thousand $62–$88, Core Tee $62, Interval Shirt $78 in 24 colors, Cordura $88, New York, XS–XXL, free 30-day US returns, 14-day mail-by | ten-thousand prices note, notes[0,2]; Interval Shirt options (24 colors; Cordura variant $88) |
| ASRV $68–$108, AeroSilver Established $68, Tech Essential Oversized Boxy $88, product codes = size-guide handles (size-guide-0660), Vista CA, worldwide except Russia, XXL on 81 of 123, checkout shipping | asrv prices note, notes[0–3]; pages.json handle `size-guide-0660` |
| FAQ owners, 2014, LA, California fulfilment, 200+ countries (232), returns terms | youngla notes[1], notes[3], notes[4] |
