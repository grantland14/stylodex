import assert from "node:assert/strict";
import { test } from "node:test";
import { priceRange } from "./format";

test("prices show in the store's own currency", () => {
  const base = { category: "denim", sourceUrl: "", checkedAt: "", minUsd: 0, maxUsd: 0 };
  assert.equal(priceRange({ ...base, currency: "USD", min: 48, max: 56 }), "$48–$56");
  assert.equal(priceRange({ ...base, currency: "GBP", min: 40, max: 95 }), "£40–£95");
  assert.equal(priceRange(undefined), null);
});
