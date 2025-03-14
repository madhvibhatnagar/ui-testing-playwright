const { test, expect } = require('@playwright/test');

test('Login Test - UI Testing Playground', async ({ page }) => {
    await page.goto('http://www.uitestingplayground.com/sampleapp');

    // Fill in login form
    await page.fill('input[name="UserName"]', 'TestUser');
    await page.fill('input[name="Password"]', 'pwd'); // The password for login is 'pwd'
    await page.click('button#login');

    // Verify successful login message
    await expect(page.locator('#loginstatus')).toHaveText('Welcome, TestUser!');
});
