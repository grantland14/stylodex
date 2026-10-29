# Review: brands like Darc Sport (steps 2–5)

Produced 2026-10-29 end to end per `pipeline/run-page.md`. Author: Ash. Category C = `tees` (Tees):
Tee (116) and She Tee (118) are Darc Sport's two largest product types in `products.json`, ahead of
shorts and hoodies, and hoodies have no regular-price items at all (see `category.why`). Same scope
as the YoungLA page (men's short-sleeve tees), which shares 7 of the 8 picks.

## Enrichment summary

- **SERP** (Ahrefs `serp-overview`, US, 4 calls): only `brands like darc sport` returned rows;
  `stores like`, `alternatives` and `similar to` returned none. Of the 10 positions: Reddit (refused,
  not worked around), Facebook, TikTok, YouTube not read; 3 Lemon8 pages read, none frames a brand as
  an alternative to Darc Sport; Wellworthy is about Gymshark. Kept one page, found by web search
  outside the top 10: disco's "brands like Darc Sport" (independent directory, byline, affiliate
  links), 9 brands. Its brand page lists the same 9, counted once. Spam pages on hijacked domains
  (co-wheels.org.uk and similar) dropped.
- **Pool:** no Darc Sport row in `public.brands`, so no Apart Style pool candidates.
- **Co-stocking:** none found; Darc Sport sells through its own store.
- **Verified:** brand files reused from the YoungLA run (all checked 2026-10-29). Anchor re-read:
  923 of 929 products carry a compare-at markdown; regular-price tees are 5 Big Wolf Head tees at
  $45, S–3XL. One patch merged (`darc-sport`: price note, notes, sources) via `merge_brand.py`.
  `npm run lint:facts`: ok.
- **Picks: 8 of 9 candidates with a source.** Rejected: Alphalete (403 to WebFetch again, human
  check), Civil Regime (no outside source names it as an alternative, sister label). 8 is below the
  10–15 target; nothing padded.

## Gate result (Check step)

`npx tsx` scratch script: `pipelinePages()` from `lib/pipeline.ts`, `judgeBrandsLikePage`,
now = 2026-10-29.

```
anchor missing: []
kill-crew 1 similar []
gymreapers 2 similar []
inaka-power 3 pricier []
youngla 4 similar []
vanquish-fitness 5 similar []
gymshark 6 similar []
ten-thousand 7 pricier []
asrv 8 pricier []
indexable: true rendered: 8 reasons: []
title: 8 Brands Like Darc Sport for Gym Apparel in Yearly Collections
```

**Gate: 8/8 picks render; indexable.** `npm test`: 30 pass.

## FAQ sources (Ahrefs)

One call: `keywords-explorer-matching-terms`, keywords "darc sport", US, terms=questions, volume
desc, limit 50.

| Used | Question (US volume) | source_query |
|---|---|---|
| Yes | Who owns Darc Sport? (100) | `who owns darc sport` |
| Yes | Does Darc Sport do returns? (10) | `does darc sport do returns` |
| Yes | Where is Darc Sport located? (10) | `where is darc sport located` |

Skipped: what is darc sport, founded/started (no stored founding year), SSDD meaning, gift cards,
passwords, restock and drop timing, shipping times, washing, "is Civil Regime the same" (no stored
fact on the Darc Sport file). PAA ("Is Darc Sport clothing good quality?") is opinion only.

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A "brands like Darc Sport" list for US shoppers is the site's purpose. |
| G2 | PASS | disco supplies only the candidate names; the substance is our own store reads (regular-price tee ranges, size runs, free-shipping bars, return terms, named products with prices). |
| G3 | PASS | Specifics no single ranking page has: Darc Sport's final-sale policy and $45 full price set against each pick's returns and sizes, Kill Crew's S–5XL on every tee, Ten Thousand's free returns past $150, ASRV's fabric-named tees and size ceiling. No fit or feel claims. |
| G4 | PASS | No worn/tried/tested claims, no process narration. Bio untouched. |
| G5 | PASS | `author: "Ash"`. Not YMYL. |
| G6 | PASS | Every number traces to a stored field (table below). Anchor verified. |
| G7 | PASS (N/A) | Not YMYL. |
| G8 | PASS | Title count 8 is the real count; every pick sells gym tees; known_for in human_check. |
| G9 | PASS | Each body places price, sizes and returns against Darc Sport's $45, 3XL and final sale; labels match stored prices. |
| G10 | PASS | Price, sizes, US shipping and returns per pick, a decision guide, and the anchor's own terms in the FAQ. |
| G11 | PASS | Intro 72 words: the final-sale moment, why readers look elsewhere, how the list is sorted. |
| G12 | PASS | All prices from 2026-10-29 (`checked_at`); no dates in copy. |
| G13 | **FAIL** | Honest estimate is Medium (below): every pick rests on one outside source, and 8 picks is under the page-one target. Copy can't fix it. |
| G14 | PASS | Affiliate links via /go/ with disclosure (template). No implied testing. |
| G15 | PASS | 0 em dashes, 0 semicolons, no Markdown. Sentences checked against every sibling page: no exact repeats, and the near-repeats of the YoungLA page (shared picks) were rewritten. |

**Counts:** PASS 14 · FAIL 1 (G13) · BLOCKED 0.

**Estimated Page Quality:** Medium. Real, dated store data on all 8 picks, built around the one
thing a Darc Sport buyer can't get back (returns), but all rest on a single directory source and the
anchor's full price is one $45 design in a store that is almost all marked down.

**Estimated Needs Met (dominant intent):** Moderately Meets. Biggest lift: read the r/workout
thread (`human_check`) for independent evidence and verify Alphalete as a 9th pick.

## Voice check (voice.md "What we never write")

- Process narration: none. Spreadsheet sentences: none (counts only as reasons, e.g. "four tees
  for the price of two"). Verdicts: none, catches are about sizes, returns and price floors.
  Invented experience: none. Hype words: none.
- Moves: answer-first opener with a named product and price per pick; why each fact matters
  (pounds move with the rate, $150 bar vs free returns, sizes vs 3XL); one thing taught per brand
  (Kill Crew's cut collections, Gymreapers' kit, Inaka's camo match, YoungLA compression tees,
  ASRV's fabric names); a trade-off and a pointer to another pick in every body; use-case Best for
  lines; How to choose by size certainty, price, cut and fabric.

## AI-voice scan

| Pattern | Where found | Fix |
|---|---|---|
| §24 colon reveal | Intro "read Darc Sport's policy: every order…" | split into two sentences |
| §23 fake rhetorical question | Closing "Want the cropped cut? Inaka Power." | "For a cropped cut, go to Inaka Power." |
| §3 rule of three | Closing returns triplet; Gymreapers belts/straps/sleeves | cut to two |
| §40 "from X to Y" | Kill Crew "from athletic fit to oversized" | "athletic fit through oversized" |
| §34 emphasis crutch | Vanquish "the real difference" | "that window is what sets it apart" |
| §49 mannered prose | Kill Crew "too tight a ceiling", "the floor"; Gymreapers "cover your training bag" | plain statements |
| §8 sentence length | Inaka 31 words | split |
| Unsupported claim | Vanquish "ship from inside the US" (Kill Crew); Gymshark reason "under $45 for most styles" | cut |
| Smell Test | each body is built on that brand's own products and terms | — |

## Fact trace

Brand files `data/brands/{slug}.json` (price `note`, `notes`); product names from
`data/product-images.json` where noted.

| Claim | Source |
|---|---|
| Darc Sport final sale, 7 days to report issues, $45 tee, S–3XL, $150 free US shipping, Big Wolf Head All Of Us Camo, Civil Clothing Inc., Torrance, 56 countries DDU | darc-sport prices.tees note, notes[0–2], parent_company, returns_days 0 |
| Kill Crew $40–$48, S–5XL all, Relaxed Fit Inner Demons Tour T-Shirt $46, cut collections + heavyweight Lux, 30 business days, $75 | kill-crew prices note, notes[3–5], product-images |
| Gymreapers Core Skull Shirt $30, Skull Graphic Tees $38, Discipline Division $58, belts and elbow sleeves, $75, 2XL all / 3XL, 4XL on some, 30 days minus shipping | gymreapers prices note, notes[0–3], product-images |
| Inaka Power $50 cropped tees, Off the Grid Cropped Tee camo, shorts main line, Sugar Land, S–XXL, most tees sale-tagged | inaka-power prices note, notes[0,2], product-images |
| YoungLA $30–$48, limited quantities, LA, Immortal Club Tees $36, Warrior Compression Tees $42, 60 days, Westfield Topanga flagship, XXL, $100 | youngla prices note, notes[1,3–5], product-images |
| Vanquish S–XXXL, Strength Regime Oversized £32 ≈ $43, Origin Black Gold Slim Fit £20 ≈ $27, London, $110, FedEx 4–6 working days, 30 days | vanquish-fitness prices note, notes[1–3] (FX 1.32876), product-images |
| Gymshark Crest $22, Power Washed Oversized Boxy $40, XS–3XL, $75, 30 days, 60%+ final sale, Birmingham 2012 | gymshark prices note, notes[0–3] |
| Ten Thousand $62–$88, Core Tee $62, Session/Tactical $78, $150 free shipping and returns, prepaid label, New York, XXL, 8 styles | ten-thousand prices note, notes[0–2] |
| ASRV $68–$108, AeroSilver Established + Seamless Training $68, Supima Oversized $78, SUPIMA Ice-Skin Reversible $108, 30 days no shipping refund, no free bar, XS–XL all / XXL most | asrv prices note, notes[0–3] |
| "most give you at least 30 days" | returns_days ≥ 30 on 7 of 8 picks (Inaka Power empty) |
| FAQ: owner, returns, location | darc-sport parent_company, notes[0–2] |
