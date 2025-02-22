import { test, expect } from "../fixtures/fixtures";

test.describe('Check burger menu sidebar functionality', () => {
    
    test.beforeEach('Open BurgerMenu', async ({ app }) => {
        await app.header.openBurgerMenu();
    });

    test('About', async ({ app, page }) => {
        await app.header.burgerMenuSidebar.openAboutLink();
        await expect(page).toHaveURL('https://saucelabs.com/');
    });

    test('Logout', async ({ app, page }) => {
        await app.header.burgerMenuSidebar.logout();
        await expect(page).toHaveURL('/');
        const cookies = await app.getCookies();
        expect(cookies.length).toEqual(0);
    });

    test('Close burger menu sidebar', async ({ app }) => {
        await app.header.burgerMenuSidebar.closeBurgerMenuSidebar();
        const isClosed = await app.header.burgerMenuSidebar.isClosed();
        expect(isClosed).toBe('true');
    });
});