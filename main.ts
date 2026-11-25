// Fortune Cookie for the Liquidated Trader — one fortune-cookie line for a
// crypto trader who has just been liquidated, written to /output/entry.txt.
// Gate: 1-160 UTF-8 characters, exactly one line, at most 20 words.
// The line is a constant: no input, no randomness, no network — the same
// bytes on every run, so the two grader runs are byte-identical.
// The fortune opens with the classic cookie proverb, then breaks it with
// the most bureaucratic word in a liquidated trader's life: an appeal.

import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "A journey of a thousand miles begins with a single step. Yours begins with a liquidation appeal.";

const length = [...TEXT].length; // count Unicode code points, not UTF-16 units
if (length < 1 || length > 160) {
  throw new Error(`entry must be 1-160 characters, got ${length}`);
}
if (TEXT.includes("\n") || TEXT.includes("\r")) {
  throw new Error("entry must be a single line");
}
const words = TEXT.trim().split(/\s+/).length;
if (words > 20) {
  throw new Error(`entry must be at most 20 words, got ${words}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
