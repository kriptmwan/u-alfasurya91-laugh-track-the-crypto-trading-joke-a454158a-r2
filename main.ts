import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My exchange just made me a VIP trader — apparently, my losses qualify for a loyalty program.";

// The gate needs 1–200 characters of real text; refuse to emit a bad line.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`joke is ${JOKE.length} chars, outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
