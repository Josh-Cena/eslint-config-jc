module.exports = {
  globals: {
    JSX: true,
  },
  overrides: [
    {
      files: ["**/*.{js,cjs}"],
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-require-imports": "off",
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/adjacent-overload-signatures": "error",

    // I wish this rule can be more flexible to allow T[] where T is a union
    "@typescript-eslint/array-type": "off",

    "@typescript-eslint/ban-ts-comment": "error",

    "@typescript-eslint/ban-types": "error",

    // Index signatures allows annotating the semantics of the key, while record
    // is more concise
    "@typescript-eslint/consistent-indexed-object-style": "off",

    "@typescript-eslint/consistent-type-assertions": [
      "error",
      {
        assertionStyle: "as",
        objectLiteralTypeAssertions: "allow-as-parameter",
      },
    ],

    // We sometimes allow declaration merging
    "@typescript-eslint/consistent-type-definitions": "off",

    // Note that currently autofixer doesn't fix this to inline type import
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { disallowTypeAnnotations: false, prefer: "type-imports" },
    ],

    "@typescript-eslint/default-param-last": "error",

    // No—too verbose
    "@typescript-eslint/explicit-function-return-type": "off",

    // Defaulting to public makes sense
    "@typescript-eslint/explicit-member-accessibility": "off",

    "@typescript-eslint/explicit-module-boundary-types": "warn",

    // Otherwise one can write `let a: string;` which can be problematic.
    "@typescript-eslint/init-declarations": ["error", "always"],

    // TODO figure out how this should be configured
    "@typescript-eslint/member-ordering": 0,

    "@typescript-eslint/method-signature-style": ["error", "property"],

    "@typescript-eslint/no-array-constructor": "error",

    // This doesn't make much sense to me
    "@typescript-eslint/no-confusing-non-null-assertion": "off",

    "@typescript-eslint/no-dupe-class-members": "error",

    "@typescript-eslint/no-duplicate-imports": "error",

    // This can be useful for dynamic object transformations
    "@typescript-eslint/no-dynamic-delete": "off",

    // Sometimes we do want no-ops.
    "@typescript-eslint/no-empty-function": "off",

    "@typescript-eslint/no-empty-interface": [
      "error",
      {
        allowSingleExtends: true,
      },
    ],

    "@typescript-eslint/no-explicit-any": "warn",

    "@typescript-eslint/no-extra-non-null-assertion": "error",

    // > You can disable this rule if you don’t have anyone who would make these
    // > kinds of mistakes on your team or if you use classes as namespaces.
    "@typescript-eslint/no-extraneous-class": "off",

    // Annotating parameters makes the code more uniform
    "@typescript-eslint/no-inferrable-types": [
      "error",
      { ignoreParameters: true },
    ],

    "@typescript-eslint/no-invalid-this": "error",

    "@typescript-eslint/no-invalid-void-type": "error",

    "@typescript-eslint/no-loop-func": "warn",

    "@typescript-eslint/no-loss-of-precision": "error",

    // We prefer using comments in case the code is not self-explanatory
    "@typescript-eslint/no-magic-numbers": "off",

    "@typescript-eslint/no-misused-new": "error",

    "@typescript-eslint/no-namespace": "error",

    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",

    "@typescript-eslint/no-non-null-asserted-optional-chain": "error",

    // It's useful.
    "@typescript-eslint/no-non-null-assertion": "off",

    "@typescript-eslint/no-parameter-properties": "error",

    "@typescript-eslint/no-redeclare": "error",

    "@typescript-eslint/no-require-imports": "error",

    "@typescript-eslint/no-shadow": ["error", { ignoreOnInitialization: true }],

    "@typescript-eslint/no-this-alias": "warn",

    "@typescript-eslint/no-type-alias": "off",

    "@typescript-eslint/no-unnecessary-type-constraint": "error",

    // Tagged templates can have side effects, e.g. logging
    "@typescript-eslint/no-unused-expressions": [
      "error",
      { allowTaggedTemplates: true },
    ],

    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        args: "after-used",
        ignoreRestSiblings: true,
        vars: "all",
      },
    ],

    // This reports a lot of valid cases, e.g. function declarations
    // TypeScript does a much better job
    "@typescript-eslint/no-use-before-define": "off",

    "@typescript-eslint/no-useless-constructor": "error",

    "@typescript-eslint/no-var-requires": "error",

    "@typescript-eslint/prefer-as-const": "error",

    "@typescript-eslint/prefer-enum-initializers": "error",

    "@typescript-eslint/prefer-for-of": "error",

    "@typescript-eslint/prefer-function-type": "error",

    "@typescript-eslint/prefer-literal-enum-member": "error",

    "@typescript-eslint/prefer-namespace-keyword": "error",

    "@typescript-eslint/prefer-optional-chain": "error",

    "@typescript-eslint/prefer-ts-expect-error": "error",

    "@typescript-eslint/triple-slash-reference": "error",

    // We use strict TS options instead.
    "@typescript-eslint/typedef": "off",

    "@typescript-eslint/unified-signatures": "error",
  },
};
