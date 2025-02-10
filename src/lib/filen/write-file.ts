import { FileContentType, FileNameType, WriteFileOptions } from "./types";
import { writeFile as fs_writeFile } from "fs-extra";
import path from "path";

/**
 * Write file with asyncrounus
 * @param {FileNameType} file_name Can you specify file name please.
 * @param {FileContentType} file_content Can your specify file content please?
 * @param {WriteFileOptions} {options} Choose You'd like options.
 * @returns
 */
export async function WriteFile(
  file_name: FileNameType,
  file_content: FileContentType,
  { noWarnings }: WriteFileOptions = { noWarnings: false }
) {
  try {
    if (typeof file_name !== "string") {
      file_name = path.join(...file_name);
    }
    await fs_writeFile(file_name, file_content, "utf-8");
  } catch (e: any) {
    if (!noWarnings) console.error(`${file_name} dosyasına veri işlenirken bir sorun meydana geldi!`, e);
  }
}
