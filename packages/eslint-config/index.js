module.exports = {
  root: true,
  extends: [
    "prettier",
    "./rules/base.js",
    "./rules/regex.js",
    "./rules/typescript.js",
    "./rules/import.js",
    "./rules/react.js",
    "./rules/jsx.js",
    // Not included by default:
    // "./rules/typescript-typecheck.js",
    // "./rules/node.js",
    // "./rules/react-class-comps.js",
    // "./rules/react-prop-types.js",
  ],
};
