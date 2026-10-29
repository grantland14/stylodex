# Review: brands like Vivienne Westwood (`brands/vivienne-westwood`)

Checked 2026-10-29. Author: Ash. Category C = `jewelry`.

## Gate result (lib/pipeline.ts → judgeBrandsLikePage, now = 2026-10-29)
- **Indexable: yes.** Reasons: none. 11 of 11 picks render.
- Title: "11 Brands Like Vivienne Westwood for Orb and Pearl Jewelry".
- Order: Georgia Kemball, Chopova Lowena, Simone Rocha, Ashley Williams, Rick Owens, Tom Wood, Bea Bongiasca, Completedworks, Monies, Sophie Buhai, Solange Azagury-Partridge (price-range closeness to Westwood's $90–$1,200; every pick has 1 source).
- `npm run lint:facts`: ok.

## Evidence (the weak point)
- Ahrefs SERP: only "brands like vivienne westwood" returned positions; the other three keywords returned none. Of its top 10, one editorial list was readable (discobrands, 19 clothing-led houses). Reddit, altpress and thefashionspot were not read (refused or 403, no workaround).
- 10 picks rest on co-stocking: Dover Street Market NY's all-jewelry collection (products.json), which holds 4 Westwood pieces. Rick Owens rests on discobrands.
- So every pick has exactly one source. That's within the gate, but thin. See `human_check`.

## G1–G15
| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A directory of brand alternatives is the site's purpose. Jewelry is Westwood's largest US line (444 items vs 217 bags, 112 women's clothing). |
| G2 | PASS | The prices, duty and returns terms are read from each brand's store: US-store prices, DDP or not, return windows, earring returns. The top results (Reddit, Pinterest, discobrands) have none of it. |
| G3 | PASS | Concrete trade-offs per pick: duties on Chopova and Georgia Kemball, final-sale hoops at Sophie Buhai, single-vs-pair earrings at Completedworks, gold-vs-silver pricing at Tom Wood. |
| G4 | PASS | No first-person experience, no "we tried", no credentials. Ash's bio is untouched. |
| G5 | PASS | Author Ash. Not YMYL. |
| G6 | PASS | Every number traces to a stored fact (trace below). The title's "11" is the real count. |
| G7 | N/A | Not YMYL. |
| G8 | PASS | known_for changed to "Orb and Pearl Jewelry" so the title promises only what the page covers (jewelry). |
| G9 | PASS (caveat) | Serves the jewelry reading of the query, which the SERP supports (r/jewelry "Vivienne Westwood alternatives", Instagram "Jewelry Brands Like Vivienne Westwood"). The clothing reading (r/findfashion threads) isn't served. That's a deliberate C choice and flagged for Ash. |
| G10 | PASS | Price, currency conversion, shipping, duties, returns and sizes per pick, plus a decision guide and 4 FAQs. |
| G11 | PASS | The intro is 60 words and opens on the cart moment plus the earring-returns fact. No preamble. |
| G12 | PASS | Prices from 2026-10-29. ECB rate from 2026-10-28. The page shows "Last checked". |
| G13 | PASS | Better than the top 3: Reddit is unreadable, Pinterest is images, and discobrands lists luxury clothing houses with $ tiers and no real prices or shipping. Risk: sources are thin. |
| G14 | PASS | No implied testing. The affiliate disclosure comes from the template. |
| G15 | PASS | Read as a whole. The bodies vary their openers. It isn't a near-duplicate of a sibling page, since no other page uses `jewelry`. |

**Estimated Page Quality:** High. The strongest reason is the verified per-store landed-cost detail (duties, currency, returns) for jewelry, which no ranking page gives.
**Estimated Needs Met (dominant intent):** Highly Meets for jewelry searchers, Moderately Meets for clothing searchers. A second outside source per pick would make it better (an editorial jewelry list or another co-stockist such as SSENSE/Selfridges, both 403 today).

## Voice check (voice.md "What we never write")
- No process narration (no "we checked", no dates, no "lists name them"). The intro's sort line names the price basis only.
- No spreadsheet sentences. The counts ("one of the four original colors", "five pieces" in the FAQ) support a point and aren't the point.
- No brand verdicts, no invented experience ("feels", "runs small"), no hype words.
- No semicolons, em dashes or en dashes in the copy. Contractions are used throughout. A brand is "it".
- Every pick has an answer-first opener with a named product and price, one useful thing, an honest catch, and a comparison with another pick. Best-for lines are use cases.

## AI-voice scan (ai-voice-avoid.md)
- Fixed: four colon reveals cut to two. Anaphora on "X is for…" (Tom Wood, Bea, Monies) reworded. A rule-of-three in the intro ("pearls, orbs and punk") cut to two. A "from X to Y" span ("London charm makers to Copenhagen") removed. A tricolon in Tom Wood's shipping line split. One "not X but Y" contrast (Solange) reworded.
- Kept on purpose: one binary contrast in a Best-for line ("from New York, not London"), because it states the real shipping difference.
- Smell test: every sentence names a brand, product, price or term.

## Fact trace (copy → stored field)
- Intro: earring returns → vivienne-westwood notes (How To Return §2.1). "most of them small London studios": hq_country GB for 6 of 11 (Simone Rocha, Chopova, Completedworks, Solange, Georgia Kemball, Ashley Williams). $90 to $1,200 → prices.jewelry.
- Georgia Kemball: £100–£600 / $133–$797 → prices. Dragon £120, Cherub £180 → price note + product text. Wax carving, recycled metals, South London → notes/materials/production_model. Pendant, pin or curb chain → product text (Dragon/Cherub body_html). DHL £30, duties → notes. Westwood Mini Bas Relief Pearl Choker $260 → anchor notes.
- Chopova Lowena: Hold My Orb $238, Skull and Cross Bones $259, $198–$796 → price note. Carabiner necklaces are 10 of 19 regular items (products.json titles). Carabiner skirts, folklore/sportswear → notes (About). XXS–XL → size_range. No DDP to the US, discounted = final sale, 14 days → notes.
- Simone Rocha: $255, $715, $255–$865 → price note. NY flagship, $15, free over $600, $15 return fee, 14 days → notes. NY store → notes (About). Westwood Solid Orb $115 → anchor notes. Completedworks pearl bracelet £125 → completedworks (products.json, Classicworks A).
- Ashley Williams: £110, £160, £340 / $452 → price note. YVMIN, Floral Toilet Paper Bracelet → price note. Rings S–L → size_range. £18, 7–15 days, import charges, 14 days, sale/pre-order final → notes.
- Rick Owens: Jumbo Orb Pendant $2,385 (hematite, snake chain), Trunk Earring $270 (brass, logo on back), rings from $250 → price note + product text. "Most pieces sit under $500" → 60 of 85 regular items. Five US stores → notes. 10-day returns, NY/CA duties on top → notes.
- Tom Wood: Ear Cuff Slim $139, Maze Ring $439, up to $5,439 → price note. "Most of the range under $500" → 236 of 393. Recycled metals, Oslo → materials/notes. Free shipping DDP, 30 days, $25 fee → notes. EU 42–68 → size_range. Westwood XXS–XXL → anchor size_range.
- Bea Bongiasca: €90 / $100, Tarallo €530, €13,480 → price note. "Most under €1,000" → 189 of 233. Milan studio, enamel → notes. €35, free over €500, customs included, 14 days with an email → notes. Westwood cheapest $90 → anchor price note.
- Completedworks: Classicworks A £125 / $166 vs Westwood Mini Bas Relief Pearl Bracelet $225 → products.json + anchor jewellery page. £95 single earrings, Suburbs £235, £16,000 → price note. Free US over £100, £10 below, duties, £15 US label, 14 days → notes. "Best value for pearls" → cheapest pearl piece among the picks (Simone Rocha $255+, Monies DKK-priced).
- Monies: Copenhagen 1973, materials → notes. Fides DKK 1,144 / $170, Katherine DKK 4,422 / $659 → price note × ECB. Five figures in dollars → max DKK 128,823 = $19,189. One-of-a-kind → notes (our story). Free shipping DDP, state tax, 30 days, €20 fee, one-size rings → notes/size_range.
- Sophie Buhai: only US hq → hq_country. LA silversmiths → production_model. Free over $500 → notes. Large Reversible Hinged Hoops $550 (worn with or without texture), Small Single Layered Hoops $180 final sale → products.json. No refunds, 10 days → notes.
- Solange: Hotlips sterling silver and enamel, Classic Red £275 / $365, 1995 original four, Happy Face £395 in banana yellow and black → product text. V&A → notes. "Most of the catalogue over £10,000" → 190 of 309 priced items. EU 46–63 → size_range. £20 FedEx, duties, 14 days → notes.
- Closing: each claim restates a body fact above. "Georgia Kemball everything under $800" → max $797.25.
- FAQs: Solid Gold line of 5 and Pimlico $1,200, finish names → anchor notes. Stores in NY/LA, DSM NY stocks earrings and a necklace → anchor notes + co_stocking. Necklace prices $210, $380, $725, $1,105 → anchor notes. Dispatch 2–3 working days, sales +2–3, estimate counts from shipping → anchor notes / shipping page.

## FAQ sources (Ahrefs keywords-explorer-matching-terms, "vivienne westwood", questions, US)
"is vivienne westwood real gold" (40), "where to buy vivienne westwood orb necklace" (70), "how much is a vivienne westwood necklace" (40), "how long does vivienne westwood take to ship" (40). Skipped "is vivienne westwood costume jewelry" (150) and "does vivienne westwood tarnish" (150): no stored fact answers them.

## Open items
- `human_check` in the page file covers: C = jewelry, single-source evidence, Rick Owens known_for/hq, Ashley Williams hq, and Westwood's US shipping cost.
- No pick has an image yet (gate_gaps `image_url`). The coordinator's media step fetches them.
