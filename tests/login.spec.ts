import { test, expect } from "@playwright/test";
import Application from "../src/application";
import { USERS } from "../src/data/constants";

test("Check login functionality @Tda436da1", async ({ page }) => {
  const app = new Application(page);
  await app.loginPage.open();
  await app.loginPage.login(USERS.STANDARD.username, USERS.STANDARD.password);
  const cookies = await app.getCookies();

  await expect(page).toHaveURL(app.mainPage.pagePath);
  expect(cookies[0].name).toEqual("session-username");
  expect(cookies[0].value).toEqual(USERS.STANDARD.username);
});
