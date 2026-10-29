# Review: stores like Cider (steps 2–5)

Written 2026-10-29. Author: Ash. Copy in `cider.json` → `author`, `copy`.
Checked with `lib/gate.ts` through `lib/pipeline.ts` (tsx script, now = 2026-10-29):

- Title: "8 Stores Like Cider for Stylish, Trendy Womenswear"
- Rendered picks: lucy-and-yak, yes-friends, mayamiko, frankie-collective, kotn, happy-earth, thinking-mu, spell. `pickProblems` returns `[]` for all 8.
- Verdict: **not indexable**, one reason: `anchor missing: imageUrl` (the coordinator's media step fills it). Every other anchor fact is present.
- `npm test`: 27/27 pass. `npm run lint:facts`: ok.

## Category

`dresses`. Cider sells only its own label (`kind: brand`), so C is a product type. Dresses lead its site: the first clothing filters are "Midi Dresses" and "Short Dresses", and dresses are a top-level category. Good On You's "alternatives to CIDER's best sellers" also gives dresses two of its nine slots.

## Picks: 8 renderable of 8 (target 10–15, floor 6, not padded)

| Rank | Pick | Sources | Dresses, regular price | Relation |
|---|---|---|---|---|
| 1 | Lucy & Yak | 2 (Imperfect Idealist, Eco-Stylist) | $109–$119, 9 items | pricier |
| 2 | Yes Friends | 1 (Eco-Stylist) | £39–£45 ($51.82–$59.79), 2 items | similar |
| 3 | Mayamiko | 1 (Imperfect Idealist) | £39–£159 ($51.82–$211.27), 25 items | similar |
| 4 | Frankie Collective | 1 (Eco-Stylist) | $80–$90, 12 items | pricier |
| 5 | Kotn | 1 (Good On You) | CA$118–158 ($84.01–$112.48), 8 items | pricier |
| 6 | Happy Earth | 1 (Good On You) | $98, 1 item | pricier |
| 7 | Thinking MU | 1 (Good On You) | €150–€190 ($167.00–$211.53), 4 items | pricier |
| 8 | Spell | 1 (Good On You) | $230–$399, 34 items | pricier |

Anchor: Cider, dresses $24.90–$77.90, but this is a **12-dress sample** from page 1 of Clothing. The dresses category page gave 0 results to WebFetch and a robot check to a plain fetch, so I stopped fetching it (no workaround). FX: ECB 2026-10-28.

Why only 8. All three readable SERP lists (Good On You, Imperfect Idealist, Eco-Stylist) recommend *ethical* alternatives to Cider, so the picks are pricier, more transparent brands, not cheap trendy stores like Shein or Princess Polly. The copy says so up front ("Expect to pay more, with two exceptions"). Of the 21 named candidates:
- 8 are picks.
- 7 are unverified or closing: Reformation (403), Pact (captcha), Whimsy + Row (no products readable), OMNES (403 or parked domain), TAMGA (Shopify "store unavailable"), For Days (0 products), Loud Bodies (final closing sale).
- 2 don't ship to the US: Kings of Indigo and LANIUS.
- 4 are off-category or have no regular-price dresses: Gaia Segattini (every dress marked down), Dawn Denim, Boldwill, and Dazey LA (now Dani Dazey, mostly home decor).

None of the 38 Apart Style pool brands has outside evidence on a readable page. Reddit, TikTok and Facebook weren't read.

Two picks are thin on dresses: Happy Earth (1 dress) and Yes Friends (2 regular-price dresses). Their copy says so and points to a better pick.

## FAQ sources (Ahrefs)

One call: `keywords-explorer-matching-terms`, "cider clothing", US, terms=questions, volume desc, limit 40.

| Used | Question (US volume) | source_query |
|---|---|---|
| Yes | What is Cider clothing? (450) | `what is cider clothing` |
| Yes | Where is Cider clothing from? (300) | `where is cider clothing from` |
| Yes | Is Cider clothing ethical? (90) | `is cider clothing ethical` |

Skipped because no stored fact answers them without a verdict or invented experience: "is cider clothing legit" (500), "is cider a good clothing brand" (250), "good quality" (150), "does cider clothing run small" (50), and the store and men's-clothing questions.

## Quality Gate (G1–G15)

| # | Result | Evidence |
|---|---|---|
| G1 | PASS | The page answers "stores like Cider" for US shoppers and fits the directory's purpose. |
| G2 | PASS | Every price, size range, shipping and returns term comes from each store, and these aren't on the ranking pages: Good On You gives no prices, and none of the three lists compares picks. |
| G3 | PASS | Concrete trade-offs and numbers: return clocks (14, 15 and 30 days, from order or delivery), duties included or not, sizes paired XXS/XS to 2XL/3XL, store credit only. |
| G4 | PASS | No first-person experience. "We'd start" is an opinion backed by facts. Ash's bio is untouched. |
| G5 | PASS | Author is Ash. The topic isn't YMYL. |
| G6 | PASS | Each claim traces to a stored fact (see the trace below). Price chips match the stored rows. The title's "Stylish, Trendy Womenswear" comes from Cider's own meta description. |
| G7 | N/A | Not YMYL. |
| G8 | PASS | The title count (8) is the real count. The body delivers stores like Cider, honestly framed as ethical, mostly pricier swaps. |
| G9 | PASS | The dominant intent is alternatives to Cider. The ethical intent the SERP shows (Good On You, Eco-Stylist, "is cider ethical") is served directly, and price closeness is stated per pick. |
| G10 | PASS | Price, sizes, US shipping and returns are covered for every pick, and How to choose sorts the picks by budget and returns. The one gap: same-type cheap stores are absent (see human_check). |
| G11 | PASS | The intro gets to the list in 72 words, with no preamble. |
| G12 | PASS | Prices and policies were checked 2026-10-29. The page carries a "Last checked" date. |
| G13 | PASS (borderline) | It's more specific than Good On You (no prices) and Imperfect Idealist (2023). Eco-Stylist is close but covers Cider's ethics more than shopping. With 8 picks, it's short of the 10–15 target. |
| G14 | PASS | No client or affiliate is ranked first. Ranking is by sources, then price closeness. No testing is implied. |
| G15 | PASS | The bodies read as one piece and cross-reference each other. |

- **Estimated Page Quality:** High. The real dress prices, sizes, duties and return clocks for 8 alternatives are original data no ranking page has.
- **Estimated Needs Met (dominant intent):** Highly Meets for the ethical-alternative reading, Moderately for "cheap stores like Cider". Readable outside evidence for same-type stores would make it better.

## Voice check (`voice.md` "What we never write")

- No process narration. "Ordered by how often they're recommended" says how the list is sorted, which the intro rules allow.
- No spreadsheet sentences. "Four styles in XS to XL, so you'll see the whole thing in a minute" pairs the count with why it matters.
- No verdicts on brands. The ethics FAQ criticises a specific fact (no supplier list), with its source stored.
- No invented experience, no hype words.
- Contractions are used, and each brand is "it". No semicolons, em dashes or bold in the copy.

## AI-voice scan (`ai-voice-avoid.md`)

- Fixed: a vague filler clause in Happy Earth ("suits anyone between the two ranges") became the paired-size fact.
- Fixed: "knee-length" was removed from Mayamiko because the length isn't stored.
- Checked and none found: the AI words in §13–14, rule of three, sentences over 30 words, colon reveals (Kotn's "the basics option: simple dresses…" is a definition, not a reveal) and trailing significance tags.

## Fact trace

- **Intro.** "Dresses under $80" → cider prices max $77.90. "Doesn't publish a supplier list" → cider notes (Eco-Stylist, Imperfect Idealist). "Two exceptions" → yes-friends and mayamiko are `similar`.
- **Lucy & Yak.** $109–$119 and Layla $109 → price note. Supplier partners with address and audit → notes, /pages/our-supplier-partners. US 0–28, Petite, Tall → size page. Overalls → Imperfect Idealist evidence and note. Free over $150 and 30 days → notes.
- **Yes Friends.** £39–£45 and Cord Mini £45 → price note. 2021 and "price of a pint" → Our Story note. XXS–XXL. $9.95 with duties included → delivery note. 30 days.
- **Mayamiko.** Bold and one-of-a-kind → Imperfect Idealist evidence. Rose £39, Dalitso £79, top £159 → price note. Malawi, 2013, Paola Masperi → About. UK 8–16 = US 4–12 → sizes. £14 flat → delivery. 14 days and the customer pays postage → returns.
- **Frankie Collective.** Vintage, deadstock and one-of-one → meta. Sports-tee minis, Twins $90, $80–$90 → price note. XS–2XL. US studio and customs for international orders only → shipping policy. Store credit, 15 days, customer pays → refund policy.
- **Kotn.** CA$118–158 (~$84–$112), four styles, Samira and Zahra → price note. Designed in Canada, Nile Delta, schools → notes. Duties covered → notes. XS–XL. 15 days, sale final → returns_days and sale_pattern.
- **Happy Earth.** Wrap tops → Good On You evidence. Hoodies and sweats → product types. Ruffle Wrap Dress Monstera $98 → price. Fair Trade and organic → meta. Founders' biomedical degrees and ecosystem tees → Our Story. XXS/XS–2XL/3XL → dress sizes. Free over $150 contiguous US and 30 days → policies.
- **Thinking MU.** Organic and sustainable → meta. €150–€190, Neus and Myrtle → price note. Mediterranean, friends, 2008 → About. Four styles, XS–XL → price note. $24.90 with duties included → shipping. 30 days from purchase → returns page.
- **Spell.** Lace, bias-cut, gowns, $230–$399, Frances $230 → spell price note. Lace across Cider's dresses → cider price note. Byron Bay and the USD store → notes. XXS–3XL. Free over $150 and 30 days → notes. Sale for store credit → sale_pattern. Mayamiko Dalitso $105 is under half of $230.
- **Closing.** Price bands → stored ranges. Spell has the bigger choice → 34 vs 4 items. Cider's 14 days with free US returns → cider notes.
- **FAQ.** What it sells → the CIDER CLUB meta ("trendy clothing, accessories, and shoes"). Sizes → cider size_range. 2020 and Cider (SG) Holding Pte. Ltd. registered in Singapore, made in China → cider notes (privacy policy, Eco-Stylist). No supplier list → notes. Lucy & Yak supplier partners → its notes.

## Open items (see `human_check` in the page file)

1. Cider's full regular-price dress range. The stored $24.90–$77.90 is a sample.
2. Cider's ships_to beyond the US, and any free-shipping threshold.
3. Which HQ the chip shows: SG (legal entity) or LA (LinkedIn).
4. Frankie Collective's HQ: CA rests on Eco-Stylist only.
5. Reformation, Pact, Whimsy + Row and OMNES each need a manual check. Any of them would push the page toward 10 picks.
6. Policy: if same-type cheap stores are wanted, they need readable outside evidence. The Reddit threads in this SERP are the likely source.
