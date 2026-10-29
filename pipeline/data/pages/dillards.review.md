# Review: stores like Dillard's (steps 2–5)

Written 2026-10-29. Author: Ash. Page file `dillards.json` (`url_prefix: stores`, category `womens-clothing`, like-for-like item women's jeans).

## Gate (step 3 check)

Loaded through `lib/pipeline.ts` → `judgeBrandsLikePage` (now = 2026-10-29), tsx script in the scratchpad:

- Rendered picks: **6 of 6** (every `pickProblems` returns `[]`).
- Title: "6 Stores Like Dillard's for Department Store With Clearance Centers".
- **indexable: true**, no reasons. The page sits exactly on the 6-pick floor.

Checks run: `npm test` 30/30 pass. `npm run lint:facts`: the only flags are other agents' in-flight brand files (a-p-c, margaret-howell, organic-basics, goodbye-bread); dillards.json and the six pick files are clean.

## Evidence

Ahrefs, 4 `serp-overview` calls (US): `stores like dillards` 19 rows; `similar to dillards`, `dillards alternatives`, `brands like dillards` 0 rows. The one top 10 held no readable list of Dillard's alternatives: 10best reader votes, Wikipedia, Reddit (unreadable), dillards.com, a video, a Kohl's list and a Nordstrom list (Dillard's is an entry, not the anchor), Similarweb, and StyleBlueprint's Southern discount stores (read; no alternatives framed).

WebSearch found one editorial list; everything else was a directory or excluded:

| Source | Author, date | Kept? |
|---|---|---|
| ViralTalky, "7 Best Stores like Dillards" | ViralTalky, Mar 16, 2023 ("[2024]" title) | **Kept**: 7 stores with written commentary |
| Similist | — | excluded (enrich.md §1.2), not read |
| JustAlternativeTo, SimilarSiteSearch | read | dropped: templated/crowd-sourced directories |
| KoalaGains, PitchGrade | read | dropped: auto-generated stock/company pages |
| Retail Dive (D. Howland, Aug 2022) | read | dropped: industry story, no shopper alternatives |
| almostsimilar.com, portersfiveforce, matrixbcg, discobrands | — | redirect to unrelated domain / 404 / 503 / 404 |
| Owler, ZoomInfo, Craft, Similarweb, Instya, SimilarStores | — | company-data or scraped directories |

`public.brand_relationships`: no Dillard's row in `public.brands`, so no pool.

## Picks

| Rank | Pick | Sources | Price (women's jeans) | Basis |
|---|---|---|---|---|
| 1 | Macy's | 1 | none (403) | existing file: macysinc.com + 10-K |
| 2 | Belk | 1 | none (403) | existing file: newsroom.belk.com |
| 3 | Kohl's | 1 | none (403) | existing file: Kohl's 10-K |
| 4 | JCPenney | 1 | none (503) | existing file: corporate.jcpenney.com |
| 5 | Neiman Marcus | 1 | none (403) | existing file: Exemplar (women's-clothing check still open) |
| 6 | TJ Maxx | 1 | none | existing file: TJX site + 10-K |

All six brand files reused unchanged (verified today by the Macy's/Kohl's/Nordstrom runs). Department stores first, mid-priced before luxury, then off-price; all single-source, so no source-count ordering. Anchor priced ($36–$350, 1,182 regular-price jeans); no pick has a price, so every `price_relation` is null. Rejected: Sears (1 source, sears.com is a JS shell to our UA, no file; human check), Nordstrom, Bloomingdale's, Von Maur, Saks, Target, Walmart, Nordstrom Rack, Marshalls, Amazon (no outside editorial source names them against Dillard's).

Brand-file writes: one patch merged into `dillards` (StyleBlueprint "Dirty Dillard's" note + source, for the FAQ). No prices written.

## FAQ sources

One `keywords-explorer-matching-terms` call: "dillards", US, questions, volume desc, limit 40.

| Used | Question (US vol.) | Answered from |
|---|---|---|
| Yes | what is dillards return policy (300) | dillards.json notes (FAQs page: 30 calendar days; Nov 1–Dec 11 holiday extension) |
| Yes | what is dirty dillards (80) | dillards.json notes (StyleBlueprint nickname; SEC release 28 clearance centers of 272) |
| Yes | when was dillards founded (60) | dillards.json founded_year + history-page note (1938, Nashville, Arkansas; Little Rock HQ) |

Skipped: is dillards legit, price match, hours, who owns (parent empty), closing, military discount, shipping time (no stored fact). PAA questions ("Is Dillard's nicer than Nordstrom?", "...or Macy's higher end?") need a verdict, so skipped.

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A "stores like Dillard's" shopper wants where else to shop; every pick is a US chain selling women's clothing. |
| G2 | PASS | Store counts, label names, clearance-center/outlet/Backstage/Runway angles and the Dillard's jeans range come from brand files, not from the ViralTalky list (which has none of them). |
| G3 | PASS | Concrete specifics per pick (which labels to start with, which format replaces a clearance center, the reach trade-off); no claimed experience. |
| G4 | PASS | No first-person experience; "we" only in "Our first question". Author Ash, bio untouched. |
| G5 | PASS | Author Ash; not YMYL. |
| G6 | PASS | Every number traces to a stored fact (trace below). |
| G7 | N/A | Not YMYL. |
| G8 | PASS | Title count is the real rendered count (6). |
| G9 | PASS | Each pick says what it replaces at Dillard's (full store, clearance center, everyday, luxury). |
| G10 | PASS | Prices are missing for picks (their stores refuse reads), but each body names the label or format to look for; closing routes by need. |
| G11 | PASS | Intro 66 words, answer-first bodies, no filler. |
| G12 | PASS | All facts read 2026-10-29 or in sibling runs today; Macy's closures stated as planned. |
| G13 | PASS (marginal) | Better than ViralTalky's generic blurbs and the directories, but thin evidence and no pick prices cap it. |
| G14 | PASS | No implied testing; affiliate handling is the template's. |
| G15 | PASS | 6-word shingle check against all sibling copy: only proper-noun/fact strings shared (label lists, "1,153 stores across 49 states", "US and Puerto Rico"). |

## Voice check (voice.md "What we never write")

No process narration, no dates in copy, no counts as the point of a sentence (store counts always carry the why: nearer to you), no verdicts, no invented experience, no hype. No semicolons, em/en dashes or bold. Longest sentence 30 words. Bodies 113–131 words. Contractions throughout; brands are "it".

## AI-voice scan

Fixed: a "splurge store, not an everyday replacement" binary contrast in Neiman Marcus, an unstored "no fixed collection" claim in the TJ Maxx catch (rewritten to the Marshalls tip), a repeated "Outside the Southeast" in Belk, a repeated "Its… Its" opener in JCPenney, an unsupported "unlike a clearance center" claim. Remaining: one rhetorical question opener in the closing ("Going the other way?"), kept as the page's one colloquial move.

## Fact trace

- Intro: 30 states, clearance centers → dillards.json notes (SEC release, history page).
- Macy's: 408 locations incl. furniture, I-N-C/Style & Co./Charter Club, 300+ Backstage mostly store-within-store, ~150 closures → macys.json notes. "Dillard's Exclusive" → dillards.json nav note. Belk Market/new stores → belk.json sources/notes.
- Belk: 1888, nearly 300 Belk and Belk Outlet locations, 16 Southeastern states, Belk Market range, belk.com/app → belk.json notes.
- Kohl's: 1,153 stores/49 states, moderately priced, proprietary brands priced under national brands, exclusives, Sephora in accessories → kohls.json notes. $350 → dillards.json price.
- JCPenney: working families, $54 High-Rise Vintage Slim Jeans, Liz Claiborne petite to plus + capsule, Levi's, 600+ stores US/Puerto Rico, salon/portrait/optical → jcpenney.json notes. $36–$350 → dillards.json price.
- Neiman Marcus: 1907, top luxury designers, NorthPark/Beverly Hills flagships, Toteme/Saint Laurent/Proenza Schouler → neiman-marcus.json notes. NYDJ/Levi's, Johnny Was $350 → dillards.json notes/price.
- TJ Maxx: 1,348 stores, family apparel/footwear/accessories/home, The Runway in select stores, TJX 20–60% claim, tjmaxx.com, Marshalls sister chain → tj-maxx.json notes. 28 clearance centers → dillards.json.
- FAQs: see FAQ table.

**Estimated Page Quality:** High (just): every claim is a dated stored fact and each pick says which part of Dillard's it replaces; the weak spot is a single SEO-blog source behind every pick.
**Estimated Needs Met (dominant intent):** Highly Meets for "where else do I shop"; a second real list (adding Nordstrom, Bloomingdale's, Von Maur) and readable jeans prices for the picks would make it better.
