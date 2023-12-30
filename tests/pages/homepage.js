import { expect } from "@playwright/test";
export class HomePage {
  constructor(Page) {
    this.page = Page;
    this.aboutButton = this.page.getByRole("link", { name: "About" });
    this.contactButton = this.page.getByRole("link", { name: "Contact" });
    this.aboutHeading = this.page.getByRole("heading", { name: "About" });
    this.skillsButton = this.page
      .locator("#about-section")
      .getByRole("link", { name: "Skills" });
    this.skillsHeading = this.page.getByRole("heading", { name: "Skills_" });
    this.skillsGrid = this.page.locator(".skills__grid");
    this.copyright = this.page.getByText("©2023 Stanley Yu");
  }

  async verifyAboutHeading() {
    await expect(this.aboutHeading).toBeVisible();
  }

  async verifyAboutButton() {
    await expect(this.aboutButton).toBeVisible();
  }

  async verifyContactButton() {
    await expect(this.contactButton).toBeVisible();
  }

  async verifyTitle() {
    await expect(this.page).toHaveTitle(/Stanley Yu | Software Developer/);
  }

  async verifySkillsButton() {
    await expect(this.skillsButton).toBeVisible();
  }

  async verifySkillsSection() {
    await expect(this.skillsHeading).toBeVisible();
    await expect(this.skillsGrid).toBeVisible();
  }

  async verifyCopyright() {
    await expect(this.copyright).toBeVisible();
  }
}
