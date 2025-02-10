import { FileNameType, ReadFileOptions } from "./types";
import { readFile as fs_readFile } from "fs-extra";
import path from "path";

/**
 * Read file with asyncrounus
 * @param file_name
 * @returns
 */
export async function ReadFile(
  file_name: FileNameType,
  { parseToJson }: ReadFileOptions = { parseToJson: false }
) {
  try {
    if (typeof file_name !== "string") {
      file_name = path.join(...file_name);
    }
    const file = await fs_readFile(file_name, "utf-8");

    // parseToJson is selected
    if (parseToJson) return JSON.parse(file);

    // returning reading file content.
    return file;

  } 
  catch (e: any) {
    console.error(`${file_name} dosyası okunurken bir sorun meydana geldi!`, e);
  }
}