import BasePage from "./BasePage";
import { Item } from "../types";
import InventoryList from "../components/InventoryList";
import { step } from "../misc/step";

export default class MainPage extends BasePage {
    public pagePath = '/inventory.html';
    public inventoryList = new InventoryList(this.page);

    @step()
    async addItemToCart(...item: Item[]) {
        for(let key of item) {
            await this.page.locator(`button[data-test="${key.addToCartButtonDataTest}"]`).click();
        }
    }

    @step()
    async removeItemFromCart(...item: Item[]) {
        for(let key of item) {
            await this.page.locator(`button[data-test="${key.removeButtonDataTest}"]`).click();
        }
    }

    @step()
    async openItemPageThroughName(itemName: string) {
        await this.page.getByRole('link', { name: itemName}).nth(0).click();
    }

    @step()
    async openItemPageThroughImage(itemName: string) {
        await this.page.getByAltText(itemName).click();
    }
}