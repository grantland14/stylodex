# Review: brands like Kill Crew (steps 2–5)

Produced 2026-10-29 end to end per `pipeline/run-page.md`. Author: Ash. Category C = `tees` (Tees):
the Men's T-Shirt collection is Kill Crew's main line (192 regular-price short-sleeve tees, $40–$48,
sub-collections by cut). Same scope as the YoungLA and Darc Sport pages (men's short-sleeve tees),
which share 6 of the 9 picks.

## Enrichment summary

- **SERP** (Ahrefs `serp-overview`, US, 4 calls): only `brands like kill crew` returned rows;
  `stores like`, `alternatives` and `similar to` returned none. The top 10 is Facebook (the
  fb-answers "Kill Crew ... Alternatives" page returned only a login shell to WebFetch), Reddit
  (refused, not worked around), TikTok, Instagram, YouTube, one Lemon8 AI overview (read: no
  alternatives framed), and roundups about Gymshark, Lululemon and activewear in general.
- **Kept:** disco's "21 brands like Kill Crew" (found by web search outside the top 10; the one
  unsigned directory Ash cleared; never cited on the page). Its "cheaper" sub-list and brand page
  name the same brands and are counted once. "YouthLA" on disco links youngla.com, so it is YoungLA.
- **Read, not counted:** Grazia profile (no alternatives), Lemon8 discover page (no brands named).
  1800dtc and thingtesting skipped (unsigned directories without Ash's OK); apartstyle.com never counts.
- **Pool:** `public.brands` has no Kill Crew row, so no `brand_relationships` candidates.
- **Co-stocking:** none; only secondhand listings (Depop, Vinted, eBay), not used.
- **Verified:** anchor and six pick files reused from the YoungLA and Darc Sport runs (all checked
  2026-10-29, tees prices same scope, not overwritten). Patches merged one at a time via
  `python3 -I pipeline/merge_brand.py`: `2xu` (new file, US store), `outdoor-voices` (tees price,
  note), `nike` (tees price, note). Patches in the scratchpad `kill-crew/patches/`.
- **Picks: 9 of 21 sourced candidates.** Rejected with reasons in the page file: Tapout
  (off_category, sells nothing direct), Alphalete, Under Armour, Lululemon, Rhone, Vuori (blocked:
  403 / Client Challenge / 503 / client-side render), Fabletics (membership pricing, human check
  from the athleta run), Lotto (US shoppers charged in USD at a rate the feed doesn't show), BBUC,
  Attaquer, Black Sheep Cycling (cycling-kit labels without a like-for-like tee range), Ethika
  (unreadable, underwear-led). 9 is below the 10–15 target; nothing padded.

## Gate result (Check step)

`npx tsx` scratch script: `pipelinePages()` from `lib/pipeline.ts`, `judgeBrandsLikePage`,
now = 2026-10-29.

```
title: 9 Brands Like Kill Crew for Gym Wear With a Mental Health Mission
indexable: true reasons: [] anchorMissing: []
rendered: nike, 2xu, darc-sport, youngla, inaka-power, outdoor-voices, gymshark, ten-thousand, asrv 9/9
every pick: pickProblems [] (inaka-power missingBrandFacts: returnsDays, not a gate blocker)
```

**Gate: 9/9 picks render; indexable.** `npm test`: 30 pass. `npm run lint:facts`: my files clean;
at the final run it flagged `2020ave`, `shop-style-shark` (`known_for` "Women's…", the apostrophe
trips the quote rule) and `dicks-sporting-goods.parent_company`, written by other agents minutes earlier, not touched.

Price labels (anchor $40–$48): similar = Nike $32–$55, 2XU $35–$55, Darc Sport $45, YoungLA $30–$48,
Outdoor Voices $38–$68, Gymshark $22–$46; pricier = Inaka Power $50, Ten Thousand $62–$88,
ASRV $68–$108. Rank = midpoint distance from $44 (all single-source).

## FAQ sources (Ahrefs)

One call: `keywords-explorer-matching-terms`, keywords "kill crew", US, terms=questions, volume
desc, limit 40.

| Used | Question (US volume) | source_query |
|---|---|---|
| Yes | Is Kill Crew legit? (150) | `is kill crew legit` |
| Yes | What is the Kill Crew brand? (40) | `what is kill crew brand` |
| Yes | How does Kill Crew support mental health? (0) | `how does kill crew support mental health` |

Skipped: who owns (no stored owner), where located / based (Reno store address vs Grazia's Los
Angeles: in human_check), "is kill crew cringe" / "a good brand" (opinion), ambassador, sales and
Black Friday (no stored sale pattern), Odysseus and other off-topic rows.

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A "brands like Kill Crew" list for US shoppers is the site's purpose. |
| G2 | PASS | disco supplies only names; the substance is our store reads: regular-price tee ranges, sizes, free-shipping bars, return terms, named products with prices. |
| G3 | PASS | Specifics no ranking page has: Nike's member-only free shipping and returns, 2XU's Force Tech Tee and 4XL Aero colors, Darc Sport's single full-price design, OV's XL ceiling, Gymshark's 60%-off final sale. No fit or feel claims. |
| G4 | PASS | No worn/tried/tested claims, no process narration. Bio untouched. |
| G5 | PASS | `author: "Ash"`. Not YMYL. |
| G6 | PASS | Every number traces to a stored field (below). Anchor verified. Nike range is a partial read, stated in the price note and human_check; copy gives only named products and the stored range. |
| G7 | PASS (N/A) | Not YMYL (the mental-health FAQ describes the brand's giving only). |
| G8 | PASS | Title count 9 is the real count; every pick sells men's tees at full price on its own US store. |
| G9 | PASS | Each body places price, sizes, shipping or returns against Kill Crew's $40–$48, 5XL, $75 bar and 30 business days. |
| G10 | PASS | Price, sizes, US shipping and returns per pick; decision guide by graphic, price, fabric and size; anchor FAQ. |
| G11 | PASS | Intro 65 words: the reader's moment, why they look, how the list is sorted. |
| G12 | PASS | All prices from 2026-10-29 (`checked_at`); no dates in copy. |
| G13 | **FAIL** | Honest estimate is Medium: every pick rests on one directory source, three picks (Nike, 2XU, Outdoor Voices) are broad sportswear rather than gym-graphic labels, and 9 is under target. Copy can't fix it. |
| G14 | PASS | Affiliate links via /go/ with disclosure (template). No implied testing. |
| G15 | PASS | 0 em dashes, 0 semicolons, no Markdown, no sentence over 30 words. Sentences compared against every page file (token-overlap scan): near-repeats of the YoungLA and Darc Sport pages (Inaka opener, ASRV sizes, Ten Thousand range and returns, closing lines, Best for lines, mental-health FAQ) rewritten. |

**Counts:** PASS 14 · FAIL 1 (G13) · BLOCKED 0.

**Estimated Page Quality:** Medium. Real, dated store data on all 9 picks and a page built around
what Kill Crew buyers trade off (graphic vs fabric, 5XL, returns), but a single outside source and
some loose fits.

**Estimated Needs Met (dominant intent):** Moderately Meets. Biggest lifts: verify Alphalete and
Under Armour (human_check), read the Reddit threads for independent evidence.

## Voice check (voice.md "What we never write")

- Process narration: none. Spreadsheet sentences: none (counts only as reasons: "three of them come
  in under the price of two Kill Crew tees"). Verdicts: none. Invented experience: none ("try a
  size on" is the reader at YoungLA's store). Hype: none.
- Moves: answer-first opener with a named product and price per pick; why each fact matters
  (member perks, $150 vs $75 bars, final sale vs size certainty, XL ceiling); one useful thing per
  brand (Nike's Dri-FIT naming, 2XU's lifting tee vs running tees, Darc's only full-price design,
  YoungLA's licensed capsules and store, Inaka's shorts-first catalogue, OV's low-sweat vs mesh
  lines, Ten Thousand's 14-day post rule, ASRV's fabric names); a trade-off and a pointer to another
  pick in every body; use-case Best for lines; How to choose by graphic, price, fabric and size.

## AI-voice scan

| Pattern | Where found | Fix |
|---|---|---|
| §3 rule of three | Intro three "maybe" options; closing "Nike, 2XU and YoungLA"; Inaka "shorts, a belt and a tee" | cut to two |
| §24 colon reveal | YoungLA "licensed capsules: the 4259…"; Gymshark "a different story, though: at 60%…" | split into two sentences |
| §8 sentence length | Gymshark 31 words | split |
| Pronoun | Ten Thousand "They cost" | "The shirts cost" |
| Unsupported claim | Nike "sells for every sport"; YoungLA "fitted basic"; Inaka "plainer pick", "oversized cuts" at full price; OV "softer", "smallest top size on this list" (Nike tee sizes unread); FAQ "best known for its tees" | replaced with stored facts or cut |
| Repeated wording | YoungLA "the longest window here" (Nike also 60 days) | "tied with Nike" |
| Smell Test | each body is built on that brand's own products and terms | — |

## Fact trace

Brand files `data/brands/{slug}.json` (price `note`, `notes`); YoungLA, Inaka, Ten Thousand and
ASRV product names from their price notes and `data/product-images.json`.

| Copy | Field |
|---|---|
| Kill Crew $40–$48, 5XL, $75 free shipping, 30 business days, athletic/relaxed/oversized, sweat-wicking collection, mission and partners, killcrew.co | `kill-crew` prices.tees, size_range, free_shipping_min_usd, notes (collections, About, refund policy), website_url |
| Nike $32–$55; Loose T-Shirt $37, Strike Soccer Top $47, ACG Dri-FIT $55, Swoosh $32; member free shipping $50+, free returns, 60 days; sneakers | `nike` prices.tees note; notes (hoodie page, returns policy); known_for |
| 2XU Force Tech Tee $50 abrasion-tough knit; Aero Tee $35 mesh back, two colors to 4XL; most to XXL; compression and triathlon, Australian; running and training collection; free over $75 from California; 30 days from purchase; clearance final sale | `2xu` prices.tees note, notes, known_for, hq_country |
| Darc Sport Big Wolf Head Premium Oversized Tee $45, Grunge Raw Hem Box Cut Tommy Muscle Tee $45, rest marked down, S–3XL, $150 bar, final sale | `darc-sport` prices.tees note, notes, size_range |
| YoungLA 60 days from delivery, $30 start, 401 Essential Jacked Tees $36, 4259 Batman Compression Tees $48, LA, limited quantities, Westfield Topanga store, XXL, $100 bar | `youngla` prices.tees note, notes |
| Inaka $50 full-price tees, Off the Grid Cropped (camo), Day Off Cropped (cream, black), Anarchy Tee, Sugar Land, shorts biggest line, 10mm belts, XXL | `inaka-power` prices.tees note, notes, size_range; product-images |
| OV Everyday Classic $38 organic cotton jersey, low-sweat; ThinkFast Mesh $68 moisture; XL; most marked down; $100 bar; 30 days, final sale excluded | `outdoor-voices` prices.tees note, notes, free_shipping_min_usd, returns_days |
| Gymshark Crest $22, Power Washed Oversized Boxy $40, Power T-Shirt $36, $75 bar, XS–3XL, 30 days from delivery, 60%-off final sale | `gymshark` prices.tees note, notes |
| Ten Thousand $62–$88, Core $62, Field $68, Interval from $78, styles in many colors, free shipping and returns over $150, prepaid label, 30 days, 14 days to post, XS–XXL, New York | `ten-thousand` prices.tees note, notes |
| ASRV AeroSilver Established $68, SUPIMA Ice-Skin Reversible $108, Tech-Waffle and Laser-Vent $78, Tech Essential Oversized Boxy $88, Vista, XS–XL with XXL on most, no free bar, original shipping not refunded | `asrv` prices.tees note, notes |

## Human check (also in the page file)

Nike's full tee range (partial WebFetch read; Nike ranks #1 on it); Alphalete, Under Armour,
Lululemon, Rhone, Vuori (blocked); Reddit and Facebook evidence; Kill Crew HQ (Reno store address
vs Grazia's Los Angeles, 2020); OV CloudKnit tees excluded on a `SALEONSALE:` tag.
