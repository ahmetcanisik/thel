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
    dir_name = path.join(...dir_name);
  }

  try {
    await fs_mkdirs(dir_name)
      .then(() =>
        console.log(noWarnings ? "" : `${dir_name} Successfully created`)
      )
      .catch((e: any) =>
        console.error(noWarnings ? "" : "Something went wrong on making dirs!")
      );
  } catch (e: any) {
    console.error(noWarnings ? "" : "Something went wrong on making dirs!");
  }
}
