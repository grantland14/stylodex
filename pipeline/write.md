# Writing instructions (step 5)

Turns a page file with verified picks into the words on the page. Everything is drafted **only
from the stored facts** in `data/pages/{slug}.json`, `data/brands/*.json` and
`data/product-images.json` (named products and prices). If a sentence needs a fact that isn't
stored, the sentence goes; it is never filled from memory or from what other sites say.

## Read first
- **`pipeline/voice.md`: how every page reads.** Voice, what we never write, rhythm, prices and
  products, and the page shape with lengths. It overrides anything below that disagrees.
- wildcard-seo, **read-only** (never edit that repo):
  - `/home/user/wildcard-seo/reference/google-search-quality.md`: the G1–G15 gate (Part 9) is the
    bar for every page. Parts 1–3 say what fails.
  - `/home/user/wildcard-seo/reference/ai-voice-avoid.md`: scan every draft against it, all 49
    patterns and the Smell Test.
  - `/home/user/wildcard-seo/reference/seo/proprietary-data.md` §5: the verified prices, sizes and
    shipping are this page's original data.

## Facts, not experience
- We haven't worn, tried or tested anything. Never imply it (G4, G14). Describe what a brand
  makes and sells, from stored facts.
- Never praise without a fact behind it ("high quality", "great fit", "iconic").
- Don't repeat the fact chips word for word: the template already shows price, sizes and
  shipping. Turn them into reasons ("goes up to a 44 waist, so…").

## FAQ (2–4 questions)
- Questions come from real searches only: Ahrefs `keywords-explorer-matching-terms` for the
  anchor name, filtered to questions, or Google's "People also ask" box for the page's keywords
  when Ahrefs has too few on-topic ones (Ash, 2026-10-29: keep these). Record each question's
  source query, and `"source": "people_also_ask"` for the second kind.
- Answers per `voice.md`. Skip any question the stored facts can't answer.

## Self-review before saving
Write `data/pages/{slug}.review.md`:
- G1–G15, each PASS / FAIL / BLOCKED (publish) with one line of evidence. Fix every FAIL first.
- Voice check against `voice.md` "What we never write": none present.
- AI-voice scan: patterns found and fixed.
- Fact trace: every number and claim in the copy → the field it came from.
- The Estimated Page Quality and Needs Met lines from Part 9.

**Author: Ash.** Set `author` to "Ash" on every page. His bio (his own words) is in
`lib/authors.ts`. Never add to it or claim credentials it doesn't state (G4).

## Output shape
Add to `data/pages/{slug}.json` (leave every other field as step 4 wrote it):
```json
"author": "Ash",
"copy": {
  "intro": "…",
  "bodies": { "{pick slug}": "first paragraph\n\nsecond paragraph" },
  "best_for": { "{pick slug}": "Baggy jeans under $100" },
  "closing": { "heading": "How to choose", "body": "…" },
  "faqs": [{ "q": "…", "a": "…", "source_query": "the real search it came from" }]
}
```
Plain text, no Markdown. Paragraphs separated by a blank line. One body and one `best_for` for
every pick; a pick without a body is dropped by the gate.
