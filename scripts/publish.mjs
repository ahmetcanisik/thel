#!/usr/bin/env zx
import { $ } from 'zx';

export async function to_github(commit_message = "uploaded") {
    await $`git add --all`;
    await $`git commit -m ${commit_message}`;

    const branch = (await $`git rev-parse --abbrev-ref HEAD`).stdout.trim();
    await $`git push origin ${branch}`;
}

export async function to_npm(commit_message = "uploaded") {
    await $`npm publish`;
}

export async function publish(commit = "uploaded", to = "everywhere") {
    await $`npm run build`;

    if (to === "github") {
        await to_github(commit);
        return;
    }

    if (to === "npm") {
        await to_npm();
        return;
    }

    await to_github(commit);
    await to_npm();
}

await publish();