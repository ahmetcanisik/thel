#!/usr/bin/env node
import {GetPKGInfo} from "./helpers/pkg";
import {Command} from "commander";
import {logger} from "./helpers/logger";
import {CreateNewProject} from "./actions/create-new-project";

async function main() {
    const {name, description, version} = await GetPKGInfo();

    const thel = new Command();

    thel
        .name(name)
        .usage("[command]")
        .description(description)
        .version(version, "-v, --version", "Output the current version")
        .helpOption("-h, --help", "Display help for command");

    thel
        .command("new")
        .description("Create Blank TypeScript Project!")
        .argument("[projectName]", "Name of the project to Directory.")
        .option("-y, --yes", "Accept default options")
        .option("-l, --lang <string>", "Select project programing language.")
        .action(
            async (directoryName, options) => {
                if (!directoryName) {
                    logger.error("Please specify a directory name");
                    return;
                }
                await CreateNewProject(directoryName, {
                    acceptDefault: options.yes || false,
                })
            }
        );

    thel.parse();
}

(async () => await main())();
