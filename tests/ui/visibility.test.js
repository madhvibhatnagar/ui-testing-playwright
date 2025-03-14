const { test } = require('@playwright/test');
const { VisibilityPage } = require('../pages/VisibilityPage');

test('Hidden Button Becomes Visible After Click', async ({ page }) => {
    const visibilityPage = new VisibilityPage(page);

    await visibilityPage.goto();
    await visibilityPage.verifyHiddenButtonIsInvisible();
    await visibilityPage.clickShowButton();
    await visibilityPage.verifyHiddenButtonIsVisible();
});
