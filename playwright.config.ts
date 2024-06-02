import { defineConfig, devices } from "@playwright/test";
const authHeader = "Basic " + btoa("admin:admin");

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */

// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 2,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ["list"],
    ["html", { open: "always", outputFolder: "reports/playwright-report" }],
    [
      "allure-playwright",
      { open: "always", outputFolder: "reports/allure-results" },
    ],
    ["json", { outputFile: "reports/json-report/test-results.json" }],
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: "http://demo.nopcommerce.com",

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    headless: false,
    ignoreHTTPSErrors: true,
    actionTimeout: 10000,
    navigationTimeout: 10000,
    bypassCSP: true,
    javaScriptEnabled: true,
    // viewport: { width: 1280, height: 720 },
    // video: 'on-first-retry',
    extraHTTPHeaders: {
      Authorization: authHeader,
    },
  },

  // timeout here is for actions, ex: click
  globalTimeout: 200000,
  timeout: 200000, //https://playwright.dev/docs/test-timeouts

  // for expect, it has its own timeout
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 200000,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },

    //  // Example only
    //  {
    //   name: 'local',
    //   use: {
    //     baseURL: baseEnvUrl.local.home,
    //   },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
