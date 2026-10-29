// Flags brand facts that read like research notes instead of display text (pipeline/enrich.md §2).
// Usage: node scripts/lint-facts.mjs  (exit 1 if any field breaks the rule)
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const DIR = "pipeline/data/brands";
const FIELDS = ["known_for", "size_range", "production_model", "sale_pattern", "parent_company"];
const LIST_FIELDS = ["materials", "certifications"];
const NOTE_LIKE = [
  [/["“”']/, "quotes"],
  [/\((about|faq|homepage|site|wikipedia)[^)]*\)/i, "source tag"],
  [/\b\d+ of \d+\b/, "counts"],
  [/;.*;/, "list of 3+ parts"],
];

const problems = [];
const check = (slug, field, value) => {
  if (typeof value !== "string" || !value) return;
  if (value.length > 60) problems.push(`${slug}.${field}: ${value.length} chars`);
  for (const [re, why] of NOTE_LIKE) if (re.test(value)) problems.push(`${slug}.${field}: ${why}`);
};
for (const f of readdirSync(DIR).filter((x) => x.endsWith(".json"))) {
  const slug = f.replace(/\.json$/, "");
  const b = JSON.parse(readFileSync(join(DIR, f), "utf8"));
  for (const field of FIELDS) check(slug, field, b[field]);
  for (const field of LIST_FIELDS) for (const v of b[field] ?? []) check(slug, field, v);
}
if (problems.length) {
  console.error(`${problems.length} fact field(s) read like notes:\n${problems.join("\n")}`);
  process.exit(1);
}
console.log("ok: brand facts are display-ready");
