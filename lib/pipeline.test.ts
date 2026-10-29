import assert from "node:assert/strict";
import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "node:test";
import { judgeBrandsLikePage } from "./gate";
import { pipelinePages } from "./pipeline";

const NOW = new Date("2026-10-29T00:00:00Z");
const price = (min: number, max: number) => [
  { category: "jeans", currency: "USD", min, max, min_usd: min, max_usd: max, source_url: "https://x", checked_at: "2026-10-29" },
];
const brand = (name: string, extra: object = {}) => ({
  name, status: "verified", known_for: "Wide-Leg Jeans", website_url: `https://${name}.example`, hq_country: "US",
  size_range: "24–34", ships_to: ["US"], returns_days: 30, image_url: "/img/x.jpg", prices: price(80, 120), ...extra,
});

function fixtureDir(withCopy: boolean) {
  const dir = mkdtempSync(join(tmpdir(), "stylodex-pipeline-"));
  mkdirSync(join(dir, "brands"));
  mkdirSync(join(dir, "pages"));
  const picks = ["a", "b", "c", "d", "e", "f"];
  writeFileSync(join(dir, "brands", "anchor.json"), JSON.stringify(brand("Anchor")));
  for (const s of picks) writeFileSync(join(dir, "brands", `${s}.json`), JSON.stringify(brand(s.toUpperCase())));
  writeFileSync(
    join(dir, "pages", "anchor.json"),
    JSON.stringify({
      slug: "anchor", url_prefix: "brands", category: { slug: "jeans", name: "Jeans" }, checked_at: "2026-10-29", author: "Ash",
      picks: picks.map((s, i) => ({
        slug: s, rank: i + 1, price_relation: "similar",
        reason: `${s.toUpperCase()} makes wide-leg jeans in the same $80–$120 range from its own store.`,
        evidence: [{ kind: "serp_comention", url: "https://editorial.example/list" }],
      })),
      ...(withCopy && { copy: { intro: "Intro.", bodies: Object.fromEntries(picks.map((s) => [s, `Body for ${s}.`])), faqs: [] } }),
    }),
  );
  return dir;
}

test("a written page file becomes an indexable-by-the-gate page", () => {
  const [page] = pipelinePages(fixtureDir(true));
  assert.equal(page.anchor.name, "Anchor");
  assert.equal(page.picks.length, 6);
  const verdict = judgeBrandsLikePage(page, NOW);
  assert.equal(verdict.indexable, true, verdict.reasons.join("; "));
});

test("a page with no written copy yet is skipped", () => {
  assert.deepEqual(pipelinePages(fixtureDir(false)), []);
});

test("a missing data directory yields no pages", () => {
  assert.deepEqual(pipelinePages(join(tmpdir(), "does-not-exist-stylodex")), []);
});
