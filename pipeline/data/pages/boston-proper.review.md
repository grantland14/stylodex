# Review: stores like Boston Proper (`stores/boston-proper`)

Run 2026-10-29. Category `dresses`. Boston Proper is `kind: brand` (own label, plus a small
"Brands We Love" marketplace of outside labels). Its positioning ("bold, unforgettable fashion
for women 40+") is a style, not a product. Dresses lead its homepage title and meta, its dresses
collection holds 1,125 own-label products, and the sibling pages (Talbots, WHBM, Coldwater Creek)
compare on dresses, so their shared price rows apply.

## Gate (`lib/pipeline.ts` → `judgeBrandsLikePage`, tsx, now = 2026-10-29)

- **indexable: true**, reasons `[]`.
- Renderable picks: **15 of 15**, every pick `[]` problems.
- Title: "15 Stores Like Boston Proper for Bold, Glamorous Fashion Over 40".
- Anchor verified, every brand fact filled (new file). Dresses $90–$325 from the full Shopify feed
  (75 available regular-price own-label dresses; 1,021 of 1,125 own-label dresses marked down).
- `price_relation`: Pink Ice `cheaper` (max $89.99 < $90); Coldwater Creek, J.Jill, Venus, Talbots,
  WHBM, ModCloth, bebe, Chico's `similar`. Soft Surroundings, Ann Taylor, New York & Company,
  Lane Bryant, Loft and Revolve render without a price (null).
- No other page's price was overwritten. bebe (new file) is a pick on no other page.

## Evidence

Three outside sources count: plaintips.com (10 entries), bestunder250.com (5, bylined), and
storessimilarto.com (12, bylined, SEO-heavy). Two-source picks: Coldwater Creek, J.Jill, Venus;
the other 12 have one source each. Nada Manley pairs WHBM and Boston Proper the other way round
(Boston Proper as the WHBM alternative), so it isn't counted. Not in the disco directory (404).
Apart Style pool: 0 rows. **Human check:** storessimilarto.com was kept as editorial; eight picks
rest on it alone. If it's ruled an automated directory, 7 picks remain (still above the floor).

## Quality gate (G1–G15)

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A "stores like Boston Proper" list is the job of a store directory. |
| G2 | PASS | Regular dress prices from each store's own feed or page, size systems (Chico's 000–4 = US 0–22, bebe XXS–XXL = 00–16), return windows and fees. None of the three source pages give prices or terms. |
| G3 | PASS | Each pick has an attribute trade-off with a number (bebe refunds only in 21 days, ModCloth $14 return fee, Pink Ice stops at L, NY&Co store credit only). |
| G4 | PASS | No first-person experience or testing. Author Ash, bio untouched. |
| G5 | PASS | Author "Ash" set. Not YMYL. |
| G6 | PASS | Every number traces to a brand-file field or price note (fact trace below). |
| G7 | N/A | Not YMYL. |
| G8 | PASS | Count = 15 rendered picks. "Bold, Glamorous Fashion Over 40" drafted from Boston Proper's own About copy (bold fashion for women 40+, glamor). |
| G9 | PASS | Each body opens with the store, what it's best at for a Boston Proper shopper, and a price range or named dress. |
| G10 | PASS | Price, sizes, shipping, returns and stores per pick, pointers between picks, How to choose by size, budget, look and try-on. FAQs answer stores, ownership and fit. |
| G11 | PASS | Intro 63 words; bodies 110–129; closing 93; FAQ answers 29–39. |
| G12 | PASS | All prices and terms read or merged today; the template carries the date. |
| G13 | PASS | Beats plaintips and the scraped lists on page one: they give no prices, sizes or terms, and several name closed stores (Wet Seal, The Limited). |
| G14 | PASS | No implied testing. Affiliate links via `/go/` per template. |
| G15 | PASS | Picks cross-refer (sizes → Lane Bryant/Venus/Soft Surroundings, shine → bebe/WHBM, try-on → Talbots/J.Jill/Chico's). Sentence overlap with sibling pages sharing picks (talbots, coldwater-creek, white-house-black-market, loft, ann-taylor) is under 0.5 Jaccard per sentence after rewrites. |

- **Estimated Page Quality:** High. Strongest reason: current regular dress prices, size systems
  and return terms for 15 stores that no ranking list has.
- **Estimated Needs Met:** Highly Meets. What would make it better: prices for the six unpriced
  picks, and a second outside source for the single-source picks.

## Voice check (`pipeline/voice.md` "What we never write")

- Process narration: none. Unpriced picks don't explain why.
- Spreadsheet sentences: none. Counts carry a reason (400-plus Lane Bryant stores = try on first;
  Pink Ice's $50 threshold = one dress gets free shipping).
- Verdicts: none. Trade-offs are attributes (return fees and windows, size ceilings, no stores).
- Invented experience: none. Cut "a 2 here is a large" (no stored mapping), "you won't find sequins
  at J.Jill" (no stored fact), "about half the money" for Venus (no stored anchor median).
- No semicolons, em dashes, bold or italics. Contractions throughout. Brands are "it".

## AI-voice scan (`ai-voice-avoid.md`)

- Colon reveals: cut from Coldwater Creek and Talbots; two left (Chico's sizing was rewritten
  without one; ModCloth returns, NY&Co size tip).
- Rhetorical question in the closing rewritten as a statement.
- Anaphora: "X is the pick…" openers cut from four to two (Coldwater Creek, Revolve).
- Rule of three: pairs in lists of attributes; three-plus lists are store names only.
- Sentence lengths all ≤30 words; paragraphs 1–4 sentences.

## Fact trace (copy → stored field)

- Intro/FAQ: no stores, size chart to 18 (XL), Chico's 2011 → Brentwood 2016, stores closed 2015,
  Boca Raton, XXS–XL = 0–18, run small/big notes, free same-style exchanges, beaded/rhinestone
  dresses, Beyond Travel → `boston-proper` (new: price note, `notes`, `size_range`).
- Coldwater Creek: own label $119.95–$159.95, All Angles Knit $119.95, Scrolled Stretch Velvet
  $159.95, Komarov $298–$388, Mixed Print Caftan $139.95 → price note. Petite/plus to 3X, 60 days,
  $9.95, no stores, no Canada → `notes`, `size_range`.
- J.Jill: $109–$149, Marled Mock-Neck $109, Faux-Suede Shirtdress $149 → price note. XS–4X,
  petite/tall, stores, 60 days, free from $150, Canada → `notes`, `ships_to`.
- Venus: $39–$168, 159 of 162 under $100, Jacquard Halter Maxi $109, Casual Tank $39, Niki $168,
  bebe vendor → price note. 1982, swim separates, 2–24, 30 days, $9 fee → `notes`.
- Talbots: $99.50–$299, Polished Ponte Sheath $169–$189, RSVP Paisley Lace $269–$299, ranges by
  size type → price note. Misses/petite/plus sizes, US stores, modern classic → `size_range`,
  `notes`, `known_for`.
- WHBM: $140–$295, Knit Crepe Belted Sheath $170, Strapless Pleated Chiffon Gown $275–$295 →
  price note. Black and white with pops of color, 00–18 petite, 60 days, stores, Knitwell → `notes`.
- ModCloth: $49–$329, median $89, GUNNE SAX Beth $329, Dangerfield/Retrolicious → price note.
  Garden Party Tapestry Midi $89 → `product-images.json`. 4X, $150, 30 days, $14 → `notes`.
- bebe: $139–$189, Lace Cap Sleeve Midi $139, Soutache V-Neck Maxi $189, bandage/bodycon sections,
  XXS–XXL = 00–16, free over $150, 30 days, refunds 21 days, $12 → `bebe` (new). J.Jill $8.95
  label → `j-jill.notes`.
- Chico's: $109.50–$189.50, Travelers Classic $109.50, Embellished Stretched Tweed $189.50 → price
  note. 000–4 = US 0–22 (4 = XXL/20–22), 000P, 500+ boutiques, 60 days, $7 mail, full-price
  boutique returns → `notes`. Former owner of Boston Proper → `boston-proper.notes`.
- Pink Ice: $17.99–$89.99, Ethereal Maxi $49.99, Venetian Halter Maxi $69.99 → `product-images.json`,
  price note. LA, Love Stitch/Flying Tomato, women and juniors, $50, Canada, XS–L, customer pays
  return postage → `notes`.
- Soft Surroundings: knits/cotton/linen with artful details, maxi/midi/short, 2–18/2P–18P/18W–24W,
  select tall, 60 days, $9.95, Coldwater Creek owner, shared policies, no stores, US only → `notes`.
- Ann Taylor: tailored workwear, 1954, Work Dresses/Suits nav, petite/tall/curvy, free from $150,
  200 stores, Knitwell → `notes`. Loft fits → `loft.size_range`.
- New York & Company: affordable workwear and going-out → `known_for`. Digital-first, $99, US only,
  runs large, XS–XL with most dresses S–L, 30 days store credit/exchange, $7.99 → `notes`.
- Lane Bryant: 10–40, tops/pants/dresses, Knitwell, 400+ US stores, Lena Bryant 1904 → `notes`.
  Talbots 24W, Soft Surroundings 24W → their `size_range`.
- Loft: Petite LOFT Versa Crepe Drape Strappy Mini $120 (regular) → `notes`. 00–18/XXS–XXL,
  petite/tall/curvy, 358 stores, US/CA/GB/AU, $99, 30 days at price paid, work and play → `notes`,
  `ships_to`, `known_for`.
- Revolve: LIONESS Original Sin $69, MAJORELLE Tracy Gown $328, Norma Kamali Halter Turtle
  Fishtail Gown $275 (none on sale) → `notes` (windsor run). XXS–4X, free shipping and returns,
  30/60 days, Millennial and Gen Z → `notes`.

## Rejected

Lulus, Wet Seal, The Limited, Eileen Fisher, Anthropologie (brand files unverified today), Lands'
End (dresses not confirmed), Donna Karan New York (ambiguous label), Karen Millen (US grid
script-rendered, no brand file), Amazon (marketplace). Details in the page file's `rejected`.

## Notes

- `npm run lint:facts` flags three other agents' brand files at the time of writing
  (2020ave, dicks-sporting-goods, shop-style-shark); boston-proper and bebe pass.
