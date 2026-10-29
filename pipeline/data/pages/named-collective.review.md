# Review: brands like Named Collective (`/brands/named-collective`)

Run 2026-10-29. Category C = hoodies. 11 picks, all renderable. Author: Ash.

## Gate result (lib/pipeline.ts + judgeBrandsLikePage, 2026-10-29)

```
{"indexable":true,"reasons":[],"picks":11,"total":11,
 "title":"11 Brands Like Named Collective for Rhinestone Hoodies and Tracksuits","anchorMissing":[]}
```
No pick has gate problems. `npm run lint:facts`: ok. `npm test`: 30 pass.

## Anchor re-judged
Was `off_category` from an earlier run that judged it by a style rule. Under enrich.md §2 status is
shared and a category miss never sets it: Named Collective is a live London label selling hoodies,
sweatpants and tracksuit sets, so `verified`. `known_for` overwritten (it feeds the title) to
"Rhinestone Hoodies and Tracksuits", from its About page ("designs emblazoned with rhinestones and
bold graphics") and nav. Hoodies stored in GBP (£75–£130, about $100–$173 at ECB 2026-10-28). The
US market gives $120–$210 at checkout; the copy quotes those (stored in the price note). See human_check.

## Evidence (weak, flagged)
- Ahrefs SERP, 4 calls: only "brands like named collective" had rows; readable results were TikTok
  and Instagram shells (no brand names served), a co-listing (voirfashion), directories, reddit (unread).
- WebSearch: the disco directory (3 pages, counted as one source, never named, linked or quoted on
  the page) and ViralTalky (2023, loose list). No co-stocking retailer; no Apart Style pool rows.
- Maniere De Voir has 2 independent sources; the other 10 picks have 1 each.

## G1–G15
| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A US shopper looking past Named Collective's US prices and £-based shipping is the page's reader; every pick sells hoodies to the US. |
| G2 | PASS | Prices, sizes, shipping and returns come from each store's own feed and policy pages read today, plus the anchor's US-vs-UK price gap. None of it is in the ranking pages. |
| G3 | PASS | Concrete trade-offs per pick (final sale, 7-day returns, duties on delivery, store-credit-only, flat $18 DHL), all from stored facts. No invented experience. |
| G4 | PASS | No first-person experience or credentials; "we" never claims testing. Author Ash, bio untouched. |
| G5 | PASS | Author "Ash" with bio in lib/authors.ts. Not YMYL. |
| G6 | PASS | Every number traces to a brand file field or price note (fact trace below). |
| G7 | N/A | Not YMYL. |
| G8 | PASS | Title "11 Brands Like Named Collective for Rhinestone Hoodies and Tracksuits": 11 real picks, all hoodie sellers. |
| G9 | PASS | Answer-first opener per pick names the brand, why it fits and a priced product. |
| G10 | PASS | Price, sizes, US shipping and returns for each pick, plus a How to choose guide and 4 FAQs. |
| G11 | PASS | 64-word intro, then picks. No preamble. |
| G12 | PASS | All prices read 2026-10-29; the template shows "Last checked". |
| G13 | PASS | The disco and ViralTalky pages give one-liners with no prices or policies; this page gives verified US prices, shipping and returns per pick. |
| G14 | PASS | No implied testing; affiliate links are the template's `/go/` with disclosure. |
| G15 | PASS | Proofread; bodies 117–135 words; no near-duplicate sibling (first hoodies page from this anchor). |

**Estimated Page Quality:** High. Strongest reason: every pick carries its own store's current
hoodie range, US shipping and returns terms, which no ranking page has.
**Estimated Needs Met:** Highly Meets for "brands like Named Collective". Would be better with
Boys Lie and Unknown London (the closest style matches), both unreadable today.

## Voice check (voice.md "What we never write")
None present: no process narration, no dates, no "Stylodex found", no source names on the page
(disco never named), no count as the point of a sentence, no verdicts, no invented experience,
no hype words. Contractions throughout; brands are "it".

## AI-voice scan (ai-voice-avoid.md)
Fixed: colon reveals (#24) in Broken Planet ("closest match on price and attitude: …"), Fear of
God Essentials ("The big catch: …") and Aviator Nation ("Returns are generous: …"); "From X to Y"
(#40) in the intro; repeated "The catch is…" openers (#5) varied. Checked: no semicolons, em or en
dashes in copy, no sentence over 30 words, no "not X, it's Y".

## Fact trace (copy -> stored field)
- Intro: Dusk Rhinestone Zip Hoodie $210 at US checkout, free US shipping from $250 ->
  named-collective prices[hoodies].note, notes (delivery).
- Maniere De Voir: Josiane $125, Cropped Suede $260, Ollie $245, XXS–XXL -> prices[hoodies].note;
  free over $250, 14 days -> free_shipping_min_usd, returns_days; US store in dollars -> notes.
- Broken Planet: Star Logo Zip-Up $125, 540 GSM organic cotton, boxy slightly cropped; $125–$135,
  Deconstructed Star Camo $175; monthly drops; duties on delivery outside UK; 14-day returns ->
  prices[hoodies].note, notes, sale_pattern. White Fox Indianapolis + tariffs -> white-fox notes.
- The Couture Club: £85 / £115 (about $113 / $153) -> prices (ECB 2026-10-28); DHL $18, 2–3 working
  days, no US free threshold; 28 days at own cost; 2015 bedroom brand; XXS–XXL -> notes, fields.
  Named 2–5 days -> named-collective notes.
- Stüssy: Basic $130, Bonded Jersey Zip $195 -> prices note; early-1980s California, surfwear,
  skate and hip-hop -> notes (Wikipedia); $9 / free over $200; 7 days, shipping not refunded -> notes.
- Fear of God Essentials: $150–$195, Essentials SS26 Classic $150, Knicks x Barkley Hendricks
  $195 at 520 gsm, 380–520 gsm, XS–XXXL, free over $100 contiguous US, final sale -> prices, notes.
- Nicce: £54.99 Nebula, £74.99 Zip Through Sweat; London 2013, electronic music and Ibiza, hoodies
  and joggers; ships worldwide at cost; 14 days; many marked down -> prices note, notes.
- Evisu: $129 Leopard Multi-Pocket, $195 Seagull Print, $335 Reversible Plaid Daicock; Osaka 1991,
  hand-painted seagull, 14 pairs a day; duties at checkout; free over $330; 14 days full price only.
- Represent: Initial Boxy $140, 500 gsm brushed-back, cropped boxy; 480–485 gsm, 100% cotton;
  Romance $315; ships from US, $10 / free over $175; 14 days, $9 label; Heaton brothers, Manchester
  2011; XS–XXL, XXS on most -> prices, notes (this and earlier runs).
- Aviator Nation: 1970s California; hand-made distressed hoodies and sweatpants; La Onda $120;
  LA warehouse; 30 days, free domestic exchanges, $9.50 refund fee; Vintage Patch $450.
- Billionaire Boys Club: Pharrell and NIGO 2003, streetwear and luxury; Curve $145, NYC OG Logo
  $150, New York Made Heavy Weight $390; New York HQ; free over $200; 14 days, credit or refund
  minus shipping; S–XXL mostly, XS and XXXL on a few.
- White Fox: $54.99 Not Done Yet, $74.99 Anything For Love; Australian; Indianapolis, tariffs
  included; free over $100; paired sizes 3XS/XXS–L/XL; store credit only, 30 days from order.
- How to choose: all figures above. FAQ: London-based collective, USD checkout; US tracked 2–5
  days $8 / free over $250; UK 2–3 days Royal Mail; 14-day returns, free exchange label; £75–£130
  and $120–$210; organic cotton and recycled polyester fleece, rhinestones, embroidery, faux fur
  -> named-collective notes, materials, prices.

## FAQ sources
One Ahrefs matching-terms call ("named collective", questions, US). Used: where is named
collective based (20), how long does named collective take to ship (10), is named collective legit
(40), why is named collective so expensive (10). Skipped (no stored fact): is it fast fashion (50),
is it ethical, does it have sales, who owns it.

## Open items (human_check in the page file)
Anchor currency choice; evidence rests on disco + ViralTalky; product photos for the new `hoodies`
category (no CATEGORY_WORDS entry; whole-store feeds for Maniere De Voir, Evisu, Nicce, Represent;
Broken Planet has no feed); Boys Lie and Unknown London unreadable; Broken Planet range from
homepage data only.
