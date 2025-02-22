import { test as base } from '@playwright/test';
import Application from "../src/application";
import { USERS } from '../src/data/users';

type LoggedInStateFixture = {
    app: Application;
};

export const test = base.extend<LoggedInStateFixture>({
    app: async ({ page, context }, use) => {
      // Set up the fixture.
      const app = new Application(page, context);
      await app.setUserCookies(USERS.STANDARD.username);
      await app.mainPage.openMainPage();

      // Use the fixture value in the test.
      await use(app);
  
      // Clean up the fixture.
      //await app.removeAll();
    }
  });
  export { expect } from '@playwright/test';