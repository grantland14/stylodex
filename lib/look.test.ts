import assert from "node:assert/strict";
import { test } from "node:test";
import { AA, contrast, logoBox, lookFromJson, pageColour, parseHex, themeFor, toHex } from "./look";

const rgb = (hex: string) => parseHex(hex)!;

test("hex round trip and contrast reference values", () => {
  assert.deepEqual(parseHex("#FAF1CF"), [250, 241, 207]);
  assert.equal(parseHex("#fff"), null);
  assert.equal(parseHex("red"), null);
  assert.equal(toHex([250, 241, 207]), "#faf1cf");
  assert.equal(contrast(rgb("#000000"), rgb("#ffffff")).toFixed(0), "21");
  assert.equal(contrast(rgb("#777777"), rgb("#ffffff")).toFixed(2), "4.48");
});

test("light page colours get the house ink, dark ones get white", () => {
  assert.equal(themeFor("#faf1cf").ink, "#18191a");
  assert.equal(themeFor("#5a1a1e").ink, "#ffffff");
  // A readable colour is kept exactly as measured.
  assert.equal(themeFor("#faf1cf").bg, "#faf1cf");
});

test("every text colour passes AA on every page colour", () => {
  // A sweep across the RGB cube, including the mid-tones where neither ink reaches 4.5:1 unaided.
  for (let r = 0; r <= 255; r += 15) {
    for (let g = 0; g <= 255; g += 15) {
      for (let b = 0; b <= 255; b += 15) {
        const bg = toHex([r, g, b]);
        const t = themeFor(bg);
        assert.ok(contrast(rgb(t.ink), rgb(t.bg)) >= AA, `ink on ${bg}`);
        assert.ok(contrast(rgb(t.muted), rgb(t.bg)) >= AA, `muted on ${bg}`);
        // Buttons swap ink and page colour, so they pass whenever ink does.
      }
    }
  }
});

test("mid-tones are deepened only as far as white needs", () => {
  const t = themeFor("#808080");
  assert.equal(t.ink, "#ffffff");
  const c = contrast(rgb(t.ink), rgb(t.bg));
  assert.ok(c >= AA && c < AA + 0.6, `contrast ${c}`);
});

test("an unreadable or missing colour falls back to white", () => {
  assert.equal(themeFor("nonsense").bg, "#ffffff");
});

test("logo box keeps the aspect ratio inside 288 × 56", () => {
  assert.deepEqual(logoBox(400, 100), { width: 224, height: 56 });
  assert.deepEqual(logoBox(1000, 50), { width: 288, height: 14 });
  assert.deepEqual(logoBox(100, 100), { width: 56, height: 56 });
});

const entry = {
  status: "ok",
  hero: { path: "/img/looks/kotn-hero.webp", small_path: "/img/looks/kotn-hero-sm.webp", width: 1440, height: 810, small_width: 720 },
  logo: { path: "/img/looks/kotn-logo.webp", width: 400, height: 80 },
  background: "#FAF1CF",
  review: { status: "ok" },
};

test("only reviewed looks with our own files render", () => {
  assert.deepEqual(lookFromJson(entry), {
    heroUrl: "/img/looks/kotn-hero.webp",
    heroSmallUrl: "/img/looks/kotn-hero-sm.webp",
    heroSmallWidth: 720,
    heroWidth: 1440,
    heroHeight: 810,
    logo: { url: "/img/looks/kotn-logo.webp", width: 400, height: 80 },
    background: "#faf1cf",
  });
  assert.equal(lookFromJson({ ...entry, review: { status: "pending" } }), null);
  assert.equal(lookFromJson({ ...entry, review: undefined }), null);
  assert.equal(lookFromJson({ ...entry, status: "blocked" }), null);
  assert.equal(lookFromJson(undefined), null);
  assert.equal(lookFromJson({ ...entry, background: "yellow" }), null);
  // Never a raw storage or third-party URL (CLAUDE.md: images are served from /img/).
  assert.equal(lookFromJson({ ...entry, hero: { ...entry.hero, path: "https://cdn.shopify.com/x.webp" } }), null);
  assert.equal(lookFromJson({ ...entry, hero: { ...entry.hero, small_path: "/img/looks/../x.webp" } }), null);
});

test("a bad logo drops the logo, not the look", () => {
  assert.equal(lookFromJson({ ...entry, logo: null })?.logo, null);
  assert.equal(lookFromJson({ ...entry, logo: { path: "https://kotn.com/logo.svg", width: 1, height: 1 } })?.logo, null);
});

/** Raw RGB pixels: `n` of each colour. */
function pixels(...parts: [string, number][]): Uint8Array {
  return Uint8Array.from(parts.flatMap(([hex, n]) => Array.from({ length: n }, () => parseHex(hex)!).flat()));
}

test("page colour: a colourful area beats a bigger grey one", () => {
  // 30% mustard, 70% concrete grey: the mustard wins.
  assert.equal(pageColour(pixels(["#d4a030", 30], ["#8a8a88", 70]), 3), "#d4a030");
  // A grey photo keeps its main grey.
  assert.equal(pageColour(pixels(["#8a8a88", 70], ["#202020", 30]), 3), "#8a8a88");
  // A speck of colour doesn't take over.
  assert.equal(pageColour(pixels(["#e00000", 1], ["#f2efe8", 99]), 3), "#f2efe8");
});

test("page colour reads RGBA and averages within a bin", () => {
  const rgba = Uint8Array.from([200, 40, 40, 255, 202, 42, 42, 255]);
  assert.equal(pageColour(rgba, 4), "#c92929");
});
