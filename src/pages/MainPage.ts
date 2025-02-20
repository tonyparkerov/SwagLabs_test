import { Locator } from "@playwright/test";
import Header from "../components/Header";
import InventoryItem from "../components/InventoryItem";
import BasePage from "./BasePage";

export default class MainPage extends BasePage {
    private inventoryName = this.page.locator('.inventory_item_name');

    async openMainPage() {
        await this.page.goto('/inventory.html');
    }

    private findItemLocator(itemName: any) {
        return this.page.locator(`button[data-test="add-to-cart-${itemName.dataTestValue}"]`)
    }

    async addItemToCart(itemName: any) {
        await this.findItemLocator(itemName).click();
    }

    async parseInventoryNames(index: number) {
        console.log('1. in method');
        const locator = this.inventoryName.nth(index);
        console.log(`2. in method ${locator}`);
        const itemName = await locator.textContent();
        console.log(`3. in method ${itemName}`);
        if(itemName) {
            return locator.getByText(itemName);
        }
    }
}