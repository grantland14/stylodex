import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cache } from "react";
import { ArrowUpRight } from "@/components/ArrowUpRight";
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
    <article className="mx-auto max-w-3xl px-4 py-10 md:py-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(page, picks, title)) }} />

      <nav className="eyebrow">
        <Link href="/" className="no-underline hover:underline">
          Stylodex
        </Link>{" "}
        /{" "}
        <Link href={`/brands/${page.anchor.slug}`} className="no-underline hover:underline">
          {page.anchor.name}
        </Link>{" "}
        / {page.category.name}
      </nav>

      <h1 className="mt-4 text-4xl font-normal leading-[1.1] tracking-tight md:text-5xl">{title}</h1>
      <p className="mt-5 text-sm text-muted">
        By {page.author} · Last checked {longDate(page.checkedAt)} ·{" "}
        <Link href="/disclosure" className="underline">
          We may earn a commission
        </Link>
      </p>

      <p className="mt-8 text-lg leading-relaxed">{page.intro}</p>
      {anchorPrice && (
        <p className="mt-3 text-sm text-muted">
          For reference, {page.anchor.name} {page.category.name.toLowerCase()} runs {anchorPrice}.
        </p>
      )}

      <section aria-labelledby="at-a-glance" className="mt-10">
        <h2 id="at-a-glance" className="eyebrow">
          At a glance
        </h2>
        <div className="mt-3 overflow-x-auto border-t border-ink">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-rule text-muted">
                <th className="py-3 pr-4 font-normal">Brand</th>
                <th className="py-3 pr-4 font-normal">{page.category.name}</th>
                <th className="py-3 pr-4 font-normal">Sizes</th>
                <th className="py-3 font-normal">Ships to</th>
              </tr>
            </thead>
            <tbody>
              {picks.map((pick) => (
                <tr key={pick.brand.slug} className="border-b border-rule align-top">
                  <td className="py-3 pr-4 font-medium text-ink">
                    <a href={`#${pick.brand.slug}`} className="no-underline hover:underline">
                      {pick.brand.name}
                    </a>
                  </td>
                  <td className="py-3 pr-4">{priceRange(priceFor(pick.brand, category))}</td>
                  <td className="py-3 pr-4">{sizes(pick.brand)}</td>
                  <td className="py-3">{shipsTo(pick.brand)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <ol className="mt-14">
        {picks.map((pick, i) => (
          <li key={pick.brand.slug} id={pick.brand.slug} className="scroll-mt-6 border-t border-rule py-10 md:grid md:grid-cols-[13rem_1fr] md:gap-8">
            {pick.brand.imageUrl && (
              // eslint-disable-next-line @next/next/no-img-element -- served from /img/, proxied storage
              <img
                src={pick.brand.imageUrl}
                alt={pick.brand.name}
                loading={i < 2 ? "eager" : "lazy"}
                className="aspect-square w-full bg-soft object-cover md:w-52"
              />
            )}
            <div className="mt-5 md:mt-0">
              <p className="eyebrow">No. {i + 1}</p>
              <h2 className="mt-1 text-2xl font-medium tracking-tight">{pick.brand.name}</h2>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${pick.brand.name} at a glance`}>
                {[
                  priceRange(priceFor(pick.brand, category)),
                  pick.pair.priceRelation && PRICE_LABEL[pick.pair.priceRelation],
                  sizes(pick.brand),
                  shipsTo(pick.brand) && `Ships to ${shipsTo(pick.brand)}`,
                ]
                  .filter(Boolean)
                  .map((fact) => (
                    <li key={fact as string} className="chip">
                      {fact}
                    </li>
                  ))}
              </ul>
              <p className="mt-5 leading-relaxed">{pick.pair.body}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={shopHref(pick, page.anchor.slug)} rel="sponsored nofollow" className="btn-solid">
                  Shop {pick.brand.name} <ArrowUpRight />
                </a>
                <Link href={`/brands/${pick.brand.slug}`} className="btn-line">
                  About {pick.brand.name}
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ol>

      {page.faqs.length > 0 && (
        <section className="border-t border-rule pt-12">
          <h2 className="font-serif text-3xl">Questions</h2>
          {page.faqs.map((f) => (
            <div key={f.q} className="mt-6">
              <h3 className="font-medium">{f.q}</h3>
              <p className="mt-2 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </section>
      )}

      <aside className="mt-14 bg-soft p-6 text-sm leading-relaxed">
        <h2 className="eyebrow">How we pick</h2>
        <p className="mt-3">
          Every brand here is live, sells {page.category.name.toLowerCase()} today, and has been checked against its own store in
          the last 90 days. Each one is also recommended alongside {page.anchor.name} by sources outside Stylodex. Prices are in
          US dollars from each brand&apos;s own store.{" "}
          <Link href="/how-we-pick" className="underline">
            More on our method
          </Link>
          .
        </p>
      </aside>
    </article>
  );
}
