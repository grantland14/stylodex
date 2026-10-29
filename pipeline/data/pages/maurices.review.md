# Review: stores like maurices (`stores/maurices`)

Run 2026-10-29. Category `jeans`. maurices sells its own label (m jeans by maurices) next to outside
denim brands; its homepage title leads with Denim, its About page calls it "a trusted go-to for jeans,
tees and special occasion outfits", and jeans are its only stored regular-price line ($34.90–$108).
Matches the sibling Buckle and Aeropostale pages. Kind left `retailer` in the brand file (its jeans page
stocks Silver Jeans Co., KanCan, Flying Monkey and edgely); the coordinator called it `brand`, flagged in
`human_check`.

## Gate (`lib/pipeline.ts` → `judgeBrandsLikePage`, tsx, now = 2026-10-29)

- **indexable: false**. Reason: `anchor missing: returnsDays`.
- Renderable picks: **15 of 15**, every pick `[]` problems.
- Title: "15 Stores Like maurices for Fashion, Denim and Plus Sizes".
- Why the anchor gap: maurices takes returns "anytime" with a receipt or order number, so there is no
  day count (Ash, 2026-10-29: no "unlimited" value, same as Nordstrom). Everything else on the anchor is
  present.
- Price labels: 9 `similar`, Charlotte Russe `cheaper`, Universal Standard `pricier`; Lane Bryant,
  American Eagle, Loft, Eloquii and Dressbarn have no jeans price (every jean marked down), so null.
- Open question for a human: job-board reposts of a local news item say maurices is winding down US
  retail (one Ohio store closed April 18, 2026). Unconfirmed; the store is live and selling. See
  `human_check`. Nothing about it is in the copy.

## Evidence

- Ahrefs SERP: only `stores like maurices` returned rows (the other three keywords: none). Kept La Passion
  Voutee (23 stores) and MsDressly's reviews blog (16; a store's own blog, article never names MsDressly).
- WebSearch: eTechShout (9), ViralTalky (7), PlainTips (10). Dropped: Similist, storeslike.com,
  SimilarStores (templated), Fantabulosity (maurices only in comments), Blowra (503, expired TLS
  certificate, not bypassed), Tumbleweed Thrift (403), Reddit and Facebook (not readable). No disco
  profile for maurices (404).
- Independent sources per pick: Lane Bryant 4, American Eagle 4, Loft 3, Old Navy 2, Ashley Stewart 2,
  Eloquii 2, Dressbarn 2, the other eight 1 each. Torrid (4) is unverified (403) and first in the
  human-check queue.

## Quality gate (G1–G15)

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A "stores like maurices" list is what a store directory is for. |
| G2 | PASS | Regular jeans prices for 10 stores, size scales, fit-line names (Lane Bryant, Charlotte Russe), inseam options, return windows and fees: none of the ranking lists carry these. |
| G3 | PASS | Concrete trade-offs per pick: Dressbarn refunds in store credit, Ashley Stewart has no free-shipping minimum, Eloquii needs $125, Charlotte Russe stops at 15, Buckle's waists stop near 38. |
| G4 | PASS | No first-person experience or testing. Author Ash, bio untouched. |
| G5 | PASS | Author "Ash". Not YMYL. |
| G6 | PASS | Every number traces to a brand-file field or note (trace below). |
| G7 | N/A | Not YMYL. |
| G8 | PASS | Count = 15 rendered picks. Suffix is maurices' own homepage-title wording. |
| G9 | PASS | Each pick opens with what it's best at for a maurices shopper, most with a named jean and price. |
| G10 | PASS | Price (10 of 15), sizes, returns, shipping and a who-should-go-elsewhere line per pick, plus How to choose and four FAQs. Gap: no price for five picks. |
| G11 | PASS | Intro 69 words; bodies 110–129; closing 111; FAQ answers 27–37. |
| G12 | PASS | All prices and terms read today or reused from same-day brand files. |
| G13 | PASS | Beats La Passion Voutee, MsDressly and eTechShout on specifics: they give no prices, size scales or return terms. |
| G14 | PASS | No implied testing; affiliate links via the template's `/go/`. Shared parent companies (Knitwell, Gap Inc.) stated openly. |
| G15 | PASS | Read as a whole; picks point to each other; no sentence shared with the Buckle, Aeropostale or Loft pages (6-gram check against their copy; only product names recur, and those were swapped where another product was stored). |

- **Estimated Page Quality:** High. Strongest reason: same-day regular jeans prices and the size,
  inseam, shipping and return terms for each store, none of which the ranking lists carry.
- **Estimated Needs Met:** Highly Meets once indexable. Would improve with prices for the five
  marked-down stores and a Torrid entry.

## Voice check (`pipeline/voice.md`)

- Process narration: none (no "we checked", dates, or what couldn't be read). No-price picks render without explanation.
- Spreadsheet sentences: none. Store counts (400+, 358, 74, 190+, 440) back a reason (trying on).
- Verdicts on brands: none. Invented experience: none ("rigid" and "stretch" are in the product names).
- Hype words, semicolons, em dashes: none. Contractions throughout; brands are "it".
- Best for lines: use cases, lowercase, no full stop; all rewritten away from sibling-page lines.

## AI-voice scan (`ai-voice-avoid.md`)

- #24 colon reveal: Lane Bryant fit-names sentence rewritten.
- #5 anaphora: three "X is the pick for" openers; Aeropostale and Universal Standard reworded.
- #3 rule of three: Old Navy lines cut to two; closing brand list cut to two.
- #8 rhythm: three same-length runs fixed (Old Navy, Charlotte Russe, Eloquii, Universal Standard).
- #40 "from X to Y": only price and size ranges, which voice.md asks for.
- Sentences ≤30 words; no paragraph over four sentences.

## Fact trace (copy → stored field)

- Intro: maurices $34.90–$108 → `maurices.prices.jeans`; size 24 → `maurices.size_range`.
- Lane Bryant: 12–40, Genius / No-Gap Curvy Fit / Tighter Tummy Fit, Genius Straight Leg Jean → `lane-bryant.notes` (maurices run); 400+ stores → notes (Knitwell careers); Old Navy 00–30 → `old-navy.notes`.
- American Eagle: jeans-led title, Classic/Curvy, AE Low-Rise Classic Straight Jean, 60 days, $5 mail fee, Level 3/cardholders, $75 → `american-eagle.notes`, `free_shipping_min_usd`; maurices X-Short/X-Long → `maurices.notes` (size chart); Gap inseams → `gap.notes`.
- Loft: Rivete, Rivete Mid Rise Wide Leg Jeans → `loft.notes`; 00–18, XXS–XXL, petite/tall/curvy → `size_range`; 358 stores, 30-day receipted refund, store credit, $9.95 → notes; ships abroad → `ships_to`; Knitwell sister → `parent_company`.
- Old Navy: $34.99–$69.99, Curvy High-Waisted Wow Wide-Leg, $44.99–$54.99 OG/Rockstar, Wow $34.99–$39.99 → price note; 00–30, three inseams, petite/tall, free 30-day returns, $50 → notes; own label only → notes ("Everything on the rack" via brand=on API); maurices Silver Jeans Co. → `maurices.notes`.
- Ashley Stewart: $54.50–$79.50, Fearless High Rise Skinny Jeans $54.50, Splatter Print $79.50, 10–36 → price note (this run); 74 stores/21 states, free 30-day returns, $9.95 economy, no free minimum, 28+ online by mail → notes.
- Eloquii: "Fashion first, fit obsessed", US 10–32, petite/tall bottoms, Naomi and Yvette jeans, 30 days from ship date, free with e-gift card via Happy Returns, $125 → `eloquii` (new file, this run).
- Dressbarn: Westport Signature Straight Leg and Bootcut 5-Pocket jeans, plus versions → notes (this run); 4–18, XS–XL, 0X–5X, petite → `size_range`; 48 states, 30-day store credit, customer pays postage → notes; maurices 4X → `maurices.notes` (plus 0X–4X).
- Aeropostale: $64.95/$69.95, Rhinestone Heart jean, low-rise names → price note and notes; 000–20 short/long → `size_range`; $25, 60 days, 44 states + PR → notes.
- Nordstrom Rack: $39.97–$79.97, Democracy Ab Technology Ankle Skinny, Joe's The Mia, brand list → price note; 28W petite/plus → `size_range`; $89, 40 days, $9.95 per label, free in store → notes.
- Gap: $79.95–$99.95, High Rise Cheeky Straight → price note; 000–20 three inseams, petite/tall, one 2X, 46 states, $50 rewards → notes; Old Navy sister, 30 → `old-navy`.
- Target: $28–$74.99, Universal Thread High-Rise Vintage Straight $38, UT $28–$40, Wild Fable $28–$35, Levi's top → price note and notes; 90 days, 365 Target brands with receipt → notes.
- Forever 21: $38–$44, straight-leg drawstring $38 and low-rise bootcut → price note; maurices own label $44.99–$49.99 → `maurices.notes`; no US stores (closed by May 2025), 50 states, $50, XS–XXL + Plus, $9.99 return fee, clearance final, denim mostly shorts and skirts → notes.
- Charlotte Russe: $12.99–$29.99, Stretch Mid Rise Push Up Skinny Jean, most $20, embellished $25 → price note; Brooklyn/London/Paris fit names → notes; 191 branded US stores → notes; jeans 00–15, no plus, $100 → `size_range`, notes.
- Universal Standard: 00–40, Seine $118 in 27/30/32 inseams, Bae Boyfriend Crop $138, $118–$188 → price note and notes; free exchanges for a year, free US shipping on full price, 30 days, $4.50/$7.50 → notes.
- Buckle: KanCan and Flying Monkey at both → `buckle.notes`, `maurices.notes`; $54.99 Very J, $308, Miss Me Universal Boot $129, BKE/Miss Me/Levi's → price note and notes; 440 stores/42 states → notes (10-K); 60 days, $6.99 mail → notes; waists 22–38 → `size_range`.
- Closing: picks and figures above.
- FAQ: similar stores → this page's picks (question from Google People also ask in the Ahrefs SERP rows);
  returns anytime, $6.95, merchandise credit → `maurices.notes` (Returns page, this run); 1931, Duluth,
  900 locations → notes (About); $8.95, 3–8 business days, free over $50, Canada $11.95 → notes
  (Shipping & Handling). The last three questions from Ahrefs matching-terms (questions).
