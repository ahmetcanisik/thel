import { mkdirs as fs_mkdirs } from "fs-extra";
import path from "path";
import { MakeDirsOptions, FileNameType } from "./types";

/**
 * Create Directory
 * make dir with mkdir [dir_name]
 * @param dir_name
 */
export async function MakeDirs(
  dir_name: FileNameType,
  { noWarnings }: MakeDirsOptions = { noWarnings: false }
) {
  if (typeof dir_name !== "string") {
    dir_name = path.resolve(path.join(...dir_name));
  }

  try {
    await fs_mkdirs(dir_name)
      .catch((e: any) =>
        console.error(`Error: Don't created the ${dir_name} directory!`, e)
      );
  } catch (e: any) {
    console.error(`Error: Don't created the ${dir_name} directory!`, e);
  }
}
