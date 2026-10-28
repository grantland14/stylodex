-- Expose the stylodex schema through the Data API (PostgREST).
-- Applied 2026-10-28 via SQL. Before: "public, graphql_public" (read from the
-- PGRST106 error). Apart Style's REST, RPC and GraphQL calls re-checked after: 200.
--
-- WARNING: a role-level pgrst.db_schemas overrides the dashboard's
-- "Exposed schemas" setting. Changing it in the dashboard will now appear to do
-- nothing; change it here instead, keeping public and graphql_public in the list,
-- or Apart Style's API stops working.
ALTER ROLE authenticator SET pgrst.db_schemas = 'public, graphql_public, stylodex';
NOTIFY pgrst, 'reload config';
NOTIFY pgrst, 'reload schema';
