import BasePage from "../BasePage";
import { step } from "../../misc/step";

export default class CheckoutCompletePage extends BasePage {
  public pagePath = "/checkout-complete.html";

  private backHomeButton = this.page.locator(
    'button[data-test="back-to-products"]',
  );

  @step()
  async backHome() {
    await this.backHomeButton.click();
  }
}
