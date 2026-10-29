# Review: brands like Billabong

2026-10-29, first run. Author: Ash. url_prefix `brands`, slug `billabong`.

## Category

`boardshorts`. Billabong's hero product: its title is "Surf, Swim & Lifestyle Clothing", its men's
boardshorts collection is the main swim line (149 "Mens - Boardshort" products), and every kept
source groups it with surf brands. Like-for-like item: men's boardshorts at regular price (Roxy,
women's only, is priced on women's boardshorts and its copy says so). Elastic laybacks and swim
trunks are left out where a store files them separately. Reasons in `category.why`.

## Picks: 15 renderable / 15 total (the gate's cap)

| Rank | Pick | Sources | Boardshorts, regular price (USD) | Label |
|---|---|---|---|---|
| 1 | Volcom | 3 (disco, Lush Palm, Surfd) | 55–75 (25) | similar |
| 2 | Rip Curl (new) | 3 | 39.95–89.95 (118) | similar |
| 3 | O'Neill (new) | 3 | 29.99–98 (42) | similar |
| 4 | Hurley | 3 | 49.95–69.95 (29) | similar |
| 5 | Vissla (new) | 3 | 60–85 (99) | similar |
| 6 | RVCA (new) | 3 | 60–90 (25) | similar |
| 7 | Quiksilver (new) | 3 | 54–118 (50) | similar |
| 8 | The Critical Slide Society (new) | 2 (disco, Surfd) | 68–75 (52, US market) | similar |
| 9 | Roark (new) | 2 (disco, Lush Palm) | 69–85 (30) | similar |
| 10 | Katin (new) | 2 (disco, Lush Palm) | 75–79 (8) | similar |
| 11 | Howler Brothers (new) | 2 (Lush Palm, Surfd) | 69–89 (17) | similar |
| 12 | Roxy (new) | 2 (Lush Palm, Surfd) | 38–48 (7, women's) | cheaper |
| 13 | Deus Ex Machina (new) | 2 (disco, Surfd) | 99–129 (8) | pricier |
| 14 | Salty Crew (new) | 1 (disco) + Apart pool | 59.95–69.95 (32) | similar |
| 15 | Florence Marine X (new) | 1 (Surfd) | 75–119 (7) | similar |

Anchor: Billabong $55.95–$75.95 over 89 regular-price men's boardshorts (61 of 150 marked down).
Ranking: sources, then distance between range midpoints and $65.95 (`notes`).

**Evidence.** Ahrefs `serp-overview`, 4 calls: "brands like billabong" and "stores like billabong"
returned rows, "billabong alternatives" and "similar to billabong" returned none. Kept: Lush Palm
(22 Best Surf Brands, by Matt) and Surfd (Best Surf Brands guide). Dropped: Billabong/Roxy/Rip Curl
homepages, store brand indexes (Tillys, NEON WAVE, 10 Over Surf), Wikipedia category, Reddit (not
read), Quora (403), Swellinfo (redirects to a TollBit paid bot gateway, not followed), THIRTY-SQUARE
(self-promotional brand blog). One WebSearch added the disco directory ("12 Brands Like Billabong",
25 entries), the only page naming alternatives to Billabong specifically. Evidence only, never on the
page. The Apart pool (25 rows) is recorded, never counted.

**Brand files.** 13 created through `merge_brand.py` (patches in the scratchpad `billabong/patches/`):
quiksilver, rip-curl, oneill, rvca, vissla, roark, katin, the-critical-slide-society, deus-ex-machina,
howler-brothers, roxy, florence-marine-x, salty-crew. `boardshorts` prices added to billabong, hurley,
volcom. A Katin price note was corrected by re-merging its price entry. All prices come from each store's
public Shopify `products.json` (one page each, under 250 items), StylodexBot UA, regular = no
compare-at above price. All USD (The Critical Slide Society read through its `/en-us` market), so `fx` is null.
`npm run lint:facts` passes.

**Rejected** (in `rejected`): Vans (3 sources, vans.com 403s, no prices), Outerknown (sells trunks,
no boardshorts collection), Brixton (trunks only), Patagonia (unverified), Hawaiian Island Creations
(read and fits, but left out at the 15 cap: last on sources, multi-brand range), PacSun, Oakley, Nixon,
single-source brands not verified, pool-only brands.

## FAQ sources

One Ahrefs `keywords-explorer-matching-terms` call ("billabong", questions, US):
"what is billabong brand" (200), "who owns billabong" (100), "is billabong still in business" (80),
"is billabong expensive" (20). Skipped: "what is a billabong" (the word, not the brand), "does billabong
run small" (no fit fact stored).

## Gate result (Check step)

`npx tsx` on a scratch script: `pipelinePages()` from `lib/pipeline.ts`, then `missingAnchorFacts`,
`pickProblems` and `judgeBrandsLikePage`, now = 2026-10-29.

```
anchor missing: []
volcom 1 similar []        rip-curl 2 similar []      oneill 3 similar []
hurley 4 similar []        vissla 5 similar []        rvca 6 similar []
quiksilver 7 similar []    the-critical-slide-society 8 similar []
roark 9 similar []         katin 10 similar []        howler-brothers 11 similar []
roxy 12 cheaper []         deus-ex-machina 13 pricier []
salty-crew 14 similar []   florence-marine-x 15 similar []
indexable: true  reasons: []  rendered: 15 / 15
title: 15 Brands Like Billabong for Surf, Swim and Lifestyle Clothing
```
`npm test`: 30 pass, 0 fail.

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A directory of brands like X is the site's purpose. The page serves shoppers comparing surf brands' boardshorts. |
| G2 | PASS | The top results are generic "best surf brands" lists with no prices. This page's regular-price boardshort ranges, waist runs, shipping bars and return fees are its own data (proprietary-data §5). |
| G3 | PASS | Concrete trade-offs and numbers per pick (restocking fees, free-shipping bars, waist limits, return windows). No experience is claimed. |
| G4 | PASS | No first-person experience. "We" isn't used for any claim of trying or testing. Author Ash, bio untouched. |
| G5 | PASS | Author "Ash" with the bio in `lib/authors.ts`. Not YMYL. |
| G6 | PASS | Every number traces to a brand file field or note (fact trace below). |
| G7 | N/A | Not YMYL. |
| G8 | PASS | "15 Brands Like Billabong for Surf, Swim and Lifestyle Clothing": the real count and Billabong's own positioning. |
| G9 | PASS | Each pick opens with its answer (what it's best at plus a named product and price). The intro and closing compare against Billabong directly. |
| G10 | PASS | Price, sizes, shipping and returns per pick, plus a how-to-choose guide and 4 FAQs. |
| G11 | PASS | 66-word intro, then the picks. No preamble. |
| G12 | PASS | All prices and policies read 2026-10-29. The template's "Last checked" line carries the date. |
| G13 | PASS | Beats Lush Palm and Surfd on the buyer's question (what costs what, who ships where, return costs). Estimate High. |
| G14 | PASS | No implied testing. Affiliate links go through `/go/` with the disclosure (template). |
| G15 | PASS | Read as a whole. Each pick points to another for a specific need. No sentence over 30 words. |

**Estimated Page Quality:** High. Real regular-price ranges and store terms for 15 surf brands, which none of the ranking lists have.
**Estimated Needs Met (dominant intent):** Highly Meets. Would improve with product photos (coordinator's media step) and a confirmed per-category size chip for the anchor (see human_check).

## Voice check (`voice.md` "What we never write")

- Process narration: none (no "we checked", dates, "its About page says").
- Spreadsheet sentences: none. Rankings carry their reason ("the lowest bar here", "the longest window").
- Verdicts: none. Surfd's critical lines stay in the evidence notes, never in copy.
- Invented experience: none. No fit or feel claims.
- Hype: none. No semicolons, em dashes, bold or italics. A brand is "it" ("they" only for people, returns and orders).
- AI-voice scan (`ai-voice-avoid.md`): cut rule-of-three lists in O'Neill, Hurley, RVCA, Salty Crew, Florence and Roxy to two items. Split one 31-word Hurley sentence. Removed mood lines ("stand apart from the surf-brand crowd", "prints are where it gets bolder") that had no stored fact behind them.

## Fact trace (copy → field)

- Intro: $125 free shipping, $7.50 fee → billabong notes (shipping, refund); $55.95–$75.95 → billabong.prices[boardshorts].
- Volcom: $55 Lido Solid Mod, $70 Barnacle Stoney, 20"/19", Cinch Fly, hemp + REPREVE → volcom.prices[boardshorts].note; $99, Canada same rates, 30 days, $7 card refund → volcom notes.
- Rip Curl: $39.95 Bondi Volley, $89.95 Search Series, Mirage Core $49.95 recycled, mid fit, waists to 44 → rip-curl price note; Torquay 1969 → rip-curl notes + quiksilver notes; $99, no international, $12 fee → rip-curl notes.
- O'Neill: $29.99 / $98 / $58, welded seams, DWR, polyester-elastane → oneill price note; 1952 San Francisco shop → notes; Rewards $115, $6.99 fee → notes.
- Hurley: $69.95 Keith Haring, $49.95 Cannonball, Phantom lines $59.95–$65, DWR, mesh pockets, markdown share → hurley price note; $75.95 Andy Irons → billabong price note; $99, US only, $5/item → hurley notes.
- Vissla: $60 Breakers (coconut, REPREVE, elastic waist, "in and out of the water"), $85 High Seas → vissla price note; $125, 30 days, regional stores without Canada → vissla notes.
- RVCA: VA Solid $65, 94% recycled, 19", embroidery, $90 Anderson, waists to 38 (40 on 3) → rvca price note; ABG, $99, all 50 states → rvca notes.
- Quiksilver: ABG, same terms, $125, $7.50 → quiksilver notes; $54 Surfsilk Kaimana, REPREVE blend, $66 styles, $118 Faherty, waists 44 on 43 of 50 → price note.
- The Critical Slide Society: Bondi, USD market, $100 bar, 7-day returns → notes; Cahoots $68 (fixed waist, zip pocket, knee), Mellow 16" Trunk $75, even waists 28–38 → price note/feed.
- Roark: travel positioning, Laguna Beach, free 30-day returns, Canada, $125 → roark notes; Passage $69 (recycled, water-resistant, quick dry), Pro $85 → price note.
- Katin: Surfside 1954, Waterman $75, Walter Katin, keychain, $75–$79, waists 29–40 (42 on 2), $75 bar, 30 days, $8 → katin notes + price note.
- Howler Brothers: $59, 45 days, $7 fee / free store credit, Austin shops, surf + fly fishing + western wear → notes; Deep Set $79 (mesh liner, draining pockets), Los Vaqueros $79, Bruja $75 → price feed/note.
- Roxy: 1990, Quiksilver's women's line, US stores closed 2025, $99 / Canada $125 → roxy notes; Endless Summer $38 (2", fold-over), To Dye $42/$46, No Bad Waves $48, XS–XXL → price note/feed.
- Deus Ex Machina: Sydney 2006 motorcycles, $75 bar, Canada, returns at your cost, sale final → notes; Aerial $99 (regular fit, drawcord, patch pockets), Ricos $129 → price note.
- Salty Crew: San Diego 2013, surf/fish line, $100, $7.50, US only → notes; Crew 19" $59.95 (recycled, anti-rash thread), $69.95 top, waists to 44 → price note.
- Florence Marine X: John John Florence, North Shore tested, $125, $7 non-member returns, Canada/Mexico $20 no returns → notes; Standard Issue $75 (CORDLOC, phone pocket), Cordura Airtex $105, Airtex 2-in-1 $119, waists from 24 → price note.
- Closing and FAQs: same fields as above; ABG purchase finalized September 2023, Gold Coast 1973, Gordon and Rena Merchant → billabong notes (Wikipedia).

## Open items (also in `human_check`)

1. Lush Palm and Surfd are "best surf brands" lists that include Billabong, not alternatives-to-Billabong lists. They're counted as co-mentions. Without them, Howler, Roxy and Florence have no evidence.
2. The anchor's `size_range` still reads "S–XXL in mens tees" (shared field from the zumiez run). Hurley's and Volcom's are tee sizes too. On this page they'd sit next to boardshorts.
3. The Critical Slide Society: US shipping is inferred from its USD `/en-us` market plus "we ship to most countries".
4. hq_country choices for O'Neill (US, not the owner's Luxembourg) and Florence Marine X (US, from its North Shore base). Deus free-shipping bar: $75 (shipping page) vs $120 (stale meta).
