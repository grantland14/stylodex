# Review: brands like Damson Madder (steps 2–5)

Run 2026-10-29 per `pipeline/run-page.md`. Author: Ash. Category C = `coats-jackets` (Coats & Jackets):
Damson Madder sells many types in similar numbers, and outerwear is the largest type in its own
Bestsellers (16 of 51) and Trending (14 of 44) collections (see `category.why`). Trousers are a close
second, so C is in `human_check`.

## Incident during this run (needs the coordinator's eye)

I wrote my brand patches into `{scratchpad}/patches/`, which other page agents also use, and then
merged every `*.json` in that folder. That re-merged about 100 other agents' patches into their brand
files at 11:43 UTC. What I did about it:
- Deleted the files it created that aren't brands: `af-fix`, `cider-fix`, `ks2`, `muji-fix`, `t-fix`,
  `tentree-fix`, and `revolve-notes` (someone had already removed that one, and my run created it again).
- Checked the two `-fix` patches that carry prices (`cider-fix`, `tentree-fix`). The brand files
  already held the fixed prices, and I merged both fixes again to make sure. The other fix patches only
  touch scalar fields, and the merge never overwrites a scalar that already has a value.
- Checked birth times: apart from my own 12 picks plus `damson-madder`, the run created no brand file.
  So every other patch had already been merged once by its owner. Re-merging is idempotent: prices are
  replaced by the same entry, scalars only fill empty fields, and sources are only added.
- The remaining risk: if an agent had edited a patch's prices and hadn't merged it yet, that edit is
  now merged early. Mtimes changed on about 100 brand files. My 13 patch files have been moved to
  `{scratchpad}/dm-patches/`. One of them, `colorful-standard.json`, may have overwritten another
  agent's patch of the same name. That agent's data was already in the brand file (its tees price and
  notes are intact).
- `npm test` passes (27/27) and `npm run lint:facts` passes.

## Enrichment

- **SERP (Ahrefs, 4 calls):** only `brands like damson madder` has US data. The other three keywords
  returned no positions. The editorial pages kept were ldnfashion (7 brands) and maiazine (2 named as
  similar). danielaaraya, poplinstyle and Who What Wear were read and don't frame any brand as an
  alternative. Reddit, Instagram and TikTok were not read. elle.com refused WebFetch.
  discobrands (21 brands) came from a WebSearch for the same keyword, not from the Ahrefs top 10.
- **Pool:** Apart Style's `brand_relationships` for Damson Madder holds 14 men's tailoring and leather
  brands. None has an outside source, so none is used.
- **Co-stocking:** Lisa Says Gah stocks 5 Damson Madder pieces, none of them outerwear. Anthropologie
  returned 403. Not used.
- **Anchor:** verified. US market (`/en-us`, cart currency USD): 46 regular-price coats and jackets at
  $170–$445, sizes US 2–16 (UK 6–20, with UK labels). US shipping is $12, free over $250. All US duties
  are covered, exchanges are free, a refund label costs $20, and returns run 28 days. **US prices are
  set well above the UK ones:** the UK store prices the same coats at £80–£215. For example, the Matilda
  raincoat is $280 in the US against £135 (about $179) in the UK, and the Jerry wool coat is $445
  against £215.
- **Candidates verified:** 27 (the anchor plus 26). 12 picks, 15 rejected with reasons in `rejected`.
  The 403s (Omnes, Sézane, Reformation, French Connection) were not worked around.

## Gate result (Check step)

`npx tsx` scratch script: `pipelinePages()` from `lib/pipeline.ts` → `judgeBrandsLikePage`, now = 2026-10-29.

```
anchor missing: [ 'imageUrl' ]
sister-jane 1 similar [] · ganni 2 similar [] · rixo 3 similar [] · albaray 4 similar []
never-fully-dressed 5 similar [] · house-of-sunny 6 similar [] · lisa-says-gah 7 similar []
rowing-blazers 8 similar [] · nobodys-child 9 similar [] · colorful-standard 10 cheaper []
aje 11 similar [] · paloma-wool 12 similar []
indexable: false rendered: 12 reasons: [ 'anchor missing: imageUrl' ]
title: 12 Brands Like Damson Madder for Patterned, Responsibly Made Womenswear
```

**12/12 picks render.** The page is not indexable yet for one reason only: the anchor has no
`/img/brands/damson-madder.webp`. Running `pipeline/images.mjs` (coordinator) should fix that, since
the og:image is on its homepage.

## FAQ sources (Ahrefs)

One call: `keywords-explorer-matching-terms`, "damson madder", US, questions, volume desc, limit 40.

| Used | Question (US vol) | source_query |
|---|---|---|
| Yes | Where is Damson Madder from? (40) | `where is damson madder from` |
| Yes | Does Damson Madder ship to the US? (0) | `does damson madder ship to us` |
| Yes | Is Damson Madder fast fashion? (30) | `is damson madder fast fashion` |

Skipped because no stored fact answers them: run small / how does it fit (no fit data), have a store,
good brand or good quality (these need an opinion), restock and sales, why so expensive (stored facts
show the US/UK price gap but not its cause), who owns it.

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A US-shopper list of Damson Madder alternatives is the site's purpose. |
| G2 | PASS | The original data is our own store reads: US-market prices, the UK/US price gap, duties, shipping bars, return fees, size ranges and petite share. No competitor wording is used. |
| G3 | PASS | Specific trade-offs that no ranking page gives: Damson Madder's US price premium, Sister Jane's uncovered duties, RIXO's flat $25, Aje's $50 return fee, Nobody's Child's petite lengths. There are no hands-on claims. |
| G4 | PASS | No wear, try or test claims, and no "we checked". |
| G5 | PASS | `author: "Ash"`. Not YMYL. |
| G6 | PASS | Every number traces to a stored field (table below). GANNI's range covers its first page only, and the copy says "about the cheapest". |
| G7 | PASS (N/A) | Not YMYL. |
| G8 | PASS | The title uses the real count (12). Every pick sells coats or jackets that ship to the US. |
| G9 | PASS | Each pick opens with the answer, and every body places it against Damson Madder's price, sizes or US terms. |
| G10 | PASS | Price, sizes, shipping, duties and returns for each pick, plus the anchor's own US terms (intro and FAQ). |
| G11 | PASS | Intro is 73 words and opens on the US price jump. |
| G12 | PASS | Prices are from 2026-10-29 (`checked_at`). There are no dates in the copy. |
| G13 | PASS (borderline) | Estimate: High at the low end (below). |
| G14 | PASS | Links go through /go/. No client at #1. Lisa Says Gah's stocking of Damson Madder is stated plainly. |
| G15 | PASS | 0 semicolons, 0 em or en dashes in the copy, no Markdown. Every sentence is 28 words or fewer. Bodies end differently. |

**Estimated Page Quality:** High at the low end. The evidence is three readable editorial lists, and
three picks have 2 sources each. The US data is specific and mostly complete. What holds it back: 9 of
12 picks rest on one source, GANNI's range is partial, and there are no product photos yet.
**Estimated Needs Met:** Highly Meets for "brands like Damson Madder" from a US shopper. The page leads
with the US price gap, which is the real pain point.

## Voice check (`pipeline/voice.md` "What we never write")

None of these is present: process narration, dates, sources named in the copy, spreadsheet sentences,
verdicts, invented experience or hype. Counts appear only with a reason ("about a third of its coats …
if jackets usually swamp you"). Each body has one teaching point: DREAM is Sister Jane's dressier line,
GANNI exchanges in store, Albaray's checkout includes duties, Paloma Wool numbers its pieces, Nobody's
Child offers petite lengths, and Colorful Standard sells one cut. Picks are compared with each other:
SJ → NFD, GANNI → Nobody's Child, RIXO → Damson Madder's Pixie bomber, Albaray → House of Sunny,
LSG → Nobody's Child, RB → LSG, CS → Sister Jane, Aje → RIXO.

## AI-voice scan

| Pattern | Found | Fix |
|---|---|---|
| "just" (filler) | Colorful Standard "just that one cut" | "only that one cut" |
| Sentences over 30 words | GANNI (31), Paloma Wool (32) | split |
| Unsupported adjective | Aje "looser cuts", Paloma "art-school", NFD "London-area" | cut |
| Unsupported comparison | RB "lowest bar here" (Aje and NFD ship free on any order) | cut |
| Rule of three | closing "Albaray, House of Sunny and Nobody's Child" | two plus a separate clause |
| Smell test | Each body is built on that brand's own products, prices and terms | — |

## Fact trace

Brand files: `data/brands/{slug}.json` (prices[coats-jackets], notes). FX: ECB 2026-10-28, $1.3288/£,
$1.1133/€.

| Claim | Source |
|---|---|
| Intro: Matilda raincoat £135 UK / $280 US; $170–$445 | damson-madder prices note; prices min/max |
| SJ: Ravena £135, Alexis £89, DREAM up to £215, sizes XXS–L, duties not covered, 14 days | sister-jane prices source feed; size_range; notes[1]; returns_days |
| SJ playful side | evidence (ldnfashion #7) |
| GANNI: Poncho $440, Define $180, trench $995, $5 ground, prepaid label, 14 days, US store exchange, 4XL/EU 50, final sale | ganni prices note; notes[1–2]; size_range |
| DM $20 refund label, 28 days, US 16 | damson-madder notes[2]; returns_days; size_range |
| RIXO: Sunday $365, Earla $445, 3XL/UK 20 most, 6XL/UK 26 some, $25 flat, duties included, NY store, 14 days $5, sale final | rixo prices feed + note; notes[1] |
| DM Pixie Bomber Leopard $225 | damson-madder coats feed (regular) |
| Albaray: Chocolate Gingham £110, Wool Coat £240, Chelmsford, duties in checkout, UK 8–18, 28 days with fee | albaray feed; notes[0–1]; size_range |
| NFD: US 2–24 (UK 28), Casablanca $270, Organza $155 (4 colours), duties included, free standard, 28 days £9.99, NY store, bold prints | never-fully-dressed feed; notes; evidence (disco) |
| HoS: Suede Racer £155, Teddy Fleece Scarf £185, crafted/conscious/independent, tariffs covered, $20/free over $300, 30 days, UK 6–18, 3XL | house-of-sunny feed; known_for; notes[1]; size_range |
| LSG: Olson Trench $250 (dot, toile), Lady Puffer $188, LA-designed, stocks Damson Madder, $8/free $200, 3XL, 30 days, $10, LA/SF stores, Texas | lisa-says-gah feed; notes[0–2]; size_range |
| RB: preppy | evidence (maiazine) |
| RB: Clark Sherpa $278, denim $228, Alex trench $598, mostly sherpas, $9/free $100, 14 days, $10 fee, final sale, XXL | rowing-blazers feed + note; notes[1]; size_range |
| Nobody's Child: duties covered, free over $250, Cord Shacket $188, Trench $312, petite on 31 of 100, top $766, 30 days, £4 fee | nobodys-child notes[1]; feed; prices note |
| CS: Organic Workwear Jacket $145, colour names, B Corp, Copenhagen, Portugal, $15/free $100, 90 days | colorful-standard prices note; notes; certifications; production_model |
| Aje: Ophelia $329, Winn $549, duties included, free standard on all US orders, US warehouse, $50 fee, 14 days, sizes 4–16 and XXS–XL | aje feed; notes[1]; size_range |
| Paloma: project-on-photography line, numbered pieces, Tryo €260, Sanpi €130, leather to €2,500, euros, US rates not listed, 15 days with fee | paloma-wool notes; prices note; feed |
| FAQ: London, spring 2020, name from dye colours; $12/free $250/duties; small-batch, 92% organic/recycled cotton, GOTS/OCS/GRS, >75% plant-based | damson-madder notes[0,1,4]; production_model; certifications |
