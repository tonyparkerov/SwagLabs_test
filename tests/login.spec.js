import { test, expect } from '@playwright/test';
import LoginPage from '../src/pages/login.page';
import { USERS } from '../test-data/users';


test('Login and open menu', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await loginPage.goToLoginPage();
  await loginPage.login(USERS.STANDARD.username, USERS.STANDARD.password);
  await expect(page).toHaveURL('/inventory.html');
});