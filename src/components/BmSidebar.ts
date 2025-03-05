import { step } from "../misc/step";
import BaseComponent from "./BaseComponent";

export default class BmSidebar extends BaseComponent {
    private burgerMenuSidebar = this.page.locator('div.bm-menu-wrap');
    private allItemsLink = this.page.locator('a[data-test="inventory-sidebar-link"]');
    private aboutLink = this.page.locator('a[data-test="about-sidebar-link"]');
    private logoutLink = this.page.locator('a[data-test="logout-sidebar-link"]');
    private resetAppStateLink = this.page.locator('a[data-test="reset-sidebar-link"]');
    private closeIcon = this.page.locator('button#react-burger-cross-btn');
    
    @step()
    async getAllItems() {
        await this.allItemsLink.click();
    }

    @step()
    async openAboutLink() {
        await this.aboutLink.click();
    }

    @step()
    async logout() {
        await this.logoutLink.click();
    }

    @step()
    async resetAppState() {
        await this.resetAppStateLink.click();
    }

    @step()
    async closeBurgerMenuSidebar() {
        await this.closeIcon.click();
    }

    async isClosed() {
        const ariaHidden = await this.burgerMenuSidebar.getAttribute('aria-hidden');
        return ariaHidden;
    }
}