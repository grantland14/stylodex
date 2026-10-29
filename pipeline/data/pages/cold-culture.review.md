# Review: brands like Cold Culture (steps 2–5)

Produced 2026-10-29 end to end per `pipeline/run-page.md`. Author: Ash. Category C = `hoodies`
(Hoodies): hoodies and zip hoodies are 74 of Cold Culture's 243 best sellers, its largest product
type, and lead its homepage title (see `category.why`). Copy written to `pipeline/voice.md`.

## Enrichment summary

- **Official store:** coldcultureworldwide.com (Shopify shop "Cold Culture", Madrid). coldculture.com
  (expired certificate), coldculture.es (parked) and coldculturestore.com (redirects to
  coldculturesshop.com) are not the brand's store; recorded in the brand notes.
- **SERP** (Ahrefs `serp-overview`, US, 4 calls, the cap): all four keywords returned no rows.
  Evidence came from WebSearch instead (precedent: TJ Maxx, Damson Madder, Tillys), recorded in
  `web_search`. Kept three pages:
  - Streetwear Directory "Brands like Cold Culture: 7 alternatives" (unsigned directory, last
    verified Oct 9, 2026; says its ranking is its own judgement). Evidence only, never cited.
  - Axiom Studio's blog, "Alternativas a Cold Culture" section (a competing brand naming rivals;
    its self-mention not counted).
  - CUOTTI's blog, "Alternatives to Cold Culture" (names Eme Studios; self-mention not counted).
  Dropped: a press-release comparison and a "where to buy" piece that both link lookalike store
  domains, Nerdbot (403), a top-100 ranking, two Spanish roundups that never call a brand an
  alternative, a derschutze page, Apart Style (never counts), TikTok. disco has a Cold Culture
  profile with no alternatives.
- **Co-stocking:** El Corte Inglés stocks it but answered 403; not read.
- **Pool:** none. Cold Culture isn't in `public.brands`.
- **Verified:** anchor + 10 brand files through `merge_brand.py`, one patch at a time (new:
  cold-culture, drmers-club, derschutze, mertra, corteiz, anti-social-social-club,
  fear-of-god-essentials, cuotti, yuxus; added hoodies to represent and blue-banana).
  `npm run lint:facts`: ok.
- **Shared-file note:** blue-banana appeared between my existence check and my merge (another page
  agent). My hoodies price entry (€94.90, 10 Classic Hoodies) replaced theirs, as the merge rule
  does for the same category; flagged in `human_check`.
- **Picks: 10 of 11 candidates with a source.** Rejected: Eme Studios (store redirects bots;
  WebFetch showed no hoodie category), plus Axiom Studio, Scuffers, Supreme and Cough Syrup (no
  valid outside source as a Cold Culture alternative).
- **Prices:** each store's US-market prices (Shopify `country=US`, currency confirmed by
  `Shopify.currency` on a product page or cart.js). Cold Culture's US price list is not a
  conversion (€79 base, $109 US). Only Blue Banana has no US market, so it stays in euros at the
  ECB rate of 2026-10-28. Regular = no compare-at above price. Campaign or "Final Sale" tags with
  no compare-at are not markdowns.

## Gate result (Check step)

`npx tsx` scratch script: `pipelinePages()` from `lib/pipeline.ts`, `judgeBrandsLikePage`,
now = 2026-10-29.

```
anchor missing: []
blue-banana 1 similar []
yuxus 2 similar []
drmers-club 3 similar []
mertra 4 similar []
anti-social-social-club 5 similar []
derschutze 6 similar []
cuotti 7 cheaper []
corteiz 8 pricier []
fear-of-god-essentials 9 pricier []
represent 10 pricier []
indexable: true rendered: 10 of 10 reasons: []
title: 10 Brands Like Cold Culture for Streetwear Hoodies and Tees
```

**Gate: indexable, 10/10 picks render.** The anchor has no image yet (optional; the coordinator's
media step). `npm test`: 30 pass.

## FAQ sources (Ahrefs)

One call: `keywords-explorer-matching-terms`, keyword "cold culture", US, terms=questions, phrase
match, volume desc, limit 40.

| Used | Question (US volume) | source_query |
|---|---|---|
| Yes | Is Cold Culture legit? (150) | `is cold culture legit` |
| Yes | Where is Cold Culture based? (80) | `where is cold culture based` |
| Yes | Does Cold Culture ship to the US? (20) | `does cold culture ship to the us` |
| Yes | How long does Cold Culture take to deliver? (40) | `how long does cold culture take to deliver` |

Skipped: "what is cold culture" (folded into the legit answer), "is it fast fashion / a good
brand" (opinion, no stored facts), "who owns" (no ownership fact stored), font, meaning, sale end
dates, restocks, "where is it made" (Portugal only per Axiom's blog, not the store).

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A "brands like Cold Culture" list for US shoppers is the site's purpose. |
| G2 | PASS | Nothing paraphrased from the sources: their picks are the evidence; the substance is our store reads (US hoodie prices, fleece weights, size runs, US shipping bars, duties, return terms, named hoodies with prices). |
| G3 | PASS | Specifics no ranking page has in one place: Cold Culture's separate US price list and duties-included shipping, ASSC's made-to-order 4–6 weeks and final sale, Essentials' final-sale rule, derschutze's New York store and €23.99 US shipping, CUOTTI's gift-card-only refunds and S–L sizes, Yuxus's $120 duties-paid bar. No fit/feel claims beyond what listings state. |
| G4 | PASS | No worn/tried/tested claims, no process narration. Ash's bio untouched. |
| G5 | PASS | `author: "Ash"`. Not YMYL. |
| G6 | PASS | Every number traces to a stored field or brand note (table below). Anchor verified. |
| G7 | PASS (N/A) | Not YMYL. |
| G8 | PASS | "10 Brands Like Cold Culture for Streetwear Hoodies and Tees": real count, every pick sells hoodies; the known_for is the anchor's own homepage wording. |
| G9 | PASS | Each body places price, sizes or returns against Cold Culture's $97–$119, XS–XXL, $150 bar and 15 days; price labels match stored prices. |
| G10 | PASS | Price, size run, US shipping and returns per pick, a decision guide, and the anchor's own shipping/legit questions in the FAQ. |
| G11 | PASS | Intro 66 words: the reader's moment (the return terms), what the list gives, how it's sorted. |
| G12 | PASS | All store reads 2026-10-29; FX 2026-10-28. Dates live in the data, not the copy. |
| G13 | PASS | The only "brands like Cold Culture" list found refuses to compare prices; this page gives US prices, weights and return rules for all ten. |
| G14 | PASS | No implied testing; picks chosen by outside evidence and stored facts; affiliate links via the template. |
| G15 | PASS | Read as a whole; each pick points to another where it fits better; no sibling duplication (first hoodies page). |

**Estimated Page Quality:** High. Strongest reason: verified US prices, duties and return rules
for every pick, which the ranking pages don't give.
**Estimated Needs Met (dominant intent):** Highly Meets. Would be better with a second independent
source per pick (every pick is single-source).

## Voice check (`voice.md` "What we never write")

- Process narration: none (no "we checked", dates, source names, "its site says").
- Spreadsheet sentences: none as the point of a sentence. Counts used only as details with a
  reason ("five hoodies at full price ... sizes stop at L").
- Verdicts: none. Trade-offs are about returns, duties, sizes, shipping.
- Invented experience: none. Fit language is the brands' own ("boxy", "true to size", "regular fit").
- Hype: none. "it" for brands (one "they" removed).
- Rhythm: no sentence over 30 words; no semicolons, em dashes or en dashes in copy.

## AI-voice scan (ai-voice-avoid.md)

Fixed: one 32-word sentence split (Represent); "the hoodies" for an ambiguous "they". Checked
for §1 binary contrasts, §3 rule of three (one three-name list kept in How to choose, a factual
list of the final-sale brands), §13–14 vocabulary (none), §19–26 openers/endings (none), §36
trailing significance (none). Smell test: each paragraph names a specific brand fact.

## Fact trace

| Copy | Source field |
|---|---|
| Cold Culture $109, $97–$119, 15 days, €15+ US return, $150 free, duties included, XS–XXL, boxy, size up for oversize, 2021 Madrid, stores list, 5–10 days, 1:00 PM CET cutoff | cold-culture prices + notes, returns_days, free_shipping_min_usd, size_range, founded_year |
| Blue Banana €94.90 (~$106), organic cotton, X embroidery, ten colors, regular fit, XS–XXL, customs on buyer, 30 days, non-EU return postage | blue-banana prices, materials, notes, returns_days |
| Yuxus $109 most, Belgrave $109 450gsm washed dropped shoulder, Vanguard $79, $120 duties included, 15 days, $14.90 | yuxus prices + notes |
| DRMERS $100/$110, XS–XXXL, Script Text $110, Everything Is Fine $100, Gastown, $7 / $150, 14 days, no exchanges, collabs non-returnable | drmers-club prices + notes |
| Mertra $118/$121, 460–700gsm, Glide $121 500gsm pockets toggles, Pulse $105 460gsm piping, warehouses, no threshold, 14 days by email | mertra prices + notes |
| ASSC $89 Classic Mind Games, $119 NFL, made to order 4–6 weeks + 1–2, all sales final | anti-social-social-club prices + notes |
| derschutze 22 Spring St NY, won $106, riot $117, 460–480gsm, true to size, €23.99, 14 days | derschutze prices + notes |
| CUOTTI 465gsm fleece, $63 / $74 / $89, five hoodies, black/blue/green, S–L, 14 days gift card | cuotti prices + notes |
| Corteiz 430–440gsm, boxy relaxed, Alcatraz $155, OG Strike $160, USD, duties on buyer, all sales final, true to size | corteiz prices + notes |
| Essentials $150–$195, 380–520gsm, SS26 Classic $150, NFL Sport $175 480gsm relaxed, free over $100, XXXL, final sale | fear-of-god-essentials prices + notes |
| Represent Initial Boxy $140 500gsm cropped, Owners Club $200, up to $315, 480gsm+, XXS–XXL, ships from US, $175, 14 days | represent prices + notes |
