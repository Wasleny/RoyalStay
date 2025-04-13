module.exports = {
    extends: "stylelint-config-standard",
    plugins: ["stylelint-scss"],
    customSyntax: "postcss-scss",
    rules: {
      "at-rule-no-unknown": null,
      "scss/at-rule-no-unknown": true,
      "block-no-empty": true,
      "color-no-invalid-hex": true,
      "declaration-block-no-duplicate-properties": true,
      "property-no-unknown": true,
      "selector-type-no-unknown": true,
      "string-no-newline": true,
      "unit-no-unknown": true,
      "scss/dollar-variable-pattern": "^[_]?[a-z]+([a-z0-9-]+)*$",
      "scss/percent-placeholder-pattern": "^[_]?[a-z]+([a-z0-9-]+)*$",
      "no-invalid-position-at-import-rule": null,
    }
  };
  