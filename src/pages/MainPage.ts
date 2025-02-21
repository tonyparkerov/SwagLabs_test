import BasePage from "./BasePage";

export default class MainPage extends BasePage {
    private itemName = this.page.locator('.inventory_item_name');
    private itemDescription = this.page.locator('.inventory_item_desc');
    private itemPrice = this.page.locator('[data-test="inventory-item-price"]');

    async openMainPage() {
        await this.page.goto('/inventory.html');
    }

    private findItemLocator(itemName: any) {
        return this.page.locator(`button[data-test="add-to-cart-${itemName.dataTestValue}"]`)
    }

    async addItemToCart(itemName: any) {
        await this.findItemLocator(itemName).click();
    }

    async getItemName(index: number) {
        return await this.itemName.nth(index).textContent();
    }

    async getItemDescription(index: number) {
        return await this.itemDescription.nth(index).textContent();
    }

    async getItemPrice(index: number) {
        return await this.itemPrice.nth(index).textContent();
    }
}