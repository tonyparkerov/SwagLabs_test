import { test, expect } from "../fixtures/fixtures";
import { SORTING_OPTIONS } from "../src/data/constants";
import { isSortedBy } from "../src/utils";

test.describe("Check all sorting options @S5dcacd3b", () => {
  test("Name (A to Z) by default @Tf3803452", async ({ app }) => {
    const items = await app.mainPage.inventoryList.parseAllItems();
    expect(isSortedBy(SORTING_OPTIONS.az, items)).toEqual(true);
  });

  test("Name (Z to A) @Taf03eb9d", async ({ app }) => {
    await app.header.sortProductsBy(SORTING_OPTIONS.za);
    const items = await app.mainPage.inventoryList.parseAllItems();
    expect(isSortedBy(SORTING_OPTIONS.za, items)).toEqual(true);
  });

  test("Price (low to high) @Tf40536ef", async ({ app }) => {
    await app.header.sortProductsBy(SORTING_OPTIONS.lohi);
    const items = await app.mainPage.inventoryList.parseAllItems();
    expect(isSortedBy(SORTING_OPTIONS.lohi, items)).toEqual(true);
  });

  test("Price (high to low) @Tffa73132", async ({ app }) => {
    await app.header.sortProductsBy(SORTING_OPTIONS.hilo);
    const items = await app.mainPage.inventoryList.parseAllItems();
    expect(isSortedBy(SORTING_OPTIONS.hilo, items)).toEqual(true);
  });
});
