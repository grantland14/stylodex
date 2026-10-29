"""Merge facts into a shared brand file under an exclusive lock.

Many page agents run at once and several touch the same brand. Every brand-file write goes
through here so one agent's update can't overwrite another's.

    python3 -I pipeline/merge_brand.py <slug> <patch.json> [--overwrite field,field]

Patch rules:
- Scalar and list fields fill only when the file's value is null/empty, unless named in
  --overwrite (use that for corrections, e.g. a wrong website_url).
- "prices": entries replace the existing entry for the same category; other categories stay.
- "sources", "notes" and "sells_categories": entries are added, never removed (even with --overwrite), so agents
  writing the same brand at once never lose each other's notes.
- A new slug creates the file.
"""

import fcntl
import json
import os
import sys

BRANDS = os.path.join(os.path.dirname(os.path.abspath(__file__)), "data", "brands")


def merge(current: dict, patch: dict, overwrite: set) -> dict:
    out = dict(current)
    for key, value in patch.items():
        if key == "prices":
            by_cat = {p["category"]: p for p in out.get("prices", [])}
            for p in value:
                by_cat[p["category"]] = p
            out["prices"] = list(by_cat.values())
        elif key in ("sources", "notes", "sells_categories"):
            out[key] = list(dict.fromkeys([*(out.get(key) or []), *value]))
        elif key in overwrite or out.get(key) in (None, "", [], {}):
            out[key] = value
    return out


def main() -> None:
    if len(sys.argv) < 3:
        sys.exit(__doc__)
    slug, patch_path = sys.argv[1], sys.argv[2]
    overwrite = set()
    if "--overwrite" in sys.argv:
        overwrite = set(sys.argv[sys.argv.index("--overwrite") + 1].split(","))
    with open(patch_path, encoding="utf-8") as f:
        patch = json.load(f)

    path = os.path.join(BRANDS, f"{slug}.json")
    fd = os.open(path, os.O_RDWR | os.O_CREAT, 0o644)
    with os.fdopen(fd, "r+", encoding="utf-8") as f:
        fcntl.flock(f, fcntl.LOCK_EX)
        text = f.read()
        current = json.loads(text) if text.strip() else {}
        merged = merge(current, patch, overwrite)
        f.seek(0)
        f.truncate()
        json.dump(merged, f, indent=2, ensure_ascii=False)
        f.write("\n")
    print(f"merged {slug}: {len(patch)} field(s)")


if __name__ == "__main__":
    main()
