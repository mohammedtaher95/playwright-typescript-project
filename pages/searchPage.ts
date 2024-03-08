import { type Page, type Locator, Expect } from "@playwright/test";
import ProductDetailsPage from "./productDetailsPage";

class SearchPage {
  
  readonly page: Page;
  readonly expect: Expect;

  elements = {
    searchField: () => this.page.locator("id=small-searchterms"),
    searchButton: () => this.page.locator("button.button-1.search-box-button"),
    productResult: () => this.page.locator("div.picture"),
    productList: () => this.page.locator("id=ui-id-1"),
  };

  constructor (page: Page){
    this.page = page;
  }

  async productSearch(productName) {
    await this.elements.searchField().fill(productName);
    await this.elements.searchButton().click();
    return this;
  }

  async openProductPage() {
    await this.elements.productResult().first().click();
    return new ProductDetailsPage(this.page);
  }

  async productSearchUsingAutoSuggest(searchText) {
    await this.elements.searchField().fill(searchText);
    await this.elements.productList().first().click();
    return new ProductDetailsPage(this.page);
  }
}

export default SearchPage;
