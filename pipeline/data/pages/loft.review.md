# Review: stores like Loft (`stores/loft`)

Run 2026-10-29. Category `dresses` (Loft is `kind: brand`; tops, pants and dresses are close in its
product sitemap, 276/276/211; dresses lead the product types in its store title, its dresses page
is titled "Casual, Work & Vacation Styles", and it matches the sister Ann Taylor page). Pants were
the runner-up.

## Gate (`lib/pipeline.ts` → `judgeBrandsLikePage`, tsx, now = 2026-10-29)

- **indexable: false**. Reason: `anchor missing: price:dresses`.
- Renderable picks: **15 of 15**, every pick `[]` problems.
- Title: "15 Stores Like Loft for Easy, Stylish Everyday Fashion" (known_for shortened from "Everyday
  Fashion for Work and Play" after the anchor lint flagged a second "for").
- Why the anchor gap: loft.com was readable today (no redirect loop to the bot UA), but the whole site
  runs "50% off everything" and "All dresses $44!". All 1,029 dress-grid tiles were read: every
  LOFT-label dress is marked down except two Sneak Preview petite Versa styles ($120, $150), too few to
  stand for the range. No price stored; queued in `human_check`. Re-reading after the promotion makes
  it indexable (everything else on the anchor is present).
- `price_relation` is null on every pick (no anchor price).

## Quality gate (G1–G15)

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A "stores like Loft" list is what a brand directory is for. |
| G2 | PASS | Regular dress prices, size scales, return windows and fees, and shipping lines per store are the original data. None of the ranking lists carry them. FAQ answers come from stored facts. |
| G3 | PASS | Concrete trade-offs per pick: Boden stops at XL, WHBM at 18, NY&Co gives store credit only, Gap returns can't go to Old Navy, Chico's sizing scale explained. |
| G4 | PASS | No first-person experience or testing. Author Ash, bio untouched. |
| G5 | PASS | Author "Ash". Not YMYL. |
| G6 | PASS | Every number traces to a brand-file field or note (trace below). No Loft price claims (none stored), so no "cheaper/pricier than Loft" lines. |
| G7 | N/A | Not YMYL. |
| G8 | PASS | Count = 15 rendered picks. Suffix is Loft's own tagline wording. |
| G9 | PASS | Each pick opens with what it's best at for a Loft shopper, mostly with a named dress and price. |
| G10 | PASS | Price (11 of 15), sizes, returns, shipping and a who-should-look-elsewhere line per pick, plus How to choose. Gap: no Loft price to compare against. |
| G11 | PASS | Intro 72 words; bodies 110–127; closing 100. |
| G12 | PASS | All prices and terms read today or reused from same-day brand files. |
| G13 | PASS | Beats the top lists (Fit Mommy in Heels, Daneila Bright, NeedleStar) on specifics: they give no regular prices, size scales or return terms. |
| G14 | PASS | No implied testing; affiliate links via the template's `/go/`. Sister-brand ties stated openly. |
| G15 | PASS | Read as a whole; picks point to each other; openers varied after the AI-voice pass. |

- **Estimated Page Quality:** High. Strongest reason: same-day regular prices and terms for 11 stores
  and size, return and shipping facts for all 15, none of which the ranking lists carry.
- **Estimated Needs Met:** Highly Meets once indexable. Would improve with Loft's own regular dress
  range, so picks could say cheaper or pricier.

## Voice check (`pipeline/voice.md`)

- Process narration: none. The four no-price picks render without explanation.
- Spreadsheet sentences: none. Counts used (400+ stores, 500+ boutiques, 46 states) back a reason (trying on).
- Verdicts on brands: none. Invented experience: none ("runs large" is NY&Co's own sizing note).
- Hype words, semicolons, em dashes: none. Contractions throughout; brands are "it".

## AI-voice scan (`ai-voice-avoid.md`)

- #40 "from X to Y": intro "from its own sister brands to cheaper and dressier options" rewritten.
- #1 binary contrasts: cut "not the easy prints", "not a refund", "not a US 2".
- #3 rule of three: closing cut to two-item lists; Ann Taylor "suits, work dresses and suit dresses" cut to two.
- #5 anaphora: three "X is the … pick" openers rewritten (Abercrombie, NY&Co). Repeated "the same line
  as Loft" varied. Sentences ≤30 words (one split in Old Navy).

## Fact trace (copy → stored field)

- Intro: no facts. FAQ: Knitwell, 1954, 1998, "work and play", tailored workwear → `ann-taylor.notes`,
  `loft.notes`; picks named from this page; Lane Bryant 40 → `size_range`. Questions from Google PAA
  in the Ahrefs SERP rows ("similar to loft", "stores like loft"); Ahrefs matching-terms gave only
  off-topic or unanswerable questions ("can i return ann taylor to loft" is Ann Taylor's policy, not stored).
- Ann Taylor: Knitwell, timeless tailored style, suits/suit dresses, petite/tall/curvy, ~200 stores,
  $150 → `ann-taylor.notes`, `free_shipping_min_usd`; Loft $99 → `loft.free_shipping_min_usd`; online
  Loft orders not returnable at Ann Taylor → `loft.notes` (return policy).
- Banana Republic: $148–$280, Knit Wrap $198, Cashmere Turtleneck $280 → price note; cashmere, leather,
  linen, $50, shared bag → notes; 0–20/petite 00–12/long 4–12 → `size_range`. Talbots $99.50, J.Jill $109 → prices.
- Old Navy: $34.99–$59.99, Ponte Mini $39.99, Occasion maxi $59.99, jersey/ponte minis → price note;
  00–30 petite/tall, free 30-day returns, $50 → notes. Loft 18/XXL → `loft.size_range`.
- J.Crew: $148–$298, Parc $198, Natasha $178 → price note; classic/petite/tall → `size_range`; 30 days,
  $7.50, $7, Rewards → notes; Madewell in J.Crew Group → `madewell.parent_company`.
- Talbots: Knitwell, $99.50–$299, Polished Ponte Sheath $169–$189, range by size type → price note;
  2–18/0–16/14W–24W, no tall → notes; 30 days, $9.95, $8.95, 437 store pages → notes.
- Madewell: $118–$168 → price; jeans/tees title, sizes incl. 14W–24W, availability varies, 30 days,
  free exchange label, Insider shipping $5/$7, CA/UK/AU → notes, `ships_to`. Chico's band → price.
- Gap: sister brands, casual American style, 1969, denim → notes (10-K, gapinc); Organic Cotton
  Tie-Neck Mini Shift Dress → my gap note; 000–20 petite/tall, 30/45/60 days, $50, 46 states,
  brand-of-purchase returns → notes.
- Everlane: clean luxury, $58–$198, Weekend Tee Midi $58, Cashmere Polo Midi $198, mostly minis,
  fabrics → price note, `known_for`; XXS–XXXL, costs published, 30 days, $7 / free in store, CA/UK/AU → fields, notes.
- Lane Bryant: Knitwell, 1904, Lena Bryant, 10–40, petite and long 10/12–38/40, Lena style, 400+ stores
  → `lane-bryant.notes`, `size_range`; my dresses-page size facet (scratchpad). Old Navy $34.99 → price.
- Boden: joyful colors, British, $99–$460, Marcia $149, Jacquard $460, dollars, Pittston PA, 45 days,
  petite/tall, XS–XL → `known_for`, price note, notes, `size_range`.
- Abercrombie: $70–$200, YPB $70–$85, Lace-Trim Slash Midi $200 → price note; $99, US/CA → notes;
  1892 Manhattan, New Albany → notes. J.Jill/Chico's 60 days → `returns_days`.
- NY&Co: Workwear/Night Out shops, 1918 Lerner Shops, online first, runs large, 30 days store credit or
  exchange, $7.99, $99, US only, 2–5 days, S–L sizes → `new-york-company.notes`.
- J.Jill: polished, comfortable → `known_for`; $109–$149, Wearever $109, Faux-Suede $149 → price note;
  XS–4X, 60 days, $8.95, $150/$9.95, Canada, 1959 Berkshires, 200+ stores → notes.
- WHBM: Knitwell, $140–$295, Faux Wrap $150, Knit Crepe Belted $170 → price note; black and white with
  pops of color, 00–18/XXS–XL regular and petite, petite free ship/returns, 60 days, $7, $8.95 → notes.
- Chico's: Knitwell, comfort, $109.50–$189.50, Travelers Classic $109.50, Ponte Godet $129.50 → price
  note (my full-grid read confirms the range); 000–4 = US 0–22, 2 = US 12, 000P–4P, 60 days, $7,
  $8.95, 500+ boutiques → notes, `size_range`.

## Sources and counts

- Ahrefs: 4 `serp-overview` calls ("loft alternatives" empty), 1 `keywords-explorer-matching-terms`.
- The Ahrefs top 10 held mostly Ann Taylor lists that name no Loft alternatives, so 7 "stores like
  Loft" lists came from WebSearch (damson-madder precedent). Ann Taylor also counts 5 SERP pages that
  pair it with Loft directly. Corporette's budget-tier page and Yahoo's co-listing not counted.
  Dropped: Soxy (vendor blog listing home decor), scraped lists, 403s (Knoji, A Well Styled Life,
  All Seasons Style), Reddit, ThredUp (secondhand marketplace). No disco directory page for Loft.
- Picks by sources: Ann Taylor 10; five at 5; four at 4; two at 3; three at 2.
- Brand files via `merge_brand.py` (my patches only): loft (ships_to corrected with `--overwrite`,
  free shipping, known_for with `--overwrite`, notes), new new-york-company, gap (dresses
  sells_categories), chicos (note), new eileen-fisher and anthropologie as `unverified`.
- `npm run lint:facts`: ok.
