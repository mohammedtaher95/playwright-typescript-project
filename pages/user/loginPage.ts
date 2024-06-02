import { type Page, type Locator, expect } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly emailField: Locator;
  readonly passwordField: Locator;
  readonly loginBtn: Locator;
  readonly logoutLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailField = this.page.locator("#Email");
    this.passwordField = this.page.locator("#Password");
    this.loginBtn = this.page.locator("button.button-1.login-button");
    this.logoutLink = this.page.locator("a.ico-logout");
  }

  async userLogin(email: string, password: string) {
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    return this;
  }

  async clickOnLoginButton() {
    await this.loginBtn.click();
    return this;
  }

  async checkThatLogoutButtonShouldBeDisplayed() {
    await expect(this.logoutLink).toBeVisible();
    return this;
  }

  async clickOnLogoutButton() {
    await this.logoutLink.click();
    return this;
  }
}
