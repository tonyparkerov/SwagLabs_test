import { Locator, Page } from "@playwright/test";
import BaseComponent from "./BaseComponent";

export default class InventoryItem {
    private page;
    private itemName;
    private itemDescription;
    private itemImage;
    private itemPrice;
    private addToCartButton;
    private removeButton;

    constructor(page: Page, itemName: Locator, itemDescription: Locator, itemImage: Locator, itemPrice: Locator, addToCartButton: Locator, removeButton: Locator) {
        this.page = page;
        this.itemName = itemName;
        this.itemDescription = itemDescription;
        this.itemImage = itemImage;
        this.itemPrice = itemPrice;
        this.addToCartButton = addToCartButton;
        this.removeButton = removeButton;
    }
}