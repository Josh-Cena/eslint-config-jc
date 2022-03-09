# Base rules

## General formatting

### Prettier configuration

Code formatting is completely **Prettier-powered**. Some Prettier configuration options that can be contended are explained below.

#### Dimensions

The `printWidth` is the default `80`. `100` seems a bit too dense, especially when we are pursuing **minimal code area** that can result in very few blank lines and lone-character lines. 80 characters is also the line length used in the GitHub diff viewer and helps make the diff clean.

`useTabs` is turned off. While there have been many valid arguments in favor of tabs (a powerful one is accessibility—some need larger tab spacing while others need smaller ones because their fonts are so big), using variable tab widths inevitably means broken formatting in some cases where the alignment is adjusted based on a fixed tab width. The `tabWidth` is the default `2`. Due to the deeply nested nature of common constructs like JSX and callbacks, 4-space indentation will soon bloat up the file.

#### Quotes

`singleQuote` is the default `false`—we use double quotes. Some reasons are listed below:

- JSX props are commonly double-quoted, and it's good to keep consistency in other cases
- Strings in many languages are double-quoted, with single-quotes representing characters. Since jc-verse is multi-lingual, keeping a consistent formatting is worthwhile.
- Single quotes (for contractions: `"I'm Josh"`) within a string is much more common than double quotes, so this reduces the need to escape or manually convert quotes to make the first parse pass (although after a correct parse, Prettier will take care of the rest).

`quoteProps` is the default `as-needed`. We don't want to add extra quotes, because non-quoted props are more beautifully highlighted in editors, and provide more visual contrast compared to the values.

`jsxSingleQuote` is the default `false`. HTML is almost uniformly using double quotes, and we follow that convention in JSX.

#### Other punctuation

We mandate semicolons with the default `semi: true`. Some reasons are listed below:

- Some people argue that ASI rules are very easy to remember and practice. That is true. However, it adds unnecessary mental burden to actually practice things like "insert leading semis" just to please ASI.
- Inserting leading semis is incredibly ugly.
- Hitting a semicolon asserts the end of a statement and provides a sense of completion.
- Semis are required in many languages and usually optional in others. We value cross-language consistency.

We require trailing commas in all cases `trailingComma: "all"`, which is different from the default `"es5"`. We use transpilers to ensure compatibility, but we value the minimal diff and ease to rearrange members that trailing commas provide.

```diff
const candidates = [
+ "ESLint",
  "React",
  "Prettier",
  "TypeScript",
- "ESLint",
];
```

Object literals are separated by spaces with the default `bracketSpacing: true`. This improves readability, since otherwise, object literals can be easily confused with blocks, and the number of members will make the boundaries hard to notice.

JSX opening tags' closing brackets are kept at the end of the last line with `bracketSameLine: true`, which is different from the default. This is because of **minimal code area** and we believe the readability is not detracted, while a lone `>` is often weird-looking.

Arrow functions' parentheses are always required with the default `arrowParens: "always"`. This means minimal effort to add a parameter, and also to annotate the return type of the function.

### Curly braces

#### [`curly`](https://eslint.org/docs/rules/curly)

- Severity: warn
- Configuration:
  - Require omitting braces only when the body is a single-line statement (`"multi-or-nest"`)
  - Require `if` and `else` to have consistent curly braces

We want to omit curly braces for single-line statements, because they are more concise.

```ts
if (foo) bar();
if (!a) return null;
if (doX()) {
  const b = doX();
  if (b !== "Nonexistent") return `Result: ${b}`;
  return null;
}
```

However, omitting curly braces when the body is multi-line could quickly make the code lose focus, as is this example:

```ts
if (!foo)
  foo = {
    bar: 1,
    qux: 2,
  }; // Where does the block end? Where does the assignment end?
```

### Comments

#### [`capitalized-comments`](https://eslint.org/docs/rules/capitalized-comments)

- Severity: off

Since we require comments to wrap at 80 characters, the next line will start with lowercase. The number of false-positives forces us to turn it off. However, comments that are not mere words should almost always be capitalized.

```ts
// This should be a line of comment explaining why we need to apply the
// transformation `doX` on `b`. However, because it's wrapped at 80 characters,
// the "transformation" is the start of a comment line and would need to be
// capitalized, which is not good.
const a = doX(b);
```

#### [`max-len`](https://eslint.org/docs/rules/max-len)

- Severity: warning
- Configuration:
  - Only consider comments (`code: Infinity, comments: 80`)
  - Ignore disable directives, JSDoc, and URLs (`ignorePattern: "(eslint-disable|@)", ignoreUrls: true`)

This makes the comments more consistent with the rest of the code, and also ensures that writing very long comments can still be formatted nicely. Note that this usually requires manual fixing as most formatters don't wrap comments.

If a comment line only crosses the 80-character limit by one word, consider rephrasing the comment to make it below 80 characters, or wrap two words to the next line.

```ts
// Theoretically, we can only wrap 1 word for this line, but we wrap 2
// for aesthetics.
```

#### [`multiline-comment-style`](https://eslint.org/docs/rules/multiline-comment-style)

- Severity: error
- Configuration:
  - Require each line to begin with `//` (`"separate-lines"`)

We use single-line comments, because otherwise, if we wrap comments at 80 characters, adding a few words may result in changing the entire comment's style, which is unfavorable. In addition, commenting out a chunk of text only requires <kbd>Ctrl</kbd> + <kbd>/</kbd>.

## Variables

### `var`

We disallow `var` statements. `var` is fully predated by `let` / `const` and its hoisting behavior makes code harder to debug.

#### [`block-scoped-var`](https://eslint.org/docs/rules/block-scoped-var)

- Severity: error

Because `var`s are forbidden altogether, this rule is mostly moot.

### `let`/`const`

#### [`no-const-assign`](https://eslint.org/docs/rules/no-const-assign)

- Severity: error
- Related:
  - `ts(2588): Cannot assign to 'a' because it is a constant.`

Re-assigning const variables panics at runtime.

```ts twoslash
// @errors: 2588
const a = 1;
a = 2; // -> TypeError: Assignment to constant variable.
```

### Globals

#### [`no-console`](https://eslint.org/docs/rules/no-console)

- Severity: can be enabled

`console.log` is commonly left as debugging artifacts and can occasionally disrupt the console log formatting. For example, Webpack has the unified [logger interface](https://webpack.js.org/api/logging/) for emitting messages. Projects are encouraged to encapsulate their own logger instance as well for unified message formatting and semantics.

However, in more casual projects without a wrapped logger, using `console.log` may be intentional. This rule can be overridden in userland.

### Naming conventions

## Operations

### Arithmetics

#### [`eqeqeq`](https://eslint.org/docs/rules/eqeqeq)

- Severity: error
- Configuration:
  - Always require `===` (`"always"`)
  - Ignore the case of comparing to `null` (`null: "ignore"`)

Regular equality can result in surprising results (e.g. `1 == "1"`). Although this is partly mitigated by TypeScript's type-checking, it can still become a pitfall on module boundaries without strict input validations.

`null` is exempted from this rule. This is because `a == null` is idiomatically used to exclude both `null` and `undefined`.

```ts twoslash
function foo(a?: string | null) {
  if (a == null) {
    return "Nullish";
  }
  return a; // Only strings are left here
}
```

#### [`no-bitwise`](https://eslint.org/docs/rules/no-bitwise)

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

#### [`no-compare-neg-zero`](https://eslint.org/docs/rules/no-compare-neg-zero)

- Severity: error

Comparing against negative zero is either a typo (an extra `-`) or is intended to be `Object.is`. In either case, such usage should be reported.

### Object members

#### [`dot-notation`](https://eslint.org/docs/rules/dot-notation)

- Severity: error
- Configuration:
  - Keywords are treated the same as ordinary properties (non-ES3 compatible) (`allowKeywords: true`)

From the ESLint docs:

> the dot notation is often preferred because it is easier to read, less verbose, and works better with aggressive JavaScript minimizers.

## Control flow

### Conditionals

#### [`no-cond-assign`](https://eslint.org/docs/rules/no-cond-assign)

- Severity: error
- Configuration:
  - Always disallow assignments in conditions (`"always"`)

Assignments in conditionals are a common source of mistakes.

```ts
if ((res.status = 404)) {
  return "Not found";
}
// res.status becomes 404
```

There is never a case where putting assignments in conditionals does not significantly subtract from readability.

```ts
function setHeight(node: HTMLElement) {
  let someNode = node;
  do someNode.style.height = "100px";
  while ((someNode = someNode.parentNode));
  // ^ First parse: this is an equality test?
  // ^ Second parse: this is an assignment. Is that a mistake?
  // ^ Third parse: oh, it's intended because of the extra brackets
}
```

Always write assignments as a separate statement:

```ts
function setHeight(node: HTMLElement) {
  let someNode = node;
  while (someNode) {
    someNode.style.height = "100px";
    someNode = someNode.parentNode;
  }
}
```

It also permits us to use `while` instead of `do-while`, which is still a minor readability improvement.

#### [`no-constant-condition`](https://eslint.org/docs/rules/no-constant-condition)

- Severity: error
- Configuration:
  - Disallow constant conditions in loops (`"always"`)

Constant conditions that always evaluate to truthy or falsy can be refactoring artifacts. In addition, infinite loops are also forbidden to prompt developers to consider alternatives like explicit exit conditions instead of `break` statements, or `setInterval`.

```ts
// Instead of this:
while (true) {
  curNode = findNextNode(curNode);
  if (isTargetNode(curNode)) break;
}

// Do this:
do {
  curNode = findNextNode(curNode);
} while (!isTargetNode(curNode));
```

### Loops

#### [`for-direction`](https://eslint.org/docs/rules/for-direction)

- Severity: error

The for loop should always be iterating in the correct direction.

```ts
for (let i = 10; i >= 0; i++) console.log(i); // -> 10 11 12 13 ...
```

#### [`guard-for-in`](https://eslint.org/docs/rules/guard-for-in)

TODO

#### [`no-continue`](https://eslint.org/docs/rules/no-continue)

- Severity: off

TODO: find solid examples

### `switch-case`

#### [`default-case`](https://eslint.org/docs/rules/default-case)

- Severity: off

We do not require a default case, because it is very idiomatic to use `switch-case` when we do know that the value falls within a finite range.

```ts twoslash
type TreeNode =
  | { type: "leaf"; value: number }
  | { type: "parent"; children: TreeNode[] };

function transformNode(node: TreeNode) {
  switch (node.type) {
    case "leaf":
      node.value++;
      break;
    case "parent":
      node.children.forEach(transformNode);
      break;
    default:
      // This will never happen given proper boundary typing and input
      // validation, but results in useless non-test-covered lines. Just omit
      // the default case.
      // @ts-expect-error: should never happen
      throw new Error(`Bad node type ${node.type}`);
  }
}
```

More favorably, _only_ use switch-case if the matched value has a finite range (e.g. a union of literals). If it can be any value, use if-else instead.

```ts twoslash
type Res =
  | {
      code: 200;
      body: string;
      error: never;
    }
  | { code: number; error: string; body: never };

function handleResponse(res: Res) {
  if (res.code === 404) {
    return "Not found";
  } else if (res.code === 500) {
    return "Server error";
  } else if (res.code === 200) {
    return res.body;
  } else {
    return `Unknown response shape: ${JSON.stringify(res)}`;
  }
}
```

#### [`default-case-last`](https://eslint.org/docs/rules/default-case-last)

- Severity: error

In case where there's indeed a default case, we require it to be placed last. This is because a default case means, well, that all _previous_ matches have failed. When reading the code, the reader is more interested in what the _previous_ specified cases are rather than what the fallback behavior is.

#### [`no-case-declarations`](https://eslint.org/docs/rules/no-case-declarations)

- Severity: error

If a case contains lexical declarations, it must be wrapped in a block. This is because the `case` are more like labels and do not create their own scope. This may lead to unexpected bugs, especially if there's fallthrough.

TODO: examples?

## Functions

### Declaration

#### [`func-style`](https://eslint.org/docs/rules/func-style)

- Severity: warning
- Configuration:
  - Use function declaration over function expression (`"declaration"`)
  - Allow arrow functions when using expressions (`allowArrowFunctions: true`)

#### [`func-names`](https://eslint.org/docs/rules/func-names)

#### [`func-name-matching`](https://eslint.org/docs/rules/func-name-matching)

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

### Parameters

#### [`default-param-last`](https://eslint.org/docs/rules/default-param-last)

- Severity: off

See [TypeScript](./typescript.md).

#### [`no-caller`](https://eslint.org/docs/rules/no-caller)

- Severity: error

From the ESLint docs:

> The use of `arguments.caller` and `arguments.callee` make several code optimizations impossible. They have been deprecated in future versions of JavaScript and their use is forbidden in ECMAScript 5 while in strict mode.

### Return statements

#### [`consistent-return`](https://eslint.org/docs/rules/consistent-return)

- Severity: error
- Configuration:
  - Require not declaring `undefined` in return statement if not needing a return value (`treatUndefinedAsUnspecified: false`)
- Related:
  - `ts(7030): Not all code paths return a value.` (with [`noImplicitReturns`](https://www.typescriptlang.org/tsconfig#noImplicitReturns))

We require all return statements to be either explicitly returning a value or implicitly returning `undefined` (in case of `void`-returning functions). Because of the type-checking by TypeScript that makes implicitly returned `undefined` more noticeable, this is more for aesthetic purposes. It also helps us find all possible return values at a glance.

### Arrow functions

#### [`arrow-body-style`](https://eslint.org/docs/rules/arrow-body-style)

- Severity: error
- Configuration:
  - Require omitted braces and implicit return when possible (`"as-needed"`)
  - The rule does not treat object literals as special case (`requireReturnForObjectLiteral: false`)

Implicit returning is much cleaner.

```ts
const peopleWithIDs = people.map((p, id) => ({ ...p, id }));
```

Useless braces and `return`s can be artifacts from refactoring, which increases indentation and line count without much value. Enforcing implicit return also encourages future refactors to fit logic within one expression instead of using multiple assignments and control flow.

#### [`no-confusing-arrow`](https://eslint.org/docs/rules/no-confusing-arrow)

TODO

### When to create functions

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

## Async operations

### Promises

#### [`no-async-promise-executor`](https://eslint.org/docs/rules/no-async-promise-executor)

- Severity: error

From the ESLint docs:

> The executor function can also be an `async function`. However, this is usually a mistake, for a few reasons:
>
> - If an async executor function throws an error, the error will be lost and won't cause the newly-constructed `Promise` to reject. This could make it difficult to debug and handle some errors.
> - If a Promise executor function is using `await`, this is usually a sign that it is not actually necessary to use the `new Promise` constructor, or the scope of the `new Promise` constructor can be reduced.

### Paralleling

#### [`no-await-in-loop`](https://eslint.org/docs/rules/no-await-in-loop)

- Severity: off

While this rule enforces a practice that we are in favor of—prefer paralleling promises instead of firing sequentially, the number of false-positives is overwhelming. Sometimes async operations' order does matter, for example, if we care about the priority of each operation, or when each operation modifies the global state.

```ts twoslash
// @filename: deps.d.ts
declare module "fs-extra" {
  export function pathExists(path: string): Promise<boolean>;
}

// @filename: index.ts
// ---cut---
import fs from "fs-extra";

/**
 * When multiple files match, we return the one with priority of JSON > YAML > TOML
 */
async function findDataFile() {
  const fileNames = ["data.json", "data.yml", "data.toml"];
  for (const fileName of fileNames) {
    if (await fs.pathExists(fileName)) {
      return fileName;
    }
  }
  return null;
}
```

The corresponding "nice" way to do this is too obscure and far above being understandable by average-intelligents, and extracting it as a utility function is almost never worthwhile.

```ts twoslash
function executeAsyncSequential<T>(arr: T[], action: (a: T) => Promise<void>) {
  return arr.reduce(
    (res, elem) => res.then(() => action(elem)),
    Promise.resolve(),
  );
}

function findAsyncSequential<T>(arr: T[], matcher: (a: T) => Promise<boolean>) {
  return arr.reduce(async (res, elem) => {
    if (await res) return res;
    if (await matcher(elem)) return elem;
    return undefined;
  }, Promise.resolve<T | undefined>(undefined));
}
```

## Arrays

### Array methods

#### [`array-callback-return`](https://eslint.org/docs/rules/array-callback-return)

- Severity: error
- Configuration:
  - Disallow `return;` to implicitly mean `return undefined;` (`allowImplicit: false`)
  - Enforce that `Array#forEach` callback doesn't return a value (`checkForEach: true`)

The intention of this rule is clear: to make the usage of array methods more appropriate. `Array#forEach` is the only method that's designed to be purely for its side-effects, while all the other methods should not only return a value, but also strive to be side-effect-free. Note that TypeScript doesn't check the return type of callbacks, because the callbacks are very loosely typed.

Note that this rule can false-positive when calling a method on a non-array object. However, it's still made an error because:

- The necessity of enforcing callback return values far outweighs the risk of false-positive
- Most APIs that are called `map` or `filter` are sanely designed and function in a similar fashion as array methods.

## Class

### General

#### [`max-classes-per-file`](https://eslint.org/docs/rules/max-classes-per-file)

- Severity: off

Unlike languages like Java where one-class-per-file is mandated, classes in JS are a very granular unit of data and doesn't represent the entire module. Constraining the number of classes doesn't make sense in JS.

#### [`no-class-assign`](https://eslint.org/docs/rules/no-class-assign)

TODO

### Constructors

#### [`constructor-super`](https://eslint.org/docs/rules/constructor-super)

- Severity: error
- Related:
  - `ts(2335): 'super' can only be referenced in a derived class.`
  - `ts(2377): Constructors for derived classes must contain a 'super' call.`
  - `ts(17009): 'super' must be called before accessing 'this' in the constructor of a derived class.`

It's a runtime error if an extended class isn't constructed with `super()` or if a base class calls `super()`.

```ts twoslash
// @errors: 2335 2377 17009 2339
class Base {
  constructor() {
    super(); // -> SyntaxError: 'super' keyword unexpected here
  }
}

class Extended extends Base {
  b: number;

  constructor() {
    this.b = 2; // -> ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
  }
}
```

#### [`new-cap`](https://eslint.org/docs/rules/new-cap)

TODO

#### [`no-constructor-return`](https://eslint.org/docs/rules/no-constructor-return)

- Severity: error

Constructors' return values are useless. You can't call it as a normal method, after all.

```ts
class A {
  constructor() {
    return "foo";
  }
}

const a = new A().constructor(); // -> TypeError: Class constructor A cannot be invoked without 'new'
```

### Members

#### [`class-methods-use-this`](https://eslint.org/docs/rules/class-methods-use-this)

- Severity: off

Unlike other languages like Java where every instance would contain the same static method, static methods only exist on the class itself in JavaScript. This means it should rather be up to the developer to decide whether it should be a static or instance method, since there can be semantic differences.

This rule would also report when inheriting and overriding a super method, which is not always desirable. It's turned off both because of the number of false-positives (where instance methods are necessary) and because the semantic differences.

#### [`lines-between-class-members`](https://eslint.org/docs/rules/lines-between-class-members)

- Severity: off

Often times, it makes sense to group related methods or getter/setters together without any line breaks, because they look so similar. Note that zero/one line break are the only allowed separations in Prettier—two line breaks are collapsed to one. Therefore, maintaining the semantics of grouping is important.

### Accessors

#### [`accessor-pairs`](https://eslint.org/docs/rules/accessor-pairs)

- Severity: error
- Configuration:
  - Check class members in addition to object definitions (`enforceForClassMembers: true`)
  - Report setters without getters (`getWithoutSet: true`)
  - Report getters without setters (`setWithoutGet: true`)
- Related:
  - `ts(2540): Cannot assign to 'X' because it is a read-only property.`

Accessors must be symmetrical. A getter without setter doesn't forbid setting the variable, but the re-assignment is silently ignored.

```ts twoslash
// @errors: 2540
class Foo {
  get bar() {
    return 1;
  }
}

const foo = new Foo();
foo.bar = 2; // -> In JS, it succeeds without any warning!
console.log(foo.bar); // -> 1
```

To create read-only members, define a setter that throws an error.

```ts twoslash
class Foo {
  get bar() {
    return 1;
  }

  set bar(value: number) {
    throw new Error("'bar' is readonly");
  }
}

const foo = new Foo();
foo.bar = 2; // -> Throws error
```

TypeScript will also report attempts to assign to a read-only member that doesn't have a setter.

A setter without getter violates the basic expectations of member-accessing. More importantly, TypeScript will not warn about such case, and the property access returns `undefined`.

```ts twoslash
class Foo {
  #privateBar = 1;

  set bar(val: number) {
    this.#privateBar = val;
  }
}

const foo = new Foo();
foo.bar = 2;
console.log(foo.bar); // -> undefined
```

If a setter's sole purpose is to induce side-effects on internal state, use a method instead.

```ts twoslash
class Foo {
  #privateBar = 1;

  setBar(val: number) {
    this.#privateBar = val;
  }
}

const foo = new Foo();
foo.setBar(2);
```

#### [`getter-return`](https://eslint.org/docs/rules/getter-return)

- Severity: error
- Configuration:
  - Do not allow implicitly returning `undefined` (`allowImplicit: false`)
- Related:
  - `ts(2378): A 'get' accessor must return a value.`

A getter must explicitly return a value. Otherwise, TypeScript will give a weird type of `void`.

```ts twoslash
class Foo {
  get bar() {
    return;
  }
}

const foo = new Foo();
console.log(foo.bar); // Type is "void"?
```

#### [`grouped-accessor-pairs`](https://eslint.org/docs/rules/grouped-accessor-pairs)

- Severity: off

We do not enforce that accessors appear in pairs, because it's also common to have all getters in one place and setters in another. Since we mandate symmetric getters and setters, we aren't worried about the absence of the other.

```ts
class Foo {
  #a: number;
  #b: number;

  // Getters
  get a() {
    return this.#a;
  }
  get b() {
    return this.#a;
  }

  // Setters
  set a(val: number) {
    this.#a = val;
  }
  set b(val: number) {
    this.#b = val;
  }
}
```
