import { type Page, type Locator, Expect } from "@playwright/test";
import contactUs from "./contactUsPage";
import loginPage from "../user/loginPage";
import myAccountPage from "../user/myAccountPage";
import registrationPage from "../user/registrationPage";

class HomePage {
  readonly page: Page;
  readonly expect: Expect;

  elements = {
    myAccountLink: () => this.page.locator("a.ico-account"),
  };

  constructor(page: Page) {
    this.page = page;
  }

  async visit() {
    await this.page.goto("/");
    return this;
  }

  async navigateToRegistrationPage() {
    await this.page.goto("/register");
    return registrationPage;
  }

  async navigateToLoginPage() {
    await this.page.goto("/login");
    return loginPage;
  }

  async navigateToMyAccountPage() {
    // this.elements.myAccountLink().click();
    await this.page.goto("/customer/info");
    return myAccountPage;
    //
  }

  async navigateToContactUsPage() {
    await this.page.goto("/contactus");
    return contactUs;
  }
}

export default HomePage;
