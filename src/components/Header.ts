import BaseComponent from "./BaseComponent";
import BmSidebar from "./BmSidebar";

export default class Header extends BaseComponent {
    private burgerMenuButton = this.page.locator('button#react-burger-menu-btn');
    public burgerMenuSidebar = new BmSidebar(this.page);
    private shoppingCart = this.page.locator('[data-test="shopping-cart-link"]');
    private shoppingCartBadge = this.page.locator('span[data-test="shopping-cart-badge"]');
    private sortContainer = this.page.locator('[data-test="product-sort-container"]');
    private backToProductsButton = this.page.locator('button[data-test="back-to-products"]');

    async openBurgerMenu() {
        await this.burgerMenuButton.click();
    }

    async openShoppingCart() {
        await this.shoppingCart.click();
    }

    async sortProductsBy(sortOption: string) {
        await this.sortContainer.selectOption(sortOption);
    }

    async getShoppingCartBadgeQuantity() {
        return await this.shoppingCartBadge.textContent();
    }
}