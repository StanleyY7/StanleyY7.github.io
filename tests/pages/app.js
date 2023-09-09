import { HomePage } from "./homepage";

export class App {
  constructor(page) {
    this.page = page;
    this.homePage = new HomePage(page);
  }

  async goTo() {
    await this.page.goto("https://stanleyy7.github.io/");
  }
}
