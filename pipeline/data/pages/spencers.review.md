# Review: stores like Spencer's (steps 2–5)

Written 2026-10-29 in one run (enrich, verify, pick, write). Author: Ash. Copy in `spencers.json` → `author`, `copy`.
Written against `pipeline/voice.md`; earlier page files used for JSON shape only.

## Gate result

Loaded through `lib/pipeline.ts` (`pipelinePages`) and judged with `judgeBrandsLikePage`, now = 2026-10-29
(script: scratchpad `spencers/gate/gate.ts`, run with `npx tsx`):

- `pickProblems` returns `[]` for all 8 picks. 8 picks render.
- Anchor missing: `sizeRange, shipsTo, returnsDays, price:graphic-tees`.
- Verdict: **not indexable** (noindex). Only reason: the anchor facts above. www.spencersonline.com refused every
  read (curl HTTP/2 reset and HTTP/1.1 timeout, WebFetch 503 on three URLs); no workaround tried. Human check row 1.
- Title: "8 Stores Like Spencer's for Graphic Tees and Gag Gifts".
- `npm run lint:facts`: exits 1 on `loft.known_for` ("for" inside a title suffix), a brand file this run didn't
  touch. None of this run's brands are flagged. Left for the coordinator / the loft agent.

## Anchor

`spencers` (new brand file): **verified** from its own store locator, stores.spencersonline.com (loads; lists 49
US states and 7 provinces, "over 630 stores across the United States and Canada", Graphic Tees department) and
Wikipedia. kind retailer, known_for "Graphic Tees and Gag Gifts", HQ US, founded 1947, parent Spencer Spirit
Holdings, us_stores true, sells_categories graphic-tees, has_plus true. No prices, sizes, shipping or returns.

## Category

`graphic-tees`: Spencer's own positioning leads with graphic tees, and every kept list mixes pop-culture chains,
novelty shops and alt-clothing stores that all sell them. Like-for-like item: short-sleeve graphic T-shirt at
regular price. Reasons in `category.why`.

## Evidence

Ahrefs (4 serp-overview calls): "stores like spencer's" (camcatbooks, storeslike.com kept), "stores like
spencers" (only Hot Topic lists and forums; cbinsights is automated), "spencers alternatives" and "similar to
spencers" (no rows). Two editorial lists added by WebSearch (precedent: affliction, damson-madder): Greenlit
Content and Honest Brand Reviews. Reddit, Facebook not read; expertbeacon 403; several hijacked-domain spam
copies not counted. No discobrands page exists for Spencer's.

## Picks

| Rank | Pick | Sources | Graphic tees (USD, regular price) | Label | Notes |
|---|---|---|---|---|---|
| 1 | Hot Topic | 4 | 12.99–50.90 (221, both sort ends) | null | new graphic-tees price entry |
| 2 | BoxLunch | 2 | 20.90–69.08 (147, both sort ends) | null | new file; 146 of 147 under $40 |
| 3 | FYE | 1 (HBR) | 19.99–29.99 (121, full feed) | null | new file; US stores |
| 4 | Archie McPhee | 2 | 19.95 (5, full feed) | null | new file; Seattle store |
| 5 | Killstar | 2 | 50–60 (9) | null | reused brand file unchanged |
| 6 | The Chivery | 1 (storeslike) | 28–38 (1,224 of 1,259 served) | null | new file; made to order |
| 7 | ModCloth | 1 (Greenlit) | 25–37 (55, full feed) | null | new graphic-tees price entry |
| 8 | AKIRA | 1 (camcatbooks) | 29.90–79.90 (45, first 2,000 tops) | null | new graphic-tees price entry |

All labels null: the anchor has no price. Order: pop-culture chains, then the novelty shop, then labels and
clothing stores, each by sources (no price closeness possible). Target 10–15 not reached; not padded.
Rejected (in `rejected`): Dolls Kill (no in-stock regular-price graphic tee), Urban Outfitters (no US fact),
Newbury Comics (6 logo tees online), Blue Banana (UK delivery only), Funko (no tees), ThinkGeek (redirects to
GameStop), Perpetual Kid / Life's Little Ironies / Design By Humans / Crazy Dog (unreachable), Forever 21 (intro
mention only), marketplaces, camcatbooks-only stores with no specific reason, pool-only brands. No thrift or
secondhand shop is a pick.

## FAQ sources

One Ahrefs `keywords-explorer-matching-terms` call (spencers, spencer's, spencer gifts; US; questions; volume desc).

| Question | source_query | Source |
|---|---|---|
| Did Spencer's buy Hot Topic? | did spencers buy hot topic (250) | Ahrefs |
| What does Spencer's sell? | what does spencers sell (100) | Ahrefs |
| How many Spencer's stores are there? | how many spencers stores are there (70) | Ahrefs |
| Is Hot Topic like Spencer's? | People also ask on "stores like spencers" (Ahrefs SERP question row) | people_also_ask |

Skipped: is spencer's closing (no stored fact), ID / discreet-packaging / shipping-time / pay / work-age questions
(no stored fact or out of scope), All American character questions (a different Spencer), "What's cheaper,
Spencer's or Hot Topic?" (PAA; no Spencer's price).

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A stores-alternatives page for US shoppers is the site's purpose. |
| G2 | PASS | The outside lists give only which stores are named. Every body is built from each store's own pages: tee ranges, named tees with prices, size runs, shipping rules (FYE's per-pound rate, Chivery's made-to-order wait, Akira's sale-item exclusion), return fees. |
| G3 | PASS | Original data a SERP reader can't get from the lists: regular-price tee ranges, size runs, thresholds, return windows and fees. No hands-on claims, by design. |
| G4 | PASS | No wear/try/test claims; Ash's bio untouched. |
| G5 | PASS | Title "8 Stores Like Spencer's for Graphic Tees and Gag Gifts" states the real count and what the page compares. |
| G6 | PASS | Answer-first opener per pick; each names a product and price in the first paragraph. |
| G7 | PASS | Every pick has a trade-off (FYE sizes and postage, Chivery wait, Killstar returns, Akira sizes, ModCloth threshold). |
| G8 | PASS | Picks compared with each other (tall ranges, 5XL, half the price, lowest threshold). |
| G9 | PASS | Not YMYL. Prices are shopping facts, dated in the data. |
| G10 | PASS | No affiliate claims in copy; links go through /go/ by template. |
| G11 | PASS | No filler: intro 65 words, bodies 115–132, closing 105, FAQ answers 20–38. |
| G12 | PASS | Not templated: each body carries store-specific facts; How to choose names picks by use case. |
| G13 | PASS | No invented first-person or "we checked" narration. |
| G14 | PASS | Nothing implies we bought or tested anything. |
| G15 | BLOCKED (publish) | Anchor facts missing (gate noindex) until human_check row 1 is done; source acceptability rows 2–4. |

## Voice check (voice.md "What we never write")

None present: no process narration, dates or "we checked"; no counts as the point of a sentence (counts like
"nearly all under $40" carry the why); no verdicts; no invented experience; no hype words. No semicolons, em
dashes, bold or italics. Brands are "it" throughout. Longest sentence 26 words.

## AI-voice scan (ai-voice-avoid.md)

Fixed: a 32-word Chivery sentence split; "They start with" (pronoun drift) rewritten; one ranking claim corrected
("widest price spread" was false: BoxLunch's spread is wider, now "starts lowest, at $12.99"); "almost everything
it sells is a T-shirt" cut (no stored fact); "witchy" replaced with the stored "occult and horror". No
rule-of-three tricolons in the bodies' key claims, no "whether you're…", no "it's worth noting", no stacked
hedges, no closing CTA.

## Fact trace

- Intro: Spencer's known_for (locator text: graphic t shirts, novelty and gag gifts).
- Hot Topic: prices and names → hot-topic graphic-tees price note; XS–5XL, tall → size_range; $75, $1.99
  pre-order, ship-to-store waiver → notes; "mostly clothes and fandom merch" → homepage title note.
- BoxLunch: meal per $10 → notes (homepage); $20.90, Lilo & Stitch, Wicked $36.90, 146/147 under $40 → price
  note; sizes → size_range; $75, 30 days, $1.99 → notes.
- FYE: $19.99–$29.99, named tees, Riot Society → price note; stores in US, Funko/Pokémon → notes; 2X → notes;
  $4.25 + $3.75/lb, US + territories only → notes.
- Archie McPhee: Seattle 1983, Bigfoot/rubber chickens → notes; $19.95, named tees, S–XXL → price note; $50,
  US only, 30 days new unopened → notes; makes its own → notes.
- Killstar: $50–$60, Blind Mind, boxy $60, 100% cotton jersey, XS–4XL, $175, 14 days, known_for → killstar file.
- The Chivery: theCHIVE, $28 tees, Keep Calm / KCCO, William Murray Golf $38, made to order 7–10 days, $125
  contiguous US, sizes → the-chivery file.
- ModCloth: labels, Poe / Black Cats $25, $25–$37, XS–4XL, $150, $14 fee / Checkout+, 30 days → modcloth file.
- AKIRA: Chicago, 18 states, dresses/shoes/coats, named tees, $29.90–$79.90, S–1X, 3X overall, $75 excl. sale,
  30 days, $10 label → akira file.
- FAQ: Hot Topic deal, sells list, 630+ stores, outlets → spencers notes (locator + Wikipedia); Hot Topic tee range
  → hot-topic price.

## Estimated Page Quality and Needs Met

- Estimated Page Quality: Medium+ (specific, sourced shopping data; capped by thin outside evidence: four lists,
  two found outside the top 10, and no Spencer's prices to compare against).
- Needs Met for "stores like spencer's": Moderately Meets (covers the pop-culture, gag-gift and alt-tee intents
  with real terms; 8 picks, below page-one counts; no direct price comparison with Spencer's).
