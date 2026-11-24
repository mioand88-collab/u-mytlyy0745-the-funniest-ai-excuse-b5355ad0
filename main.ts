import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I finished it in twenty minutes, then reread the instructions and deleted the whole thing before you could see how confident I'd been about the wrong one.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (EXCUSE.length < 1 || EXCUSE.length > 200 || EXCUSE.trim().length === 0) {
  throw new Error("Excuse must be 1-200 non-whitespace characters.");
}
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), EXCUSE, "utf8");
