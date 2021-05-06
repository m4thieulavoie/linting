module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-prettier"],
  plugins: ["stylelint-scss"],
  rules: {
    "color-named": [
      "never",
      {
        severity: "error",
      },
    ],
    "color-hex-length": null,
  },
};
