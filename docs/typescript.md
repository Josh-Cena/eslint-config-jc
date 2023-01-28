---
sidebar_position: 3
---

# TypeScript

#### [`no-non-null-assertion`](https://typescript-eslint.io/rules/no-non-null-assertion)

- Severity: off

This rule has been turned off despite being in `@typescript-eslint/recommended`. There are a significant number of places where non-null assertions are inevitable:

**Weak built-in types**

Some TypeScript lib types are not accurate. One common example is regular expressions. The discussion is in [microsoft/TypeScript#32098](https://github.com/microsoft/TypeScript/issues/32098).

```ts twoslash
declare const commit: string;
// @errors: 2532
// ---cut---
const author = commit.match(/(?<name>.+),(?<time>\d+)/)?.groups.name;
// But I know that `name` always exists in `groups`!
```

**Control-flow analysis failure**

Control-flow analysis is not preserved across callback boundaries, because TypeScript cannot predict when a callback will be called. See [microsoft/TypeScript#9998](https://github.com/microsoft/TypeScript/issues/9998)

```ts twoslash
// @errors: 2721
import { useRef } from "react";

function useDemo() {
  const ref = useRef<(a: number) => void>(null);
  if (ref.current) {
    // Do other stuff...
    [1, 2, 3].forEach((a) => ref.current(a));
    // But I just checked `ref.current`!
  }
}
```

**Clearer developer intention**

Sometimes, you are really sure that a value exists, but TypeScript doesn't believe you.

```ts twoslash
// @errors: 2532
const managers = [
  { name: "npm", lockFile: "package-lock.json" },
  { name: "yarn", lockFile: "yarn.lock" },
  { name: "pnpm", lockFile: "pnpm-lock.yaml" },
] as const;
const lockFile = managers.find((obj) => obj.name === "npm").lockFile;
// It absolutely exists, but making it strongly typed is unnecessary trouble
```

This is also related to the previous two points in many cases, but in other cases where TypeScript cannot ensure existence with control-flow analysis, we need to convey developer intent through allowing `undefined` or not.
