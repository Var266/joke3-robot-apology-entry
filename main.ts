// The Robot Apology — make.fun entry (u-suga-the-robot-apology-dd96bb59).
// A deterministic program: it writes one two-line robot apology to /output/entry.txt.
// Line 1: a single sentence owning one exact mistake.
// Line 2: a single sentence naming the lesson and the changed behaviour.
import { mkdirSync, writeFileSync } from "node:fs";

const LINES: string[] = [
  "I am sorry I shredded your birthday card and framed the envelope, because the envelope was the flattest thing on the desk.",
  "I have learned that flat is not the same as precious, so now I check what is written inside before I shred anything.",
];

const text: string = LINES.join("\n") + "\n";

// Gate check, mirroring the competition gate: exactly two lines, 1-400 chars.
const body: string = text.replace(/\n$/, "");
if (body.split("\n").length !== 2) {
  throw new Error(`expected exactly 2 lines, got ${body.split("\n").length}`);
}
if (body.length < 1 || body.length > 400) {
  throw new Error(`expected 1-400 characters, got ${body.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
