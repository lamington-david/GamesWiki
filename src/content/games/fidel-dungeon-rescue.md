---
title: "Fidel Dungeon Rescue"
developer: "Daniel Benmergui"
publisher: "Daniel Benmergui"
year: 2017
genres: ["roguelike", "puzzle", "dungeon crawler"]
playtime: 6.8
steam_rating: 86.76
description: "A 'puzzle-crawler' from Storyteller and Today I Die creator Daniel Benmergui, where players trace a rewindable path through procedurally generated dungeons full of monsters and treasure. Fidel Dungeon Rescue is a compact reference for hybridizing roguelike structure with puzzle-solving, and for using a consequence-free rewind mechanic to lower the cost of experimentation without removing strategic tension."
design_tags: ["procedural puzzle generation", "rewind mechanic", "puzzle-roguelike hybrid", "accessible complexity", "short session design"]
resources:
  - type: podcast
    title: "Designer Notes 8: Daniel Benmergui"
    speaker: "Daniel Benmergui, interviewed by Adam Saltsman"
    source: "Idle Thumbs Network"
    year: 2015
    duration: "70 min"
    summary: "Recorded while Benmergui was developing the puzzle game then called 'Ernesto' — the project that would become Fidel Dungeon Rescue — this conversation covers why he believes games shouldn't be designed backwards from a feature list, how he recovers from the pressure of following up a hit, and his broader philosophy of experimental, mechanic-first design."
    url: "https://www.idlethumbs.net/designernotes/episodes/daniel-benmergui"
  - type: video
    title: "NYU Game Center Lecture Series Presents Daniel Benmergui"
    speaker: "Daniel Benmergui"
    source: "NYU Game Center / YouTube"
    year: 2018
    duration: "60 min"
    summary: "Benmergui discusses the design details of Fidel directly, alongside a look ahead to his next project, Storyteller. Useful as the most direct first-person account of the design thinking behind Fidel's puzzle-crawler structure and its rewind-based approach to player experimentation."
    url: "https://www.youtube.com/watch?v=vbFBJ5l5IE0"
  - type: video
    title: "Jon Blow watches Fidel: Dungeon Rescue trailer & short Q&A"
    speaker: "Jonathan Blow"
    source: "Twitch stream archive / YouTube"
    year: 2017
    duration: "18 min"
    summary: "An archived stream of Braid and The Witness creator Jonathan Blow reacting to and discussing Fidel's design — a useful peer perspective from another puzzle-game designer on what makes the game's procedural puzzle generation and rewind mechanic feel elegant rather than arbitrary."
    url: "https://www.youtube.com/watch?v=6KLVLI2aweA"
---

## Design Notes

**Rewind as a tool for cognitive freedom, not just forgiveness.** Fidel's signature mechanic lets players undo moves freely, but rather than trivializing challenge, it shifts where the challenge lives — from "don't make a mistake" to "find the actually optimal path." Because experimentation costs nothing in itself, players can probe the puzzle's structure directly, and the game's real tension comes from an external pressure (an optional time-limited "ghost") rather than from punishing exploration. This is a clean illustration of a broader principle: removing the penalty for trying something doesn't have to remove difficulty, it can relocate difficulty to a more interesting place.

**Procedural generation tuned against a solvability bar.** Rather than hand-authoring puzzles, Fidel generates dungeon layouts and then runs an exhaustive search to calculate the maximum achievable score for each one, gating rewards against that calculated ceiling. This guarantees every generated puzzle is both solvable and meaningfully optimizable, which is what lets the game ship hundreds of unique daily puzzles without manual design work for each one. The broader lesson for procedural puzzle design: generation alone isn't enough — pairing it with an automated solvability/optimality check is what keeps procedurally generated content from feeling arbitrary or unfair.

**A genre hybrid that strengthens both halves.** Fidel sits between roguelike (run-based structure, procedural variation, replayability) and puzzle game (discoverable optimal solutions, intellectual rather than reflex challenge). Neither half is diluted by the other — runs are short enough to support the roguelike's "just one more try" loop, while each individual floor is rigorous enough to reward careful puzzle-solving. Hybridizing genres well often means finding a pairing where the two halves' core loops reinforce rather than compete with each other, and Fidel's short-session, high-frequency-feedback design is a clean example of that fit.

**Iterating on accessibility after launch.** Benmergui's post-launch "Anniversary Update" removed the optional hardcore timer from the new-player default experience and reworked the early difficulty curve after observing that new players were struggling. Rather than patching the problem with a tutorial, the team changed what the procedural generation itself produced early on — gentler puzzles up front, with the harder option still available for players who want it. This reflects a useful design instinct: when players are struggling with a system, look first at whether the system's own output can be adjusted before reaching for explanatory scaffolding around it.

**Personality as a layer on top of abstraction.** Fidel's puzzle-crawler mechanics are fairly abstract — grid movement, path-tracing, resource pickups — but the game wraps them in a charming, expressive frame: a cute dog protagonist, a non-mechanical "bark" button that exists purely for character expression. That layer doesn't change the puzzle logic at all, but it gives players an emotional handle on otherwise dry optimization mechanics. For designers of abstract or mechanically dense games, this is a reminder that approachability doesn't have to come from simplifying the system — sometimes it comes from giving an abstract system a face.
