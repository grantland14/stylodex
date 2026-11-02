import assert from "node:assert/strict";
import { test } from "node:test";
import { countryName, money, priceRange, priceSpan, priceWithUsd } from "./format";

test("prices show in the store's own currency", () => {
  const base = { category: "denim", sourceUrl: "", checkedAt: "", minUsd: 0, maxUsd: 0 };
  assert.equal(priceRange({ ...base, currency: "USD", min: 48, max: 56 }), "$48–$56");
  assert.equal(priceRange({ ...base, currency: "GBP", min: 40, max: 95 }), "£40–£95");
  assert.equal(priceRange(undefined), null);
  assert.equal(priceRange({ ...base, currency: "USD", min: 24.99, max: 48.95 }), "$24.99–$48.95");
  assert.equal(priceRange({ ...base, currency: "USD", min: 25, max: 48.95 }), "$25.00–$48.95");
});

test("non-USD prices also show the dollar equivalent", () => {
  const base = { category: "jeans", sourceUrl: "", checkedAt: "" };
  assert.equal(priceWithUsd({ ...base, currency: "GBP", min: 70, max: 80, minUsd: 93, maxUsd: 106 }), "£70–£80 (about $93–$106)");
  assert.equal(priceWithUsd({ ...base, currency: "USD", min: 72, max: 98, minUsd: 72, maxUsd: 98 }), "$72–$98");
});


test("money and country names", () => {
  assert.equal(money(99.95, "USD"), "$99.95");
  assert.equal(money(80, "GBP"), "£80");
  assert.equal(countryName("GB"), "United Kingdom");
  assert.equal(countryName(null), null);
});

test("one price span across categories", () => {
  const base = { sourceUrl: "", checkedAt: "" };
  const cad = (category: string, min: number, max: number) => ({ ...base, category, currency: "CAD", min, max, minUsd: min * 0.71, maxUsd: max * 0.71 });
  assert.equal(priceSpan([cad("dresses", 118, 158), cad("jeans", 148, 168)]), "CA$118–CA$168");
  assert.equal(priceSpan([{ ...base, category: "tees", currency: "USD", min: 45, max: 60, minUsd: 45, maxUsd: 60 }]), "$45–$60");
  const gbp = { ...base, category: "bags", currency: "GBP", min: 90, max: 200, minUsd: 120, maxUsd: 266 };
  assert.equal(priceSpan([cad("dresses", 118, 158), gbp]), "about $84–$266");
  assert.equal(priceSpan([]), null);
});
