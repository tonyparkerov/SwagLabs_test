export default class Header {
    constructor(page) {
        this.page = page;
        this.headerLabel = page.locator('.app_logo');
        this.burgerMenu = page.locator('#react-burger-menu-btn');
        this.shoppingCart = page.locator('[data-test="shopping-cart-link"]');
        this.sortContainer = page.locator('[data-test="product-sort-container"]');
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