import assert from "node:assert/strict";
import { test } from "node:test";
import { categoryHubs, MIN_HUB_BRANDS } from "./categories";
import { fixtureBrand } from "./fixtures";
import { hubProducts, storeCards, tilePhotos } from "./home";
import type { BrandLook } from "./look";
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
const shot = (category: string, imageUrl: string) => ({ category, imageUrl, title: "", productPath: "/products/x", price: 50, currency: "USD" });
const look = (heroSmallUrl: string): BrandLook => ({
  heroUrl: heroSmallUrl,
  heroSmallUrl,
  heroSmallWidth: 720,
  heroWidth: 1440,
  heroHeight: 900,
  logo: null,
  background: "#000000",
});

test("tiles never share a photo, prefer their own category and spread across brands", () => {
  const brands = Array.from({ length: MIN_HUB_BRANDS }, (_, i) =>
    fixtureBrand({
      slug: `b${i}`,
      name: `B${i}`,
      prices: [price("jeans"), price("pants")],
      productShots: [shot("pants", `/img/pants-${i}.webp`), shot("jeans", `/img/jeans-${i}.webp`)],
    }),
  );
  const hubs = categoryHubs(brands).flatMap((g) => g.hubs);
  const photos = tilePhotos(hubs);
  assert.equal(photos.get("/categories/jeans"), "/img/jeans-0.webp");
  // b0 already has a tile, so pants goes to the next brand.
  assert.equal(photos.get("/categories/pants"), "/img/pants-1.webp");
  assert.equal(new Set(photos.values()).size, hubs.length);
});

test("store cards need a cover and two other shots, with list brands first", () => {
  const three = [shot("tops", "/img/1.webp"), shot("tops", "/img/2.webp"), shot("tops", "/img/3.webp")];
  const brands = [
    fixtureBrand({ slug: "ace", name: "Ace", productShots: three }),
    fixtureBrand({ slug: "bee", name: "Bee", productShots: three.slice(0, 2) }),
    fixtureBrand({ slug: "cat", name: "Cat", productShots: three.slice(0, 2), look: look("/img/cat-hero.webp") }),
    fixtureBrand({ slug: "dot", name: "Dot", productShots: three }),
  ];
  const cards = storeCards(brands, ["dot"], 10);
  assert.deepEqual(
    cards.map((c) => c.brand.slug),
    ["dot", "cat", "ace"],
  );
  assert.equal(cards[1].cover, "/img/cat-hero.webp");
  assert.deepEqual(
    cards[0].shots.map((s) => s.imageUrl),
    ["/img/2.webp", "/img/3.webp"],
  );
});

test("a product row takes one shot from the category per brand", () => {
  const brands = Array.from({ length: MIN_HUB_BRANDS }, (_, i) =>
    fixtureBrand({
      slug: `b${i}`,
      name: `B${i}`,
      prices: [price("dresses")],
      productShots: i === 0 ? [shot("tops", "/img/top.webp")] : [shot("dresses", `/img/d${i}a.webp`), shot("dresses", `/img/d${i}b.webp`)],
    }),
  );
  const hub = categoryHubs(brands)[0].hubs[0];
  assert.deepEqual(
    hubProducts(hub, 10).map((p) => p.shot.imageUrl),
    ["/img/d1a.webp", "/img/d2a.webp"],
  );
});
