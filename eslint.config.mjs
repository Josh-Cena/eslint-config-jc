// @ts-check

import jcRules from "eslint-config-jc";
import tseslint from "typescript-eslint";

export default tseslint.config(
  ...jcRules({
    node: true,
    react: true,
  }),
  {
    ignores: [
      "node_modules",
      ".yarn",
      "**/dist/",
      "**/build/",
      "**/.docusaurus/",
    ],
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
  {
    files: ["**/rules/**.js"],
    rules: {
      "sort-keys": "warn",
    },
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    ...tseslint.configs.disableTypeChecked,
  },
);
