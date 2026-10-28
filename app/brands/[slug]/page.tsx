import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";
import { FIXTURE_MODE, getBrand } from "@/lib/data";
import { priceRange, shipsTo, sizes, usd } from "@/lib/format";
import { missingBrandFacts } from "@/lib/gate";
import type { Brand } from "@/lib/types";

export const revalidate = 86400;

const load = cache(getBrand);

/** A profile is indexable once the brand passes the fact check for at least one category it sells. */
function isIndexable(brand: Brand): boolean {
  return !FIXTURE_MODE && brand.prices.some((p) => missingBrandFacts(brand, p.category).length === 0);
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const brand = await load(params.slug);
  if (!brand) return {};
  return {
    title: `${brand.name}: Prices, Sizes, Shipping and Returns`,
    description: `${brand.name} at a glance: what it costs by category, the sizes it makes, where it ships and its returns policy.`,
    alternates: { canonical: `/brands/${brand.slug}` },
    robots: isIndexable(brand) ? { index: true, follow: true } : { index: false, follow: true },
  };
}

export default async function BrandProfile({ params }: { params: { slug: string } }) {
  const brand = await load(params.slug);
  if (!brand || brand.status !== "verified") notFound();

  const facts: [string, string | null][] = [
    ...brand.prices.map((p): [string, string | null] => [p.category[0].toUpperCase() + p.category.slice(1), priceRange(p)]),
    ["Sizes", sizes(brand)],
    ["Ships to", shipsTo(brand)],
    ["Free shipping", brand.freeShippingMinUsd != null ? `Over ${usd(brand.freeShippingMinUsd)}` : null],
    ["Returns", brand.returnsDays != null ? `${brand.returnsDays} days` : null],
    ["Based in", brand.hqCountry],
    ["Founded", brand.foundedYear?.toString() ?? null],
    ["Materials", brand.materials.join(", ") || null],
    ["Certifications", brand.certifications.join(", ") || null],
    ["How it's made", brand.productionModel],
    ["Sales", brand.salePattern],
  ];

  return (
    <article className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="font-serif text-4xl">{brand.name}</h1>
      {brand.knownFor && <p className="mt-3 text-lg text-muted">Known for {brand.knownFor.toLowerCase()}.</p>}
      <dl className="mt-8 divide-y divide-rule border-y border-rule text-sm">
        {facts
          .filter(([, value]) => value)
          .map(([label, value]) => (
            <div key={label} className="grid grid-cols-3 gap-4 py-2.5">
              <dt className="text-muted">{label}</dt>
              <dd className="col-span-2">{value}</dd>
            </div>
          ))}
      </dl>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href={`/go/${brand.slug}?from=${encodeURIComponent(`/brands/${brand.slug}`)}`} rel="sponsored nofollow" className="rounded bg-accent px-5 py-2.5 text-sm font-medium text-paper">
          Shop {brand.name}
        </a>
        <a href={`/brands-like-${brand.slug}`} className="rounded border border-rule px-5 py-2.5 text-sm">
          Brands like {brand.name}
        </a>
      </div>
    </article>
  );
}
