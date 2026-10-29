# Review: brands like Baggu (brands/baggu)

Author: Ash. Checked 2026-10-29. Category: bags (new slug, needs a `stylodex.categories` row).

## Gate result (lib/pipeline.ts + judgeBrandsLikePage, now = 2026-10-29)

```
indexable: true reasons: []
title: 12 Brands Like Baggu for Reusable Nylon Bags
renderable: 12 of 12 (every pick: no problems)
```
Script: `npx tsx <scratchpad>/baggu/scripts/gate_check.ts`. Also `npm run lint:facts` ok, `npm test` 30/30 pass.

## Evidence
- Charm.io "5 Brands like Baggu" (SERP, all of "brands like", "stores like", "similar to"): 5 brands, 4 picked (GOT BAG, Sans Beast, STATE Bags, Rad Revolution); TWELVElittle rejected (every bag sold out).
- Disco directory, two pages (22 brands like Baggu, 12 bags like Baggu): one independent source. Counts as evidence per Ash's 2026-10-29 rule; never named, linked or quoted in copy. 8 picks.
- Unreadable: Reddit (3 threads), Wirecutter (403), Stylecaster (tollbit gate, not followed), CN Traveler (read: no alternatives), Thingtesting (empty), TikTok, Instagram. "baggu alternatives" had no SERP.
- Co-stocking: Shopbop stocks Baggu but its Bags category (2,481 items) is too broad to count; other retailers refused or rendered nothing.
- Every pick is single-source. That's the main weakness of this page.

## G1–G15
| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A shopping directory page for people searching "brands like baggu"; fits the site's purpose. |
| G2 | PASS | Regular-price bag ranges, medians and named products read from each store's own feed today; ranking by median price against Baggu's $58; none of that is on the ranking pages (Charm.io has no prices). |
| G3 | PASS | Concrete prices, trade-offs (Rad Revolution credit-only returns, Sans Beast 7-day window, Cravar US duties, STATE's $200 free-shipping bar) and comparisons between picks. No experience claimed. |
| G4 | PASS | No first-person experience, testing or credentials. "We" is not used for any claim of handling products. |
| G5 | PASS | Author Ash, bio in lib/authors.ts. Not YMYL. |
| G6 | PASS | Every number traces to a stored field or note (fact trace below). Reasons rewritten where a claim overreached (Rad Revolution and Sans Beast "makes in", Cravar "made in Indonesia" removed: not stated). |
| G7 | N/A | Not YMYL. |
| G8 | PASS | "12 Brands Like Baggu for Reusable Nylon Bags": 12 renderable picks; known_for from Baggu's own "began in 2007 making durable reusable shopping bags". |
| G9 | PASS | Dominant intent (other bag brands like Baggu) answered by pick 1; each pick says what it's best for and how it differs. |
| G10 | PASS | Price, shipping, returns and a "How to choose" guide; FAQ covers where to buy, where made, materials, founding. |
| G11 | PASS | Intro 55 words then picks; no preamble. |
| G12 | PASS | Prices are today's regular prices; "Last checked" shows the date. |
| G13 | PASS | Top results are a 5-brand list with no prices (Charm.io), empty or unreadable pages. This one has 12 priced, compared picks. |
| G14 | PASS | No client, no implied testing; affiliate disclosure is the template's. Each pick carries a trade-off. |
| G15 | PASS | Read through as a whole; no near-duplicate wording with sibling pages (new category, new brands). |

**Estimated Page Quality:** High. Strongest reason: every pick has its real regular-price bag range, a named product with price, and its shipping and return terms, compared against Baggu's own.
**Estimated Needs Met (dominant intent):** Highly Meets. Would be better with a second independent source per pick (Reddit/Wirecutter, a human read) and Uniqlo, which Wirecutter compares directly.

Honest caveat on the pick mix: several disco picks are weaker fits for someone who loves cheap nylon (Madewell, Everlane, Cravar, A.P.C. are step-ups at $98+). They're ranked last by price and the copy says so.

## Voice check (voice.md "What we never write")
- Process narration: none (no "we checked", dates, sources, "our checks"). The disco directory isn't mentioned.
- Spreadsheet sentences: rankings appear only with the reason in the same sentence ("the lowest here, so two of them still cost less than one Medium Crescent"; "the shortest window here, and you pay to post it back").
- Verdicts on brands: none. Trade-offs are about returns, shipping thresholds, currency and price.
- Invented experience: none ("feels", "runs small", "we tried" absent).
- Hype: none ("iconic", "must-have", "elevate", "high quality" absent; "signature" used only where the brand's own copy says it: Herschel's Little America, Rains' bum bag).
- No semicolons, em dashes, en dashes, bold or italics in copy (scripted check). Contractions throughout. Brands are "it".

## AI-voice scan (ai-voice-avoid.md, 49 patterns + Smell Test)
Fixed in drafting:
- #1 binary contrast: "waterproof, not just water-repellent" (Rains) → "if your bag has to cope with real rain".
- #3 rule of three: Topo's "belt bags, waist packs and backpacks" → two items; Cravar's "10 days, by post, you pay" → two clauses.
- #24 colon reveal: Topo "lean outdoors: …" → plain clause.
- Overreach on durability ("something that lasts" in intro, removed).
- An FAQ clause echoed disco's own wording ("still anchors the range") → replaced with Wikipedia's $8 launch bag fact.
Remaining scan: no vocabulary from §13–15, no "From X to Y" openers (price ranges read as words per voice.md), sentences under 30 words, paragraph lengths vary.

## Fact trace (copy → stored field)
- Baggu: Medium Nylon Crescent $56, Small $52, Standard Baggu $16, Nylon Shoulder Bag $62, Everyday Cloud Bag $68, Medium Recycled Leather Flat Crescent $138, Recycled Leather Shoulder Bag $190, median $58 → baggu.json prices[bags].note; free shipping $50, $4.95 restocking fee → free_shipping_min_usd, notes (faq); denim Crescent bags → notes/collections (Small/Medium Denim Crescent). FAQ: stores, official sites, factories, audits, recycled percentages, deadstock, 2007 founders, $8 bag → baggu.json notes.
- Topo Designs: median $59, Mini Shoulder Bag $49 (fanny-pack strap), recycled nylons, 2008 Fort Collins basement, lifetime warranty, free shipping $100, refunds → topo-designs.json prices/notes.
- Rad Revolution: Baby Cloud $60, Mega Cloud $68 (bottle pockets, stroller buckle), median $55, Washington, baby gear for moms, free shipping $75, 30-day shop-credit returns → rad-revolution.json.
- GOT BAG: recycled main materials, Indonesian coastal clean-up, Sling Bag $45, bags $35–$99, Tote Bag Large $84, backpacks $105–$199, Germany (Mainz), Oregon/Las Vegas warehouses, free $75, no exchanges → got-bag.json. Herschel free exchanges → herschel-supply-co.json notes.
- Herschel: Heritage Crossbody Twill $45, Classic Large Tote Twill $50, Little America $140 (signature), Nylon Heritage Tote $100 (organizers, trolley sleeve), limited lifetime warranty, Vancouver, free $75, $5 return fee, median $90 → herschel-supply-co.json.
- Muji: Jute Bag Medium $4, Cotton My Bag XL $7.90, Water Repellent Shoulder Bag $24.90 (recycled polyester), median $19.90, simple unbranded goods, US stores, free $80 → muji.json.
- STATE Bags: giving, Kane Backpack $98 (K–3, best-selling), Graham Tote $128, Luna Mini Crossbody $98 (90% recycled), Brooklyn, from $98, median $123, free over $200, $11.50 economy, 30 days $5 fee → state-bags.json.
- Rains: Danish, waterproof fabric, Tote Bag Micro $80, Bum Bag Micro $65, USD store, all 50 states, free $129, median $150, return-label fee → rains.json.
- Madewell: $118–$298, The Shopper Tote $198, Maren Shoulder Bag $128, Ellis Small Shopper $148, Ellis Shopper $218, 30-day returns, ships US/CA/GB/AU → madewell.json.
- Everlane: ReNew Transit Backpack $98 (15-inch exterior laptop pocket, luggage strap), Canvas Mini Lug Tote $168, Canvas Lug Tote $228, median $228, free $75, 30 days → everlane.json.
- Sans Beast: name meaning, Xtra Overflow Tote AU$79 ≈ $56 (16oz canvas), Mini Sanctuary AU$199 ≈ $140, Cute-ility AU$329 ≈ $231, recycled synthetics and bio-based fabrics, 7-day returns, customer pays return post → sans-beast.json; FX in page fx.
- Cravar: Slim Tote waxed twill $160, $160–$525, Jakarta, Jogjakarta tannery and brass, shipping included, US duties, 10-day postal returns at buyer's cost → cravar.json.
- A.P.C.: Diane Shopping Bag $215 (water-repellent poplin, silkscreen logo), Laure Tote $145 (Japanese denim), Jade Tote $190 (cotton or denim), up to $895, median $550, US and Canada only, 14 days, $10 label fee → a-p-c.json.
- How to choose: restates the above picks' prices and returns.
- FAQ sources (Ahrefs keywords-explorer-matching-terms, "baggu", questions, US): "where to buy baggu" (200), "where are baggu bags made" (30), "is baggu sustainable" (50), "when was baggu founded" (30). Skipped "are baggu bags waterproof" (200): no stored Baggu fact; "is baggu a good brand", "who owns baggu", sales questions: verdicts or no fact.

## Human checks (also in the page file)
Uniqlo's bags listing (would be a 13th pick), Sans Beast US shipping cost, Madewell full bags range (15 of 64 tiles), Baggu range completeness (headless store, cards from 11 collections), a human read of the Reddit threads and Wirecutter.
