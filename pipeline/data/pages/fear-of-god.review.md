# Review: brands like Fear of God (`/brands/fear-of-god`)

Run 2026-10-29. Category C = hoodies (main label only; Essentials is a separate brand file and a pick). 13 picks, all renderable. Author: Ash.

## Gate result (lib/pipeline.ts + judgeBrandsLikePage, 2026-10-29)

```
{"indexable":true,"reasons":[],"picks":13,"total":13,
 "title":"13 Brands Like Fear of God for American Luxury Fleece and Tailoring","anchorMissing":[],"problems":[]}
```
`npm run lint:facts`: ok. `npm test`: 30 pass.

## Anchor
`verified`, fearofgod.com (US store, cart currency USD). The brand file already existed from a pants run
(pants price kept). This run added the hoodies price ($395–$695 over 19 regular-price men's/unisex
main-label hoodies; $395 = collaboration hoodies, core Classic line $550–$695), `known_for`
"American Luxury Fleece and Tailoring" (its own "a distinct American perspective on luxury" plus its
fleece and Suiting collections), `hq_country` US, `founded_year` 2013 (Feature blog), materials and
production model. `ships_to` overwritten from ["US"] to US, CA, GB, AU (meta.json). See human_check.

## Evidence (thin, flagged)
- Ahrefs SERP, 4 calls: "stores like" and "similar to" returned nothing. Kept the disco directory (3 pages,
  one source, never named, linked or quoted) and Highsnobiety (2017, product-level "wallet-friendly
  alternatives", counted only for Essentials). Reddit and two YouTube videos unreadable. Pages about
  Essentials (Phrase Studios, disco Essentials lists, RetailBoss) not counted for the main label. General
  roundups (Highsnobiety 25 brands, Ape to Gentleman) not counted.
- Every pick has 1 independent source. Apart Style pool: 51 rows, used only as candidates.

## G1–G15
| # | Result | Evidence |
|---|---|---|
| G1 | PASS | Reader is a US shopper put off by a $595 Fear of God hoodie, or wanting the same look elsewhere; every pick sells hoodies to the US. |
| G2 | PASS | Each pick's regular-price US hoodie range, shipping, duties and returns come from its own store today; none of it is on the ranking pages. |
| G3 | PASS | Specific trade-offs per pick (final sale, 10-day windows, no international returns, $340 free-shipping bar, state duties), all stored. |
| G4 | PASS | No first-person experience or testing; "we" never claims trying anything. Bio untouched. |
| G5 | PASS | Author "Ash" (lib/authors.ts). Not YMYL. |
| G6 | PASS | Every number traces to a brand-file field or price note (fact trace below). |
| G7 | N/A | Not YMYL. |
| G8 | PASS | Title states the real count (13) and the anchor's own positioning. |
| G9 | PASS | Each body opens with the brand, why it fits this reader, and a priced product. |
| G10 | PASS | Prices, sizes, shipping and returns per pick, a How to choose guide and 3 FAQs. |
| G11 | PASS | 74-word intro, then picks. |
| G12 | PASS | All prices read 2026-10-29; template shows "Last checked". |
| G13 | PASS | disco gives one-line similarity notes and Highsnobiety is 2017 product picks; this page adds verified US prices, duties and return terms. |
| G14 | PASS | No implied testing; affiliate links are the template's `/go/` with disclosure. |
| G15 | PASS | Bodies 119–145 words; 6-word shingle check against every other page's copy, overlaps rewritten (remaining hits are stock phrases like "is the one to try if"). |

**Estimated Page Quality:** Medium-High. Strongest reason: every pick carries its own store's current
full-price hoodie range and US shipping, duties and returns. Held back by single-source evidence on
every pick and no readable reddit/YouTube sources.
**Estimated Needs Met:** Moderately to Highly Meets for "brands like fear of god" / "fear of god
alternatives". Rhude, Stone Island and Off-White (named by the evidence, close in price) were unreadable.

## Voice check (voice.md "What we never write")
None present: no process narration, dates or "Stylodex found"; disco never named; no count as the point
of a sentence (the "a dozen states" and "more than 20 colors" lines each carry their reason); no verdicts;
no invented experience; no hype words. Contractions throughout; brands are "it".

## AI-voice scan (ai-voice-avoid.md)
Fixed: colon reveals (#24) in the intro and Essentials opener; "from X to Y" sweeps (#40) in the intro,
Rick Owens and Madhappy store lines; repeated "X is the pick if" openers (#5) varied (2 of 13 still open that way); a rhetorical-question opener (#23) removed. Checked: no semicolons, em or en dashes in copy,
no sentence over 30 words, no "not X, it's Y" contrast frames.

## Fact trace (copy -> stored field)
- Intro: Classic Hoodie $595, sun-faded, made in USA -> fear-of-god prices[hoodies].note, notes.
- NAHMIAS: Miracle Academy Hoodie in Black Sunfade $215 French terry made in LA, oversized; Ollie $650,
  Flower Groms Zip $695; 2018 LA, skate/basketball/surf/hip-hop; S–XXL all, XXXL most; 10 days, label not
  included -> nahmias prices note, notes, returns_days. Acne free returns -> acne-studios notes.
- Acne Studios: Fleece logo hoodie $730 organic cotton, piece-dyed; Sprayed zip $860; Stockholm; DDP, ships
  domestically; free express; 14 days free returns; XXXS–XXL -> acne-studios prices note, notes, fields.
  AMIRI XXXL on every men's hoodie -> amiri prices[hoodies].note.
- Rick Owens: DRKSHDW; Tommy Hustler $655; Mountain $965; Collage Gimp $920 cropped; Peter to $1,220
  oversized; colors from titles; five US stores incl. LA and NY; 10 days; 12 states pay duties ->
  rick-owens prices[hoodies].note, notes. FOG colours -> fear-of-god feed (Dark/Faded Brown, Dirty Ivory, Sky).
- AMIRI: MA Core Logo $650; Multi Bandana $1,150 sun-faded; crystal/stud zips to $1,590; XXXL; free standard
  shipping and domestic returns; 10 days -> amiri prices note, notes. FOG Baseball Club $695 -> anchor note.
- Raised by Wolves: Wild Ones $250, Canada, deadstock heavyweight jersey, one-of-one, single size; Ottawa
  2008, graphic design, sportswear/outerwear for Canada's climate; no international returns -> raised-by-wolves.
- A-COLD-WALL*: Bescott $238 loopback, soft wash, bone/garnet/onyx, twin-needle; Millbank $265 piped seams;
  Balmore $170; USD; 28 days, request first; XXL vs 3XL by style; fabric and material study -> a-cold-wall.
- Represent: 480gsm+, Owners Club $200, $140–$315; LA flagship; ships from US, free over $175; 14 days,
  $9 label -> represent prices, notes. Cole Buxton duties -> cole-buxton notes.
- Cole Buxton: not loud or aggressively branded; Signature $187 puff print; CB Sportswear $187 440gsm,
  pre-shrunk, garment washed, back print; zips to $234; free over $340; duties at checkout; 14 days at own
  cost -> cole-buxton notes, prices.
- John Elliott: 2012 LA; "independent perspective on luxury"; Beach Hoodie 2 $198, relaxed, cropped, French
  terry, Peru; XS–XXXL; free US shipping; WeHo and NY stores; 14 days, $7 fee (= FOG's $7) -> john-elliott,
  fear-of-god notes.
- Noah: made in Canada, 100% cotton brushed-back fleece; Heavyweight Zip-Up $228, 15 oz; Core Classic $168;
  founders; "Clothing Made Responsibly"; 14 days from shipment -> noah notes, prices.
- Essentials: own line, same store; $150–$195; Phillies Raglan Half Zip Sport Hoodie $175 ->
  product-images.json; 380–520gsm, XXXL on many, free over $100 contiguous US, final sale -> essentials notes.
- Born x Raised: LA, since 2013; $120–$200, median $140; NFL Crest $140, MLB Moneyball $180, Llorona $200;
  S–3XL; all sales final -> born-x-raised notes, prices.
- Madhappy: Classics Fleece Hoodie $175, relaxed unisex, heavyweight, LA, 21 colours; 30 days, $12 fee waived
  for credit/exchange; XXL; $5 shipping $150–$200, free from $200; WeHo, NY, Malibu stores -> madhappy notes.
- FAQ: Essentials $150–$195 vs $395–$695, final sale; "American perspective on luxury", wool pants to $1,300
  (fear-of-god prices[pants]); Lorenzo 2013 (Feature), LA distribution center (refund policy, FAQ).
