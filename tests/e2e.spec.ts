import { test, expect } from "../fixtures/fixtures";
import { ITEMS } from "../src/data/items";
import { validCheckoutInfo } from "../src/data/checkoutData";

test('End to end test', async({ app, page }) => {

    await test.step('Add 3 items to Cart', async () => {
        const allItems = await app.mainPage.parseAllItems();
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

    await test.step('Enter checkout data', async () => {
        await app.cartPage.checkout();
        await expect(page).toHaveURL('/checkout-step-one.html');
        await app.checkoutFlow.firstPage.fillInCheckoutData(validCheckoutInfo);
    });

    await test.step('Finish checkout flow', async () => {
        await app.checkoutFlow.firstPage.continue();
        await expect(page).toHaveURL('/checkout-step-two.html');
        await app.checkoutFlow.overviewPage.finish();
        await expect(page).toHaveURL('/checkout-complete.html');
    });
    
    await test.step('Back Home', async () => {
        await app.checkoutFlow.completePage.backHome();
        await expect(page).toHaveURL('/inventory.html')
    });
});