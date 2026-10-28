# Stylodex

Verified fashion brand alternatives, with real prices, sizes and shipping for each brand.

```bash
npm install
cp .env.example .env.local   # fill in Stylodex's own Supabase project
npm run dev                  # or STYLODEX_FIXTURES=1 npm run dev for placeholder data
npm test
```

- `supabase/migrations/` — schema (brands, prices, verified similar pairs, evidence, pages, clicks)
- `lib/gate.ts` — what may be published and indexed
- `lib/affiliate.ts` — Skimlinks wrapping for `/go/[slug]`
- `app/brands-like/[slug]` — the "N Brands Like X" article, served at `/brands-like-x`
- `app/brands/[slug]` — brand profile
- `tasks/todo.md` — the build plan
