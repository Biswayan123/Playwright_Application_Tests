import {test, expect, Browser, Page, Locator} from '@playwright/test'
import {webkit, chromium, firefox} from '@playwright/test'
import exp from 'constants';

test('locator test', async () => {
    const browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});
    const page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    // using getByRole
    await expect(page.getByRole('heading', {name: 'Register Account'})).toBeVisible();

    //1. Using ID
    const firstName: Locator = page.locator('#input-firstname');
    const lastName: Locator = page.locator('id=input-lastname');

    await firstName.fill('Naveen');
    await lastName.fill('AutomationLabs');

    //2. Using Classname
    const logo: Locator = page.locator('.img-responsive');
    const logoExist: boolean = await logo.isVisible();

    console.log('Logo is displayed: ' + logoExist);

    //3. Using text
    const header: Locator = page.locator('text=Register Account');
    const headerExist: boolean = await header.isEnabled();

    console.log('Header is displayed: ' + headerExist);

    //4. Using CSS Selector
    const email: Locator = page.locator('css=input#input-email');
    const telephone: Locator = page.locator('css=input[name="telephone"]');
    const privacyCheckBox = page.locator('css=input[type="checkbox"]');

    await email.fill('naveen@gmail.com');
    await telephone.fill('345930382');
    //await privacyCheckBox.check();

    //5. Using XPath
    const password: Locator = page.locator('xpath=//input[@id="input-password"]');
    const confirmPassword: Locator = page.locator('xpath=//input[@id="input-confirm"]');
    const agreeCheckBox = page.locator('xpath=//input[@name="agree"]');
    const continueBtn = page.locator('xpath=//input[@type="submit"]');

    await password.fill('naveen123');
    await confirmPassword.fill('naveen123');
    await agreeCheckBox.check();
    await continueBtn.click();


    await new Promise(() => {});
});