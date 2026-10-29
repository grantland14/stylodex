# Self-review: brands like JNCO (`/brands/jnco`)

Run 2026-10-29. Category: **jeans** (JNCO's homepage title is "The Original Wide-Leg Jeans Since
1985"; separate women's and men's jeans collections, $130–$350 at regular price). Author: Ash.

## Gate result
`judgeBrandsLikePage` via `lib/pipeline.ts` (tsx, now = 2026-10-29):
- anchor missing: none
- 8 of 8 picks pass `pickProblems` (no problems on any)
- **indexable: true**, reasons: []
- title: "8 Brands Like JNCO for The Original Wide-Leg Jeans Since 1985" (see human_check: the shared
  `known_for` makes the title long and awkward)
- `npm run lint:facts`: ok

Order (by closeness of full-price jeans range to JNCO's, all single-source):
ICECREAM (similar), Denim Tears (similar), Stüssy (similar), Criminal Damage (cheaper), Obey
(cheaper), Hoodrich (cheaper), LRG (cheaper), Empyre (cheaper).

## G1–G15
| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A "brands like JNCO" directory page for JNCO shoppers; on-purpose for Stylodex. |
| G2 | PASS | Prices, fits, leg openings, waist ranges, return windows and shipping thresholds come from each brand's own store, read today. No ranking page carries these. FAQ from Ahrefs questions, answered from stored facts. |
| G3 | PASS | Specific, checkable trade-offs per pick (Stüssy 7-day returns, Denim Tears Cotton Wreath no-refund rule, Criminal Damage free US delivery from £80, LRG 14 days from order date, Empyre size-down advice). No claimed experience. |
| G4 | PASS | No first-person wear or testing claims. Author Ash, bio untouched. |
| G5 | PASS | Author "Ash" set; not YMYL. |
| G6 | PASS | Every number traced below to a brand file or the page notes. |
| G7 | PASS (N/A) | Not YMYL. |
| G8 | PASS | Title count (8) is the real rendered count. Body covers jeans like JNCO's. Long title flagged as human_check, not misleading. |
| G9 | PASS | Intent: alternatives to JNCO's wide jeans, often cheaper. Each pick opens with its answer; five picks are cheaper than JNCO's cheapest pair; size past a 44 waist answered (LRG, Empyre). |
| G10 | PASS | Price, fit, size, shipping and returns per pick, plus a decision guide and four FAQs. |
| G11 | PASS | Intro 56 words, straight to the list. Bodies 122–133 words. |
| G12 | PASS | All prices and policies read 2026-10-29; GBP at ECB 2026-10-28. |
| G13 | PASS | Ranking pages are an unsigned directory with one-line style blurbs (no prices for jeans, many brands that don't sell jeans or are closed) plus social video. This page names real jeans, real prices and the catch for each. Estimate High. |
| G14 | PASS | Affiliate links via /go/ (template). No implied testing; criteria stated in the intro (closeness of full-price price). |
| G15 | PASS | Read whole: picks compared with each other (Obey vs LRG on waist, Hoodrich vs Criminal Damage, LRG vs Empyre, ICECREAM vs Obey on returns). Not a near-duplicate of the Jaded London or Affliction pages. |

**Estimated Page Quality:** High. Strongest reason: every pick has a named jean with its real
full-price price and a specific, sourced trade-off.
**Estimated Needs Met (dominant intent):** Highly Meets for "cheaper/similar wide jeans than
JNCO". Would be better with a second independent outside source and 2+ more picks (target 10–15).

## Voice check (voice.md "What we never write")
- Process narration: none (no "we checked", dates, source names). The disco directory is not
  named, linked or quoted anywhere in the copy (Ash rule, 2026-10-29).
- Spreadsheet sentences: one count sentence in the FAQ ("Five brands on this list sell jeans for
  less than JNCO's cheapest pair") answers the question asked, so it stays.
- Verdicts on brands: none. Invented experience: none (Hoodrich "a little stretch" comes from the
  stated 2% elastane). Hype words: none.
- No semicolons, em dashes, bold or italics. Contractions throughout. Brands are "it".
- Moves: answer-first opener per pick; one useful thing per brand (which line to start with, Big
  Ol' vs New Classic, Bigwig vs Classic Baggy, size down in Empyre, ICECREAM vs BBC in one store);
  honest catch per pick; use-case Best for lines; How to choose by width, budget, size and UK.

## AI-voice scan (ai-voice-avoid.md)
Found and fixed: rule of three "wide, baggy or relaxed" (→ two), "from the same price bracket down
to pairs under $75" (#40 From X to Y), colon reveals in the intro and Hoodrich opener (#24),
"choosing on cut and wash, not price" and "from the day you order, not the day it arrives" (#1
binary contrasts). Smell test: every sentence names a brand, product, price or policy.

## Fact trace
- Intro: JNCO $130–$350 (jnco.json prices.jeans); waist 44 (jnco.json size_range); all picks sell
  wide or relaxed jeans (product descriptions in each brand's notes).
- ICECREAM: Running Dog Double Scoop Denim Pant $180, "relaxed and loose, straight leg", screen
  print (icecream.json notes, prices note); 8 of 11 at $180; Apex Jean $285 all-over ice cream shop
  graphic; diner jeans waists 30–42; same store as BBC (homepage meta); 14-day returns, markdown not
  returnable (refund policy). Obey 30 days (obey.json).
- Denim Tears: Tremaine Emory, 2019, Black American history (about page, meta); Baggy Denim Pant
  Light Wash $210 cut, sewn and washed in the USA; straight and baggy only; $210 plain / $295
  Cotton Wreath; plain selvedge pairs Japanese selvedge; waists 28–42; Cotton Wreath can't be
  refunded; 14 days; $8 deducted (refund policy).
- Stüssy: Big Ol' Jean $160, oversized waist, relaxed rise, non-stretch 100% cotton; 19 of 21 at
  $160; New Classic straight, 17½" vs 18½" leg opening; unisex; waists 26–38; 7 days from receipt;
  no exchanges; free US shipping over $200 (stussy.json).
- Criminal Damage: £90 ≈ $119.59 (ECB 1.328758); free US DHL over £80; Laser Print Logo Jean
  "relaxed jean fit"; Patched Washed Jean patch detailing, two colorways; East London 1991; XS–XXL;
  size guide XS 28" to XL 36"; 14 working days; returns postage paid by buyer; exchanges ship free
  (criminal-damage.json).
- Obey: Bigwig fits 20" leg opening; Bigwig Baggy $114; Classic Baggy $98, 18–18.5"; Shepard
  Fairey; 100% cotton 13.5oz; waists 26–38; free US shipping over $100; 30 days, $8 fee,
  exchanges (obey.json).
- Hoodrich: Ritual Jeans £70 ≈ $93.01, relaxed, faded wash, distressed gothic logo appliqué, 93%
  cotton / 2% elastane, 28W–38W (page notes, hoodrich feed); Birmingham, denim collection of 2
  products, 30-day returns (hoodrich.json). Criminal Damage three jeans at £90.
- LRG: $49–$100; waists to 46; All Maiden Jean $80 relaxed loose 100% cotton; nine $70 denim pants,
  mostly 12oz heavyweight straight-leg, Creative Life Denim Cargo $70; True Taper $49 tapered;
  international shipping suspended; 14 days from purchase date (lrg.json).
- Empyre: Ultra Wide Skate Jeans $69.94; Blake Blue Wash 22" leg opening, drawstring waistband,
  100% cotton; 1999; only at Zumiez; waists 26–46; size down one in ultra wide/baggy; free shipping
  over $64.94; free ship-to-store; 30 days; mail-in returns pay postage (empyre.json, zumiez.json).
- How to choose: cheapest-pair comparison (Obey max $114, Empyre max $74.94 < $130); waists past 42
  only LRG and Empyre (46); Criminal Damage free on one pair; Hoodrich cheaper, one style.
- FAQ: JNCO $130–$350, $10 flat US, no free threshold; ships US/CA/GB/AU; family took company back
  2019; LA 1985; 21-day returns; women's and men's jeans collections (jnco.json notes, prices).
  Sources: Ahrefs matching-terms (questions) for "jnco": "how much are jnco jeans", "is jnco still
  in business", "where to buy jnco jeans", "when was jnco founded".

## What broke / open
- Only one publisher (the disco directory, two pages) names any pick. Refinery29 (2015) named Zara,
  H&M, MM6 and Abercrombie, all blocked (403) or missing facts. Co-stocking found nothing readable
  (Dolls Kill has no JNCO; Zumiez 404; Tillys and Urban Outfitters 403).
- 8 picks, under the 10–15 target. Not padded: 10 Deep (slim cuts only) and Born x Raised (one
  denim item, all sales final) left out on purpose.
- Diamond Supply Co. unreachable (connection reset / 503). Abercrombie help pages don't render
  (returns_days, known_for stay empty).
