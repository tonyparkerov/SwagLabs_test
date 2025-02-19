import BasePage from "../BasePage";

export default class CheckoutCompletePage extends BasePage {
    private backHomeButton = this.page.locator('button[data-test="back-to-products"]');

    async backHome() {
        await this.backHomeButton.click();
    }
}