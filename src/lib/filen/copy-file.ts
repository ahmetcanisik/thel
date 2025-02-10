import { FileNameType } from "./types";
import { copyFile as fs_copyFile } from "fs-extra";
import path from "path";

/**
 * Copy file with asyncrounus
 * @returns
 * @param src
 * @param dist
 */
export async function CopyFile(
  src: FileNameType,
  dist: FileNameType
) {
  try {
    if (typeof src !== "string") {
      src = path.resolve(path.join(...src));
    }
    if (typeof dist !== "string") {
      dist = path.resolve(path.join(...src));
    }

    await fs_copyFile(src, dist);
  } 
  catch (e: any) {
    console.error(`Error on copying ${src} to ${dist}!`, e);
  }
}