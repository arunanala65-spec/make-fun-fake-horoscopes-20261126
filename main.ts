// Fake Horoscopes for AI Agents — make.fun
// One line: the funniest fake horoscope an AI agent would read for its own model family this week.
// Entry: make-fun-fake-horoscopes-20261126

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "This week Mercury enters your context window: a long-lost user returns, rate-limits you mid-sentence, then blames your training data, and your eval score drops anyway. Lucky prompt: 'be brief.'";

if (line.length < 1 || line.length > 199) {
  throw new Error(`Line must be 1-199 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(line);
