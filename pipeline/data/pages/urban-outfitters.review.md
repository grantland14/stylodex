# Review: stores like Urban Outfitters

Page: `/stores/urban-outfitters` · C = `womens-clothing` (price item: women's jeans, regular price) · author Ash · checked 2026-10-29.

## Gate result (lib/pipeline.ts → judgeBrandsLikePage, 2026-10-29)

- Renders **13 of 13** picks, every pick with `pickProblems = []`: Revolve, Shopbop, Madewell, ModCloth, Forever 21, American Eagle, Lucky Brand, Brandy Melville, Salty Crush, Everlane, Afends, Kotn, Outerknown.
- **Not indexable.** Reason: `anchor missing: sizeRange, shipsTo, returnsDays, imageUrl, price:womens-clothing`. urbanoutfitters.com returns HTTP 403 to every read, so these facts need a human (see `human_check`). imageUrl comes from the coordinator's media step.
- Title: "13 Stores Like Urban Outfitters for Young Adult Fashion, Home and Beauty". The `known_for` paraphrases URBN's 10-K, and a human should confirm it.
- Four picks render without a price (sells_categories): Revolve (too few items render to stand for its range), plus Forever 21, American Eagle and Lucky Brand, where every women's jean was marked down when checked. All `price_relation` values are null because the anchor has no price.

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | It's a store-alternatives page for a "stores like" search, and it sits within the site's purpose (verified similar brands). |
| G2 | PASS | The original data is regular-price jean ranges read from each store's own feed (FX-converted for AUD/CAD), plus shipping, returns and size facts. Ranking pages (I AM & CO, Yahoo Creators) carry no prices or policies. |
| G3 | PASS | Each pick gives concrete decisions and trade-offs: return fees and windows, store-credit-only returns, duties, AU sizing at ModCloth, Lucky's comp-value pricing, one-size Brandy jeans. |
| G4 | PASS | There are no first-person experience claims. "We" appears only in the intro's ordering line. Nothing says we tried anything on. |
| G5 | PASS | Author Ash, with his own bio in lib/authors.ts. The page isn't YMYL. |
| G6 | PASS | Every number traces to a stored field or brand-file note (fact trace below). The title's known_for is flagged for human confirmation. |
| G7 | N/A | Not YMYL. |
| G8 | PASS | The title count equals the rendered picks (13). The body covers women's fashion stores. "Home and Beauty" in known_for describes the anchor, not a promise of home picks. Watch: if Ash prefers a clothing-only known_for, change it in the brand file. |
| G9 | PASS | Dominant intent (where else to shop the UO mix) is served first by multi-label stores, then by the chains the ranking lists name. Budget, fit and ethical interpretations are covered in "How to choose". |
| G10 | PASS (with gap) | Each pick says what it costs, sizes, shipping and returns. Gap: UO's own prices and policies are missing (403), so readers can't compare against UO directly. That's the indexing blocker. |
| G11 | PASS | The intro is 65 words and opens on the reader's moment. There's no preamble about UO's history (that's in the FAQ). |
| G12 | PASS | Prices and policies were read 2026-10-29. FX is ECB 2026-10-28. The "Last checked" line carries the date. |
| G13 | PASS (estimate) | The top 3 (I AM & CO, Yahoo Creators, Effortless Gent) list stores with a sentence of vibe each, no prices, policies or sizes. This page adds verified prices, return terms and fit guidance. |
| G14 | PASS | There's no client at #1 and no implied testing. Affiliate links and disclosure go through the template. |
| G15 | PASS | Every body is 110–123 words in three paragraphs. Rhythm and cross-references between picks were checked. No sibling page duplicates it. |

## Voice check (voice.md "What we never write")

- Process narration: none (no "we checked", dates, sources or "couldn't verify" in copy).
- Spreadsheet sentences: none. Counts and rankings appear only with a reason ("lowest full-price jeans here, and the narrowest fit", "twice what Madewell or ModCloth give you").
- Verdicts on brands: none. The Everlane/Shein line is a stored fact offered for ethics-minded readers, not a judgement.
- Invented experience: none. No fit or feel claims.
- Hype words: none (scanned for iconic, must-have, elevate, high quality, game-changing).
- No semicolons, em dashes, bold or italics. No sentence over 30 words (script check). A brand is "it" everywhere. The remaining "they" refers to returns, cut names or delivered items.
- Moves: answer-first opener per pick. Each pick teaches one thing (Lucky cut names, ModCloth AU sizes, Kotn duties, Everlane inseams, Madewell Insider hemming). Each has a trade-off and points to another pick where one fits better. Best-for lines name use cases.

## AI-voice scan (ai-voice-avoid.md)

Fixed:
- #1 binary contrast: "judge the price you pay, not the percentage off" became "judge the price you pay and ignore the percentage". "sister stores rather than rivals" became "its sister stores". "one look rather than a mix" became "the whole store is one look".
- #24 colon reveals: "Returns are the thing to know:", "Know this before you go looking for a store:", "One thing to check:", "One thing to weigh…:" and "built around one fabric:" were rewritten as plain sentences.
- Repeated "The catch is…" (three times) was cut to one.
- A non-sequitur ("built for Gen Z, and the denim shows it:") was rewritten.
- Intro: a 35-word sentence was split.

Remaining and accepted: one instructional colon (Madewell "Sign up… before you order:"). This is an instruction, not a reveal.

## Fact trace

- **Intro and closing:** "under $60": Brandy $42–45, Salty Crush AU$79.95 ≈ $56.23. "sells most of its denim below list price": F21 and AE notes (every women's jean marked down). "Madewell petite, tall, curvy": madewell size_range/notes. "Salty Crush goes up to a 22": salty-crush size_range. "Everlane cheapest… Afends and Kotn about the same… Outerknown most": $88 / $98–113 / $105–120 / $168–198.
- **Revolve:** Millennial/Gen Z (notes, About). Labels from the Denim page note. Free shipping and returns (free_shipping_min_usd 0, header). 30-day refund and 60-day exchange (notes). XXS–4X (size_range) vs Shopbop 00–24/XXS–3XL. "ModCloth under $90": $86.60 max.
- **Shopbop:** $78 Free People Breezy Denim Pull On Jeans and $1,550 Marni (price note). MOTHER and AGOLDE most-stocked (note). Free 2-day with no minimum, 15-day free drop-off, $10 days 16–30 (notes). Waists 22–38, sizes 00–24 (size_range).
- **Madewell:** 44 of 48 jeans at $148, Kaihara $198 (price note). Petite/Tall/Curvy/Plus 14W–24W (notes). Insider free shipping, $5–$7 otherwise (notes). Free in-store hemming for Insiders (jeans price note, About page). Labels We Love (notes). All jeans own label (price note).
- **ModCloth:** Dangerfield, embroidered or printed, $72.60–$86.60, AU 4–20 (price note). Pittsburgh dorm 2002 and outside labels (notes). XS–4X with plus section (notes). $14 return fee, Checkout+, free shipping over $150 (notes).
- **Forever 21:** LA-born and "standout fashion at unbeatable value" (homepage note). XS–XXL with plus section (size_range). Dresses $24.99 (dresses price entry). Closed US stores 2025 and relaunched online (Wikipedia note). US-only, free over $50, 30 days, $9.99 fee, clearance/final sale non-returnable (notes). Denim marked down (2026-10-29 note).
- **American Eagle:** Site title (note). Rise/wash/stretch filters, Curvy versions, the named Curvy jean (note). 60-day returns, $5 online returns unless Real Rewards Level 3 or cardmember, free over $75 (notes). Madewell/ModCloth 30 days.
- **Lucky Brand:** 1990 and premium denim/Americana (Our Story). US stores (locator note). Cut names and rises from product names (jeans note). Free ground over $85 (shipping note). Comp value may be an estimate (jeans note). Clothing and accessories for men and women (homepage title note).
- **Brandy Melville:** $42 Gracie, $45 Saylor, sizes XS/S or S (price note). $8.50 ground and no threshold, 30 days from purchase, US billing address (customer-service note). Own label only (homepage note).
- **Salty Crush:** Australian (Pty Ltd, help center). Affordable, size-inclusive (meta). AU$79.95 ≈ $56.23 (price, fx). Cindy washes and cut list (feed titles in price note). Sizes 6–22 (size_range). Ships from Sydney, $10 or free over $150 USD, 3–9 days (shipping note). Store credit only, $19.95 label (returns note).
- **Everlane:** Published costs and audited factories (production_model, notes). $88 Way-High Curve Jean to $148 and the 27"/29" inseams (price note). 30-day returns, free in store, $7 mail (notes). $8 standard, ships CA/GB/AU (notes). Shein acquisition agreed May 2026 (Wikipedia note).
- **Afends:** Byron Bay and organic hemp/streetwear (homepage note). Marsha AU$139.99 ≈ $98.45, Alyra AU$159.99 ≈ $112.52 (price note). XXXS–XXL and XS–XL = US 2–10 (notes). 12+ business days, $17.50 under $150 USD (shipping note). Refunds full-price only (returns note).
- **Kotn:** Egyptian cotton, Nile Delta, purchases fund schools (meta note). Taba CA$148 ≈ $105.36 in 8 washes, range to CA$168 ≈ $119.60 (price note, feed options). Duties covered on US orders (shipping note). XS–XL (size_range). Ships GB/AU (ships_to). 15-day refund, 30-day exchange or credit, sale final (returns note).
- **Outerknown:** "Born in the ocean" (homepage note). Beachcomber $168, Craftsman $198, unisex vendor (price note). 98% preferred fiber and FLA accreditation (About note). Free over $125, ships CA/GB/AU, full-price returns free for 30 days, $5.95 sale returns (notes).
- **FAQ:** "What is" comes from the 10-K target customer, merchandise and exclusivity lines (urban-outfitters notes). "Who owns" comes from parent_company and the Philadelphia HQ (Wikipedia note), plus Anthropologie and Free People (10-K). "Founded" is 1970 Philadelphia, Free People store, renamed and incorporated 1976 (Wikipedia note). "Near me" is 253 stores: 177 North America, 76 Europe, plus Middle East franchises (10-K).
- **FAQ source queries** come from one Ahrefs keywords-explorer-matching-terms call (US, "urban outfitters", questions): what is urban outfitters (200), who owns urban outfitters (300), when was urban outfitters founded (60), is there an urban outfitters near me (200).

## Estimates

- **Estimated Page Quality:** High. Its strongest reason is that every pick carries verified regular-price ranges and return and shipping terms that none of the ranking lists have.
- **Estimated Needs Met (dominant intent):** Highly Meets once the anchor's own prices and policies are filled in. The one thing that would make it better is UO's women's jeans range, so readers can see which picks are cheaper. Until then it's Moderately to Highly Meets, and the page is noindex.

## Open items for Ash

1. **Anchor human check** (blocks indexing): prices, sizes, shipping and returns, plus confirmation of the known_for wording.
2. **No-price picks:** Forever 21, American Eagle and Lucky Brand use sells_categories because every women's jean was marked down when checked. That's within the gate, but a stricter reading of "regular-price only" would drop them until a full-price read. Without them the page still has 10 picks.
3. ASOS (3 sources), PacSun, Anthropologie and Free People (2 each) are the best-sourced candidates the bot walls blocked. A human read could add them in place of the ethical-list picks.
