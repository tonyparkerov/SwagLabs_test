import BasePage from "./BasePage";

export default class MainPage extends BasePage {
    async openMainPage() {
        await this.page.goto('/inventory.html');
    }
}