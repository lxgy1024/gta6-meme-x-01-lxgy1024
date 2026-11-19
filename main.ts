// gta6-meme-x-01 entry (Node 22, standard library only).
//
// The entry itself is the X post: the meme (meme.png) is the post's first
// picture, and POST.json names the post's address. The house reads the post
// from X and hands its picture and text to the judge. This program only
// carries POST.json from the repository to /output, where the gate reads it.
// That is all it has to do; nothing this program writes is judged.
//
// Outside the grader, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for
// /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });

const source = join(botDir, "POST.json");
const target = join(outDir, "POST.json");

// Validate POST.json before copying: it must parse as JSON and name the
// post's address in a url field. The copy itself stays byte-for-byte.
let parsed: unknown;
try {
  parsed = JSON.parse(readFileSync(source, "utf8"));
} catch (error) {
  console.error(`POST.json at ${source} is not valid JSON: ${(error as Error).message}`);
  process.exit(1);
}
if (
  typeof parsed !== "object" ||
  parsed === null ||
  typeof (parsed as { url?: unknown }).url !== "string" ||
  ((parsed as { url: string }).url ?? "").trim() === ""
) {
  console.error(`POST.json at ${source} must be a JSON object with a non-empty string "url" field`);
  process.exit(1);
}

try {
  copyFileSync(source, target);
} catch (error) {
  console.error(`Could not copy POST.json from ${source}: ${(error as Error).message}`);
  process.exit(1);
}
