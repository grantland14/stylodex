# Review: stores like Zumiez (steps 2–5)

Written 2026-10-29 in one run (enrich, verify, pick, write). Author: Ash. Copy in `zumiez.json` → `author`, `copy`.
Copy written against the rewritten `pipeline/voice.md`; earlier page files used for JSON shape only.

## Gate result

Loaded through `lib/pipeline.ts` (`brandFromJson` + `pageFromJson`, with `loadMedia`) and judged with
`judgeBrandsLikePage`, now = 2026-10-29 (script: scratchpad `zumiez-run/gate.ts`):

- First run: anchor missing `imageUrl` only. `lib/gate.ts` then changed on disk (an image is now optional; only a non-`/img/` URL fails). Re-run on the current gate: anchor missing `[]`.
- `pickProblems` returns `[]` for all 10 picks.
- Verdict: **indexable**, no reasons. 10 picks render.
- Title: "10 Stores Like Zumiez for Skate Shoes, Skateboards and Streetwear".
- `npm run lint:facts`: ok.

## Category

`mens-clothing` (department, since Zumiez is a multi-brand store). Like-for-like item: men's T-shirts. Reasons in `category.why`.

## Picks

| Rank | Pick | Sources | Price (men's tees, USD) | Label | Notes |
|---|---|---|---|---|---|
| 1 | Tillys | 2 | 29.99–45.00 (14-item sample) | similar | WebFetch only (curl 403) |
| 2 | PacSun | 2 | none | null | category pages PerimeterX 403; homepage readable |
| 3 | Foot Locker | 1 | 35.00–60.00 (9 full-price of 32) | similar | no shipping/returns stored; US stores |
| 4 | Skate Warehouse | 1 | 14.95–50.00 (119, full listing) | similar | online only |
| 5 | Hot Topic | 1 | 12.99–50.90 (547, both sort ends) | similar | |
| 6 | Vans | 2 | none | null | vans.com 403; verified from vfc.com + own store locator |
| 7 | American Eagle | 2 | none | null | 28 of 30 men's tees marked down, none at full price |
| 8 | Hurley | 1 | 25.00–55.00 (80, Shopify feed) | similar | |
| 9 | Billabong | 1 | 29.95–49.95 (152 regular, Shopify feed) | similar | status corrected off_category → verified (off_category was jeans-specific) |
| 10 | Old Navy | 1 | none | null | grid loads by script |

Anchor: Zumiez $24.99–$64.95, a 60-item page-1 sample (human_check row 1).
Order: same-type multi-brand stores first, then single-brand chains, each by sources then price closeness (`notes`).
Rejected (in `rejected`): Urban Outfitters (no US shipping/store fact), ASOS (marketplace), CafePress (print-on-demand), Hollister / Spencer's / Urban Planet (unverified), Forever 21 (15-tee men's line, 2 at regular price: not padded in), 13 pool-only brands.

## FAQ sources (Ahrefs)

One call: `keywords-explorer-matching-terms`, keywords "zumiez", US, terms=questions, volume desc, limit 30.

| Used | Question (US volume) | source_query |
|---|---|---|
| Yes | Is Zumiez closing? (3,000) | `is zumiez closing` |
| Yes | What is Zumiez? (350) | `what is zumiez` |
| Yes | Who owns Zumiez? (150) | `who owns zumiez` |
| Yes | Does Zumiez sell skateboards? (100) | `does zumiez sell skateboards` |

Skipped, no stored fact answers them: is zumiez legit (opinion), work-age/pay/hiring questions (jobs, out of scope), is zumiez fast fashion (no production facts), afterpay, opening hours, military discount, stash points, near me, why so expensive.

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A stores-alternatives page for US shoppers is the site's purpose. |
| G2 | PASS | Nothing comes from the two outside lists except which stores they name (shown as evidence). Bodies are built from each store's own pages: shipping thresholds, return windows and fees, size runs, named tees with prices, the same Santa Cruz x Pokémon Power Dot tee at Tillys ($31.99) and Zumiez ($31.95), PacSun's jeans-ship-free rule, Hot Topic's pre-order surcharge. Neither SERP list has prices or terms. |
| G3 | PASS | Basis is in the data (dated, URL'd). The page carries specifics a SERP reader can't get: return fees ($6.95 Tillys, $5/item Hurley, $7.50 Billabong restocking), free return labels (Skate Warehouse, Old Navy), size runs (5XL Tillys/Hot Topic, tall at Hot Topic), shipping exclusions. No hands-on knowledge, by design. |
| G4 | PASS | No wear/try/test claims, no invented experience. Ash's bio untouched. |
| G5 | PASS | `author: "Ash"`. Not YMYL. |
| G6 | PASS | Every number traces to a stored field or brand note (table below). Title "10 Stores Like Zumiez for Skate Shoes, Skateboards and Streetwear" comes from `known_for`, built from zumiez.com's own title. Caveat: four price ranges are samples (Zumiez, Tillys, Foot Locker; recorded in each price note and human_check). |
| G7 | PASS (N/A) | Not YMYL. |
| G8 | PASS | The count is the real rendered count (10), and the subtitle matches what Zumiez sells. |
| G9 | PASS | "Stores like Zumiez" intent served: multi-brand skate/surf/street stores first, then chains named by the sources. Six picks have a price label against Zumiez. Four picks render without a price (PacSun, Vans, AE, Old Navy), so the comparison is partial for them. |
| G10 | PASS | Price, sizes, shipping, returns and store presence for most picks; "How to choose" routes by goal. Gaps: Foot Locker shipping/returns, Vans and PacSun prices (human_check). |
| G11 | PASS | Intro 67 words, no process; each body opens on what the store is best for. No filler. |
| G12 | PASS | All facts checked 2026-10-29 (template "Last checked" line). No dates in the copy. |
| G13 | **FAIL** | Honest estimate below is Medium–High, scored Medium under the "use the lower rating" rule. The page beats the readable lists (Style Your Occasion 2022, PlainTips undated: no prices or terms) on data, but has no images yet (optional for the gate, still missing for readers), 6 of 10 picks are single-source and 4 have no price. Copy can't fix that: it needs images, and the PacSun / Vans prices. |
| G14 | PASS | Affiliate links via /go/ with disclosure (template). No implied testing; criteria live in the method box. |
| G15 | PASS | Read as a whole: no semicolons, em dashes or Markdown (0/0/0). Openers and endings varied after the AI-voice pass (below). No near-duplicate sibling page. |

**Counts:** PASS 14 · FAIL 1 (G13) · BLOCKED 0.

**Estimated Page Quality:** Medium (Medium–High, scored down when unsure). Strongest reason: store-level shipping, returns, sizes and tee prices for ten stores that the ranking lists don't have.

**Estimated Needs Met (dominant intent):** Moderately to Highly Meets. Biggest lift: images, then PacSun and Vans tee prices so every pick carries a price label.

## Voice check (`voice.md` "What we never write")

- Process narration: none ("we checked", dates, "its About page says", "couldn't verify" all absent).
- Spreadsheet sentences: none. Counts kept only where they explain something ("68 stores in California alone", "stores in 32 states"). Markdown counts (28 of 30, 221 of 373) stayed in notes; the copy says "markdowns are common".
- Verdicts: none. Trade-offs are about attributes (shipping stops at the border, free-shipping bar, restocking fee, no shop to walk into, own label only).
- Invented experience: none. Hype words: none.
- Moves present: answer-first openers, named products with prices, why-it-matters clauses, one teachable tip per pick (fit names at AE, the Vans Store vs dealer listing, PacSun's jeans-ship-free rule, Old Navy's shared Gap Inc. bag, Hot Topic's pre-order surcharge), cross-pick comparisons (Tillys→Billabong, Hurley↔Billabong, Vans→Skate Warehouse), use-case Best-for lines, How to choose.

## AI-voice scan (`ai-voice-avoid.md`)

| Pattern | Where found | Fix |
|---|---|---|
| §24 colon reveals | Foot Locker "follow the shoes: the Nike…", AE "a Zumiez haul: logo tees…" | Split into two sentences / a "with" clause. Tillys' collab colon kept (an example, not a reveal). |
| §5 anaphora | "The catch is…" in Tillys, Skate Warehouse, Billabong | Kept once (Skate Warehouse); others "Shipping stops at the border, though." / "Shipping cost is the downside." |
| §47 same ending | 8 of 10 bodies ended by pointing to another pick | Cut from Hot Topic, AE and Old Navy (now end on a tip or a fact); 7 still point elsewhere, phrased differently. |
| §1 binary contrast | Skate Warehouse "for the board, not the hoodie"; Hot Topic "skate brands rather than fandom" | Rewritten without the contrast. |
| §23 fake question | Vans "Want a Vans tee…?" | Statement. |
| Unsupported claims caught | "mall chain" (Tillys), "same mall as your Zumiez" (PacSun), "few skate labels" (Foot Locker), "From price changes with size" (Hot Topic) | Cut or replaced with stored facts. |

## Fact trace

| Copy claim | Field / source |
|---|---|
| Tillys: 32 states; Power Dot $31.99 vs $31.95; tees $29.99–$45; 5XL; $70; 30 days; $6.95; free in store; no international | tillys notes (About, shipping, returns pages, size filter), price row; zumiez notes (Santa Cruz product page $31.95) |
| Zumiez $64.94 free shipping; 3XL; 30-day returns; 85 stores in California; founded 1978 by Tom Campion as Above the Belt; 700+ stores; Nasdaq ZUMZ since 2005; Lynnwood | zumiez `free_shipping_min_usd`, `size_range`, `returns_days`, notes (about, store list, Wikipedia) |
| PacSun: Seal Beach surf shop; baggy jeans, hoodies, graphic tees; oversized, longline, long-sleeve; free over $59 or with jeans/pants; AK/HI/PR/APO excluded; 46 states | pacsun notes (homepage meta + fine print, nav, Wikipedia) |
| Foot Locker: 68 in California; Air Futura $35, Jordan 1991 AJ4 Boxy $45; $35–$60; ~70% Nike; markdowns common; hoodies, fleece, shorts, pants | foot-locker price row + note (23 of 32 marked down), notes (locator, Wikipedia, nav) |
| Skate Warehouse: decks/trucks/wheels/griptape; Baker, Independent, Polar; Pro Club $14.95 (Zumiez carries Pro Club); 60 days + prepaid label; $60; $50 top; San Luis Obispo pickup only; XXL | skate-warehouse price row + notes; zumiez notes (About names Pro Club) |
| Hot Topic: pop-culture merch store; InuYasha $12.99; WWE John Cena Comfort Colors $50.90; XS–5XL, LT–4XLT; licensed merch; $75; 30 days; $1.99 pre-order surcharge | hot-topic `known_for`, price row, `size_range`, notes (Wikipedia, shipping page) |
| Vans: 1966; original action sports footwear company; apparel; Westfield Century City store; locator lists dealers; Rowan Z Stripe $50 at Skate Warehouse | vans notes (vfc.com, locator), skate-warehouse price note |
| AE: Lightweight Logo Tee lists at $17.95; markdowns common; 60 days; $5 mailed return unless Level 3 / cardholder; $75; Standard / Boxy / Vintage Relaxed fits | american-eagle notes (men's T-shirts page, returns/shipping) |
| Hurley: Icon Tee $25, H2O Dri Slub $55; Bob Hurley surfboards 1979 SoCal; surf, skate and streetwear inspired by beach culture; XS–XXL; $99; $5/item; 30 days; no in-store returns | hurley price row + notes |
| Billabong: Gold Coast 1973; Hollow Premium $29.95, Blueprint Crewneck $49.95; ships to Canada; $125; $10 under; $7.50 restocking; S–XXL; many tees marked down | billabong price row + notes, `ships_to` |
| Old Navy: 49 states + DC + PR; Gap Inc. value apparel brand; free returns; big and tall; $50 + free Rewards membership; anywhere in the US incl. PR; shared bag with Gap, Banana Republic, Athleta | old-navy notes (store locator, gapinc / 10-K line, shipping and returns pages, homepage meta) |
| How to choose: $12.99 Hot Topic, $14.95 Skate Warehouse, 5XL, tall, 60 days | as above |

## Anything that broke

- Only two readable editorial sources: five list pages returned 503 or didn't resolve, Quora/Knoji 403, Reddit/Facebook unreadable. The "similar to zumiez" SERP is an old Ahrefs snapshot.
- The scratchpad `patches/` folder is shared with other page agents. This run's patches were first written there under common slugs (pacsun, hot-topic, tillys, american-eagle, billabong, old-navy, zumiez…) and may have overwritten another agent's unmerged patch of the same name. They were moved to `zumiez-run/patches/`; all brand writes went through `merge_brand.py`.
