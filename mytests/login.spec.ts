import {test, expect, Browser, Page, Locator} from '@playwright/test'
import {webkit, chromium, firefox} from '@playwright/test'

test('login test', async () => {
    const browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});
    const page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    await page.locator('#input-email').fill('hello@abc.com');
    await page.locator('#input-password').fill('hello@abc.com');
    const loginBtn: Locator = page.locator('input[type="submit"]');
    await loginBtn.click();

    await page.waitForEvent('load');
    const title: string = await page.title();
    console.log('Title is: ' + title);

    await page.screenshot({path: 'login.png'});

    expect(title).toEqual('My Account');
    browser.close();
});
