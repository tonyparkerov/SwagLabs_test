import { test, expect } from "@playwright/test";
import Application from "../../src/application";
import { LOGIN_ERROR_MESSAGES, USERS } from "../../src/data/constants";

test.describe("Check negative scenarios for login functionality @Sdb811d66", () => {
  let app: Application;

  test.beforeEach("Initialize app", async ({ page }) => {
    app = new Application(page);
    await app.loginPage.open();
  });

  test("Try login without entered credentials @T35755176", async () => {
    await app.loginPage.login();
    expect(await app.loginPage.countErrorIcons()).toEqual(2);
    expect(await app.loginPage.getErrorMessage()).toEqual(
      LOGIN_ERROR_MESSAGES.withoutUsername,
    );
  });

  test("Try login without entered username @Tea8f8267", async () => {
    await app.loginPage.login("", USERS.STANDARD.password);
    expect(await app.loginPage.countErrorIcons()).toEqual(2);
    expect(await app.loginPage.getErrorMessage()).toEqual(
      LOGIN_ERROR_MESSAGES.withoutUsername,
    );
  });

  test("Try login without entered password @T23b6391a", async () => {
    await app.loginPage.login(USERS.STANDARD.username);
    expect(await app.loginPage.countErrorIcons()).toEqual(2);
    expect(await app.loginPage.getErrorMessage()).toEqual(
      LOGIN_ERROR_MESSAGES.withoutPassword,
    );
  });

  test("Try login with wrong credentials @T287db18b", async () => {
    await app.loginPage.login(USERS.STANDARD.username, "test");
    expect(await app.loginPage.countErrorIcons()).toEqual(2);
    expect(await app.loginPage.getErrorMessage()).toEqual(
      LOGIN_ERROR_MESSAGES.wrongCredentials,
    );
  });

  test("Try login with locked user @Tec66c56f", async () => {
    await app.loginPage.login(USERS.LOCKED.username, USERS.LOCKED.password);
    expect(await app.loginPage.countErrorIcons()).toEqual(2);
    expect(await app.loginPage.getErrorMessage()).toEqual(
      LOGIN_ERROR_MESSAGES.lockedOut,
    );
  });

  test("Close errors @T3dbc498a", async () => {
    await app.loginPage.login();
    await app.loginPage.closeErrorMessage();
    expect(await app.loginPage.countErrorIcons()).toEqual(0);
    expect(app.loginPage.errorMessage).not.toBeVisible();
  });
});
