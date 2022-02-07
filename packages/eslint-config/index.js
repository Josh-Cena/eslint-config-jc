module.exports = {
  root: true,
  reportUnusedDisableDirectives: true,
  extends: [
    "prettier",
    "./rules/base.js",
    "./rules/typescript.js",
    "./rules/typescript-typecheck.js",
    "./rules/import.js",
    "./rules/react.js",
    "./rules/jsx.js",
  ],
};
