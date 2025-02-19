import { test, expect } from "@playwright/test";
import { ITEMS } from "../test-data/items";
import Application from "../src/application";
import { USERS } from "../test-data/users";

let app: Application;

test.beforeEach('Open main inventory page', async ({ page, context }) => {
    app = new Application(page, context);
    await app.setUserCookies(USERS.STANDARD.username);
    await app.mainPage.openMainPage();
});

test('End to end test', async({ page }) => {
    await app.mainPage.addItemToCart(ITEMS.backpack);
    await app.mainPage.addItemToCart(ITEMS.bike);
    await app.mainPage.addItemToCart(ITEMS.boltTShirt)
    await app.header.openShoppingCart();
    await app.cartPage.removeItem(ITEMS.boltTShirt)
    await app.cartPage.checkout();
    await expect(page).toHaveURL('/checkout-step-one.html');
    await app.checkoutFlow.firstPage.fillInCheckoutData({ firstName: 'a', lastName: 'a', zipCode: 'a' });
    await app.checkoutFlow.firstPage.continue();
    await app.checkoutFlow.overviewPage.finish();
    await expect(page).toHaveURL('/checkout-complete.html');
    await app.checkoutFlow.completePage.backHome();
    await expect(page).toHaveURL('/inventory.html')
    //await expect(app.cartPage.inventoryItem).toHaveText(ITEMS.backpack.name);
});