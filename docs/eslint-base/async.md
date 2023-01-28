---
sidebar_position: 8
---

# Async operations

## Promises

### [`no-async-promise-executor`](https://eslint.org/docs/rules/no-async-promise-executor)

- Severity: error

From the ESLint docs:

> The executor function can also be an `async function`. However, this is usually a mistake, for a few reasons:
>
> - If an async executor function throws an error, the error will be lost and won't cause the newly-constructed `Promise` to reject. This could make it difficult to debug and handle some errors.
> - If a Promise executor function is using `await`, this is usually a sign that it is not actually necessary to use the `new Promise` constructor, or the scope of the `new Promise` constructor can be reduced.

## Paralleling

### [`no-await-in-loop`](https://eslint.org/docs/rules/no-await-in-loop)

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
