import BaseComponent from "./BaseComponent";

export default class BmSidebar extends BaseComponent {
    #burgerMenu = this.page.locator('div.bm-menu-wrap');
    #allItemsLink = this.page.locator('a[data-test="inventory-sidebar-link"]');
    #aboutLink = this.page.locator('a[data-test="about-sidebar-link"]');
    #logoutLink = this.page.locator('a[data-test="logout-sidebar-link"]');
    #resetAppStateLink = this.page.locator('a[data-test="reset-sidebar-link"]');
    #closeIcon = this.page.locator('button#react-burger-cross-btn');

    async getAllItems() {
        await this.#allItemsLink.click();
    }

    async openAboutLink() {
        await this.#aboutLink.click();
    }
}