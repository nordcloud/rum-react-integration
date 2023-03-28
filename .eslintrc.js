/* Copyright (c) 2021-2023 Nordcloud Oy or its affiliates. All Rights Reserved. */

/** @type {import("@types/eslint").Linter.Config} */
module.exports = {
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],

  parserOptions: { tsconfigRootDir: __dirname },

  settings: {
    jest: {
      version: "27",
    },
  },

  rules: {
    "@typescript-eslint/no-var-requires": "warn",
    "@typescript-eslint/ban-types": "warn",
    "@typescript-eslint/no-inferrable-types": "warn",
    "@typescript-eslint/explicit-module-boundary-types": "warn",
    "@typescript-eslint/no-var-requires": "warn",
    "@typescript-eslint/explicit-module-boundary-types": "warn",
    "@typescript-eslint/no-inferrable-types": "warn",
    "@typescript-eslint/no-empty-function": "warn",
    "@typescript-eslint/ban-ts-comment": "off"
  }
};
