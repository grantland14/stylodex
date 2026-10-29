# Review: brands like Madhappy (2026-10-29)

Category **hoodies** (Madhappy's hero product: Classics Fleece Hoodie $175, made in Los Angeles; 116 regular-price hoodies $95–$250). Author: Ash. 15 picks, all rendered.

## Gate check (lib/pipeline.ts + judgeBrandsLikePage, now = 2026-10-29)
```
indexable: true, reasons: [], rendered 15 / 15
title: "15 Brands Like Madhappy for Optimistic Fleece Hoodies and Sweats"
anchor missing: none; no pick problems
```
`npm run lint:facts`: ok. `npm test`: 30 pass.

## G1–G15
| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A shopping list for people pricing Madhappy hoodies, on a site about similar brands. |
| G2 | PASS | Prices, gsm, origin, sizes, shipping and return terms come from each store's own feed and policies, not from ranking pages (disco and Charm list names and moods only). |
| G3 | PASS | Concrete trade-offs per pick: final-sale policies, duty handling (Cole Buxton DDP, Daily Paper duties on arrival), weights (440–530gsm, 9.5–15 oz), same-street stores (John Elliott on Melrose, Noah on Mulberry). |
| G4 | PASS | No first-person wear or testing claims. "We" not used for experience. |
| G5 | PASS | Author Ash, bio in lib/authors.ts. Not YMYL. |
| G6 | PASS | Every number traced below. One stored-fact conflict flagged, not used: Madhappy materials (100% cotton stored, hoodie text 99/1). |
| G7 | N/A | Not YMYL. |
| G8 | PASS | Title count = rendered picks (15); "for Optimistic Fleece Hoodies and Sweats" is the stored known_for. |
| G9 | PASS | Intent is alternatives to Madhappy hoodies; each pick opens with what it offers against Madhappy and names a product and price. |
| G10 | PASS | Price, sizes, shipping and returns for each pick, plus a how-to-choose guide by budget, weight, sports logos and return needs. |
| G11 | PASS | Intro 71 words, answer-first bodies, no preamble. |
| G12 | PASS | Prices read 2026-10-29; page `checked_at` drives the Last checked line. |
| G13 | PASS | Page one (disco, Charm) has no prices, weights or policies; this page compares them. |
| G14 | PASS | No implied testing; affiliate links go via /go/ with disclosure (template). |
| G15 | PASS | Sentences checked for 6-gram overlap with every other page file; overlaps rewritten (Cold Culture, Named Collective share three picks). |

**Estimated Page Quality:** High, because every pick carries verified store facts (price range, fabric, sizes, shipping, returns) that the ranking pages don't have.
**Estimated Needs Met:** Highly Meets; a second outside source per pick (Reddit threads unread) would make the selection itself stronger.

## Voice check (voice.md "What we never write")
None present: no process narration, no dates in copy, no counts as the point of a sentence, no verdicts, no invented experience, no hype words. Brands are "it". Contractions throughout. No semicolons, em dashes or bold.

## AI-voice scan (ai-voice-avoid.md)
- Fixed: "steady" (evaluative adjective, §13) on Only NY; repeated "The catch is…" openers varied; "from X to Y" sweep in the intro (§40) replaced with two plain sentences; "is the closest match on price" and other phrases shared with sibling pages rewritten.
- Kept on purpose: answer-first "X is the pick for…" openers (voice.md requires them), varied in wording.
- No "not X, it's Y" contrasts, no rule-of-three lists except the closing's budget line (three brands named, which is the content).

## Fact trace (copy → stored field)
- Madhappy: Classics $175, made in LA, heavyweight → madhappy prices.hoodies note + notes (hoodie text); free US shipping over $200, $5–$10 below, 3–7 business days → notes (FAQ); 30-day returns → returns_days; XXS–XXL → size_range; Dodgers/Yankees/Lakers $195+, top $250, Powerpuff/Hello Kitty → prices.hoodies note; LA store 8906 Melrose, NY 207 Mulberry → notes (stores); launched 2017, optimists, Foundation → notes (About).
- Essentials: $150 SS26 Classic, $195 Knicks x Barkley Hendricks, 33 at $175, 480/520gsm, XXXL, free over $100, final sale, Fear of God's line → fear-of-god-essentials notes/prices.
- Daily Paper: Amsterdam 2012, three friends, African heritage, Black Dias $150 heavy brushed cotton, Arch Contrast Stitched $150 French terry, $225 zip, USD store, duties, $25/free over $500, 9–12 days, 14-day returns → daily-paper notes/prices.
- Born x Raised: NFL Crest $140, MLB Moneyball $180, Jumbo Script $160, Llorona $200, S–3XL, final sale, USPS → born-x-raised notes.
- Icecream: Pharrell → known_for; soda pop $150, Running Dog Popover 350gsm $150, Alpha Industries $250, most under $190, S–XXL → prices.hoodies note; 14 days, no exchanges, label deducted → notes.
- John Elliott: Beach Hoodie 2 $198, French terry, Peru, cropped; 2012, LA; 8808 Melrose; free US shipping; XXXL; 14 days → john-elliott notes.
- Noah: 1% for the Planet, made in Canada, Core Classic $168 12 oz, Heavyweight $198 15 oz, boxy; 195 Mulberry; 14-day refund / 30 credit → noah notes.
- Pleasures: $100–$140 for 33 of 39, Optimism $106 70/30 boxy, Onyx $135 400gsm, S–XXL, sales final → pleasures notes (returns conflict in human_check; copy states only "listed as final").
- ASSC: $89 Classic Mind Games, $119 NFL, made to order 4–6 weeks + 1–2, final, S–XXL some XS → anti-social-social-club notes.
- Cole Buxton: London, vintage athletic and Ivy cues, not loud; CB Sportswear $187 440gsm with Olympic back print; Signature $187 puff print chest and back; zips $220–$234; DDP duties; free over $340; 14 days, customer pays label → cole-buxton notes.
- Denim Tears: Emory 2019, diaspora; Cotton Wreath $198 cotton Turkey final sale; ADG Stamp $178; Stüssy zip $275; $15 flat; NY and Atlanta; 14 days minus $8 → denim-tears notes.
- Represent: Manchester 2011, Heaton brothers, ships from US, Initial Boxy $140 500gsm, Owners Club $200, 480gsm+, XS–XXL/XXS, $10 free over $175, $315 top, 14 days $9 → represent notes.
- Only NY: $104–$118, Block Logo $104, MTA $108, 9.5 oz Peru, 2007 NYC, 30 days from delivery, customer pays postage, LES and Greenpoint, ships from Texas → only-ny notes.
- Neighborhood: Tokyo shop, Pigment $181, Savage $292 distressed, $25 US flat, S–XL, damage/wrong-item returns only → neighborhood notes.
- Sporty & Rich: Oberg, mood board, vintage sportswear tied with luxury, wellness-inspired (homepage meta), Serif Logo $225 cotton Portugal pre-shrunk, zips $255 incl. Wellness Ivy, 30 days, XS–XL → sporty-and-rich notes.
- Aimé Leon Dore: Embroidered Logo $190 530gsm, Unisphere/Crest $195, full-zip $250–$300, XS–XXL, Queens 2014, ships US/CA/AU, 10 business days store credit → aime-leon-dore notes.
- FAQs: from Ahrefs matching-terms (questions) for "madhappy": "why is madhappy so expensive" (150), "what is madhappy" (60), "how long does madhappy take to ship" (30).

## Open items (also in page human_check)
Single-source picks (13 disco, 2 Charm.io); Pleasures returns conflict; Sporty & Rich HQ; Madhappy materials 99/1 vs stored 100%; Neighborhood (3 hoodies) and Noah (4 hoodies) thin full-price ranges.
