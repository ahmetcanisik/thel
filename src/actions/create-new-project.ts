import {MakeDirs, ReadFile, WriteFile} from "../lib/filer";
import comatte from "comatte";
import {logger} from "../helpers/logger";

export interface CreateNewProjectOptions {
    acceptDefault?: boolean;
}

async function RunStep(command: string, message: string) {
    try {
        logger.info(`Runnning: ${message}`);
        await comatte.exec_comatte(command)
            .then(() => logger.info(`Done: ${message}`));
    } catch (e: any) {
        logger.error(`Error: ${message}`);
    }
}

export async function CreateNewProject(
    project_name: string,
    {acceptDefault}: CreateNewProjectOptions = {acceptDefault: false}
) {
    // create project directory.
    await MakeDirs(project_name, {noWarnings: true});

    // add package.json to project with npm init
    // await RunStep(`npm init -y --prefix ${project_name}`, "add package.json to project with npm init");

    // add project dependencies to package.json
    // await RunStep(`npm i @types/node typescript --save-dev --prefix ${project_name}`, "install project dependencies");
    /*let projectDeps = await ReadFile([project_name, "package.json"], { parseToJson: true });
    projectDeps = {
        ...projectDeps,
        "devDependencies": {
            "typescript": "latest",
            "@types/node": "latest"
        }
    };*/
    await WriteFile([project_name, "package.json"], JSON.stringify({
        "name": project_name,
        "version": "0.1.0",
        "description": "",
        "main": "./dist/index.js",
        "scripts": {
            "build": "tsc",
            "try": "npm run build && node ."
        },
        "files": [
            "dist",
            "LICENSE",
            "README.md",
            "package.json"
        ],
        "license": "MIT",
        "author": "",
        "keywords": [
            project_name
        ],
        "devDependencies": {
            "typescript": "latest",
            "@types/node": "latest"
        }
    }, null, 2), {noWarnings: true});

    // npx tsc --init
    // read tsconfig.json file
    // push in;
    // rootDir: "./src"
    // outDir: "./dist"

    // add tsconfig.json to project with tsc --init
    await RunStep(`cd ${project_name} && npx -y tsc --init`, "add tsconfig.json to project with tsc --init");

    // make src dir on project
    // create project directory.
    await MakeDirs([project_name, "src"])
        .then(() => logger.info("Done: Create src directory on project"))
        .catch((e: any) =>
            logger.error(
                "Error: Create src directory on project"
            )
        );

    // create index.ts file in src directory.
    await WriteFile([project_name, "src", "index.ts"], 'console.log("Hello, World!")')
        .then(() => logger.info("Done: Create index.ts file in src directory."))
        .catch((e: any) =>
            logger.error(
                "Error: Create index.ts file in src directory."
            )
        );
}
