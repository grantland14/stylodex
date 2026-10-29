# Review: stores like Club L London (steps 2–5)

New page, 2026-10-29. Author: Ash. url_prefix `stores`, slug `club-l-london`, category `dresses`.
Copy written against the current `pipeline/voice.md`.

## Gate (lib/pipeline.ts → judgeBrandsLikePage, now = 2026-10-29)

- Renderable picks: **3 / 3**. Title: "3 Stores Like Club L London for Occasion and Evening Dresses".
- `pickProblems` returns `[]` for all 3. `missingAnchorFacts` returns `[]`.
- **Not indexable**: `only 3 publishable picks (need 6)`. Renders noindex and stays out of the
  sitemap until three more verified, sourced picks exist.
- `npm test` passes (0 fail); `npm run lint:facts` ok.

## Picks

| Rank | Pick | Source | Price row | How it passes |
|---|---|---|---|---|
| 1 | House of CB | D | $195–$269 (31-dress rendered sample, earlier run), similar | ships US free, US stores (West Hollywood, Nordstrom) |
| 2 | BEC + BRIDGE | D | $260–$680 (289, full US feed, earlier run), similar | US store in USD, ships US, free over $250 |
| 3 | Orseund Iris | D | $395–$3,400 (6, full feed, earlier run), similar | ships US |

D = the disco directory's Club L profile ("If you like Club L": Meshki, House of CB, BEC + BRIDGE,
Orseund Iris). Unsigned directory with Ash's OK: evidence only, never named, linked or quoted, and
none of its wording used in a fact field (Club L's `known_for` comes from its own store
description). All brand files were reused as they stood; no other page's price was overwritten.

Ranking: every pick is single-source, so rank follows price closeness to Club L's $60–$650
(median $160).

**Why so few.** Of the four keywords, only "stores like club l london" has a SERP. Its one
on-topic page is a Reddit dupe thread (unreadable). Elle UK and Glamour UK (unreadable) and
Wardrobe Oxygen (no Club L mention) are general roundups, which don't count. Further searches
found only scraped similar-site lists (similarsitesearch, instya, tscentral), TikTok script
shells, Knoji (403), Similarweb, Tracxn, Thingtesting (unsigned, no OK), Hirestreet (rental
marketplace) and Apart Style (never a source). Co-stocking at ASOS (503) and Next was not used:
hundreds of brands per dress department, too broad, and not a recommendation.

Not picked: Meshki (disco #1, 403 on meshki.us, human check, would rank #1 or #2); the 19
other Apart Style pool brands (no outside source).

## Anchor

Club L London verified from clubllondon.us (US store, USD, duties included): full all-dresses
feed (12 pages: 2,830 dresses, 2,181 regular-price in stock, $60–$650, median $160), meta.json
(US, UK and CA stores; Manchester), About ("Since 2007"), delivery ($10 / $18 / $39, no free
threshold), returns (14 days to register, 28 to arrive, label fee deducted, no exchanges), size
guide (charts US 0–20; dresses in stock offer US 0–16, stored as `size_range`). kind `brand`
(own label only). `human_check`: none for the anchor.

## FAQ sources (Ahrefs)

One call: `keywords-explorer-matching-terms`, "club l london", US, questions, volume desc, 42 rows.

| Used | Question (US volume) | Answered from |
|---|---|---|
| Yes | where is club l london based (30) | club-l-london hq_country, notes (meta.json Manchester; US store USD, duties included) |
| Yes | what is premium shipping club l london (20) | club-l-london notes (delivery page) |
| Yes | what is club l london return policy (10) | club-l-london returns_days, notes (returns page) |

Skipped: "is club l london legit / a good brand / good quality / fast fashion" (verdicts, no stored
fact), "does club l london run small / true to size" (fit is experience; the only fit data is the
directory's, never used as wording), "where does it ship from", restocks, contact.

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | "Stores like Club L London" for US shoppers is the site's purpose; fashion scope. |
| G2 | PASS | No outside wording. Substance is each store's own facts: Club L's full-feed price spread and US terms, pick prices, sizes, refund rules. |
| G3 | PASS | Original data: Club L's 2,181-dress US range and median, its duties-included US pricing, label-fee returns, US 0–16 stock vs a US 0–20 chart; picks' refund and shipping rules. |
| G4 | PASS | No first-person experience; nothing worn or tested is implied. |
| G5 | PASS | Author Ash, bio in lib/authors.ts. Not YMYL. |
| G6 | PASS | Every number traces to a brand file (fact trace below). |
| G7 | N/A | Not YMYL. |
| G8 | PASS | Title states the real count (3) and Club L's own positioning. |
| G9 | PASS | Intent (where else to buy Club L-style dresses) answered first in each pick; intro says none is cheaper. |
| G10 | FAIL | Three picks, all pricier, can't cover the dominant intent; many readers want a cheaper alternative and the page can only say Club L is still the cheapest. Fix needs more sourced, verified picks (human check). Page is noindex. |
| G11 | PASS | Answer-first per pick; no preamble. |
| G12 | PASS | All prices checked 2026-10-29; "Last checked" line carries the date. |
| G13 | FAIL | Honest estimate Medium: three picks is thinner than page-one lists. Noindex until fixed. |
| G14 | PASS | Affiliate links via /go/ with disclosure (template); no implied testing. |
| G15 | PASS | Read as a whole; no sentence shared with Mirror Palais, Windsor or other pages with these picks (6-gram scan: only stock phrases like "is the one to try if"). |

## Voice check (voice.md "What we never write")

None present: no process narration, no counts as the point of a sentence, no verdicts, no invented
experience, no hype. Brands are "it". No semicolons, em dashes or bold. One colloquial aside
("Fair warning"). Each pick opens answer-first with a named product and price, teaches one thing
(House of CB: which dress for which occasion; BEC + BRIDGE: start at the $380 cowl-neck maxis;
Orseund Iris: knit is its strength), has an honest trade-off, and points to another pick.

## AI-voice scan

Fixed: a rule-of-three in the closing (cut to two); an unsupported praise line on BEC + BRIDGE
("made with more care"); "satin" for Club L (not a stored fact, changed to sequin and fishtail);
"$160 midis" (the median dresses are maxis, changed to "dresses"); one 33-word sentence split.
Sentences 4–26 words, mixed. Smell Test: each sentence names a price, size, place or policy.

## Fact trace

- Intro: label fee → club-l-london notes (returns); "none of them is cheaper" → picks' min prices
  ($195, $260, $395) vs Club L min $60.
- House of CB: designed in London, store on Melrose (West Hollywood), Nordstrom concessions, free
  standard US delivery, 28-day returns, sale refunds to gift card → house-of-cb notes; $195–$269,
  Thalina wine draped halter maxi $255, Magdalena black strapless midi $269 → house-of-cb prices
  (dresses note). Club L median $160, 14 days → club-l-london prices, returns_days.
- BEC + BRIDGE: produced in Sydney → notes (Our story); $260–$680, Mirabelle/Mabel cowl-neck maxis
  $380, median $380 → prices note; US 0–16 → size_range; free over $250 → free_shipping_min_usd;
  14-day refunds, return shipping and duties on the customer → notes. Club L embellished maxis to
  $650 (Gemini, Lyric) → club-l-london prices note.
- Orseund Iris: Brooklyn, many designs made in New York, Williamsburg showroom Thursday–Sunday →
  notes; Off-Season Knitted Raglan Mini $395, La Bohemia Knit Halter $555, Night Out Maxi $3,400 →
  prices note; XXS–XL → size_range; 14 days, $15 domestic restocking fee → notes; knitwear in its
  positioning → notes (homepage meta).
- Closing: Club L's $60 and $80 dresses (Siren, Salome) → club-l-london prices note.
- FAQ: Manchester, USD, duties included; $18 Premium 2–3 days, $10 Standard 5–7, $39 Next Day before
  11.30am ET Mon–Thu; 14/28 days, original payment, US label fee, no exchanges → club-l-london notes.

## Estimates (Part 9)

- **Estimated Page Quality:** Medium. Strongest reason: the facts are original and accurate, but
  three picks can't serve the query.
- **Estimated Needs Met (dominant intent):** Moderately Meets. The fix: three more verified,
  sourced picks (Meshki first, then anything the Reddit dupe thread recommends).
