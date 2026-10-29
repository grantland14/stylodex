# Stylodex voice

How every page reads. Modelled on Apart Style's voice rules (Ash, 2026-10-29): the *rules*
are adopted, none of its text. Owner corrections on top are marked (Ash).

## Who's talking
A well-informed friend who shops a lot, not a catalogue and not a research report.
- "We" for our picks ("our pick if…", "we'd start with…"); "you" for the reader, always.
- Never "Stylodex recommends", never third person about ourselves.
- **Contractions every time**: it's, you're, don't, there's, they'll. Uncontracted reads like
  a manual and is an AI tell.
- A brand is "it", never "they": "Represent makes its jeans in…".
- Warm, specific, enthusiastic without hype. Fine to start a sentence with "But" or "So".

## What we never write (Ash)
- **Process narration**: "we checked", "Stylodex found", "on the day we checked", dates,
  "its About page says", "Wikipedia describes", "our checks were blocked". The method box and
  the "Last checked" line cover that. A fact we couldn't confirm is left out, not explained.
- **Spreadsheet sentences**: counts and rankings as the point of a sentence ("its 86 men's
  cotton tees start lower than Affliction's", "the widest waist range on this page", "97 styles").
  Say what that means for the reader instead: "you'll find a tee for under $30", "goes up to a
  44 waist".
- **Verdicts on brands** ("not perfect", "has its issues", "no saint"). Criticise a specific
  claim with the evidence in the same sentence, or leave it.
- Invented experience ("I wore", "we tried", "feels buttery"). We describe what the brand
  makes and sells, from stored facts, never how it feels on.
- Hype and corporate-speak ("game-changing", "elevate your wardrobe", "must-have").

## Rhythm
- Mix short sentences (5–8 words) with medium ones (15–20). Nothing over 30 words.
- One thought per sentence. Paragraphs of 1–3 sentences.
- Two items beat three in a list. Rule-of-three is an AI tell.
- No semicolons. No em dashes. No bold or italics in running text.

## Prices and products
- Prices in parentheses right after the thing they price: "the Loopy Eyelet Super Baggy Jeans
  (£80)", "tees ($24.99 to $48.95)".
- Name real products from the page's product photos (`pipeline/data/product-images.json`),
  with their price, at least one per brand when photos exist.
- A store charging in another currency: its own price first, then "(about $93)".

## Page shape
- **Intro (40–70 words, Ash)**: open on the reader's situation, not the brand name. Why
  they're looking (love the anchor, but the price, the sizes, the shipping…), then what the
  list gives them. No process, no dates.
- **Each pick (90–140 words)**, as two short paragraphs:
  1. Answer first: what the brand is and what it sells in this category, with a named product
     and price.
  2. Against the anchor: what's alike, then the real difference (fit, price, sizes, where it's
     made, shipping or returns) and why that matters to someone choosing.
  Then a separate **Best for** line (≤10 words, no full stop): "Baggy jeans under $100".
- **How to choose (80–120 words)**: a short decision guide across the picks by budget, fit or
  style. Concrete, different on every page, no generic CTA.
- **FAQ**: answers 15–50 words, answer first, no attributions or caveats.

## Example (style only)
> **mnml** makes baggy, distressed denim in Los Angeles, and most of it costs under $100. The
> Studded Super Flare Denim ($82) is a good place to start.
>
> If you go to Jaded for wide legs and washed finishes, mnml covers the same ground for less.
> It's more menswear-led, and waists go up to 42. US orders ship free over $50.
>
> Best for: Baggy jeans under $100
