import { test, expect } from "@playwright/test";
import { ITEMS } from "../test-data/items";
import Application from "../src/application";
import { USERS } from "../test-data/users";

let app;

test.beforeEach('Open main inventory page', async ({ page, context }) => {
    app = new Application(page, context);
    await app.setUserCookies(USERS.STANDARD.username);
    await app.mainPage.openMainPage();
});

test('End to end test', async({ page }) => {
    await app.mainPage.addItemToCart(ITEMS.backpack);
    await page.pause();
    await app.mainPage.addItemToCart(ITEMS.bike);
    await page.pause();
    await app.header.openShoppingCart();
    await page.pause();
    //await expect(page).toHaveURL('/cart.html');
    //await expect(app.cartPage.inventoryItem).toHaveText(ITEMS.backpack.name);
});