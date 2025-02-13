import { test, expect } from '@playwright/test';
import Application from '../src/application';
import { USERS } from '../test-data/users';

test('Login and open menu', async ({ page }) => {
  const app = new Application(page);
  await app.loginPage.goToLoginPage();
  await app.loginPage.login(USERS.STANDARD.username, USERS.STANDARD.password);
  await expect(page).toHaveURL('/inventory.html');
});

test('Open main page', async ({ page, context }) => {
  const app = new Application(page, context);
  await app.setUserCookies(USERS.STANDARD.username);
  await page.goto('/inventory.html');
  await expect(page).toHaveURL('/inventory.html');
  //await app.mainPage.footer.openSocialMedia('linkedin');
  //await expect(page).toHaveURL('linkedin.com/company/sauce-labs/');
});