import BmSidebar from "./bmSidebar.component";

export default class Header {
    constructor(page) {
        this.page = page;
        this.headerLabel = page.locator('.app_logo');
        this.burgerMenuButton = page.locator('button#react-burger-menu-btn');
        this.burgerMenuSidebar = new BmSidebar(page);
        this.shoppingCart = page.locator('[data-test="shopping-cart-link"]');
        this.sortContainer = page.locator('[data-test="product-sort-container"]');
        this.backToProductsButton = page.locator('button[data-test="back-to-products"]');
    }

    async openBurgerMenu() {
        await this.burgerMenu.click();
    }

    async openShoppingCart() {
        this.shoppingCart.click();
    }

    async sortProducts(sortOption) {
        await this.sortContainer.selectOption(sortOption);
    }
}