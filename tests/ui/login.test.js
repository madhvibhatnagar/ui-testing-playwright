
const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('Login Test with Page Object Model', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('TestUser', 'pwd');
    await loginPage.verifyLoginSuccess('TestUser');
});
