# Review: brands like Desigual (`brands/desigual`)

Checked 2026-10-29. Author: Ash. Category C = `dresses`.

## Gate result (lib/pipeline.ts → judgeBrandsLikePage, now = 2026-10-29)
- **Indexable: yes.** Reasons: none. 9 of 9 picks render. Anchor missing facts: none.
- Title: "9 Brands Like Desigual for Original Prints".
- Order: Gimaguas, Johnny Was, lemlem, Fiorucci, FARM Rio, LoveShackFancy, House of Sunny, Alice + Olivia, For Love & Lemons (price-range closeness to Desigual's $119–$699; every pick has 1 source; For Love & Lemons has no stored range, so it's last and shows no price label).
- `npm run lint:facts`: ok.
- Run with: `npx tsx <scratchpad>/desigual/build/check.ts` from the repo root (loads `pipelinePages()`, then `judgeBrandsLikePage`, `brandsLikeTitle`, `pickProblems`).

## Anchor
- Verified. US store desigual.com/en_US in USD. 160 dress tiles read across 8 pages; 116 regular-price dresses (39 marked down, 4 jumpsuits and 1 T-shirt dropped), $119–$699, median $169, 92 at $199 or less.
- What it charges US shoppers: dresses $119–$699; free US shipping over $80 (cost below $80 not stated); 4–10 working days; no Puerto Rico or APO/FPO. Returns: 30 calendar days from delivery, free, home pickup.
- Ships to the US: yes, from its own US store; also separate CA (CAD), AU (AUD) and GB (GBP) stores. No US store locator found, so `us_stores` is empty.
- Sizes US XXS–XL (EU XS–XXL). Barcelona, 1984 (About us).

## Evidence (the weak point)
- Ahrefs SERP: only "brands like desigual" returned rows; the other three keywords returned none. Its editorial pages don't frame alternatives to Desigual: maiazine (Desigual is entry #7 of a general list), danielaaraya and goodonyou (no Desigual), cbinsights (business competitors). Reddit (3 threads), whowhatwear (truncated) and funfashion.ca (403) were not read.
- Counted sources came from WebSearch and the disco sitemap (`web_search`): disco's Desigual brand page (Gimaguas, Fiorucci, House of Sunny picked; MSGM unverified), Thrifted's similar-brands block (Missoni, Etro, Free People, Anthropologie, none verifiable), NeedleStar's list (6 picks).
- Co-stocking: none usable (Zappos has no Desigual, Nordstrom empty, Macy's and Bloomingdale's 403).
- So every pick has exactly one source, and NeedleStar, which reads AI-written, carries six of them. See `human_check`.

## G1–G15
| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A directory of brand alternatives is the site's purpose. Dresses lead Desigual's best-sellers. |
| G2 | PASS | Each pick's regular-price dress range, currency, shipping, duties and return terms come from its own store. None of the ranking pages has them. |
| G3 | PASS | Concrete trade-offs per pick: Gimaguas' customs and €30 return label, lemlem's order-date return clock, House of Sunny's paid tariffs vs return postage, For Love & Lemons' restocking fee, Johnny Was' final-sale markdowns. |
| G4 | PASS | No first-person experience or credentials. Ash's bio untouched. |
| G5 | PASS | Author Ash. Not YMYL. |
| G6 | PASS | Every number traces to a stored fact (trace below). The title's 9 is the real count. Superlatives checked: "more price points than anyone" (FARM Rio $55–$1,310 is the widest span), "priciest pick" (Alice + Olivia top $2,195), "closest on price" (Gimaguas, rank 1). |
| G7 | N/A | Not YMYL. |
| G8 | PASS | "for Original Prints" comes from Desigual's own "original and atypical style" plus Estampados. The body covers printed dresses throughout; Gimaguas is openly the low-print option. |
| G9 | PASS (caveat) | Serves "brands like Desigual" for dresses and answers the US price and shipping questions in the intro and FAQ. Desigual's bags and jackets aren't covered (C choice, flagged). |
| G10 | PASS | Price, conversion, shipping, duties, returns and sizes per pick, a decision guide, and 4 FAQs (US shipping, origin, luxury, similar brands). |
| G11 | PASS | Intro 73 words, opens on the reader wanting a dress that does the talking, then Desigual's US price and shipping. No preamble. |
| G12 | PASS | Prices from 2026-10-29 (Johnny Was from an earlier run the same day). ECB rate 2026-10-28. "Last checked" comes from the template. |
| G13 | PASS (risk) | Better than the top 3 (an AI overview, a general colorful-brands Substack, Reddit): real dress prices in dollars, landed-cost terms and sizes for 9 stores. Risk: evidence is thin, and a few picks (Alice + Olivia, For Love & Lemons) are feminine party labels more than print maximalists; the copy says how each differs. |
| G14 | PASS | No implied testing. Affiliate disclosure from the template. Criteria (price closeness) stated in the intro. |
| G15 | PASS | Bodies vary their openers. 7-word overlap scan against every page file: only a product name (FARM Rio x adidas Farm Dress, also on zara) is shared. |

**Estimated Page Quality:** High. The strongest reason is the verified per-store dress prices and US landed-cost terms (customs, tariffs, return labels), which no ranking page gives.
**Estimated Needs Met (dominant intent):** Highly Meets for "brands like Desigual" dress shoppers. What would make it better: a real editorial source per pick, which would also let print-led labels from maiazine's list (Celia B, Kina and Tam, Nooworks) in.

## Voice check (voice.md "What we never write")
- No process narration, dates or "its site says". No source lists in the copy. disco is never named.
- No spreadsheet sentences. Counts appear only as prices or sizes that support a point ("very few come in under $300").
- No brand verdicts, no invented experience, no hype words.
- No semicolons, em dashes or en dashes in the copy. Contractions throughout. A brand is "it".
- Each pick: answer-first opener with a named product and price, one useful thing (the adidas budget end at FARM Rio, outerwear at House of Sunny, the checks maxi at Gimaguas, the midpoint dress at lemlem), an honest catch, and a pointer to another pick. Best-for lines are use cases.

## AI-voice scan (ai-voice-avoid.md)
- Fixed: rule-of-three lists cut to two (Alice + Olivia's pitch, Fiorucci's art/music/pop culture). Repeated "is the pick for" openers varied (LoveShackFancy, Alice + Olivia). A colon reveal in House of Sunny split into two sentences. Two sentences over 30 words split (Gimaguas, House of Sunny). An unsourced causal claim (Fiorucci prices "show in pounds because") cut.
- Fixed for accuracy: "most printed dresses" for FARM Rio (LoveShackFancy has more), "the one to choose if you don't want a customs bill" for House of Sunny (US-shipping picks have none either), "most" Fiorucci dresses built on Angels/lips (now "many").
- Smell test: every sentence names a brand, product, price or term.

## Fact trace (copy → stored field)
- Intro: "most of its dresses cost $199 or less", free over $80, $119 to $699 → desigual prices.dresses (92 of 116 ≤ $199) and notes (shopping guide).
- Gimaguas: €129 / $144 median, €139 Amelia / $155, €135 Bomba checks → prices.dresses note × ECB 1.1133. Twins, 2018 → notes (og:description). Minis, neutral colours → notes (68 minis, 86 neutral of 97). DHL Express, customs, 15 days, €30 label → notes (policies). "Closest on price" → rank 1 by price distance.
- Johnny Was: XXS–3X, petite → size_range/notes. $198 Leyly, $248 Aurorya, $198–$498 → prices.dresses note. Southern California, vintage-inspired → notes (homepage). Free over $125, 30-day free returns, 50%+ off final sale → notes. Desigual $80 → anchor notes.
- lemlem: ZINA $295, NIA $395, $295–$495 → prices note. Liya Kebede, lemlem Foundation, handwoven, made in Africa → notes (meta). New Jersey, $10, free over $400 → notes (shipping policy). XS–L → size_range. 14 days from purchase date → notes (refund policy).
- Fiorucci: Lips Mini £245 / $326, Bouquet Angels Velour Mini £365 / $485 → prices note × ECB (1.328758). Milan 1967, art and pop culture, Angels → notes (About). Ships from the UK, free over $150 → notes (FAQ). 28 days → returns_days. "Most over $500" → notes (15 of 18 ≥ £425).
- FARM Rio: Dress in Happiness → notes (homepage title). Tropical Royalty $148, adidas Farm Dress $55, leather midi $1,310, median $280 → prices.dresses note. Colorfly → notes. 30-day free returns and exchanges, XL ceiling → notes. Desigual median $169 → anchor price note.
- LoveShackFancy: Solier Patchwork Print $295, Arletta $395, $495 median, 5 ≤ $300 → prices note. New York, 2013, Rebecca Hessel Cohen, travel-inspired → notes (meta). 00–14, XXS–XXL → size_range. 14 days, $9 fee, store credit → notes (refund policy).
- House of Sunny: £88–£112 / $117–$149, Gingham Balloon Cami £112 → prices.dresses (this run). London, tariffs covered, $20, free over $300, 30 days, return postage → notes. Jackets from £120 → prices.coats-jackets. UK 6–18, XS–3XL → size_range.
- Alice + Olivia: Delora Floral Radiance $395, Velia Hibiscus $495, $495 median, $2,195 → prices note. 2002, bold prints and feminine silhouettes → notes (About). Free ground shipping → notes (shipping page). US stores → us_stores (store pages). 14 days, $10 mail-in, free in store → notes (returns).
- For Love & Lemons: Abby Mini $239, Bailey Maxi $689 → notes (product JSON-LD). Laura Hall and Gillian Rose Kern, 2010, flattering cuts → notes (About). XXS–XL → size_range. $10, free over $250, 21 days from shipping, $10 fee, 25% restocking → notes.
- Closing: every figure above. "Has US stores for returns" → Alice + Olivia notes (in-store returns at US locations).
- FAQ: US store, $80, 4–10 working days, Puerto Rico/APO, 30 days free → desigual notes. Barcelona, 1984, Thomas Meyer, El Raval, upcycled jacket → notes (About us). $199 or less, Lacroix and Ottolinger, $119–$699 → prices note. Similar brands → picks above. Sources: Ahrefs matching-terms ("does desigual ship to usa", "where is desigual from", "is desigual a luxury brand"); People also ask ("What brand is similar to Desigual?").
