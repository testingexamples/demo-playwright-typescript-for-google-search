# Spec

## Summary

This repo describes, in typed Playwright TypeScript, three interaction
patterns and assertion checks against Google Search
(`https://www.google.com`). It mirrors the interaction patterns documented
at
[testingexamples.github.io/examples/google-search/](https://testingexamples.github.io/examples/google-search/).

## Scope

This spec covers `src/demo.ts` only: the three checks it describes, the
exact selectors, and the criteria that would make each check pass, if it
were ever run. It does not cover installation — see `README.md` — and it
does not authorize running the code; see `AGENTS.md`.

## Principles and rules

* **This code must never be executed against live google.com, in CI or
  any automated tooling.** Google's Terms of Service restrict automated
  querying of Google Search. This repo is a reference for syntax and
  interaction patterns only.
* `src/demo.ts` is the reference implementation. This file, `spec/index.md`,
  is the specification. They must agree exactly. If they ever disagree,
  that is a defect in one of them — fix it without running the code
  against google.com.

## Detail

1. **Page title check**
   * Navigate to: `https://www.google.com`
   * Assert the page title equals exactly: `Google`

2. **Search check**
   * Fill the element matching selector `textarea[name="q"]` with a query
     (e.g. `testing examples`)
   * Press `Enter`
   * Assert the resulting page's title contains the query (case-insensitive)
   * Note: Google's search box markup has drifted from `<input>` to
     `<textarea>` over time, both carrying `name="q"`; the selector
     targets the current `<textarea>` shape.

3. **First result check**
   * Click the element matching selector `#search a` (first match)
   * Assert the resulting page's hostname does not equal `www.google.com`

## Acceptance criteria

These three checks describe what would need to be true for the demo to
pass, if it were ever run against the live site. This repo does not run
them — see `AGENTS.md` for the non-negotiable policy.

## Related topics

* [../README.md](../README.md)
* [../AGENTS.md](../AGENTS.md)

## Sources

* <https://testingexamples.github.io/examples/google-search/>
* <https://www.google.com>
