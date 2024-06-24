import { type Page, type Locator, expect } from "@playwright/test";

export class RegistrationPage {
  readonly page: Page;
  readonly genderMaleRadioBtn: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly emailField: Locator;
  readonly passwordField: Locator;
  readonly confirmPassword: Locator;
  readonly registerBtn: Locator;
  readonly successMessage: Locator;
  readonly continueBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.genderMaleRadioBtn = this.page.locator("#gender-male");
    this.firstName = this.page.locator("#FirstName");
    this.lastName = this.page.locator("#LastName");
    this.emailField = this.page.locator("#Email");
    this.passwordField = this.page.locator("#Password");
    this.confirmPassword = this.page.locator("#ConfirmPassword");
    this.registerBtn = this.page.locator("#register-button");
    this.successMessage = this.page.locator(".result");
    this.continueBtn = this.page.locator("a.button-1.register-continue-button");
  }

  async checkThatUserRegistrationPageIsLoaded() {
    await expect(this.firstName).toBeVisible();
    return this;
  }

  async fillUserRegistrationForm(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
  ) {
    await this.genderMaleRadioBtn.click();
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.confirmPassword.fill(password);
    return this;
  }

  async clickOnRegisterButton() {
    await this.registerBtn.click();
    return this;
  }

  async validateThatSuccessMessageIsDisplayed() {
    await expect(this.continueBtn).toBeVisible();
    return this;
  }
}
