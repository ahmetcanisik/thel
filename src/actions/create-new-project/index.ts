import {CreateNodeProject} from "./create-node-project";

export interface CreateNewProjectOptions {
    language?: 'node';
    acceptDefault?: boolean;
}

export async function CreateNewProject(
    project_name: string,
    {acceptDefault, language}: CreateNewProjectOptions = {acceptDefault: false, language: 'node'}
) {
    if (acceptDefault) {
        await CreateNodeProject(project_name);
        return;
    }

    await CreateNodeProject(project_name);
}