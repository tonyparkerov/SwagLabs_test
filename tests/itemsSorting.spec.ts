import test, { expect } from "@playwright/test";
import Application from "../src/application";
import { USERS } from "../src/data/users";
import { SORTING_OPTIONS } from "../src/data/constants";
import { isSortedBy } from "../src/utils";

test.describe('Check all sorting options', () => {
    let app: Application;

    test.beforeEach('Open main inventory page', async ({ page, context }) => {
        app = new Application(page, context);
        await app.setUserCookies(USERS.STANDARD.username);
        await app.mainPage.openMainPage();
    });

    test('Name (A to Z) by default', async () => {
        const items = await app.mainPage.parseAllItems();
        expect(isSortedBy(SORTING_OPTIONS.az, items)).toEqual(true);
    });

    test('Name (Z to A)', async () => {
        await app.header.sortProductsBy(SORTING_OPTIONS.za);
        const items = await app.mainPage.parseAllItems();
        expect(isSortedBy(SORTING_OPTIONS.za, items)).toEqual(true);
    });

    test('Price (low to high)', async () => {
        await app.header.sortProductsBy(SORTING_OPTIONS.lohi);
        const items = await app.mainPage.parseAllItems();
        expect(isSortedBy(SORTING_OPTIONS.lohi, items)).toEqual(true);
    });

    test('Price (high to low)', async () => {
        await app.header.sortProductsBy(SORTING_OPTIONS.hilo);
        const items = await app.mainPage.parseAllItems();
        expect(isSortedBy(SORTING_OPTIONS.hilo, items)).toEqual(true);
    });
});