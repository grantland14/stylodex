-- Stylodex schema. Facts live in columns, not prose, so every page sentence can
-- be traced to a stored, dated fact.
--
-- Lives in its own `stylodex` schema inside the Apart Style Supabase project, so
-- it never collides with or reads Apart Style's `public` tables at runtime.

CREATE SCHEMA stylodex;

CREATE TYPE stylodex.brand_status AS ENUM ('candidate', 'verified', 'off_category', 'defunct');
CREATE TYPE stylodex.pair_status AS ENUM ('candidate', 'verified', 'rejected');
CREATE TYPE stylodex.price_relation AS ENUM ('cheaper', 'similar', 'pricier');
CREATE TYPE stylodex.evidence_kind AS ENUM ('serp_comention', 'reddit', 'co_stocked', 'editorial');

CREATE TABLE stylodex.brands (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  website_url TEXT,
  status stylodex.brand_status NOT NULL DEFAULT 'candidate',
  -- What people go to this brand for; becomes the "for ..." in titles.
  known_for TEXT,
  hq_country TEXT,              -- ISO 3166-1 alpha-2
  founded_year INTEGER,
  parent_company TEXT,
  size_range TEXT,              -- e.g. "XXS–3X" or "W24–W40"
  has_plus BOOLEAN,
  has_petite BOOLEAN,
  has_tall BOOLEAN,
  ships_to TEXT[] NOT NULL DEFAULT '{}',   -- ISO codes; US first
  free_shipping_min_usd NUMERIC(8,2),
  returns_days INTEGER,
  materials TEXT[] NOT NULL DEFAULT '{}',
  certifications TEXT[] NOT NULL DEFAULT '{}',
  production_model TEXT,        -- feeds "is X fast fashion"
  sale_pattern TEXT,            -- feeds "does X have sales"
  image_url TEXT,
  affiliate_network TEXT,       -- 'skimlinks' at launch
  -- Provenance: the Apart Style row this was seeded from (facts only, never text).
  seed_source_id UUID,
  verified_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE stylodex.categories (
  slug TEXT PRIMARY KEY,        -- 'denim', 'dresses', 'basics'
  name TEXT NOT NULL
);

CREATE TABLE stylodex.brand_category_prices (
  brand_id UUID NOT NULL REFERENCES stylodex.brands(id) ON DELETE CASCADE,
  category_slug TEXT NOT NULL REFERENCES stylodex.categories(slug),
  price_min_usd NUMERIC(8,2) NOT NULL,
  price_max_usd NUMERIC(8,2) NOT NULL,
  source_url TEXT NOT NULL,
  checked_at TIMESTAMPTZ NOT NULL,
  PRIMARY KEY (brand_id, category_slug),
  CHECK (price_min_usd <= price_max_usd)
);

CREATE TABLE stylodex.aesthetics (
  slug TEXT PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE stylodex.brand_aesthetics (
  brand_id UUID NOT NULL REFERENCES stylodex.brands(id) ON DELETE CASCADE,
  aesthetic_slug TEXT NOT NULL REFERENCES stylodex.aesthetics(slug),
  PRIMARY KEY (brand_id, aesthetic_slug)
);

-- One row per (anchor, pick). Only 'verified' rows are ever rendered.
CREATE TABLE stylodex.similar_pairs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  brand_id UUID NOT NULL REFERENCES stylodex.brands(id) ON DELETE CASCADE,
  similar_brand_id UUID NOT NULL REFERENCES stylodex.brands(id) ON DELETE CASCADE,
  category_slug TEXT NOT NULL REFERENCES stylodex.categories(slug),
  status stylodex.pair_status NOT NULL DEFAULT 'candidate',
  rank INTEGER,
  price_relation stylodex.price_relation,
  -- One specific, checkable reason, citing a stored fact.
  reason TEXT,
  -- Article body for this pick, drafted only from the two brands' stored facts.
  body TEXT,
  rejection_reason TEXT,
  checked_at TIMESTAMPTZ,
  UNIQUE (brand_id, similar_brand_id),
  CHECK (brand_id <> similar_brand_id)
);

CREATE TABLE stylodex.pair_evidence (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  pair_id UUID NOT NULL REFERENCES stylodex.similar_pairs(id) ON DELETE CASCADE,
  kind stylodex.evidence_kind NOT NULL,
  url TEXT NOT NULL,
  note TEXT,
  captured_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Editorial layer for a "brands like X" page; absent until the page is drafted.
CREATE TABLE stylodex.brands_like_pages (
  brand_id UUID PRIMARY KEY REFERENCES stylodex.brands(id) ON DELETE CASCADE,
  category_slug TEXT NOT NULL REFERENCES stylodex.categories(slug),
  intro TEXT NOT NULL,
  faqs JSONB NOT NULL DEFAULT '[]',   -- [{ "q": "...", "a": "..." }] from real queries only
  author TEXT NOT NULL,
  human_edited BOOLEAN NOT NULL DEFAULT false,
  checked_at TIMESTAMPTZ NOT NULL
);

CREATE TABLE stylodex.clicks (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  brand_id UUID REFERENCES stylodex.brands(id) ON DELETE SET NULL,
  page_path TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_brands_status ON stylodex.brands(status);
CREATE INDEX idx_similar_pairs_brand ON stylodex.similar_pairs(brand_id, status, rank);
CREATE INDEX idx_pair_evidence_pair ON stylodex.pair_evidence(pair_id);
CREATE INDEX idx_clicks_created ON stylodex.clicks(created_at);

-- API access: anon reads published rows (RLS below); service_role writes.
-- Exposed through the Data API by 00002_expose_stylodex_schema.sql.
GRANT USAGE ON SCHEMA stylodex TO anon, authenticated, service_role;
GRANT SELECT ON ALL TABLES IN SCHEMA stylodex TO anon, authenticated;
GRANT ALL ON ALL TABLES IN SCHEMA stylodex TO service_role;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA stylodex TO service_role;

-- Public read for published data only; clicks are written server-side with the service key.
ALTER TABLE stylodex.brands ENABLE ROW LEVEL SECURITY;
ALTER TABLE stylodex.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE stylodex.brand_category_prices ENABLE ROW LEVEL SECURITY;
ALTER TABLE stylodex.aesthetics ENABLE ROW LEVEL SECURITY;
ALTER TABLE stylodex.brand_aesthetics ENABLE ROW LEVEL SECURITY;
ALTER TABLE stylodex.similar_pairs ENABLE ROW LEVEL SECURITY;
ALTER TABLE stylodex.pair_evidence ENABLE ROW LEVEL SECURITY;
ALTER TABLE stylodex.brands_like_pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE stylodex.clicks ENABLE ROW LEVEL SECURITY;

CREATE POLICY read_brands ON stylodex.brands FOR SELECT USING (status = 'verified');
CREATE POLICY read_categories ON stylodex.categories FOR SELECT USING (true);
CREATE POLICY read_prices ON stylodex.brand_category_prices FOR SELECT USING (true);
CREATE POLICY read_aesthetics ON stylodex.aesthetics FOR SELECT USING (true);
CREATE POLICY read_brand_aesthetics ON stylodex.brand_aesthetics FOR SELECT USING (true);
CREATE POLICY read_pairs ON stylodex.similar_pairs FOR SELECT USING (status = 'verified');
CREATE POLICY read_evidence ON stylodex.pair_evidence FOR SELECT USING (true);
CREATE POLICY read_pages ON stylodex.brands_like_pages FOR SELECT USING (true);
