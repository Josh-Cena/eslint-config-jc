module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  reportUnusedDisableDirectives: true,
  rules: {
    "accessor-pairs": [
      "error",
      {
        enforceForClassMembers: true,
        getWithoutSet: true,
        setWithoutGet: true,
      },
    ],

    "array-callback-return": [
      "error",
      { allowImplicit: false, checkForEach: true },
    ],

    // Only add braces with multiple statements
    "arrow-body-style": [
      "error",
      "as-needed",
      {
        requireReturnForObjectLiteral: false,
      },
    ],

    // We forbid using var altogether.
    "block-scoped-var": "error",

    // Properties are hard to check because they may come from other APIs
    camelcase: ["error", { properties: "never" }],

    "capitalized-comments": [
      "warn",
      "always",
      {
        ignoreConsecutiveComments: true,
        ignorePattern: "prettier-ignore|cSpell:ignore",
      },
    ],

    // It's a way of allowing private methods. (`this.myPrivateMethod()`)
    "class-methods-use-this": "off",

    // I don't understand the point of this rule at all ㄟ(▔,▔)ㄏ
    complexity: "off",

    // Requires return statements to either always or never specify values.
    // TypeScript sometimes enforces this, but it can be stylistic as well.
    "consistent-return": ["error", { treatUndefinedAsUnspecified: false }],

    // Enforces consistent naming when capturing the current execution context.
    // We warn against aliasing `this` altogether, but when we do, the name
    // doesn't matter
    "consistent-this": "off",

    // Verifies calls of super() in constructors.
    "constructor-super": "error",

    // Enforces curly braces only when the body of if/while/for/etc. gets
    // complicated enough.
    curly: ["warn", "multi-or-nest", "consistent"],

    // TypeScript is able to capture most cases about forgotten default
    // behaviors.
    "default-case": "off",

    "default-case-last": "error",

    // Shadowed by TS-ESLint rule
    "default-param-last": "off",

    // E.g. `foo.bar` instead of `foo["bar"]`
    "dot-notation": ["error", { allowKeywords: true }],

    eqeqeq: ["error", "always", { null: "ignore" }],

    "for-direction": "error",

    // We rarely use function expressions.
    "func-name-matching": ["warn", "always"],

    // We rarely use function expressions.
    "func-names": "warn",

    "func-style": ["warn", "declaration", { allowArrowFunctions: true }],

    "getter-return": ["error", { allowImplicit: false }],

    // It's also common to have all getters in one place and setters in another.
    "grouped-accessor-pairs": "off",

    // We disallow using for-in altogether.
    "guard-for-in": "error",

    // Shadowed by TS-ESLint rule
    "init-declarations": "off",

    // Too stylistic: doesn't matter
    "lines-between-class-members": "off",

    // Doesn't make sense in JS.
    "max-classes-per-file": "off",

    // This is 0, so you can override this.
    "max-depth": 0,

    // We only check comments, since code width is already enforced by Prettier
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

    // This is 0, so you can override this.
    "max-lines": 0,

    // This is 0, so you can override this.
    "max-lines-per-function": 0,

    // This is 0, so you can override this.
    "max-nested-callbacks": 0,

    // This is 0, so you can override this.
    "max-params": 0,

    // This is 0, so you can override this.
    "max-statements": 0,

    // Single-line comments save lines.
    "multiline-comment-style": ["error", "separate-lines"],

    "new-cap": "error",

    "no-alert": "error",

    // Shadowed by TS-ESLint rule
    "no-array-constructor": "off",

    "no-async-promise-executor": "error",

    // Whenever we write `await`, we actually want it to wait. We know what we
    // are doing.
    "no-await-in-loop": "off",

    // It's cool and useful. Why not?
    "no-bitwise": "off",

    "no-caller": "error",

    // Requires `case x: {let a = 1;}`
    "no-case-declarations": "error",

    "no-class-assign": "error",

    "no-compare-neg-zero": "error",

    "no-cond-assign": ["error", "always"],

    // This conflicts with Prettier, and syntax highlighting should be
    // sufficient to catch this
    "no-confusing-arrow": "off",

    // In projects with a wrapped logger, this can be enabled
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

    // Shadowed by TS-ESLint rule
    // This rule is also in plugin-imports
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
