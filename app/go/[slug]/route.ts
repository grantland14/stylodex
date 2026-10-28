import { NextResponse, type NextRequest } from "next/server";
import { affiliateUrl, resolveDestination } from "@/lib/affiliate";
import { getBrand, logClick } from "@/lib/data";

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  const brand = await getBrand(params.slug);
  if (!brand?.websiteUrl || brand.status !== "verified") {
    return NextResponse.redirect(new URL("/", request.url), 302);
  }

  const from = request.nextUrl.searchParams.get("from");
  const destination = resolveDestination(brand.websiteUrl, request.nextUrl.searchParams.get("to"));
  await logClick(brand.id, from);

  const response = NextResponse.redirect(affiliateUrl(destination, process.env.SKIMLINKS_SITE_ID, from ?? undefined), 302);
  response.headers.set("X-Robots-Tag", "noindex, nofollow");
  return response;
}
