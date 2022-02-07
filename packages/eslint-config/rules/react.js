module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "react-hooks"],
  rules: {
    "react/boolean-prop-naming": "off",

    "react/button-has-type": [
      "error",
      {
        button: true,
        reset: false, // MDN: This behavior tends to annoy users
        submit: true,
      },
    ],

    // Checked by TypeScript
    "react/default-props-match-prop-types": "off",

    // Sometimes we do need `props` as a whole, e.g. for spreading
    "react/destructuring-assignment": "off",

    // Isn't useful
    "react/display-name": ["off", { ignoreTranspilerName: false }],

    // Checked by TypeScript
    "react/forbid-foreign-prop-types": "error",

    // Checked by TypeScript
    "react/forbid-prop-types": "off",

    // Note that it false-positives for `const Foo: Comp = () => <></>`
    "react/function-component-definition": [
      "warn",
      {
        namedComponents: "function-declaration",
        unnamedComponents: "arrow-function",
      },
    ],

    // TODO unreleased feature
    // 'react/hook-use-state': 'warn',

    // 'react/iframe-missing-sandbox': 'error',

    // We don't use class components much.
    "react/no-access-state-in-setstate": "error",

    // Enforced by Prettier
    "react/no-adjacent-inline-elements": "off",

    // In some cases this is fine (e.g. static websites)
    "react/no-array-index-key": "error",

    "react/no-arrow-function-lifecycle": "error",

    "react/no-children-prop": "error",

    "react/no-danger": "warn",

    "react/no-danger-with-children": "error",

    "react/no-deprecated": "error",

    "react/no-did-mount-set-state": "error",

    "react/no-did-update-set-state": "error",

    "react/no-direct-mutation-state": "error",

    "react/no-find-dom-node": "error",

    "react/no-invalid-html-attribute": "error",

    "react/no-is-mounted": "error",

    // It's useful for encapsulation.
    "react/no-multi-comp": "off",

    "react/no-namespace": "error",

    "react/no-redundant-should-component-update": "error",

    "react/no-render-return-value": "error",

    "react/no-set-state": "off",

    "react/no-string-refs": "error",

    "react/no-this-in-sfc": "error",

    "react/no-typos": "error",

    // The original text allows for things like spellchecking and searching
    "react/no-unescaped-entities": "off",

    "react/no-unknown-property": "error",

    "react/no-unsafe": "error",

    "react/no-unstable-nested-components": ["error", { allowAsProps: true }],

    "react/no-unused-class-component-methods": "error",

    // Checked by TypeScript
    "react/no-unused-prop-types": "off",

    "react/no-unused-state": "error",

    "react/no-will-update-set-state": "error",

    "react/prefer-es6-class": "error",

    // Checked by TypeScript
    "react/prefer-exact-props": "off",

    "react/prefer-read-only-props": "warn",

    "react/prefer-stateless-function": "error",

    // Checked by TypeScript
    "react/prop-types": "off",

    // Checked by TypeScript; we may also use JSX runtime
    "react/react-in-jsx-scope": "off",

    // Checked by TypeScript
    "react/require-default-props": "off",

    // We mostly use function components, and this optimization is not critical
    "react/require-optimization": "off",

    "react/require-render-return": "error",

    "react/self-closing-comp": "error",

    "react/sort-comp": "off",

    "react/sort-prop-types": "off",

    "react/state-in-constructor": "error",

    "react/static-property-placement": "off",

    "react/style-prop-object": "error",

    "react/void-dom-elements-no-children": "error",

    "react-hooks/exhaustive-deps": "error",

    "react-hooks/rules-of-hooks": "error",
  },
  settings: {
    react: {
      pragma: "React",
      version: "17",
    },
  },
};
