const globals = require("globals");
const js = require("@eslint/js");

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "script",
      globals: {
        ...globals.browser,
        ...globals.jquery,
        Cookies: "readonly",
        I18n: "readonly",
        L: "readonly",
        OSM: "writable",
        Matomo: "readonly",
        Qs: "readonly",
        Turbo: "readonly",
        updateLinks: "readonly"
      }
    },
    rules: {
      "accessor-pairs": "error",
      "array-bracket-newline": ["error", "consistent"],
      "array-bracket-spacing": "error",
      "array-callback-return": "error",
      "block-scoped-var": "error",
      "block-spacing": "error",
      "brace-style": ["error", "1tbs", { allowSingleLine: true }],
      "comma-dangle": "error",
      "comma-spacing": "error",
      "comma-style": "error",
      "computed-property-spacing": "error",
      "curly": ["error", "multi-line", "consistent"],
      "dot-location": ["error", "property"],
      "dot-notation": "error",
      "eol-last": "error",
      "eqeqeq": ["error", "smart"],
      "func-call-spacing": "error",
      "indent": ["error", 2, {
        SwitchCase: 1,
        VariableDeclarator: "first",
        FunctionDeclaration: { parameters: "first" },
        FunctionExpression: { parameters: "first" },
        CallExpression: { arguments: "first" }
      }],
      "key-spacing": "error",
      "keyword-spacing": "error",
      "no-alert": "warn",
      "no-array-constructor": "error",
      "no-caller": "error",
      "no-console": "warn",
      "no-div-regex": "error",
      "no-eq-null": "error",
      "no-eval": "error",
      "no-extend-native": "error",
      "no-extra-bind": "error",
      "no-extra-label": "error",
      "no-floating-decimal": "error",
      "no-implicit-coercion": "warn",
      "no-implicit-globals": "warn",
      "no-implied-eval": "error",
      "no-invalid-this": "error",
      "no-iterator": "error",
      "no-labels": "error",
      "no-label-var": "error",
      "no-lone-blocks": "error",
      "no-lonely-if": "error",
      "no-loop-func": "error",
      "no-mixed-operators": "error",
      "no-multiple-empty-lines": "error",
      "no-multi-spaces": "error",
      "no-multi-str": "error",
      "no-negated-condition": "error",
      "no-nested-ternary": "error",
      "no-new": "error",
      "no-new-func": "error",
      "no-new-object": "error",
      "no-new-wrappers": "error",
      "no-octal-escape": "error",
      "no-param-reassign": "error",
      "no-process-env": "error",
      "no-proto": "error",
      "no-script-url": "error",
      "no-self-compare": "error",
      "no-sequences": "error",
      "no-throw-literal": "error",
      "no-trailing-spaces": "error",
      "no-undef-init": "error",
      "no-undefined": "error",
      "no-unmodified-loop-condition": "error",
      "no-unneeded-ternary": "error",
      "no-unused-expressions": "off",
      "no-unused-vars": ["error", { caughtErrors: "none" }],
      "no-useless-call": "error",
      "no-useless-concat": "error",
      "no-useless-return": "error",
      "no-use-before-define": ["error", { functions: false }],
      "no-void": "error",
      "no-warning-comments": "warn",
      "no-whitespace-before-property": "error",
      "object-curly-newline": ["error", { consistent: true }],
      "object-curly-spacing": ["error", "always"],
      "object-property-newline": ["error", { allowAllPropertiesOnSameLine: true }],
      "operator-linebreak": ["error", "after"],
      "padded-blocks": ["error", "never"],
      "quote-props": ["error", "consistent-as-needed", { keywords: true, numbers: true }],
      "quotes": ["error", "double"],
      "radix": ["error", "always"],
      "semi": ["error", "always"],
      "semi-spacing": "error",
      "semi-style": "error",
      "space-before-blocks": "error",
      "space-before-function-paren": ["error", { named: "never" }],
      "space-in-parens": "error",
      "space-infix-ops": "error",
      "space-unary-ops": "error",
      "switch-colon-spacing": "error",
      "wrap-iife": "error",
      "wrap-regex": "error",
      "yoda": "error"
    }
  },
  {
    // Additional configuration for test files
    files: ["test/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.mocha,
        expect: "readonly",
        assert: "readonly",
        should: "readonly"
      }
    }
  },
  {
    files: ["config/eslint.js"],
    languageOptions: {
      ecmaVersion: 2019,
      sourceType: "commonjs",
      globals: {
        ...globals.commonjs
      }
    }
  }
];
