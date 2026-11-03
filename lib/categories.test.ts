import assert from "node:assert/strict";
import { test } from "node:test";
import { brandPhoto, categoryHubs, fitHubs, MIN_HUB_BRANDS, sellsCategory, CATEGORY_GROUPS } from "./categories";
import { fixtureBrand } from "./fixtures";
import type { CategoryPrice } from "./types";

const price = (category: string): CategoryPrice => ({
  category,
  currency: "USD",
  min: 40,
  max: 90,
  minUsd: 40,
  maxUsd: 90,
  sourceUrl: "https://example.com",
  checkedAt: "2026-10-01T00:00:00Z",
});
const dresses = CATEGORY_GROUPS[0].categories.find((c) => c.slug === "dresses")!;
const hoodies = CATEGORY_GROUPS[0].categories.find((c) => c.slug === "hoodies")!;

test("a brand is in a category through checked prices or a confirmed sells-category", () => {
  assert.equal(sellsCategory(fixtureBrand({ slug: "a", name: "A", prices: [price("dresses")] }), dresses), true);
  assert.equal(sellsCategory(fixtureBrand({ slug: "b", name: "B", prices: [], sellsCategories: ["dresses"] }), dresses), true);
  assert.equal(sellsCategory(fixtureBrand({ slug: "c", name: "C", prices: [price("jeans")] }), dresses), false);
});

test("an alternative stored slug counts for its category", () => {
  assert.equal(sellsCategory(fixtureBrand({ slug: "a", name: "A", prices: [price("sweatshirts")] }), hoodies), true);
});

test("a category hub with too few brands is left out, and so is an empty group", () => {
  const few = Array.from({ length: MIN_HUB_BRANDS - 1 }, (_, i) => fixtureBrand({ slug: `d${i}`, name: `D${i}`, prices: [price("dresses")] }));
  const enough = Array.from({ length: MIN_HUB_BRANDS }, (_, i) => fixtureBrand({ slug: `b${i}`, name: `B${i}`, prices: [price("boots")] }));
  const groups = categoryHubs([...few, ...enough]);
  assert.deepEqual(
    groups.map((g) => [g.name, g.hubs.map((h) => h.slug)]),
    [["Shoes", ["boots"]]],
  );
  assert.equal(groups[0].hubs[0].path, "/categories/boots");
});

const shot = (category: string, imageUrl: string) => ({ category, imageUrl, title: "", productPath: "/products/x", price: 50, currency: "USD" });

test("hub brands with a product photo come first, then a site image, then A to Z", () => {
  const brands = [
    fixtureBrand({ slug: "zed", name: "Zed", prices: [price("dresses")], imageUrl: "/img/zed.webp" }),
    fixtureBrand({ slug: "bee", name: "Bee", prices: [price("dresses")], imageUrl: null }),
    fixtureBrand({ slug: "ace", name: "Ace", prices: [price("dresses")], imageUrl: null }),
    fixtureBrand({ slug: "yak", name: "Yak", prices: [price("dresses")], imageUrl: null, productShots: [shot("dresses", "/img/yak.webp")] }),
  ];
  assert.deepEqual(
    categoryHubs(brands)[0].hubs[0].brands.map((b) => b.slug),
    ["yak", "zed", "ace", "bee"],
  );
});

test("a hub photo prefers a product shot from that category, and a site image is shown uncropped", () => {
  const brand = fixtureBrand({ slug: "a", name: "A", productShots: [shot("tops", "/img/top.webp"), shot("dresses", "/img/dress.webp")] });
  assert.deepEqual(brandPhoto(brand, dresses), { url: "/img/dress.webp", cropped: true });
  assert.deepEqual(brandPhoto(brand), { url: "/img/top.webp", cropped: true });
  assert.deepEqual(brandPhoto(fixtureBrand({ slug: "b", name: "B", imageUrl: "/img/b.webp" })), { url: "/img/b.webp", cropped: false });
  assert.equal(brandPhoto(fixtureBrand({ slug: "c", name: "C", imageUrl: null })), null);
});

test("fit hubs count only brands confirmed to carry the fit", () => {
  const brands = Array.from({ length: MIN_HUB_BRANDS }, (_, i) => fixtureBrand({ slug: `p${i}`, name: `P${i}`, hasPlus: true, hasTall: null }));
  brands.push(fixtureBrand({ slug: "n", name: "N", hasPlus: null }));
  const hubs = fitHubs(brands);
  assert.deepEqual(
    hubs.map((h) => [h.slug, h.brands.length]),
    [["plus-size", MIN_HUB_BRANDS]],
  );
});
