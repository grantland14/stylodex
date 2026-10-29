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

---

## 2026-10-29 — Copy is for the reader, not a record of our method

**What happened:** The Jaded London intro read: "Jaded London, which Wikipedia describes as… We
checked every brand's own store… On October 29, 2026, Stylodex found regular-price jeans…
Jaded's own store blocked our checks, so we don't say…". Ash: too long, and it feels like AI.
Ash also cut the visible "Also recommended alongside X by: site (list)…" line under each pick.

**Why I got it wrong:** I treated "every claim traceable" and "be transparent" as instructions to
put the tracing *in the copy*. Traceability belongs in the data and the review file; the page
already has a method box and a "Last checked" date.

**Rule for next time:** Copy states facts plainly, the way a knowledgeable friend would. No
process narration (we checked, Stylodex found, dates, "X describes it as", what we couldn't
verify), no source lists shown to readers. Intros are 40–70 words: what the anchor is known for,
what the list offers. Evidence lives in the page file and the gate, not on the page.

---

## 2026-10-29 — Match the house voice from its finished work, not a summary of its rules

**What happened:** After the first voice pass Ash said the copy was "better but could be more like
Apart Style". `voice.md` had restated Apart Style's rules (contractions, rhythm, no verdicts) but
not the moves its finished listicles actually make.

**Why I got it wrong:** I copied the rule list and skipped reading a finished article. The rules
say what not to do; the voice is in what each section does: an opinionated answer-first line,
why each fact matters to the reader, one useful thing taught per brand, an honest trade-off,
comparisons between picks, and use-case "Best for" lines.

**Rule for next time:** When asked to match a voice, read two or three finished pieces in it, not
only its guide, and write down the moves as well as the bans. Keep the moves, never the text.
