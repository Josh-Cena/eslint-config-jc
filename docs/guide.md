---
slug: /
---

# Guide

## Overarching principles

### Minimal code area

We want our code to span as little area as possible, given the same set of formatting rules. This means:

- Fewer levels of indentation
- Fewer useless lines
- More usage of new and concise syntax

As a simple example, instead of this:

```ts
const parseResult = {
  fileName,
  path,
  extension,
};
```

Prefer this:

```ts
const parseResult = { fileName, path, extension };
```

A rule that marginally improves readability but bloats the code area will not be considered.

### Code for averagely intelligent people

Our code is written for people of average intelligence and with reasonable experience of JavaScript/TypeScript. Therefore, we will:

- Not be afraid of using new syntax (especially if it helps with **minimal code area**)
- Not be afraid of preferring concise expressions and control flow instead of writing spaghetti code

We will not enable most rules that forbid syntaxes claimed to be "confusing for some people".
