import { test } from "@playwright/test";
import { HomePage } from "../pages/common/homepage";
import { ContactUsPage } from "../pages/common/contactUsPage";
import { UserFormData } from "../utils/UserFormData";

// AAA Pattern

// [Arrange]
// [Act]
// [Assert]

// const password = process.env.PASSWORD;

let userFormData: UserFormData;
let homepage: HomePage;
let contactUsPage: ContactUsPage;

test.beforeAll(async ({ playwright }) => {
  // test.skip(
  //   !!process.env.PROD,
  //   "Test intentionally skipped in production due to data dependency.",
  // );
  // start a server
  // create a db connection
  // reuse a sign in state
});

test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Running ${testInfo.title}`);

  userFormData = new UserFormData();
  homepage = new HomePage(page);
  contactUsPage = new ContactUsPage(page);

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

test.describe("Validate Contact Us Page Functionality", () => {
  // test.describe.only('Validate Contact Us Page Functionality', () => {
  // test.describe.skip("Validate Contact Us Page Functionality", () => {
  test("It can contact website owner", async ({ page }) => {
    const fullName = await userFormData.getFullName();
    const email = await userFormData.getEmail();
    const enquiry = await userFormData.getMessage();

    await test.step("Navigate to Contact us page", async () => {
      await homepage.navigateToContactUsPage();
    });

    await test.step("Fill the form", async () => {
      // ...
      await contactUsPage.fillContactInfoForm(fullName, email, enquiry);
    });

    await test.step("Submit the form and check the success message", async () => {
      // ...
      await contactUsPage.clickOnSubmitButton();
      await contactUsPage.checkThatSuccessMessageShouldBeDisplayed();
    });

    // ...
  });
});
