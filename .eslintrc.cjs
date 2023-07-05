/* eslint-disable no-undef */
module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:storybook/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": "warn",
    "@typescript-eslint/no-var-requires": "off",
    "react/no-unescaped-entities": "off",
    "react/prop-types": "off",
  },
  overrides: [
    {
      files: ["*.stories.{ts,tsx}"],
      rules: {
        "react-refresh/only-export-components": "off",
      },
    },
  ],
};
