import { type Page, type Locator, Expect } from "@playwright/test";

class ProductDetailsPage {

  readonly page: Page;
  readonly expect: Expect;

  elements = {
    productNameBreadCrumb: () => this.page.locator("strong.current-item"),
    emailButton: () => this.page.locator("button.button-2.email-a-friend-button"),
    productPriceLabel: () => this.page.locator("#price-value-4"),
    reviewHyperlink: () => this.page.locator("xpath=(//a[@href='/productreviews/4'])[2]")
  };

  constructor(page:Page){
    this.page = page;
  }

  async checkThatProductPageShouldBeDisplayed(productName) {
    await this.expect(this.elements.productNameBreadCrumb()).toContainText(productName);
    return this;
  }

  async emailFriend() {
    await this.elements.emailButton().click();
  }

  async addReview() {
    await this.elements.reviewHyperlink().click();
  }

  async checkCurrency(currency) {
    await this.expect(this.elements.productPriceLabel()).toContainText(currency);
  }
}

export default ProductDetailsPage;
