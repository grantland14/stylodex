# Review: brands like Affliction (top-up + rewrite)

2026-10-29, second pass. Two jobs: top the page up from 6 to 10–15 picks, and rewrite every line
of copy to the new `pipeline/voice.md` (Ash flagged lines like "Its 86 men's cotton tees start lower
than Affliction's" as robotic). Author: Ash. Category C = `graphic-tees` (unchanged: short-sleeve
tees are 844 of 1,802 products on afflictionclothing.com, see `category.why`).

## Picks: 10 renderable / 10 total

| Rank | Pick | Sources | Price (USD) | Relation |
|---|---|---|---|---|
| 1 | Ed Hardy | 3 (Obphoria, Zumiez, discobrands) | 45–115 | similar |
| 2 | Metal Mulisha | 2 (Obphoria, Zumiez) | 28–38 | cheaper |
| 3 | JNCO | 1 (Obphoria) | 50–80 | similar |
| 4 | Venum | 1 (Obphoria) | 24.99–89.99 | similar |
| 5 | Killstar (new) | 1 (discobrands) | 50–60 | similar |
| 6 | Iron Fist (new) | 1 (discobrands) | 39–45 | similar |
| 7 | Alchemy England | 1 (Obphoria) | 40 | similar |
| 8 | West Coast Choppers (new) | 1 (Zumiez co-stocking) | 37.99–39.99 | similar |
| 9 | Sullen | 1 (Obphoria) | 25–48.95 | similar |
| 10 | BlackCraft Cult (new) | 1 (discobrands) | 31.99–40 | similar |

All six existing picks kept (none fails a rule). Ranking: independent sources, then distance
between range midpoints and the anchor's $63.50 (`notes`).

**New evidence.** Ahrefs had no US SERP rows for 3 of the 4 keywords, so three WebSearch queries
looked for more editorial lists (`web_search` in the page file). One page counted:
discobrands.co "Brands Like Affliction", an affiliate brand directory, template-driven, no author.
It's the only outside source for Killstar, Iron Fist and BlackCraft Cult, so it is first-but-one in
`human_check`. It also adds a third source for Ed Hardy and Tapout and True Religion. RetailBoss
(alternatives to Ed Hardy, not Affliction), Sullen's own blog and two spam subdomains were dropped.
West Coast Choppers comes from the existing Zumiez co-stocking list, now backed by its Zumiez brand
page (21 items, mostly tees).

**Verified this run** (all through `merge_brand.py`, patches in the scratchpad; `npm run lint:facts`
passes): iron-fist, blackcraft-cult, killstar, west-coast-choppers created. Prices from each store's
public Shopify `products.json`, regular price only. Two filter fixes worth knowing: BlackCraft's
"salem" tags are a collection name, so the sale filter matches whole words; Killstar's "SALE-ID-*"
tags sit on FULLPRICE items with no compare-at, so they don't mark a markdown.

**Rejected this run** (in `rejected`): True Religion (307 loop again, 3 sources, top of the human
queue; would be pick 11), Raw State (no official store), Hot Topic (no prices render; a licensed-merch
mall retailer), Diesel (country-selector wall for scripted reads), Underground England and YRU
(footwear), G-Star RAW, Fear of God, Mastermind (not verified; weak fits on one directory source).
22 brands verified across both runs.

## Gate result (Check step)

`npx tsx` on a scratch script: `pipelinePages()` from `lib/pipeline.ts`, then `pickProblems` and
`judgeBrandsLikePage`, now = 2026-10-29.

```
anchor missing: []
ed-hardy 1 similar []        metal-mulisha 2 cheaper []   jnco 3 similar []
venum 4 similar []           killstar 5 similar []        iron-fist 6 similar []
alchemy-england 7 similar [] west-coast-choppers 8 similar [] sullen 9 similar []
blackcraft-cult 10 similar []
indexable: true  reasons: []
title: 10 Brands Like Affliction for Full-Coverage Graphic Tees
```

`npm test`: 27/27 pass. The four new brands have no `/img/` share image or product photos yet
(coordinator runs `images.mjs` / `product-images.mjs`); the gate doesn't need them for picks.

## FAQ sources (Ahrefs)

One call: `keywords-explorer-matching-terms`, keywords "affliction", US, terms=questions, volume desc,
limit 40.

| Question (US volume) | source_query |
|---|---|
| What is Affliction clothing? (250) | `what is affliction clothing` |
| Is Affliction fast fashion? (200) | `is affliction fast fashion` |
| Why is Affliction so expensive? (50) | `why is affliction so expensive` |
| Where can you buy Affliction clothing? (90) | `where to buy affliction clothing` |

Fast fashion and price are new: the stored About facts (made in the USA, own production) and the
tee finishing details in `copy_facts` now answer them without opinion. Skipped: meaning/bible/band/
book/game queries (not the brand), does it run small (no fit data, and we never imply wear), is it
good/bad/Christian/emo (no facts), how much are the shirts (folded into the price answer).

## G1–G15

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A "brands like Affliction" list for US shoppers is the site's purpose. |
| G2 | PASS | No outside wording used. The substance is our own store reads: price bands, size runs, shipping bars, return rules, tee weights and bodies. FAQ isn't PAA text. |
| G3 | PASS | Specifics a SERP reader can't get in one place: JNCO's 10.5oz vs 6.5oz tees, Sullen's Standard/Premium bodies, Iron Fist's no-wrong-size returns and no restocks, Killstar shipping from the EU in 7–14 days, WCC's 80% refund without tags, Affliction's $88 tees being the rhinestone and numbered ones. |
| G4 | PASS | No worn/tried/tested claims. Fit only as brands state it ("oversized", "boxy fit", "size down"). Ash's bio untouched. |
| G5 | PASS | `author: "Ash"`. Not YMYL. |
| G6 | PASS | Every claim traces (table below). Anchor verified. |
| G7 | PASS (N/A) | Not YMYL. |
| G8 | PASS | Title uses the real rendered count (10) and every pick sells graphic tees. |
| G9 | PASS | Each body places price and sizes against Affliction's $39–$88 and 4X, and points to another pick where it fits better. |
| G10 | PASS | Price, sizes, shipping and returns per pick, a "How to choose" guide by taste and budget, and four FAQs. |
| G11 | PASS | Intro 57 words, opens on a reader moment ($88 rhinestone tee), no method talk. Bodies open answer-first. |
| G12 | PASS | All prices read 2026-10-29; the template shows "Last checked". No dates in copy. |
| G13 | **FAIL** | Honest estimate is Medium (below). Copy can't fix the evidence base. |
| G14 | PASS | Affiliate links via /go/ with the disclosure. No implied testing. |
| G15 | PASS | 0 em dashes, 0 semicolons, no Markdown. Bodies end differently. |

**Estimated Page Quality:** Medium. The store data is real and the copy now teaches something per
brand, but 8 of 10 picks rest on one outside source, and the two lists behind them (Obphoria, a
brand's own blog, and discobrands, a template directory) are weak. Reddit, the real ranking SERP,
is still unread.
**Estimated Needs Met:** Moderately Meets. Biggest lift: read the Reddit threads in `human_check`
for independent evidence, then verify True Religion and add tee photos.

## Voice check (voice.md "What we never write")

None present: no process narration, no counts as the point of a sentence (the old "86 tees",
"102 tees", "22 tees" lines are gone), no verdicts, no invented experience, no hype. Each pick has an
answer-first opener with a named product and price, one taught detail (tee weight, shirt bodies,
reissue/no restock, account-credit returns, Iron Cross OG tee), an honest trade-off, and a pointer to
another pick. Best-for lines are use cases. "How to choose" names every pick but Alchemy.

## AI-voice scan (ai-voice-avoid)

| Pattern | Found | Fix |
|---|---|---|
| §34 "matters more than" | Iron Fist "That sizing advice matters more than usual here" | "So check the size chart first." |
| §24 colon reveal | Sullen "Here's the useful bit: …" | plain sentence |
| §40 "from X to Y" | Intro "from tattoo art and occult prints to biker…" | "some built on tattoo art and others on biker or fight-sport graphics". Price ranges keep "from $X to $Y" (voice.md prescribes it) |
| §23 rhetorical question | Closing "Want a heavier shirt?" | "If you want a heavier shirt, …" |
| §3 rule of three | Intro "prices, sizes and shipping"; BCC "witches, tarot and Salem" | cut / two items |
| §16 filler | "just" ×2 | cut |
| §44 repetition | Ed Hardy "tattoo art" ×2, "place to…" ×2; "The catch is" ×2 | reworded |
| Unsupported claims | Killstar "expect a wider body"; Iron Fist "close in spirit to Affliction's loudest prints"; Venum "two tees usually get you there", "more art than a fight logo", "cheapest fight-brand tees" (Metal Mulisha is cheaper); JNCO "the one place on this list" to buy jeans; Alchemy "Killstar and Iron Fist go further" (Iron Fist's range is as small) | all cut or rewritten to stored facts |
| Smell Test | Each body is built on that brand's own products and rules; none fits another entry unchanged | — |

## Fact trace

Brand files `data/brands/{slug}.json`; `copy_facts` and `candidates` in `data/pages/affliction.json`.

| Claim | Source |
|---|---|
| Rhinestone Affliction tee $88; $39 tees washed 100% cotton; $88 numbered pieces | `copy_facts[0–1]`; affliction `prices[graphic-tees]` max 88 |
| Affliction 4X, $39–$88, Southern California / Seal Beach, made in USA, own facilities, 2005 friends, full-coverage, nearly half tees | affliction `size_range`, `prices`, `notes` (Wikipedia HQ, About, production detail, catalog counts) |
| Zumiez carries Affliction (and WCC) | page `co_stocking`; west-coast-choppers `notes` |
| Ed Hardy: Don Ed Hardy's art, Eagle tee $45, $45–$115 rhinestone boxy, women's $29.25–$60, XXL, free >$100, sale final | ed-hardy `known_for`, `prices.note`, `size_range`, `free_shipping_min_usd`, `notes`; `copy_facts[2]` |
| Metal Mulisha: $28–$38, Conee $28, Deegan/Linkogle, FMX/supercross/MMA teams, San Juan Capistrano, 4XL most, 30 days, sale final | metal-mulisha `prices`, `notes`, `size_range`; `copy_facts[3]` |
| JNCO: 4 The People $80 10.5oz combed cotton 1996; Street Gambler $60 6.5oz; XXXL; LA since 1985; jeans $130–$350; $10 flat; 21 days | `copy_facts[4]`; jnco `prices`, `notes`, `returns_days` |
| Venum: UFC line, Fight Week tee $34.99, Fight Icon $29.99, most $24.99–$49.99, MX Basics $89.99, gloves/MMA gear, XXXL, free >$75 (lowest), 30 days unworn | `copy_facts[5]`; venum `prices.note`, `known_for`, `notes` |
| Killstar: Shadows With Eyes $60 sleeves art, $50–$60, XS–4XL, cotton jersey boxy, EU hub, 7–14 days, $175, 14 days to register | `copy_facts[6]`; killstar `prices`, `size_range`, `materials`, `notes` |
| Iron Fist: 2000s archive reissues, $39–$45, Bloody Mess $45 Godmachine, horror/tattoo art, oversized + size down, faults/unopened only, no restock | iron-fist `notes`, `prices`; `copy_facts[7]` |
| Alchemy: gothic jewelry, $40, Prince of Darkness $40, ring/pendant, Leicestershire 1977, Mummy/Frankenstein, Fort Worth, free >$100, account credit | alchemy-england `notes`, `prices`; `copy_facts[8]` |
| WCC: OG Classic $37.99, Iron Cross + Long Beach print, Paul Walker / Fast and the Furious, $37.99/$39.99, S–3XL, 4XL on half, $150 (2nd highest after Killstar $175), 30 days, 80% without tags | `copy_facts[9]`; west-coast-choppers `prices`, `notes`, `free_shipping_min_usd` |
| Sullen: tattoo-artist graphics, $25–$48.95, Medusa Standard $27.95, Hodu Reaper Premium $32.50, Standard/Premium bodies, 5X almost all, bigger sizes cost more, SoCal, free >$99, 30 days | sullen `notes`, `prices.note`; `copy_facts[10]` |
| BlackCraft: nearly all $35, Welcome To Hell $40, Lovers Tarot $35, tarot/Salem, SoCal attic 2012, kindness and positivity, ring-spun cotton unisex, S–3XL, free >$125, sale final | blackcraft-cult `prices.note`, `notes`, `materials`; `copy_facts[11]` |
| Closing and best-for lines | restate the facts above only |
