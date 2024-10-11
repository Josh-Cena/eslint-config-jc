import nPlugin from "eslint-plugin-n";
import tseslint from "typescript-eslint";
import globals from "globals";

export default tseslint.config({
  languageOptions: {
    globals: {
      ...globals.node,
      ...globals.nodeBuiltin,
    },
  },
  plugins: {
    // @ts-expect-error: TODO make an issue
    n: nPlugin,
  },
  rules: {
    // Callback-related
    "n/callback-return": "off",

    "n/exports-style": ["error", "module.exports", { allowBatchAssign: false }],

    // Checked by TypeScript
    "n/file-extension-in-import": "off",

    // On-demand loading is useful
    "n/global-require": "off",

    // Callback-related
    "n/handle-callback-err": "off",

    // Errors on TypeScript bin
    "n/hashbang": "off",

    // Callback-related
    "n/no-callback-literal": "off",

    "n/no-deprecated-api": "error",

    "n/no-exports-assign": "error",

    // Shadowed by import/no-extraneous-dependencies
    "n/no-extraneous-import": "off",

    // Shadowed by import/no-extraneous-dependencies
    "n/no-extraneous-require": "off",

    // Checked by TypeScript
    "n/no-missing-import": "off",

    // Checked by TypeScript
    "n/no-missing-require": "off",

    // Not helpful
    "n/no-mixed-requires": "off",

    "n/no-new-require": "error",

    "n/no-path-concat": "warn",

    "n/no-process-env": "off",

    // Useful in theory, but too noisy
    "n/no-process-exit": "off",

    "n/no-restricted-import": "off",

    "n/no-restricted-require": "off",

    "n/no-sync": ["warn", { allowAtRootLevel: false }],

    "n/no-unpublished-bin": "error",

    "n/no-unpublished-import": "off",

    "n/no-unpublished-require": "off",

    "n/prefer-global/buffer": ["error", "always"],

    "n/prefer-global/console": ["error", "always"],

    "n/prefer-global/process": ["error", "always"],

    "n/prefer-global/text-decoder": ["error", "always"],

    "n/prefer-global/text-encoder": ["error", "always"],

    "n/prefer-global/url": ["error", "always"],

    "n/prefer-global/url-search-params": ["error", "always"],

    "n/prefer-node-protocol": "error",

    "n/prefer-promises/dns": "error",

    "n/prefer-promises/fs": "error",

    "n/process-exit-as-throw": "warn",
  },
});
