// @ts-check
import { App } from "../pages/app";
const { test, expect } = require("@playwright/test");

test.describe("homePage unit tests", () => {
  let app;
  test.beforeEach(async ({ page }) => {
    app = new App(page);
  });
  test("correct title", async () => {
    await app.goTo();
    await app.homePage.verifyTitle();
  });

  test("contact link", async () => {
    await app.goTo();
    await app.homePage.verifyContactButton();
    await app.homePage.contactButton.click();
    await app.homePage.verifyAboutHeading();
  });
});
