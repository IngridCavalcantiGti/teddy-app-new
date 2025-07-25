import storybook from "eslint-plugin-storybook"

import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import tseslint from "typescript-eslint"
import prettier from "eslint-plugin-prettier"
import { globalIgnores } from "eslint/config"

export default tseslint.config(
  [
    globalIgnores(["dist"]),
    {
      files: ["src/**/*.{ts,tsx}", ".storybook/**/*.{ts,tsx}"],
      extends: [
        js.configs.recommended,
        tseslint.configs.recommended,
        reactHooks.configs["recommended-latest"],
        reactRefresh.configs.vite,
      ],
      plugins: {
        prettier,
      },
      rules: {
        "prettier/prettier": [
          "error",
          {
            singleQuote: false,
            tabWidth: 2,
            useTabs: false,
          },
        ],
      },
      languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser,
      },
    },
  ],
  storybook.configs["flat/recommended"]
)
