import assert from "node:assert/strict";
import { test } from "node:test";
import { evidenceLine, priceRange, priceWithUsd } from "./format";

test("prices show in the store's own currency", () => {
  const base = { category: "denim", sourceUrl: "", checkedAt: "", minUsd: 0, maxUsd: 0 };
  assert.equal(priceRange({ ...base, currency: "USD", min: 48, max: 56 }), "$48–$56");
  assert.equal(priceRange({ ...base, currency: "GBP", min: 40, max: 95 }), "£40–£95");
  assert.equal(priceRange(undefined), null);
});

test("non-USD prices also show the dollar equivalent", () => {
  const base = { category: "jeans", sourceUrl: "", checkedAt: "" };
  assert.equal(priceWithUsd({ ...base, currency: "GBP", min: 70, max: 80, minUsd: 93, maxUsd: 106 }), "£70–£80 (about $93–$106)");
  assert.equal(priceWithUsd({ ...base, currency: "USD", min: 72, max: 98, minUsd: 72, maxUsd: 98 }), "$72–$98");
});

test("evidence shows each source site once, with what kind of source it is", () => {
  assert.equal(
    evidenceLine([
      { kind: "serp_comention", url: "https://www.discobrands.co/blogs/a", note: null },
      { kind: "serp_comention", url: "https://discobrands.co/blogs/b", note: null },
      { kind: "co_stocked", url: "https://www.dollskill.com/collections/jeans", note: null },
    ]),
    "discobrands.co (list), dollskill.com (stocks both)",
  );
  assert.equal(evidenceLine([]), null);
});
