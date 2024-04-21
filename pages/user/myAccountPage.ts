import { type Page, type Locator, Expect } from "@playwright/test";
import HomePage from "../common/homepage";

class MyAccountPage {
  readonly page: Page;
  readonly expect: Expect;

  elements = {
    changePasswordLink: () =>
      this.page.locator("xpath=//a[@href='/customer/changepassword']"),
    customerInfo: () => this.page.locator("xpath=//a[@href='/customer/info']"),
    oldPasswordTxt: () => this.page.locator("#OldPassword"),
    newPasswordTxt: () => this.page.locator("#NewPassword"),
    confirmPasswordTxt: () => this.page.locator("#ConfirmNewPassword"),
    changePasswordBtn: () =>
      this.page.locator("button.button-1.change-password-button"),
    changeResult: () => this.page.locator("p.content"),
    messageCloseBtn: () => this.page.locator("span.close"),
    logoutLink: () => this.page.locator("a.ico-logout"),
  };

  constructor(page: Page) {
    this.page = page;
  }

  async openChangePasswordpage() {
    await this.elements.changePasswordLink().click();
    return this;
  }

  async changePassword(oldPass, newPass) {
    await this.elements.oldPasswordTxt().fill(oldPass);
    await this.elements.newPasswordTxt().fill(newPass);
    await this.elements.confirmPasswordTxt().fill(newPass);
    return this;
  }

  async clickOnConfirm() {
    await this.elements.changePasswordBtn().click();
    return this;
  }

  async checkThatChangeMessageShouldBeDisplayed() {
    await this.expect(this.elements.changeResult()).toContainText(
      "Password was changed"
    );
    return this;
  }

  async closeMessage() {
    this.elements.messageCloseBtn().click();
    return this;
  }

  async clickOnLogoutButton() {
    await this.expect(this.elements.logoutLink()).toBeVisible();
    await this.elements.logoutLink().click();
    return HomePage;
  }
}

export default MyAccountPage;
