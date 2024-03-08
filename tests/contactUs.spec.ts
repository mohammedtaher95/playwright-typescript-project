import { type Page, type Browser, test, expect } from "@playwright/test";
import HomePage from "../pages/homepage";
import ContactUsPage from "../pages/contactUsPage";
import UserFormData from "../utils/UserFormData";

//AAA Pattern

// [Arrange]
// [Act]
// [Assert]

const password = process.env.PASSWORD;
const fullName = UserFormData.getFullName();
const email = UserFormData.getEmail();
const enquiry = UserFormData.getMessage();


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

test.describe('Validate Contact Us Page Functionality', () => {
// test.describe.only('Validate Contact Us Page Functionality', () => {
// test.describe.skip("Validate Contact Us Page Functionality", () => {
  test("It can contact website owner", async ({ page }) => {
    await test.step("Navigate to Contact us page", async () => {
      new HomePage(page).navigateToContactUsPage();
    });

    await test.step("Fill the form", async () => {
      // ...
      new ContactUsPage(page).fillContactInfoForm(fullName, email, enquiry);
    });

    await test.step("Submit the form and check the success message", async () => {
        // ...
        (await new ContactUsPage(page).clickOnSubmitButton()).checkThatSuccessMessageShouldBeDisplayed;
      });

    // ...
  });

});
