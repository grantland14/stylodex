# Stylodex

A data-led directory of fashion brands and verified similar brands, earning affiliate revenue
(Skimlinks at launch). Main market: US. Built as a fresh start after Apart Style was demoted
site-wide; see `tasks/todo.md` for the plan and why.

## Project rules

- **No visible footprint shared with Apart Style.** Never copy its prose, link to it or redirect
  from it. Brand *facts* may be seeded from it; text never.
- **Shared Supabase project, separate schema.** Stylodex lives in the `stylodex` schema of the
  Apart Style project. The app never queries `public.*` (Apart Style's tables) at runtime; seeding
  is a one-off copy. Supabase is server-side only (`SUPABASE_URL`, no `NEXT_PUBLIC_`), and images
  are served from `/img/` (the `stylodex-images` bucket), never from a raw storage URL. The gate
  enforces the image rule.
- **Exposed API schemas are set on the database role, not the dashboard**
  (`supabase/migrations/00002_expose_stylodex_schema.sql`). Any change must keep `public` and
  `graphql_public` in the list, or Apart Style's API breaks.
- **Similar brands must be real.** A pick renders only if `lib/gate.ts` passes it: both brands
  verified, same category, price label matches stored prices, outside evidence stored, one specific
  reason, checked within 90 days, ships to the US or has US stores. Change the gate only with tests in `lib/gate.test.ts`.
- **Index nothing that fails the gate.** Pages that fail render `noindex`; the sitemap lists only
  passing pages. Release in waves (see `tasks/todo.md` Phase 3).
- **Every sentence traces to a stored fact.** Article copy is drafted from the brands' stored facts
  only; a claim with no stored fact is cut.
- **Affiliate links go through `/go/[slug]`** with `rel="sponsored nofollow noopener"`, open in a new tab
  (`target="_blank"`), and carry the disclosure. Every external link opens in a new tab (Ash,
  2026-10-29); `npm run check:links` enforces it on the built pages.
- **Never change a page's `url_prefix` once it is indexed.** Each subject is built at one prefix
  only; the other prefixes 404, so a changed prefix loses the ranking URL.
- **Astro, static first.** Pages are prerendered from Supabase at build time and ship no
  JavaScript, except the brand search box (`src/components/BrandSearch.astro`, reads the
  build-time `/search.json`; the form still works without it). Only `/go/` and `/img/` run on the server (`prerender = false`). Framework-free logic
  lives in `lib/` and is unit-tested; `src/` is templates only. No CMS: content lives in Supabase.
- Local dev without a database: `STYLODEX_FIXTURES=1 npm run dev` (placeholder brands, noindex,
  `robots.txt` disallows all).

## Checks before any push

`npm test && npm run check && STYLODEX_FIXTURES=1 npm run build && npm run check:links`

## Workflow Orchestration

### 1. Plan Mode Default
- Enter plan mode for ANY non-trivial task (3+ steps or architectural decisions)
- If something goes sideways, STOP and re-plan immediately - don't keep pushing
- Use plan mode for verification steps, not just building
- Write detailed specs upfront to reduce ambiguity

### 2. Subagent Strategy to keep main context window clean
- Offload research, exploration, and parallel analysis to subagents
- For complex problems, throw more compute at it via subagents
- One task per subagent for focused execution

### 3. Self-Improvement Loop
- After ANY correction from the user: update 'tasks/lessons.md' with the pattern
- Write rules for yourself that prevent the same mistake
- Ruthlessly iterate on these lessons until mistake rate drops
- Review lessons at session start for relevant project

### 4. Verification Before Done
- Never mark a task complete without proving it works
- Diff behavior between main and your changes when relevant
- Ask yourself: "Would a staff engineer approve this?"
- Run tests, check logs, demonstrate correctness

### 5. Demand Elegance (Balanced)
- For non-trivial changes: pause and ask "is there a more elegant way?"
- If a fix feels hacky: "Knowing everything I know now, implement the elegant solution"
- Skip this for simple, obvious fixes - don't over-engineer
- Challenge your own work before presenting it

### 6. Autonomous Bug Fixing
- When given a bug report: just fix it. Don't ask for hand-holding
- Point at logs, errors, failing tests -> then resolve them
- Zero context switching required from the user
- Go fix failing CI tests without being told how

## Task Management
1. **Plan First**: Write plan to 'tasks/todo.md' with checkable items
2. **Verify Plan**: Check in before starting implementation
3. **Track Progress**: Mark items complete as you go
4. **Explain Changes**: High-level summary at each step
5. **Document Results**: Add review to 'tasks/todo.md'
6. **Capture Lessons**: Update 'tasks/lessons.md' after corrections

## Core Principles
- **Simplicity First**: Make every change as simple as possible. Impact minimal code.
- **No Laziness**: Find root causes. No temporary fixes. Senior developer standards.
- **Minimal Impact**: Changes should only touch what's necessary. Avoid introducing bugs.

