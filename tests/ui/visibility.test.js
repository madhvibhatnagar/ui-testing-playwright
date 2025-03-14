const { test, expect } = require('@playwright/test');

test('Verify Hidden Button Becomes Visible', async ({ page }) => {
    await page.goto('http://www.uitestingplayground.com/visibility');

    // Verify initially hidden element
    const hiddenButton = page.locator('#hideButton');
    // await expect(hiddenButton).toBeHidden();
    const removedButton = page.locator('#removedButton');

    // Click show button
    await page.click("#hideButton");

    // Verify button is now visible
    await expect(removedButton).toBeHidden();
    await expect(hiddenButton).toBeVisible();

});
