import { Item } from "../types";
import BasePage from "./BasePage";
import { step } from "../misc/step";

export default class CartPage extends BasePage {
    public pagePath = '/cart.html';

    private cartList = this.page.locator('div[data-test="cart-list"]');
    private inventoryItem = this.page.locator('div[data-test="inventory-item"]');
    private continueShoppingButton = this.page.locator('button[data-test="continue-shopping"]');
    private checkoutButton = this.page.locator('button[data-test="checkout"]');

    @step()
    async removeItem(item: Item) {
        await this.page.locator(`button[data-test="${item.removeButtonDataTest}"]`).click();
    }

    @step()
    async continueShopping() {
        await this.continueShoppingButton.click();
    }

    @step()
    async checkout() {
        await this.checkoutButton.click();
    }
}