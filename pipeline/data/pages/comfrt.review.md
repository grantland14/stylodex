# Review: brands like Comfrt (steps 2–5)

Produced 2026-10-29 end to end per `pipeline/run-page.md`. Author: Ash. Category C = `hoodies`
(Hoodies). Comfrt's meta leads with "Buttery soft hoodies", its footer says "We just make really
comfy slightly weighted hoodies!", and every outside source compares hoodies. Prices compare each
store's regular-price hoodies, pullover and zip, men's and women's.

## Enrichment summary

- **SERP** (Ahrefs `serp-overview`, US, top 10, 4 calls): **no rows for any keyword** (`brands like
  comfrt`, `stores like comfrt`, `comfrt alternatives`, `similar to comfrt`).
- **WebSearch** (11 queries, as on the Affliction and Tillys pages) found 4 editorial pages, all read
  with WebFetch. **Flagged in `human_check`**: none is from an Ahrefs top 10, and all four are thin.
  - hnlsharing "Best Comfrt Alternatives 2026" (updated Oct 2026; promotes a Comfrt discount):
    Quince, Alo, Uniqlo, American Giant.
  - Catch A Discount Comfrt review (Jul 2026, coupon blog, no author): Alo, Lululemon, Vuori, Nike,
    SKIMS, Cozy Earth.
  - Phia "Comfrt Hoodie: … Oversized Rivals" (Oct 2026, deals platform): SKIMS, Aritzia, Nike, Vuori.
  - StyleSense Comfrt Signature Hoodie review (Danica, Sep 2026): Champion, Gildan, Hanes; American
    Eagle, Hollister, Abercrombie named as similar.
  - **Dropped:** 1ABEL (a competitor's own page, like SilkCut on MeUndies), the second hnlsharing
    page (bot verification, not worked around), dupe.com (blanket hoodies only), knoji and
    StyleWhim and Fashion Magazine (403), Similarweb, TikTok, a Substack critique, The Guy's List
    (compares, recommends nothing), sponsored Who What Wear. Thingtesting's list renders empty.
    No discobrands page exists for Comfrt (sitemap read).
- **Co-stocking:** none found (no Nordstrom, Target, Dillard's or Scheels listing; Walmart's
  "Comfrt Hoodie" listings are another seller).
- **Pool:** Comfrt isn't in `public.brands`, so no pool rows.
- **Anchor:** comfrt.com is live and readable (Shopify). Stored: XS–3X, Miami FL (store meta), US,
  CA, GB, AU shipping, free US shipping at $99, 30-day returns for exchange or store credit only.
  - **No price.** All 45 hoodies carry a compare-at list price above the selling price ($35–$75
    selling vs $100–$170 list), so by the rule none is regular price. `human_check` #1.
- **Brand files** merged one at a time through `merge_brand.py` from my scratchpad
  `patches/comfrt/`: comfrt, alo-yoga, skims, nike, american-giant, champion, cozy-earth (new);
  quince and uniqlo (hoodies price row, notes). One `--overwrite materials` correction on my own
  american-giant entry (I had put "Cotton fleece" with no fabric statement behind it).
  `npm run lint:facts` passes.
- **Picks: 8.** Target 10–15, not padded.
  - **Unreadable:** Vuori (2 sources, listings render client-side), Aritzia, Gildan, Hanes (403),
    Lululemon (503).
  - **Fail on stored facts:** American Eagle (every hoodie seen marked down, no size range),
    Abercrombie (returns page renders client-side, so no returns_days).
  - **Not counted:** Fear of God Essentials and Cole Buxton (1ABEL only), TravisMathew, Amazon
    and other marketplace sellers. No secondhand or thrift shops came up.

## Gate result (Check step)

`npx tsx` scratch script from the repo root: `pipelinePages()` from `lib/pipeline.ts`,
`judgeBrandsLikePage`, now = 2026-10-29.

```
title: 8 Brands Like Comfrt for Oversized, Slightly Weighted Hoodies
indexable: false  reasons: [ 'anchor missing: price:hoodies' ]
rendered: nike, skims, alo-yoga, champion, quince, uniqlo, cozy-earth, american-giant (8 of 8)
```

**All 8 picks render. Not indexable: the anchor has no regular hoodie price.** Every
`price_relation` is null on purpose (no label without both prices). If Ash decides Comfrt's
permanent compare-at pricing counts as its regular price, record $35–$75 and set the labels:
Nike, Champion, Quince and Uniqlo would be `similar`, and the rest `pricier`.
`npm test`: 30 pass, 0 fail.

## FAQ sources (Ahrefs)

One call: `keywords-explorer-matching-terms`, keywords "comfrt", US, terms=questions, volume desc,
limit 40. No People Also Ask needed.

| Used | Question (US volume) | source_query |
|---|---|---|
| Yes | How long does Comfrt take to ship? (1,200) | `how long does comfrt take to ship` |
| Yes | Does Comfrt do returns? (200) | `does comfrt do returns` |
| Yes | Do Comfrt hoodies run big? (200) | `do comfrt hoodies run big` |
| Yes | Are all Comfrt hoodies weighted? (250) | `are all comfrt hoodies weighted` |

**Skipped:** verdicts ("is comfrt legit", "is comfrt a good brand", "worth it"); no stored fact
("who owns comfrt", "where are comfrt hoodies made", "how to wash", "when does comfrt restock",
"is comfrt sold in stores"); "do comfrt hoodies shrink" (would need wear experience).

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A "brands like Comfrt" list for US shoppers is the site's purpose. |
| G2 | PASS | Built from store reads no source page has: regular-price hoodie ranges, size runs, shipping thresholds, refund vs store-credit returns, named products with prices. |
| G3 | PASS | Specifics: Nike's Tall sizes, SKIMS to 4X, Reverse Weave vs Powerblend, Quince's 365 days, Champion's 48-state shipping, AG's $150 threshold. No fit or feel claims. |
| G4 | PASS | No worn, tried or tested claims. Fabric descriptions are the brands' own (Cozy Earth "says"). Ash's bio untouched. |
| G5 | PASS | `author: "Ash"`. Not YMYL. Comfrt's anxiety claims are not repeated. |
| G6 | PASS | Every number traces to a stored field (below). One own error caught and corrected (AG materials). |
| G7 | PASS (N/A) | Not YMYL. The copy makes no mental-health claim. |
| G8 | PASS | "8 Brands Like Comfrt for Oversized, Slightly Weighted Hoodies": real count, every pick sells hoodies. |
| G9 | PASS (partial) | Each body sets fit, fabric, sizes and returns against Comfrt (3X top size, dropped shoulder, store-credit returns). Prices compare with Comfrt's selling prices only in words, since no anchor price is stored as regular. |
| G10 | PASS (partial) | Price, sizes, returns and shipping per pick, a decision guide, and Comfrt's own terms in the FAQ. Vuori, a commonly named alternative, is missing. |
| G11 | PASS | Intro 74 words: the reader's moment, why they look elsewhere, what the list gives, how it's ordered. No process. |
| G12 | PASS | All prices from 2026-10-29 (`checked_at`). No dates in the copy. |
| G13 | **FAIL** | Honest estimate Medium (below). The evidence is four thin pages found outside Ahrefs, and the page is short of 10. |
| G14 | PASS | Affiliate links via /go/ with the disclosure (template). No implied testing. |
| G15 | PASS | 0 em dashes, 0 semicolons, no Markdown. Bodies 111–132 words, longest sentence 30 words. |

**Counts:** PASS 14 · FAIL 1 (G13) · BLOCKED 0.

**Estimated Page Quality:** Medium. The store data for all eight picks is real, dated and
specific, and the copy compares picks with each other on size, fabric and returns. But the
evidence is weak (affiliate, coupon and deals blogs), the anchor price question is open, and
Vuori and Aritzia are missing.

**Estimated Needs Met (dominant intent):** Moderately Meets. Biggest lift: settle the Comfrt
price rule (unlocks labels and indexing). Then verify Vuori, and look for stronger editorial lists.

## Voice check (voice.md "What we never write")

- **Process narration:** none. No "we checked", dates, sources or page names. The intro says how
  the list is ordered, nothing about method.
- **Spreadsheet sentences:** none. Ratios carry a reason ("about a third of what Alo charges",
  "which two pullovers just clear", "more than double what any Comfrt hoodie sells for").
- **Verdicts:** none. Each catch names one attribute (midweight fabric, 2XL top size, 48-state
  shipping, two styles).
- **Invented experience / hype:** none. "Plush, cloud-like" kept out of our voice except "plush
  fleece" as the brand's own description.
- **Moves present:** answer-first opener with a named product and price in every body; why each
  fact matters (Talls, 4X, refunds vs Comfrt's store credit, $150 threshold met by one hoodie);
  one useful thing per brand (Reverse Weave vs Powerblend, Alo's sale section, Uniqlo's men's
  sizing, Nike's Tech Fleece line); a pointer to another pick in every body; use-case "Best for"
  lines; How to choose by budget, size and returns.

## AI-voice scan

Found and fixed: "Here's what to know about…" (removed), four "rather than" contrasts (cut to
none), "not just store credit" (rewritten), "from X to Y" in the intro (rewritten), "The catch"
three times (varied). No rule-of-three lists in the bodies.

## Fact trace

| Copy | Field |
|---|---|
| Comfrt: exchange or store credit, no refund; 30 days; free domestic return shipping | comfrt.returns_days, notes (refund policy) |
| Comfrt: Oversized and Mega fits, dropped shoulder, 3X top size | comfrt.notes (fit guide), size_range |
| Comfrt heavyweight fleece, slightly weighted, Weighted Hoodie 5 lbs, Halo Lightweight | comfrt.materials, notes |
| "what Comfrt actually charges", "more than double what any Comfrt hoodie sells for" | comfrt.notes ($35–$75 selling) vs AG $168 |
| Ships: 11am PT, 24 hours, 3–6 days, Express 2 days $15.95 | comfrt.notes (shipping policy) |
| Nike Solo Fleece $75, loose fit, cotton-poly, XS–4XL + Tall, Tech Fleece $145, 60 days free for members | nike.prices.hoodies, size_range, has_tall, returns_days, notes |
| SKIMS Cotton Fleece Hoodie $98, 70% cotton, embossed sleeve logo, Cable Zip $128, XXS–4X, refund or credit 30 days | skims.prices, notes, size_range |
| Alo Marl Sweater Rewind $168, Pilates to lunch, $398 cashmere, sale share, free US shipping and returns, 2XL | alo-yoga.prices, notes, size_range |
| Champion Reverse Weave $70, cross-grain, loose, dropped shoulders, Powerblend $37.50, 48 states, buyer pays returns | champion.prices, notes |
| Quince cashmere $119.90 (vs Alo $348), Flowknit $44.90, factory-direct, 365 days, free shipping, XS–XL + 1X–3X | quince.prices.hoodies, production_model, returns_days, size_range |
| Uniqlo $49.90 / $59.90, men's XXS–3XL, 30 days, free from $99 | uniqlo.prices.hoodies, notes, returns_days, free_shipping_min_usd |
| Cozy Earth Brushed Bamboo $98, bamboo viscose, no pilling claim, XXXL, StretchTech $138, bedding, 30-day refunds | cozy-earth.prices, notes, materials |
| AG Classic Full Zip $168, S–XXL + 3X black, Thermal $98 XS–XL, free over $150, 30 days, made in USA | american-giant.prices, notes, production_model |
