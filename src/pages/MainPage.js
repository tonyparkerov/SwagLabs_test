import Header from "../components/Header";
import BasePage from "./BasePage";

export default class MainPage extends BasePage {
    async openMainPage() {
        await this.page.goto('/inventory.html');
    }

    async addItemToCart(itemName) {
        await this.page.locator(`button[data-test="add-to-cart-${itemName.dataTestValue}"]`).click();
    }
}