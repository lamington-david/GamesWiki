---
title: "Blue Prince"
developer: "Dogubomb"
publisher: "Raw Fury"
year: 2025
genres: ["puzzle", "roguelike", "adventure"]
playtime: 20.0
steam_rating: 84.65
description: "A mystery mansion game developed solo over eight years by Tonda Ros, Blue Prince is a rare example of a hybrid that genuinely synthesises its constituent parts rather than bolting them together. Its roguelike room-drafting mechanic — select one of three rooms to add to the mansion each run — was designed by a cinematographer-turned-developer as a tabletop card game concept, and the result is something that feels like neither a roguelike nor a puzzle game but a space of inexhaustible discovery."
design_tags: ["solo development", "hybrid design", "roguelike", "puzzle design", "discovery systems", "playtesting", "tabletop influence"]
resources:
  - type: video
    title: "Testing Blue Prince — Tonda Ros (ThinkyCon 2025)"
    speaker: "Tonda Ros"
    source: "ThinkyCon 2025 / YouTube"
    year: 2025
    duration: "45 min"
    summary: "Ros's talk at ThinkyCon 2025 on how to playtest a game that refuses to be predictable. Covers the methodologies he developed over four years of external testing, watching over 2,000 hours of recorded gameplay, and building a feedback system for a game that is deliberately designed to resist being fully understood. A detailed look at playtesting as a design discipline rather than a QA task."
    url: "https://www.youtube.com/watch?v=z08rqlKkssg"
  - type: video
    title: "Designing the Shifting Rooms of Blue Prince with Creator Tonda Ros"
    speaker: "Tonda Ros"
    source: "Game Maker's Notebook / YouTube"
    year: 2025
    duration: "60 min"
    summary: "Extended conversation in which Ros walks through Blue Prince's room design philosophy, how individual rooms were designed to create emergent combinations rather than isolated puzzles, and how the game's architecture metaphor — rooms as ideas that need to fit together — shaped every structural decision across eight years of development."
    url: "https://www.youtube.com/watch?v=xhggQry2J7M"
  - type: interview
    title: "How Myst, Riven, and Tabletop Games Built the Foundation of Blue Prince"
    speaker: "Tonda Ros"
    source: "Thinky Games"
    year: 2025
    duration: "15 min read"
    summary: "Ros explains how Blue Prince originated simultaneously as a physical card game concept and a first-person exploration game inspired by Myst and Riven. Covers how the two designs merged, how the core pick-three-rooms mechanic was established in the first week of development and never changed, and his philosophy of designing challenges that allow for alternate solutions and player-driven creativity."
    url: "https://thinkygames.com/features/interview-how-myst-riven-and-tabletop-games-built-the-foundation-of-blue-prince/"
  - type: article
    title: "Why Dogubomb Watched Over 2,000 Hours of Gameplay to Perfect Blue Prince"
    author: "Unity Staff"
    source: "Unity Blog"
    year: 2025
    duration: "10 min read"
    summary: "Unity's profile of Ros covers his background in film as an LA cinematographer before switching to game development, how he began recruiting playtesters four years before release, and the specific techniques he used to observe play sessions without influencing them — including why watching recorded footage rather than streaming let him catch design problems invisible to synchronous observation."
    url: "https://unity.com/blog/blue-prince-why-dogubomb-watched-2000-hours-gameplay"
---

## Design Notes

**The core mechanic as the game's only stable element.** Blue Prince began in 2016 as two unrelated ideas: a tabletop card game about drafting rooms, and a first-person mansion exploration game. When the two concepts merged, Ros arrived at the mechanic that would anchor everything: each day in the game world, the player selects one of three room cards and places it in the mansion. This single mechanic — choose one of three — was established in the first week of development and never changed. Everything else spiralled from it over the following eight years. The lesson is about the difference between a mechanic and a game: a compelling mechanic is a stable attractor that survives the long iterations surrounding it, and finding one early is the most important structural decision a designer can make.

**Eight years of solo development as sustained creative vision.** Ros spent eight years building Blue Prince while working extremely long weeks, starting a playtesting programme in 2020 — four years before release — and watching over 2,000 hours of recorded gameplay. Most solo projects of this duration either scope-creep into incompleteness or collapse under their own ambition. Blue Prince shipped as a coherent, finished work because Ros maintained a stable creative vision across the full development arc. His film background is relevant: a cinematographer is trained to translate a director's vision into execution, and Ros applied this discipline to his own work — the game he imagined in week one is recognisably the game that shipped in year eight.

**Discovery as the primary design goal.** Blue Prince is explicitly designed for what Ros calls discovery — the experience of not knowing what something is and then finding out, without being told. Rooms have purposes that are not explained; connections between rooms are not signposted; solutions are not implied. The game trusts players to be curious enough to investigate and patient enough to synthesise. This produces a quality of experience that no tutorial or quest marker system can replicate: the feeling that you specifically found something, rather than that the game showed you where it was. The design risk is player frustration with opacity, and Ros managed this risk through obsessive playtesting, watching thousands of hours of sessions to calibrate where ambiguity was delightful and where it was merely confusing.

**Playtesting a game designed to resist being solved.** Blue Prince's most technically interesting design challenge was how to test a game whose core proposition is that players don't know what they're looking at. Conventional playtesting asks: did the player understand this? But Blue Prince's objective is that players don't fully understand — the mystery is the product. Ros developed a testing methodology focused on emotional state rather than comprehension: he was watching for whether players were curious, engaged, and motivated to continue, not for whether they correctly decoded each room's purpose. This reframing — testing for the right experiential state rather than the right cognitive state — is a model for how to test any game whose value proposition is intentional opacity.

**Roguelike structure as a discovery engine.** The room-drafting mechanic produces a mansion that is never the same twice, but unlike most roguelikes, the randomness in Blue Prince is not primarily a replayability feature — it's a discovery mechanism. Because the mansion's configuration changes with each run, the specific combination of rooms that unlocks a particular secret may not occur until the hundredth attempt. The randomness does not generate content arbitrarily; it controls the rate of revelation, spacing discoveries across many sessions in a way that keeps the game feeling alive long after its systems are understood.
