import { step } from "../misc/step";
import BaseComponent from "./BaseComponent";

export default class BmSidebar extends BaseComponent {
  private root = this.page.locator(".bm-menu-wrap");
  private allItemsLink = this.root.locator(
    'a[data-test="inventory-sidebar-link"]',
  );
  private aboutLink = this.root.locator('a[data-test="about-sidebar-link"]');
  private logoutLink = this.root.locator('a[data-test="logout-sidebar-link"]');
  private resetAppStateLink = this.root.locator(
    'a[data-test="reset-sidebar-link"]',
  );
  private closeIcon = this.root.locator("button#react-burger-cross-btn");

  @step()
  async getAllItems() {
    await this.allItemsLink.click();
  }

  @step()
  async openAboutLink() {
    await this.aboutLink.click();
  }

  @step()
  async logout() {
    await this.logoutLink.click();
  }

  @step()
  async resetAppState() {
    await this.resetAppStateLink.click();
  }

  @step()
  async closeBurgerMenuSidebar() {
    await this.closeIcon.click();
  }

  async isClosed() {
    const ariaHidden = await this.root.getAttribute("aria-hidden");
    return ariaHidden;
  }
}
