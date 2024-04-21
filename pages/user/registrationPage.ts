import { type Page, type Locator, Expect } from "@playwright/test";

class RegistrationPage {

  readonly page: Page;
  readonly expect: Expect;

  elements = {
    genderMaleRadioBtn: () => this.page.locator("#gender-male"),
    firstName: () => this.page.locator("#FirstName"),
    lastName: () => this.page.locator("#LastName"),
    emailField: () => this.page.locator("#Email"),
    passwordField: () => this.page.locator("#Password"),
    confirmPassword: () => this.page.locator("#ConfirmPassword"),
    registerBtn: () => this.page.locator("#register-button"),
    successMessage: () => this.page.locator(".result"),
    continueBtn: () => this.page.locator("a.button-1.register-continue-button"),
  };

  constructor(page:Page){
    this.page = page;
  }

  checkThatUserRegistrationPageIsLoaded() {}

  async fillUserRegistrationForm(firstName, lastName, email, password) {
    this.elements.genderMaleRadioBtn().click();
    this.elements.firstName().fill(firstName);
    this.elements.lastName().fill(lastName);
    this.elements.emailField().fill(email);
    this.elements.passwordField().fill(password);
    this.elements.confirmPassword().fill(password);
    return this;
  }

  async clickOnRegisterButton() {
    await this.elements.registerBtn().click();
    return this;
  }

  async validateThatSuccessMessageIsDisplayed() {
    await this.expect(this.elements.continueBtn()).toBeVisible();
    return this;
  }
}

export default RegistrationPage;
