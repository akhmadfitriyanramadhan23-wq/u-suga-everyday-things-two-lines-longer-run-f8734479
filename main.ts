import { mkdirSync, writeFileSync } from "node:fs";

// Two lines explaining rain on a window to a 10-year-old:
// one vivid sentence built on a single analogy, then one honest
// sentence on what the analogy maps and what it leaves out.
const lines = [
  "Rain on a window is a slow race between drops: the fat ones swallow the small ones and slide down first, leaving a clean trail behind.",
  "It maps how drops merge and race down, but it leaves out the weather: it never explains why it rains or when it will stop.",
];

const text = lines.join("\n") + "\n";

// Guard: the gate requires 1-400 characters and exactly two lines.
const codePoints = [...text].length;
if (codePoints < 1 || codePoints > 400) {
  throw new Error(`entry must be 1-400 characters, got ${codePoints}`);
}
if (lines.length !== 2 || lines.some((line) => !line.trim())) {
  throw new Error("entry must be exactly two non-empty lines");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
