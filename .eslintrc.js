module.exports = {
  extends: "prettier",
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "functional", "import", "inclusive-language"],
  rules: {
    "import/order": "error",
    "arrow-body-style": ["error", "as-needed"],
    "functional/prefer-readonly-type": [
      "error",
      {
        ignoreClass: true,
      },
    ],
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/prefer-readonly-parameter-types": [
      "error",
      {
        ignoreInferredTypes: true,
        checkParameterProperties: false,
      },
    ],
    "inclusive-language/use-inclusive-words": "error"
  },
  parserOptions: {
    project: ["./tsconfig.json"],
  },
};
