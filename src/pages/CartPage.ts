import BasePage from "./BasePage";

export default class CartPage extends BasePage {
    private cartList = this.page.locator('div[data-test="cart-list"]');
    private inventoryItem = this.page.locator('div[data-test="inventory-item"]');
    private removeItemButton = this.page.locator('button[data-test="remove-sauce-labs-backpack"]');
    private continueShoppingButton = this.page.locator('button[data-test="continue-shopping"]');
    private checkoutButton = this.page.locator('button[data-test="checkout"]');
}