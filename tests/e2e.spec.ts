import { test, expect } from "@playwright/test";
import { ITEMS } from "../src/data/items";
import Application from "../src/Application";
import { USERS } from "../src/data/users";
import { validCheckoutInfo } from "../src/data/checkoutData";

test('End to end test', async({ page, context }) => {
    const app = new Application(page, context);

    await test.step('Login through setting user cookie', async () => {
        await app.setUserCookies(USERS.STANDARD.username);
        await app.mainPage.openMainPage();
        await expect(page).toHaveURL('/inventory.html');
    });

    await test.step('Add 3 items to Cart', async () => {
        await app.mainPage.addItemToCart(ITEMS.backpack);
        await app.mainPage.addItemToCart(ITEMS.bike);
        await app.mainPage.addItemToCart(ITEMS.boltTShirt)
        const shoppingCartBadgeQuantity = await app.header.getShoppingCartBadgeQuantity();
        expect (shoppingCartBadgeQuantity).toBe('3');
    });

    await test.step('Open cart and remove 1 item', async () => {
        await app.header.openShoppingCart();
        await expect(page).toHaveURL('/cart.html')
        await app.cartPage.removeItem(ITEMS.boltTShirt)
        const shoppingCartBadgeQuantity = await app.header.getShoppingCartBadgeQuantity();
        expect (shoppingCartBadgeQuantity).toBe('2');
    });
    
    //TODO
    await app.cartPage.checkout();
    await expect(page).toHaveURL('/checkout-step-one.html');
    await app.checkoutFlow.firstPage.fillInCheckoutData(validCheckoutInfo);
    await app.checkoutFlow.firstPage.continue();
    await app.checkoutFlow.overviewPage.finish();
    await expect(page).toHaveURL('/checkout-complete.html');
    await app.checkoutFlow.completePage.backHome();
    await expect(page).toHaveURL('/inventory.html')
    //await expect(app.cartPage.inventoryItem).toHaveText(ITEMS.backpack.name);
});