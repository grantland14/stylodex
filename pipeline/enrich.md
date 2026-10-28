# Enrichment instructions (steps 2–4)

For one subject X with slug S and category C (the anchor's core category, e.g. `denim`,
`dresses`, `streetwear`, `skincare`).

## §1 Evidence: who do outside sources put next to X?
1. Get the US top 10 for `brands like X` and for `stores like X` (Ahrefs `serp-overview`).
2. Drop apartstyle.com, similist.com-style scraped lists with no editorial content, marketplaces,
   and the anchor's own site. Keep editorial lists, forums (Reddit) and publications.
3. WebFetch each kept page and list every brand it recommends as an alternative to X.
4. Write `candidates`: one entry per brand with every source URL that names it
   (`kind`: `serp_comention` for editorial pages, `reddit` for Reddit threads).
5. Add Apart Style pool brands (`public.brand_relationships` for X) as candidates with
   `sources: []`; they need outside evidence of their own to become picks.

## §2 Verify each brand (anchor + every candidate with ≥1 source)
Write `data/brands/{slug}.json` with the `stylodex.brands` columns:
- `website_url`: the official store, confirmed by WebFetch (the stored URL is often wrong).
- `status`: `verified` (live, selling C today) · `defunct` (no findable official presence) ·
  `off_category` (live but doesn't sell C) · `unverified` (site refuses fetches; human check).
- `kind`: `brand` · `retailer` (sells other brands) · `marketplace`.
- `known_for`: what people go to it for, in Title Case, ≤6 words, from the brand's own positioning
  (becomes the "for …" in titles).
- `hq_country`, `founded_year`, `parent_company` (About page, press, Wikipedia with citation).
- `size_range`, `has_plus`, `has_petite`, `has_tall`: from the size guide.
- `ships_to` (ISO codes; check US, CA, GB, AU), `free_shipping_min_usd`, `returns_days`: from the
  shipping and returns pages, US terms.
- `prices`: for category C (and other main categories), min/max **USD** of regular-price items
  seen on the brand's own category page, with that page's URL and today's date. No sale prices.
- `materials`, `certifications`, `production_model`, `sale_pattern`: only if the brand states them.
- `sources`: every URL used.

## §3 Pick
A candidate becomes a pick only if: `status = verified`, it sells C, it has ≥1 outside source,
and there is one **specific, checkable reason** built from stored facts (price, material, fit,
origin, aesthetic as the brand itself states it). Mood-only reasons ("similar vibe") fail.
Rank by number of independent sources, then closeness of price range. Keep 6–12.
Record rejected candidates with the reason, so a re-run doesn't re-check them blind.
