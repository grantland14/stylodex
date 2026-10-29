# Writing instructions (step 5)

Turns a page file with verified picks into the words on the page: an intro, one body per pick,
and a short FAQ. Everything here is drafted **only from the stored facts** in
`data/pages/{slug}.json` and `data/brands/*.json`. If a sentence needs a fact that isn't stored,
the sentence goes; it is never filled from memory or from what other sites say.

## Read first (wildcard-seo, read-only: never edit that repo)
- `/home/user/wildcard-seo/reference/google-search-quality.md`: the G1–G15 gate (Part 9) is the
  bar for every page. Read Parts 1–3 for what fails.
- `/home/user/wildcard-seo/reference/ai-voice-avoid.md`: scan every draft against it, all 49
  patterns and the Smell Test.
- `/home/user/wildcard-seo/reference/seo/proprietary-data.md` §5: the verified prices, sizes and
  shipping are this page's original data. Lead with them.
- `/home/user/wildcard-seo/reference/listicle-research-patterns.md` §2 and §5 for entry shape and
  the quality bar. Ignore §4: Stylodex has no client to put at #1.

## Voice
- American English. Plain, specific, friendly; a knowledgeable friend, not a brochure.
- Write like a person recommending shops, not a researcher reporting findings: state facts
  plainly ("its jeans run $72–$98"), never "we found", "on the day we checked", "per its site".
- Second person is fine ("if you buy Jaded for its cargos…"). **No first-person experience**: we
  have not worn, tried or tested anything, so never imply it (G4, G14). "We checked each brand's
  store on {date}" is true and allowed.
- No em dashes, no semicolons in body copy. No "whether you're X or Y", no "from X to Y", no
  rule-of-three lists for rhythm, no "not just X, it's Y" (ai-voice-avoid Parts 1–2, 6).
- Brand names exactly as the brand writes them.
- Numbers as stored: "$48–$56", "£40–£95", "30-day returns", "free US shipping over $80".

## Intro (40–70 words, two or three sentences)
- What the anchor is known for, then what this list offers the reader: what the picks have in
  common and the price spread ("from $72 at mnml to $350 at JNCO").
- **Never narrate our process in copy** (Ash, 2026-10-29): no "we checked…", "Stylodex found…",
  dates, "X describes it as…" attribution chains, or explaining what we couldn't verify. The
  "How we pick" box and the "Last checked" line already say that. Unverifiable facts are left
  out, not explained.
- If the anchor is closed (`defunct`), say so plainly, then what its shoppers went there for.

## Each pick (50–90 words)
1. Why it's on the list: the stored `reason`, said naturally, with the fact that makes it true.
2. How it differs from the anchor: price relation (cheaper/similar/pricier, with the store's own
   range), fit or size range, where it's based or ships. Differences are what make the list
   useful; a list of "also great" is filler (G2, G11).
3. Who it suits, built from those facts ("if you want the same baggy cargo silhouette for less").
- Don't repeat the fact chips verbatim; the template already shows price, sizes and shipping.
  Use them as reasons instead.
- Never praise without a fact behind it ("high quality", "great fit", "iconic").

## FAQ (2–4 questions)
- Questions come from real searches only: Ahrefs matching-terms for the anchor name filtered to
  questions, or the SERP's People Also Ask. Record each question's source query.
- Answer only from stored facts, 15–50 words, answer first, no attributions or caveats. Skip any question we can't answer
  from facts (e.g. "is X fast fashion" without stored production facts).

## Self-review before saving
Write `data/pages/{slug}.review.md`:
- G1–G15, each PASS / FAIL / BLOCKED (publish) with one line of evidence. Fix every FAIL first.
- AI-voice scan: patterns found and fixed.
- Fact trace: every number and claim in the copy → the brand file field it came from.
- The Estimated Page Quality and Needs Met lines from Part 9.

**Author: Ash** (decided 2026-10-29). Set `author` to "Ash" on every page. His bio (supplied by Ash) is in
`lib/authors.ts` and the byline links to `/authors/ash`, so G5 passes. Never add to the bio or
claim fashion credentials it doesn't state (G4).

## Output shape
Add to `data/pages/{slug}.json` (leave every other field as step 4 wrote it):
```json
"author": "Ash",
"copy": {
  "intro": "…",
  "bodies": { "{pick slug}": "…" },
  "faqs": [{ "q": "…", "a": "…", "source_query": "the real search it came from" }]
}
```
Plain text, no Markdown. One body for every pick; a pick without a body is dropped by the gate.
