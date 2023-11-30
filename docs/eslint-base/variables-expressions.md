---
sidebar_position: 2
---

# Variables & expressions

This page discusses rules around variable declarations, naming, and the style of some primary expressions.

## `var`

We disallow `var` statements. `var` is fully predated by `let`/`const` and its hoisting behavior makes code harder to debug. There's not a single reason to use `var` today. If you need to share one variable between two blocks, declare it in the upper scope. If you need to declare a global variable (which you probably shouldn't anyway), directly modify `globalThis` (which also works in modules).

```ts twoslash
declare var globalVar: number;
globalThis.globalVar = 1;
```

### [`block-scoped-var`](https://eslint.org/docs/rules/block-scoped-var)

- Severity: error

Because `var`s are forbidden altogether, this rule is mostly moot. In the rare case where you need to use `var` (such as to declare globals), such vars should not be deceptively inside a block.

## `let`/`const`

### [`init-declarations`](https://eslint.org/docs/rules/init-declarations)

- Severity: off

See [TypeScript](../typescript.md).

### [`no-const-assign`](https://eslint.org/docs/rules/no-const-assign)

- Severity: error
- Related:
  - `ts(2588): Cannot assign to 'a' because it is a constant.`

Re-assigning const variables causes a runtime error.

```ts twoslash
// @errors: 2588
const a = 1;
a = 2; // -> TypeError: Assignment to constant variable.
```

### [`prefer-const`](https://eslint.org/docs/rules/prefer-const)

- Severity: error

Using

## Naming conventions

### [`camelcase`](https://eslint.org/docs/rules/camelcase)

- Severity: error
- Configuration:
  - Require destructured variables to be camelCase (`ignoreDestructuring: false`)
  - Require global variables to be camelCase (`ignoreGlobals: false`)
  - Require imported variables to be camelCase (`ignoreImports: false`)
  - Ignore property names in object literals (`properties: "never"`)

Until we fully use `@typescript-eslint/naming-convention`, we will still use this rule to enforce camelCase where possible. We don't check object properties because the object may be passed to a third-party library:

```ts
checkESLint({
  config: {
    camel_case: true,
  },
});
```

## Regular expressions

### Prefer concise syntax

There are many ways to represent the same regular expression. Instead of this:

```ts
const rule = {
  test: /\.(?:js|ts|jsx|tsx)/i,
};
```

Prefer this:

```ts
const rule = {
  test: /\.[jt]sx?/i,
};
```

Regular expressions are _not_ intended to be readable; they are designed for machine consumption. Convey the intent of a regular expression through test cases, not through making it verbose. Related to **code for the average-intelligent**.

### [`no-regex-spaces`](https://eslint.org/docs/rules/no-regex-spaces)

- Severity: off

Although we want to use concise syntax, multiple spaces in a regex is often useful to resemble constructs that readers are familiar with.

```ts
// Matches a well-formatted table row
const match = tableRow.match(/\| Column      \| Another one \|/);
```

### [`prefer-named-capture-group`](https://eslint.org/docs/rules/prefer-named-capture-group)

- Severity: warning

Named capture groups allow us to semantically identify each group. It also warns about those groups that should probably be explicitly marked as non-capturing groups.

```ts
const rule = {
  // Is this capturing group actually useful? If I remove it, would it break
  // consumer code?
  test: /\.(jpe?g|png|webp)/i,
};
```

Ultimately, this makes refactor less risky because addition of a capturing group does not shift the other indices.

```diff
- const commitPattern = /(.+),(.+)/;
+ const commitPattern = /(.+),(.+),(\d+)/;

const date = commit.match(commitPattern)?.[1];
// Oops, I need to also change `[1]` to `[2]`...
```

:::note

Named capture groups isn't strongly typed in TypeScript. See [microsoft/TypeScript#32098](https://github.com/microsoft/TypeScript/issues/32098). If you access `match.groups.someName`, you will get `| undefined` under `noUncheckedIndexAccess`, even when `someName` always exists. In this case, prefer using a non-null assertion to convey developer intent.

:::

## Globals

### [`no-alert`](https://eslint.org/docs/rules/no-alert)

- Severity: error

There is no good reason to use `alert`/`confirm`/`prompt` in production. They are blocking and look too much like system dialogs.

### [`no-console`](https://eslint.org/docs/rules/no-console)

- Severity: can be enabled

`console.log` is commonly left as debugging artifacts and can occasionally disrupt the console log formatting. For example, Webpack has the unified [logger interface](https://webpack.js.org/api/logging/) for emitting messages. Projects are encouraged to encapsulate their own logger instance as well for unified message formatting and semantics.

However, in more casual projects without a wrapped logger, using `console.log` may be intentional. This rule can be overridden in user-land.
