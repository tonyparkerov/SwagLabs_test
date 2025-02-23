import BasePage from "../BasePage";

export default class CheckoutOverviewPage extends BasePage {
    public pagePath = '/checkout-step-two.html';

    private cancelButton = this.page.locator('button[data-test="cancel"]');
    private finishButton = this.page.locator('button[data-test="finish"]')

    async cancel() {
        await this.cancelButton.click();
    }

    async finish() {
        await this.finishButton.click();
    }
}