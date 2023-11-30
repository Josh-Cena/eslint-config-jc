---
sidebar_position: 4
---

# Control flow

## Conditionals

### [`no-cond-assign`](https://eslint.org/docs/rules/no-cond-assign)

- Severity: error
- Configuration:
  - Always disallow assignments in conditions (`"always"`)

Assignments in conditionals are a common source of mistakes.

<!-- prettier-ignore -->
```ts
if (res.status = 404) {
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

There are some cases where assignments in conditionals are useful, such as to reduce code duplication:

```ts
let input;
while ((input = getInput())) {
  // ...
}
```

In such cases, you can either disable the rule, or use an explicit equality check (`while ((input = getInput()) !== null)`). We don't make ESLint special-case this because Prettier automatically adds braces, which means it's not going to end up reporting anything.

### [`no-constant-condition`](https://eslint.org/docs/rules/no-constant-condition)

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

## Loops

### [`for-direction`](https://eslint.org/docs/rules/for-direction)

- Severity: error

The for loop should always be iterating in the correct direction, which means increment + check for upper bound, or decrement + check for lower bound.

```ts
for (let i = 10; i >= 0; i++) console.log(i); // -> 10 11 12 13 ...
```

### [`guard-for-in`](https://eslint.org/docs/rules/guard-for-in)

- Severity: off

We ban `for...in` loops altogether via `no-restricted-syntax`. In the rare case where you actually use `for...in`, we assume you know what you are doing and you actually intend to visit the prototype chain.

### [`no-continue`](https://eslint.org/docs/rules/no-continue)

- Severity: off

`continue` is a way of early-bailing to avoid creating extra indentation. Instead of this:

```ts
for (const line of lines) {
  if (line.trim().length > 0) {
    // 20 lines of handling this line...
  }
}
```

Prefer this:

```ts
for (const line of lines) {
  if (line.trim().length === 0) {
    continue;
  }
  // 20 lines of handling this line...
}
```

## `switch-case`

### [`default-case`](https://eslint.org/docs/rules/default-case)

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

You may ask, what if the type doesn't reflect the full range of possible runtime input? The answer is, you are missing input validation. Writing incomplete types is going to cause troubles elsewhere, if not here.

### [`default-case-last`](https://eslint.org/docs/rules/default-case-last)

- Severity: error

In case where there's indeed a default case, we require it to be placed last. This is because a default case means, well, that all _previous_ matches have failed. When reading the code, the reader is more interested in what the _previous_ specified cases are rather than what the fallback behavior is.

### [`no-case-declarations`](https://eslint.org/docs/rules/no-case-declarations)

- Severity: error

If a case contains lexical declarations, it must be wrapped in a block. This is because the `case` are more like labels and do not create their own scope. This may lead to unexpected bugs, especially if there's fallthrough.

TODO: examples?

## Complexity

We don't think there's a single good metric of code complexity. We optimize for readability instead, and sometimes workarounds to "high complexity" code actually reduces readability by fragments the code into chunks that are hard to trace. Therefore, most of the rules aiming to limit complexity are disabled.

### [`complexity`](https://eslint.org/docs/rules/complexity)

- Severity: off

### [`max-depth`](https://eslint.org/docs/rules/max-depth)

- Severity: off

### [`max-lines`](https://eslint.org/docs/rules/max-lines)

- Severity: off

### [`max-statements`](https://eslint.org/docs/rules/max-statements)

- Severity: off
