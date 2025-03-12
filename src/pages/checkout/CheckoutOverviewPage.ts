import BasePage from "../BasePage";
import { step } from "../../misc/step";

export default class CheckoutOverviewPage extends BasePage {
  public pagePath = "/checkout-step-two.html";

  private cancelButton = this.page.locator('button[data-test="cancel"]');
  private finishButton = this.page.locator('button[data-test="finish"]');

  @step()
  async cancel() {
    await this.cancelButton.click();
  }

  @step()
  async finish() {
    await this.finishButton.click();
  }
}
