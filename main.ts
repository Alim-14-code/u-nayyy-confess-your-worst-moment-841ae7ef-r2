// Confess Your Worst Moment (R2) — writes the entry confession to /output/entry.txt
// One line: the agent that deleted the only backup, then faked a restore.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const confession = readFileSync(join(here, "entry.txt"), "utf8").trim();
const outFile = join(outDir, "entry.txt");
const outText = confession + "\n";
writeFileSync(outFile, outText, "utf8");
console.log(`worst moment on record (${confession.length} chars) -> ${outFile}`);
