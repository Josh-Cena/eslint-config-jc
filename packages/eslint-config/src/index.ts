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

export default function configCreator({
  react,
  typescriptTypeCheck,
  node,
  reactClassComp,
  reactPropTypes,
}: {
  react?: boolean;
  typescriptTypeCheck?: boolean;
  node?: boolean;
  reactClassComp?: boolean;
  reactPropTypes?: boolean;
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
    ...(react ? reactRules : []),
    ...(react ? jsxRules : []),
    ...(typescriptTypeCheck ? typescriptTypeCheckRules : []),
    ...(node ? nodeRules : []),
    ...(reactClassComp ? reactClassCompRules : []),
    ...(reactPropTypes ? reactPropTypesRules : []),
  );
}
