# Review: stores like Garage (2026-10-29)

## Result: not publishable, no copy written

- **Category:** `sweatpants` (Ahrefs top pages for www.garageclothing.com/us/: the sweatpants
  category leads US traffic, ahead of sweatsuits, hoodies-sweatshirts and going-out tops).
- **Picks:** 0 renderable / 0 total. Not padded.
- **Gate** (`lib/pipeline.ts` + `judgeBrandsLikePage`, run with a placeholder intro because the
  stored page has no `copy.intro` and is not built):
  `indexable: false`. Reasons: `anchor missing: knownFor, sizeRange, shipsTo, returnsDays,
  price:sweatpants` and `only 0 publishable picks (need 6)`.
- `npm run lint:facts`: ok.

## Why there are no picks
- **No outside evidence.** The SERPs are Reddit (WebFetch refuses it), Facebook and TikTok
  (unreadable), similist and Similarweb (excluded). "garage alternatives" returns car garages and
  "similar to garage" has no SERP. WebSearch (8 queries) found no editorial "stores like Garage"
  list. The one usable sentence is College Fashion's "Garage's sister store, Dynamite, is a bit
  more elevated". The disco directory has a Garage profile but lists no alternatives. Competitor
  data (Similarweb, Semrush, Owler, Instya) doesn't count.
- **Dynamite**, the one sourced candidate, can't pass either: dynamiteclothing.com returns 403, so
  it has no price, no shipping and no stated US stores.
- **The 32 Apart Style pool brands** have no outside source.

## Anchor
- `status: verified`, `us_stores: true`, from Groupe Dynamite's official sites (enrich.md §2: a
  parent's official site counts for status and US stores). garageclothing.com returns 403 to the
  bot UA and to WebFetch. Not worked around, so every store-only fact is empty.
- Brand files written via `merge_brand.py`: `garage` (new) and `dynamite` (new).

## human_check (what would unblock this page)
1. Read the r/garageclothing "similar stores?" thread (ranks #1–2) and the going-out-tops thread
   for candidates.
2. Record Garage's known_for, size range, US shipping and returns, and its regular-price sweatpants.
3. Then verify those candidates. Many already have brand files from other pages (Forever 21,
   Princess Polly, Cider, rue21 and others).

## G1–G15, voice, AI-voice scan, fact trace
Not applicable: there's no copy. Run them when picks exist.

## Estimated Page Quality / Needs Met
Not rated. The page doesn't build.
