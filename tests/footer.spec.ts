import { test, expect } from "../fixtures/fixtures";

test.describe("Check footer functionality @S78582ea0", () => {
  test("Twitter @T3d847caf", async ({ app }) => {
    const newPage = await app.footer.openSocialMedia("twitter");
    await expect(newPage).toHaveURL("https://x.com/saucelabs");
  });

  test("Facebook @T9a80dc42", async ({ app }) => {
    const newPage = await app.footer.openSocialMedia("facebook");
    await expect(newPage).toHaveURL("https://www.facebook.com/saucelabs");
  });

  test("Linkedin @Teefdaceb", async ({ app }) => {
    const newPage = await app.footer.openSocialMedia("linkedin");
    await expect(newPage).toHaveURL(
      "https://www.linkedin.com/company/sauce-labs/",
    );
  });

  test("Check footer copy @Tbd7bf365", async ({ app }) => {
    const footerCopy = await app.footer.getFooterCopy();
    await expect(footerCopy).toHaveText(
      "© 2025 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy",
    );
  });
});
