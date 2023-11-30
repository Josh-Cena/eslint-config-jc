---
sidebar_position: 6
---

# Objects & classes

## General

### [`max-classes-per-file`](https://eslint.org/docs/rules/max-classes-per-file)

- Severity: off

Unlike languages like Java where one-class-per-file is mandated, classes in JS are a very granular unit of data and doesn't represent the entire module. Constraining the number of classes doesn't make sense in JS.

### [`no-class-assign`](https://eslint.org/docs/rules/no-class-assign)

- Severity: error

Under no circumstance should you be reassigning a binding introduced by a declaration—this makes the variable's type hard to reason about. Class declarations are already immutable inside the declaration, so it should be immutable outside too. One niche case where reassignment is intended is for "decorators":

```ts
class Foo {}

Foo = decorate(Foo);
```

But you should use actual decorators instead.

## Constructors

### [`constructor-super`](https://eslint.org/docs/rules/constructor-super)

- Severity: error
- Related:
  - `ts(2335): 'super' can only be referenced in a derived class.`
  - `ts(2377): Constructors for derived classes must contain a 'super' call.`
  - `ts(17009): 'super' must be called before accessing 'this' in the constructor of a derived class.`

It's a runtime error if an extended class doesn't call `super()` or if a base class calls `super()`.

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

Note that the error can also be prevented by returning an object from the constructor.

### [`no-constructor-return`](https://eslint.org/docs/rules/no-constructor-return)

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

## Methods

### [`class-methods-use-this`](https://eslint.org/docs/rules/class-methods-use-this)

- Severity: off

Unlike other languages like Java where every instance contains the static methods, static methods only exist on the class itself in JavaScript. This means it should rather be up to the developer to decide whether it should be a static or instance method, since there can be semantic differences.

Often, a method that doesn't use `this` is used as a base implementation that requires overriding. Or, it's interacting with an external runtime system. (For example, `React.Component`'s `render()` method.) This rule is turned off both because of the number of false-positives (where instance methods are necessary) and because of the semantic differences.

## Accessors

### [`accessor-pairs`](https://eslint.org/docs/rules/accessor-pairs)

- Severity: error
- Configuration:
  - Check class members in addition to object definitions (`enforceForClassMembers: true`)
  - Report getters without setters (`getWithoutSet: true`)
  - Report setters without getters (`setWithoutGet: true`)
- Related:
  - `ts(2540): Cannot assign to 'X' because it is a read-only property.`

Accessors must be symmetrical. In non-strict mode, a getter without setter doesn't forbid setting the variable, but the re-assignment is silently ignored. In strict mode, it throws an error whose message cannot be customized.

```ts twoslash
// @errors: 2540
class Foo {
  get bar() {
    return 1;
  }
}

const foo = new Foo();
foo.bar = 2; // -> In non-strict mode, it succeeds without any warning!
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

TypeScript will also report attempts to assign to a read-only member that doesn't have a setter, so in a TypeScript project, you may want to override `getWithoutSet` to `false`.

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

### [`getter-return`](https://eslint.org/docs/rules/getter-return)

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

### [`grouped-accessor-pairs`](https://eslint.org/docs/rules/grouped-accessor-pairs)

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
