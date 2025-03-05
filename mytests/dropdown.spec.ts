import {test, expect, Browser, Page, Locator} from '@playwright/test'
import {webkit, chromium, firefox} from '@playwright/test'
import exp from 'constants';

test('Dropdown test', async () => {
    const browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});
    const page: Page = await browser.newPage();
    await page.goto('https://www.magupdate.co.uk/magazine-subscription/phrr');

    const countryDropDown = 'select#Contact_CountryCode';
    // await page.selectOption(countryDropDown, {label: 'India'}); // select by label
    // await page.waitForTimeout(3000);
    await page.selectOption(countryDropDown, {value: 'AD'}); // select by value

    const allCountries = await page.$$(countryDropDown + ' > option');
    for(const e of allCountries) {
        const text = await e.textContent();
        console.log(text);
    }
    await page.waitForTimeout(3000);


});