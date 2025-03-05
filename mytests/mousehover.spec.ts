import {test, expect, Browser, Page, Locator} from '@playwright/test'
import {webkit, chromium, firefox} from '@playwright/test'

test('mousehover test', async () => {
    const browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});
    const page: Page = await browser.newPage();
    await page.goto('https://www.spicejet.com/');

    await page.getByText('Add-ons').first().hover();
    await page.getByText('Taxi').first().click();

    await page.waitForTimeout(3000);
});