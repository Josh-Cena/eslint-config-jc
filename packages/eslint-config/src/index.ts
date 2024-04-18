import tseslint from "typescript-eslint";
import tseslintParser from "@typescript-eslint/parser";
import type { TSESLint } from "@typescript-eslint/utils";
import prettierRules from "eslint-config-prettier";

import baseRules from "./base.js";
import regexRules from "./regex.js";
import typescriptRules from "./typescript.js";
import importRules from "./import.js";
import reactRules from "./react.js";
import jsxRules from "./jsx.js";

import typescriptTypeCheckRules from "./typescript-typecheck.js";
import nodeRules from "./node.js";
import reactClassCompRules from "./react-class-comps.js";
import reactPropTypesRules from "./react-prop-types.js";

function expandConfig(
  config: TSESLint.FlatConfig.ConfigArray,
  enabled: undefined | boolean | TSESLint.FlatConfig.FileSpec[],
): TSESLint.FlatConfig.ConfigArray {
  if (enabled === true) return config;
  if (!enabled) return [];
  return config.map((v) => ({
    files: enabled,
    ...v,
  }));
}

export default function configCreator({
  react,
  typescriptTypeCheck,
  node,
  reactClassComp,
  reactPropTypes,
}: {
  react?: boolean | TSESLint.FlatConfig.FileSpec[];
  typescriptTypeCheck?: boolean | TSESLint.FlatConfig.FileSpec[];
  node?: boolean | TSESLint.FlatConfig.FileSpec[];
  reactClassComp?: boolean | TSESLint.FlatConfig.FileSpec[];
  reactPropTypes?: boolean | TSESLint.FlatConfig.FileSpec[];
} = {}): TSESLint.FlatConfig.ConfigArray {
  return tseslint.config(
    {
      linterOptions: {
        reportUnusedDisableDirectives: true,
      },
      languageOptions: {
        ecmaVersion: "latest",
        parser: tseslintParser,
      },
    },
    prettierRules,
    ...baseRules,
    ...regexRules,
    ...typescriptRules,
    ...importRules,
    ...expandConfig([...reactRules, ...jsxRules], react),
    ...expandConfig(typescriptTypeCheckRules, typescriptTypeCheck),
    ...expandConfig(nodeRules, node),
    ...expandConfig(reactClassCompRules, reactClassComp),
    ...expandConfig(reactPropTypesRules, reactPropTypes),
  );
}
