import { type Page, type Locator, expect } from "@playwright/test";

export class ContactUsPage {
  readonly page: Page;
  readonly nameField: Locator;
  readonly emailField: Locator;
  readonly enquiryField: Locator;
  readonly submitButton: Locator;
  readonly successMessage: Locator;
  // let successMessageText = "Your enquiry has been successfully sent to the store owner.";

  constructor(page: Page) {
    this.page = page;
    this.nameField = this.page.locator("id=FullName");
    this.emailField = this.page.locator("id=Email");
    this.enquiryField = this.page.locator("id=Enquiry");
    this.submitButton = this.page.getByRole("button", { name: "Submit" });
    this.successMessage = this.page.locator("div.result");
  }

  async fillContactInfoForm(fullName: string, email: string, enquiry: string) {
    await this.nameField.fill(fullName);
    await this.emailField.fill(email);
    await this.enquiryField.fill(enquiry);
    return this;
  }

  async clickOnSubmitButton() {
    await this.submitButton.click();
    return this;
  }

  async checkThatSuccessMessageShouldBeDisplayed() {
    await expect(this.successMessage).toHaveText(
      "Your enquiry has been successfully sent to the store owner.",
    );
    return this;
  }
}
