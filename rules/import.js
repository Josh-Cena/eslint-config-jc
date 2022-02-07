// This section is not completed.
// TODO turn on more rules

module.exports = {
  plugins: ["import"],
  rules: {
    // This rule reports when using esModuleInterop
    "import/default": "off",

    "import/first": "error",

    "import/named": "error",

    // Not as useful
    "import/namespace": "off",

    "import/newline-after-import": "error",

    "import/no-absolute-path": "error",

    "import/no-duplicates": "error",

    "import/no-unresolved": ["error", { caseSensitive: true, commonjs: true }],

    // Going one directory above ensures transpilation doesn't mess with paths
    "import/no-useless-path-segments": "off",

    // When we use it, it's useful.
    "import/no-webpack-loader-syntax": "off",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".mjs"],
      },
    },
  },
};
