import { test, expect } from '@playwright/test';
import Application from '../src/application';
import { USERS } from '../test-data/users';

test('Login and open menu', async ({ page, context }) => {
  const app = new Application(page);
  await app.loginPage.goToLoginPage();
  await app.loginPage.login(USERS.STANDARD.username, USERS.STANDARD.password);
  
  const pagePromise = context.waitForEvent('page');
  await app.mainPage.footer.openSocialMedia('linkedin');
  const newPage = await pagePromise;
  // Interact with the new page normally.
  await expect(newPage).toHaveURL('https://www.linkedin.com/company/sauce-labs/')
  await expect(page).toHaveURL('/inventory.html');
  
});

test.skip('Open twitter', async ({ page }) => {
  const app = new Application(page);
  await page.goto('/inventory.html');
  //await app.mainPage.footer.openSocialMedia('linkedin');
  //await expect(page).toHaveURL('linkedin.com/company/sauce-labs/');
});