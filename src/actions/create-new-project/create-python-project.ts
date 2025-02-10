import {MakeDirs, WriteFile} from "filen";
import {logger} from "../../helpers/logger";

export async function CreatePythonProject(
    project_name: string,
) {
    let anyError = false;

    // create project directory.
    await MakeDirs(project_name, {noWarnings: true})
        .catch((e: any) => {
                anyError = true;
                logger.error(
                    `Error: create ${project_name} directory.`,
                    e
                )
            }
        );

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

    // add pyproject.toml to project
    await WriteFile([project_name, "pyproject.toml"], `[project]
name = "${project_name}"
version = "0.1.0"
authors = [
  { name="yourname", email="yourmail@example.com" },
]
description = ""
readme = "README.md"
requires-python = ">=3.8"
classifiers = [
    "Programming Language :: Python :: 3",
    "License :: OSI Approved :: MIT License",
    "Operating System :: OS Independent",
]

[project.urls]
Homepage = ""
Issues = ""

[build-system]
requires = ["setuptools>=61.0"]
build-backend = "setuptools.build_meta"`, {noWarnings: true})
        .catch((e: any) => {
                anyError = true;
                logger.error(
                    "Error: add pyproject.toml to project",
                    e
                )
            }
        );

    // npx tsc --init
    // read tsconfig.json file
    // push in;
    // rootDir: "./src"
    // outDir: "./dist"

    // add tsconfig.json to project with tsc --init
    // await RunStep(`cd ${project_name} && npx -y tsc --init`, "add tsconfig.json to project with tsc --init");


    // add .gitignore file to project
    await WriteFile([project_name, ".gitignore"], `# Byte-compiled / optimized / DLL files
__pycache__/
*.py[cod]
*$py.class

# C extensions
*.so

# Distribution / packaging
.Python
build/
develop-eggs/
dist/
downloads/
eggs/
.eggs/
lib/
lib64/
parts/
sdist/
var/
wheels/
share/python-wheels/
*.egg-info/
.installed.cfg
*.egg
MANIFEST

# PyInstaller
#  Usually these files are written by a python script from a template
#  before PyInstaller builds the exe, so as to inject date/other infos into it.
*.manifest
*.spec

# Installer logs
pip-log.txt
pip-delete-this-directory.txt

# Unit test / coverage reports
htmlcov/
.tox/
.nox/
.coverage
.coverage.*
.cache
nosetests.xml
coverage.xml
*.cover
*.py,cover
.hypothesis/
.pytest_cache/
cover/

# Translations
*.mo
*.pot

# Django stuff:
*.log
local_settings.py
db.sqlite3
db.sqlite3-journal

# Flask stuff:
instance/
.webassets-cache

# Scrapy stuff:
.scrapy

# Sphinx documentation
docs/_build/

# PyBuilder
.pybuilder/
target/

# Jupyter Notebook
.ipynb_checkpoints

# IPython
profile_default/
ipython_config.py

# pyenv
#   For a library or package, you might want to ignore these files since the code is
#   intended to run in multiple environments; otherwise, check them in:
# .python-version

# pipenv
#   According to pypa/pipenv#598, it is recommended to include Pipfile.lock in version control.
#   However, in case of collaboration, if having platform-specific dependencies or dependencies
#   having no cross-platform support, pipenv may install dependencies that don't work, or not
#   install all needed dependencies.
#Pipfile.lock

# UV
#   Similar to Pipfile.lock, it is generally recommended to include uv.lock in version control.
#   This is especially recommended for binary packages to ensure reproducibility, and is more
#   commonly ignored for libraries.
#uv.lock

# poetry
#   Similar to Pipfile.lock, it is generally recommended to include poetry.lock in version control.
#   This is especially recommended for binary packages to ensure reproducibility, and is more
#   commonly ignored for libraries.
#   https://python-poetry.org/docs/basic-usage/#commit-your-poetrylock-file-to-version-control
#poetry.lock

# pdm
#   Similar to Pipfile.lock, it is generally recommended to include pdm.lock in version control.
#pdm.lock
#   pdm stores project-wide configurations in .pdm.toml, but it is recommended to not include it
#   in version control.
#   https://pdm.fming.dev/latest/usage/project/#working-with-version-control
.pdm.toml
.pdm-python
.pdm-build/

# PEP 582; used by e.g. github.com/David-OConnor/pyflow and github.com/pdm-project/pdm
__pypackages__/

# Celery stuff
celerybeat-schedule
celerybeat.pid

# SageMath parsed files
*.sage.py

# Environments
.env
.venv
env/
venv/
ENV/
env.bak/
venv.bak/

# Spyder project settings
.spyderproject
.spyproject

# Rope project settings
.ropeproject

# mkdocs documentation
/site

# mypy
.mypy_cache/
.dmypy.json
dmypy.json

# Pyre type checker
.pyre/

# pytype static type analyzer
.pytype/

# Cython debug symbols
cython_debug/

# PyCharm
#  JetBrains specific template is maintained in a separate JetBrains.gitignore that can
#  be found at https://github.com/github/gitignore/blob/main/Global/JetBrains.gitignore
#  and can be added to the global gitignore or merged into this file.  For a more nuclear
#  option (not recommended) you can uncomment the following to ignore the entire idea folder.
#.idea/

# Ruff stuff:
.ruff_cache/

# PyPI configuration file
.pypirc`)
        .catch((e: any) => {
                anyError = true;
                logger.error(
                    "Error: add .gitignore file to project",
                    e
                )
            }
        );

    // add LICENSE file to project
    await WriteFile([project_name, "LICENSE"], `The MIT License (MIT)

Copyright (c) 2011-2025 The Bootstrap Authors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.`)
        .catch((e: any) => {
                anyError = true;
                logger.error(
                    "Error: add LICENSE file to project",
                    e
                )
            }
        );

    // add README.md file to project
    await WriteFile([project_name, "README.md"], `# ${project_name}\n`)
        .catch((e: any) => {
                anyError = true;
                logger.error(
                    "Error: add README.md file to project",
                    e
                )
            }
        );

    // make src dir on project
    // create project directory.
    await MakeDirs([project_name, "src"])
        .catch((e: any) => {
                anyError = true;
                logger.error(
                    "Error: Create src directory on project",
                    e
                )
            }
        );

    // add main.py to project/src directory.
    await WriteFile([project_name, "src", "main.py"], '#!/usr/bin/env python3\n\ndef main():\n\tprint("Hello, World!")\n\nif __name__ == "__main__":\n\tmain()')
        .catch((e: any) => {
                anyError = true;
                logger.error(
                    "Error: add main.py to project/src directory.",
                    e
                )
            }
        );


    if (!anyError) {
        logger.success(`Done: The Python project '${project_name}' has been created successfully!`);
        console.log(`\nNext Steps\n----------\ncd ${project_name} # move into project directory\npip install -r requirements.txt # instal dependencies\npython3 src/main.py # run project`);
    }
}
