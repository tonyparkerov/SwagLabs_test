import BaseComponent from "./BaseComponent";
import BmSidebar from "./BmSidebar";
import { step } from "../misc/step";

export default class Header extends BaseComponent {
    private root = this.page.locator('[data-test="header-container"]');
    private burgerMenuButton = this.root.locator('button#react-burger-menu-btn');
    public burgerMenuSidebar = new BmSidebar(this.page);
    private shoppingCart = this.root.locator('[data-test="shopping-cart-link"]');
    private shoppingCartBadge = this.root.locator('span[data-test="shopping-cart-badge"]');
    private sortContainer = this.root.locator('[data-test="product-sort-container"]');
    private backToProductsButton = this.root.locator('button[data-test="back-to-products"]');

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