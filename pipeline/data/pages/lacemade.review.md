# Review: brands like LaceMade (steps 2–5)

Written 2026-10-29 in one run (enrich, verify, pick, write). Author: Ash. The copy is in `lacemade.json` under `author` and `copy`.
The copy follows `pipeline/voice.md`. Earlier page files were used for JSON shape only. Every request used the StylodexBot User-Agent and sent no personal details.

## Gate result

The page was loaded through `lib/pipeline.ts` (`pipelinePages`) and judged with `judgeBrandsLikePage` at now = 2026-10-29. The script is in the scratchpad at `lacemade/gate.ts`.

- Anchor missing: `[]`. LaceMade is `verified` and has every required fact. It has no image yet, which is optional.
- `pickProblems` returns `[]` for all 3 picks.
- Verdict: **not indexable**. Reason: `only 3 publishable picks (need 6)`. The page renders `noindex` and stays out of the sitemap.
- Title: "3 Brands Like LaceMade for Romantic Corset Dresses".
- `npm run lint:facts`: ok. `npm test`: 29 pass, 0 fail.

## Category

The category is `dresses`. LaceMade's store calls itself a seller of "elegant corset & bustier dress, princess costume" (meta.json), and its brand story says it "specializes in corsets". Its dresses collection has 375 corset dresses and gowns. Of those, 320 are at regular price, from $39.90 to $589.99 with a median of $99. The only usable outside source compares dress makers.

## Picks

| Rank | Pick | Sources | Dresses (regular price) | Label | Notes |
|---|---|---|---|---|---|
| 1 | Whimsical Lace | 1 (TikTok) | Rp1,592,000–Rp4,124,000 ≈ $87.59–$226.89 (18) | similar | Handmade to order in Indonesia. XS–5X plus free custom sizing. No returns, only a free alteration within 15 days |
| 2 | Miss Candyholic | 1 (TikTok) | $158–$248 (25 of 35) | similar | Chestnut Ridge, NY. XS–5XL. 14-day returns. Free shipping over $200 |
| 3 | Fairy Tong | 1 (TikTok) | $171.25–$1,377.17 (93 of 147, US market) | similar | London, founded 2020. XXS–10XL. £20–£35 international shipping, free over £350 |

The order is by the gap between each pick's median and LaceMade's $99 median, since every pick has a single source. **There are 3 picks, below the 6 floor and the 10–15 target. They were not padded.**

### Why so few
The only outside source that frames brands as alternatives to LaceMade is one TikTok video (@modamensch), which the SERP ranks #4 and #7. Its caption reads "3 ethical, sustainable alternatives to lacemade", and its subtitles say "sustainable, indie brands that make styles similar to lacemade". The rest of the SERP:
- **Reddit:** four threads, not fetched.
- **Facebook:** login wall.
- **TikTok:** a favourites list.
- **Thingtesting:** an empty page.
- **Two general feminine-brand lists:** Lizzie in Lace and Dainty Details. Each lists LaceMade as one entry and frames nothing as an alternative to it.

Both lists were dropped. That matches how Selkie (girlstyle), Minga London (indiefoxx) and Damson Madder treated similar lists. This is the main open question, and it's the first entry in `human_check`. If Ash counts these lists, as the Windsor page counted E! Online, about 20 candidates open up. A WebSearch (`serp` rows marked "(web search)") found nothing better. The `discobrands.co/brands/lacemade` and charm.io pages for LaceMade return 404.

Rejected (in `rejected`):
- The resale platforms the video names (eBay, Vinted, Mercari, Depop, Poshmark, Gem, Facebook Groups). These are marketplaces or secondhand, so the new rule rules them out (enrich.md §1 4c).
- The brands on the two general lists, which have no counting source.
- The Apart Style pool, which has no LaceMade row.

## FAQ sources (Ahrefs)

There was one call: `keywords-explorer-matching-terms` with keyword "lacemade", US, terms=questions, volume desc, limit 30.

| Used | Question (US volume) | source_query |
|---|---|---|
| Yes | How long does LaceMade take to ship? (50) | `how long does lacemade take to ship` |
| Yes | Where is LaceMade based? (20) | `where is lacemade based` |
| Yes | Where does LaceMade ship from? (20) | `where does lacemade ship from` |

Skipped because no stored fact answers them:
- "Is lacemade legit" (350) and "is lacemade a good brand": opinion.
- "Is lacemade fast fashion / ethical / dropshipping": LaceMade publishes nothing on this, and the TikTok creator's view isn't a brand fact.
- "Does lacemade run small": that would be invented experience.
- Restock and pre-order timing.

No People Also Ask rows were needed.

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A brands-alternatives page for US shoppers is the site's purpose. |
| G2 | PASS | The video supplies only the brand names. The bodies come from each store's own pages: prices, tariff-inclusive US shipping (Whimsical Lace), no-returns and free-alteration terms, size ceilings, made-to-order lead times and named dresses. No ranking page carries any of that. |
| G3 | PASS | Every pick has concrete numbers and trade-offs. No hands-on knowledge is claimed. |
| G4 | PASS | No wear, try or test claims. Ash's bio is untouched. |
| G5 | PASS | `author: "Ash"`. Not YMYL. |
| G6 | PASS | Every number traces to a stored field or note (see Fact trace). One caveat: Whimsical Lace's dollar figures are ECB conversions from IDR (in `human_check`). |
| G7 | PASS (N/A) | Not YMYL. |
| G8 | PASS | The title count is the real count (3). The subtitle comes from LaceMade's own words. |
| G9 | **FAIL** | "Brands like LaceMade" wants a range of romantic corset-dress labels, most of them cheaper. Three picks, two of them pricier, only partly serve that intent. |
| G10 | PASS | Price, sizes, shipping and returns for each pick. "How to choose" routes the reader by deadline, budget and fit. |
| G11 | PASS | The intro is 68 words with no process narration. Each body opens on what the brand does best for this reader. |
| G12 | PASS | Facts dated 2026-10-29 in the data. No dates in the copy. |
| G13 | **FAIL** | Honest estimate: Low–Medium. The data is real, but three single-source picks give a thin answer next to a SERP led by community threads (unread). Copy can't fix that. More sources would. |
| G14 | PASS | Affiliate links go through /go/ with the disclosure (template). No implied testing. |
| G15 | PASS | 0 semicolons, 0 em dashes, no Markdown. No near-duplicate sibling page. |

**Counts:** PASS 13 · FAIL 2 (G9, G13) · BLOCKED 0. Both FAILs come from the evidence, not the copy. The gate already keeps the page out of the index.

**Estimated Page Quality:** Low–Medium. Strongest point: store-level prices, sizes, shipping and return terms for three made-to-order labels that no ranking page carries.

**Estimated Needs Met (dominant intent):** Slightly to Moderately Meets. The biggest lift would be accepting the Lizzie in Lace / Dainty Details lists, or a human read of the Reddit threads, to reach 10 or more picks.

## Voice check (`voice.md` "What we never write")
- Process narration: none. No "we checked", dates, sources or "couldn't confirm".
- Spreadsheet sentences: none. "Most dresses come in under $100" carries its reason: it's why Miss Candyholic costs more.
- Verdicts on brands: none.
- Invented experience: none. No fit or feel claims.
- Hype: none.
- Moves present:
  - Each body opens answer-first with a named product and its price.
  - Each brand teaches one useful thing: rupiah pricing and tariff-inclusive US orders, the princess-casual everyday angle, and measuring against Fairy Tong's bust and waist chart.
  - Each has an honest trade-off: no returns and eight weeks; prices above LaceMade's and sale items final; shipping cost and own-postage returns.
  - Picks are compared with each other: Whimsical Lace points to Miss Candyholic, and Miss Candyholic points to Fairy Tong.
  - The Best for lines are use cases.
- American spelling ("color"). Contractions throughout. Each brand is "it".

## AI-voice scan (`ai-voice-avoid.md`)
Fixed:
- #40 "from X to Y" in the intro, now two plain sentences.
- #24 colon reveal ("Fairy Tong is the splurge:").
- #3 rule-of-three ("soft, sweet and made for every day").
- #23 rhetorical question ("Need one for next week?").

Checked and absent: binary contrasts, anaphora, sentences over 30 words, AI vocabulary, throat-clearing, tidy conclusions, participial puffery, brochure language.

## Fact trace

**Intro**
- Pre-order sizes: LaceMade notes (variants offered "In Stock" and "Pre order").
- "Romantic, historical look": brand story ("romantic, delicate, elegant, fairy", "historical clothing").
- Sews to your measurements in Indonesia: Whimsical Lace `production_model` and FAQ note.
- Gowns up to 10XL: Fairy Tong `size_range`.

**Whimsical Lace**
- Cecily Dress Rp1,953,000 (≈$107): price note, ECB 2026-10-28.
- LaceMade corset dresses $61–$129.99: LaceMade price note.
- Made by a mother and daughter, the mother sews every dress: about note.
- Free custom sizing, color and fabric: FAQ note.
- XS–4XL: LaceMade `size_range`.
- Rupiah: price `currency` IDR.
- Tariffs included, free over $250: homepage note and `free_shipping_min_usd`.
- Up to eight weeks to dispatch: FAQ note.
- No returns, free alteration within 15 days: returns note.
- Miss Candyholic ships in days (2–5 business days): its shipping note.

**Miss Candyholic**
- Rosemary Fairy Dress $198, Green Tartan Cottage Dress $178, Rose Princess Gown $248: price note.
- Black woman owned, princess casual, small batches in China, California and New York: about note.
- Based in New York: meta.json note (Chestnut Ridge, NY).
- XS–5XL against LaceMade's 4XL: both `size_range` fields.
- Regular prices $158–$248: `prices`.
- Most LaceMade dresses under $100: LaceMade note (207 of 320).
- Free shipping over $200: `free_shipping_min_usd`.
- 14-day returns, 20%-off items final: refund note.

**Fairy Tong**
- Several times LaceMade's prices: medians $663.61 vs $99.
- London label: meta note.
- Botanical Heirloom Corset Midi Dress $421 and Monet's Garden Gown $849 (corset bodice): price and corset-gown notes.
- Yingtong Chung, London, 2020: homepage meta note.
- XXS–10XL, US 00–26, bust and waist chart: size-chart note.
- Pre-orders from its atelier partner in China in 3–4 weeks: FAQ and shipping-information notes.
- £20–£35 shipping, free over £350 (≈$465): shipping note.
- 14-day returns at own postage, none on custom sizes: refund note.
- Two samples at $171.25, size S: price note.

**How to choose**
- Lead times: the shipping notes for each pick.
- About $107 at Whimsical Lace, $158–$248 at Miss Candyholic, Fairy Tong mostly above $400: price notes (91 of 93 Fairy Tong dresses are $406.73 or more).
- Free custom size and no returns at Whimsical Lace, 10XL at Fairy Tong: as above.

**FAQ**
- Shipping time: in-stock items ship within 2 business days, US standard 6–12 and express 3–5 business days, pre-orders ship when complete (shipping-policy note).
- Where it's based: Hong Kong, 2016, Lace Hong, University of the Arts London, Tsim Sha Tsui (brand-story note).
- Where it ships from: the China warehouse, local courier, standard duties covered (shipping-policy note) and the Kentucky US return address (returns note).

## Brand files written (via `merge_brand.py`, patches in the scratchpad at `lacemade/patches/`)
- New: `lacemade`, `whimsical-lace`, `fairy-tong` (two patches), `miss-candyholic`. No existing brand file was touched.
