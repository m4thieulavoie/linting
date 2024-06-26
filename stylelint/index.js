module.exports = {
  extends: ["stylelint-config-standard", "stylelint-order"],
  plugins: ["stylelint-scss", "stylelint-order"],
  rules: {
    "color-named": [
      "never",
      {
        severity: "error",
      },
    ],
    "color-hex-length": null,
    "order/order": ["custom-properties", "declarations"],
    "order/properties-alphabetical-order": true,
    "max-nesting-depth": 3,
    "selector-no-qualifying-type": null,
    "alpha-value-notation": "number",
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "no-descending-specificity": null,
    "function-no-unknown": [true, { ignoreFunctions: ["lighten", "darken"] }],
  },
  customSyntax: "postcss-scss",
};
