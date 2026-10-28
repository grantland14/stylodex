import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";
import { ArrowUpRight } from "@/components/ArrowUpRight";
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

  const host = brand.websiteUrl ? new URL(brand.websiteUrl).hostname.replace(/^www\./, "") : null;

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 md:py-14">
      <div className="md:grid md:grid-cols-[16rem_1fr] md:gap-10">
        {brand.imageUrl && (
          // eslint-disable-next-line @next/next/no-img-element -- served from /img/, proxied storage
          <img src={brand.imageUrl} alt={brand.name} className="aspect-square w-full bg-soft object-cover" />
        )}
        <div className="mt-6 md:mt-0">
          <p className="eyebrow">Brand</p>
          <h1 className="mt-2 text-4xl font-normal tracking-tight">{brand.name}</h1>
          {brand.knownFor && <p className="mt-3 text-lg leading-relaxed">Known for {brand.knownFor.toLowerCase()}.</p>}
          {host && (
            <a
              href={`/go/${brand.slug}?from=${encodeURIComponent(`/brands/${brand.slug}`)}`}
              rel="sponsored nofollow"
              className="mt-3 inline-flex items-center gap-1 text-sm text-ink underline"
            >
              {host} <ArrowUpRight />
            </a>
          )}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:flex">
            <a href={`/brands-like-${brand.slug}`} className="btn-line">
              Brands like {brand.name}
            </a>
            <a href={`/go/${brand.slug}?from=${encodeURIComponent(`/brands/${brand.slug}`)}`} rel="sponsored nofollow" className="btn-solid">
              Shop <ArrowUpRight />
            </a>
          </div>
        </div>
      </div>

      <nav className="mt-12 flex gap-8 border-b border-rule text-sm" aria-label="Sections">
        <span className="-mb-px border-b-2 border-ink pb-3 font-medium text-ink">Overview</span>
        <a href={`/brands-like-${brand.slug}`} className="pb-3 text-muted no-underline hover:text-ink">
          Alternatives
        </a>
      </nav>

      <dl className="mt-2 text-sm">
        {facts
          .filter(([, value]) => value)
          .map(([label, value]) => (
            <div key={label} className="grid grid-cols-3 gap-4 border-b border-rule py-3">
              <dt className="text-muted">{label}</dt>
              <dd className="col-span-2 text-ink">{value}</dd>
            </div>
          ))}
      </dl>
    </article>
  );
}
