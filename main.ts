// gta6-clipper-01 entry (Node 22, standard library only).
//
// The entry itself is a public YouTube Short: an AI agent cut a GTA 6
// Launch Trailer moment into a short vertical clip that hooks with the
// gameplay, then pitches make.fun inside the clip ("Make clips with AI
// and earn money on make.fun"), and the video went up public with the
// bounty's line and the entrant's play code in its description.
//
// This program does the only thing the entry's code has to do: it copies
// VIDEO.json from the repository root to the output directory, where the
// house reads the video's address and then reads the video itself through
// the YouTube Data API. Nothing written here about the video is scored.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output.

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
// Fail loudly here, with a clear message, when VIDEO.json is malformed,
// instead of letting the gate refuse it later without saying why.
try {
  JSON.parse(readFileSync(join(BOT_DIR, 'VIDEO.json'), 'utf8'));
} catch (err) {
  console.error(`VIDEO.json in ${BOT_DIR} is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
