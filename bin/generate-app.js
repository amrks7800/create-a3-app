#!/usr/bin/env node

import { execSync } from "child_process"
import { join } from "path"
import { mkdirSync, rmSync } from "fs"
import readline from "readline/promises"

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

const git_repo = "https://github.com/amrks7800/create-a3-app.git"

if (!(projectName === "." || projectName === "./")) {
  try {
    mkdirSync(projectPath)
  } catch (err) {
    if (err.code === "EEXIST") {
      console.log(
        `The folder ${projectName} already exists in the current directory, please give it another name.`
      )
    } else {
      console.log(err)
    }
    process.exit(1)
  }
}

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  let pm = await rl.question(
    "Which package manager do you want to use? (npm/yarn/pnpm/bun) [pnpm]: "
  )
  pm = pm.trim().toLowerCase() || "pnpm"

  if (!["npm", "yarn", "pnpm", "bun"].includes(pm)) {
    console.log(`Invalid package manager '${pm}'. Defaulting to pnpm.`)
    pm = "pnpm"
  }

  rl.close()

  try {
    console.log("\nDownloading files...")
    execSync(`git clone ${git_repo} "${projectPath}"`, { stdio: "inherit" })

    process.chdir(projectPath)

    console.log("\nCleaning up template lock files...")
    const lockFiles = ["package-lock.json", "yarn.lock", "pnpm-lock.yaml", "bun.lockb"]
    for (const file of lockFiles) {
      try {
        rmSync(join(projectPath, file), { force: true })
      } catch (e) {}
    }

    console.log(`\nInstalling dependencies with ${pm}...`)
    execSync(`${pm} install`, { stdio: "inherit" })

    console.log("\nRemoving useless files...")
    rmSync(join(projectPath, ".git"), { recursive: true, force: true })
    rmSync(join(projectPath, "bin"), { recursive: true, force: true })

    console.log(
      "\nRemember that the web is a better place with your creations 🧐😚\n",
      "Happy hacking \n",
      "Amr Khalid"
    )
  } catch (error) {
    console.log(error)
  }
}

main()
