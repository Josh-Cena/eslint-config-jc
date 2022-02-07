# eslint-config-jc

My personal coding style.

This is designed to be a replacement for `eslint:recommended`, `plugin:react-hooks/recommended`, `plugin:@typescript-eslint/recommended`, and of course, everyone's favorite `airbnb`. It also extends `prettier`.

## Dependencies

It requires the following plugins:

- `eslint-plugin-react-hooks`
- `@typescript-eslint/eslint-plugin`
- `eslint-plugin-import`
- `eslint-plugin-jsx-a11y`
- `eslint-plugin-react`

Although peer dependencies are evil, we can't self-install these plugins if the downstream user depends on a different version—the wrong one will be resolved.

## Configuration philosophy

When analyzing whether a rule should be `error`, `warn`, or `off`, the following assumptions are made:

- ESLint is run in CI
- The editor has proper syntax highlighting and also integrates ESLint
- There are pre-commit hooks that run `eslint --fix`

Therefore, the semantic differences between `warn` or `error` are:

- An error is calling to immediate coder attention, while a warning can be delayed to the future
- Warnings can be safely `eslint-disable`'d
- Errors block CI and are never allowed in the codebase

A rule will be an error only if one of the following is true:

- This is definitely a mistake (no sane code would look like this), _or_
- This rule is fixable (and therefore doesn't block CI anyways assuming a normal development process)

A rule will be a warning if:

- There can be foreseeable false-positives, _or_
- It's stylistic

A rule will be off if:

- It enforces a style that goes against our own style guide
- It forbids a practice that we find value in

A rule will _not_ be off solely because:

- TypeScript or other rules enforce the same practice
- It enforces a practice concerning a construct that we never use in the first place

Instead, in such case, we'd rather have multiple errors.
