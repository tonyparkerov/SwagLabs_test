import BasePage from "./base.page";

export default class CartPage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;
        this.cartList = page.locator('div[data-test="cart-list"]');
        this.cartItem = page.locator('div[data-test="inventory-item"]');
        this.removeItemButton = page.locator('button[data-test="remove-sauce-labs-backpack"]');
        this.continueShoppingButton = page.locator('button[data-test="continue-shopping"]');
        this.checkoutButton = page.locator('button[data-test="checkout"]');
    }
}