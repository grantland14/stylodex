import assert from "node:assert/strict";
import { test } from "node:test";
import { affiliateUrl, resolveDestination } from "./affiliate";

test("without a Skimlinks site ID the merchant URL passes through unchanged", () => {
  assert.equal(affiliateUrl("https://levi.com/jeans", undefined), "https://levi.com/jeans");
});

test("with a site ID the URL is wrapped and encoded", () => {
  const wrapped = new URL(affiliateUrl("https://levi.com/jeans?fit=501", "123X456", "/brands-like-levis"));
  assert.equal(wrapped.origin, "https://go.skimresources.com");
  assert.equal(wrapped.searchParams.get("id"), "123X456");
  assert.equal(wrapped.searchParams.get("url"), "https://levi.com/jeans?fit=501");
  assert.equal(wrapped.searchParams.get("xcust"), "/brands-like-levis");
});

test("deep links stay on the brand's own host", () => {
  assert.equal(resolveDestination("https://levi.com", "/collections/jeans"), "https://levi.com/collections/jeans");
  assert.equal(resolveDestination("https://levi.com", "https://www.levi.com/sale"), "https://www.levi.com/sale");
  assert.equal(resolveDestination("https://levi.com", "https://evil.example/phish"), "https://levi.com/");
  assert.equal(resolveDestination("https://levi.com", "//evil.example"), "https://levi.com/");
  assert.equal(resolveDestination("https://levi.com", "http://levi.com/insecure"), "https://levi.com/");
});
