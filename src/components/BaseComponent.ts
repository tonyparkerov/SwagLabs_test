import type { Page } from "@playwright/test";

export default abstract class BaseComponent {
  protected page;

  constructor(page: Page) {
    this.page = page;
  }
}
