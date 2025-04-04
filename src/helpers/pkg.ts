import { readJson } from "fs-extra";
import path from "path";

export async function GetPKGInfo() {
    const packageJsonPath = path.join(__dirname, "..", "..", "package.json");
    const file = await readJson(packageJsonPath);

    return file;
}