import { type Page, type Locator } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly myAccountLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.myAccountLink = this.page.locator("a.ico-account");
  }

  async visit() {
    await this.page.goto("/");
    return this;
  }

  async navigateToRegistrationPage() {
    await this.page.goto("/register");
    return this;
  }

  async navigateToLoginPage() {
    await this.page.goto("/login");
    return this;
  }

  async navigateToMyAccountPage() {
    // this.elements.myAccountLink().click();
    await this.page.goto("/customer/info");
    return this;
  }

  async navigateToContactUsPage() {
    await this.page.goto("/contactus");
    return this;
  }
}

