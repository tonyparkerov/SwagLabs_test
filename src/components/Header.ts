import BaseComponent from "./BaseComponent";
import BmSidebar from "./BmSidebar";
import { step } from "../misc/step";

export default class Header extends BaseComponent {
    private burgerMenuButton = this.page.locator('button#react-burger-menu-btn');
    public burgerMenuSidebar = new BmSidebar(this.page);
    private shoppingCart = this.page.locator('[data-test="shopping-cart-link"]');
    private shoppingCartBadge = this.page.locator('span[data-test="shopping-cart-badge"]');
    private sortContainer = this.page.locator('[data-test="product-sort-container"]');
    private backToProductsButton = this.page.locator('button[data-test="back-to-products"]');

    @step()
    async openBurgerMenu() {
        await this.burgerMenuButton.click();
    }

    @step()
    async openShoppingCart() {
        await this.shoppingCart.click();
    }

    @step()
    async sortProductsBy(sortOption: string) {
        await this.sortContainer.selectOption(sortOption);
    }

    @step()
    async getShoppingCartBadgeQuantity() {
        return await this.shoppingCartBadge.textContent();
    }
}