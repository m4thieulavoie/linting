module.exports = {
  extends: "prettier",
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "arrow-body-style": ["error", "as-needed"],
  },
};
