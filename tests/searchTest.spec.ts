import { type Page, type Browser, test, expect } from "@playwright/test";

import SearchPage from "../pages/searchPage";
import ProductDetailsPage from "../pages/productDetailsPage";
import HomePage from "../pages/homepage";

//AAA Pattern

// [Arrange]
// [Act]
// [Assert]

const password = process.env.PASSWORD;


test.beforeAll(async ({ playwright }) => {
  test.skip(
    !!process.env.PROD,
    "Test intentionally skipped in production due to data dependency."
  );

  // start a server
  // create a db connection
  // reuse a sign in state
});

test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Running ${testInfo.title}`);
  new HomePage(page).visit();
  // open a URL
  // clean up the DB
  // create a page object
  // dismiss a modal
  // load params
});

test.afterAll(async () => {
  console.log("Test file completed.");
  // close a DB connection
});

test.afterEach(async ({ page }, testInfo) => {
  console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);

  if (testInfo.status !== testInfo.expectedStatus)
    console.log(`Did not run as expected, ended up at ${page.url()}`);
  // clean up all the data we created for this test through API calls
});

test.describe('Validate Search Functionality', () => {
// test.describe.only('Validate Contact Us Page Functionality', () => {
// test.describe.skip("Validate Contact Us Page Functionality", () => {
  const ProductName = "Apple MacBook Pro 13-inch";

  test("can search for products", async ({ page }) => {
    await test.step("Write a text in the search bar", async () => {
      await new SearchPage(page).productSearch("Apple");
    });

    await test.step("Open the product page", async () => {
      // ...
      await new SearchPage(page).openProductPage()
    });

    await test.step("Check that product page should be opened successfully", async () => {
      // ...
      await new ProductDetailsPage(page).checkThatProductPageShouldBeDisplayed(ProductName);
    });

    // ...
  });

  // test("can search for products with auto-suggest", async ({ page }) => {
  //   await test.step("Write a text in the search bar", async () => {
  //     new SearchPage(page).productSearchUsingAutoSuggest("Mac");
  //   });

  //   await test.step("Check that product page should be opened successfully", async () => {
  //       // ...
  //       new ProductDetailsPage(page).checkThatProductPageShouldBeDisplayed(ProductName);
  //     });

  //   // ...
  // });

});
