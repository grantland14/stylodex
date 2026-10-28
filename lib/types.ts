export type BrandStatus = "candidate" | "verified" | "off_category" | "defunct" | "unverified";
export type PairStatus = "candidate" | "verified" | "rejected";
export type PriceRelation = "cheaper" | "similar" | "pricier";
export type EvidenceKind = "serp_comention" | "reddit" | "co_stocked" | "editorial";
export type EntityKind = "brand" | "retailer" | "marketplace";
/** Which phrasing a subject's page uses: /brands-like-x, /stores-like-x or /sites-like-x. One per subject. */
export type UrlPrefix = "brands" | "stores" | "sites";

export interface CategoryPrice {
  category: string;
  /** The store's own prices, shown to readers. */
  currency: string;
  min: number;
  max: number;
  /** USD equivalents at a dated rate; what cheaper/similar/pricier compares. Equal to min/max for USD. */
  minUsd: number;
  maxUsd: number;
  sourceUrl: string;
  checkedAt: string;
}

export interface Brand {
  id: string;
  slug: string;
  name: string;
  kind: EntityKind;
  websiteUrl: string | null;
  status: BrandStatus;
  knownFor: string | null;
  hqCountry: string | null;
  foundedYear: number | null;
  sizeRange: string | null;
  hasPlus: boolean | null;
  hasPetite: boolean | null;
  hasTall: boolean | null;
  shipsTo: string[];
  freeShippingMinUsd: number | null;
  returnsDays: number | null;
  materials: string[];
  certifications: string[];
  productionModel: string | null;
  salePattern: string | null;
  imageUrl: string | null;
  verifiedAt: string | null;
  prices: CategoryPrice[];
}

export interface Evidence {
  kind: EvidenceKind;
  url: string;
  note: string | null;
}

export interface SimilarPair {
  status: PairStatus;
  rank: number | null;
  priceRelation: PriceRelation | null;
  reason: string | null;
  body: string | null;
  checkedAt: string | null;
  evidence: Evidence[];
}

export interface SimilarPick {
  brand: Brand;
  pair: SimilarPair;
}

export interface Faq {
  q: string;
  a: string;
}

export interface BrandsLikePage {
  urlPrefix: UrlPrefix;
  /** May be a closed store ("stores like Wet Seal"); every pick must still be live. */
  anchor: Brand;
  category: { slug: string; name: string };
  intro: string;
  faqs: Faq[];
  author: string;
  humanEdited: boolean;
  checkedAt: string;
  picks: SimilarPick[];
}
