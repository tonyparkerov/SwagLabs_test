import { test, expect } from "../fixtures/fixtures";
import { ALL_ITEMS } from "../src/data/constants";

test.describe('Data Driven Test: check content on item page', () => {
    for (const item of ALL_ITEMS) {
        test(`Open ${item.name} item page and check content`, async ({ app }) => {
            await app.mainPage.openItemPageThroughName(item.name);
            expect(app.itemPage.itemName).toHaveText(item.name);
            expect(app.itemPage.itemDescription).toHaveText(item.description);
            expect(app.itemPage.itemPrice).toHaveText(item.price);
        });
    }
});