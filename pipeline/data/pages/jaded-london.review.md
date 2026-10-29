# Review: brands like Jaded London (top-up + rewrite, 2026-10-29)

Author: Ash. Copy in `jaded-london.json` → `author`, `copy` (intro, 15 bodies, 15 `best_for`,
closing, 3 FAQs), written against the rewritten `pipeline/voice.md`. The old copy was replaced
wholesale, not edited.

Gate (`lib/pipeline.ts` → `judgeBrandsLikePage`, now = 2026-10-29): **15 picks render** (of 16
in the file), title "15 Brands Like Jaded London", page **noindex**.
Reason: `anchor missing: status, knownFor, sizeRange, shipsTo, returnsDays, imageUrl, price:jeans`.
`npm run lint:facts`: ok. `npm test`: 27 pass, 0 fail.

## What changed

- **Added 8 picks**, all from candidates already recorded on this page with outside evidence, all
  `verified` brand files with a jeans price and US shipping. Each one's jeans feed was re-read
  today and matched the stored range (products.json; Rolla's from its US collection page).
  Urban Revivo shipping, Tripp NYC returns + About, and Daze shipping were re-read too.
  - Editorial lists: Urban Revivo (worthybornedit #4), OTHER (discobrands), Miaou (worthybornedit #7,
    listed but with no direct comparison line).
  - Co-stocked in the Dolls Kill jeans collection (18 Jaded jeans): Rolla's (21 products), Daze (14),
    Tripp NYC (12), BY.DYLN (12), Pistola (9).
- **LIONESS moved to `rejected`**: doesn't ship to the US, no US stores (fails enrich.md §3).
- **Edikted kept as a pick** (2 sources) with no body: every jeans item is on sale, so no regular
  price. It renders once a regular price exists and a body + best_for are written.
- **Existing 7 rendered picks kept** in their order; none fails a rule.
- Ranking for added picks: editorial before co-stocked, then more Dolls Kill jeans listings.
  Anchor price is unknown, so price closeness can't be used and every `price_relation` is null.
- Not added: Weekday (403), The Kript (JS challenge), Bershka (unverified), Hoodrich (one
  regular-price jeans item), Minga London (Dolls Kill vendor not confirmed). At 15 renderable
  the gate cap is reached, so the remaining one-source co-stocked candidates weren't verified.

## Anchor: still unverified (human_check for Ash)

https://jadedldn.com/ returned 403 to WebFetch again (one try, no workaround). enrich.md allows a
parent company's official site only for chains, and prices only from the store itself, so stockist
or marketplace listings can't verify status, prices, sizes, shipping or returns. Wikipedia was
re-read (founded 2013 by siblings Jade and Grant Goulden, based in the UK) and Revolve's Jaded
London denim page was re-read (stocks it). The human_check rows are unchanged except the Dolls Kill
vendor row, which now only matters for Minga London.

## FAQ sources (Ahrefs)

One `keywords-explorer-matching-terms` call ("jaded london", US, questions, 30 rows, 330 units).
Used: `where can i buy jaded london outfits?` (200), `what is jaded london` (50), `where is jaded
london based` (40). Skipped, no stored fact answers them: fast fashion, shipping time / ships to US,
legit, quality, runs small, designer, expensive, restock, returns, has a store, who owns it.

## Voice check (`voice.md` "What we never write")

- Process narration: none (no "we checked", dates, "its About page says", blocked checks).
- Spreadsheet sentences: none. Counts were turned into reasons (waists, inseams, thresholds).
- Verdicts on brands: none. Trade-offs are on attributes (returns windows, size ceilings, delivery time).
- Invented experience: none. No wear, feel or fit-on-body claims.
- Hype: none. Answer-first opener with a named product and price in every body; each body points
  to another pick where one fits better; "How to choose" sorts by budget, fit and attitude.
- No semicolons, em/en dashes, Markdown or "they" for a brand. Every sentence ≤30 words. Bodies
  111–135 words, intro 64, closing 106, best_for 7–11 words, FAQ answers 15–33 words.

## AI-voice scan (ai-voice-avoid.md)

Fixed: a "not X" binary contrast (Tripp NYC), a fake rhetorical question (mnml), a colon reveal
(Manière De Voir), two three-part lists (Tripp NYC sizes, closing price tiers). Kept: "from
dispatch, not delivery" and "an e-gift card, not a refund" (both are the fact itself).

## Fact trace (new and rewritten claims → field)

- Intro: "huge leg, washed-out finish" → `category.why` (discobrands); "every one ships to the US" →
  each pick's `ships_to`; ranking → `picks[].independent_sources`.
- Product names and prices → `product-images.json` (existing picks) or the re-read feeds
  (new picks): Urban Revivo tassel-belt ($89.90) and cargo ($69.90) jeans; OTHER O32 Ripped Knee
  Flared (£120); Miaou Low Rise Flare ($218), Element Jean ($325); Rolla's Sailor ($129), Frankie
  Loose Long ($159); Daze Far Out ($108), Mirage Cargo Harem ($118); Tripp Denim Bondage Pant ($132),
  Scare Dark Street Pant ($149); BY.DYLN Cyrus (A$149), Archer (A$290); Pistola Kinsley ($188),
  Carina ($208); Represent R6 ($260), R5 ($260), R3 name only.
- USD conversions → `fx` (ECB 2026-10-28): £80 = $106, £75 = $100, £120 = $159, A$149 = $105,
  A$290 = $204, A$150 = $105.
- Ranges, sizes, shipping thresholds, return windows and fees, founders, founding years, origins
  → each brand file's fields and `notes` (all checked 2026-10-29).
- Style descriptors: Represent "faded washes and roomy cuts" and Affliction "tattoo-style" →
  page `picks[].evidence` notes; Jaded's "cargo side" → `category.why`.
- FAQ: founders/year/UK → Wikipedia (re-read); stockists → `co_stocking` (Revolve re-read, Dolls
  Kill read today, Urban Outfitters read 2026-10-28).

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | Brand alternatives for US shoppers are the site's purpose. |
| G2 | PASS | Store-level data per pick (ranges, fits, sizes, thresholds, return terms) isn't in the ranking lists. No outside wording reused. FAQ from stored facts, not PAA. |
| G3 | PASS | Specifics a SERP reader can't get: Rolla's "Long" = 34-inch inseam, Motel Rocks' returns run from dispatch, OTHER's prices include duties, Tripp's 7-day window, Pistola's petite waists. No hands-on knowledge, by design. |
| G4 | PASS | No first-person experience claims. Bio not added to. |
| G5 | PASS | `author: "Ash"`, bio in `lib/authors.ts`. Not YMYL. |
| G6 | **BLOCKED (publish)** | Every claim traces to a stored field, but the anchor is unverified, so "best known for baggy jeans" rests on the provisional `category.why`. |
| G7 | PASS (N/A) | Not YMYL. |
| G8 | PASS | "15 Brands Like Jaded London" is the real rendered count. |
| G9 | **BLOCKED (publish)** | No cheaper/similar/pricier labels until Jaded's own prices are verified. |
| G10 | **BLOCKED (publish)** | Readers still need a second search for Jaded's own price, sizes and US shipping. |
| G11 | PASS | Intro is 64 words. Each body opens with the answer and a named product. |
| G12 | PASS | All facts checked 2026-10-29, shown by the template's "Last checked" line. |
| G13 | **FAIL** | Honest estimate is still Medium (below). Copy can't fix the empty anchor side or missing images. |
| G14 | PASS | /go/ links and commission line in the byline. No implied testing. |
| G15 | PASS | Read as a whole: picks cross-refer, endings vary, no sibling duplicate. |

**Counts:** PASS 11 · BLOCKED 3 (G6, G9, G10) · FAIL 1 (G13).

**Estimated Page Quality:** Medium, moving toward High. The strongest part is store-level data for 15
picks in a voice that tells the reader what each fact means. What holds it back: the anchor side of
every comparison is empty, 13 of 15 picks have one outside source, and several picks have no
`/img/` image yet.

**Estimated Needs Met (dominant intent):** Moderately Meets. Biggest lift: Ash verifies jadedldn.com
(jeans price, sizes, US shipping, returns) so each pick gets a price label against Jaded and the
page can index.
