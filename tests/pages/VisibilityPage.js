const { expect } = require('@playwright/test');

class VisibilityPage {
    constructor(page) {
        this.page = page;
        this.url = 'http://www.uitestingplayground.com/visibility';
        this.hiddenButton = '#invisibleButton';
        this.showButton = '#hideButton';
    }

    async goto() {
        await this.page.goto(this.url);
    }

    async verifyHiddenButtonIsInvisible() {
        await expect(this.page.locator(this.showButton)).toBeVisible();
    }

    async clickShowButton() {
        await this.page.click(this.showButton);
    }

    async verifyHiddenButtonIsVisible() {
        await expect(this.page.locator(this.hiddenButton)).toBeHidden();
    }
}

module.exports = { VisibilityPage };
