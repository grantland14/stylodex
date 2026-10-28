# Wave 1 — how it was chosen (2026-10-28)

- 222 candidate subjects: Apart Style's top "brands like" pages by clicks (Dec 2025–Aug 2026,
  fashion/beauty only) plus similist.com's fashion, department-store and beauty subjects.
- Qualifies if `brands like X` or `stores like X` has ≥30 US searches/month (Ahrefs, 2026-10-28)
  **or** Apart Style's page earned ≥218 clicks in that window (the cutoff of the 250-page export).
  Ahrefs reads 0 for some subjects with proven clicks (e.g. Francesca's), hence both signals.
- 204 qualify (110 on both signals, 60 volume only, 34 clicks only). 18 dropped.
- `url_prefix` = the phrasing with more volume; ties go to `brands`.

To resolve during enrichment:
- Merge `earthbound` and `earthbound trading company` (same store).
- Confirm identity: `windsor` (Windsor Store), `parade` (underwear), `akira` (Shop Akira),
  `on cloud` (On running), `rainbow` (Rainbow Shops), `zara` page also took "zara and h&m" clicks.
- Closed or online-only anchors (Charlotte Russe, Wet Seal, Payless, Charming Charlie, Coldwater
  Creek…) use `stores` pages with a defunct anchor; picks must be live.
