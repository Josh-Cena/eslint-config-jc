module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  reportUnusedDisableDirectives: true,
  rules: {
    // https://jc-verse.github.io/js-style-guide/eslint-base/objects-classes#accessor-pairs
    "accessor-pairs": [
      "error",
      {
        enforceForClassMembers: true,
        getWithoutSet: true,
        setWithoutGet: true,
      },
    ],

    // https://jc-verse.github.io/js-style-guide/eslint-base/collections#array-callback-return
    "array-callback-return": [
      "error",
      {
        allowImplicit: false,
        checkForEach: false,
        // Note: allowVoid: true is implied by checkForEach: false
      },
    ],

    // Only add braces with multiple statements
    // https://jc-verse.github.io/js-style-guide/eslint-base/functions#arrow-body-style
    "arrow-body-style": [
      "error",
      "as-needed",
      {
        requireReturnForObjectLiteral: false,
      },
    ],

    // We forbid using var altogether.
    // https://jc-verse.github.io/js-style-guide/eslint-base/variables-expressions#block-scoped-var
    "block-scoped-var": "error",

    // Properties are hard to check because they may come from other APIs
    // https://jc-verse.github.io/js-style-guide/eslint-base/variables-expressions#camelcase
    camelcase: [
      "error",
      {
        allow: [],
        ignoreDestructuring: false,
        ignoreGlobals: false,
        ignoreImports: false,
        properties: "never",
      },
    ],

    // https://jc-verse.github.io/js-style-guide/eslint-base/formatting#capitalized-comments
    "capitalized-comments": [
      "warn",
      "always",
      {
        ignoreConsecutiveComments: true,
        ignoreInlineComments: false,
        ignorePattern: "prettier-ignore|cSpell:ignore",
      },
    ],

    // https://jc-verse.github.io/js-style-guide/eslint-base/objects-classes#class-methods-use-this
    "class-methods-use-this": "off",

    // I don't understand the point of this rule at all ㄟ(▔,▔)ㄏ
    // https://jc-verse.github.io/js-style-guide/eslint-base/control-flow#complexity
    complexity: "off",

    // https://jc-verse.github.io/js-style-guide/eslint-base/functions#consistent-return
    "consistent-return": ["error", { treatUndefinedAsUnspecified: false }],

    // https://jc-verse.github.io/js-style-guide/eslint-base/functions#consistent-this
    "consistent-this": "off",

    // https://jc-verse.github.io/js-style-guide/eslint-base/objects-classes#constructor-super
    "constructor-super": "error",

    // https://jc-verse.github.io/js-style-guide/eslint-base/formatting#curly
    curly: ["warn", "multi-or-nest", "consistent"],

    // https://jc-verse.github.io/js-style-guide/eslint-base/control-flow#default-case
    "default-case": "off",

    // https://jc-verse.github.io/js-style-guide/eslint-base/control-flow#default-case-last
    "default-case-last": "error",

    // Shadowed by TS-ESLint rule
    // https://jc-verse.github.io/js-style-guide/eslint-base/functions#default-param-last
    "default-param-last": "off",

    // https://jc-verse.github.io/js-style-guide/eslint-base/operators#dot-notation
    "dot-notation": ["error", { allowKeywords: true }],

    // https://jc-verse.github.io/js-style-guide/eslint-base/operators#eqeqeq
    eqeqeq: ["error", "always", { null: "always" }],

    // https://jc-verse.github.io/js-style-guide/eslint-base/control-flow#for-direction
    "for-direction": "error",

    // We rarely use function expressions.
    // https://jc-verse.github.io/js-style-guide/eslint-base/functions#func-name-matching
    "func-name-matching": ["warn", "always"],

    // We rarely use function expressions.
    // https://jc-verse.github.io/js-style-guide/eslint-base/functions#func-names
    "func-names": ["warn", "as-needed"],

    // https://jc-verse.github.io/js-style-guide/eslint-base/functions#func-style
    "func-style": ["warn", "declaration", { allowArrowFunctions: true }],

    // https://jc-verse.github.io/js-style-guide/eslint-base/objects-classes#getter-return
    "getter-return": ["error", { allowImplicit: false }],

    // It's also common to have all getters in one place and setters in another.
    // https://jc-verse.github.io/js-style-guide/eslint-base/objects-classes#grouped-accessor-pairs
    "grouped-accessor-pairs": "off",

    // We disallow using for-in altogether.
    // https://jc-verse.github.io/js-style-guide/eslint-base/control-flow#guard-for-in
    "guard-for-in": "off",

    // Shadowed by TS-ESLint rule
    // https://jc-verse.github.io/js-style-guide/eslint-base/variables-expressions#init-declarations
    "init-declarations": "off",

    // Doesn't make sense in JS.
    // https://jc-verse.github.io/js-style-guide/eslint-base/objects-classes#max-classes-per-file
    "max-classes-per-file": "off",

    // https://jc-verse.github.io/js-style-guide/eslint-base/control-flow#max-depth
    "max-depth": "off",

    // We only check comments, since code width is already enforced by Prettier
    // https://jc-verse.github.io/js-style-guide/eslint-base/formatting#max-len
    "max-len": [
      "warn",
      {
        code: Infinity,
        comments: 80,
        ignorePattern: "(eslint-disable|@)",
        ignoreUrls: true,
        tabWidth: 2,
      },
    ],

    // https://jc-verse.github.io/js-style-guide/eslint-base/control-flow#max-lines
    "max-lines": "off",

    // https://jc-verse.github.io/js-style-guide/eslint-base/functions#max-lines-per-function
    "max-lines-per-function": "off",

    // https://jc-verse.github.io/js-style-guide/eslint-base/functions#max-nested-callbacks
    "max-nested-callbacks": "off",

    // https://jc-verse.github.io/js-style-guide/eslint-base/functions#max-params
    "max-params": "off",

    // https://jc-verse.github.io/js-style-guide/eslint-base/control-flow#max-statements
    "max-statements": "off",

    // Single-line comments save lines.
    // https://jc-verse.github.io/js-style-guide/eslint-base/formatting#multiline-comment-style
    "multiline-comment-style": ["error", "separate-lines"],

    // https://jc-verse.github.io/js-style-guide/eslint-base/operators#new-cap
    "new-cap": ["error", { capIsNew: false, newIsCap: true, properties: true }],

    // https://jc-verse.github.io/js-style-guide/eslint-base/variables-expressions#no-alert
    "no-alert": "error",

    // Shadowed by TS-ESLint rule
    // TODO
    "no-array-constructor": "off",

    // https://jc-verse.github.io/js-style-guide/eslint-base/async#no-async-promise-executor
    "no-async-promise-executor": "error",

    // Whenever we write `await`, we actually want it to wait. We know what we
    // are doing.
    // https://jc-verse.github.io/js-style-guide/eslint-base/async#no-await-in-loop
    "no-await-in-loop": "off",

    // It's cool and useful. Why not?
    // https://jc-verse.github.io/js-style-guide/eslint-base/operators#no-bitwise
    "no-bitwise": "off",

    // https://jc-verse.github.io/js-style-guide/eslint-base/functions#no-caller
    "no-caller": "error",

    // Requires `case x: {let a = 1;}`
    // https://jc-verse.github.io/js-style-guide/eslint-base/control-flow#no-case-declarations
    "no-case-declarations": "error",

    // https://jc-verse.github.io/js-style-guide/eslint-base/objects-classes#no-class-assign
    "no-class-assign": "error",

    // https://jc-verse.github.io/js-style-guide/eslint-base/operators#no-compare-neg-zero
    "no-compare-neg-zero": "error",

    // https://jc-verse.github.io/js-style-guide/eslint-base/control-flow#no-cond-assign
    "no-cond-assign": ["error", "except-parens"],

    // In projects with a wrapped logger, this can be enabled
    // https://jc-verse.github.io/js-style-guide/eslint-base/variables-expressions#no-console
    "no-console": 0,

    // Also checked by TypeScript
    "no-const-assign": "error",

    "no-constant-binary-expression": "error",

    "no-constant-condition": ["error", { checkLoops: true }],

    "no-constructor-return": "error",

    // It's useful.
    "no-continue": "off",

    // Good to catch errors, but sometimes we actually want to match control
    // characters
    "no-control-regex": "warn",

    // I've personally never ever used this
    "no-debugger": "error",

    "no-delete-var": "error",

    "no-div-regex": "error",

    "no-dupe-args": "error",

    // Shadowed by TS-ESLint rule
    "no-dupe-class-members": "off",

    "no-dupe-else-if": "error",

    "no-dupe-keys": "error",

    "no-duplicate-case": "error",

    // Shadowed by plugin-imports rule
    "no-duplicate-imports": "off",

    // `else-if` is able to save one line, and also makes the flow more natural.
    "no-else-return": ["error", { allowElseIf: true }],

    // Empty catch is useful.
    "no-empty": ["error", { allowEmptyCatch: true }],

    "no-empty-character-class": "error",

    // Sometimes we do want no-ops.
    "no-empty-function": "off",

    "no-empty-pattern": "error",

    // In TS, it's a common way to narrow out both `null` and `undefined`.
    "no-eq-null": "off",

    "no-eval": "error",

    "no-ex-assign": "error",

    "no-extend-native": "error",

    // Sometimes we want to enforce re-binding to tell ourselves that `this` is
    // important.
    "no-extra-bind": "warn",

    "no-extra-boolean-cast": "error",

    // A eslint-disable is as expressive as a special comment.
    "no-fallthrough": "error",

    "no-func-assign": "error",

    "no-implicit-coercion": "error",

    "no-implied-eval": "error",

    "no-import-assign": "error",

    "no-inner-declarations": "error",

    "no-invalid-regexp": "error",

    // Shadowed by TS-ESLint rule
    "no-invalid-this": "off",

    "no-irregular-whitespace": "error",

    "no-iterator": "error",

    "no-label-var": "error",

    "no-labels": "error",

    "no-lone-blocks": "error",

    "no-lonely-if": "error",

    // Shadowed by TS-ESLint rule
    "no-loop-func": "off",

    // Shadowed by TS-ESLint rule
    "no-loss-of-precision": "off",

    // Shadowed by TS-ESLint rule
    "no-magic-numbers": "off",

    "no-misleading-character-class": "error",

    // Operator precedence can be enforced with Prettier, and the rule is too
    // hard to configure properly
    "no-mixed-operators": "off",

    "no-multi-assign": "error",

    "no-multi-str": "error",

    // This is a useful rule, but too hard to enforce in practice. Sometimes
    // negated conditions actually make more sense
    "no-negated-condition": "off",

    // Nested ternaries are formatted by Prettier and not hard to understand.
    "no-nested-ternary": "off",

    // Note that this rule can actually be useful if we are testing if a
    // constructor throws, the most representative case being `new URL()`
    "no-new": "off",

    "no-new-func": "error",

    "no-new-symbol": "error",

    "no-new-wrappers": "error",

    "no-nonoctal-decimal-escape": "error",

    "no-obj-calls": "error",

    "no-octal": "error",

    "no-octal-escape": "error",

    // If we reassign params, we actually need to.
    "no-param-reassign": "off",

    // Plusplus is concise and useful.
    "no-plusplus": "off",

    "no-promise-executor-return": "error",

    "no-proto": "error",

    "no-prototype-builtins": "error",

    // Shadowed by TS-ESLint rule
    "no-redeclare": "off",

    // Multiple spaces can resemble constructs that readers are familiar with
    "no-regex-spaces": "off",

    // TypeScript allows this
    "no-restricted-exports": "off",

    // Taken from airbnb
    "no-restricted-globals": [
      "error",
      {
        message:
          "Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite",
        name: "isFinite",
      },
      {
        message:
          "Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan",
        name: "isNaN",
      },
      "addEventListener",
      "blur",
      "close",
      "closed",
      "confirm",
      "defaultStatus",
      // cSpell:ignore defaultstatus
      "defaultstatus",
      "event",
      "external",
      "find",
      "focus",
      "frameElement",
      "frames",
      "history",
      "innerHeight",
      "innerWidth",
      "length",
      "location",
      "locationbar",
      "menubar",
      "moveBy",
      "moveTo",
      "name",
      "onblur",
      "onerror",
      "onfocus",
      "onload",
      "onresize",
      "onunload",
      "open",
      "opener",
      "opera",
      "outerHeight",
      "outerWidth",
      "pageXOffset",
      "pageYOffset",
      "parent",
      "print",
      "removeEventListener",
      "resizeBy",
      "resizeTo",
      "screen",
      "screenLeft",
      "screenTop",
      "screenX",
      "screenY",
      "scroll",
      "scrollbars",
      "scrollBy",
      "scrollTo",
      "scrollX",
      "scrollY",
      "self",
      "status",
      "statusbar",
      "stop",
      "toolbar",
      "top",
    ],

    // Copied from airbnb, removed for...of statement, added export all
    "no-restricted-syntax": [
      "warn",
      {
        message:
          "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
        selector: "ForInStatement",
      },
      {
        message:
          "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
        selector: "LabeledStatement",
      },
      {
        message:
          "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
        selector: "WithStatement",
      },
      {
        message:
          "Export all does't work well if imported in ESM due to how they are transpiled, and they can also lead to unexpected exposure of internal methods.",
        selector: "ExportAllDeclaration",
      },
    ],

    "no-return-assign": "error",

    "no-script-url": "error",

    "no-self-assign": "error",

    "no-self-compare": "error",

    "no-sequences": "error",

    "no-setter-return": "error",

    // Shadowed by TS-ESLint rule
    "no-shadow": "off",

    "no-shadow-restricted-names": "error",

    "no-sparse-arrays": "error",

    "no-template-curly-in-string": "warn",

    // We like ternaries.
    "no-ternary": "off",

    "no-this-before-super": "error",

    "no-throw-literal": "error",

    // We also check for `typeof`, because it simply doesn't make sense
    "no-undef": ["error", { typeof: true }],

    // We require every variable to be explicitly initialized. See also
    // init-declarations
    "no-undef-init": "off",

    // Undefined is obviously useful
    "no-undefined": "off",

    // Dangling underscores are often from other APIs
    "no-underscore-dangle": "off",

    // Since we require semi, this shouldn't happen a lot
    "no-unexpected-multiline": "error",

    // There can be false-positives, but it's more useful than not
    "no-unmodified-loop-condition": "error",

    "no-unneeded-ternary": "error",

    // Also checked by TypeScript
    "no-unreachable": "error",

    "no-unreachable-loop": "error",

    "no-unsafe-finally": "error",

    "no-unsafe-negation": "error",

    "no-unsafe-optional-chaining": "error",

    // Shadowed by TS-ESLint rule
    "no-unused-expressions": "off",

    "no-unused-labels": "error",

    // Also checked by TypeScript
    "no-unused-private-class-members": "error",

    // Shadowed by TS-ESLint rule
    "no-unused-vars": "off",

    // Shadowed by TS-ESLint rule
    "no-use-before-define": "off",

    "no-useless-backreference": "warn",

    "no-useless-call": "error",

    "no-useless-catch": "error",

    "no-useless-computed-key": "error",

    "no-useless-concat": "error",

    // Shadowed by TS-ESLint rule
    "no-useless-constructor": "off",

    "no-useless-escape": "error",

    "no-useless-rename": "error",

    "no-useless-return": "error",

    "no-var": "error",

    "no-void": ["error", { allowAsStatement: true }],

    "no-warning-comments": "off",

    "no-with": "error",

    "object-shorthand": ["error", "always"],

    // Too stylistic.
    "one-var": "off",

    // Taken care of by Prettier.
    "one-var-declaration-per-line": "off",

    "operator-assignment": ["error", "always"],

    "prefer-arrow-callback": "error",

    "prefer-const": "error",

    "prefer-exponentiation-operator": "error",

    "prefer-named-capture-group": "warn",

    "prefer-numeric-literals": "error",

    "prefer-object-has-own": "error",

    "prefer-object-spread": "error",

    "prefer-promise-reject-errors": "error",

    "prefer-rest-params": "error",

    "prefer-spread": "error",

    "prefer-template": "error",

    // Enforced by Prettier
    "quote-props": "off",

    // Not worth enforcing.
    radix: "off",

    // There can be false-positives
    "require-atomic-updates": "warn",

    // This can also be a way to help future refactors, where one of the
    // constituents is planned to be made async
    "require-await": "warn",

    "require-unicode-regexp": "off",

    "require-yield": "warn",

    "sort-imports": "off",

    "sort-keys": "off",

    "sort-vars": "off",

    // Copied from airbnb
    "spaced-comment": [
      "error",
      "always",
      {
        block: {
          balanced: true,
          exceptions: ["-", "+"],
          // Space here to support sprockets directives and flow comment types
          markers: ["=", "!", ":", "::"],
        },
        line: {
          exceptions: ["-", "+"],
          // Space here to support sprockets directives, slash for /// comments
          markers: ["=", "!", "/"],
        },
      },
    ],

    // We don't write much plain JS, but this is good enough
    strict: "error",

    "symbol-description": "error",

    "use-isnan": "error",

    "valid-typeof": "error",

    "vars-on-top": "off",

    yoda: ["error", "never", { exceptRange: true }],
  },
};
