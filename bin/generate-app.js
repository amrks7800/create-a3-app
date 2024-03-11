#!/usr/bin/env node

import { execSync } from "child_process"
import { join } from "path"
import { mkdirSync, rmSync } from "fs"

if (process.argv.length < 3) {
  console.log("You have to provide a name to your app.")
  console.log("For example :")
  console.log("    npx create-am3-app my-app")
  process.exit(1)
}

const projectName = process.argv[2]
const currentPath = process.cwd()
let projectPath

if (projectName === "." || projectName === "./") {
  projectPath = join(currentPath)
} else {
  projectPath = join(currentPath, projectName)
}

const git_repo =
  "https://github.com/amrks7800/create-a3-app.git"

if (!projectName === "." || !projectName === "./") {
  try {
    mkdirSync(projectPath)
  } catch (err) {
    if (err.code === "EEXIST") {
      console.log(
        `The file ${projectName} already exist in the current directory, please give it another name.`
      )
    } else {
      console.log(err)
    }
    process.exit(1)
  }
}

async function main() {
  try {
    console.log("Downloading files...")
    execSync(`git clone ${git_repo} "${projectPath}"`)

    process.chdir(projectPath)

    console.log("Installing dependencies...")
    execSync("npm install")

    console.log("Removing useless files")
    execSync("npx rimraf ./.git")
    rmSync(join(projectPath, "bin"), {
      recursive: true,
    })

    console.log(
      "remember that the web is a better place with your creations 🧐😚\n",
      "happy hacking \n",
      "Amr khalid"
    )
  } catch (error) {
    console.log(error)
  }
}
main()
