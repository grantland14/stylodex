# Review: brands like Stay Cold Apparel (steps 2–5)

Produced 2026-10-29 end to end per `pipeline/run-page.md`. Author: Ash. Category C = `graphic-tees`:
tees are Stay Cold's largest line (157 T-Shirts against 112 hoodies on the US storefront), every one
is a printed artwork, and it's the category the Affliction page already uses for Sullen, BlackCraft
Cult and Killstar (see `category.why`).

## Enrichment summary

- **SERP** (Ahrefs `serp-overview`, US, 4 calls): only `brands like stay cold apparel` returned rows;
  the other three returned none. None of its 10 results is a readable page recommending alternatives:
  sitelike.org (scraped), Reddit r/Deathcore (refused, not worked around, human check), the anchor's
  own site and Instagram, StreetwearTalk (DNS failure, not read), Complex and Racked (general
  roundups), Pinterest, Strange Ways (read, no alternatives), a coupon page.
- **Web search** found one page that recommends alternatives to Stay Cold: ythral.com's guide,
  published by a competing brand that includes itself. It names Sullen, Black Market Art Company,
  Disturbia, BlackCraft Cult and Killstar. YTHRAL's self-entry is not counted. General roundups
  (Vulcinity, InkedMag, The Metalverse) and a gummysearch Reddit-comment aggregator were read and
  don't count. Sullen's own "vs Stay Cold" blog post is a candidate's own site, not counted.
- **Disco:** no Stay Cold page (sitemap read, `/brands/stay-cold-apparel` 404).
- **Co-stocking:** Impericon stocks Stay Cold. Its "Similar brands" block (Carhartt WIP, Fred
  Perry, Iriedaily, Dickies, Dr. Martens) is the streetwear department's set (the Carhartt WIP page
  shows the same), so it isn't a recommendation of alternatives to Stay Cold. Not used; human check.
- **Pool:** Stay Cold has no rows in `public.brand_relationships` (read-only query).
- **Verified** through `merge_brand.py`, one patch at a time: `stay-cold-apparel` (new),
  `black-market-art-company` (new), `disturbia` (new `graphic-tees` entry; `tops` untouched; notes),
  `sullen` (notes and source only, stored price unchanged after re-reading the tees feed). Killstar
  and BlackCraft Cult used as stored (graphic-tees, checked 2026-10-29).
- **Anchor price:** US storefront `/en-us` (Shopify currency USD, country US), 152 regular-price
  short-sleeve tees $49–$91. The default store is EUR and lower (jersey €99.90 vs $114), so the
  US prices are used. `cart.js` is disallowed by robots.txt and was not read.
- **Picks: 5 of 5 sourced candidates.** Below the 6-pick floor. Not padded.
- `npm run lint:facts`: my four files pass; the run fails on three other agents' files
  (2020ave, dicks-sporting-goods, shop-style-shark), not touched.

## Gate result (Check step)

`npx tsx` scratch script: `pipelinePages()` from `lib/pipeline.ts`, `judgeBrandsLikePage`,
now = 2026-10-29.

```
stay-cold-apparel graphic-tees indexable: false picks: 5 / 5
reasons: [ 'only 5 publishable picks (need 6)' ]
title: 5 Brands Like Stay Cold Apparel for Tattoo Streetwear
```

Every pick passes `pickProblems` (killstar 1 similar, disturbia 2 similar, sullen 3 cheaper,
blackcraft-cult 4 cheaper, black-market-art-company 5 cheaper). The anchor has no missing facts
(no image yet, which is optional). Pages sharing a changed brand re-run: affliction (10/10,
indexable), unif (14/14, indexable), dressed-in-lala (13/13, indexable). `npm test`: 30 pass.

**Not indexable: 5 picks.** The Reddit thread in `human_check` is the likeliest way to a sixth.

## FAQ sources (Ahrefs)

One call: `keywords-explorer-matching-terms`, keywords "stay cold apparel", US, terms=questions.

| Used | Question (US volume) | source_query |
|---|---|---|
| Yes | Is Stay Cold Apparel legit? (30) | `is stay cold apparel legit` |
| Yes | Where is Stay Cold Apparel based? (10) | `where is stay cold apparel based` |
| No | Does Stay Cold Apparel use AI? (0) | no stored fact answers it |

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A "brands like Stay Cold Apparel" list for US shoppers is the site's purpose. |
| G2 | PASS | Nothing paraphrased from the Ythral guide: its picks are the evidence, the substance is our store reads (US-dollar tee ranges, size runs, free-shipping bars, return terms, named products). |
| G3 | PASS | Not on the SERP: Stay Cold's US prices by tee body ($49 to $91, 200 vs 250GSM), Sullen's Standard/Premium/1-Ton naming, Disturbia's duties-included US store, BMAC's artist hang tag and free US shipping. |
| G4 | PASS | No worn/tried/tested claims, no process narration. Ash's bio untouched. |
| G5 | PASS | `author: "Ash"`. Not YMYL. |
| G6 | PASS | Every number traces to a stored field (table below). Anchor verified. |
| G7 | PASS (N/A) | Not YMYL. |
| G8 | PASS | "5 Brands Like Stay Cold Apparel for Tattoo Streetwear": real count, every pick sells graphic tees with tattoo, horror or occult art. |
| G9 | PASS | Each body places price and sizes against Stay Cold's $49–$91 and XS–3XL; labels match stored prices. |
| G10 | PASS | Price, sizes, US shipping and returns per pick, a decision guide, and the anchor's own terms in the FAQ. Fit and print quality can't be answered from stored facts. |
| G11 | PASS | Intro 70 words: the reader's reason to look elsewhere (shipping from Germany, price), then what the list gives and how it's sorted. |
| G12 | PASS | All prices from 2026-10-29 (`checked_at`); no dates in copy. |
| G13 | **FAIL** | Honest estimate is Medium (below). Copy can't fix it: five picks, all resting on one outside source published by a competing brand. |
| G14 | PASS | Affiliate links via /go/ with disclosure (template). No implied testing; the Ythral guide's self-promotion isn't carried into the copy. |
| G15 | PASS | 0 em dashes, 0 semicolons, no Markdown. Bodies end differently (a pointer to another pick, a returns rule, a size limit). Sibling-overlap sentences rewritten (below). |

**Counts:** PASS 14 · FAIL 1 (G13) · BLOCKED 0. Separately, the gate holds the page at noindex
(5 picks, floor 6).

## Voice check (`pipeline/voice.md` "What we never write")

None present: no process narration, no dates, no "we checked", no counts as the point of a sentence
(the "$14 under Stay Cold's cheapest" line gives why), no verdicts, no invented experience, no hype.
No semicolons, em dashes or bold. Contractions throughout. Brands are "it". One colloquial line at
most ("think regular rather than oversized").

## AI-voice scan (`ai-voice-avoid.md`)

- Found and fixed: "Here's the thing:" (Part 4 §19 throat-clearing opener) in the Disturbia body.
- Checked: no rule-of-three lists, no "elevate/must-have/iconic", no sentence over 30 words, no
  three same-length sentences in a row, paragraph endings varied.
- Sibling overlap: 6-word shingles compared with every page's copy. Rewrote the sentences that
  matched the Affliction page (Sullen's tattoo-artist line, Premium price line, $99 shipping line;
  Killstar's EU-hub line), plus a "UK gothic label" phrase shared with UNIF and an "XS to 4XL" phrase
  shared with Dressed in Lala. Remaining overlaps are stock fragments ("how to choose", "start with").

## Fact trace

| Claim in copy | Field / source |
|---|---|
| Stay Cold ships from Germany, US 10–14 working days | stay-cold-apparel notes (pages/faq) |
| Stay Cold tees $49 to $91, acid-washed heavy past $90, 250GSM Heavy Oversized $69, XS–3XL | prices.graphic-tees + note; size_range |
| Stay Cold made with tattoo artists ("collabs") | notes (tee descriptions, collab collections) |
| American picks under $49 | Sullen max $48.95, BlackCraft $40, BMAC $33.95; hq_country US |
| Killstar $50–$60, The Worst In Me $55, Boxy $60 with sleeve art, 100% cotton jersey, 4XL, EU hub 7–14 days, 14 days to register | killstar prices.graphic-tees note, materials, notes |
| Killstar "occult couture" | killstar known_for / notes ("Total Trash Occult Couture") |
| Disturbia Witcher tees $57 / $54, Yennefer hand-drawn by in-house designer, wolf medallion, US 2–16, duties included, $175 free delivery, most tees marked down | disturbia prices.graphic-tees note; notes (2026-10-29 runs) |
| Sullen artists, $25–$48.95, 6 Swords $27.95, Taste 1-Ton $38.95, Premium ~$4.50 more ($32.50), 5X, SoCal, $99, 30 days | sullen prices, notes (incl. this run's), size_range, free_shipping_min_usd, returns_days |
| BlackCraft nearly all $35, max $40, Lilith and Love Me Like My Demons Do $35, ring-spun cotton, unisex fit, S–3XL, $125, sale final | blackcraft-cult prices note, materials, notes; product-images.json |
| BMAC $25.95–$33.95, Horror House $27.95 by Grant Us Night, licensed artwork, hang tag, styles, made and printed in USA, free US shipping, free size reship, XXL top | black-market-art-company prices, notes, production_model, free_shipping_min_usd, size_range |
| FAQ: Berlin, MASCANI GmbH in Berlin's commercial register, 30-day returns, buyer pays return shipping | stay-cold-apparel hq_country, parent_company, notes (impressum, return-policy) |

## Estimated Page Quality and Needs Met

- **Page Quality: Medium.** Accurate, specific and useful, but thin for the query: five picks where
  page-one lists run longer, and one outside source behind all of them.
- **Needs Met: Moderately Meets.** A Stay Cold shopper gets real US prices and terms for five
  tattoo and occult tee brands, but not the fuller list the query implies.
