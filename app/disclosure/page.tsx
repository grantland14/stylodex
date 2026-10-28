import type { Metadata } from "next";

export const metadata: Metadata = { title: "Affiliate disclosure", alternates: { canonical: "/disclosure" } };

export default function Disclosure() {
  return (
    <article className="mx-auto max-w-2xl px-4 py-10 leading-relaxed">
      <h1 className="font-serif text-3xl">Affiliate disclosure</h1>
      <p className="mt-6">
        Stylodex earns money through affiliate links. When you click a &ldquo;Shop&rdquo; button and buy something, the store may
        pay us a commission, through Skimlinks or directly. It costs you nothing extra.
      </p>
      <p className="mt-4">
        Commission never decides which brands we list or in what order. A brand is listed only if it passes our checks: it is
        live, sells the category the page covers, and is recommended alongside the original brand by sources outside Stylodex.
        Brands without an affiliate programme are listed on the same terms.
      </p>
    </article>
  );
}
