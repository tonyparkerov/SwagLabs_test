import { test, expect } from "../fixtures/fixtures";
import { validCheckoutInfo } from "../src/data/checkoutData";
import { getItemByName } from "../src/utils";

test('End to end test', async({ app, page }) => {
    const allItems = await app.mainPage.inventoryList.parseAllItems();
    const backpack = getItemByName(allItems, 'Sauce Labs Backpack');
    const bike = getItemByName(allItems, 'Sauce Labs Bike Light');
    const tShirt = getItemByName(allItems, 'Sauce Labs Bolt T-Shirt');
    
    await app.mainPage.addItemToCart(backpack, bike, tShirt);
    let shoppingCartBadgeQuantity = await app.header.getShoppingCartBadgeQuantity();
    expect (shoppingCartBadgeQuantity).toBe('3');

    await app.header.openShoppingCart();
    await expect(page).toHaveURL(app.cartPage.pagePath);
    await app.cartPage.removeItem(tShirt);
    shoppingCartBadgeQuantity = await app.header.getShoppingCartBadgeQuantity();
    expect (shoppingCartBadgeQuantity).toBe('2');

    await app.cartPage.checkout();
    await expect(page).toHaveURL(app.checkoutFlow.firstPage.pagePath);
    await app.checkoutFlow.firstPage.fillInCheckoutData(validCheckoutInfo);

    await app.checkoutFlow.firstPage.continue();
    await expect(page).toHaveURL(app.checkoutFlow.overviewPage.pagePath);
    await app.checkoutFlow.overviewPage.finish();
    await expect(page).toHaveURL(app.checkoutFlow.completePage.pagePath);
    
    await app.checkoutFlow.completePage.backHome();
    await expect(page).toHaveURL(app.mainPage.pagePath);
});