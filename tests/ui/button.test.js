const { test, expect } = require('@playwright/test');
const { ButtonPage } = require('../pages/ButtonPage');

test('Verify Button Click Changes Text', async ({ page }) => {
    await page.goto('http://www.uitestingplayground.com/textinput');

    // Type a new button name
    await page.fill('#newButtonName', 'Click Me Now');
    await page.click('#updatingButton');

    // Verify button text changes
    await expect(page.locator('#updatingButton')).toHaveText('Click Me Now');
});
test('Button Text Updates on Click', async ({ page }) => {
    const buttonPage = new ButtonPage(page);

    await buttonPage.goto();
    await buttonPage.enterButtonText('Click Me Now');
    await buttonPage.clickUpdateButton();
    await buttonPage.verifyButtonText('Click Me Now');
});