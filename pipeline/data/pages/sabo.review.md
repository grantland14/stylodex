# Review: brands like SABO

2026-10-29, first run. Author: Ash. url_prefix `brands`, slug `sabo`.

## Category: dresses

C = `dresses`. SABO's US store describes itself through "elevated summer dresses, playsuits and
two-piece sets", its dresses collection (467 products) is its largest, and the outside lists compare
dress labels. The anchor's stored dresses price ($67.86–$416.52, US store in USD, duties included)
was re-read today and still matches, so it was kept, not overwritten. Its ceiling is set by ZACO
dresses that SABO sells; SABO-label dresses stop at $205.92 (in `human_check`). `known_for`
("Elevated Summer Dresses and Sets", shared from the White Fox run) is short and has no "for".

Anchor status: `verified`, all gate facts present. No `off_category` set anywhere.

## Picks: 14 renderable / 14 total

| Rank | Pick | Sources | Dresses (own currency) | USD | Relation |
|---|---|---|---|---|---|
| 1 | Petal & Pup | 3 (chicpursuit, Bob Cut, disco) | $59–$149 (1,042) | same | similar |
| 2 | Vita Grace | 2 (chicpursuit, Bob Cut) | $111–$262 (58, USD presentment) | same | similar |
| 3 | Bardot | 2 (chicpursuit, Bob Cut) | $139–$329 (24-dress sample) | same | similar |
| 4 | For Love & Lemons | 2 (chicpursuit, Bob Cut) | no feed, sells dresses | — | null |
| 5 | VRG GRL | 1 (disco) | A$49–A$289 (104) | $34.46–$203.25 | similar |
| 6 | Peppermayo | 1 (disco) | $68–$150 (829) | same | similar |
| 7 | ASTR the Label | 1 (chicpursuit) | $54–$228 (159) | same | similar |
| 8 | Princess Polly | 1 (disco) | $49–$119 (840) | same | similar |
| 9 | AMIClubwear | 1 (plaintips) | $11.50–$125.99 (2,106) | same | similar |
| 10 | Pink Ice | 1 (plaintips) | $17.99–$89.99 (68) | same | similar |
| 11 | Forever 21 | 1 (plaintips) | $24.99 (6) | same | cheaper |
| 12 | Shopbop | 1 (plaintips) | $75–$2,590 (first-page sample) | same | similar |
| 13 | Showpo | 1 (chicpursuit) | no price row, sells dresses | — | null |
| 14 | boohoo | 1 (Bob Cut) | no price row, sells dresses | — | null |

Ranking: sources, then distance of each pick's median from SABO's $124.02 median; picks without a
price last in their group. FX: ECB 2026-10-28 (USD 1.1133, AUD 1.5830 per EUR). Not padded: every
pick is verified, sells dresses, ships to the US and has an outside source.

Rejected (in the page file): Lulus (3 sources), Hello Molly, Reformation, THE ICONIC (403/429),
Stelly (password page), GoJane, Anthropologie, Wet Seal (unverified), Nasty Gal (off_category,
placeholder site), Tobi (defunct), and the 15 Apart Style pool brands (no outside source).

**Sources.** Four Ahrefs SERPs (US). "sabo alternatives" and "similar to sabo" returned nothing. The
rest is Reddit (not read), TikTok/Instagram/YouTube, general Australian-brand roundups (Vogue AU,
Broadsheet, Emirates Woman, chattychums) and SABO's own pages. worthybornedit names SABO as an
alternative to Peppermayo, not the reverse, so it doesn't count. Kept: chicpursuit (Maria Juvakka,
2021), Bob Cut Magazine (2022), plaintips (undated, templated, names closed stores) and the disco
directory (evidence only, never named). The evidence is thin and old: 10 of 14 picks rest on one
source, and four rest only on plaintips (`human_check`). No co-stocking: SABO says everything is
"exclusively sold by SABO".

**Brand files** merged one at a time through `merge_brand.py` from
`<scratchpad>/sabo/patches/sabo/`; `npm run lint:facts` passes.
- New: vita-grace (Dubai, USD presentment via `currency=USD`, base AED), vrg-grl (AUD, no US market),
  astr-the-label (feeds readable; policy pages 403, so `returns_days` empty), the-iconic (unverified).
- peppermayo: dresses price added (no previous dresses entry). Notes appended to sabo, hello-molly,
  lulus, reformation, stelly. vrg-grl `known_for` corrected with `--overwrite known_for` (the first
  wording held an apostrophe the lint reads as a quote).
- Existing dresses prices (Petal & Pup, Bardot, Princess Polly, Shopbop, Pink Ice, Forever 21,
  AMIClubwear), all checked today by other runs, were left untouched.

## Gate result (Check step)

Scratch `npx tsx` script: `pipelinePages()` → `judgeBrandsLikePage` + `pickProblems`, now = 2026-10-29.

```
indexable: true
reasons: []
renderable: petal-and-pup, vita-grace, bardot, for-love-lemons, vrg-grl, peppermayo, astr-the-label,
            princess-polly, amiclubwear, pink-ice, forever-21, shopbop, showpo, boohoo (14 of 14)
title: "14 Brands Like SABO for Elevated Summer Dresses and Sets"
```

## G1–G15

| Row | Result | Evidence |
|---|---|---|
| G1 | PASS | Directory page for a real shopper search, in scope (dresses). |
| G2 | PASS | Store-read prices in the currency a US shopper pays, duties, return windows and fees, size ceilings: none of the source lists give prices. |
| G3 | PASS | Specific trade-offs per pick (Vita Grace's 7-day returns, VRG GRL's AUD plus duties, Showpo's 7-day refund window, AMIClubwear's credit-only returns). |
| G4 | PASS | No tried-on or tested claims. Author Ash, bio untouched. |
| G5 | PASS | Author Ash (lib/authors.ts). Not YMYL. |
| G6 | PASS | Every number traces to a stored field or note (below). |
| G7 | N/A | Not YMYL. |
| G8 | PASS | Title count 14 = renderable count; "Elevated Summer Dresses and Sets" is SABO's own positioning. |
| G9 | PASS | Answers which labels sell SABO-type dresses and how their terms differ. |
| G10 | PASS | Price, sizes, shipping and returns per pick; FAQ answers where SABO is sold. |
| G11 | PASS | 77-word intro, then picks. |
| G12 | PASS | All facts read 2026-10-29; template shows "Last checked". |
| G13 | PASS (borderline) | Beats chicpursuit/Bob Cut/plaintips on specifics (they give no prices). Held back by thin, dated evidence. |
| G14 | PASS | No client picks; affiliate links go through /go/. |
| G15 | PASS | Read as a whole; bodies point to each other (Vita Grace ↔ Petal & Pup, AMIClubwear ↔ Pink Ice, Peppermayo ↔ Princess Polly). |

**Estimated Page Quality: Medium-High** (High on content, held back by thin outside evidence).
**Needs Met: Moderately to Highly Meets** for "brands like sabo" / "stores like sabo skirt".

## Voice check (voice.md "What we never write")

- Process narration: none (no "we checked", dates, source names). Disco directory never named.
- Spreadsheet sentences: none. "These fourteen" is the list size. Rankings ("cheapest pick here",
  "free shipping at any order size, which no other store here matches") carry why they matter.
- Verdicts, invented experience, hype words: none. Brands are "it". No semicolons, em dashes, bold.
- No sentences reused from White Fox, Windsor, Selkie or any other page: a 7-word shingle check
  against every page's copy leaves only stock fragments.

## AI-voice scan (ai-voice-avoid.md)

Fixed: #24 colon reveal in the intro; #1 binary contrast in boohoo ("checkout price, not the
percentage"); #40 "from X to Y" cut from five bodies to price ranges plus one; repeated "The catch
is…" openers reduced to one. Bodies 115–140 words, 3 paragraphs each, nothing over 30 words.
Remaining three-item lists are fact lists (refund/exchange/credit, petite/plus/tall).

## Fact trace (copy → stored field)

- **Intro:** 14 days, $20 off refunds (sabo notes, returns); US 14 (sizing chart 3XL = US 14).
- **Petal & Pup:** $59–$149, Avina $79 (price note); AU, USD store, free over $80, 30 days, $9.95 (notes); XXS–XXL / 0–16 (size_range). SABO $175 (free_shipping_min_usd), $67.86 floor.
- **Vita Grace:** $111–$262, Erika $111, Yasmin $221, linen/embroidered cotton (price note); Dubai, own UAE atelier, low volumes, made to requirements, longer dispatch (notes); $25, no tariffs, free from $600; 7 days to register; XS–L.
- **Bardot:** Natalya $139, 030 Denim $329, categories (price note, notes); ships from ZIP 91739, $10 ground, free $200, 30 days full-price; Australian sizing, US to 12.
- **For Love & Lemons:** Abby $239 and blend, Bailey $689, XXS–XL; 2010, founders, positioning; $10 / free over $250; 21 days from shipping, $10, 25% restocking (notes). SABO-label top $205.92, ZACO above (sabo price note).
- **VRG GRL:** A$49–A$289, Luci A$229, Carrie A$49, USD at ECB (price note); founders 17 and 19, in-house design, Brisbane store (about note); B Corp (b-corp-faqs note); AU 4–16; AUD, duties on buyer, free over A$200 (≈$141), 30 days from order, $15 (notes). SABO duties included (sabo shipping note).
- **Peppermayo:** $68–$150, Lavelle $68, Celandine $143, none marked down, US 0–18 (new price note); duties included, free from $99, 14/21-day returns (notes).
- **ASTR the Label:** $54–$228, Paulette $198, Ginevra $99, satin/lace share, Blythe $164 to 3X (price note); LA, 2012 (about); free from $75 (meta).
- **Princess Polly:** $49–$119, Chukaya $49, maxis $65–$119 (price note); Gold Coast 2010, four US cities incl. Santa Clara and Scottsdale, free over $50 lower 48, 0–12 / Curve 14–20, petite/tall vendors, 30 days (notes).
- **AMIClubwear:** $11.50 Cami, $125.99 top, vendors, 1X–3X (price note); FREESHIP, 30-day store credit, buyer pays postage (notes).
- **Pink Ice:** $89.99 top, Love Stitch / Flying Tomato (price note); Ethereal $49.99, Mellow $59.99 (product-images.json); free over $50, US and Canada only, 30 days from ship date, original tender, buyer postage; XS–L.
- **Forever 21:** $24.99 full-price dresses, Satin Cowl Neck (price note, product-images.json); US stores closed 2025, online, US only, free over $50, XS–XXL plus section, $9.99 returns, clearance final (notes).
- **Shopbop:** $75–$2,590, Lyon $189, Nico Fringe $228 (price note); Amazon, 1999, free 2-day/3-day no minimum, 00–24, 15-day free drop-off, $10 to day 30 (notes).
- **Showpo:** Sydney 2010, US warehouse, Nicolette $139.95, Pietra $99.95, free over $100, $9.95, some ship from AU, US 0–16, 7-day refund then exchange/110% credit (notes).
- **boohoo:** US 0–26, petite/plus/tall; Manchester, Boohoo Group incl. PrettyLittleThing; discount small print; $10.99, no tariffs, 6–8 days; 21 days, $14.99 (notes).
- **Closing:** names and facts repeat the picks above.
- **FAQ:** both from People Also Ask on "stores like sabo skirt" (the Ahrefs matching-terms call returned only One Piece and Spanish "no sabo" questions). Answers from sabo notes (About: designed in-house, exclusively sold by SABO, stores in QLD and NSW; US store USD, duties included, free over $175).

## Human check (also in the page file)

1. Confirm C = dresses and that the anchor range should include ZACO dresses.
2. ASTR the Label: returns window and US shipping cost (policy pages 403).
3. VRG GRL: confirm US checkout is in AUD. Vita Grace: confirm US checkout matches the USD presentment.
4. Lulus (3 sources), Hello Molly, Reformation, Stelly: unreadable or password-protected.
5. Bardot range is a 24-dress sample. Shopbop is a first-page sample.
6. Four picks rest only on plaintips (undated, templated).
