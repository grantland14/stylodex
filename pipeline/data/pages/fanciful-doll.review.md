# Review: brands like Fanciful Doll (brands/fanciful-doll)

Checked 2026-10-29. Author: Ash. Category: dresses.

## Result
**Not publishable: 0 picks.** No copy written. The page file holds the evidence search,
the verified anchor and the human checks, so a re-run starts from here.

- Gate (lib/pipeline.ts + judgeBrandsLikePage, run with an in-memory probe intro because the
  stored file has no copy): `indexable: false`, reasons `only 0 publishable picks (need 6)`.
  Anchor facts complete (`missingAnchorFacts` = []).
- As stored, `pageFromJson` returns null (no intro), so the build skips the page: nothing renders,
  nothing enters the sitemap.

## Why there are no picks
A source counts only when it recommends a brand as an alternative to Fanciful Doll.
- Ahrefs serp-overview (US): no positions for any of the four keywords.
- WebSearch: Apart Style's own "brands like Fanciful Doll" page (never a source, not read);
  instya.com (automated similar-sites list of bridesmaid and costume shops, no editorial content);
  Lizzie in Lace, GirlStyle SG and The Wandering Afro (general roundups that list Fanciful Doll
  beside other brands and compare nothing to it); zoevogue.com (domain for sale); marketplaces
  (Poshmark, eBay, Etsy, Walmart, TikTok Shop); a YouTube sewing video.
- Disco directory: no Fanciful Doll entry (404, absent from its sitemap; its related brand pages
  don't name it).
- Reddit: the only page that seems to recommend alternatives is a Reddit thread reachable only via
  a third-party mirror. Not read (would work around Reddit's refusal). Human check.
- No co-stocking retailer; no Apart Style pool row.

## Anchor (merged into pipeline/data/brands/fanciful-doll.json)
verified; London, GB; dresses $251 to $1,173 regular on the US storefront (220 of 284 dresses,
64 marked down excluded, US prices include duties); sizes 3XS to 4X (US 0 to 22); ships US, CA,
GB, AU; US returns store credit only within 7 days. Fact fields pass `npm run lint:facts`. No
other page uses this brand, so no other page's price label is affected.

## G1 to G15, voice, AI-voice scan, fact trace
Not applicable: no copy exists. Estimated Page Quality: n/a (unbuilt). Needs Met: n/a.

## Next step
A human read of the Reddit thread (human_check[0]) is the one lead. Any brand it names needs its
own source framing it as an alternative before it can be a pick, and six are needed to index.
