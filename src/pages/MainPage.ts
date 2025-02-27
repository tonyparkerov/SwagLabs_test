import BasePage from "./BasePage";
import { Item } from "../types";
import InventoryList from "../components/InventoryList";

export default class MainPage extends BasePage {
    public pagePath = '/inventory.html';
    public inventoryList = new InventoryList(this.page);

    async addItemToCart(...item: Item[]) {
        for(let key of item) {
            await this.page.locator(`button[data-test="${key.addToCartButtonDataTest}"]`).click();
        }
    }
}