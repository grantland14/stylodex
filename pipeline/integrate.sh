#!/usr/bin/env bash
# Folds finished pages into the site: media for new brands and pages, every check, a commit,
# and a pipeline-mode preview deploy. Run from the repo root by the coordinator, never by
# page agents. Stops at the first failing check, before committing.
#
# Usage: pipeline/integrate.sh "commit message"
set -euo pipefail
cd "$(dirname "$0")/.."
msg="${1:-Integrate finished pages}"

# 1. Every page and brand file must be valid JSON before anything reads them.
for f in pipeline/data/pages/*.json pipeline/data/brands/*.json; do
  python3 -I -c 'import json,sys; json.load(open(sys.argv[1]))' "$f" || { echo "invalid JSON: $f"; exit 1; }
done

# 2. Media: share images for brands without one, product photos for pages without them.
node pipeline/images.mjs >/dev/null
node pipeline/product-images.mjs >/dev/null

# 3. Checks, as CLAUDE.md lists them, plus a pipeline-mode build and its link check.
npm test >/dev/null
npx astro check >/dev/null
STYLODEX_FIXTURES=1 npx astro build >/dev/null
STYLODEX_DATA=pipeline npx astro build >/dev/null
npm run check:links

# 4. What the build would show, page by page: picks and whether the gate lets it be indexed.
npx tsx -e '
import { pipelinePages } from "./lib/pipeline.ts";
import { judgeBrandsLikePage } from "./lib/gate.ts";
for (const p of pipelinePages()) {
  const v = judgeBrandsLikePage(p);
  console.log(`${p.urlPrefix}-like-${p.anchor.slug}`.padEnd(40), `${v.picks.length} picks`.padEnd(10), v.indexable ? "indexable" : `noindex: ${v.reasons.join("; ")}`);
}'

# 5. Commit, push, deploy the preview.
git add -A
git commit -q -m "$msg

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_018K52xEHSWSuVoUzkmnhAmw" || echo "nothing to commit"
git push -q
vercel deploy --yes -b STYLODEX_DATA=pipeline -b STYLODEX_FIXTURES=0 -e STYLODEX_DATA=pipeline -e STYLODEX_FIXTURES=0 2>&1 \
  | grep -oE 'https://stylodex-[a-z0-9]+-ashs-projects-8f76f8b6\.vercel\.app' | head -1
