import path from "path";
import type { ProjectType } from "../lib/definitions";
import { pathExists, readdir, copy, ensureDir } from "fs-extra";

// read templates folder.
export async function templateReader(type: ProjectType): Promise<string[]> {
  const trees: string[] = [];
  const templatesFolderPath = path.join(__dirname, "..", "templates");
  
  try {
    // check template folder path is exists or not
    const isExists = await pathExists(templatesFolderPath);

    if (!isExists) {
      throw new Error(`${templatesFolderPath} doesn't exists!`);
    }

    const templatesTree = await readdir(templatesFolderPath, { withFileTypes: true });
    
    for (const item of templatesTree) {
      if (item.isFile()) {
        trees.push(path.resolve(templatesFolderPath, item.name));
      } else if (item.isDirectory() && item.name === type) {
        // If this is the directory for the requested project type
        const typeTreePath = path.join(templatesFolderPath, type);
        const typeTree = await readdir(typeTreePath, { withFileTypes: true });
        
        for (const typeItem of typeTree) {
          trees.push(path.resolve(typeTreePath, typeItem.name));
        }
      }
    }
  } catch (err: any) {
    console.error(err.message);
  }

  return trees;
}

// copy templates folder to destination href.
export async function copyTemplates(templateType: ProjectType, toDir: string) {
  const templates = await templateReader(templateType);

  try {
    await ensureDir(toDir);
  } catch (err) {
    console.error(`Failed to create directory ${toDir}:`, err);
    return;
  }

  for (const template of templates) {
    // Extract the filename from the template path
    const fileName = path.basename(template);
    // Create the full destination path including the filename
    const destinationPath = path.join(process.cwd(), toDir, fileName);
    
    try {
      // Copy the file to the destination
      await copy(template, destinationPath);
    } catch (err) {
      console.error(`Failed to copy ${template} to ${destinationPath}:`, err);
    }
  }
}