# Stylodex

A data-led directory of fashion brands and verified similar brands, earning affiliate revenue
(Skimlinks at launch). Main market: US. Built as a fresh start after Apart Style was demoted
site-wide; see `tasks/todo.md` for the plan and why.

## Project rules

- **No shared footprint with Apart Style.** Never copy its prose, link to it, redirect from it, or
  point this app at its Supabase project. Brand *facts* may be seeded from it; text never.
- **Similar brands must be real.** A pick renders only if `lib/gate.ts` passes it: both brands
  verified, same category, price label matches stored prices, outside evidence stored, one specific
  reason, checked within 90 days. Change the gate only with tests in `lib/gate.test.ts`.
- **Index nothing that fails the gate.** Pages that fail render `noindex`; the sitemap lists only
  passing pages. Release in waves (see `tasks/todo.md` Phase 3).
- **Every sentence traces to a stored fact.** Article copy is drafted from the brands' stored facts
  only; a claim with no stored fact is cut.
- **Affiliate links go through `/go/[slug]`** with `rel="sponsored nofollow"` and the disclosure.
- Local dev without a database: `STYLODEX_FIXTURES=1 npm run dev` (placeholder brands, noindex,
  `robots.txt` disallows all).

## Checks before any push

`npm test && npm run typecheck && npm run lint && STYLODEX_FIXTURES=1 npm run build`

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

