import globals from "globals";

import path from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);
const compat = new FlatCompat({
  baseDirectory: _dirname,
  recommendedConfig: pluginJs.configs.recommended,
});

export default [
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...compat.extends("standard-with-typescript"),
  ...compat.extends("eslint:recommended"),
  ...compat.extends("plugin:@typescript-eslint/recommended"),
  ...compat.extends("plugin:@typescript-eslint/stylistic"),
  ...compat.extends("plugin:playwright/recommended"),
  ...compat.extends("prettier"),

  {
    files: [
      "pages/**/**/*.{ts,js,tsx,jsx}",
      "steps/**/**/*.{ts,js,tsx,jsx}",
      "flows/**/**/*.{ts,js,tsx,jsx}",
      "utils/**/**/*.{ts,js,tsx,jsx}",
    ],
    rules: {
      // project: "off"
      "max-lines": [
        "error",
        { max: 200, skipBlankLines: true, skipComments: true },
      ],
      "max-lines-per-function": [
        "error",
        { max: 200, skipBlankLines: true, skipComments: true },
      ],
      complexity: ["error", 10],
      "no-console": "error",
      "no-alert": "error",
      camelcase: "error",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "playwright/no-wait-for-timeout": "off",
    },
  },

  {
    files: ["tests/**/**/*.spec.{ts,js,tsx,jsx}"],
    rules: {
      "playwright/no-wait-for-timeout": "error",
      "playwright/no-standalone-expect": "error",
      "playwright/no-skipped-test": "off",
      "playwright/expect-expect": "off",
      // [
      //   "error",
      //   {
      //     "assertFunctionNames": [value =>
      //       ['checkThat', 'verifyThat'].some(element => value.includes(element))
      //     ]
      //   }
      // ],
    },
  },

  {
    ignores: [
      "node_modules/",
      "test-results/",
      "playwright-report",
      "allure-report",
      "summary.json",
      "playwright.config.ts",
      "reports/",
      ".vscode/*",
      ".yarn/",
    ],
  },
];
