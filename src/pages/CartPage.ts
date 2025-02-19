import BasePage from "./BasePage";

export default class CartPage extends BasePage {
    private cartList = this.page.locator('div[data-test="cart-list"]');
    private inventoryItem = this.page.locator('div[data-test="inventory-item"]');
    private continueShoppingButton = this.page.locator('button[data-test="continue-shopping"]');
    private checkoutButton = this.page.locator('button[data-test="checkout"]');

    private findRemoveButtonLocator(itemName: any) {
        return this.page.locator(`button[data-test="remove-${itemName.dataTestValue}"]`)
    }

    async removeItem(itemName: any) {
        await this.findRemoveButtonLocator(itemName).click();
    }

    async continueShopping() {
        await this.continueShoppingButton.click();
    }

    async checkout() {
        await this.checkoutButton.click();
    }
}