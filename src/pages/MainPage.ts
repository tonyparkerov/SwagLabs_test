import BasePage from "./BasePage";
import { Item } from "../types";

export default class MainPage extends BasePage {
    private itemCardLocator = this.page.getByTestId('inventory-item');
    private itemNameLocator = this.page.locator('.inventory_item_name');
    private itemDescriptionLocator = this.page.locator('.inventory_item_desc');
    private itemPriceLocator = this.page.locator('[data-test="inventory-item-price"]');

    async openMainPage() {
        await this.page.goto('/inventory.html');
    }

    private findItemLocator(itemName: any) {
        return this.page.locator(`button[data-test="add-to-cart-${itemName.dataTestValue}"]`)
    }

    async addItemToCart(itemName: any) {
        await this.findItemLocator(itemName).click();
    }

    async parseAllItems() {
        const arrayOfAllItems: Item[] = [];
        const itemsCount = await this.itemCardLocator.count();
        for (let i = 0; i < itemsCount; i++) {
            const item: Item = {
                name: await this.getItemName(i),
                description: await this.getItemDescription(i),
                price: await this.getItemPrice(i)
            };
            arrayOfAllItems.push(item);
        }
        return arrayOfAllItems;
    }

    private async getItemName(index: number) {
        return await this.itemNameLocator.nth(index).textContent();
    }

    private async getItemDescription(index: number) {
        return await this.itemDescriptionLocator.nth(index).textContent();
    }

    private async getItemPrice(index: number) {
        return await this.itemPriceLocator.nth(index).textContent();
    }
}