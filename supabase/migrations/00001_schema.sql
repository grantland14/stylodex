-- Stylodex schema. Facts live in columns, not prose, so every page sentence can
-- be traced to a stored, dated fact.
--
-- Lives in its own `stylodex` schema inside the Apart Style Supabase project, so
-- it never collides with or reads Apart Style's `public` tables at runtime.

CREATE SCHEMA stylodex;
SET search_path TO stylodex, public;

CREATE TYPE brand_status AS ENUM ('candidate', 'verified', 'off_category', 'defunct');
CREATE TYPE pair_status AS ENUM ('candidate', 'verified', 'rejected');
CREATE TYPE price_relation AS ENUM ('cheaper', 'similar', 'pricier');
CREATE TYPE evidence_kind AS ENUM ('serp_comention', 'reddit', 'co_stocked', 'editorial');

CREATE TABLE brands (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  website_url TEXT,
  status brand_status NOT NULL DEFAULT 'candidate',
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

CREATE TABLE categories (
  slug TEXT PRIMARY KEY,        -- 'denim', 'dresses', 'basics'
  name TEXT NOT NULL
);

CREATE TABLE brand_category_prices (
  brand_id UUID NOT NULL REFERENCES brands(id) ON DELETE CASCADE,
  category_slug TEXT NOT NULL REFERENCES categories(slug),
  price_min_usd NUMERIC(8,2) NOT NULL,
  price_max_usd NUMERIC(8,2) NOT NULL,
  source_url TEXT NOT NULL,
  checked_at TIMESTAMPTZ NOT NULL,
  PRIMARY KEY (brand_id, category_slug),
  CHECK (price_min_usd <= price_max_usd)
);

CREATE TABLE aesthetics (
  slug TEXT PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE brand_aesthetics (
  brand_id UUID NOT NULL REFERENCES brands(id) ON DELETE CASCADE,
  aesthetic_slug TEXT NOT NULL REFERENCES aesthetics(slug),
  PRIMARY KEY (brand_id, aesthetic_slug)
);

-- One row per (anchor, pick). Only 'verified' rows are ever rendered.
CREATE TABLE similar_pairs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  brand_id UUID NOT NULL REFERENCES brands(id) ON DELETE CASCADE,
  similar_brand_id UUID NOT NULL REFERENCES brands(id) ON DELETE CASCADE,
  category_slug TEXT NOT NULL REFERENCES categories(slug),
  status pair_status NOT NULL DEFAULT 'candidate',
  rank INTEGER,
  price_relation price_relation,
  -- One specific, checkable reason, citing a stored fact.
  reason TEXT,
  -- Article body for this pick, drafted only from the two brands' stored facts.
  body TEXT,
  rejection_reason TEXT,
  checked_at TIMESTAMPTZ,
  UNIQUE (brand_id, similar_brand_id),
  CHECK (brand_id <> similar_brand_id)
);

CREATE TABLE pair_evidence (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  pair_id UUID NOT NULL REFERENCES similar_pairs(id) ON DELETE CASCADE,
  kind evidence_kind NOT NULL,
  url TEXT NOT NULL,
  note TEXT,
  captured_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Editorial layer for a "brands like X" page; absent until the page is drafted.
CREATE TABLE brands_like_pages (
  brand_id UUID PRIMARY KEY REFERENCES brands(id) ON DELETE CASCADE,
  category_slug TEXT NOT NULL REFERENCES categories(slug),
  intro TEXT NOT NULL,
  faqs JSONB NOT NULL DEFAULT '[]',   -- [{ "q": "...", "a": "..." }] from real queries only
  author TEXT NOT NULL,
  human_edited BOOLEAN NOT NULL DEFAULT false,
  checked_at TIMESTAMPTZ NOT NULL
);

CREATE TABLE clicks (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  brand_id UUID REFERENCES brands(id) ON DELETE SET NULL,
  page_path TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_brands_status ON brands(status);
CREATE INDEX idx_similar_pairs_brand ON similar_pairs(brand_id, status, rank);
CREATE INDEX idx_pair_evidence_pair ON pair_evidence(pair_id);
CREATE INDEX idx_clicks_created ON clicks(created_at);

-- API access: anon reads published rows (RLS below); service_role writes.
-- The schema must also be added to "Exposed schemas" in the project's Data API settings.
GRANT USAGE ON SCHEMA stylodex TO anon, authenticated, service_role;
GRANT SELECT ON ALL TABLES IN SCHEMA stylodex TO anon, authenticated;
GRANT ALL ON ALL TABLES IN SCHEMA stylodex TO service_role;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA stylodex TO service_role;

-- Public read for published data only; clicks are written server-side with the service key.
ALTER TABLE brands ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE brand_category_prices ENABLE ROW LEVEL SECURITY;
ALTER TABLE aesthetics ENABLE ROW LEVEL SECURITY;
ALTER TABLE brand_aesthetics ENABLE ROW LEVEL SECURITY;
ALTER TABLE similar_pairs ENABLE ROW LEVEL SECURITY;
ALTER TABLE pair_evidence ENABLE ROW LEVEL SECURITY;
ALTER TABLE brands_like_pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE clicks ENABLE ROW LEVEL SECURITY;

CREATE POLICY read_brands ON brands FOR SELECT USING (status = 'verified');
CREATE POLICY read_categories ON categories FOR SELECT USING (true);
CREATE POLICY read_prices ON brand_category_prices FOR SELECT USING (true);
CREATE POLICY read_aesthetics ON aesthetics FOR SELECT USING (true);
CREATE POLICY read_brand_aesthetics ON brand_aesthetics FOR SELECT USING (true);
CREATE POLICY read_pairs ON similar_pairs FOR SELECT USING (status = 'verified');
CREATE POLICY read_evidence ON pair_evidence FOR SELECT USING (true);
CREATE POLICY read_pages ON brands_like_pages FOR SELECT USING (true);
