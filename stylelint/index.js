module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-prettier",
    "stylelint-order",
  ],
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
    "string-quotes": "double",
    "max-nesting-depth": 3,
    "selector-no-qualifying-type": null,
  },
};
