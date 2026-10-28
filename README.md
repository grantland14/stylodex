# Stylodex

Verified alternatives to fashion and beauty brands and stores, with real prices, sizes and
shipping for each. Astro, prerendered from Supabase, deployed on Vercel.

```bash
npm install
cp .env.example .env   # Supabase (stylodex schema), Skimlinks, SITE_URL
npm run dev            # or STYLODEX_FIXTURES=1 npm run dev for placeholder data
npm test && npm run check
```

- `supabase/migrations/` — the `stylodex` schema in the shared Supabase project
- `lib/gate.ts` — what may be published and indexed (unit-tested)
- `lib/data.ts` — Supabase reads; `lib/affiliate.ts` — Skimlinks wrapping
- `src/pages/[prefix]-like-[slug].astro` — "N Brands/Stores Like X" articles
- `src/pages/brands/[slug].astro` — brand profiles
- `src/pages/go/[slug].ts`, `src/pages/img/[...path].ts` — the only server routes
- `tasks/todo.md` — the build plan
