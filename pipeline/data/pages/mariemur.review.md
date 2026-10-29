# Review: brands like Mariemur (`brands/mariemur`)

Checked 2026-10-29. Author: Ash. Category C = `bras`.

## Gate result (lib/pipeline.ts → judgeBrandsLikePage, now = 2026-10-29)
- **Indexable: no.** Reason: `only 2 publishable picks (need 6)`. Both picks render (Aubade, La Perla); the page is noindex and stays out of the sitemap.
- Title: "2 Brands Like Mariemur for Strappy Lingerie and Leather Harnesses".
- Price labels: Aubade `similar` ($119–$439 overlaps $89–$169), La Perla `pricier` ($365+).
- Anchor missing facts: none.
- `npm run lint:facts`: every brand this page wrote passes. The command exits 1 on three other agents' files (2020ave, dicks-sporting-goods, shop-style-shark), not touched here.

## Why so few picks (not padded)
- Ahrefs serp-overview returned no rows for all four keywords.
- Eight web searches found one publisher that recommends brands *as alternatives to* Mariemur: amoreze.com, a Berlin harness maker, in two blog posts (counted as one source). Everything else was Apart Style (never counts), CB Insights / Similarweb algorithmic competitor lists, Thingtesting (empty), or favourites lists that merely include Mariemur.
- The disco directory has no Mariemur page. No co-stocking retailer found. No Apart Style pool rows.
- From Amoreze's five names: Aubade and La Perla verified. Agent Provocateur and Rigby & Peller 403 the bot and WebFetch (unverified, not worked around). Amoreze rejected: its only evidence is its own blog.

## Anchor
- `verified`. mariemur.com is Shopify, USD, country US. Bras collection feed: 27 bras, $89–$169, none marked down. Shipping and returns from the footer-linked /pages/shipping and /pages/returns (Shopify robots.txt disallows /policies/, so those weren't fetched).
- `hq_country` US and `founded_year` 2017 come from CB Insights only (human_check).

## G1–G15
| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A brands-like page is the site's purpose; bras are Mariemur's core lingerie piece and both picks sell them. |
| G2 | PASS | US prices from each store, sizing systems compared (letter vs band-and-cup vs Italian numbers), shipping thresholds, duties, return windows. |
| G3 | PASS | Concrete trade-offs: Aubade's 30 days vs Mariemur's 45, cord/chain harnesses not leather; La Perla's $25 shipping under $680, cups stop at E. |
| G4 | PASS | No first-person experience, nothing about how anything feels or fits. Bio untouched. |
| G5 | PASS | Author Ash. Not YMYL. |
| G6 | PASS | Every number traces to a stored fact (below). "2" in the title is the real count. |
| G7 | N/A | Not YMYL. |
| G8 | PASS | known_for "Strappy Lingerie and Leather Harnesses" is from Mariemur's own meta description. Page covers bras only. |
| G9 | FAIL (evidence) | Two picks can't serve "brands like Mariemur" well, and neither sells leather harnesses. The closing says so. This is why the page is noindex. |
| G10 | PASS | Price, sizes, shipping, returns per pick, a decision guide and 3 FAQs. |
| G11 | PASS | Intro 56 words, opens on the XS–2XL size moment, no preamble. |
| G12 | PASS | Prices from 2026-10-29, all USD; "Last checked" from the template. |
| G13 | BLOCKED (publish) | No editorial page-one competitor exists to beat; Apart Style's page is excluded. Can't judge until more evidence exists. |
| G14 | PASS | No sales voice; disclosure from the template; trade-offs for both picks. |
| G15 | PASS | No sibling page uses Aubade or La Perla; copy written fresh. |

**Estimated Page Quality:** Medium. The facts are solid and US-priced, but two picks from one self-interested source is thin.
**Estimated Needs Met:** Moderately Meets at best. Shoppers after Mariemur's leather harnesses get no match; band-and-cup bra shoppers are served.

## Voice check (voice.md "What we never write")
- No process narration, no dates, no source names. No spreadsheet sentences. No verdicts, no invented experience, no hype.
- No semicolons, em dashes or en dashes in the copy. Contractions throughout. A brand is "it".
- Each pick opens answer-first with a named product and price, teaches one thing (Aubade's G-cup Sweetessence, La Perla's Italian numbering), states a catch and points to the other pick. Best-for lines are use cases.

## AI-voice scan (ai-voice-avoid.md)
- Fixed: one 32-word La Perla sentence split. "Sized properly" (implied a verdict on Mariemur) changed to "sized by band and cup". "Detail you can see across a room" cut as unsupported.
- No rule-of-three lists and no colloquialisms. Smell test: every sentence names a brand, product, price, size or term.

## Fact trace (copy → stored field)
- Intro: XS to 2XL → mariemur size_range + price note.
- Aubade: Sheer Emotion Half cup $139, see-through moulded tulle cups, Sweetessence Spacer plunge $139 up to G → aubade notes. $119–$439 → price. Paris, 1958 → notes (who-are-we, history). Bands 30–42, cups A–H → size_range + notes. Free US shipping and returns, no minimum, 30 days → notes, returns_days. Chain and cord harnesses, no leather → notes (feed search). Mariemur $12.90 below $350, 45 days, $89–$169 → mariemur notes, free_shipping_min_usd, returns_days, price.
- La Perla: Ada Masotti, Bologna, 1954 → notes (our story). Romantica $365 Leavers lace and tulle, Pure Black $390 silk satin soutache, sculptural → notes + price note. More than twice $169 → $365 > $338. IT 1–5, cups A–E, UK 32–40 → size_range + notes. Duties included, $25 under $680, 30 days → notes, returns_days.
- Closing: all figures above; "leather harnesses have no match here" → aubade and la-perla feed-search notes.
- FAQ: USD store, US warehouse, Middletown PA returns, next business day, $12.90, 3–6 days, $350, 45 days, free US label, panties and latex non-returnable, Italian leather, lace, $89–$169 → mariemur notes and price. Questions from Ahrefs matching-terms (questions) for "mariemur": "is mariemur legit", "where does mariemur ship from", "what is mariemur". "Where is mariemur based" skipped: the only stored answer is a registered-agent address.

## Open items (also in `human_check`)
1. Whether a competitor's own blog counts as evidence. If not, the page has zero picks.
2. Mariemur hq_country / founded_year rest on CB Insights.
3. Mariemur returns: 45 days (footer page, FAQ) vs 30 on an older unlinked page.
4. Agent Provocateur and Rigby & Peller need a human check (403). Even with both, the page would have 4 picks.
5. `product-images.mjs` has no `bras` word list (its `underwear` pattern covers bralettes only).
