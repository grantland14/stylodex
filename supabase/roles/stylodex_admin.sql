-- One-off, run by Ash in the Supabase SQL editor (as postgres). Creates a login that owns the
-- stylodex schema, so migrations can run with psql and no approval prompts, and that has no
-- access to Apart Style's tables in `public`.
--
-- 1. Replace the password with a long random one from a password manager. Never paste it into
--    a chat; it goes only into the environment secret STYLODEX_DATABASE_URL.
CREATE ROLE stylodex_admin WITH LOGIN PASSWORD 'REPLACE_WITH_A_LONG_RANDOM_PASSWORD';

-- 2. postgres must be able to act as the new role to hand objects over (PostgreSQL 16+ rule).
GRANT stylodex_admin TO postgres;

-- 3. Hand over the schema and everything in it. Owning a schema needs CREATE on the database,
--    granted only for the handover and taken back straight after (ownership stays).
GRANT CREATE ON DATABASE postgres TO stylodex_admin;
ALTER SCHEMA stylodex OWNER TO stylodex_admin;
REVOKE CREATE ON DATABASE postgres FROM stylodex_admin;
DO $$
DECLARE r record;
BEGIN
  FOR r IN SELECT tablename FROM pg_tables WHERE schemaname = 'stylodex' LOOP
    EXECUTE format('ALTER TABLE stylodex.%I OWNER TO stylodex_admin', r.tablename);
  END LOOP;
  FOR r IN SELECT t.typname FROM pg_type t JOIN pg_namespace n ON n.oid = t.typnamespace
           WHERE n.nspname = 'stylodex' AND t.typtype = 'e' LOOP
    EXECUTE format('ALTER TYPE stylodex.%I OWNER TO stylodex_admin', r.typname);
  END LOOP;
END $$;

-- 4. Belt and braces: no access to Apart Style's tables, now or later.
REVOKE ALL ON ALL TABLES IN SCHEMA public FROM stylodex_admin;
ALTER DEFAULT PRIVILEGES IN SCHEMA public REVOKE ALL ON TABLES FROM stylodex_admin;

-- 5. Check: both should be false.
SELECT has_table_privilege('stylodex_admin', 'public.brands', 'SELECT') AS can_read_apart_brands,
       has_table_privilege('stylodex_admin', 'public.brand_relationships', 'SELECT') AS can_read_apart_relationships;
