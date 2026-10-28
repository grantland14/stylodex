import type { Metadata } from "next";
import Link from "next/link";
import { FIXTURE_MODE } from "@/lib/data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.stylodex.com"),
  title: { default: "Stylodex", template: "%s | Stylodex" },
  description: "Verified fashion brand alternatives, with real prices, sizes and shipping for each.",
  // Fixture data must never be indexed.
  ...(FIXTURE_MODE && { robots: { index: false, follow: false } }),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <body className="min-h-screen">
        <header className="border-b border-rule">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
            <Link href="/" className="font-serif text-xl no-underline">
              Stylodex
            </Link>
          </div>
        </header>
        <main>{children}</main>
        <footer className="mt-16 border-t border-rule">
          <div className="mx-auto flex max-w-5xl gap-6 px-4 py-6 text-sm text-muted">
            <span>© {new Date().getFullYear()} Stylodex</span>
            <Link href="/disclosure">Affiliate disclosure</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
