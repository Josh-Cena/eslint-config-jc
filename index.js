module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    node: true,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  reportUnusedDisableDirectives: true,
  plugins: ["react-hooks", "jsx-a11y"],
  extends: ["prettier", "./rules/base.js", "./rules/typescript.js"],
  rules: {},
};
