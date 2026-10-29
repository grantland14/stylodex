# Review: brands like Minga London (steps 2–5)

Run 2026-10-29 per `pipeline/run-page.md`. Author: Ash. Category C = `jeans`. Jeans are Minga London's
largest single product type: 50 of the 489 US products read, and 15 of 69 in Most Wanted. Its US
homepage meta also leads with "statement denim and jeans". Tops of all kinds together outnumber jeans,
so C is in `human_check`.

## Enrichment

- **SERP (Ahrefs, 4 calls, US):** `brands like minga london` and `stores like minga london` returned
  data. `minga london alternatives` and `similar to minga london` returned no positions. Only one
  editorial page was kept from the top 10: worthybornedit (15 entries, May 2025). Indiefoxx was read,
  but it lists Minga London as one of its own favourite shops and doesn't frame any shop as an
  alternative to it. Reddit, TikTok, Instagram, YouTube and Quora were not read. The discobrands
  brand profile (4 similar brands, each with a written reason) came from a WebSearch, not the Ahrefs
  top 10. It was kept as one source, but its match scores look automated.
- **Co-stocking:** the Dolls Kill jeans collection (pages 1–4, 1,000 products) lists 19 jeans from
  vendor "Minga". Dolls Kill's `/collections/minga` page calls the brand Minga London. **All 168 Minga
  products there are sold out**, so the evidence shows where Dolls Kill files the brand, not what it
  stocks now (see `human_check`).
- **Pool:** Apart Style's `brand_relationships` for Minga London has 37 rows. Most are shoe brands
  (Koi, ATP Atelier, Swear London, Fluevog), which suggests the rows mix in Minga Berlin. Only Motel
  Rocks also has an outside source.
- **Anchor: verified.** On the US store (cart USD), 33 jeans are at regular price, $130–$210, waists
  24–38. US delivery is DHL Express: $15 under $100, $9.90 for $100–$200, free over $200, in 2–4
  business days. Duties are included. Returns run 30 days with a fee, and there are no exchanges. The
  size guide runs XS–XXXL (US 0–22).
  **US prices are much higher than UK prices.** The Rift Washed Black Straight Baggy Jeans cost $130
  in the US against £72 (about $96) in the UK. Burn Baggy is $190 against £110 (about $146), and
  Dash Flared is $210 against £120 (about $159).
  `known_for` was corrected from the About slogan "For Those Who Embrace Their Weirdness", which made
  the title read "…for For Those…". It is now "Statement Denim and Graphic Tops", from the US homepage
  meta.
- **Verified:** the anchor plus 21 candidates. That gives 12 picks, with 19 rejected (reasons in
  `rejected`). The bot walls were not worked around: Jaded London (403 all day for other agents) and
  Namilia (429).
- **Brand files**, from patches in my own folder (`scratchpad/patches/minga-london/`), merged one at
  a time:
  - `minga-london`: `--overwrite known_for,size_range,ships_to,free_shipping_min_usd`.
  - `the-kript`: jeans price added ($93–$114).
  - `lioness`: the jeans price now comes from the US store ($85–$105 USD) instead of the AU store's
    AUD prices. Its product photos still show AUD prices.
  - `ksubi` and `diesel`: new files.
  - Notes added after re-reading the feeds (prices unchanged) for the-ragged-priest, motel-rocks,
    maniere-de-voir, daze, tripp-nyc, by-dyln, pistola and rollas.
  - `npm run lint:facts` passes, and `npm test` passes.

## Gate result (Check step)

This uses `npx tsx` with a scratch script: `pipelinePages()` from `lib/pipeline.ts`, then
`judgeBrandsLikePage` with now = 2026-10-29.

```
the-kript 1 cheaper [] · the-ragged-priest 2 cheaper [] · lioness 3 cheaper []
maniere-de-voir 4 similar [] · ksubi 5 similar [] · diesel 6 similar [] · motel-rocks 7 cheaper []
rollas 8 similar [] · by-dyln 9 similar [] · tripp-nyc 10 similar [] · pistola 11 similar [] · daze 12 cheaper []
indexable: true rendered: 12 reasons: []
title: 12 Brands Like Minga London for Statement Denim and Graphic Tops
```

**All 12 of 12 picks render, and the page is indexable.**

There are two caveats on the evidence:
- Five picks (Rolla's, BY.DYLN, Tripp NYC, Pistola, Daze) rest only on Dolls Kill co-stocking, and
  Dolls Kill's Minga stock is sold out.
- Diesel's price range comes from 39 of its 111 listed products.

## FAQ sources (Ahrefs)

These came from one call: `keywords-explorer-matching-terms`, "minga london", US, questions, sorted
by volume, limit 40.

| Used | Question (US vol) | source_query |
|---|---|---|
| Yes | Is Minga London legit? (250) | `is minga london legit` |
| Yes | How long does Minga London take to deliver? (10) | `how long does minga london take to deliver` |
| Yes | Where is Minga London based? (10) | `where is minga london based` |

Skipped because no stored fact answers them:
- Fast fashion, ethical, who owns it: no production or ownership facts.
- Good quality, good brand: these need opinions.
- Run small: no fit data.
- Unisex: the size guide doesn't say.
- Why so expensive: the US/UK price gap is stored, but not its cause.
- Where does it ship from: not stated.
- Restock: no data.

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | It's a directory page for people looking for Minga-style jeans in the US, which is Stylodex's purpose. |
| G2 | PASS | The original data is the US vs UK price gap, US shipping and duties, every pick's regular jeans range, waists and returns. None of this is in worthybornedit or discobrands. |
| G3 | PASS | It gives concrete numbers and trade-offs per pick: free-shipping bars, return windows and fees, inseams, petite and plus ranges. The basis is the stored facts. |
| G4 | PASS | There is no first-person experience. "We" isn't used for testing, and nothing claims wear or fit. |
| G5 | PASS | Author Ash, with a bio in `lib/authors.ts`. Not YMYL. |
| G6 | PASS | Every number traces to a brand field or a note (see the fact trace). The title count is the real count. |
| G7 | N/A | Not YMYL. |
| G8 | PASS | "12 Brands Like Minga London for Statement Denim and Graphic Tops". The page covers jeans, and the "for…" is Minga's own positioning. |
| G9 | PASS | It answers the "brands like" intent directly. Every pick opens on what it's best at, with a named product and price. |
| G10 | PASS | Prices, shipping, sizes and returns are on the page, and the FAQ covers delivery time. |
| G11 | PASS | The intro is 73 words and opens on the US price problem. Bodies are 110–136 words, with no filler. |
| G12 | PASS | Prices were read today, and the "Last checked" line covers dates. |
| G13 | PASS | The ranking pages are a 15-item list with one-line blurbs (worthybornedit) and a 4-brand profile. This page has 12 verified picks with real prices and US terms. |
| G14 | PASS | Affiliate links go through `/go/`. Nothing implies testing, and the criteria are on the method page. |
| G15 | PASS | The page reads as a whole and the picks point to each other. It isn't a near-duplicate of the Jaded London page: different anchor price story, and 7 different picks. |

**Estimated Page Quality:** High. The strongest reason is the verified US prices and terms per pick, including the anchor's own US/UK price gap.
**Estimated Needs Met:** Highly Meets. It would be better with Jaded London verified (3 sources), since many searchers expect it on the list.

## Voice check (`voice.md` "What we never write")

- No process narration: no "we checked", dates, "its About page says", or blocked-check notes.
- No spreadsheet sentences: counts appear only as reasons ("only a few jeans, sizes stop at XL").
- No verdicts on brands, and no invented experience.
- No hype words, semicolons, em dashes, or bold/italics in the copy.
- "It" is used for brands. Every pick points to another pick for the catch.

## AI-voice scan

These were fixed:
- §1 "rather than": the Rolla's comparison was cut, and one remains (LIONESS, with facts).
- §34 emphasis crutches: "worth knowing" and "the useful part for US shoppers" were removed.
- §5 anaphora: repeated "is the pick" and "The catch is" openers were varied (Pistola, Tripp NYC).

No §13 current-generation words were found in the copy. The Smell Test passes: every sentence names a brand, price or term.

## Fact trace

Most copy numbers come straight from the brand files. Product names and prices come from each store's feed, read today.

- **Minga, used in the intro and comparisons:**
  - Rift $130 vs £72: Minga notes (US and UK feeds).
  - $130–$210, waist 38, free shipping over $200, duties: Minga prices, size_range, notes, free_shipping_min_usd.
  - FAQs: About (East London, 2014, bathtub, tie-dye); shipping-rates table; dispatch within 1 business day (shipping help article).
- **The Kript:** $93/$114 Randy/Fiara (feed). Montreal, duties, $150/$8.99, 14 days, XXS–XL, low-rise denim with corset/graphic tops and sets (notes, meta).
- **The Ragged Priest:** £80 Loopy, £70 Patch Dalmatian (feed). $90 free, 28 days, waists 24–38 (brand file).
- **LIONESS:** Cobra $105, Horseshoe Cropped $85, camel/zebra (US feed). Australian, luxury trends, US warehouse free shipping, 30 days, $15 refund deduction, free exchanges, XXS–XXL (notes).
- **Manière De Voir:** $155–$200, Ambre $200, Abbie $155 (feed). Bridges high fashion and the high street, in-house design, SoHo, $250, US 0–12, 14 days (brand file).
- **Ksubi:** $190 Spray On / Hi N Wasted, $450 Barrel Opium High Rollers, $580 top (feed). Sydney 1999, North Sydney garage, $150 free, 30 days, full-price only (Our Story, policies).
- **Diesel:** $195 1969 D-Ebbey, $250 1978 D-Akemi, $650 D-Lie/D-Heel (listing). Free returns and exchanges in 15 days, free standard shipping when signed in (help pages, listing).
- **Motel Rocks:** $89–$114, Low Rise Parallel $89, Roomy/Parallel the biggest types (feed). L30/32/34, waist 36, London/Bali, $95, 30 days from dispatch (brand file).
- **Rolla's:** $129–$199, Gigi $129, Midtown Bootcut $169 (stored and rendered page). Long/34-inch inseam, W23–36, $120, 30 days, $6–$10 returns, sale final, tagline (notes).
- **BY.DYLN:** Cooper A$149, Archer A$290 (feed). Free international shipping over A$150, flat A$20, XS–XL, 14 days, return postage to Australia (notes).
- **Tripp NYC:** $79 High Waist Skinny, $174 X-Strap (feed). East Village, early 1980s, strap/zip/bondage pants, plus 10–28, $150, 7 days, refunds minus postage, sale final (notes).
- **Pistola:** $188 Cassie, $248 Wes (feed). LA, 2013, petite 23P–33P, straight/barrel/flare, $200, 15 days, $10 refund label, "everyday premium pieces" (notes).
- **Daze:** $88 Shy Girl Crop Flare, $128 Wanderer Palazzo (feed). US-only shipping, $9.32 FedEx 2Day, $140, W23–33, 15 days, $10 label (notes).
