---
sidebar_position: 7
---

# Collections

## Arrays

### [`array-callback-return`](https://eslint.org/docs/rules/array-callback-return)

- Severity: error
- Configuration:
  - Disallow `return;` to implicitly mean `return undefined;` (`allowImplicit: false`)
  - Do not enforce that `forEach` callback doesn't return a value (`checkForEach: true`)

The intention of this rule is clear: to make the usage of array methods more appropriate. `Array#forEach` is the only method that's designed to be purely for its side-effects, while all the other methods should not only return a value, but also strive to be side-effect-free. Note that TypeScript doesn't check the return type of callbacks, because the callbacks are very loosely typed.

However, we have to give up on checking `forEach`, due to false-positives with concise arrows. Consider this:

```ts
const arr = [1, 2, 3];
const set = new Set<number>();
// checkForEach will report this case as well
arr.forEach((x) => set.add(x));
```

Note that this rule can still false-positive when calling a method on a non-array object. However, we still set the severity as error because:

- The necessity of enforcing callback return values far outweighs the risk of false-positive.
- Most APIs that are called `map` or `filter` are sanely designed and function in a similar fashion as array methods.
