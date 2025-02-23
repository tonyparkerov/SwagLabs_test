import { test as base } from '@playwright/test';
import Application from "../src/application";
import { USERS } from '../src/data/constants';

type LoggedInStateFixture = {
    app: Application;
};

export const test = base.extend<LoggedInStateFixture>({
    app: async ({ page, context }, use) => {
      // Set up the fixture.
      const app = new Application(page, context);
      await app.setUserCookies(USERS.STANDARD.username);
      await app.mainPage.open();

      // Use the fixture value in the test.
      await use(app);
    }
  });
  export { expect } from '@playwright/test';