module.exports = {
  root: true,
  extends: [
    "prettier",
    "./rules/base.js",
    "./rules/regex.js",
    "./rules/typescript.js",
    "./rules/import.js",
    "./rules/react.js",
    // Not included by default
    // "./rules/react-class-comps.js",
    // "./rules/react-prop-types.js",
    "./rules/jsx.js",
  ],
};
