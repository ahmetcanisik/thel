#!/usr/bin/env zx
import { $ } from 'zx';
import { Command } from 'commander';

const metadata = {
    name: "Thel Builder Scripts",
    version: "0.0.1",
    description: "Build Thel",
    author: "ahmetcanisik"
}

class Publish {
    constructor() {}

    async to_github(commit_message = "uploaded") {
        await $`git add --all`;
        await $`git commit -m "${commit_message}"`;
        await $`git push origin`;
    }

    async to_npm() {
        await $`npm publish`;
    }
}

class Builder {
    constructor() {}

    async build() {
        await $`tsc`;
    }

    async run() {
        await this.build();
        await $`node .`;
    }
}

async function main() {
    const publish = new Publish();
    const builder = new Builder();

    const thelBuilder = new Command();
    thelBuilder
    .name("Thel Builder Script")
    .usage("[command]")
    .description("Build thel")
    .version(metadata.version, "-v, --version", "Output the current Builder version")
    .helpOption("-h, --help", "Display help for command")
    .option("-b, --build", "Build Thel")
    .option("-r, --run", "Build and Run Thel")
    .option("-p, --publish", "Publish Thel to Github or Npmjs")
    .action(async (_, options) => {
        if (options) {
            if (options.build) {
                await builder.build()
            }

            if (options.run) {
                await builder.run()
            }

            if (options.publish) {
                await builder.build();
                await publish.to_github();
                await publish.to_npm();
            }
        }
    })

    thelBuilder.parse();
}
/*
Tricks:

--publish flag'ı ile önce npmjs'e projeyi yüklüyoruz
ardından *.js ve *.d.ts dosyalarını silip github'a yüklüyoruz.
*/

/*
Roadmap:

- dist içerisine taşınmayacak çıktı dosyaları src içerisinde kalacaklar.
bundan dolayıdırki package.json dosyasında dist leri kaldırıp yerine
- .npmignore dosyasına src altındaki *.ts dosyalarının eklenmemesi gerektiğini belirtiyoruz.
*/

(async() => await main())();