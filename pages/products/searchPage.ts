import { type Page, type Locator } from "@playwright/test";

export class SearchPage {
  readonly page: Page;
  readonly searchField: Locator;
  readonly searchButton: Locator;
  readonly productResult: Locator;
  readonly productList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchField = this.page.locator("id=small-searchterms");
    this.searchButton = this.page.locator("button.button-1.search-box-button");
    this.productResult = this.page.locator("div.picture");
    this.productList = this.page.locator("id=ui-id-1");
  }

  async productSearch(productName: string) {
    await this.searchField.fill(productName);
    await this.searchButton.click();
    return this;
  }

  async openProductPage() {
    await this.productResult.first().click();
    return this;
  }

  async productSearchUsingAutoSuggest(searchText: string) {
    await this.searchField.fill(searchText);
    await this.productList.first().click();
    return this;
  }
}
