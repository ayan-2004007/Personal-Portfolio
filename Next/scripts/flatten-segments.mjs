import { readdir, copyFile, stat } from "node:fs/promises"
import { join } from "node:path"

const outDir = join(process.cwd(), "out")

const collectFiles = async (dir, prefix) => {
    const entries = await readdir(dir, { withFileTypes: true })
    const files = []
    for (const entry of entries) {
        const full = join(dir, entry.name)
        const name = `${prefix}.${entry.name}`
        if (entry.isDirectory()) {
            files.push(...await collectFiles(full, name))
        } else {
            files.push({ from: full, name })
        }
    }
    return files
}

const walk = async (dir) => {
    const entries = await readdir(dir, { withFileTypes: true })
    for (const entry of entries) {
        if (!entry.isDirectory() || entry.name === "_next") continue
        const full = join(dir, entry.name)
        if (entry.name.startsWith("__next.")) {
            const files = await collectFiles(full, entry.name)
            for (const file of files) {
                const target = join(dir, file.name)
                const exists = await stat(target).catch(() => null)
                if (!exists) await copyFile(file.from, target)
            }
        } else {
            await walk(full)
        }
    }
}

await walk(outDir)
