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
  ],
};
