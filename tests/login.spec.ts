import { test, expect } from '@playwright/test';
import Application from '../src/application';
import { USERS } from '../src/data/users';

test('Check login functionality', async ({ page, context }) => {
  const app = new Application(page, context);
  await app.loginPage.goToLoginPage();
  await app.loginPage.login(USERS.STANDARD.username, USERS.STANDARD.password);
  const cookies = await app.getCookies();
  
  await expect(page).toHaveURL('/inventory.html');
  expect(cookies[0].name).toEqual('session-username');
  expect(cookies[0].value).toEqual(USERS.STANDARD.username);
});