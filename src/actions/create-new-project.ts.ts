import { copyTemplates } from "./template";

export interface CreateNewProjectOptions {
  language?: "node" | "python";
  acceptDefault?: boolean;
}

export async function CreateNewProject(
  project_name: string,
  { acceptDefault, language }: CreateNewProjectOptions = {
    acceptDefault: false,
    language: "node",
  }
) {
  let anyError = false;

  if (!anyError) {
    if (acceptDefault) {
      await copyTemplates("js", project_name);
      return;
    } else {
      await copyTemplates(language === "python" ? "py" : "js", project_name);
    }
  }
}
