# Review: brands like Camper (`/brands/camper`)

Category **sneakers** (C = product type). Author Ash. Checked 2026-10-29.

## Gate result
`judgeBrandsLikePage` via `lib/pipeline.ts` (tsx script in the agent scratchpad, `camper/gate-camper.ts`), 2026-10-29:
- **indexable: true**, reasons: none
- renderable picks: **12 / 12** (no pick problems)
- title: "12 Brands Like Camper for Pelotas and Twins Sneakers"
- Pages that also name the new brand files (only as candidates): dr-martens, lands-end, minga-london, muji, all still indexable with unchanged pick counts. Golden Goose (shares Veja and OluKai, both unchanged) still indexable, 13 / 13.
- `npm test`: 30 pass. `npm run lint:facts`: ok.

## Quality gate (G1–G15)
| # | Result | Evidence |
|---|---|---|
| G1 | PASS | A US shopper replacing Camper sneakers ($120–$290 on its US store) is the reader. Every pick sells sneakers to the US. |
| G2 | PASS | The ranking lists give brand names, Amazon prices or none. This page has each brand's live regular-price US sneaker range, named shoes and the terms that change the cost (duties, return fees, final-sale rules, free-shipping lines, widths, sizes). |
| G3 | PASS | Specific trade-offs: Birkenstock's 40% final-sale rule, Allbirds' paid return shipping, TOMS' $4.99 refund fee, Naot's optional return label, Superga's $6.95 label, Vagabond's women-only full-price range, Fluevog's 14 days and gift-certificate-only sale returns, Diemme's €25 refund fee. |
| G4 | PASS | No try-on, comfort or fit-feel claims. "We" is not used for experience. |
| G5 | PASS | Author "Ash", bio in `lib/authors.ts`. Not YMYL. |
| G6 | PASS | Every number traces to a brand file (fact trace below). |
| G7 | N/A | Not YMYL. |
| G8 | PASS | Title count = renderable picks (12). known_for is new (see human check). |
| G9 | PASS | "Brands like Camper" answered with sneaker alternatives, each opening with the answer and a named shoe with its price. |
| G10 | PASS | Price, costs, sizes and returns per pick. FAQs cover where Camper is from, who owns it, what it's known for and where to buy it in the US. |
| G11 | PASS | Intro 75 words; picks follow. |
| G12 | PASS | Prices read 2026-10-29 (Diemme FX 2026-10-28 ECB); the template shows "Last checked". |
| G13 | PASS | The ranking pages are thin (Gadgetsfeed, Trails and Freedom, Creative Vibes: no US prices, Amazon links, generic text). This page has current US prices and terms for 12 live brands. |
| G14 | PASS | Affiliate links go through `/go/`. No implied testing. |
| G15 | PASS | Veja and OluKai bodies written fresh against the Golden Goose page; no sentence reused. Other 10 picks are new brand files. |

**Estimated Page Quality:** High. Each pick carries its live US sneaker range, a named shoe and the real costs to a US buyer, which none of the ranking pages have.
**Estimated Needs Met:** Highly Meets for "brands like Camper", with a gap: Clarks (4 sources) and ECCO (2) are missing because their stores refuse the bot. Adding them would make it better.

## Voice check (`pipeline/voice.md` "What we never write")
- No process narration, dates or "its site says". Sources never named; "the alternative named most often" (Birkenstock) is the only nod to evidence.
- No spreadsheet sentences. The one ranking ("the cheapest pick here", TOMS) carries its reason (under Camper's cheapest $120 pair).
- No brand verdicts, no invented experience. Brands are "it".
- No semicolons, dashes or bold. Longest sentence 29 words (Superga).
- Picks compared with each other in every body (Birkenstock→Allbirds, KEEN→Vagabond, Allbirds→Veja, TOMS→Kenneth Cole, Veja→Vagabond, Naot→KEEN, Superga→TOMS, Vagabond→Kenneth Cole, OluKai→Fluevog, Fluevog→Diemme, Kenneth Cole→KEEN, Diemme→Birkenstock).
- One colloquialism-level phrase ("oddball streak"), used in OluKai and echoed as "odd streak" in the closing.

## AI-voice scan (`ai-voice-avoid.md`)
- Fixed: KEEN "one Jasper doesn't quite reach" $125 (wrong: $140 clears it); "so you don't have to size up" (fit claim) became "which helps if you need the room"; OluKai's unsupported "more shape to it" comparison replaced by Fluevog; closing three-item budget list cut to two clauses; Allbirds' three-material list cut to two.
- No §13/§14 words, no "not X, it's Y", no "whether you're".

## Fact trace
- Intro: Pelotas XLite white $160, sneakers $120–$290, Twins left differs from right → camper prices.sneakers note + notes (Twins page). 12 = picks.
- Birkenstock: $140–$240 → prices; Bend Low $165, made in Portugal, cork footbed, regular and narrow, EU 35–46 → notes; 30-day free returns, VIP free shipping, 40% final sale → notes; Allbirds under $120 → allbirds prices.
- KEEN: Drift Trail $185–$220 → camper notes; Jasper $140 climbing-inspired, two sets of laces → keen notes; KS86 $115, $220 max, trail and hiking shoes in the collection → prices note; US 5–15, wide → size_range + notes; $125 free shipping, 30-day free returns lower 48 → notes; Cody $130 → vagabond prices note.
- Allbirds: $75–$165, Wool Runner $110, Canvas Cruiser $75 → prices; wool and tree fiber, launched with the Wool Runner, stores closed → notes; US 5–15, half sizes to 13.5 → notes; free over $100, 30 days, return shipping unless coverage → notes; Veja from $135 → veja prices.
- TOMS: $65–$110, Baja 2.0 $65, Kameron $85 → prices; Camper min $120 → camper prices; LA, portion of profits → notes; 30 days, free store-credit returns, $4.99 with refund, free exchanges → notes; women 12, men 14 → size_range; Kenneth Cole Kam $125 → kenneth-cole prices.
- Veja: $135–$330, Campo $175, made in Brazil, Paris, EU 35–49, free over $95, 28 days → veja file (unchanged); Camper $45 / 30 days → camper notes; Cody $130–$140 → vagabond.
- Naot: $164.95–$219.95, Okahu $184.95, Kumara $219.95 → prices; 1942 Hula Valley, EU 43–44 / 48–49 → notes; EU 35–47 → size_range; free over $100, 30 days unworn in box, optional return fee → notes; KEEN $115.
- Superga: $65–$300, 2750 Cotu Classic $75, 1925 and 2390 Made In Italy $300 → prices; Turin 1911 → notes; EU 35–50 → size_range; 30 days, $6.95 label, $100 free shipping → notes; TOMS Kameron $85.
- Vagabond: $130–$160, Cody $130–$140, Judy $160, women's only at full price, EU 35–42 → prices note + notes; Varberg, 1973, USD with duties included, free 30-day returns → notes; Kenneth Cole Kam $129 → kenneth-cole prices note (Site Exclusive Men's Kam).
- OluKai: $100–$160, Pehuea Lī $100, Kou Lace Up $160 → olukai prices note; Hawaiian islands, 30 days, free exchanges, free store-credit returns, free from $120, Hawaii stores → notes; men 15, women 12 → size_range; Fluevog $299.
- Fluevog: $299–$399, Feint $299 → prices; Twins $290 → camper notes; Vancouver → notes (Wikipedia); engraved soles → notes; US shops, Manhattan, $15 flat → notes; 14 days, sale exchange or gift certificate, return shipping covered → notes.
- Kenneth Cole: $75–$135, Leather Kam $125 (white), Alma $135 → prices; modern New York style → notes; $100 free shipping, 30 days → notes; women 11, men 13 → size_range; KEEN styles $115–$135 → keen prices note.
- Diemme: €296.10–€350.10, about $330–$390, Marostica Low €314.10 (about $350) → prices + fx; family factory Onè di Fonte, hand-crafted → notes; EUR billing, DDP with 15% tariff → notes; EU 35–47 → size_range; 14 days, €25 → notes; Birkenstock Honnef High $240, 30-day free returns → birkenstock.
- Closing: figures above. "Birkenstock, Veja and Naot have pairs between $140 and $240": Bend Low $165, Campo $175, Naot $164.95–$219.95.
- FAQs: Inca, 1877, Lorenzo Fluxa 1975, family business, Miguel 2012 → camper notes (history). Twins 1988, Pelotas 1995, Pelotas XLite $160 → notes. camper.com $45 free shipping, 30-day free returns, two New York stores and one in Los Angeles → notes.
- FAQ sources: "where is camper shoes from", "who owns camper shoes", "what are camper shoes known for", "where to buy camper shoes" (one Ahrefs matching-terms call on "camper shoes", questions).

## Human check
See `human_check` in the page file: known_for (title ending), Clarks and ECCO left out (bot refusals), Diemme US price via the store's US localization, Superga's $100 threshold from the cart line, Vagabond's women-only full-price range, Fluevog sizes, KEEN hq from store metadata, Kenneth Cole return days, and thin evidence (seven single-source picks).
