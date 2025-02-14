import BaseComponent from "./BaseComponent";
import BmSidebar from "./BmSidebar";

export default class Header extends BaseComponent {
    #headerLabel = this.page.locator('.app_logo');
    #burgerMenuButton = this.page.locator('button#react-burger-menu-btn');
    burgerMenuSidebar = new BmSidebar(this.page);
    #shoppingCart = this.page.locator('[data-test="shopping-cart-link"]');
    #sortContainer = this.page.locator('[data-test="product-sort-container"]');
    #backToProductsButton = this.page.locator('button[data-test="back-to-products"]');

    async openBurgerMenu() {
        await this.#burgerMenuButton.click();
    }

    async openShoppingCart() {
        this.#shoppingCart.click();
    }

    async sortProducts(sortOption) {
        await this.#sortContainer.selectOption(sortOption);
    }
}