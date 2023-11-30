---
sidebar_position: 3
---

# Operators

## Arithmetics

### [`eqeqeq`](https://eslint.org/docs/rules/eqeqeq)

- Severity: error
- Configuration:
  - Always require `===` (`"always"`)
  - Require strict comparison with `null` (`null: "always"`)

Regular equality can result in surprising results (e.g. `1 == "1"`). Although this is partly mitigated by TypeScript's type-checking, it can still become a pitfall on module boundaries without strict input validations.

`null` is not exempted from this rule. We require you to explicitly check for `null` with `===` or `!==`, because without TypeScript, your code may not work against `document.all`. `a === null || a === undefined` is not exactly equivalent to `a == null`. If you find it too pedantic, consider toggling it to `null: "ignore"` yourself.

```ts twoslash
function foo(a?: string | null) {
  if (a === null || a === undefined) return "Nullish";
  return a; // Only strings are left here
}
```

### [`no-bitwise`](https://eslint.org/docs/rules/no-bitwise)

- Severity: off

Bitwise operators are useful, efficient, and cool. We don't think disabling them are worthwhile.

```ts twoslash
enum Traits {
  USEFUL = 1 << 0,
  EFFICIENT = 1 << 1,
  OBSCURE = 1 << 2,
  COOL = 1 << 3,
}

const bitwise = Traits.USEFUL | Traits.EFFICIENT | Traits.COOL;
```

### [`no-compare-neg-zero`](https://eslint.org/docs/rules/no-compare-neg-zero)

- Severity: error

Comparing against negative zero is either a typo (an extra `-`) or is intended to be `Object.is`. In either case, such usage should be reported.

## Objects

### [`dot-notation`](https://eslint.org/docs/rules/dot-notation)

- Severity: error
- Configuration:
  - Keywords are treated the same as ordinary properties (non-ES3 compatible) (`allowKeywords: true`)

From the ESLint docs:

> the dot notation is often preferred because it is easier to read, less verbose, and works better with aggressive JavaScript minimizers.

There's no exception to this rule. We turn off the `noPropertyAccessFromIndexSignature` TS option, and we don't use TS `private`/`protected` members, so there's no reason to use bracket notation.

### [`new-cap`](https://eslint.org/docs/rules/new-cap)

- Severity: error
- Configuration:
  - Require capitalized names to be called with `new` (`"capIsNew": true`)
  - Require `new` to only be called on capitalized names (`"newIsCap": true`)
  - Check properties too (`"properties": true`)

This is purely a stylistic choice. Use capital iff you have a constructor. This is also checked by `naming-convention`. If you are using constructors generically, still use uppercase:

```ts
function clone(obj: object) {
  const Ctor = obj.constructor?.[Symbol.species] ?? obj.constructor ?? Object;
  return new Ctor();
}
```
