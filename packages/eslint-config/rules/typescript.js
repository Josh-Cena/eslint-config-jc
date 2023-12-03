module.exports = {
  globals: {
    JSX: true,
  },
  overrides: [
    {
      files: ["**/*.{js,cjs,mjs,jsx}"],
      rules: {
        "@typescript-eslint/default-param-last": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-require-imports": "off",
        "@typescript-eslint/no-var-requires": "off",
      },
    },
    {
      files: ["**/*.{ts,tsx,cts,mts}"],
      rules: {
        // Use TypeScript's checker instead
        "no-undef": "off",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    // https://jc-verse.github.io/js-style-guide/typescript/base#adjacent-overload-signatures
    "@typescript-eslint/adjacent-overload-signatures": "error",

    // I wish this rule can be more flexible to allow T[] where T is a union
    // https://jc-verse.github.io/js-style-guide/typescript/base#adjacent-overload-signatures
    "@typescript-eslint/array-type": [
      "error",
      { default: "array", readonly: "array" },
    ],

    // https://jc-verse.github.io/js-style-guide/typescript/base#ban-ts-comment
    "@typescript-eslint/ban-ts-comment": [
      "error",
      {
        minimumDescriptionLength: 3,
        "ts-check": false,
        "ts-expect-error": "allow-with-description",
        "ts-ignore": true,
        "ts-nocheck": true,
      },
    ],

    // We've never used TSLint anyway
    // https://jc-verse.github.io/js-style-guide/typescript/base#ban-tslint-comment
    "@typescript-eslint/ban-tslint-comment": "error",

    // https://jc-verse.github.io/js-style-guide/typescript/base#ban-types
    "@typescript-eslint/ban-types": [
      "error",
      {
        extendDefaults: true,
        types: {
          "{}": false,
        },
      },
    ],

    // https://jc-verse.github.io/js-style-guide/typescript/base#class-literal-property-style
    "@typescript-eslint/class-literal-property-style": ["warn", "getters"],

    // We turn off the base rule too
    "@typescript-eslint/class-methods-use-this": "off",

    // https://jc-verse.github.io/js-style-guide/typescript/base#consistent-generic-constructors
    "@typescript-eslint/consistent-generic-constructors": [
      "error",
      "constructor",
    ],

    // https://jc-verse.github.io/js-style-guide/typescript/base#consistent-indexed-object-style
    "@typescript-eslint/consistent-indexed-object-style": [
      "error",
      "index-signature",
    ],

    // https://jc-verse.github.io/js-style-guide/typescript/base#consistent-type-assertions
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      { assertionStyle: "as", objectLiteralTypeAssertions: "allow" },
    ],

    // We sometimes allow declaration merging
    // https://jc-verse.github.io/js-style-guide/typescript/base#consistent-type-definitions
    "@typescript-eslint/consistent-type-definitions": "off",

    // https://jc-verse.github.io/js-style-guide/typescript/base#consistent-type-imports
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        disallowTypeAnnotations: false,
        fixStyle: "inline-type-imports",
        prefer: "type-imports",
      },
    ],

    // https://jc-verse.github.io/js-style-guide/typescript/base#default-param-last
    "@typescript-eslint/default-param-last": "error",

    // No—too verbose
    // https://jc-verse.github.io/js-style-guide/typescript/base#explicit-function-return-type
    "@typescript-eslint/explicit-function-return-type": "off",

    // Defaulting to public makes sense
    // https://jc-verse.github.io/js-style-guide/typescript/base#explicit-member-accessibility
    "@typescript-eslint/explicit-member-accessibility": "off",

    // https://jc-verse.github.io/js-style-guide/typescript/base#explicit-module-boundary-types
    "@typescript-eslint/explicit-module-boundary-types": "warn",

    "init-declarations": "off",
    // https://jc-verse.github.io/js-style-guide/typescript/base#init-declarations
    // eslint-disable-next-line sort-keys
    "@typescript-eslint/init-declarations": ["error", "always"],

    // We turn off the base rule too
    "@typescript-eslint/max-params": "off",

    // TODO figure out how this should be configured
    "@typescript-eslint/member-ordering": 0,

    // https://jc-verse.github.io/js-style-guide/typescript/base#method-signature-style
    "@typescript-eslint/method-signature-style": ["error", "property"],

    // TODO
    "@typescript-eslint/naming-convention": 0,

    // https://jc-verse.github.io/js-style-guide/typescript/base#no-array-constructor
    "@typescript-eslint/no-array-constructor": "off",

    // https://jc-verse.github.io/js-style-guide/typescript/base#no-confusing-non-null-assertion
    "@typescript-eslint/no-confusing-non-null-assertion": "error",

    "no-dupe-class-members": "off",
    // https://jc-verse.github.io/js-style-guide/typescript/base#no-dupe-class-members
    // eslint-disable-next-line sort-keys
    "@typescript-eslint/no-dupe-class-members": "error",

    // This can be useful for dynamic object transformations
    // https://jc-verse.github.io/js-style-guide/typescript/base#no-dynamic-delete
    "@typescript-eslint/no-dynamic-delete": "off",

    // We turn off the base rule too
    "@typescript-eslint/no-empty-function": "off",

    // https://jc-verse.github.io/js-style-guide/typescript/base#no-empty-interface
    "@typescript-eslint/no-empty-interface": [
      "error",
      { allowSingleExtends: true },
    ],

    // https://jc-verse.github.io/js-style-guide/typescript/base#no-explicit-any
    "@typescript-eslint/no-explicit-any": "warn",

    // https://jc-verse.github.io/js-style-guide/typescript/base#no-extra-non-null-assertion
    "@typescript-eslint/no-extra-non-null-assertion": "error",

    // https://jc-verse.github.io/js-style-guide/typescript/base#no-extraneous-class
    "@typescript-eslint/no-extraneous-class": [
      "warn",
      {
        allowConstructorOnly: false,
        allowEmpty: false,
        allowStaticOnly: false,
        allowWithDecorator: false,
      },
    ],

    // https://jc-verse.github.io/js-style-guide/typescript/base#no-import-type-side-effects
    "@typescript-eslint/no-import-type-side-effects": "error",

    // Annotating parameters makes the code more uniform
    "@typescript-eslint/no-inferrable-types": [
      "error",
      { ignoreParameters: true },
    ],

    // https://jc-verse.github.io/js-style-guide/typescript/base#no-invalid-this
    "@typescript-eslint/no-invalid-this": "off",

    // https://jc-verse.github.io/js-style-guide/typescript/base#no-invalid-void-type
    "@typescript-eslint/no-invalid-void-type": [
      "warn",
      { allowAsThisParameter: false, allowInGenericTypeArguments: true },
    ],

    // We turn off the base rule too
    "@typescript-eslint/no-loop-func": "off",

    // To be deprecated
    "@typescript-eslint/no-loss-of-precision": "off",

    // We turn off the base rule too
    "@typescript-eslint/no-magic-numbers": "off",

    // https://jc-verse.github.io/js-style-guide/typescript/base#no-misused-new
    "@typescript-eslint/no-misused-new": "error",

    // Use namespaces to organize your code
    // https://jc-verse.github.io/js-style-guide/typescript/base#no-namespace
    "@typescript-eslint/no-namespace": "off",

    // https://jc-verse.github.io/js-style-guide/typescript/base#no-non-null-asserted-nullish-coalescing
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",

    // https://jc-verse.github.io/js-style-guide/typescript/base#no-non-null-asserted-optional-chain
    "@typescript-eslint/no-non-null-asserted-optional-chain": "error",

    // It's useful.
    // https://jc-verse.github.io/js-style-guide/typescript/base#no-non-null-assertion
    "@typescript-eslint/no-non-null-assertion": "off",

    "no-redeclare": "off",
    // https://jc-verse.github.io/js-style-guide/typescript/base#no-redeclare
    // eslint-disable-next-line sort-keys
    "@typescript-eslint/no-redeclare": [
      "error",
      {
        builtinGlobals: true,
        // We also allow redeclaring between variables and types although the
        // rule doesn't allow that
        ignoreDeclarationMerge: true,
      },
    ],

    // https://jc-verse.github.io/js-style-guide/typescript/base#no-require-imports
    "@typescript-eslint/no-require-imports": "error",

    "no-shadow": "off",
    // https://jc-verse.github.io/js-style-guide/typescript/base#no-shadow
    // eslint-disable-next-line sort-keys
    "@typescript-eslint/no-shadow": [
      "warn",
      {
        allow: [],
        builtinGlobals: false,
        hoist: "all",
        ignoreFunctionTypeParameterNameValueShadow: false,
        ignoreOnInitialization: true,
        ignoreTypeValueShadow: true,
      },
    ],

    // https://jc-verse.github.io/js-style-guide/typescript/base#no-this-alias
    "@typescript-eslint/no-this-alias": [
      "warn",
      { allowDestructuring: true, allowedNames: [] },
    ],

    // Deprecated
    "@typescript-eslint/no-type-alias": "off",

    // https://jc-verse.github.io/js-style-guide/typescript/base#no-unnecessary-type-constraint
    "@typescript-eslint/no-unnecessary-type-constraint": "error",

    "no-unused-expressions": "off",
    // https://jc-verse.github.io/js-style-guide/typescript/base#no-unused-expressions
    // eslint-disable-next-line sort-keys
    "@typescript-eslint/no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTaggedTemplates: true,
        allowTernary: true,
        enforceForJSX: true,
      },
    ],

    "no-unused-vars": "off",
    // https://jc-verse.github.io/js-style-guide/typescript/base#no-unused-vars
    // eslint-disable-next-line sort-keys
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        args: "after-used",
        caughtErrors: "all",
        ignoreRestSiblings: true,
        vars: "all",
      },
    ],

    "no-use-before-define": "off",
    // eslint-disable-next-line sort-keys
    "@typescript-eslint/no-use-before-define": [
      "error",
      {
        allowNamedExports: true,
        classes: true,
        enums: false,
        functions: false,
        ignoreTypeReferences: true,
        typedefs: false,
        variables: true,
      },
    ],

    "no-useless-constructor": "off",
    // eslint-disable-next-line sort-keys
    "@typescript-eslint/no-useless-constructor": "error",

    // https://jc-verse.github.io/js-style-guide/typescript/base#no-useless-empty-export
    "@typescript-eslint/no-useless-empty-export": "error",

    // https://jc-verse.github.io/js-style-guide/typescript/base#no-var-requires
    "@typescript-eslint/no-var-requires": "error",

    // https://jc-verse.github.io/js-style-guide/typescript/base#parameter-properties
    "@typescript-eslint/parameter-properties": [
      "warn",
      { allow: [], prefer: "class-property" },
    ],

    // https://jc-verse.github.io/js-style-guide/typescript/base#prefer-as-const
    "@typescript-eslint/prefer-as-const": "error",

    // https://jc-verse.github.io/js-style-guide/typescript/base#prefer-enum-initializers
    "@typescript-eslint/prefer-enum-initializers": "error",

    // https://jc-verse.github.io/js-style-guide/typescript/base#prefer-for-of
    "@typescript-eslint/prefer-for-of": "error",

    // https://jc-verse.github.io/js-style-guide/typescript/base#prefer-function-type
    "@typescript-eslint/prefer-function-type": "error",

    // https://jc-verse.github.io/js-style-guide/typescript/base#prefer-literal-enum-member
    "@typescript-eslint/prefer-literal-enum-member": [
      "warn",
      { allowBitwiseExpressions: true },
    ],

    // https://jc-verse.github.io/js-style-guide/typescript/base#prefer-namespace-keyword
    "@typescript-eslint/prefer-namespace-keyword": "error",

    // https://jc-verse.github.io/js-style-guide/typescript/base#prefer-ts-expect-error
    "@typescript-eslint/prefer-ts-expect-error": "error",

    "@typescript-eslint/sort-type-constituents": 0,

    // https://jc-verse.github.io/js-style-guide/typescript/base#triple-slash-reference
    "@typescript-eslint/triple-slash-reference": [
      "error",
      { lib: "never", path: "never", types: "prefer-import" },
    ],

    // We use strict TS options instead.
    // https://jc-verse.github.io/js-style-guide/typescript/base#typedef
    "@typescript-eslint/typedef": "off",

    // https://jc-verse.github.io/js-style-guide/typescript/base#unified-signatures
    "@typescript-eslint/unified-signatures": [
      "warn",
      { ignoreDifferentlyNamedParameters: false },
    ],
  },
};
