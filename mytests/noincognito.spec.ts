import {test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import {webkit, chromium, firefox} from '@playwright/test'

test('no incognito test', async () => {
    const browser: BrowserContext = await chromium.launchPersistentContext('', {headless: false, channel: 'chrome'});

    // to skip the opening of a blank tab in the browser when no incognito mode is used
    const pages = browser.pages();
    const page: Page = pages[0];
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    page.waitForTimeout(5000)
});
