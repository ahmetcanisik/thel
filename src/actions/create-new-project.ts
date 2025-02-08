import select from "@inquirer/select";
import { spawn } from "child_process";
import { MakeDirs } from "../lib/filer";
import path from "path";

interface CreateNewProjectOptions {
  acceptDefault?: boolean;
}

export async function CreateNewProject(
  project_name: string,
  { acceptDefault }: CreateNewProjectOptions = { acceptDefault: false }
) {
  console.log(project_name);

  // select package manager
  const pm = acceptDefault
    ? "npm"
    : await select({
        message: "Select a package manager",
        choices: [
          {
            name: "npm",
            value: "npm",
          },
          {
            name: "yarn",
            value: "yarn",
          },
          {
            name: "pnpm",
            value: "pnpm",
          },
        ],
      });

  // create project.
  await MakeDirs(project_name)
    .then(() => process.chdir(path.resolve(project_name)))
    .catch((e: any) =>
      console.error(
        "Something went wrong on creating directory and cd directory folder."
      )
    );

  /*// pnpm init
  // yarn init -y
  // npm init -y
  try {
  } catch (e: any) {
    console.error("Something went wrong on creating project");
  }

  // pnpm add @types/node typescript -D
  // yarn add @types/node typescript -D
  // npm i @types/node typescript --save-dev
  try {
  } catch (e: any) {
    console.error("Something went wrong on creating project");
  }

  // npx tsc --init
  // read tsconfig.json file
  // push in;
  // rootDir: "./src"
  // outDir: "./dist"
  try {
  } catch (e: any) {
    console.error("Something went wrong on creating project");
  }

  // mkdir src
  try {
  } catch (e: any) {
    console.error("Something went wrong on creating project");
  }*/
}
