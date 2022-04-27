#!/usr/bin/env node
import prompts from "prompts";
import pico from "picocolors";
import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import cp, { type SpawnSyncReturns } from "node:child_process";

function exec(
  command: string,
  options: { times?: number; exitEarly?: boolean } = {},
) {
  const { times = 1, exitEarly = false } = options;
  console.log(pico.gray(`$ ${command}`));
  function tryOnce(v: boolean, index: number) {
    try {
      cp.execSync(command, { encoding: "utf-8", stdio: "inherit" });
      return true;
    } catch (err) {
      if (((e): e is SpawnSyncReturns<string> => true)(err)) {
        if (err.stdout) console.log(err.stdout);
        if (err.stderr) console.log(err.stderr);
        console.log(pico.red(`Command exited with code ${err.status}.`));
        if (index < times - 1) console.log(pico.cyan("Retrying..."));
      }
      return false;
    }
  }
  const success = Array.from({ length: times }, () => true).some(tryOnce);
  if (!success) {
    if (exitEarly) process.exit(1);
    console.log(
      pico.cyan(
        `Continuing to the next step. You can re-run "${command}" later on yourself.`,
      ),
    );
  }
}

function pathExists(file: string) {
  return fs
    .access(file)
    .then(() => true)
    .catch(() => false);
}

/**
 * Adopted from fs-extra.
 */
async function outputFile(file: string, data: Buffer) {
  const dir = path.dirname(file);
  if (dir !== "." && !(await pathExists(file)))
    await fs.mkdir(dir, { recursive: true });
  return fs.writeFile(file, data);
}

if (process.argv.includes("--version") || process.argv.includes("-v")) {
  console.log(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/prefer-ts-expect-error
    // @ts-ignore: package.json is fine to be outside
    (await import("../package.json", { assert: { type: "json" } })).default
      .version,
  );
  process.exit(0);
}

console.log(pico.cyan("Starting to scaffold new JC project..."));
const { name, description, usingReact } = await prompts(
  [
    {
      type: "text",
      name: "name",
      message: "What should we call this project?",
      async validate(value) {
        if (typeof value !== "string" || !/^[a-z-]+$/.test(value))
          return "Not a valid package name.";
        if (await pathExists(value)) return "The directory already exists.";
        return true;
      },
    },
    {
      type: "text",
      name: "description",
      message: "Brief description?",
    },
    {
      type: "confirm",
      name: "usingReact",
      message: "Using React?",
    },
  ],
  { onCancel: () => process.exit(0) },
);
const packageJSON = {
  name,
  description,
  version: "0.0.0",
  author: "Joshua Chen <sidachen2003@gmail.com>",
  license: "MIT",
  publishConfig: {
    access: "public",
    registry: "https://registry.npmjs.org",
  },
  repository: {
    type: "git",
    url: `git+https://github.com/jc-verse/${name}.git`,
  },
  bugs: {
    url: `https://github.com/jc-verse/${name}/issues`,
  },
  homepage: `https://jc-verse.github.io/${name}/`,
  scripts: {
    format: "prettier -w .",
    lint: 'eslint "**/*.{js,ts,jsx,tsx}"',
    prepare: "husky install",
  },
};

async function rReadDir(dir: string): Promise<[string, Buffer][]> {
  const dirents = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    dirents.map(async (dirent) => {
      const res = path.join(dir, dirent.name);
      return dirent.isDirectory()
        ? rReadDir(res)
        : [[res, await fs.readFile(res)] as [string, Buffer]];
    }),
  );
  return files.flat();
}

await fs.mkdir(name);
process.chdir(name);

const templateRoot = fileURLToPath(new URL("../template", import.meta.url));
await Promise.all(
  (
    await rReadDir(templateRoot)
  ).map(([p, c]) =>
    outputFile(path.relative(templateRoot, p).replace(/^_/, "."), c),
  ),
);

await Promise.all([
  fs.writeFile("package.json", `${JSON.stringify(packageJSON, null, 2)}\n`),
  fs.writeFile(
    "README.md",
    `# ${name}

${description}

## Installation

## Usage

## APIs
`,
  ),
]);

const dependencies = [
  "@typescript-eslint/eslint-plugin",
  "@typescript-eslint/parser",
  "cspell",
  "eslint",
  "eslint-config-jc",
  "eslint-plugin-header",
  "eslint-plugin-import",
  "husky",
  "lint-staged",
  "prettier",
  "prettier-config-jc",
  "tsconfig-jc",
  "typescript",
];

const eslintRC = {
  extends: usingReact ? ["jc"] : ["jc/base", "jc/import", "jc/typescript"],
  root: true,
};

const tsconfig = {
  extends: "tsconfig-jc",
  compilerOptions: {
    target: "es2020",
    lib: ["esnext", "dom"],
    rootDir: "./src",
    jsx: undefined as string | undefined,
  },
  include: ["src"],
  exclude: ["node_modules"],
};

if (usingReact) {
  dependencies.push(
    "eslint-plugin-react",
    "eslint-plugin-react-hooks",
    "eslint-plugin-jsx-a11y",
  );
  eslintRC.extends = ["jc"];
  tsconfig.compilerOptions.jsx = "react";
}

await fs.writeFile(".eslintrc", `${JSON.stringify(eslintRC, null, 2)}\n`);
await fs.writeFile("tsconfig.json", `${JSON.stringify(tsconfig, null, 2)}\n`);

// This often fails. Let's try multiple times.
exec("yarn set version stable", { times: 3 });
exec(`yarn add -D ${dependencies.sort().join(" ")}`);
exec("git init");
exec("yarn prepare");
exec("git add .");
exec("git commit -m 'initial commit'");
