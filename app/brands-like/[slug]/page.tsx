import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cache } from "react";
import { FIXTURE_MODE, getBrandsLikePage } from "@/lib/data";
import { longDate, priceRange, shipsTo, sizes } from "@/lib/format";
import { brandsLikeTitle, judgeBrandsLikePage, priceFor } from "@/lib/gate";
import type { BrandsLikePage, SimilarPick } from "@/lib/types";

export const revalidate = 86400;

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.stylodex.com";

const load = cache(async (slug: string) => {
  const page = await getBrandsLikePage(slug);
  return page ? { page, verdict: judgeBrandsLikePage(page) } : null;
});

const PRICE_LABEL = { cheaper: "Cheaper", similar: "Similar price", pricier: "Pricier" } as const;

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const loaded = await load(params.slug);
  if (!loaded) return {};
  const { page, verdict } = loaded;
  const title = brandsLikeTitle(page, verdict.picks.length);
  return {
    title,
    description: `${verdict.picks.length} verified alternatives to ${page.anchor.name}, with ${page.category.name.toLowerCase()} prices, sizes and US shipping for each.`,
    alternates: { canonical: `/brands-like-${page.anchor.slug}` },
    robots: verdict.indexable && !FIXTURE_MODE ? { index: true, follow: true } : { index: false, follow: true },
  };
}

function shopHref(pick: SimilarPick, anchorSlug: string): string {
  return `/go/${pick.brand.slug}?from=${encodeURIComponent(`/brands-like-${anchorSlug}`)}`;
}

function jsonLd(page: BrandsLikePage, picks: SimilarPick[], title: string) {
  const url = `${SITE}/brands-like-${page.anchor.slug}`;
  const graph: object[] = [
    {
      "@type": "ItemList",
      name: title,
      url,
      numberOfItems: picks.length,
      itemListElement: picks.map((pick, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: { "@type": "Brand", name: pick.brand.name, url: pick.brand.websiteUrl ?? undefined },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Stylodex", item: SITE },
        { "@type": "ListItem", position: 2, name: page.anchor.name, item: `${SITE}/brands/${page.anchor.slug}` },
        { "@type": "ListItem", position: 3, name: title, item: url },
      ],
    },
  ];
  if (page.faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: page.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

export default async function BrandsLikeArticle({ params }: { params: { slug: string } }) {
  const loaded = await load(params.slug);
  if (!loaded || loaded.verdict.picks.length === 0) notFound();
  const { page, verdict } = loaded;
  const { picks } = verdict;
  const title = brandsLikeTitle(page, picks.length);
  const category = page.category.slug;
  const anchorPrice = priceRange(priceFor(page.anchor, category));

  return (
    <article className="mx-auto max-w-2xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(page, picks, title)) }} />

      <nav className="text-sm text-muted">
        <Link href="/">Stylodex</Link> / <Link href={`/brands/${page.anchor.slug}`}>{page.anchor.name}</Link>
      </nav>

      <h1 className="mt-4 font-serif text-4xl leading-tight">{title}</h1>
      <p className="mt-3 text-sm text-muted">
        By {page.author} · Last checked {longDate(page.checkedAt)} ·{" "}
        <Link href="/disclosure" className="underline">
          We may earn a commission from links
        </Link>
      </p>

      <p className="mt-6 text-lg leading-relaxed">{page.intro}</p>
      {anchorPrice && (
        <p className="mt-3 text-sm text-muted">
          For reference, {page.anchor.name} {page.category.name.toLowerCase()} runs {anchorPrice}.
        </p>
      )}

      <section aria-labelledby="at-a-glance" className="mt-8 overflow-x-auto">
        <h2 id="at-a-glance" className="sr-only">
          At a glance
        </h2>
        <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-rule">
              <th className="py-2 pr-3 font-medium">Brand</th>
              <th className="py-2 pr-3 font-medium">{page.category.name}</th>
              <th className="py-2 pr-3 font-medium">Sizes</th>
              <th className="py-2 font-medium">Ships to</th>
            </tr>
          </thead>
          <tbody>
            {picks.map((pick) => (
              <tr key={pick.brand.slug} className="border-b border-rule align-top">
                <td className="py-2 pr-3">
                  <a href={`#${pick.brand.slug}`}>{pick.brand.name}</a>
                </td>
                <td className="py-2 pr-3">{priceRange(priceFor(pick.brand, category))}</td>
                <td className="py-2 pr-3">{sizes(pick.brand)}</td>
                <td className="py-2">{shipsTo(pick.brand)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {picks.map((pick, i) => (
        <section key={pick.brand.slug} id={pick.brand.slug} className="mt-12 scroll-mt-6">
          <h2 className="font-serif text-2xl">
            {i + 1}. {pick.brand.name}
          </h2>
          {pick.brand.imageUrl && (
            // eslint-disable-next-line @next/next/no-img-element -- brand images come from many hosts
            <img src={pick.brand.imageUrl} alt={pick.brand.name} loading={i < 2 ? "eager" : "lazy"} className="mt-4 aspect-[4/3] w-full rounded object-cover" />
          )}
          <p className="mt-4 text-sm text-muted">
            {[
              priceRange(priceFor(pick.brand, category)),
              pick.pair.priceRelation && PRICE_LABEL[pick.pair.priceRelation],
              sizes(pick.brand),
              shipsTo(pick.brand) && `Ships to ${shipsTo(pick.brand)}`,
            ]
              .filter(Boolean)
              .join(" · ")}
          </p>
          <p className="mt-4 leading-relaxed">{pick.pair.body}</p>
          <a
            href={shopHref(pick, page.anchor.slug)}
            rel="sponsored nofollow"
            className="mt-5 inline-block rounded bg-accent px-5 py-2.5 text-sm font-medium text-paper"
          >
            Shop {pick.brand.name}
          </a>
        </section>
      ))}

      {page.faqs.length > 0 && (
        <section className="mt-14">
          <h2 className="font-serif text-2xl">FAQ</h2>
          {page.faqs.map((f) => (
            <div key={f.q} className="mt-5">
              <h3 className="font-medium">{f.q}</h3>
              <p className="mt-1 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </section>
      )}

      <aside className="mt-14 border-t border-rule pt-6 text-sm text-muted">
        <h2 className="font-medium text-ink">How we pick</h2>
        <p className="mt-2">
          Every brand here is live, sells {page.category.name.toLowerCase()} today, and has been checked against its own site in the
          last 90 days. Each one is also recommended alongside {page.anchor.name} by sources outside Stylodex. Prices are in US
          dollars from each brand&apos;s own store.
        </p>
      </aside>
    </article>
  );
}
