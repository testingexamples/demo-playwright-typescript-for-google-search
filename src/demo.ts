#!/usr/bin/env ts-node

///
// Demo of Playwright browser automation with TypeScript, targeting the
// syntax and interaction patterns for Google Search.
//
// IMPORTANT: Google's Terms of Service restrict automated querying of
// Google Search. This file exists to show the syntax and interaction
// patterns of Playwright's TypeScript API — matching the framing already
// established at https://testingexamples.github.io/examples/google-search/
// — it is NOT meant to be run repeatedly, or at all, against the live
// google.com. Do not run this in CI or any automated tooling. See
// README.md and AGENTS.md for the full caution.
//
// Please see the file README.md for more information.
//
// ## Tracking
//
//   * Package: demo-playwright-typescript-for-google-search
//   * Version: 1.0.0
//   * Created: 2026-09-03T00:00:00Z
//   * Updated: 2026-09-03T00:00:00Z
//   * License: GPL-2.0-or-greater or for custom license contact us
//   * Contact: Joel Parker Henderson (joel@joelparkerhenderson.com)
///

// Import Playwright types and functions.
import { chromium, Browser, BrowserContext, Page, Locator } from 'playwright';

// Import strict assert, renamed for convenience as assert.
import { strict as assert } from 'assert';

async function demo(): Promise<void> {

    const browser: Browser = await chromium.launch({
        headless: false,
    });

    const context: BrowserContext = await browser.newContext();
    const page: Page = await context.newPage();

    try {

        ///
        // Check 1: Visit Google and verify the page title.
        ///

        await page.goto('https://www.google.com');

        const title: string = await page.title();
        console.log(`Page title: "${title}"`);
        assert.equal(title, 'Google');
        console.log('✅ Page title is "Google".');

        ///
        // Check 2: Use the search box and verify the results page title
        // contains the query.
        //
        // Note on the selector: Google's exact markup for the search box
        // has drifted over time, and will likely keep drifting. It has
        // historically been an <input> and is currently often a
        // <textarea>, both carrying name="q". We select on the
        // <textarea> variant here and say so plainly, rather than pretend
        // the DOM is more stable than it is.
        ///

        const query: string = 'testing examples';
        const searchBox: Locator = page.locator('textarea[name="q"]');
        await searchBox.fill(query);
        // Pressing Enter is generally more reliable than locating the
        // submit button, which autocomplete suggestions can obscure.
        await page.keyboard.press('Enter');
        await page.waitForLoadState('load');

        const resultsTitle: string = await page.title();
        console.log(`Results page title: "${resultsTitle}"`);
        assert.ok(
            resultsTitle.toLowerCase().includes(query.toLowerCase()),
            `Expected results page title to contain "${query}"`
        );
        console.log(`✅ Results page title contains "${query}".`);

        ///
        // Check 3: Click the first organic result and verify the
        // hostname changed away from www.google.com.
        ///

        const firstResult: Locator = page.locator('#search a').first();
        await firstResult.click();
        await page.waitForLoadState('load');

        const hostname: string = new URL(page.url()).hostname;
        console.log(`Hostname after clicking first result: "${hostname}"`);
        assert.notEqual(hostname, 'www.google.com');
        console.log('✅ Hostname changed away from www.google.com.');

        console.log('\nAll checks passed. 🎉');

    } catch (err: unknown) {
        if (err instanceof Error) {
            console.log(err.message);
            console.log(err.stack);
        } else {
            console.log('An unknown error occurred:', err);
        }
        process.exitCode = 1;
    } finally {
        await browser.close();
    }

}

// Non-negotiable: do not call demo() automatically in CI or any automated
// tooling. This file must never be executed against live google.com. See
// AGENTS.md.
demo().catch((err: Error): void => {
    console.error(err);
    process.exitCode = 1;
});
