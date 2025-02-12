import { test, expect } from '@playwright/test';
import Application from '../src/application';
import { USERS } from '../test-data/users';

test('Login and open menu', async ({ page }) => {
  const app = new Application(page);
  await app.loginPage.goToLoginPage();
  await app.loginPage.login(USERS.STANDARD.username, USERS.STANDARD.password);
  await expect(page).toHaveURL('/inventory.html');
});

test('Open twitter', async ({ page }) => {
  const app = new Application(page);
  await page.goto('/inventory.html');
  await app.mainPage.footer.twitterLogo.click();
  await app.loginPage.login(USERS.STANDARD.username, USERS.STANDARD.password);
  await expect(page).toHaveURL('/inventory.html');
});