import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="font-serif text-3xl">Page not found</h1>
      <p className="mt-4">
        <Link href="/" className="underline">
          Back to Stylodex
        </Link>
      </p>
    </section>
  );
}
