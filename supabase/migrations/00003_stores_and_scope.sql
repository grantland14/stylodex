-- Similist's page inventory (research/similist-top-pages-2026-10-28.tsv) adds
-- "stores like X" and "sites like X" subjects, some of them closed stores.
-- Scope decided 2026-10-28: fashion, department stores and beauty only.

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

NOTIFY pgrst, 'reload schema';
