const { test, expect } = require('@playwright/test');

test('Verify Button Click Changes Text', async ({ page }) => {
    await page.goto('http://www.uitestingplayground.com/textinput');

    // Type a new button name
    await page.fill('#newButtonName', 'Click Me Now');
    await page.click('#updatingButton');

    // Verify button text changes
    await expect(page.locator('#updatingButton')).toHaveText('Click Me Now');
});
