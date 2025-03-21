import { test, expect } from "../fixtures/fixtures";
import { ALL_ITEMS } from "../src/data/constants";

for (const item of ALL_ITEMS) {
  test(`Open ${item.name} item page and check content @Tee349036`, async ({ app }) => {
    await app.mainPage.openItemPageThroughName(item.name);
    expect(app.itemPage.itemName).toHaveText(item.name);
    expect(app.itemPage.itemDescription).toHaveText(item.description);
    expect(app.itemPage.itemPrice).toHaveText(item.price);
  });
}
