import { expect } from "@playwright/test";
export class HomePage {
  constructor(Page) {
    this.page = Page;
    this.aboutButton = this.page.getByRole("link", { name: "About" });
    this.contactButton = this.page.getByRole("link", { name: "Contact" });
    this.aboutHeading = this.page.getByRole("heading", { name: "About" });
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
}
