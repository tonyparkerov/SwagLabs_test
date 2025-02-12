export default class BmSidebar {
    constructor(page) {
        this.page = page;
        this.burgerMenu = page.locator('div.bm-menu-wrap');
        this.allItemsLink = page.locator('a[data-test="inventory-sidebar-link"]');
        this.aboutLink = page.locator('a[data-test="about-sidebar-link"]');
        this.logoutLink = page.locator('a[data-test="logout-sidebar-link"]');
        this.resetAppStateLink = page.locator('a[data-test="reset-sidebar-link"]');
        this.closeIcon = page.locator('button#react-burger-cross-btn');
    }

    async getAllItems() {
        await this.allItemsLink.click();
    }

    async openAboutLink() {
        await this.aboutLink.click();
    }
}