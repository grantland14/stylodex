# Review: brands like Imogene + Willie (`/brands/imogene-and-willie`)

Author: Ash. Checked 2026-10-29. Category: jeans (men's and women's; I+W's hero product and largest collections).

## Gate result
`judgeBrandsLikePage` via `lib/pipeline.ts` (tsx, now = 2026-10-29): **indexable: true, reasons: []**.
9 of 9 picks render: rogue-territory, samurai-jeans, hiroshi-kato, freenote-cloth, naked-and-famous,
todd-shelton, 3sixteen, iron-heart, levis. Title: "9 Brands Like Imogene + Willie for American-Made Jeans".
`npm run lint:facts`: ok.

## Quality gate (G1–G15)
| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A US shopper pricing $235–$325 jeans is the page's reader; every pick is a jeans maker that ships to the US or has US stores. |
| G2 | PASS | No page-one list of I+W alternatives exists (Reddit refused, the rest off-topic). Picks come from I+W's own stockists' denim pages plus one directory, with prices, sizes and terms read from each store today. |
| G3 | PASS | Concrete per-brand detail: fabric weights, model codes (CS/RS), fit names, refund vs exchange windows, duties, shipping thresholds. |
| G4 | PASS | No first-person wear or testing claims. Ash's bio untouched. |
| G5 | PASS | Author "Ash". Not YMYL. |
| G6 | PASS | Fact trace below; title count matches renderable picks (9); known_for from I+W's own store description. |
| G7 | N/A | Not YMYL. |
| G8 | PASS | "9 Brands Like Imogene + Willie for American-Made Jeans": all nine sell jeans; the body covers each. |
| G9 | PASS | Intent (where else to buy jeans like I+W) answered from the first pick; price relation stated per pick. |
| G10 | PASS | Price, sizes, shipping and returns per pick, a How to choose guide, and FAQs on price, where to buy and legitimacy. |
| G11 | PASS | Intro 68 words, no preamble; bodies 111–128 words. |
| G12 | PASS | All prices read 2026-10-29 from the stores; the page shows the Last checked date. |
| G13 | PASS | Beats what ranks (Stag's brand list, Buck Mason lists, Reddit): real US prices and per-brand trade-offs. Held at 9 picks, under the 10–15 target, because four 3+-source brands had no readable official US store. |
| G14 | PASS | No implied testing; affiliate links go through /go/ (template). |
| G15 | PASS | Read as a whole; no sentence shared with gap.json (the only sibling with an overlapping pick, Levi's). |

**Estimated Page Quality:** High. Strongest reason: real regular prices, sizes and return terms from nine stores, with honest trade-offs that compare the picks with each other.
**Estimated Needs Met:** Highly Meets. What would make it better: RRL, Momotaro and Fullcount (3–4 sources each) if a readable official US source turns up.

## Voice check (`voice.md` "What we never write")
- Process narration: none. Intro gives the sort order ("how often they're stocked or named alongside it, then by how close the price is") without method or dates.
- Spreadsheet sentences: none. Rankings appear only with the reason in the same sentence ("closest price match ... right inside I+W's range").
- Verdicts on brands: none. Trade-offs name an attribute (shipping fee, returns window, store credit, ships from Japan).
- Invented experience: none.
- Hype: none. No semicolons, em dashes, bold or italics. Brands are "it". Contractions throughout. One colloquialism at most.
- Moves present: answer-first opener with a named product and price per pick; one taught thing per brand (Stanton is the best-seller, CS/RS codes, fit names, Original 13 options, weight range); cross-pick pointers (Rogue to Kato, Samurai to Iron Heart, Kato to Todd Shelton, Todd Shelton to 3sixteen, Iron Heart to Samurai, Levi's to Freenote and Rogue).

## AI-voice scan (`ai-voice-avoid.md`)
- Fixed in drafting: dropped unverifiable superlatives ("biggest waist on this list", "heaviest on this list", "best pick for women"); cut a three-item code list (rule of three) down to two; split a five-sentence paragraph; replaced "a far bigger company than anyone else here" with the stored store count.
- No "not X, it's Y", "less X, more Y", "rather than", "whether you're", trailing significance tags or tidy inspirational endings found. "less" appears only as plain comparison ("a little less than").

## Fact trace (copy → stored field)
- I+W $235–$325, waists 23–36 women / 27–40 men, free domestic shipping, 30-day returns, free exchanges, Nashville + Austin shops, free chainstitch hems, 1-year free repairs, LA sewing room, US mill, since 2009, washed and rigid pairs → `brands/imogene-and-willie.json` prices.jeans, size_range, free_shipping_min_usd, returns_days, notes (our-story, made-in-usa, locations, denim-repair, refund-policy).
- Rogue Territory: Stanton 15oz Stealth $265, Stanton best-selling fit, cut and sewn in LA, most at $265, washed to $375, waists 27–40, $12 shipping under $400 → `rogue-territory.json` prices.jeans note, notes (about, payment-shipping).
- Samurai: Osaka, develops own fabric, made in Japan, S0510XXII 15oz Regular Straight $401, $376–$527 US store, 15oz–21oz, waists 28–40 and to 46, ships from Japan, duties on buyer, 14-day return request, 19oz/21oz $413–$426 → `samurai-jeans.json`.
- Hiroshi Kato: 4-way stretch selvedge, Japanese denim cut in LA, Pen Slim Indigo Raw 10.5oz $228, $228–$368, free continental-US ground shipping, waists 29–40, 21-day returns, no international returns → `hiroshi-kato.json`.
- Freenote: $285–$325, Avila Slim Taper 14.5oz Kaihara $285, made exclusively in US, California, fit names Avila/Belford/Wilkes, waists 29–38, 7-day refund then exchange/credit to 30 → `freenote-cloth.json`.
- Naked & Famous: $141–$495, many at $176, Easy Guy Natural Indigo Selvedge $176, Montreal, cut and sewn in Canada from Japanese fabric, no washes or distressing, True Girl/Bestie from 23, men's to 44, $10 US shipping, free hemming, duties paid except made-in-Japan, store credit returns → `naked-and-famous.json`.
- Todd Shelton: Original 13 $320, all-cotton 13oz Japanese selvedge, own NJ factory, four thigh fits, two rises, waists 28–40, lengths 26–38, factory plans for exchanges, free swaps/refunds 30 days, Classic 12 $280, US only, ships in 7 business days → `todd-shelton.json`.
- 3sixteen: New York, made in USA, CS-101x $250, first jean 2008 with Kuroki Mills, to $485 CT-102xn, CS/RS codes, waists to 42, free US shipping over $50, NY and LA stores, 10-day returns, ships within 2 business days → `3sixteen.json`.
- Iron Heart: 14oz–25oz, 14oz Slim Straight Cut $335, $335–$500 USD, started 2002 heavy denim for motorcyclists, ships from UK, free over US$200, waists to 44, 28-day returns → `iron-heart.json`.
- Levi's: 1853 San Francisco, stores in 40 states, casual wear and accessories for men, women and kids, about 3,300 stores → `levis.json` notes (levistrauss.com, store locator).
- FAQ: Blue Owl Seattle, Stag Provisions Nashville/Dallas/Austin → I+W stockists page (anchor notes). Questions from Ahrefs matching-terms (questions) for "imogene willie".

## Open items (human_check in the page file)
Co-stocking as evidence (Totem nuance); disco as the only source for 3sixteen, Todd Shelton and Iron Heart; Iron Heart USD presentment vs VAT; Samurai US price about 2x its yen price; RRL, Momotaro and Fullcount blocked; anchor ships_to from Shopify's rest-of-world zone.
