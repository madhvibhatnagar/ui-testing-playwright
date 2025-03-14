const { expect } = require('@playwright/test');

class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = 'input[name="UserName"]';
        this.passwordInput = 'input[name="Password"]';
        this.loginButton = '#login';
        this.loginStatus = '#loginstatus';
    }

    async goto() {
        await this.page.goto('http://www.uitestingplayground.com/sampleapp');
    }

    async login(username, password) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
    }

    async verifyLoginSuccess(username) {
        await expect(this.page.locator(this.loginStatus)).toHaveText(`Welcome, ${username}!`);
    }
}

module.exports = { LoginPage };
