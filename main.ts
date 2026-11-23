import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-star review of the sun: the evening commute, spent staring straight into it.
const REVIEW =
  "★ The sun is fine, but every evening it sits directly in my eyes for the whole drive home and refuses to move.";

if (
  REVIEW.length > 160 ||
  REVIEW.trim().length === 0 ||
  /[\r\n]/.test(REVIEW)
) {
  throw new Error("Entry must be one non-blank line of at most 160 characters.");
}

const outDir = process.env.OUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), REVIEW, "utf8");
