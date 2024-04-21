import {type Page, type Locator , Expect} from '@playwright/test'

class ContactUsPage {

  readonly page:Page;
  readonly expect:Expect;

  // readonly nameField: Locator;
  // readonly emailField: Locator;
  // readonly enquiryField: Locator;
  // readonly submitButton: Locator;
  // readonly successMessage: Locator;

  constructor (page: Page){
    this.page = page;
  }

  elements = {
    
    nameField: () => this.page.locator("id=FullName"),
    emailField: () => this.page.locator("id=Email"),
    enquiryField: () => this.page.locator("id=Enquiry"),
    submitBtn: () => this.page.getByRole('button',{name: "Submit"}),
    successMessage: () => this.page.locator("div.result"),
  };

  successMessage = "Your enquiry has been successfully sent to the store owner.";

  async fillContactInfoForm(name, email, enquiry) {
    await this.elements.nameField().fill(name);
    await this.elements.emailField().fill(email);
    await this.elements.enquiryField().fill(enquiry);
    return this;
  }

  async clickOnSubmitButton() {
    await this.elements.submitBtn().click();
    return this;
  }

  async checkThatSuccessMessageShouldBeDisplayed() {
    await this.expect(this.elements.successMessage()).toHaveText(this.successMessage);
    return this;
  }
}

export default ContactUsPage;
