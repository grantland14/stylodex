// Fails the build check if any outbound link (to /go/ or another site) doesn't open in a
// new tab with noopener. Run after a build: node scripts/check-links.mjs [dir]
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const root = process.argv[2] ?? ".vercel/output/static";
const files = [];
(function walk(d) {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (p.endsWith(".html")) files.push(p);
  }
})(root);

let outbound = 0;
const bad = [];
for (const file of files) {
  for (const tag of readFileSync(file, "utf8").match(/<a\b[^>]*>/g) ?? []) {
    const href = tag.match(/href="([^"]*)"/)?.[1] ?? "";
    if (!/^(\/go\/|https?:\/\/)/.test(href)) continue;
    outbound++;
    if (!/target="_blank"/.test(tag) || !/rel="[^"]*\bnoopener\b/.test(tag)) bad.push(`${file}: ${tag}`);
  }
}
if (bad.length) {
  console.error(`${bad.length} outbound link(s) don't open in a new tab with noopener:\n${bad.slice(0, 20).join("\n")}`);
  process.exit(1);
}
console.log(`ok: ${outbound} outbound links in ${files.length} pages open in a new tab`);
