import CheckoutInfoModel from "../../data/models/CheckoutInfoModel";
import BasePage from "../BasePage";
import { step } from "../../misc/step";

export default class CheckoutFirstPage extends BasePage {
  public pagePath = "/checkout-step-one.html";

  private firstNameInput = this.page.locator('input[data-test="firstName"]');
  private lastNameInput = this.page.locator('input[data-test="lastName"]');
  private zipCodeInput = this.page.locator('input[data-test="postalCode"]');
  private cancelButton = this.page.locator('button[data-test="cancel"]');
  private continueButton = this.page.locator('[data-test="continue"]');

  @step()
  async fillInCheckoutData(checkoutData: CheckoutInfoModel) {
    if (checkoutData.firstName) {
      await this.firstNameInput.fill(checkoutData.firstName);
    }
    if (checkoutData.lastName) {
      await this.lastNameInput.fill(checkoutData.lastName);
    }
    if (checkoutData.zipCode) {
      await this.zipCodeInput.fill(checkoutData.zipCode);
    }
  }

  @step()
  async cancel() {
    await this.cancelButton.click();
  }

  @step()
  async continue() {
    await this.continueButton.click();
  }
}
