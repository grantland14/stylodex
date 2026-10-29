# Review: brands like Manière De Voir (`/brands/maniere-de-voir`)

Run 2026-10-29. Category C = pants. 14 picks, all renderable. Author: Ash.

## Gate result (lib/pipeline.ts + judgeBrandsLikePage, 2026-10-29)

```
{"indexable":true,"reasons":[],"picks":14,"total":14,
 "title":"14 Brands Like Manière De Voir for Bridging High Fashion And High Street","anchorMissing":[]}
```
No pick has gate problems. `npm test`: 30 pass. `npm run lint:facts`: every brand this run wrote
passed (ok after my last merge). A later re-run flagged `sandro.known_for` and `the-kooples.size_range`.
Other agents are writing those files, and this page doesn't touch them.

## Category
Pants (full-length pants, trousers, sweatpants, joggers and jeans) are the largest garment type
in the anchor's US feed: 206 pants, 43 jeans and 28 sweatpants out of 1,502 products, against
199 jackets and 154 dresses. Pants also lead its women's best sellers (28 of 121). The disco
profile lists "Known for: Trousers & pants", and disco keeps a separate trousers list. The
outside picks split between men's streetwear and women's boutiques. Few of them sell dresses,
but all of them sell pants.

## Anchor
`verified`. Pants $125 to $215 (282 regular-price, none marked down) on us.manieredevoir.com in
USD: what a US shopper pays, shipped from the US. Added `us_stores` true (SoHo Broadway store,
About page). `size_range` overwritten "Jeans US 0–12" → "US 0–12; waists 30–38". `hq_country`
stays US because the About page says the head office is in SoHo, New York. The brief calls it a
UK brand and disco says Manchester. See human_check.

## Evidence (thin, flagged)
- Ahrefs SERP, 4 calls. "brands like" and "stores like" returned rows. "alternatives" and
  "similar to" returned none. Reddit (the top result) is unread. TikTok, Instagram and Pinterest
  are shells. GQ is a general roundup (co-listing, not counted).
- Counted sources: the disco directory (list, profile, trousers and premium pages, counted as
  one source, never shown on the page) and The Chic Pursuit (2021, updated 2023). Each pick has
  1 independent source, so rank is by closeness to the anchor's pants range.
- No Apart Style pool rows. Co-stocking is not used (Nordstrom and Farfetch stock it, but their
  departments are too broad to count).

## G1–G15
| # | Result | Evidence |
|---|---|---|
| G1 | PASS | Written for a US shopper looking past MDV's pants. Every pick sells pants to the US. |
| G2 | PASS | US-market pants ranges (several stores charge US shoppers far more than at home: Couture Club $185 vs £100), US shipping, duties and return terms per brand. None of this is on the ranking pages. FAQ answers come from stored facts. |
| G3 | PASS | Concrete trade-offs per pick: final sale, store credit only, import tax, return fees, menswear only. All are stored facts. No invented experience. |
| G4 | PASS | No first-person experience or credentials. "We" only states picks ("our first stop"). |
| G5 | PASS | Author "Ash", bio in lib/authors.ts untouched. Not YMYL. |
| G6 | PASS | Every number traces to a brand field or price note (fact trace below). |
| G7 | N/A | Not YMYL. |
| G8 | PASS | "14 Brands Like Manière De Voir for…" means 14 real picks, all pants sellers (title wording flagged in human_check). |
| G9 | PASS | Each pick opens answer-first with the brand, why it fits and a priced product. |
| G10 | PASS | Each pick gives price, sizes, US shipping and returns, followed by How to choose and 4 FAQs (US shipping, base, luxury, returns). |
| G11 | PASS | 68-word intro, then the picks. |
| G12 | PASS | All prices read 2026-10-29. The template shows "Last checked". |
| G13 | PASS | The disco and Chic Pursuit entries are one-liners with no prices or policies. This page gives US prices and terms per pick. |
| G14 | PASS | No implied testing. Links go through the template's `/go/` with the disclosure. |
| G15 | PASS | Bodies run 113–154 words. 7-gram overlap was checked against every page file, and the shared sentences were rewritten. What's left is product names and short stock phrases. |

**Estimated Page Quality:** High. Strongest reason: each pick has its own store's current
US-market pants range, US shipping and returns terms, which no ranking page has.
**Estimated Needs Met:** Highly Meets for "brands like Manière De Voir". One thing would make it
better: a second independent source per pick. Reddit is unread, and Acne Studios, Nameless and
Palm Angels are not checked.

## Voice check (voice.md "What we never write")
None present. No process narration or dates. Disco is never named. No sentence makes a count
its point (counts stay in the notes). No verdicts, no invented experience, no hype words.
Contractions throughout, and each brand is "it". The first mention in every body spells out
"Manière De Voir"; after that the copy uses "MDV".

## AI-voice scan (ai-voice-avoid.md)
Fixed:
- Colon reveal in the intro (#24).
- "from wool tailoring to heavy fleece" and "from Peru to Japan" (#40).
- A repeated "The catch is…" opener (#5).
- A ratio sentence ("two to six times"), replaced with a plain comparison.

Checked: no semicolons, em or en dashes in the copy, no sentence over 30 words, no "not X, it's Y".

## Fact trace (copy -> stored field)
- Intro: Pierre Twin Pleat Dress Pants $185, free shipping $250 (so $65 away) ->
  maniere-de-voir prices[pants].note, free_shipping_min_usd. "two keep most pairs under $90" ->
  white-fox (all ≤ $89.99) and beginning-boutique (71 of 79 under $90) price notes.
- With Jéan: Agnes Jeans $219 low-rise selvedge, fixed cuffed hem; Norah Pants $139, one size,
  tie waist; XXS–XL -> prices[pants].note. Free from $150; Wooster St store; $14 refund fee;
  sale final -> free_shipping_min_usd, notes.
- Reigning Champ: Heavyweight Jersey Sweatpant $110, the same jersey as its heaviest T-shirts;
  Wool Gabardine Service Pant $265, Italian mill, pressed crease -> prices note. Vancouver 2007,
  private label -> notes. XS–XXL, waists 28–38 -> size_range. Fulfilled in the US, duty-free,
  free from $50, 14 days -> notes. Menswear only -> notes (product types MENS).
- A-COLD-WALL*: Woolmore Logo Jogger $157; Elland Pant $265, garment-dyed cotton twill -> prices
  note. USD for US shoppers -> note. XS–3XL -> size_range. 28 days, email first -> notes.
- Fear of God Essentials: Classic Sweatpant $130 (380gsm), Women's Signature Classic Flare $75,
  Slim Monogram Track Pant $225, sizes up to 4XL -> prices note, notes. Free over $100
  contiguous US, final sale -> notes.
- Represent: Initial Straight Leg $120 (500gsm organic cotton), Owners Club $175 (most
  colourways), Flare Pant $365 -> prices note. Free from $175, US shipping, $9 return, 14 days,
  XS–XXL, waists 28–38 -> notes.
- I Love Ugly: under $145, Kobe $129, Slim Kobe $99 + Tall, Albert/Twin Pleat $145 -> prices
  note. Auckland 2008 art project, pants as its largest type, men's -> notes. US warehouse, no
  duties, $8.99 / free $199, 30 days at your cost, sale not returnable, S–2XL -> notes, fields.
- The Couture Club: jean $185 US vs £100 UK; CTRE joggers $110, oversized, size down; UK 4–16,
  XXS–XXL -> prices note, notes. DHL $18, 2–3 days, no US threshold, 28 days at your cost -> notes.
- Norse Projects: Ezra $215 garment-dyed, drawstring; median $250; Kvitfjell $395; waists
  28–38 -> prices note. Since 2004, minimal yet distinctive basics -> known_for, notes. VAT
  excluded, import tax on buyer, 14 days -> notes.
- Beginning Boutique: Austin PU $139.99, Orla satin $59.99, most under $90 -> prices note.
  Vista CA warehouse, customs covered, US 0–18, free $100, store credit 30 days, $13.99 fee -> notes.
  MDV leather pants -> anchor feed (Leather Biker Pants, Julie Leather Twin Pleat Pants).
- Paloma Wool: Caly $215 puffed, Portugal; Mauri $140; Long Suau $890; median $315; made in
  Spain/Portugal; numbered titles -> prices note. 15 days, fee -> notes. XXS–XL, EU 34–44 -> note.
- John Elliott: "obsessive focus on construction"; Beach Sweats $198, Canopy Cargo $348, Big Jim
  $698; origin varies by style; XS–XXXL; free on all US orders; Melrose Ave and Lafayette St;
  14 days, $7 -> prices note, notes.
- White Fox: all under $90, All Day Wide Leg $89.99 lined, low rise; most $59.99/$69.99 ->
  prices note. Indianapolis, tariffs included, free $100, 3XS–XL, store credit 30 days from
  order, sale final -> notes.
- Studio Nicholson: Riso $355 (14oz bleached denim), median $570, Faron $900 -> prices note.
  Nick Wakeman 2010, London, fabric-first, duties included, free over $100, 14 days, £10
  -> notes. XS–XXL, UK 4–16 -> price note.
- Fear of God: DSYF $350, Double Face Wool Cashmere $1,300 -> prices note. Jerry Lorenzo, LA,
  2013 -> notes. XS–XXXL; EU 44–56 -> size_range. Free over $100 contiguous US, 15 days, $7 ->
  notes. Essentials from $75, final sale -> fear-of-god-essentials.
- FAQ: US shipping $8–$15, free over $250; SoHo head office, Broadway store, Reece Wabara 2013,
  Oxford St and Battersea; "bridge the gap between high fashion and the high street"; returns
  portal or email, 14 days, $10 label, sale items as e-gift card -> maniere-de-voir notes.
