---
name: demo-playwright-typescript-for-google-search-skill
description: Explains the Playwright + TypeScript reference for Google Search interaction patterns (page title, search box, first result); invoke when asked to explain, extend, or adapt this reference, or to port it to a different tool or site. This code must never be executed against live google.com.
---

# Demo Playwright TypeScript for Google Search — skill

## What this repo teaches

This repo is a typed Playwright TypeScript reference for three interaction
patterns against Google Search, mirroring
[testingexamples.github.io/examples/google-search/](https://testingexamples.github.io/examples/google-search/):

1. Verifying the page title of `https://www.google.com` equals `Google`.
2. Filling `textarea[name="q"]` with a query, pressing Enter, and
   verifying the results page title contains the query.
3. Clicking the first `#search a` result and verifying the hostname
   changed away from `www.google.com`.

## Non-negotiable: never run this against live google.com

**Do not execute `src/demo.ts` against google.com, in CI or any automated
tooling.** Google's Terms of Service restrict automated querying of Google
Search. This code exists to demonstrate syntax and interaction patterns
only — see `../AGENTS.md` for the full policy. This is unlike the sibling
repo demo-playwright-typescript-for-nhs-wales, which is meant to run for
real, because NHS Wales has no such restriction.

If you want a live target to actually practice these patterns against,
point Playwright at `https://testingexamples.github.io` instead.

## Adapting the pattern to a safe-to-run site

1. Pick a real target site you're allowed to test against repeatedly (for
   example, `https://testingexamples.github.io`).
2. Keep the same three-check shape: a page-level assertion (title), a
   search-and-verify interaction, and a click-through-and-verify
   interaction.
3. Update every selector and expected string, then update `spec/index.md`
   to match — the spec and the code must always agree.
4. Only then is it appropriate to actually run the demo.

This skill summarizes the repo. `AGENTS.md` and `spec/index.md` are the
source of truth — if this skill's summary ever disagrees with those, they
win.
