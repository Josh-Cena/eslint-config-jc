import cp, { type SpawnSyncReturns } from "node:child_process";
import pico from "picocolors";
import fs from "node:fs/promises";
import path from "node:path";

export function exec(
  command: string,
  options: { times?: number; exitEarly?: boolean } = {},
): void {
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

export function pathExists(file: string): Promise<boolean> {
  return fs
    .access(file)
    .then(() => true)
    .catch(() => false);
}

/**
 * Adopted from fs-extra.
 */
export async function outputFile(file: string, data: Buffer): Promise<void> {
  const dir = path.dirname(file);
  if (dir !== "." && !(await pathExists(file)))
    await fs.mkdir(dir, { recursive: true });
  return fs.writeFile(file, data);
}
