import type { Metadata } from "next";
import { Newsreader, Schibsted_Grotesk } from "next/font/google";
import Link from "next/link";
import { FIXTURE_MODE } from "@/lib/data";
import "./globals.css";

const sans = Schibsted_Grotesk({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Newsreader({ subsets: ["latin"], variable: "--font-serif", display: "swap", adjustFontFallback: false });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.stylodex.com"),
  title: { default: "Stylodex", template: "%s | Stylodex" },
  description: "Verified fashion brand alternatives, with real prices, sizes and shipping for each.",
  // Fixture data must never be indexed.
  ...(FIXTURE_MODE && { robots: { index: false, follow: false } }),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US" className={`${sans.variable} ${serif.variable}`}>
      <body className="min-h-screen">
        <header className="border-b border-rule">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
            <Link href="/" className="text-sm font-medium tracking-[0.3em] text-ink no-underline">
              •STYLODEX
            </Link>
            <Link href="/how-we-pick" className="text-sm text-ink no-underline hover:underline">
              How we pick
            </Link>
          </div>
        </header>
        <main>{children}</main>
        <footer className="mt-24 border-t border-rule">
          <div className="mx-auto flex max-w-6xl flex-wrap gap-x-8 gap-y-3 px-4 py-8 text-sm text-muted">
            <span>© {new Date().getFullYear()} Stylodex</span>
            <Link href="/how-we-pick">How we pick</Link>
            <Link href="/disclosure">Affiliate disclosure</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
