import { type Page, type Locator, expect } from "@playwright/test";

export class MyAccountPage {
  readonly page: Page;
  readonly changePasswordLink: Locator;
  readonly customerInfo: Locator;
  readonly oldPasswordTxt: Locator;
  readonly newPasswordTxt: Locator;
  readonly confirmPasswordTxt: Locator;
  readonly changePasswordBtn: Locator;
  readonly changeResult: Locator;
  readonly messageCloseBtn: Locator;
  readonly logoutLink: Locator;


  constructor(page: Page) {
    this.page = page;
    this.changePasswordLink = this.page.locator("xpath=//a[@href='/customer/changepassword']");
    this.customerInfo = this.page.locator("xpath=//a[@href='/customer/info']");
    this.oldPasswordTxt = this.page.locator("#OldPassword");
    this.newPasswordTxt = this.page.locator("#NewPassword");
    this.confirmPasswordTxt = this.page.locator("#ConfirmNewPassword");
    this.changePasswordBtn = this.page.locator("button.button-1.change-password-button");
    this.changeResult = this.page.locator("p.content");
    this.messageCloseBtn = this.page.locator("span.close");
    this.logoutLink = this.page.locator("a.ico-logout");
  }

  async openChangePasswordpage() {
    await this.changePasswordLink.click();
    return this;
  }

  async changePassword(oldPass: string, newPass: string) {
    await this.oldPasswordTxt.fill(oldPass);
    await this.newPasswordTxt.fill(newPass);
    await this.confirmPasswordTxt.fill(newPass);
    return this;
  }

  async clickOnConfirm() {
    await this.changePasswordBtn.click();
    return this;
  }

  async checkThatChangeMessageShouldBeDisplayed() {
    await expect(this.changeResult).toContainText("Password was changed",);
    return this;
  }

  async closeMessage() {
    await this.messageCloseBtn.click();
    return this;
  }

  async clickOnLogoutButton() {
    await expect(this.logoutLink).toBeVisible();
    await this.logoutLink.click();
    return this;
  }
}
