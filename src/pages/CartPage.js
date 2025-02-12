import BasePage from "./BasePage";

export default class CartPage extends BasePage {
    #cartList = this.page.locator('div[data-test="cart-list"]');
    #cartItem = this.page.locator('div[data-test="inventory-item"]');
    #removeItemButton = this.page.locator('button[data-test="remove-sauce-labs-backpack"]');
    #continueShoppingButton = this.page.locator('button[data-test="continue-shopping"]');
    #checkoutButton = this.page.locator('button[data-test="checkout"]');
}