import { test, expect } from "@playwright/test";
import Application from "../src/application";
import { USERS } from "../src/data/constants";

test.fail('Screenshot comparison', async ({ page }) => {
    const app = new Application(page);
    await app.setUserCookies(USERS.STANDARD.username);
    await app.mainPage.open();
    await expect(page).toHaveScreenshot({fullPage: true});
});