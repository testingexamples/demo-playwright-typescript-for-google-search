# Demo Playwright TypeScript for Google Search

> **Caution:** Google's Terms of Service restrict automated querying of
> Google Search. This repo exists to show the syntax and interaction
> patterns of Playwright's TypeScript API side by side with its sibling
> repos — it is not meant to be run repeatedly, or at all, against the
> live google.com. See [AGENTS.md](AGENTS.md) for the non-negotiable
> policy. If you want a target that's actually safe to run repeatedly,
> point Playwright at
> [testingexamples.github.io](https://testingexamples.github.io) instead,
> which was built exactly for that: stable ids, names, classes, and text
> that don't shift under you.

Demonstration of:

* [Playwright](https://www.playwright.dev/) browser automation testing
* [TypeScript](https://en.wikipedia.org/wiki/TypeScript) programming language
* [Node](https://nodejs.org/) runtime built on Chrome's V8 JavaScript engine
* [Chromium](https://www.chromium.org/) open source web browser
* Interaction patterns for [Google Search](https://www.google.com)

This mirrors the framing already established at
[testingexamples.github.io/examples/google-search/](https://testingexamples.github.io/examples/google-search/),
which documents identical interaction patterns across Selenium,
WebdriverIO, and Playwright, in JavaScript, Python, and Rust.

The exact scenario this demo describes is specified in
[spec/index.md](spec/index.md); the code and the spec must agree.

## What this demo checks

`src/demo.ts` contains three real, typed assertion checks, written from
Playwright's TypeScript API — but never executed against google.com:

1. The page title of `https://www.google.com` equals exactly `Google`.
2. Filling `textarea[name="q"]` with a query and pressing Enter navigates
   to a results page whose title contains that query. (Note: Google's
   search box markup has drifted from `<input>` to `<textarea>` over the
   years, both carrying `name="q"`; this file targets the current
   `<textarea>` shape and says so in a comment.)
3. Clicking the first `#search a` result changes the page's hostname away
   from `www.google.com`.

## Install

**Do not run `npm install` for this repo as an automated or scripted
step** — see the caution above and [AGENTS.md](AGENTS.md). If a human has
read the caution and still wants to install dependencies to read type
information in an editor:

### Install Node and NPM

Install Node and NPM from <https://nodejs.org/>

Run this to confirm your version:

```sh
node -v
```

Output should be at least:

```stdout
v23.6.1
```

Run this to confirm your version:

```sh
npm -v
```

Output should be at least:

```stdout
11.2.0
```

### Install TypeScript

Install TypeScript and ts-node to run files:

```sh
npm install --save-dev typescript @types/node ts-node
```

### Install Playwright

Install Playwright latest version:

```sh
npm install playwright@latest
```

### Update

Run:

```sh
npm install npm@latest
npm upgrade
npm audit fix
```

## Run

**This code must never be executed against live google.com, in CI or any
automated tooling.** See [AGENTS.md](AGENTS.md) for the non-negotiable
policy. The Run section is documented here only for completeness of the
repo's house style, not as an instruction to run it:

```sh
npx ts-node ./src/demo.ts
```

## Tracking

* Package: demo-playwright-typescript-for-google-search
* Version: 1.0.0
* Created: 2026-09-03T00:00:00Z
* Updated: 2026-09-03T00:00:00Z
* License: GPL-2.0-or-greater or for custom license contact us
* Contact: Joel Parker Henderson (joel@joelparkerhenderson.com)
