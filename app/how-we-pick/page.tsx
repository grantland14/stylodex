import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How we pick",
  description: "How Stylodex chooses and checks every brand on its lists.",
  alternates: { canonical: "/how-we-pick" },
};

export default function HowWePick() {
  return (
    <article className="mx-auto max-w-2xl px-4 py-14 leading-relaxed">
      <p className="eyebrow">Method</p>
      <h1 className="mt-3 text-4xl font-normal tracking-tight">How we pick</h1>
      <p className="mt-6 text-lg">
        A brand appears on a Stylodex list only when it passes every one of these checks. If it stops passing, it comes off
        the list and the count in the title changes with it.
      </p>
      <ol className="mt-8 list-decimal space-y-4 pl-5">
        <li>It is live and selling today, checked against its own store.</li>
        <li>It sells the category the list is about: denim for a list about Levi&apos;s, not stationery.</li>
        <li>
          Its prices come from its own store, in US dollars. If it&apos;s cheaper or pricier than the original, we say so.
        </li>
        <li>Sources outside Stylodex recommend it alongside the original brand, and we keep a record of where.</li>
        <li>There is a specific, checkable reason it belongs on the list.</li>
        <li>All of this has been re-checked in the last 90 days.</li>
      </ol>
      <p className="mt-8">
        We earn a commission from some links. That never decides what&apos;s listed or in what order; see our{" "}
        <Link href="/disclosure" className="underline">
          affiliate disclosure
        </Link>
        .
      </p>
    </article>
  );
}
