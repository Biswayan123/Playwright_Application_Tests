import {test, expect, Browser, Page, Locator} from '@playwright/test'
import {webkit, chromium, firefox} from '@playwright/test'
import path from 'path';

test('Drag and Drop test', async () => {
    const browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});
    const page: Page = await browser.newPage();
    await page.goto('https://jqueryui.com/resources/demos/droppable/default.html');

    //await page.locator('#draggable').dragTo(page.locator('#droppable'));

    //multiple commands
    await page.locator('#draggable').hover();
    await page.mouse.down();
    await page.locator('#droppable').hover();
    await page.mouse.up();

    await page.waitForTimeout(3000);

});

test('Select Files test', async () => {
    const browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});
    const page: Page = await browser.newPage();
    await page.goto('https://www.w3schools.com/howto/howto_html_file_upload_button.asp');

    const fileInput = page.locator('input[type="file"]');

    // single file
    await fileInput.setInputFiles("C:\Users\bchattopadhy\Downloads\Self_Image.JPG");

    // multiple files
    await fileInput.setInputFiles([path.join("/test.txt"), path.join("/test2.txt")]);

    await page.waitForTimeout(3000);

});