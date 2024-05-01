---
sidebar_position: 3
---

# Type-checked ESLint rules

## Operators

### [`dot-notation`](ttps://typescript-eslint.io/rules/dot-notation/)

- Severity: off
- Related:
  - [`dot-notation`](../eslint-base/operators.md#dot-notation)

Never use bracket notation to access properties. In TypeScript, we don't use `private` or `protected`, and even in such case, do not access them outside of the class (even in tests). Tests should be for public-facing behavior. We also don't enable the `noPropertyAccessFromIndexSignature` option, so you should access index signatures with dot notation.

## Async operations

### [`await-thenable`](https://typescript-eslint.io/rules/await-thenable/)

- Severity: error

You should only await on values that may be thenable. A value that is definitely not thenable should not be awaited because it makes the code harder to track and also defers all remaining code to the next tick.

### [`use-unknown-in-catch-callback-variables`](https://typescript-eslint.io/rules/use-unknown-in-catch-callback-variables/)

- Severity: error

Caught errors should always use `unknown` instead of `any`. While `try...catch` is already enforced by the `useUnknownInCatchVariables` option, `Promise#catch` can only be checked by the linter.

## Modules

### [`consistent-type-exports`](https://typescript-eslint.io/rules/consistent-type-exports/)

- Severity: error
- Configuration:
  - Fix with inline type specifiers (`fixMixedExportsWithInlineTypeSpecifier: true`)

Types should always be exported with `export type` for consistency reasons. In fact, you should generally use

```ts
export type Type1 = A;
export interface Type2 {}
```

Instead of a separate `export type { Type1, Type2 };` statement.
