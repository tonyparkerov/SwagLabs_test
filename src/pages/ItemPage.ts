import BasePage from "./BasePage";

export default class ItemPage extends BasePage {
    public pagePath = 'inventory-item.html';
    public itemName = this.page.locator('div[data-test="inventory-item-name"]');
    public itemDescription = this.page.locator('div[data-test="inventory-item-desc"]');
    public itemPrice = this.page.locator('div[data-test="inventory-item-price"]');
}