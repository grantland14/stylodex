import assert from "node:assert/strict";
import { test } from "node:test";
import { fixtureBrand, fixtureClosedStorePage, fixturePage, fixturePick } from "./fixtures";
import { brandsLikeTitle, computePriceRelation, judgeBrandsLikePage, MAX_PICKS, pickProblems } from "./gate";

const NOW = new Date("2026-10-28T00:00:00Z");

test("a complete page with 7 verified picks is indexable", () => {
  const verdict = judgeBrandsLikePage(fixturePage(), NOW);
  assert.equal(verdict.indexable, true, verdict.reasons.join("; "));
  assert.equal(verdict.picks.length, 7);
});

test("unverified, evidence-free and off-category picks are dropped, and the page falls below the minimum", () => {
  const page = fixturePage();
  page.picks[0].pair.status = "candidate";
  page.picks[1].pair.evidence = [];
  page.picks[2].brand.prices = [{ ...page.picks[2].brand.prices[0], category: "stationery" }];
  const verdict = judgeBrandsLikePage(page, NOW);
  assert.equal(verdict.picks.length, 4);
  assert.equal(verdict.indexable, false);
  assert.match(verdict.reasons.join(), /only 4 publishable picks/);
});

test("a pair not re-checked within 90 days is not publishable", () => {
  const page = fixturePage();
  const stale = fixturePick("example-stale", "Example Stale", 1, { checkedAt: "2026-06-01T00:00:00Z" });
  assert.deepEqual(pickProblems(page.anchor, stale, "denim", NOW), ["pair not checked in 90 days"]);
});

test("a mood-only reason is rejected", () => {
  const page = fixturePage();
  const vague = fixturePick("example-vague", "Example Vague", 1, { reason: "Minimalist aesthetic" });
  assert.deepEqual(pickProblems(page.anchor, vague, "denim", NOW), ["no specific reason"]);
});

test("the price label must match stored prices", () => {
  const page = fixturePage();
  const pick = fixturePick("example-cheap", "Example Cheap", 1, { priceRelation: "similar" });
  pick.brand.prices = [{ ...pick.brand.prices[0], min: 20, max: 50, minUsd: 20, maxUsd: 50 }];
  assert.deepEqual(pickProblems(page.anchor, pick, "denim", NOW), ["price label doesn't match stored prices"]);
  pick.pair.priceRelation = "cheaper";
  assert.deepEqual(pickProblems(page.anchor, pick, "denim", NOW), []);
});

test("computePriceRelation treats any overlap as similar", () => {
  const anchor = { category: "denim", currency: "USD", min: 80, max: 140, minUsd: 80, maxUsd: 140, sourceUrl: "", checkedAt: "" };
  assert.equal(computePriceRelation(anchor, { ...anchor, minUsd: 130, maxUsd: 300 }), "similar");
  assert.equal(computePriceRelation(anchor, { ...anchor, minUsd: 150, maxUsd: 300 }), "pricier");
  assert.equal(computePriceRelation(anchor, { ...anchor, minUsd: 20, maxUsd: 79 }), "cheaper");
});

test("an anchor missing core facts blocks indexing but keeps the picks", () => {
  const page = fixturePage();
  page.anchor = fixtureBrand({ slug: page.anchor.slug, name: page.anchor.name, shipsTo: [], returnsDays: null });
  const verdict = judgeBrandsLikePage(page, NOW);
  assert.equal(verdict.indexable, false);
  assert.match(verdict.reasons[0], /anchor missing: shipsTo, returnsDays/);
  assert.equal(verdict.picks.length, 7);
});

test("picks are capped and ranked", () => {
  const page = fixturePage();
  page.picks = Array.from({ length: 15 }, (_, i) => fixturePick(`example-${i}`, `Example ${i}`, 15 - i));
  const verdict = judgeBrandsLikePage(page, NOW);
  assert.equal(verdict.picks.length, MAX_PICKS);
  assert.equal(verdict.picks[0].pair.rank, 1);
});

test("the title uses the real pick count", () => {
  const page = fixturePage();
  assert.equal(brandsLikeTitle(page, 7), "7 Brands Like Example Denim Co for Durable, Everyday Denim");
});

test("images hosted anywhere but /img/ block indexing", () => {
  const page = fixturePage();
  page.anchor = fixtureBrand({
    slug: page.anchor.slug,
    name: page.anchor.name,
    imageUrl: "https://gsseybdqmpfcyeijhgfs.supabase.co/storage/v1/object/public/brand-images/x.jpg",
  });
  const verdict = judgeBrandsLikePage(page, NOW);
  assert.equal(verdict.indexable, false);
  assert.match(verdict.reasons[0], /anchor missing: imageUrl/);
});

test("a closed store can anchor a stores-like page when every pick is live", () => {
  const page = fixtureClosedStorePage();
  const verdict = judgeBrandsLikePage(page, NOW);
  assert.equal(verdict.indexable, true, verdict.reasons.join("; "));
  assert.equal(brandsLikeTitle(page, verdict.picks.length), "7 Stores Like Example Closed Store for Affordable Going-Out Denim");
});

test("a closed store's picks can't claim cheaper or pricier", () => {
  const page = fixtureClosedStorePage();
  page.picks[0].pair.priceRelation = "cheaper";
  assert.deepEqual(pickProblems(page.anchor, page.picks[0], "denim", NOW), ["price label without an anchor price"]);
});

test("a closed brand can never be a pick", () => {
  const page = fixturePage();
  page.picks[0].brand.status = "defunct";
  assert.deepEqual(pickProblems(page.anchor, page.picks[0], "denim", NOW), ["brand not verified"]);
});

test("a GBP store is compared on its USD equivalent", () => {
  const page = fixturePage();
  const pick = fixturePick("example-uk", "Example UK", 1, { priceRelation: "pricier" });
  pick.brand.prices = [{ ...pick.brand.prices[0], currency: "GBP", min: 120, max: 200, minUsd: 152, maxUsd: 254 }];
  assert.deepEqual(pickProblems(page.anchor, pick, "denim", NOW), []);
});

test("an unverified brand (site refuses automated reads) is never a pick", () => {
  const page = fixturePage();
  page.picks[0].brand.status = "unverified";
  assert.deepEqual(pickProblems(page.anchor, page.picks[0], "denim", NOW), ["brand not verified"]);
});

test("a pick that doesn't ship to the US is dropped", () => {
  const page = fixturePage();
  page.picks[0].brand.shipsTo = ["AU", "NZ"];
  assert.deepEqual(pickProblems(page.anchor, page.picks[0], "denim", NOW), ["doesn't ship to the US"]);
});
