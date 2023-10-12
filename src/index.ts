import fs from "node:fs/promises"

console.log(`List files: ${await fs.readdir(".")}`)
