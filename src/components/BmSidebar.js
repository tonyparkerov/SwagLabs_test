import BaseComponent from "./BaseComponent";

export default class BmSidebar extends BaseComponent {
    #burgerMenuSidebar = this.page.locator('div.bm-menu-wrap');
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

    async logout() {
        await this.#logoutLink.click();
    }

    async resetAppState() {
        await this.#resetAppStateLink.click();
    }

    async closeBurgerMenuSidebar() {
        await this.#closeIcon.click();
    }

    async isClosed() {
        const ariaHidden = await this.#burgerMenuSidebar.getAttribute('aria-hidden');
        return ariaHidden;
    }
}