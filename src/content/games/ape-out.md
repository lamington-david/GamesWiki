---
title: "APE OUT"
developer: "Gabe Cuzzillo"
publisher: "Devolver Digital"
year: 2019
genres: ["action", "arcade", "brawler"]
playtime: 2.2
steam_rating: 91.08
description: "A top-down brawler in which you play a gorilla escaping a facility, notable for its single-mechanic depth, its jazz percussion system that reacts dynamically to player actions, and its Saul Bass-inspired silhouette aesthetic. APE OUT began as a stealth game and became something entirely different when the designers followed where the mechanics led — a textbook case of emergent design."
design_tags: ["emergent design", "game feel", "audio design", "visual design", "procedural generation", "arcade", "single mechanic design"]
resources:
  - type: article
    title: "Road to the Student IGF: Gabe Cuzzillo's Ape Out"
    author: "Chris Baker"
    source: "Game Developer"
    year: 2016
    duration: "6 min read"
    summary: "Covers the origin of APE OUT from a top-down stealth game concept, how the grab-and-push mechanics on guards became the most interesting verbs in the game, the pivot to an ape protagonist, Bennett Foddy's suggestion to use single-colour silhouettes inspired by Saul Bass, and Matt Boch's jazz drum system designed to feel improvisational."
    url: "https://www.gamedeveloper.com/design/road-to-the-student-igf-gabe-cuzzillo-s-i-ape-out-i-"
  - type: postmortem
    title: "When We Made... Ape Out"
    speaker: "Gabe Cuzzillo"
    source: "MCV/DEVELOP"
    year: 2019
    duration: "8 min read"
    summary: "Cuzzillo recounts the six-year development arc from Student IGF nomination to release, the engine switch from GameMaker to Unity, and the turning point when wall-grabbing led to people-grabbing as the core loop. Covers collaboration structure with Boch on music and Foddy on art direction."
    url: "https://mcvuk.com/development-news/when-we-made-ape-out/"
  - type: interview
    title: "Ape Out Creator Gabe Cuzzillo On The Game's Randomly Generated Levels & Difficulty"
    speaker: "Gabe Cuzzillo"
    source: "Secret AV Club / YouTube"
    year: 2019
    duration: "12 min"
    summary: "Cuzzillo explains how APE OUT's procedural level generation works in relation to difficulty pacing, the randomised chapter structure that keeps playthroughs varied, and his philosophy on emergent challenge in an arcade context."
    url: "https://www.youtube.com/watch?v=-sUQjaYFTbQ"
  - type: video
    title: "The Games That Designed Themselves"
    speaker: "Mark Brown"
    source: "Game Maker's Toolkit / YouTube"
    year: 2020
    duration: "18 min"
    summary: "A multi-game essay using APE OUT as a central case study in listening to what a game wants to become. Brown traces how APE OUT transformed from a time-looping stealth game into a gorilla rampage when Cuzzillo noticed the grab-and-throw mechanics applied to guards were far more interesting — an argument for failing fast and following unexpected emergent directions."
    url: "https://www.youtube.com/watch?v=kMDe7_YwVKI"
  - type: video
    title: "Good Game Design - APE OUT: Style Through Chaos"
    source: "YouTube"
    year: 2019
    duration: "12 min"
    summary: "Examines how APE OUT uses 'juice' and stylistic cohesion across visual and audio dimensions to elevate simple core mechanics. Covers the jazz percussion system's dynamic reactivity to player actions and how procedural generation sustains replayability without requiring additional content."
    url: "https://www.youtube.com/watch?v=8Xe0HlMx2OA"
---

## Design Notes

**Following the mechanic, not the plan.** APE OUT started as a time-looping stealth game. The pivot happened when Gabe Cuzzillo noticed that grabbing guards and throwing them into walls — an incidental interaction — produced more interesting gameplay than the intended stealth loop. The design lesson here is about attentiveness: the most generative moments in prototyping are often not the moments where the design document is being validated but the moments where something unexpected works better than what was planned. APE OUT's entire identity — the ape, the chaos, the jazz — came from being willing to discard the original concept when the prototype revealed something better.

**Saul Bass as a design system.** Bennett Foddy's suggestion to use single-colour silhouettes against contrasting backgrounds — inspired by graphic designer Saul Bass — was not purely aesthetic. It created a visual grammar where colour is the primary communication tool: each chapter uses a distinct palette, enemies are readable as shapes rather than details, and the game can run at high speed without asking the player to parse fine visual information. This is a practical argument that art direction choices have design consequences — the decision to restrict detail improved gameplay legibility.

**Jazz as procedural scoring.** Matt Boch's percussion system treats the player's actions as improvisation inputs. Each collision, grab, and throw triggers percussive events that collectively form a jazz score unique to each playthrough. The system is designed so that moments of chaos feel musically resolved rather than cacophonous, which reinforces the fantasy of the ape's controlled violence. The lesson is that audio reactivity need not mean dynamic music layers — it can mean designing a musical idiom that inherently accommodates unpredictable input.

**Procedural generation in service of pacing.** APE OUT's chapters are procedurally generated, but the generator is tuned to control pacing rather than maximise variety. The level structure ensures encounters escalate in density and introduces new enemy types at controlled intervals, even though the specific geometry changes each run. This is a useful distinction: randomness serves the designer's intended difficulty curve rather than replacing it.

**Six years from idea to release.** The Student IGF nomination came early; the release took six more years. Cuzzillo's account of the development emphasises the role of Devolver Digital in providing the runway to finish the game properly and the importance of the collaboration structure — with Foddy and Boch contributing discrete expertise rather than shared ownership of every decision. Small, clearly scoped collaborations with defined creative responsibilities can sustain long development timelines better than loose joint teams.
