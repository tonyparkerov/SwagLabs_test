import test, { expect } from "@playwright/test";
import Application from "../src/application";
import { USERS } from "../test-data/users";

test.describe('Check footer functionality', () => {
    let app;

    test.beforeEach('Open main inventory page', async ({ page, context }) => {
        app = new Application(page, context);
        await app.setUserCookies(USERS.STANDARD.username);
        await app.mainPage.openMainPage();
    });

    test('Twitter', async () => {
        const newPage = await app.footer.openSocialMedia('twitter');
        await expect(newPage).toHaveURL('https://x.com/saucelabs?mx=2');
    })

    test('Facebook', async () => {
        const newPage = await app.footer.openSocialMedia('facebook');
        await expect(newPage).toHaveURL('https://www.facebook.com/saucelabs');
    })

    test('Linkedin', async () => {
        const newPage = await app.footer.openSocialMedia('linkedin');
        await expect(newPage).toHaveURL('https://www.linkedin.com/company/sauce-labs/');
    })

    test('Check footer copy', async () => {
        const footerCopy = await app.footer.getFooterCopy();
        await expect(footerCopy).toHaveText('© 2025 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy');
    })
});