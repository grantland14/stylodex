# Review: stores like Claire's (`stores/claires`)

Checked 2026-10-29. Author: Ash. Category C = `earrings`. Anchor kind `brand` (own label).

## Gate result (lib/pipeline.ts → judgeBrandsLikePage, now = 2026-10-29)
- **Indexable: yes.** Reasons: none. 11 of 11 picks render.
- Title: "11 Stores Like Claire's for Ear Piercing and Jewelry".
- Order: Studs, Rowan (5 sources each), Lovisa (2), then 1-source picks with same-type accessories stores first (Charming Charlie, Ardene, Hot Topic, Forever 21, by price closeness to $29.99), then jewelry brands (Little Words Project, Astrid & Miyu, Gorjana, Missoma).
- Price labels vs Claire's $29.99–$29.99: similar (Studs, Rowan, Lovisa, Charming Charlie, Hot Topic), cheaper (Ardene, Forever 21), pricier (Little Words Project, Astrid & Miyu, Gorjana, Missoma). All match stored prices.
- `npm run lint:facts`: ok. `npm test`: 30 pass.

## Anchor
- Trading: Chapter 11 Aug 5, 2025; North American business bought by Ames Watson Capital (closed Sep 19, 2025); store locator lists 51 US state/territory directories. Status `verified`, `us_stores` true.
- Weak point: the online store is 16 products, and its only earrings are four $29.99 Disney Villains stacks (final sale). The anchor price is that one point. `size_range` "Earrings one size" (single-variant stacks) was set so the gate's anchor check passes. Both in `human_check`.

## Evidence
- Ahrefs: only "stores like claire's" returned rows. None of its pages was a readable editorial list (Similist excluded, Reddit unread, storeslike.com a tagline directory, CB Insights a business-competitor list, Fast Company 403).
- WebSearch found the kept pages: Bob Cut Mag's "Stores like Claire's" (2022) and coverage of the rivals taking Claire's customers: Star Tribune/TNS (2025), Retail Dive, Modern Retail, LAmag, Thingtesting, Insider Trends, Motley Fool AU. No disco directory page exists for Claire's.
- 8 of 11 picks have one source. Charming Charlie, Ardene, Hot Topic and Forever 21 rest on a 2022 list.

## G1–G15
| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A directory of store alternatives is the site's purpose. Earrings and piercing are what Claire's is known for (homepage title, FAQ, the Ahrefs question list). |
| G2 | PASS | Piercing prices and methods, age limits, earring-return exclusions (Lovisa, Ardene), regular-price earring ranges and shipping bars are read from each store. The SERP (Similist, Reddit, directories) has none of it. FAQ answers come from Claire's own FAQ, not PAA paraphrase. |
| G3 | PASS | Concrete trade-offs: free-with-stud vs paid service (Lovisa vs Studs vs Rowan), $55 vs $70 for two needle holes, earrings that can't be returned, singles at Gorjana, markdown-heavy stores. |
| G4 | PASS | No first-person experience or testing. Ash's bio untouched. |
| G5 | PASS | Author Ash. Not YMYL (piercing is mentioned as a service with ages and prices only, no health advice). |
| G6 | PASS | Every number traces to a stored fact (trace below). The title's 11 is the real count. |
| G7 | PASS | Piercing copy states who performs it and age rules from the stores' own pages. No safety claims of our own. |
| G8 | PASS | "for Ear Piercing and Jewelry" is Claire's own positioning. The page covers both: piercing services and earrings. |
| G9 | PASS | Serves "where do I go instead of Claire's" for earrings and first piercings. The FAQ covers the status question that dominates the searches (going out of business). |
| G10 | PASS | Price, piercing cost, ages, shipping and returns per pick, a decision guide, and four FAQs. |
| G11 | PASS | Intro 66 words, opens on the closed store / single online drop. No preamble. |
| G12 | PASS | Prices and policies from 2026-10-29. Bankruptcy and sale dates are stated. |
| G13 | PASS (caveat) | Clearly beats Similist and the directories on specifics (piercing prices, returns). Risk: thin, dated evidence for the 1-source picks. |
| G14 | PASS | No implied testing. Affiliate disclosure comes from the template. |
| G15 | PASS | Read as a whole. Openers vary. No sentence matches a sibling page (checked against every page with copy). |

**Estimated Page Quality:** High. Strongest reason: the piercing cost structure (free with a stud vs a paid service, ages, needle vs device) and the earring-return exclusions, taken from each store, which no ranking page gives.
**Estimated Needs Met (dominant intent):** Highly Meets. A second editorial source for the 1-source picks, and a full Claire's earring range once its e-commerce returns, would make it better.

## Voice check (voice.md "What we never write")
- No process narration, no dates of checking, no "its FAQ says".
- No spreadsheet sentences. Counts appear only with a reason ("only three earrings, all pricier", "Lovisa has thousands" as the point of comparison for choice).
- No brand verdicts, no invented experience, no hype words.
- No semicolons, em dashes or en dashes. Contractions throughout. Brands are "it".
- Each pick: answer-first opener with a named product and price, one useful thing, a trade-off, and a comparison with another pick. Best-for lines are use cases.
- One colloquialism ("Here's the catch").

## AI-voice scan (ai-voice-avoid.md)
- Fixed: a "from Venice to Georgetown" span (pattern 40) reworded. "organised" → "organized". "matched pairs from $35" (wrong for a single post) cut.
- Colon reveals: two (Lovisa piercing deal, Rowan metals). Kept.
- No rule-of-three lists in copy except Rowan's metals (four named, factual).
- Smell test: every sentence names a store, product, price or term.

## Fact trace (copy → stored field)
- Intro: 2025 closures → claires notes (Wikipedia, 700 US closures). Single Disney Villains drop → claires price note (16 products, one collection).
- Studs: Mini CZ Stud $22, Best Seller tag → studs.com feed (tiny-cz-stud). Claire's device, $29.99 kits → claires notes (FAQ). $40/$55, needle, ages 10+ → studs notes. Abbot Kinney, Georgetown → studs notes (locations). $75 shipping, 21-day returns, piercing jewelry excluded → studs notes.
- Rowan: nurses, 2 months + DTaP, $35, device jewelry from $60 → rowan notes. Metals, no nickel/brass → rowan notes (About). Bow CZ Huggies $36 → feed. $150 → rowan free_shipping_min_usd; Gorjana and Missoma 150. $55 vs $70 → studs notes ($55 two) and rowan notes ($35 per ear needle).
- Lovisa: most under $20 → 1,562 of 2,481 regular earrings under $20 (feed). 4mm Pearl Stud $2.99, Gold 3D Flower Hoop $12.99 → price note. Free piercing with stud, $34.99 steel, $59.99 14KT, nose/helix not everywhere → lovisa notes. Earrings not returnable for change of mind, $45 → lovisa notes.
- Charming Charlie: $16–$56, Daisy $16 in four colors → price note. Shop By Color, handbags, scarves, sunglasses → site nav (shipping-policy page header). 1,203 of 1,279 marked down → price note. 7-day refund, 30-day credit, $50 → notes.
- Ardene: 12-Pack $7.90, 14K Gold Plated Tubular Hoops $7.90, max $17.90 → price note. Canadian, US states → ardene notes (Wikipedia). Clothes, shoes, bags → meta. Rewards/$60, earrings not returnable → notes. Hot Topic $7.90, 30 days → hot-topic price and returns.
- Hot Topic: Captain America $7.90, Cinnamoroll set $14.90, Kyoshi $115.90 → price note. Claire's Disney Villains stacks → claires price note. $7.99, $75, 30 days, body jewelry final → hot-topic notes.
- Forever 21: Etched Hoop $6.99, $5.99–$6.99, Faux Pearl Geo Drop → earrings price note. 51 of 55 marked down → note. $50, 30 days, clearance final → forever-21 fields/sale_pattern. Ardene comparison → ardene notes.
- Little Words Project: Breathe Puffy Huggies $38, Blessed Scalloped Bezel Studs $48, three earrings → price note. Word bracelets, pass it on, trackable → notes (meta). King of Prussia, Roosevelt Field, Disney Springs → notes (Our Stores). Lovisa "thousands" → 2,481 regular earrings. 30 days, $60 → notes.
- Astrid & Miyu: Bold Medium Hoops in Gold $110, $35 titanium post, median $125 → price note. London, LA/NY stores, Bloomingdale's 59th Street, piercing and permanent jewelry → notes. Free US delivery and returns, 28 days, sets → notes. Gorjana $30 → price.
- Gorjana: Bee Single Stud $30, Crew Single Huggie 8mm $150, diamond studs over $1,000 → price note. California (Star Tribune), stores nationwide, free pickup → notes. $8 under $150, 30 days unworn → notes.
- Missoma: Bar Stud $65, Pave Initial Single Stud $65, Chubby Oval Medium Hoop $122, $9,282 → price note. Vermeil, London (GB) → materials/hq. 90 days, $150 → missoma fields.
- How to choose: ages and methods → rowan/studs notes. Under $18 (Ardene $17.90, Forever 21 $6.99), Lovisa $49.99 → prices. $35 and $65 → Astrid & Miyu and Missoma min prices. Return exclusions → lovisa/ardene notes.
- FAQ: bankruptcy, Ames Watson, closures → claires notes (Wikipedia). Kit pricing, nose at select stores, nose $59.99 → claires notes (FAQ). Icing discontinued, icing.com redirect, 19–28 audience → claires notes / Wikipedia.
