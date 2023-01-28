---
sidebar_position: 5
---

# Functions

## When to create functions

The guide is: **do not over-abstract**. For example, this kind of code produces unnecessary runtime overhead, and more importantly, mental burden:

```ts
function resolveTarget(filePath: string) {
  // ^ What does `resolveTarget` do?
  return filePath.endsWith(".js")
    ? `./build/js/${filePath}`
    : `./build/asset/${filePath}`;
  // ^ It seems to return a different path when the extension is different, but
  //   where is it useful?
}

async function copyFile(filePath: string) {
  // ^ `copyFile` sounds like a really generic name. Is it used in multiple places?
  //   Should I take caution when refactoring?
  const targetPath = resolveTarget(filePath);
  // ^ What does `resolveTarget` do again? *Going back to definition* Now I know
  //   what it does, but the code is so long (not in this dumbed-down example),
  //   I can't compare them side-by-side and understand exactly what the code
  //   does step-by-step at a glance
  await fs.copyFile(filePath, targetPath);
  console.log(`Copied ${filePath}`);
}

await Promise.all(files.map(copyFile));
// ^ Does `copyFile` only do `fs.copyFile`? *Going back to definition* No, it
//   does much more. Of course I can name it as `copyFileToResolvedTargetAndLog`,
//   but then what's the point of abstraction?
```

When you could just simply put everything into a single lambda and it still makes sense:

```ts
await Promise.all(files.map(async (filePath) => {
  const targetPath = filePath.endsWith('.js')
    ? `./build/js/${filePath}`
    : `./build/asset/${filePath}`;
  await fs.copyFile(filePath, targetPath);
  console.log(`Copied ${filePath}`);
})));
```

Keep in mind the rule of "code for the average-intelligent". When a sequence of operations is self-explanatory, you don't need to extract it into a separate function just to give it a name that mirrors exactly what's described with code.

In addition, **do not export a function just to test it**.

```ts title="copyFile.ts"
// Is it used in multiple modules? Should I take caution when refactoring?
// *Doing a global search* It's only used in this module and its accompanied
// test file. But if I remove the `export`, I have to refactor the tests and
// risk reduced test coverage. Yuck!
export function resolveTarget(filePath: string) {
  return filePath.endsWith(".js")
    ? `./build/js/${filePath}`
    : `./build/asset/${filePath}`;
}
```

```ts title="copyFile.test.ts"
import { resolveTarget } from "./copyFile";

// Testing this function simply because tests are easy to write
describe("resolveTarget", () => {
  it("works", () => {
    expect(resolveTarget("foo.js")).toEqual("./build/js/foo.js");
  });
});
```

Tests are made for public APIs (or at least the useful functions that other internal modules use), not for internal implementations. Implementations may be refactored at any time and intermediate functions come and go, so don't tie your tests to them. Mock side-effects like `fs.readFile` or provide fixtures instead of staying in the comfort zone of testing pure functions.

Keep in mind that refactoring doesn't only mean changing the implementations of existing functions or modules, but also removing and adding them. It is critical to make clear which downstream dependents will be affected.

## Declaration

### [`func-style`](https://eslint.org/docs/rules/func-style)

- Severity: warning
- Configuration:
  - Use function declaration over function expression (`"declaration"`)
  - Allow arrow functions when using expressions (`allowArrowFunctions: true`)

### [`func-names`](https://eslint.org/docs/rules/func-names)

### [`func-name-matching`](https://eslint.org/docs/rules/func-name-matching)

- Severity: warning
- Configuration:
  - Always require the function expression's name to match the variable it's assigned to. (`"always"`)

Although we rarely use function expressions and always prefer either arrow functions or declarations, in cases where function expressions are necessary, the variable name should match the name of declaration. It's mostly to ensure that the error stack is always as expected: the variable name does not appear in the stack trace and may result in obscure call stacks.

```ts
const foo = function longFoo() {
  console.log("pass");
};
const foo2 = function longFoo() {
  throw new Error("panic");
};
function bar() {
  foo();
  foo2();
}
bar();
// This throws error stack:
// Error: panic
//     at longFoo (...)
//     at bar (...)
```

The `longFoo` is ambiguous. Although there's also a source position in the stack trace, it's better if we can instantly recognize the offending code when handling bug reports containing stack traces.

## Parameters

### [`default-param-last`](https://eslint.org/docs/rules/default-param-last)

- Severity: off

See [TypeScript](../typescript.md).

### [`no-caller`](https://eslint.org/docs/rules/no-caller)

- Severity: error

From the ESLint docs:

> The use of `arguments.caller` and `arguments.callee` make several code optimizations impossible. They have been deprecated in future versions of JavaScript and their use is forbidden in ECMAScript 5 while in strict mode.

## Return statements

### [`consistent-return`](https://eslint.org/docs/rules/consistent-return)

- Severity: error
- Configuration:
  - Require not declaring `undefined` in return statement if not needing a return value (`treatUndefinedAsUnspecified: false`)
- Related:
  - `ts(7030): Not all code paths return a value.` (with [`noImplicitReturns`](https://www.typescriptlang.org/tsconfig#noImplicitReturns))

We require all return statements to be either explicitly returning a value or implicitly returning `undefined` (in case of `void`-returning functions). Because most of our code is already type-checked by TypeScript, which surfaces the implicitly returned `undefined` in the return type, this rule is more for aesthetic purposes. It also helps us find all possible return values at a glance.

## Arrow functions

### [`arrow-body-style`](https://eslint.org/docs/rules/arrow-body-style)

- Severity: error
- Configuration:
  - Require omitted braces and implicit return when possible (`"as-needed"`)
  - Do not treat object literals as special case (`requireReturnForObjectLiteral: false`)

Implicit returning is much cleaner.

```ts
const peopleWithIDs = people.map((p, id) => ({ ...p, id }));
```

Useless braces and `return`s can be artifacts from refactoring, which increases indentation and line count without much value. Enforcing implicit return also encourages future refactors to fit logic within one expression instead of using multiple assignments and control flow.

### [`no-confusing-arrow`](https://eslint.org/docs/rules/no-confusing-arrow)

TODO

## `this`

### [`consistent-this`](https://eslint.org/docs/rules/consistent-this)

- Severity: off

We warn against `this` aliasing altogether, but when it's inevitable (for example, you need two `this` values within one function), you should use a semantic name instead of `self` or `that`.

```ts
class Foo {
  bar(str) {
    const fooInstance = this;
    return JSON.parse(str, function (key, value) {
      if (typeof value !== "string") return value;
      return (
        value
          .replace(/\{\{name\}\}/g, fooInstance.name)
          // The `this` here is the object that `key` belongs to
          .replace(
            /\{\{(?<prop>.*?)\}\}/g,
            (m, p1, o, s, groups) => this[groups.prop],
          )
      );
    });
  }
}
```
