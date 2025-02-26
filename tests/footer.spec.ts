import { test, expect } from "../fixtures/fixtures";

test.describe('Check footer functionality', () => {

    test('Twitter', async ({ app }) => {
        const newPage = await app.footer.openSocialMedia('twitter');
        await expect(newPage).toHaveURL('https://x.com/saucelabs');
    })

    test('Facebook', async ({ app }) => {
        const newPage = await app.footer.openSocialMedia('facebook');
        await expect(newPage).toHaveURL('https://www.facebook.com/saucelabs');
    })

    test('Linkedin', async ({ app }) => {
        const newPage = await app.footer.openSocialMedia('linkedin');
        await expect(newPage).toHaveURL('https://www.linkedin.com/company/sauce-labs/');
    })

    test('Check footer copy', async ({ app }) => {
        const footerCopy = await app.footer.getFooterCopy();
        await expect(footerCopy).toHaveText('© 2025 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy');
    })
});