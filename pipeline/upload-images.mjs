// Uploads staged images (pipeline/media/, written by images.mjs, product-images.mjs and look.mjs)
// to the stylodex-images bucket, where /img/[...path] serves them. Images are never committed.
// Only new or changed files go up: pipeline/data/uploads.json keeps each path's SHA-256.
//
// Usage: node pipeline/upload-images.mjs [--dry-run] [prefix ...]   e.g. looks products/kotn
// Credentials (server-side only, never in the repo), either:
//   SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY            the Storage API directly; or
//   STYLODEX_UPLOAD_URL + STYLODEX_UPLOAD_TOKEN         a token-guarded upload function, for a
//                                                       session that has no service key.

import { execFile } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";
import { promisify } from "node:util";

const run = promisify(execFile);
const ROOT = new URL("..", import.meta.url).pathname;
const MEDIA = join(ROOT, "pipeline/media");
const MANIFEST = join(ROOT, "pipeline/data/uploads.json");
const BUCKET = "stylodex-images";
// Same rule as src/pages/img/[...path].ts: anything else could never be served.
const SAFE_PATH = /^[a-z0-9][a-z0-9/_.-]*\.(jpe?g|png|webp)$/i;
const TYPES = { webp: "image/webp", png: "image/png", jpg: "image/jpeg", jpeg: "image/jpeg" };

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const prefixes = args.filter((a) => !a.startsWith("--"));

function target(path) {
  const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, STYLODEX_UPLOAD_URL, STYLODEX_UPLOAD_TOKEN } = process.env;
  if (STYLODEX_UPLOAD_URL && STYLODEX_UPLOAD_TOKEN) {
    return { url: `${STYLODEX_UPLOAD_URL}?path=${encodeURIComponent(path)}`, method: "PUT", headers: [`x-upload-token: ${STYLODEX_UPLOAD_TOKEN}`] };
  }
  if (SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY) {
    return {
      url: `${SUPABASE_URL}/storage/v1/object/${BUCKET}/${path}`,
      method: "POST",
      headers: [`Authorization: Bearer ${SUPABASE_SERVICE_ROLE_KEY}`, "x-upsert: true", "cache-control: 31536000"],
    };
  }
  return null;
}

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

const manifest = existsSync(MANIFEST) ? JSON.parse(readFileSync(MANIFEST, "utf8")) : {};
const files = (existsSync(MEDIA) ? walk(MEDIA) : [])
  .map((file) => ({ file, path: relative(MEDIA, file).split("\\").join("/") }))
  .filter(({ path }) => SAFE_PATH.test(path) && (prefixes.length === 0 || prefixes.some((p) => path.startsWith(p))))
  .map((f) => ({ ...f, sha: createHash("sha256").update(readFileSync(f.file)).digest("hex") }))
  .filter(({ path, sha }) => manifest[path] !== sha);

console.log(`${files.length} new or changed file(s)${dryRun ? " (dry run)" : ""}`);
if (!dryRun && files.length) {
  if (!target("x")) throw new Error("No credentials: set SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY (see the header).");
  let done = 0;
  let failed = 0;
  const queue = [...files];
  const worker = async () => {
    for (let f = queue.shift(); f; f = queue.shift()) {
      const t = target(f.path);
      const ext = f.path.split(".").pop().toLowerCase();
      const { stdout } = await run("curl", [
        "-sS", "-o", "/dev/null", "-w", "%{http_code}", "--max-time", "60", "-X", t.method,
        ...t.headers.flatMap((h) => ["-H", h]), "-H", `content-type: ${TYPES[ext]}`,
        "--data-binary", `@${f.file}`, t.url,
      ]).catch((e) => ({ stdout: `curl ${e.code}` }));
      if (stdout === "200") {
        manifest[f.path] = f.sha;
        done++;
      } else {
        failed++;
        console.log(`failed ${f.path}: ${stdout}`);
      }
      if ((done + failed) % 100 === 0) {
        console.log(`${done + failed}/${files.length}`);
        writeFileSync(MANIFEST, JSON.stringify(Object.fromEntries(Object.entries(manifest).sort()), null, 2) + "\n");
      }
    }
  };
  await Promise.all(Array.from({ length: 6 }, worker));
  writeFileSync(MANIFEST, JSON.stringify(Object.fromEntries(Object.entries(manifest).sort()), null, 2) + "\n");
  console.log(`uploaded ${done}, failed ${failed}`);
  if (failed) process.exitCode = 1;
}
