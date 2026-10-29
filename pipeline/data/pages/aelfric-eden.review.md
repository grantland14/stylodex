# Review: brands like Aelfric Eden (steps 2–5)

Produced 2026-10-29 end to end per `pipeline/run-page.md`. Author: Ash. Category C = `hoodies`
(Hoodies): 35 of the first 60 products in Aelfric Eden's Best Sellers feed are hoodies and its nav
leads with HOODIES and BOXY (see `category.why`). Copy written to `pipeline/voice.md`, with the
2026-10-29 rule updates (disco is evidence but never named or linked in copy, no thrift/secondhand
picks, PAA allowed for FAQ).

## Enrichment summary

- **SERP** (Ahrefs `serp-overview`, US, 4 calls): `brands like aelfric eden` and `stores like aelfric
  eden` returned results; `aelfric eden alternatives` and `similar to aelfric eden` returned none.
  Kept one page: disco's "brands like Aelfric Eden" (18 brands, unsigned directory, evidence only).
  Reddit (4 threads, refused, not worked around), Pinterest, Instagram, TikTok not read; apartstyle
  dropped; Karmaloop's brand index read (no Aelfric Eden, no alternatives); Similarweb, Amazon,
  Lemon8 and a parcel-forwarder blog dropped.
- **Co-stocking:** Nordstrom men's Sweatshirts & Hoodies brand filter lists AELFRIC EDEN; four
  streetwear labels in the same filter added as `co_stocked` candidates (Obey, Mnml, STAPLE, Cross
  Colours), each confirmed by exact filter text.
- **Pool:** Aelfric Eden has no `public.brand_relationships` rows (not in the Apart Style pool).
- **Verified via `merge_brand.py`** (patches in the scratchpad `aelfric-eden/patches/`): new files
  aelfric-eden, teddy-fresh, lazy-oaf, hypland, ripndip, by-parra, dbtk, rebel8, the-hundreds,
  primitive, perks-and-mini, staple, cross-colours; hoodies prices added to the shared obey and mnml
  files (no other fields overwritten). `npm run lint:facts`: ok.
- **Picks: 14 of 22 candidates with a source.** Rejected (see `rejected`): Cactus Plant Flea Market
  (no hoodies in its 9-product store), Lucy & Yak (no hoodies), ASOS (503/HTTP2 error), BoohooMan
  (no readable prices), H&M, Bershka, Urban Outfitters (403 in their shared files, not re-tried),
  Pull & Bear (403), Bait (unannotated extra link, multi-brand shop).
- **Price rule:** regular = no compare-at above price and no markdown tag; `saleonsale` and
  `Apparel_Sale_` treated as markdowns (drops Primitive's $30 Collegiate hood). Hoodies only: no
  crewnecks, hooded jackets, vests, knit hats/hoods, kids, sets, or RIPNDIP's "Drinkwear" can coolers.

## Gate result (Check step)

`npx tsx` scratch script: `pipelinePages()` from `lib/pipeline.ts`, `judgeBrandsLikePage`,
now = 2026-10-29.

```
title: 14 Brands Like Aelfric Eden for Boxy Hoodies and Baggy Streetwear
indexable: true reasons: []
anchor missing: []
rendered: 14 / 14
1 hypland [] · 2 obey [] · 3 the-hundreds [] · 4 teddy-fresh [] · 5 primitive [] · 6 ripndip []
7 lazy-oaf [] · 8 cross-colours [] · 9 mnml [] · 10 dbtk [] · 11 staple [] · 12 rebel8 []
13 perks-and-mini [] · 14 by-parra []
```

**Gate: indexable, 14/14 picks render.** Price labels: 11 similar, 3 pricier (REBEL8, P.A.M.,
by Parra). `npm test`: 30 pass, 0 fail.

## FAQ sources

One Ahrefs call: `keywords-explorer-matching-terms`, keywords "aelfric eden", US, terms=questions,
volume desc, limit 30. Plus Google "People also ask" from the `brands like aelfric eden` SERP.

| Used | Question (US volume) | source |
|---|---|---|
| Yes | Where is Aelfric Eden based? (150) | `where is aelfric eden based` |
| Yes | Does Aelfric Eden have a store? (100) | `does aelfric eden have a store` |
| Yes | How long does Aelfric Eden take to ship? (100) | `how long does aelfric eden take to ship` |
| Yes | Is Aelfric Eden a Korean brand? | people_also_ask |

Skipped: is it legit / good / good quality / fast fashion / expensive (opinion, no stored facts),
what does the name mean, does it run big or small (no fit data), who owns it (not stored).

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A "brands like Aelfric Eden" list for US shoppers is the site's purpose. |
| G2 | PASS | Nothing paraphrased from the source list: its brands are the evidence, the substance is our store reads (regular-price hoodie ranges, size runs, free-shipping bars, return terms, named products with prices, FX conversions). |
| G3 | PASS | Specifics a SERP reader can't get in one place: Hypland's 10-day refund vs 30-day credit, The Hundreds exchange-only, RIPNDIP store-credit returns, REBEL8 all-final, Primitive's ship-date return clock, Lazy Oaf duties at checkout and $19 US returns, P.A.M. DHL tariff bills, Cross Colours' FREESHIP200 code. No fit/feel claims. |
| G4 | PASS | No worn/tried/tested claims, no process narration. Ash's bio untouched. |
| G5 | PASS | `author: "Ash"`. Not YMYL. |
| G6 | PASS | Every number traces to a stored field (table below). Anchor verified. |
| G7 | PASS (N/A) | Not YMYL. |
| G8 | PASS | Real count; every pick sells hoodies; known_for from the anchor's own nav (HOODIES, BOXY, BAGGY BOTTOMS). |
| G9 | PASS | Each body places price and sizes against Aelfric Eden's $59.95–$129.95 (most $69.95–$89.95) and XS–XL. |
| G10 | PASS | Price, sizes, US shipping and returns per pick, a decision guide, and the anchor's own shipping and store facts in the FAQ. |
| G11 | PASS | Intro 77 words: the reader's reason (XL cap, paid returns), what the list gives, how it's sorted. |
| G12 | PASS | All prices from 2026-10-29; no dates in copy. |
| G13 | PASS (marginal) | Honest estimate Medium-to-High (below): 14 verified picks beat the 17- and 18-entry lists on specificity, but every pick rests on one outside source. |
| G14 | PASS | Affiliate links via /go/ with disclosure (template). No implied testing. Disco not named or linked. |
| G15 | PASS | 0 em dashes, 0 semicolons, no Markdown, no sentence over 27 words. Bodies end differently. No near-duplicate sibling. |

**Counts:** PASS 15 · FAIL 0 · BLOCKED 0 (G13 marginal).

**Estimated Page Quality:** Medium, edging High. Strongest reason: every pick has dated store prices,
sizes and return terms that the ranking lists lack, and picks are compared with each other. Weakness:
all 14 are single-source (10 from one directory, 4 from Nordstrom co-stocking), and Teddy Fresh has
only two full-price hoodies.

**Estimated Needs Met (dominant intent):** Moderately to Highly Meets. Biggest lift: read the
r/findfashion and r/altfashionadvice threads (`human_check`) for independent evidence.

## Voice check (voice.md "What we never write")

- Process narration: none (no "we checked", dates, "its About page says"). Disco never mentioned.
- Spreadsheet sentences: none; counts appear only as reasons ("two past Aelfric Eden's XL").
- Verdicts on brands: none. Catches are about specific attributes (returns, duties, sizes, range).
- Invented experience: none. Hype words: none.
- Moves present: answer-first opener per pick with a named product and price; why each fact
  matters (pounds/pesos/AUD → convert; ship-date return clock → try it on the day; exchange-only →
  be sure of your size); one thing taught per brand (Hypland's biggest series, Primitive's Boxy
  line, Lord Nermal, P.A.M. stocks other labels); pick-to-pick pointers in every body; use-case
  Best for lines; How to choose by price, cut, budget, size and returns.

## AI-voice scan

| Pattern | Where found | Fix |
|---|---|---|
| §34 "matters" | REBEL8 "artwork matters more than the price"; DBTK "If easy returns matter" | "you'll pay more for the artwork"; "If you want easy returns" |
| §1 binary contrast / "rather than" | Primitive "ship date rather than delivery"; Cross Colours "top-up rather than a main shop"; by Parra "a one-hoodie purchase, not a stock-up" | cut the contrast in each |
| §40 "from X to Y" | intro "from anime collabs to skate graphics" | "with anime collabs and skate graphics among them" (price ranges kept, per voice.md) |
| §8 sentence length | Hypland 32, Primitive 32, DBTK 31, Lazy Oaf 30 words | split |
| Overclaim | Hypland "Gundam and Street Fighter have the most designs" (Yu-Gi-Oh! has 10, Gundam 5); Cross Colours "$79.95 for most" (38 of 92); P.A.M. "stop at XL" (MAAP collab to XXL) | corrected to the stored counts |
| Smell Test | each body is built on that brand's own products and terms; none would fit another entry unchanged | — |

## Fact trace

Brand files `data/brands/{slug}.json` (price `note`, `notes`); page file `data/pages/aelfric-eden.json`.
FX: ECB 2026-10-28 (£1 = $1.32876, ₱1 = $0.015627, A$1 = $0.70329).

| Claim | Source |
|---|---|
| Aelfric Eden hoodies boxy, star/cartoon, $70–$90 usual, $79.95 common, XS–XL | aelfric-eden prices.hoodies note (92 items, 38 at $79.95), size_range, notes[1] (star hoodies, cute animals) |
| Aelfric Eden returns paid by customer, 30 days, free shipping $50 | aelfric-eden notes[4–5], returns_days, free_shipping_min_usd |
| Stars and cute animals, dinosaurs, Vintage Era | aelfric-eden notes[1] (Our Story timeline) |
| Hypland $80–$100, Gundam Strike $90, Nezuko $80, Yu-Gi-Oh! most then Demon Slayer, S–3XL, 10-day refund / 30-day credit | hypland prices note, notes[1], series note |
| OBEY Shepard Fairey 2001, Post Zip $79, Lowercase Pigment $125, Diffuse Hostility $90, S–XXL, $100, 30 days, $8 label | obey prices.hoodies note, notes (about, FAQ), aelfric-eden-run note |
| The Hundreds $80 FGW, Usugrow $100, Rams $130, 2003, community-based, 90s workwear and Californian subcultures, $100, 10-day exchange only, discounted final | the-hundreds prices note, notes[0–2] |
| Teddy Fresh Colorblock $80, Come One Come All $88, XS–3XL, Southern California warehouse, $100, 14 days | teddy-fresh prices note, notes[1–2] |
| Primitive Boxy line, Mosaic $100, Scrape $135, Dirty P $77.99, LA, $120, XXL/XXXL/4X, 30 days from ship date | primitive prices note, notes[1–2] |
| RIPNDIP Lord Nermal, Great Wave Of Nerm $80, Castanza $80–$90 by wash, $75–$140, Fairfax LA store, $125, 15 days gift card/credit | ripndip prices note, notes[0–3] |
| Lazy Oaf London, Gemma Shiel 2001, Happy Sad Boxy £85 ≈ $113, Veg Patch £80 ≈ $106, $104–$120, duties at checkout, XS–XXXL, $200, US returns from $19 | lazy-oaf prices note, notes[0–2], FX |
| Cross Colours since 1989, original 90s hip-hop brand, $78 Atelier Starmaker, 3X, 30 days full credit or exchange, $200 + FREESHIP200 | cross-colours prices note, notes[0–2] |
| mnml $28–$118, most $68, Full Zip $68, Stiff Lounge Zip $28, Camo Panelled $62, downtown LA studio, XS–XXXL, $50, 30 days | mnml prices.hoodies note, notes (About), aelfric-eden-run note |
| DBTK Don't Blame the Kids, Manila, Emil and Vince Javier, Diagonal ₱3,300 ≈ $52, Shenron ₱4,500 ≈ $70, Dragon Ball, S–XX-Large, 7-day exchanges mostly defects, customer pays shipping | dbtk prices note, notes[0–2], FX |
| STAPLE Jeff Staple, pigeon logo, Pigeon Logo $98, Denim Pigeon Zip $200, XS–3XL most, $150 contiguous US, 30-day refunds only | staple prices note, notes[0–2] |
| REBEL8 $158 all, 8 Logo / Skull Rose, SF 2003, Josh D, Mike Giant, 90s SF subcultures/workwear, XXL (3XL few), all sales final | rebel8 prices note, notes[0–1] |
| P.A.M. Perks and Mini, MAAP x P.A.M. A$215 ≈ $151, PAM Logo A$396 ≈ $279, Australian brand and creative studio, Melbourne and Sydney stores, two collections a year, sells other labels, DDU, DHL tariffs, XL/L sizes | perks-and-mini prices note, notes[0–1], FX |
| by Parra Amsterdam artist, Crow logo $165, A Cross to bear $265, US store USD, US and Canada, XS–XXL, 14 days | by-parra prices note, notes[0–2] |
| FAQ: California 2014, Asian American founder, Asian + Western style, Shenzhen address, pop-ups (US, Suwon, Seoul), 1–3 day processing, made to order, 45 business days refund | aelfric-eden notes[1–2], notes[4], notes[6]; og description |

## Open items (human_check)

Anchor hq_country (US from story vs Shenzhen store address); Reddit threads and the Pinterest pin
unread; Teddy Fresh only 2 full-price hoodies; P.A.M. is also a multi-brand shop (pick product
images by vendor PAM); Lazy Oaf `saleoos` tag and all-products image feed; DBTK US delivery terms;
returns_days meanings for exchange-only and credit-only stores; Cross Colours free shipping needs a code.
