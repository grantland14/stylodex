# Lessons

Patterns to avoid repeating. Add one after every correction.

---

## Carried over from Apart Style (2026-07)

- **A failed stored URL indicts the record, not the brand.** An NXDOMAIN or bot-wall on a stored
  domain is at least as likely to be a wrong record as a dead brand. Search for the brand's real
  site before marking it `defunct`; only conclude defunct when it has no findable official presence.
- **No data is not evidence.** A brand missing from the seed table, or a site refusing scripted
  clients, is `unverified`, never a verdict. Never let "we have no data" drive a removal.
- **Use WebFetch for liveness and fact checks**; it reaches sites a raw Node `fetch` cannot. Never
  work around a site's bot protection.
