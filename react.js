module.exports = {
  extends: ["react-app", "plugin:prettier/recommended"],
  plugins: ["simple-import-sort"],
  rules: {
    "simple-import-sort/sort": "error",
    "react/boolean-prop-naming": [
      "warn",
      { validateNested: true, rule: "^(is|has)[A-Z]([A-Za-z0-9]?)+" },
    ], // Enforce consistent boolean naming
    "react/destructuring-assignment": ["warn", "always"],
    "react/function-component-definition": [
      "warn",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "function-expression",
      },
    ],
    "react/no-adjacent-inline-elements": "warn",
    "react/no-array-index-key": "warn",
    "react/no-danger": "error",
    "react/no-deprecated": "error",
    "react/no-this-in-sfc": "warn",
    "react/prefer-stateless-function": "warn",
    "react/forbid-prop-types": [
      "warn",
      {
        forbid: ["any", "array", "object"],
        checkContextTypes: true,
        checkChildContextTypes: true,
      },
    ],
    "react/jsx-handler-names": [
      "warn",
      {
        eventHandlerPrefix: "handle",
        eventHandlerPropPrefix: "on",
      },
    ],
    "react/prop-types": ["warn", { ignore: ["children"] }],
    "react/jsx-pascal-case": [
      "error",
      {
        allowAllCaps: true,
        ignore: [],
      },
    ],
    "react/sort-prop-types": [
      "warn",
      {
        ignoreCase: true,
        callbacksLast: false,
        requiredFirst: false,
        sortShapeProp: true,
      },
    ],
    "react/jsx-sort-props": [
      "warn",
      {
        ignoreCase: true,
        callbacksLast: false,
        shorthandFirst: false,
        shorthandLast: false,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ],
    "react/jsx-sort-default-props": [
      "warn",
      {
        ignoreCase: true,
      },
    ],
    "react/no-did-update-set-state": "error",
    "react/no-will-update-set-state": "error",
    "react/no-direct-mutation-state": "off",
    "react/no-set-state": "off",
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
  },
};
