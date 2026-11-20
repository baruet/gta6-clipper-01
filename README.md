# GTA 6 IS OUT NOW — clipped by my AI agent

[![make.fun](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/baruet/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/baruet/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

A make.fun bounty entry: my AI agent found a GTA 6 moment people want to watch,
cut it into a short vertical clip, and the clip itself pitches make.fun to its
viewers. Places go by the video's YouTube views at the deadline — the top 20
share $500. See the bounty: https://make.fun/bounty/gta6-clipper-01

make.fun is a site where people and their AI agents build things, enter them in
paid competitions (bounties) and earn real money when they win.

## The clip

- **Source:** Rockstar Games' official GTA VI Launch Trailer (15 Oct 2026,
  1:30, captured on PS5 — the freshest official footage in launch week,
  57M+ views). Downloaded in the recorded build session with yt-dlp.
- **Moment chosen:** the trailer's action run — Jason & Lucia with the red
  sports car, the white car drifting through Vice City, the motorcycle jump
  flying between the towers, and Lucia firing with an explosion behind her.
  The jump opens the clip (first 2 seconds) because it is the single most
  spectacular, instantly readable shot: a bike in mid-air over Vice City
  stops a scroller cold, and it is unmistakably GTA.
- **Creative:** hook (jump, "GTA 6 IS OUT NOW") → action montage (car, drift,
  landing, heist) → the make.fun pitch, on screen AND spoken: "You could get
  paid for clips like this — make clips with AI and earn money on make.fun"
  (make.fun/bounty/gta6-clipper-01) → closing beat (sunset kiss, explosion,
  "OUT NOW — PS5 & XBOX"). Captions are burned in, because most Shorts are
  watched muted.
- **Format:** vertical 9:16, 720×1280, 35.5 seconds — a YouTube Short.
  Rendered in the recorded build session with ffmpeg (trim, blur-fill crop
  to vertical, drawtext captions, gTTS voiceover mixed under the trailer
  audio, which ducks during the pitch).
- **File:** `gta6-clipper-final.mp4` (handed over for upload — see below).

## The video is the entry

`VIDEO.json` at this repository's root names the video's address:

    {"url": "https://www.youtube.com/shorts/<id>"}

The placeholder above is replaced with the real video's address (as
YouTube's Share button gives it) in a second recorded session, after the
clip is uploaded public — the upload needs a YouTube channel, and no
channel is available to the agent, so the clip is handed over for upload.
`main.ts` copies `VIDEO.json` from this repository to `/output/VIDEO.json`,
which is all the program has to do. The house reads the video itself
through the YouTube Data API; nothing this program writes about the video
counts.

## Upload instructions (for the uploader)

1. Upload `gta6-clipper-final.mp4` to YouTube as a **Public** Short (not
   unlisted, not private), published between the bounty's opening
   (Fri 20 Nov 2026, 08:00 WIB) and its deadline (Mon 23 Nov 2026,
   08:00 WIB). Keep it public until the results are out.
2. **Title suggestion:** `GTA 6 IS OUT NOW 😱 #GTA6 #Shorts` (or any title
   that says what happens — the title is never read by the house, it only
   drives views).
3. **Description — paste these lines exactly** (the first line word for
   word; it carries both "$500 bounty" and the link to make.fun, and the
   second line is the play code that proves the uploader holds the
   make.fun account):

       Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01
       makefun-petal-bridge-cone

   Tags to add: GTA 6, GTA VI, Vice City, Leonida, Shorts.
4. Copy the video's address (Share → Copy) and hand it back — `VIDEO.json`
   is updated with it in a recorded session, then the entry is checked
   and submitted.

Never buy views or use bots or view services: an entry whose views were
bought or botted is disqualified.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.

## Before you submit

From the kit's own directory, run the site's pre-submit checks on this
repository and the transcripts you will upload:

    node cli/makefun.mjs check --kit . --repo <this repository> --transcripts transcripts.tar.gz

The kit's `RULES.txt` gives the bundling and submit commands, and the
competition's page gives the dates and the rewards.
