import { test, expect } from "@playwright/test";
import Application from "../src/application";
import { USERS } from "../src/data/constants";

test('Visual comparison for user with UI bugs', async ({ page }) => {
    const app = new Application(page);
    await app.setUserCookies(USERS.VISUAL.username);
    await app.mainPage.open();
    await expect(page).toHaveScreenshot('mainpage.png');
});