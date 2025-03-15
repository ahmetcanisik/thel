import { MakeDirs } from 'filen';
import {CreateNodeProject} from "./create-node-project";
import {CreatePythonProject} from "./create-python-project";
import {logger} from "../../helpers/logger";

export interface CreateNewProjectOptions {
    language?: 'node' | 'python';
    acceptDefault?: boolean;
}

export async function CreateNewProject(
    project_name: string,
    {acceptDefault, language}: CreateNewProjectOptions = {acceptDefault: false, language: 'node'}
) {
    let anyError = false;

    // create project directory.
    await MakeDirs([project_name], {noWarnings: true})
        .catch((e: any) => {
                anyError = true;
                logger.error(
                    `Error: create ${project_name} directory.`,
                    e
                )
            }
        );

    if (!anyError) {
        if (acceptDefault) {
            await CreateNodeProject(project_name);
            return;
        } else {
            if (language && language === "python") {
                await CreatePythonProject(project_name);
            } else {
                await CreateNodeProject(project_name);
            }
        }
    }
}