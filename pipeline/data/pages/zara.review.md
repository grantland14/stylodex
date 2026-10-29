# Review: stores like Zara (steps 2–5)

Written 2026-10-29. Author: Ash. Copy in `zara.json` → `author`, `copy`.
Checked with `lib/gate.ts` through `lib/pipeline.ts` (tsx script, now = 2026-10-29):

- Title: "12 Stores Like Zara" (no `for …`: the anchor has no known_for yet)
- Rendered picks: 12 of 12. `pickProblems` returns `[]` for every pick.
- Verdict: **not indexable**. One reason: `anchor missing: status, knownFor, sizeRange, shipsTo, returnsDays, imageUrl, price:dresses`. zara.com returns HTTP 403 to WebFetch (homepage, dresses page, shipping page), so the anchor stays `unverified` and goes to human_check.
- `npm test`: 27/27 pass. `npm run lint:facts`: ok.

## Category

`dresses`. Zara sells only its own label (`kind: brand`), so C is a product type. Its store can't be read to find its best-selling line, so dresses is chosen as the women's category every candidate sells as its own collection (human_check: confirm on the store). Prices are regular-price dresses only, in each store's own currency, non-USD converted at ECB 2026-10-28.

## Picks: 12 renderable of 12 (target 10–15, floor 6, not padded)

| Rank | Pick | Sources | Dresses price row | Notes |
|---|---|---|---|---|
| 1 | Uniqlo | 2 (Rank & Style #6, BrandShopper #4) | $59.90, 2 regular-price items of 16 | most of the range on sale; shipping/returns pages 403 |
| 2 | NA-KD | 2 (R&S #16, BrandShopper #18) | $49.95–$99.95, **sample 36 of 674** | |
| 3 | Everlane | 2 (R&S #11, BrandShopper #7) | $58–$198, 26 items (existing file) | |
| 4 | AllSaints | 2 (R&S #8, BrandShopper #12) | $149–$539, full listing (136) | shipping/returns pages blank to WebFetch |
| 5 | Kotn | 2 (Good On You #18, Eco-Stylist #4) | CA$118–158 (≈$84–$112) (existing file) | sustainability lists |
| 6 | Ninety Percent | 2 (Good On You #11, Eco-Stylist #12) | £55–£70 (≈$73–$93), all 7 | sustainability lists |
| 7 | Commense | 1 (R&S #15) | $19–$99, 1,207 items | store is thecommense.com |
| 8 | Forever 21 | 1 (Effortless Gent #4, men's list) | $24.99, 6 items (existing file) | |
| 9 | Oak + Fort | 1 (R&S #14) | $78–$168 (existing file) | |
| 10 | Pixie Market | 1 (R&S #13) | $82–$199 (existing file) | |
| 11 | FARM Rio | 1 (StyleCaster #1) | $55–$1,310, 142 items | |
| 12 | Johnny Was | 1 (StyleCaster #2) | $198–$498, **sample 27 of 64** | |

Every `price_relation` is null (no anchor price). Held back, not padded in: Club Monaco (1 regular-price dress, men's-list source) and Frank And Oak (2 dresses, men's-list source).

**The gap that matters:** the same-type chains every ranking list leads with (Mango 4 sources, COS 4, H&M 3, Massimo Dutti, & Other Stories, Bershka, Stradivarius, Reformation 2 each) all refuse WebFetch. hmgroup.com and inditex.com don't give US stores or dresses per brand, so they can't stand in. They're first in human_check; verifying them would put them at the top and change the page's shape.

## Evidence

Four Ahrefs `serp-overview` calls (US): stores like zara, brands like zara, zara alternatives, similar to zara. Six editorial pages read: Rank & Style (Sept 2026, 16 brands), StyleCaster via Yahoo Shopping (Oct 2025, 10), BrandShopper (WordPress blog, updated Mar 2026, 19), Effortless Gent (men's, 2023, 10), Good On You (Aug 2026, 19), Eco-Stylist (July 2026, 14). Not read: Who What Wear (title only), InStyle (can't fetch), ThredUp and Fashion Magazine (403), StyleCaster's own URL (TollBit gate, not followed), Reddit, Quora, TikTok. Pool: 48 `brand_relationships` rows; only Mango, H&M, Bershka and Arket also have outside sources.

An earlier, unfinished run of this page had left unmerged patches in the scratchpad. Nothing from it was used without re-fetching (Uniqlo listing, Commense feed and policies were re-read).

## FAQ sources (Ahrefs)

One call: `keywords-explorer-matching-terms`, "zara", US, terms=questions, volume desc, limit 40.

| Used | Question (US volume) | source_query |
|---|---|---|
| Yes | Who owns Zara? (600) | `who owns zara` |
| Yes | Where is Zara from? (500) | `where is zara from` |
| Yes | What is Zara? (1,000) | `what is zara` |
| No | is zara fast fashion (1,700), is zara expensive, is zara good quality, does zara have free shipping, what is zara return policy, does zara run small | no stored fact answers them (Zara's store is unread); "fast fashion" would be a verdict |
| No | Zara Larsson questions | different subject |

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | "Stores like Zara" is the site's core use case: a US shopper looking for Zara-type dresses elsewhere. |
| G2 | PASS | Prices, sizes, shipping and returns read from each store's own pages and feeds; none of the ranking lists give regular-price dress ranges or return terms. FAQ answers come from stored facts, not PAA text. |
| G3 | PASS | Each pick gives a concrete decision point (duty fee at NA-KD checkout, Kotn's 15-day refund window, Pixie Market cutting small, Uniqlo prices mostly sale prices). |
| G4 | PASS | No first-person experience or testing claimed. "We" only for picks. |
| G5 | PASS | Author Ash, bio in `lib/authors.ts`. Not YMYL. |
| G6 | PASS | Every number traces to a stored field (below). Samples (NA-KD, Johnny Was) are stated as ranges we read, not as the full range: human_check. |
| G7 | N/A | Not YMYL. |
| G8 | PASS | "12 Stores Like Zara" is the real rendered count. |
| G9 | PASS | Intent: where else to buy Zara-style clothes in the US. Every pick sells dresses and ships to the US; the closing sorts by budget and need. |
| G10 | BLOCKED (publish) | The most-searched answers (Mango, H&M, COS, Massimo Dutti) are missing because their sites refuse reads. A reader would likely search again for them. Fix = human check, not more writing. |
| G11 | PASS | Intro 58 words, answer-first bodies, no preamble. |
| G12 | PASS | Prices dated 2026-10-29 in data; the page's "Last checked" line carries the date. |
| G13 | BLOCKED (publish) | Against Rank & Style / Who What Wear / InStyle, this page is more specific on price, sizes and returns but lacks the brands they lead with. Honest estimate is Medium until the big chains are verified (see below). |
| G14 | PASS | No client, no sponsored ranking; affiliate links go through `/go/` with disclosure (template). |
| G15 | PASS | Read through as a whole; American spelling; distinct from sibling pages' copy. |

## Voice check (`voice.md` "What we never write")

- Process narration: none (no "we checked", dates, "its About page says", blocked-site notes).
- Spreadsheet sentences: none. Counts appear only inside a reason ("hundreds of styles", "most of them under $50").
- Verdicts on brands: none. Invented experience: none (Pixie Market "cut on the small side" is the brand's own FAQ statement, written as a fact about the cut).
- Hype: none. No semicolons, em dashes or en dashes in the copy. Brands are "it". Contractions throughout. One colloquialism-level phrase ("weekly haul").

## AI-voice scan (`ai-voice-avoid.md`)

Found and fixed: #24 colon reveals ("You know the Zara feeling: …", "That's the useful part: …", "Here's the useful bit: …", "keeps it simple: …"), #23 fake rhetorical question ("Spending more?"), #6 one 34-word coordinated sentence in the closing (split). Left on purpose: "from $X to $Y" price ranges (#40), which `voice.md` asks for. Smell test: no three same-length sentences in a row checked per body; paragraphs vary 1–4 sentences.

## Fact trace

- Intro: 12,000 designs a year → zara.notes (Wikipedia). "ship to the US" → each pick's `ships_to`.
- Uniqlo: $59.90, Knitted Polo Dress, Shirt Dress → prices.dresses note; Fast Retailing, US since 2005, Japanese → parent_company, notes (Wikipedia), hq_country; XXS–XL → size_range; mostly sale → sale_pattern.
- NA-KD: $49.95/$99.95, Wide Sleeve Mini, Sequin Batwing Maxi → prices note; Scandinavian, womenswear → known_for, notes; duty fee, 30-day returns with fee → notes, returns_days; "hundreds of styles" → 674 in note.
- Everlane: $58/$198 products → prices note; costs published, audited factories → production_model, notes; XXS–XXXL → size_range; US/CA/GB/AU → ships_to; 30 days, $7 label, free in store → notes.
- AllSaints: $149, $539, $199, materials in product names → prices note, notes; leather jackets, denim, knitwear → known_for; USD → currency; markdowns → prices note.
- Kotn: CA$118–158, ≈$84–$112, Ghina V-Neck → prices; Canada/Nile Delta/schools/duties/15-day refund/30-day exchange/final sale → notes; XS–XL → size_range.
- Ninety Percent: 90% of profits → notes; £55–£70, ≈$73–$93, Tulla → prices; UK 4–18 → size_range; $150/$25, duties at checkout, 14 days, buy label → notes.
- Commense: $19–$99, most under $50 (685 of 1,207), Velvet Sleeveless Ruched Mini → prices note; boutique fashion at radically low prices → known_for; knit/sweater/denim → product types in note; XS–XL; $7.99, $59, 7–12 days, 30 days, customer pays → notes.
- Forever 21: $24.99, Satin Cowl Neck Maxi Dress → prices + feed (2026-10-29); LA, online only → notes (homepage, Wikipedia); US only, $50, $9.99 → ships_to, notes; XS–XXL + plus → size_range; markdowns, clearance final, $9.99 return fee, 30 days → sale_pattern, notes.
- Oak + Fort: $78/$88/$168 products → feed; Vancouver, woman founded and led, line → known_for, notes; XXS–XL, 0–12 → size_range; $100 → free_shipping_min_usd; 21 days, customer pays, 20%+ final → notes.
- Pixie Market: $82, $199 products, linen bestsellers → prices note, feed titles; NYC 2006, affordability and quality, cut small → notes; XS–L → size_range; $100 → notes; 20 days, $8 → notes.
- FARM Rio: $55 adidas Farm Dress, $1,310 leather, $280 median, Tropical Royalty $148, monstera, 3D flowers → prices note, notes; Dress in Happiness → known_for; XXS–XL → size_range; free 30-day returns, prepaid, final-sale exchange → notes.
- Johnny Was: $230, $498 products, $198 start → prices note; Southern California, vintage-inspired → hq_country, known_for, notes; XXS–XXL, 1X–3X, petite → notes; $125, free returns 30 days, 50%+ final → notes.
- Closing: every comparison above restated (budgets from prices, sizes from size_range, returns from notes).
- FAQ: Inditex and its brands → inditex.com brands page (zara.notes); 1975, founders, Arteixo, US 1989, US online 2011, 12,000 designs, what it sells → zara.notes (Wikipedia).

## Estimate

- **Estimated Page Quality:** Medium today. Strongest reason for: real, store-sourced prices, sizes and return terms for 12 shops. Against: no Mango, H&M or COS, which every competing list leads with.
- **Estimated Needs Met (dominant intent):** Moderately Meets. The one thing that would make it better: a human check of Mango, COS, H&M and Massimo Dutti (plus Zara itself) so the closest same-type chains lead the page.
