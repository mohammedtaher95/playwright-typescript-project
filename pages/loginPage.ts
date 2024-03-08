import { type Page, type Locator, Expect } from "@playwright/test";
import homepage from "./homepage";

class LoginPage {
  readonly page: Page;
  readonly expect: Expect;

  elements = {
    emailField: () => this.page.locator("#Email"),
    passwordField: () => this.page.locator("#Password"),
    loginBtn: () => this.page.locator("button.button-1.login-button"),
    logoutLink: () => this.page.locator("a.ico-logout"),
  };

  constructor(page:Page) {
	this.page = page;
  }

  async userLogin(email, password) {
    await this.elements.emailField().fill(email);
    await this.elements.passwordField().fill(password);
    return this;
  }

  async clickOnLoginButton() {
    await this.elements.loginBtn().click();
    return this;
  }

  async checkThatLogoutButtonShouldBeDisplayed() {
	await this.expect(this.elements.logoutLink()).toBeVisible();
    return this;
  }

  async clickOnLogoutButton() {
    await this.elements.logoutLink().click();
    return homepage;
  }
}

export default LoginPage;
