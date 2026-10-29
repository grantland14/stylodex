# Review: brands like Mac Duggal (steps 2–5)

New page, 2026-10-29. Author: Ash. url_prefix `brands`, slug `mac-duggal`, category `dresses`.
Copy written against `pipeline/voice.md`.

## Gate (lib/pipeline.ts → judgeBrandsLikePage, now = 2026-10-29)

- Renderable picks: **11 / 11**. Title: "11 Brands Like Mac Duggal for Beaded Evening and Prom Gowns".
- `pickProblems` returns `[]` for all 11. **Indexable: true**, reasons `[]`.
- `npm test` 30/30 pass. `npm run lint:facts` ok.
- No brand image yet for the anchor or the 10 new brands (coordinator's media step); the gate
  doesn't require one.

## Evidence

Only "brands like mac duggal" has a US SERP. "stores like", "alternatives" and "similar to" returned
nothing. The SERP has no readable editorial "like Mac Duggal" list: Reddit, Facebook, brides.com,
Quora and the department-store sitelinks (Bloomingdale's, Bergdorf, Neiman, Saks) all refuse
WebFetch, and the two readable articles (Effie's blog, Betches substack) don't frame brands as Mac
Duggal alternatives.

So the evidence is **co-stocking** (enrich.md §1.4b) at four formal-dress stores that sell Mac
Duggal, plus the disco directory profile:

| Code | Source | Kind |
|---|---|---|
| PG | PromGirl, Shop Dresses by Designer (SERP #8) | co_stocked |
| DW | The Dress Warehouse dresses page, By Brand menu (AI Overview sitelink) | co_stocked |
| EF | Effie's Boutique, Mac Duggal collection, Shop By Designer menu (store behind SERP #2) | co_stocked |
| CC | Couture Candy, All Designers (not in the SERP; a pool store that sells Mac Duggal) | co_stocked |
| DS | discobrands.co Mac Duggal profile (never named on the page) | serp_comention |

**Reviewer call:** co-stocking is weaker than an editorial "brands like X" list. It's the only
outside evidence the SERP allows here. Without CC the page would have 8 picks (Tadashi Shoji, Alex Evenings and Maggy London rest on
it alone).

## Picks

| Rank | Pick | Sources | Regular dress price (count) | Relation |
|---|---|---|---|---|
| 1 | Terani Couture | PG DW EF CC | $112.50–$2,612.50 (652) | similar |
| 2 | Amarra | PG CC | $198–$4,998 (1,234) | similar |
| 3 | Aidan Mattox | DW CC | $295–$695 (33) | similar |
| 4 | Adrianna Papell | DW CC | $129–$399 (410) | similar |
| 5 | Retrofête | DS | $298–$3,198 (523) | similar |
| 6 | Self-Portrait | DS | $425–$1,390 (752, US store) | similar |
| 7 | Tadashi Shoji | CC | $198–$998 (221 ready-to-ship) | similar |
| 8 | Alex Evenings | CC | $149–$329 (267) | similar |
| 9 | Betsy & Adam | PG | $139–$379 (388) | similar |
| 10 | Blondie Nites | PG | $119–$329 (103) | similar |
| 11 | Maggy London | CC | $79–$218 (185, existing file) | cheaper |

Ranking: independent sources, then closeness of price range to Mac Duggal's $238–$4,998.
Aidan Mattox has no store of its own (aidanmattox.com redirects to adriannapapell.com/pages/aidan-mattox),
so its parent's store, prices feed and terms are used and `parent_company` is Adrianna Papell.

Not picked (reasons in the page file): most co-stocked prom labels sell only through retailers:
Jovani, La Femme, Faviana, Ava Presley, Mori Lee, Dave & Johnny, Ladivine/Cinderella Divine,
Alexander by Daymor ($0 or placeholder catalogue prices), Colors Dress/Marsoni and Clarisse
(wholesale), Nina Canacci and Jasz Couture (retailer-led), Ashley Lauren (returns via retailers).
Alyce Paris excludes US orders, Portia & Scarlett ships only to AU, Tarik Ediz sells in lira with
no US shipping found, Saiid Kobeisy sells in AED only, Sherri Hill has nothing purchasable online,
LaQuan Smith has 2 regular-price dresses. Rachel Allan and Zhivago 403; Rina di Montella and
Andrea & Leo didn't respond. Johnathan Kayne, Feriani, MNM, Lara, Juliet unchecked.

Verification count: more than 25 candidates were probed, but most only with one meta.json or
homepage request to see whether they sell direct. Full checks were done for the 10 new picks.

## Anchor

Mac Duggal verified from macduggal.com: full Shopify feed (3,800 products, 1,265 regular-price
in-stock dresses at $238–$4,998, median $598), The Brand page, FAQ, shipping and international
pages, returns page (14 days, $20 label fee), size chart (0–30, petite chart), homepage JSON-LD
and meta.json (Burr Ridge, Illinois, US). `known_for` "Beaded Evening and Prom Gowns" from its own
meta ("luxury evening gowns, cocktail dresses, prom dresses") and "our hand-beaded dresses".

`human_check` (in the page file):
1. **Last Chance**: 1,625 dresses tagged "Last Chance" have no compare_at markdown, but the FAQ says
   Sale and Last Chance items "have already been discounted". Excluded (min $238, not $198).
2. **Amarra returns**: 5 days to start a return vs 14 days for it to arrive. Copy says 5 days.
3. **Terani .50 prices**: older untyped styles carry prices like $2,237.50 with no markdown and no
   sale collection, so counted as regular. The copy only quotes the current typed lines and a $650
   gown.
4. Sherri Hill (would rank high if it sells direct in the US), Rachel Allan and Zhivago (403).
5. Mac Duggal US stores: locator didn't load; copy claims none.

## FAQ sources (Ahrefs keywords-explorer-matching-terms, "mac duggal", questions, US)

| Question | Source query (volume) |
|---|---|
| Who is Mac Duggal? | who is mac duggal (150) |
| Where can I buy Mac Duggal dresses? | where to buy mac duggal dresses (90) |
| Is Mac Duggal a luxury brand? | is mac duggal a luxury brand (50) |
| Does Mac Duggal make petite dresses? | does mac duggal make petite dresses (20) |

Skipped: the fit questions ("do mac duggal dresses run small", 150) need worn experience; "where
are mac duggal dresses made" has no stored fact.

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A brands-like page in Stylodex's core scope; the reader wants other evening and prom labels. |
| G2 | PASS | Prices, sizes and terms come from each store's own feed and policies, which the ranking Reddit and retailer pages don't carry. FAQ from Ahrefs questions, answered from stored facts. |
| G3 | PASS | Concrete decisions per pick: ready-to-ship vs special order (Tadashi), exchange instead of refund (Betsy & Adam), .97 final sale (Adrianna Papell), lettered sizing (Retrofête). |
| G4 | PASS | No first-person experience or testing claims. "We" not used for any experience. |
| G5 | PASS | Author Ash, bio in lib/authors.ts. Not YMYL. |
| G6 | PASS | Every number traces to a brand file (trace below). One correction made during review: Terani's evening/pageant ranges recomputed from in-stock regular items only. |
| G7 | N/A | Not YMYL. |
| G8 | PASS | Title count is the real renderable count; the page covers beaded evening and prom gowns. |
| G9 | PASS | Each pick opens with what it's best at for a Mac Duggal shopper, with a named product and price. |
| G10 | PASS | Price, sizes, shipping and returns per pick, a How to choose guide, and where-to-buy FAQ. |
| G11 | PASS | Intro 75 words, no method narration; bodies 125–147 words. |
| G12 | PASS | All prices read 2026-10-29; the template shows "Last checked". |
| G13 | PASS | Page one is Reddit threads, store category pages and a boutique blog. This is the only page with real regular prices, sizes and return terms per alternative. |
| G14 | PASS | No implied testing. Affiliate links go through the template's /go/ with disclosure. |
| G15 | PASS | No shared picks with Windsor or Selkie; no sentences reused from sibling pages. |

**Estimated Page Quality:** High. Every pick carries checked regular prices, sizes and terms from
its own store.
**Estimated Needs Met (dominant intent):** Highly Meets for "brands like Mac Duggal". It would be
better with one editorial source naming these labels as Mac Duggal alternatives, and with Sherri
Hill if it sells direct.

## Voice check (voice.md "What we never write")

- Process narration: none (no "we checked", dates, "its About page says").
- Counts as the point of a sentence: none. Counts appear only inside prices and sizes.
- Verdicts on brands: none. Trade-offs are about attributes (Amarra's return window, Terani's
  sizes, Blondie Nites' final-sale cheap end).
- Invented experience: none. No "runs small", no feel words.
- Hype: none ("iconic", "must-have", "high quality" absent).
- No semicolons, em dashes or bold. Brands are "it". Contractions throughout. One colloquialism
  at most ("Here's the useful bit").

## AI-voice scan (wildcard-seo reference/ai-voice-avoid.md)

Found and fixed: a rule-of-three return list in Amarra (split into two sentences), a triple
"lace, beading and sequins" (cut to two), a three-way closing list (split), a 31-word sentence in
Maggy London (split), "the grown-up sister" (implied a company link that isn't stored), "people buy
instead" in the intro (changed to what the evidence shows: labels stocked next to it). No
"delve", "elevate", "in today's", stacked hedges or false ranges remain.

## Fact trace (copy → stored field)

- Intro: "more than $500" and "Collection line runs into the thousands" → mac-duggal prices note
  (555 of 1,265 at $500 or less; Collection $698–$4,998).
- Terani Couture: since 1990 → founded_year; $650 Strapless Mikado Ball Gown, prom $388–$963,
  evening $438–$1,200, pageant to $1,850, mother of the bride $488–$1,213 → prices note; size 24,
  10 days → size_range, returns_days; Tadashi 0P–18P → tadashi-shoji size_range.
- Amarra: $198–$4,998, Style 89604 $618 → prices; New Jersey, quinceañera → notes (meta.json);
  00–24 → size_range; 5 days, no exchanges, quinceañera non-returnable, $50 flat → notes.
- Aidan Mattox: $695 ceiling, $495 and $350 gowns → prices; $1,798 Collection median →
  mac-duggal prices note; long and midi gowns, hand-beaded → notes; $250, 30 days, 20 →
  free_shipping_min_usd, returns_days, size_range; Adrianna Papell to 30 → its size_range.
- Adrianna Papell: under $400, $169 and $399 gowns → prices; $238 Mac Duggal low → anchor price;
  0–30, plus → size_range; 30/60 days, .97 final sale → notes.
- Retrofête: life-of-the-party, New York, SoHo store → notes, us_stores; $698, $2,998 → prices;
  XXS–XXL → size_range; $250, 14 days, $15 → notes.
- Self-Portrait: $620, $425–$1,390 → prices; London, Han Chong, 2013 → notes, founded_year;
  free delivery, no duties or taxes, 14 days, US 14 → notes, size_range; Terani 24, Mac Duggal 30.
- Tadashi Shoji: 0P–18P, plus versions → size_range, has_plus; $338, $198–$998, $998 Piers →
  prices; special order non-returnable, free ground, free UPS returns, 15 days → notes.
- Alex Evenings: under $330, $239 Paula, $329 ballgown → prices; sizes → size_range; separates →
  notes (meta.json); $250 / $15, $15 return fee → notes; Betsy & Adam $12 → its notes.
- Betsy & Adam: median $259 vs $598 → prices; Vanessa $359, Soley $249 → prices; NJ warehouse
  within 24 business hours, $12, 14 days, $12.95, 30-day exchanges → notes; sizes → size_range.
- Blondie Nites: $119–$329, Raquel $179, Tinsley $329 → prices; juniors 0–15, 14W–22W →
  size_range, notes; $100-or-less final sale, 14/30 days, $12 → notes.
- Maggy London (existing file): Andrea Gown $218, Cinna $198 → prices note, product-images.json;
  Freyda $178 → product-images.json; desk-to-dinner → notes; sizes, $100, 30 days, $11.95 → fields
  and notes.
- Closing: $695, $399, under $400 → prices; petite and 30 → size_range fields.
- FAQ: New Delhi 1960, Ieena for Mac Duggal, Creative Director → anchor notes (The Brand page);
  Burr Ridge, Illinois → notes; free ground contiguous US, CA/GB/AU → ships_to, notes; boutiques
  and department stores → notes; $238–$4,998, Collection from $698 → prices; 0P–18P, 0–30 →
  size_range.
