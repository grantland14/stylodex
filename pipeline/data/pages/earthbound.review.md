# Review: stores like Earthbound (steps 2–5)

Run 2026-10-29 under the current run-page.md, enrich.md (incl. Ash's 2026-10-29 updates: disco
directory as uncited evidence, no secondhand picks, People Also Ask FAQs) and voice.md. Author: Ash.

## Scope and category

- Earthbound Trading Co. (earthboundtrading.com) is a US boho mall chain: 150 shops (About page),
  HQ Grapevine, TX (its return form), US shipping only. `kind: retailer` (sourced goods sold under
  its own name plus in-house designs, per its FAQ).
- Searches are about clothing: Earthbound's own /clothing page ranks for "stores like earthbound",
  and the threads and People Also Ask ask for boho/hippie clothing stores.
- Not mostly home goods. Online catalog counts: clothing 238 + accessories 754 (jewelry 577) = 992
  fashion items vs home + gift 890. Home + gift is the largest single department, but fashion is
  just over half. In scope.
- C = `dresses` (like-for-like item; tops 88, bottoms 72, dresses 69 are close). `womens-clothing`
  was not used because writing it would overwrite other pages' jeans-based womens-clothing rows.

## Gate (lib/pipeline.ts → judgeBrandsLikePage, now = 2026-10-29)

- Renderable picks: **10 / 10**. `pickProblems` returns `[]` for all 10. Anchor missing: none.
- **Indexable: true**, reasons `[]`. Title: "10 Stores Like Earthbound for Boho and Hippie Fashion".
- `npm test` 30/30 pass; `npm run lint:facts` ok.
- Caveat for Ash: the gate passes, but the evidence is weak (see G6/G13 and human_check). I'd hold
  indexing until a human reads the Reddit thread or confirms the listicles are acceptable.

## Picks

| Rank | Pick | Sources (T/E/P) | Dresses (regular price) | Relation | How it passes |
|---|---|---|---|---|---|
| 1 | ModCloth | 3 | $49–$329 (630) | similar | existing file, ships US |
| 2 | PacSun | 3 | none (page 403) | null | own homepage nav: women's dresses → sells_categories |
| 3 | Abercrombie & Fitch | 2 (E, P) | $70–$200 (86) | pricier | existing file |
| 4 | American Eagle | 2 (E, P) | none (all marked down) | null | existing sells_categories |
| 5 | Nordstrom | 2 (E, P) | none (sample only) | null | own dresses page → sells_categories |
| 6 | Soul Flower | 1 (T) | $44–$50 (2) | similar | new file, full products.json |
| 7 | FARM Rio | 1 (T FAQ) | $55–$1,310 (142) | similar | existing file |
| 8 | Indigo Luna | 1 (T FAQ) | AUD 129–169 ≈ $90.72–$118.86 (9) | pricier | new file, ECB 2026-10-28 |
| 9 | DÔEN | 1 (T FAQ) | $198–$2,998 (199) | pricier | new file, US shops |
| 10 | Spell | 1 (T) | $230–$399 (34) | pricier | existing file |

Anchor: $39.95–$69.95 across 29 full-price dresses (32 of 69 listing items marked down, excluded).

T = technicalustad.com (Sarah Khan, July 2025), E = etechshout.com (Jan 2026), P = plaintips.com
(undated). All three were found by WebSearch; none is in the Ahrefs US top 10, whose readable pages
don't name Earthbound alternatives (general boho lists, directories, Reddit/Facebook/TikTok
unreadable). E and P name nearly the same stores; they may not be independent.

Rejected with reasons in the page file: Free People, Urban Outfitters, ASOS (3 sources each, all
blocked), Zara, Anthropologie, Reformation, Sézane (blocked), American Apparel (wholesale only),
One Tribe Apparel (closed, now Peak Primal Wellness), Wish (marketplace), ThredUp (secondhand, rule
4c), other FAQ mentions (not dress stores).

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | "Stores like Earthbound" for US shoppers; clothing only (home goods out of scope and not covered). |
| G2 | PASS | No outside wording. Substance is the stores' own facts: regular-price dress ranges, sizes, shipping lines, return windows, named products. |
| G3 | PASS | Things a list reader doesn't get: Earthbound's $75 free-shipping line vs AE's identical one, no AK/HI shipping vs Nordstrom and PacSun, ModCloth past XXL, Soul Flower's pants vs its two dresses, Indigo Luna's three doubled sizes and AUD 35 returns, YPB minis as Abercrombie's cheapest dresses. |
| G4 | PASS | No wear/try/test claims; Ash's bio untouched. |
| G5 | PASS | author "Ash". Not YMYL. |
| G6 | **BLOCKED (publish)** | Every sentence traces (below), but the outside evidence is three SEO listicles outside the top 10, two possibly copies; three picks rest on one FAQ answer each (Indigo Luna's is about men's/gender-neutral clothing). Human decision. |
| G7 | PASS (N/A) | Not YMYL. |
| G8 | PASS | "10 Stores Like Earthbound…" is the real rendered count. |
| G9 | PASS | Intent (where else to buy Earthbound-style clothing) is served, with prices against Earthbound's own. |
| G10 | **FAIL (soft)** | Free People, the store every source names first, is missing (403), as are Urban Outfitters and Anthropologie. A searcher will expect them. human_check 1–3. |
| G11 | PASS | Intro states the yardstick and sort order; each body opens on the answer. |
| G12 | PASS | All prices and policies read 2026-10-29. |
| G13 | **FAIL** | Honest estimate Medium (below): no images, weak evidence, Free People absent. |
| G14 | PASS | Links via /go/, disclosure in byline, no implied testing. |
| G15 | PASS | 0 em dashes, 0 semicolons, no Markdown, no sentence over 30 words; openers varied. |

**Estimated Page Quality:** Medium. Strongest point: real regular-price dress ranges for the anchor
and 7 picks, and each body says what the store is good for against Earthbound and the other picks.
Holding it back: evidence quality, no Free People/UO/Anthropologie, no images.

**Estimated Needs Met:** Moderately Meets. Fix that moves it most: a human read of freepeople.com
(and UO/Anthropologie) to add the expected names, then `/img/` images.

## Voice check (voice.md "What we never write")

- Process narration: none (no "we checked", dates, "its About page says"). One sentence on sort
  order in the intro ("stores shopping guides name most often") describes the list, not our method.
- Spreadsheet sentences: none. Counts kept out (no "39,568 dresses", no "150 shops" as a point).
- Verdicts: none. Trade-offs are about attributes (shipping lines, return fees, size ranges).
- Invented experience: none.
- Hype: none ("must-have", "iconic", "high quality" absent).

## AI-voice scan (ai-voice-avoid.md)

- Found and fixed: "is the pick for/if" opening four bodies (varied to "where to go", "suits you
  if", "takes"); "The catch is" twice (one changed to "Returns are tighter"); judgement words not
  backed by a fact ("polished, preppy", "well-known", "steep for the look") removed.
- Checked: no rule-of-three lists in prose except the FAQ style answer (four nouns, from stored
  names), no "not just X but Y", no stacked hedges, paragraph endings vary.

## Fact trace

- Intro: sari-print (earthbound notes: 17 sari styles), no plus (has_plus false, size guide XS–XXL
  US 0–22), no AK/HI (shipping page), $39.95–$69.95 (prices.dresses).
- ModCloth: $49 min, $89 median (prices.dresses note), Garden Party Tapestry Midi Dress $89
  (product-images.json), 4X (size_range), Dangerfield/Orchid Bloom (notes), $150 free / $14 return
  fee (notes). Earthbound $75 (free_shipping_min_usd).
- PacSun: dress types (pacsun notes, homepage nav), Seal Beach surf shop, 46 states (Wikipedia
  note), $59 free shipping and AK/HI exclusion (notes), "Denim, Streetwear…" (known_for).
- Abercrombie: $70–$200, Lace-Trim Slash Midi $200, YPB minis $70–$85, dresses-and-jumpsuits page
  (prices.dresses note), $99 free shipping US/CA (notes, ships_to).
- American Eagle: $75 free, 60-day returns, $5 online returns / Real Rewards L3 (notes), frequent
  markdowns and AE77 Crinkle Lace Slip Cami Dress $148 (dresses note).
- Nordstrom: DÔEN Ischia $348, Baltic Born Veronica $65, HELSI Leslie gown $495 (notes, this run),
  free shipping incl. AK/HI, no return time limit (notes).
- Soul Flower: $44 / $50 dresses (prices.dresses), pants $38 and $40–$72 (notes), woman-owned since
  1999, Des Moines, organic cotton/hemp/recycled (notes, materials), 45-day returns, $150 free (notes).
- FARM Rio: $55 min (prices.dresses), Luize $248, Mystical Paradise $348 (product-images.json),
  XXS–XL plus a few 2XL, free returns and exchanges 30 days (notes).
- Indigo Luna: Frida AUD 129, Juni AUD 169, USD at ECB 2026-10-28 (prices note, fx), sizes XS/S,
  M/L, XL/2XL (notes), free US express over AUD 250 ≈ $176, no extra charges, 14 days, AUD 35 return
  (notes).
- DÔEN: Ema $198, Juliet Tunic $268, Anniversary $2,998 (prices note), Kleveland sisters and
  co-owner collective, B Corp, shops (notes), 30-day returns, final sale (notes).
- Spell: Byron Bay, US store in USD (notes), Frances Mini $230, Whimsy Garden Lace Gown $399
  (prices note), Irma Lace Halter Mini $295 (product-images.json), XXS–3XL, $9.95 / free over $150,
  30 days, sale store credit only (fields, notes).
- Closing: all from the above. "Both have stores": Nordstrom us_stores, PacSun Wikipedia store count.
- FAQ: owner, 1994, Grapevine (earthbound notes: About, Simon, return form); vendor code and visits,
  no named certification (FAQ, sourcing statement notes); style words and price range (notes,
  prices). Sources: Ahrefs matching-terms ("who owns earthbound trading company", "is earthbound
  trading co ethical"); People Also Ask ("What stores are similar to Earthbound?", "What style is
  Earthbound clothing?") recorded as `"source": "people_also_ask"`.

## Notes for the coordinator

- New brand files: earthbound, soul-flower, doen, indigo-luna, one-tribe-apparel (defunct).
  Appended to nordstrom and pacsun (sells_categories `dresses`, notes, sources). All via
  merge_brand.py, one patch at a time.
- No images: Earthbound serves no og:image; product photos need `product-images.mjs`
  (Earthbound is Magento, not Shopify).
