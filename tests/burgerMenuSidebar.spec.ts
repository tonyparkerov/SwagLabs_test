import test, { expect } from "@playwright/test";
import Application from "../src/application";
import { USERS } from "../src/data/users";

test.describe('Check burger menu sidebar functionality', () => {
    let app: Application;

    test.beforeEach('Open main page', async ({ page, context }) => {
        app = new Application(page, context);
        await app.setUserCookies(USERS.STANDARD.username);
        await app.mainPage.openMainPage();
        await app.header.openBurgerMenu();
    });

    test('About', async ({ page }) => {
        await app.header.burgerMenuSidebar.openAboutLink();
        await expect(page).toHaveURL('https://saucelabs.com/');
    });

    test('Logout', async ({ page }) => {
        await app.header.burgerMenuSidebar.logout();
        await expect(page).toHaveURL('/');
        const cookies = await app.getCookies();
        expect(cookies.length).toEqual(0);
    });

    test('Close burger menu sidebar', async () => {
        await app.header.burgerMenuSidebar.closeBurgerMenuSidebar();
        const isClosed = await app.header.burgerMenuSidebar.isClosed();
        expect(isClosed).toBe('true');
    });
});