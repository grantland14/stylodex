-- Similist's page inventory (research/similist-top-pages-2026-10-28.tsv) adds
-- "stores like X" and "sites like X" subjects, some of them closed stores.
-- Scope decided 2026-10-28: fashion, department stores and beauty only.
-- Applied 2026-10-29 by Ash in the Supabase SQL editor (the connector's approval prompt never
-- reached him); verified afterwards with read-only queries.

CREATE TYPE stylodex.entity_kind AS ENUM ('brand', 'retailer', 'marketplace');
ALTER TABLE stylodex.brands ADD COLUMN kind stylodex.entity_kind NOT NULL DEFAULT 'brand';

-- Categories are the scope boundary: nothing outside these verticals can get a price or a page.
ALTER TABLE stylodex.categories ADD COLUMN vertical TEXT NOT NULL CHECK (vertical IN ('fashion', 'beauty'));

-- One URL per subject; the phrasing with more search volume wins.
ALTER TABLE stylodex.brands_like_pages
  ADD COLUMN url_prefix TEXT NOT NULL DEFAULT 'brands' CHECK (url_prefix IN ('brands', 'stores', 'sites'));

-- Closed stores must be readable so they can anchor a page. They still can't be
-- picks (lib/gate.ts) and get no profile page or /go/ link.
DROP POLICY read_brands ON stylodex.brands;
CREATE POLICY read_brands ON stylodex.brands FOR SELECT USING (status IN ('verified', 'defunct'));

-- From the Jaded London pilot (2026-10-28):
-- 1. A live brand whose site refuses automated reads is neither verified nor defunct.
ALTER TYPE stylodex.brand_status ADD VALUE IF NOT EXISTS 'unverified';

-- 2. Many stores only show their home currency. Keep the store's own price for display, plus a
--    USD equivalent at a dated exchange rate, which is what cheaper/similar/pricier compares.
ALTER TABLE stylodex.brand_category_prices
  ADD COLUMN currency CHAR(3) NOT NULL DEFAULT 'USD',
  ADD COLUMN price_min NUMERIC(10,2),
  ADD COLUMN price_max NUMERIC(10,2),
  ADD COLUMN fx_date DATE;
UPDATE stylodex.brand_category_prices SET price_min = price_min_usd, price_max = price_max_usd;
ALTER TABLE stylodex.brand_category_prices
  ALTER COLUMN price_min SET NOT NULL,
  ALTER COLUMN price_max SET NOT NULL,
  ADD CONSTRAINT usd_needs_no_fx CHECK (currency = 'USD' OR fx_date IS NOT NULL);
COMMENT ON COLUMN stylodex.brand_category_prices.price_min_usd IS 'USD equivalent at fx_date; what the gate compares';

NOTIFY pgrst, 'reload schema';
