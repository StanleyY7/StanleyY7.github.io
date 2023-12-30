// @ts-check
import { App } from "../pages/app";
const { test } = require("@playwright/test");

test.describe("homePage unit tests", () => {
  let app;
  test.beforeEach(async ({ page }) => {
    app = new App(page);
    await app.goTo();
  });
  test("correct title", async () => {
    await app.homePage.verifyTitle();
  });

  test("contact link", async () => {
    await app.homePage.verifyContactButton();
    await app.homePage.contactButton.click();
    await app.homePage.verifyAboutHeading();
  });

  test("about link", async () => {
    await app.homePage.verifyAboutButton();
    await app.homePage.aboutButton.click();
    await app.homePage.verifyAboutHeading();
  });

  test("skills link", async () => {
    await app.homePage.verifySkillsButton();
    await app.homePage.skillsButton.click();
    await app.homePage.verifySkillsSection();
  });

  test("copyright", async () => {
    await app.homePage.verifyCopyright();
  });
});
