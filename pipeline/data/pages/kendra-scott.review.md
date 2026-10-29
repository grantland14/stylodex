# Review: brands like Kendra Scott (`brands/kendra-scott`)

Checked 2026-10-29. Author: Ash. Category C = `necklaces`.

## Gate result (lib/pipeline.ts → judgeBrandsLikePage, now = 2026-10-29)
- **Indexable: yes.** Reasons: none. 15 of 15 picks render (the cap).
- Title: "15 Brands Like Kendra Scott for Colorful Stone Pendant Necklaces".
- Order: Chan Luu, Ettika (2 sources each), then Nadri, Jennifer Zeuner, Missoma, Anna Beck, Sterling Forever, BaubleBar, TAI, Brinker & Eliza, Lele Sadoughi, Yam, Melinda Maria, Stella & Dot, Adornmonde (1 source each, by price-range closeness to Kendra Scott's $50–$5,695).
- `npm run lint:facts`: my 19 brand files pass. The run fails on one file that isn't mine: `loft.known_for` contains "for" (the rule about anchor known_for in a title suffix). Left for the Loft page owner.
- `npm test`: 30/30 pass.

## Evidence (the weak point)
- Ahrefs SERP: "brands like" and "stores like" returned rows, "similar to" returned only spam and TikTok, "alternatives" returned none.
- One readable editorial list: The Zoe Report (8 brands, updated Feb 2024). AJ Luxe's "14 Best Kendra Scott Alternatives" 404s. Glamour refused WebFetch. Reddit not read. GMA and SheShe Show mention Kendra Scott but recommend nothing as an alternative.
- Co-stocking: Kendra Scott's FAQ names Nordstrom an authorized retail partner, and Nordstrom's women's jewelry brand filter lists Kendra Scott plus 11 of the picks. It's a whole-department filter, so only fashion-jewelry-priced brands were taken forward.
- 2 picks have 2 sources, 13 have 1. See `human_check`.

## G1–G15
| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A directory of alternatives is the site's purpose. Necklaces are Kendra Scott's hero line (Elisa leads its bestseller sort; the "similar to" SERP is all Elisa look-alikes). |
| G2 | PASS | Regular-price necklace ranges, base metals, duties, free-shipping thresholds and return windows come from each store. The Zoe Report has 2024 prices and no shipping or returns. |
| G3 | PASS | A concrete trade-off per pick: 10-day returns (TAI, Yam), made-to-order waits (Brinker & Eliza, Yam), $250 shipping bar (Anna Beck), CZ instead of color (Nadri), $7.95 returns (Missoma). |
| G4 | PASS | No first-person experience or testing. Ash's bio untouched. |
| G5 | PASS | Author Ash. Not YMYL. |
| G6 | PASS | Every number traces to a stored fact (trace below). Title count 15 is the real count. |
| G7 | N/A | Not YMYL. |
| G8 | PASS | known_for "Colorful Stone Pendant Necklaces" so the title promises what the page covers (necklaces). |
| G9 | PASS (caveat) | Serves the necklace reading of the query. Earring and bracelet shoppers are served only indirectly (most picks sell all four). Flagged in human_check. |
| G10 | PASS | Price, base metal, shipping, returns and one named product per pick, a decision guide and 4 FAQs. |
| G11 | PASS | Intro 61 words, opens on the worn-plating moment, no preamble. |
| G12 | PASS | Prices from 2026-10-29. The page shows "Last checked". |
| G13 | PASS | Beats the top results: AJ Luxe is gone, Reddit and Glamour are unreadable, The Zoe Report is two years old with no shipping or returns. Risk: thin sources. |
| G14 | PASS | No implied testing. Affiliate disclosure from the template. |
| G15 | PASS | Bodies vary their openers (one "is the pick", one "our pick", one "is the solid-gold pick"). No other page uses `necklaces`. |

**Estimated Page Quality:** High. The strongest reason is the base-metal and returns detail per store (plated brass vs gold over sterling vs solid gold, 10 to 90 days), which no ranking page gives.
**Estimated Needs Met (dominant intent):** Highly Meets for necklace shoppers, Moderately Meets for "Kendra Scott dupes" generally. A second editorial source per pick would lift it.

## Voice check (voice.md "What we never write")
- No process narration: no "we checked", dates, "its About page says" or "the brand says". The intro's sort line describes the order only.
- No spreadsheet sentences. "Most of its necklaces start under $100" and "very little starts under $100" carry a price point, not a count.
- No brand verdicts, invented experience or hype words.
- No semicolons, em dashes, en dashes or colons in the copy. Contractions throughout. A brand is "it".
- Every pick opens answer-first with a named product and price, teaches one thing (base metal, made-to-order wait, duty-paid pricing, chokers so measure your neck), names a catch and points to another pick.
- The disco directory wasn't in this SERP, so there's nothing to keep off the page. No secondhand or thrift shops.

## AI-voice scan (ai-voice-avoid.md)
- Fixed: six "X is the … pick" openers cut to three. Two "from everyday pieces to fine jewelry" spans (#40) reworded. "Cheapest way in" for BaubleBar replaced, because Stella & Dot and TAI start lower. "Closest in spirit" for Melinda Maria replaced with its real price band.
- Kept on purpose: the "rather than brass" contrast in Chan Luu, Missoma and Anna Beck, because base metal is what the page is about. Product option lists of three (Ava in turquoise, rose quartz or mother of pearl) are store facts.
- Smell test: every sentence names a brand, product, price, metal or term.

## Fact trace (copy → stored field)
- Intro: plated over brass → kendra-scott notes (FAQ). 15 → picks. Elisa → kendra-scott price note.
- Chan Luu: Camille Turquoise $275 (turquoise, citrine), Diana Multi $390 (iolite, quartz, garnet, peridot), Diana White Pearl $350 in 18k gold plated sterling → notes. LA 1996, traditional handwork → notes. $175 min → prices. Free FedEx 2-Day $200+, 15 days from ship date → notes. Anna Beck $65 → anna-beck prices.
- Ettika: most under $100 (178 of 231), Desert Bloom $60, Marquise Crystal Cord $40, pearl chokers $250 → price note/notes. LA, finishes over zinc/steel/brass, nickel and lead free → notes. 14 days, $110 → notes. KS $85 → kendra-scott. BaubleBar 30 days → baublebar.
- Nadri: $55 Large Cross, $5,699 18KT chain, CZ Cross $65 best-selling, Chloe $68 → notes/price note. Own factory, metals, "mistaken for diamonds" → notes (About). $75, 14/30 days → notes.
- Jennifer Zeuner: Inga $185, half-inch letter charm, gold-plated silver or sterling, Hollis $154 gold-plated brass → notes (product text). 2005, spiritual twist, layering → notes. Very little under $100 → 2 of 199. 14 days, final sale → notes. TAI Opal Glow $55 → tai.
- Missoma: London demi-fine, recycled 18k vermeil on silver, duties included → notes. Lucy Williams Malachite $140, December Birthstone $179, rope $85, $9,989 → notes. KS vermeil = sterling + 18k gold → kendra-scott notes. $150, 90 days, $7.95 → notes. Longest window → max returns_days among picks.
- Anna Beck: Bali, 18k plated over sterling, 2003 trip, Balinese dotting pendant, engravable → notes/product text. Turquoise Beaded $195, Namaste $385 (pink tourmaline or apatite) → notes. $250 highest threshold among stated, 30 days → notes. Ettika turquoise $60 → ettika.
- Sterling Forever: Jamie $40, Calder Aquamarine $136, Helene Bezel opal tennis $290, top $434 → notes. 2005, 15-year-old, lifetime guarantee → notes. 60 days, $200, $5.95 → notes. Melinda Maria $115 → melinda-maria.
- BaubleBar: most under $100 (312 of 368, the most of any pick), Chase $48, Mini Jane Lapis $68, 14K Gold Birthstone Charm $80 → price note/notes. KS Mini Elisa $55 → kendra-scott. New York, trend-forward, no own storefront → notes. Nordstrom stocks both → evidence. $75, 30 days from ship date → notes.
- TAI: most under $100 (193 of 308), Opal Glow $55, Hamsa $65, Nightmood $70, Paperclip Charm Chain $25, CZ tennis $525 → feed. $100, 10 days → notes (policy page; FAQ says 30, see human_check). Sterling Forever 60 → sterling-forever.
- Brinker & Eliza: mother/daughter, by hand to order, 24k antique gold plated brass, 1–10 business days → notes. Best Is Yet To Come $98, Mermaid Parade $398, top $448, most above KS everyday (4 of 214 under $100) → notes/feed. 15 days → notes. BaubleBar Lexi charm collar $28 → feed.
- Lele Sadoughi: Malachite $125, Turquoise Ruffle Heart Bolo $150, Baroque Pearl Collar $95, top $385, Three Strand Pearl $225, Corfu $295 → feed. Headbands, clips, bags → notes (site nav). $75, 14/21 days → notes. Melinda Maria 30 → melinda-maria.
- Yam: Morgan Thomas, Queens, late mother → notes. Gold Sun $60, Posy Chain $145, Bonar Pearl $180; most are chokers (14 of 18) → price note. 8-day production, 10-day exchange/credit returns → notes.
- Melinda Maria: $75–$250 → prices. KS band → 366 of 483 at $50–$249.99 (kendra-scott price note). She's a Boss Blue Opal $115, Blue Opal collection → notes. Heavy plating, hand-set, E-coat → notes. Lifetime Guarantee, $75, 30 days → notes.
- Stella & Dot: Kate Gemstone Blue $70, Ava Paperclip $55 in three stones, Power Stone $19.99, Naomie $225, most under $100 (43 of 54) → feed. Brand Ambassadors → notes. $100 continental US, 30 days → notes. Smallest of the lower-priced picks: 54 vs Ettika 231, BaubleBar 368, TAI 308, Sterling Forever 144.
- Adornmonde: 14k solid gold, Atticus $342, Luca $606, Knoxx $382 lab diamond, earring-led, 24/7 wear, nickel and lead free → notes. Free US shipping, $320 international, 14 days, sale final → notes. Missoma Malachite $140 → missoma.
- Closing: each claim restates a body fact. "Most to choose from under $100": BaubleBar 312, TAI 193.
- FAQs: plating/vermeil/14k → kendra-scott notes and metal facet. $50–$250 most, Elisa $70, Mini Elisa $55, $5,695 lab-diamond top → price note. Plating can fade → FAQ note. kendrascott.com $85, stores, partners Nordstrom/Dillard's/Macy's/Anthropologie, retailer return policies apply → notes.

## FAQ sources (Ahrefs keywords-explorer-matching-terms, "kendra scott", questions, US)
"is kendra scott real gold" (1,600), "how much is a kendra scott necklace" (600), "does kendra scott tarnish" (1,800), "where can i buy kendra scott jewelry" (150). Skipped "who is kendra scott" and the other biography questions (off-topic), and "is kendra scott waterproof" (no stored fact). People also ask rows are stored in the page file but weren't needed.

## Open items
- `human_check` covers: C = necklaces, thin evidence (Nordstrom whole-department filter), anchor us_stores null (locator unreadable), the ranking pushing Alex and Ani to 16th, and conflicting policy pages at TAI, Stella & Dot and Jennifer Zeuner.
- No pick has an image yet (gate_gaps `image_url`). The coordinator's media step fetches them. Yam is a Wix store (no products.json), so it will get no product photo.
- New brand files: kendra-scott, chan-luu, ettika, nadri, jennifer-zeuner, missoma, anna-beck, sterling-forever, baublebar, tai, brinker-eliza, lele-sadoughi, yam, melinda-maria, stella-dot, adornmonde, alex-and-ani, 8-other-reasons, above-average-studio.
