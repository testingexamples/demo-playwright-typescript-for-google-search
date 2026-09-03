# AGENTS.md

This repo is a small TypeScript reference that shows the syntax and
interaction patterns of Playwright's TypeScript API against Google Search,
matching the framing already established at
https://testingexamples.github.io/examples/google-search/.

## Non-negotiable

**This code must never be executed against live google.com, in CI or any
automated tooling.** Google's Terms of Service restrict automated querying
of Google Search. `src/demo.ts` is written from Playwright's TypeScript
API for reference purposes only — it demonstrates syntax and interaction
patterns side by side with its sibling repos, and is not meant to be run
repeatedly, or at all, against the live site.

Do not:

* Add this repo to any CI pipeline that runs `npm install`, `npx
  ts-node src/demo.ts`, `npx tsc && node src/demo.js`, or any equivalent
  execution step.
* Add a pre-commit hook, test runner, or scheduled job that executes
  `src/demo.ts`.
* "Fix" the `test` script in `package.json` to actually run the demo — it
  intentionally exits non-zero with a warning instead.

This is a deliberate contrast with the sibling repo
demo-playwright-typescript-for-nhs-wales, which IS meant to run: NHS Wales
has no terms-of-service restriction on automated testing, so that repo is
a real, runnable, assertion-based test. This repo, and its sibling
demo-playwright-typescript-for-google-maps, are reference-only because of
Google's Terms of Service.

If you want a target that's actually safe to run repeatedly while
practicing these patterns, point Playwright at
https://testingexamples.github.io instead — see the caution in
`README.md`.

## Source of truth

`spec/index.md` is the single source of truth for the exact three checks
and selectors described here. The code in `src/demo.ts` must match it
exactly. If the code and `spec/index.md` ever disagree, that is a defect
in one of them — fix it before doing anything else (without running the
file to "verify" the fix against google.com).

## Install and run

See `README.md`. The Install and Run sections are documented for
completeness of this repo's house style, not as an instruction to
actually run the demo.

CLAUDE.md is a pointer to this file — it is the single source of truth for
agent instructions.
