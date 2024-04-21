# Playwright TS Automation Framework

## About:
This is a demo-project for practising Playwright with Typescript for Automating Nopcommerce Website Test Cases.

## Prerequisites:

You need the following prerequisites installed on your device to be able to run this project:

1. Git -> [Download Git](https://git-scm.com/downloads) or [Download GitHub](https://desktop.github.com/)
2. Visual Studio Code -> [Download VSCode](https://code.visualstudio.com/download)
3. NodeJS -> [Download NodeJS](https://nodejs.org/en/download/)
4. Playwright -> [Installing Playwright for VSCode](https://playwright.dev/docs/getting-started-vscode)
5. allure-playwright -> [Installing allure-playwright reporter](https://www.npmjs.com/package/allure-playwright)

\*Note: Always make sure to download the latest stable version compatible with your OS and CPU architecture.

## Using this project
1. Clone the project using Github Desktop OR run in terminal `git clone https://github.com/mohammedtaher95/playwright-typescript-project.git`.
2. Ensure that you've installed the official Playwright VSCode plugin and ran `npm install` in the project root directory.
3. Open the project folder in VS Code by clicking `File > Open Folder..`
4. Jump to the [Test Execution and Reporting](#reporting) section to execute your code.

## <a name="reporting"></a>Test Execution and Reporting
1. Follow this guide for [Running Tests](https://playwright.dev/docs/getting-started-vscode#running-tests).
2. After Test Execution is completed, you will find all the execution reports under this directory `reports`.
3. You can generate and serve a temporary allure report by opening a new terminal session in the project root directory [``` Terminal > New Terminal```] and running this command to generate the report `allure generate reports/allure-results -o allure-report --clean` and then this command to open the report `allure open allure-report`.
4. You can open the native playwright-report by opening this file in your preferred browser `reports/playwright-report/index.html`
5. You can download the `trace.zip` file from any of the reports, or explore them manually under the `reports/test-artifacts` directory. To open a playwright trace report, you should use your preferred browser to navigate to [Playwright Trace viewer](https://trace.playwright.dev/), and then drag and drop the trace archive file to open it

## External References

- [Playwright User Guide](https://playwright.dev/docs/test-annotations)
- [allure-playwright](https://github.com/allure-framework/allure-js/blob/main/packages/allure-playwright/README.md)
- [Getting Started with VS Code](https://playwright.dev/docs/getting-started-vscode)
- [Element Identification / Selectors](https://playwright.dev/docs/locators)
- [Page Object Model Design Pattern](https://playwright.dev/docs/pom)
- [Running Tests](https://playwright.dev/docs/running-tests)