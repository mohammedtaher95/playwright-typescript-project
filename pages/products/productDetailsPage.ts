import { type Page, type Locator, expect } from "@playwright/test";

export class ProductDetailsPage {
  readonly page: Page;
  readonly productNameBreadCrumb: Locator;
  readonly emailButton: Locator;
  readonly productPriceLabel: Locator;
  readonly reviewHyperlink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productNameBreadCrumb = this.page.locator("strong.current-item");
    this.emailButton = this.page.locator(
      "button.button-2.email-a-friend-button",
    );
    this.productPriceLabel = this.page.locator("#price-value-4");
    this.reviewHyperlink = this.page.locator(
      "xpath=(//a[@href='/productreviews/4'])[2]",
    );
  }

  async checkThatProductPageShouldBeDisplayed(productName: string) {
    await expect(this.productNameBreadCrumb).toContainText(productName);
    return this;
  }

  async emailFriend() {
    await this.emailButton.click();
  }

  async addReview() {
    await this.reviewHyperlink.click();
  }

  async checkCurrency(currency: string) {
    await expect(this.productPriceLabel).toContainText(currency);
  }
}
