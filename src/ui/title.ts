import chalk from "chalk";
import { TitleOptions } from "./types";

/**
 *
 * @param name project name
 * @param version  project version
 * @returns title
 */
export function title(
  name: string,
  version: string,
  { dontPrint }: TitleOptions = { dontPrint: false }
): string {
  const value = `${chalk.redBright(name.toUpperCase())} ${chalk.dim(`v${version}`)}`;
  if (!dontPrint) console.log(value);
  return value;
}
