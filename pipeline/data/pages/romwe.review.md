# Review: stores like ROMWE (`/stores/romwe`)

Run 2026-10-29. Author: Ash. Category: dresses. 13 picks, all renderable. **Not indexable**: the
anchor has no regular-price dresses row.

## Anchor status
ROMWE is **trading** (`verified`, kind `brand`). us.romwe.com is a live US store with a cart, USD
prices, standard US shipping free over $29 ($3.99 below) and a 60-day US return window from
purchase, first label free (brand file, earlier run today). This run added: parent SHEIN Group
(sheingroup.com/brands lists ROMWE: "your go-to for all things alt"), hq_country CN and founded 2009
(Wikipedia's Shein article: "Romwe, a Chinese e-commerce retailer", bought 2014; Eco-Stylist:
founded in Nanjing, 2009), size_range XXS–5XL and has_plus (a dress's own size list plus the Plus
Clothing size filter). known_for stays "Alternative Clothing" (the store's own homepage title).

**Why no anchor price:** every item on the US Short Dresses (117), Women Clothing (120), Tops (120)
and Plus (117) listings shows a sale price under a list price (12–61% off). Under the rule (a
markdown means sale), no regular-price dress exists, so `price:dresses` is missing and the gate
blocks indexing. This is queued in `human_check`: decide whether ROMWE's always-discounted list
price can count, or accept the page as noindex (the boohoo page is in the same position).

## Check (lib/pipeline.ts + judgeBrandsLikePage, now = 2026-10-29)
```
romwe: indexable=false picks=13/13 reasons=["anchor missing: price:dresses"]
every pick: pickProblems = []  (price_relation null on all, since the anchor has no price)
title: 13 Stores Like ROMWE for Alternative Clothing
```
Pages that use a brand I touched (romwe, chicme, dollskill, 6pm): akira indexable, unif
indexable, boohoo and edikted and tj-maxx fail only on their own anchors' facts, as before. No
price row was overwritten. `npm run lint:facts` ok. `npm test` passes.

## Picks and evidence
Ranked by independent sources: boohoo 6, Fashion Nova 6, Showpo 5, ChicMe 3, Dolls Kill 2,
PrettyLittleThing 2, NA-KD 2, Charlotte Russe 2, Missguided 2, then 6pm 3 (placed after the
same-type stores: a discount arm selling other labels), then Cider, Windsor, Pink Ice (1 each).
Sources: ClothedUp, La Passion Voutee, ReviewsXP, Society19, Technicalustad, Eco-Stylist,
Panaprium, Plaintips, plus the disco directory (evidence only; never named, linked or quoted on the
page, and not used as wording for any fact field). La Passion Voutee's "More Brands" names count as
recommendations (noted per pick). Rejected high-source candidates: ASOS, Lulus, Shein, H&M, Zaful,
YesStyle, UrbanOG (refuse fetches), Nasty Gal (placeholder), Tobi (closed), Rosegal and DressLily
(US shipping unconfirmed), From There On (Singapore, no US terms), Hudson's Bay (gone).

## G1–G15
| Row | Result | Evidence |
|---|---|---|
| G1 | PASS | Replacement-store search for women's alt and party dresses, inside Stylodex's scope. |
| G2 | PASS | Regular-price dress ranges read from stores' own feeds (ChicMe new: $22.08–$51.99), ROMWE's always-marked-down pricing and list-price band, sizes, shipping and returns per store. No ranking page gives prices or return terms. |
| G3 | PASS | Concrete trade-offs per pick: gift-card-only returns (Dolls Kill), $14.99 return fees (boohoo, PLT), 7-day refund window (Showpo), duty fee (NA-KD), 15- and 14-day windows (ChicMe, Cider), size ceilings (Charlotte Russe, Windsor, Pink Ice). |
| G4 | PASS | No first-person experience or testing. Author Ash, bio untouched. |
| G5 | PASS | Author Ash. Not YMYL. |
| G6 | PASS | Every number traces to a brand file (below). Title count = renderable picks. |
| G7 | N/A | Not YMYL. |
| G8 | PASS | "13 Stores Like ROMWE for Alternative Clothing": known_for from ROMWE's own title; the list covers alt, party and occasion dresses. |
| G9 | PASS | Intent: where else to buy ROMWE-style dresses, often to avoid Shein. Pick 1 answers it; the FAQ answers the ownership and legitimacy questions searchers ask. |
| G10 | PASS | Price, sizes, shipping and returns per pick, a decision guide, and ROMWE's own terms for comparison. |
| G11 | PASS | Intro 67 words, no preamble. |
| G12 | PASS | All facts read 2026-10-29; the template shows the date. |
| G13 | PASS (estimate) | Top results (ClothedUp 2021/2023, La Passion Voutee 2022, ReviewsXP) are short blurbs; several list stores that have since closed or gone dark (Tobi, Nasty Gal, Make Me Chic, Hudson's Bay). This page lists live stores only, with real prices and policies. |
| G14 | PASS | Links go through /go/. Selection comes from outside lists, not affiliate terms. |
| G15 | PASS | 7-gram overlap scan against every page file: rewrote every shared sentence and the one shared Best-for line; remaining overlaps are product names and policy figures. |

Estimated Page Quality: High (once indexable). Needs Met: Highly Meets for "stores like romwe";
Moderately Meets for readers wanting 20+ names, but those lists are padded with closed stores.

## Voice check (voice.md "What we never write")
No process narration, dates or "we checked". No count as the point of a sentence ("almost every
ROMWE dress" carries the reason). No verdicts on brands. No invented experience. No hype words. No
semicolons, em dashes, bold or italics. Each body opens answer-first with a named product where a
regular price exists, compares picks with each other (Dolls Kill vs Fashion Nova, boohoo vs PLT,
Charlotte Russe vs Pink Ice, Showpo vs ChicMe), and ends on a specific trade-off.

## AI-voice scan (ai-voice-avoid.md)
- Rule of three: cut "slit dresses, mermaid hems and halter ties" to two. Remaining lists are
  fact lists (PLT's size ranges, boohoo's petite/tall/plus lines, ROMWE's style lines in the FAQ).
- Repetitive "Returns get 30 days" openers varied across bodies. No "whether you're", no
  "delve/elevate/seamless", no "X rather than Y" filler beyond concrete advice.
- One colloquial touch only ("Two catches.").

## Fact trace (copy → stored field)
- **Intro:** crossed-out prices → romwe notes (all listings marked down). SHEIN Group → romwe parent_company.
- **boohoo:** US 0–26, petite/tall/plus → size_range, notes. Manchester → notes. 70% banner and former-price footnote → notes. $10.99, 6–8 days → notes. 21 days, $14.99 → returns_days, notes. ROMWE 60 days, free first label → romwe returns_days, notes.
- **Fashion Nova:** Plus+Curve → notes. Kiera $62.99 vs Comp. Value $89.99 → notes. LA 2006, Beverly Hills → notes. $6.99, 3–7 days, free $75 → notes, free_shipping_min_usd. ROMWE $29 → romwe free_shipping_min_usd.
- **Showpo:** Sydney → notes. Valerie $99.95, Nicolette $139.95, regular price → notes (30 rendered, all regular). US warehouse, $9.95, free $100, some from Australia → notes. US 0–16 (XXS–4XL), Curve → size_range, notes. 30 days, refund 7, 110% credit → notes.
- **ChicMe:** $22.08–$51.99, Spaghetti Strap maxi, Halter Tie slit dress $38.99 → chicme prices.dresses and notes. Slit and mermaid styles → notes (product types). Most marked down, Buy 4 Pay for 3, $69 → notes. S–XXL, 15 days at own cost → size_range, returns_days, notes.
- **Dolls Kill:** "Boutique For Misfits" → known_for. Widow Eclipsed Romance $39, Club Exx → notes. San Francisco 2011, other brands → notes. XXS–3X, $50, 30 days, gift cards → size_range, free_shipping_min_usd, returns_days, notes. Most sold out or marked down → my dresses note.
- **PrettyLittleThing:** size ranges, maternity → notes. Manchester 2012, Boohoo Group, IT girl → notes, parent_company, known_for. $9.99, no threshold → notes. 21 days, $14.99, +10% → notes. ROMWE $3.99 / $29 → romwe notes.
- **NA-KD:** $49.95–$99.95, Wide Sleeve Mini, Lace Maxi $59.95 → prices.dresses, notes. Scandinavian fashion house, womenswear → notes, known_for. USD, non-refundable duty fee → notes. 30 days, fee → notes. Windsor's hundreds of stores → windsor notes.
- **Charlotte Russe:** $10–$20, Printed Scoop Neck $12.99 → prices.dresses, product-images. Below ROMWE list prices → romwe notes (116 of 117 list above $12.99). About 190 stores, store returns and exchanges, 30 days by mail, postage → notes. XL, no plus, $100, 48 states → size_range, notes.
- **Missguided:** Lace Bodycon $28.13 shown lower, most marked down → notes. ROMWE typical list price → romwe notes (median $27.89). AiiRZ, MISSGUIDED capitals → notes. $4.49, $67.49 → notes. 30 days, own postage, bodysuits/swimwear/clearance final → notes.
- **6pm:** Zappos discount arm → notes. Adrianna Papell, DKNY, $14.99–$193.50, percentage off → my dresses note. US only, $100, $3.95 → notes. 30 days, no exchanges, postage → notes.
- **Cider:** $24.90 Jersey Boat Neck, $77.90 velvet midi, $29.90 Velvet Leopard, lace trims → price note and notes (a 12-item sample). XXS–XL, Curve 0XL–4XL → size_range. Free first US return, 14 days → returns_days, notes.
- **Windsor:** 1957, $14–$199.90 → notes, prices.dresses. Inez $89.90 → product-images. 350+ stores US and Canada → notes. $75, 30 days → free_shipping_min_usd, returns_days. XL (US 15) → size_range.
- **Pink Ice:** LA, bohemian → notes (meta). $89.99 max, Mellow Floral $59.99 (median) → prices.dresses. Love Stitch, Flying Tomato → price note. $50, US and Canada only → notes. XS–L, 30 days from ship date, postage → size_range, notes.
- **Closing:** restates the above. "$10 and $52" → Charlotte Russe and ChicMe price rows.
- **FAQ:** owned by Shein, 2014 → romwe parent and Wikipedia note. Legit: US store, $29, 60 days, first label → romwe notes. What: alt styles (sheingroup.com), $13–$58 list, marked down → romwe notes. Where: Nanjing 2009, Singapore parent HQ → romwe notes.

## FAQ sources
One `keywords-explorer-matching-terms` call (questions, US). Used: "is romwe owned by shein" (60),
"is romwe legit" (350), "what is romwe" (200), "where is romwe located" (20). Skipped "is romwe
fast fashion", "is romwe ethical" and "good quality" (need a verdict the stored facts can't give),
and "how long does romwe take to ship" (only a dated estimate is stored).

## Things to know
- Thin price rows: ChicMe's range is 12 regular items; Cider's and NA-KD's are first-page samples.
- Brand files written via merge_brand.py (patches in my scratchpad): romwe (two patches), chicme
  (new, two patches), dollskill (dresses note), 6pm (dresses in sells_categories). No prices
  overwritten, no `--overwrite` used.
- ROMWE's sitemap index returned a WAF 403 after several listing reads; not retried. techlazy.com
  returned 503 twice. All requests used the StylodexBot UA; no personal detail in any request.
- Ahrefs: 4 serp-overview calls, 1 matching-terms call. Supabase: read-only queries on
  `public.brand_relationships` only.
