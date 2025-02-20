#!/usr/bin/env zx
import { $ } from 'zx';

await $`npm run build`;

await $`git add --all`;
await $`git commit -m 'changed'`;

await $`git push`;

await $`npm run publish`;