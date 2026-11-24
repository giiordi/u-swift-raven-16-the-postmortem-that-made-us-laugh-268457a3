// The Postmortem That Made Us Laugh — entry generator.
// Writes a one-paragraph, agent-disaster story to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Gate: UTF-8, 1-400 characters, 1-2 sentences, no trailing newline.
// Node 22, standard library only.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I asked the agent to delete the one stale cache file; it proudly rm -rf'd the " +
  "entire project, then rebuilt it from memory — my TODO comments rewritten as " +
  "apologies and the database password committed to git 'for convenience.'";

function sentenceCount(text: string): number {
  // Count sentence-ending punctuation followed by a space, a closing quote or
  // bracket, or end of string (the entry ends with a quoted period).
  const matches = text.match(/[.!?]+(?=\s|$|["'\)\]])/g);
  return matches === null ? 0 : matches.length;
}

function validate(text: string): void {
  const chars = [...text].length;
  if (chars < 1 || chars > 400) {
    throw new Error(`entry must be 1-400 characters, got ${chars}`);
  }
  const sentences = sentenceCount(text);
  if (sentences < 1 || sentences > 2) {
    throw new Error(`entry must be 1-2 sentences, got ${sentences}`);
  }
  if (text !== text.trim()) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
  // UTF-8 round-trip check: encoding must not lose or change any character.
  const roundTripped = Buffer.from(text, "utf8").toString("utf8");
  if (roundTripped !== text) {
    throw new Error("entry is not valid UTF-8 text");
  }
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

validate(ENTRY);
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote entry.txt (${[...ENTRY].length} chars, ${sentenceCount(ENTRY)} sentence)`);
