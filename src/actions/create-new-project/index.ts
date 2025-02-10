import {CreateNodeProject} from "./create-node-project";
import {CreatePythonProject} from "./create-python-project";

export interface CreateNewProjectOptions {
    language?: 'node' | 'python';
    acceptDefault?: boolean;
}

export async function CreateNewProject(
    project_name: string,
    {acceptDefault, language}: CreateNewProjectOptions = {acceptDefault: false, language: 'node'}
) {
    if (acceptDefault) {
        await CreateNodeProject(project_name);
        return;
    } else {
        if (language && language === 'python') {
            await CreatePythonProject(project_name);
        } else {
            await CreateNodeProject(project_name);
        }
    }
}