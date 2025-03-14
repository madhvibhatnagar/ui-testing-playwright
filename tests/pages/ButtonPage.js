const { expect } = require('@playwright/test');

class ButtonPage {
    constructor(page) {
        this.page = page;
        this.url = 'http://www.uitestingplayground.com/textinput';
        this.textInput = '#newButtonName';
        this.updateButton = '#updatingButton';
    }

    async goto() {
        await this.page.goto(this.url);
    }

    async enterButtonText(text) {
        await this.page.fill(this.textInput, text);
    }

    async clickUpdateButton() {
        await this.page.click(this.updateButton);
    }

    async verifyButtonText(expectedText) {
        await expect(this.page.locator(this.updateButton)).toHaveText(expectedText);
    }
}

module.exports = { ButtonPage };
