---
slug: /
---

# Guide

## How to use

ESLint config:

```json
{
  "root": true,
  "extends": ["jc"]
}
```

Prettier config:

```json
"prettier-config-jc"
```

`.husky/pre-commit`:

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

yarn lint-staged --allow-empty
```

Package.json (you are strongly advised to use `husky` / `lint-staged`):

```json
{
  "scripts": {
    "format": "prettier -w .",
    "lint": "eslint \"**/*.{js,ts,jsx,tsx}\"",
    "prepare": "husky install"
  }
}
```

Run:

```bash
yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-jc eslint-plugin-header eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks husky lint-staged prettier typescript
```

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

### Clear developer intent

During refactor, a big hazard is unclarity of whether a specific construct is guarding against a potential edge-case, or simply being over-pessimistic. Do NOT program overly defensively—only when such edge-cases are actually reachable. For example, if there can only ever be three values passed to a switch-case, do not add a default case.
