---
title: "Rain World"
developer: "Videocult"
publisher: "Adult Swim Games"
year: 2017
genres: ["survival", "platformer", "metroidvania"]
playtime: 6.7
steam_rating: 92.40
description: "A harsh survival-platformer where the player controls a slugcat navigating a fully simulated ecosystem of creatures that pursue their own goals — hunting, fleeing, nesting — rather than reacting to the player. Rain World is a key reference for simulationist creature AI and for design that deliberately refuses to treat the player as the center of the world."
design_tags: ["ecosystem simulation", "emergent AI", "procedural animation", "hostile world design", "non-player-centric design"]
resources:
  - type: gdc_talk
    title: "The Rain World Animation Process"
    speaker: "Joar Jakobsson, James Therrien"
    source: "GDC 2016 Animation Bootcamp / YouTube"
    year: 2016
    duration: "25 min"
    summary: "The developers break down Rain World's procedural, soft-body creature animation system — how creatures are simulated as interconnected physical segments rather than hand-keyframed, and how that physical layer feeds directly into AI behavior and movement constraints."
    url: "https://www.youtube.com/watch?v=sVntwsrjNe4"
  - type: article
    title: "Crafting the complex, chaotic ecosystem of Rain World"
    source: "Game Developer"
    year: 2023
    duration: "10 min read"
    summary: "A design deep-dive into Rain World's core philosophy that 'nothing in this world was made for you' — explaining the modular AI architecture where each creature holds relationship tables describing how it perceives every other creature, object, and location, and how that produces emergent behavior that surprises even the developers."
    url: "https://www.gamedeveloper.com/design/crafting-the-complex-chaotic-ecosystem-of-i-rain-world-i-"
  - type: interview
    title: "Road to the IGF: Videocult's Rain World"
    speaker: "Joar Jakobsson, James Therrien"
    source: "Game Developer"
    year: 2016
    duration: "8 min read"
    summary: "A pre-release interview on the design philosophy behind a textless, direction-free experience built so players project themselves into the slugcat. Covers the character's tumbling, fall-prone movement design, the grimy industrial world design, and how music — rather than text or UI — became the game's primary narrative and emotional guide."
    url: "https://www.gamedeveloper.com/business/road-to-the-igf-videocult-s-i-rain-world-i-"
  - type: video
    title: "Dev on Air: The Design and Creative Process Behind Rain World"
    speaker: "Joar Jakobsson"
    source: "YouTube"
    year: 2021
    duration: "55 min"
    summary: "An extended conversation in which Jakobsson traces Rain World's design back to living as an exchange student in Seoul, and the 'rat in a city built for humans' metaphor that became the game's foundational idea — a world with its own internal logic that was never designed to be legible to its inhabitant."
    url: "https://www.youtube.com/watch?v=vlMTnuGGNxM"
---

## Design Notes

**A world that doesn't care about you.** Rain World's central design conceit inverts the standard survival-game contract: instead of carefully tuning encounters, resource placement, and pacing around the player's capabilities, it builds a self-consistent ecosystem where the player is just one more creature competing for food and shelter. Predators hunt according to their own goals, not because the player walked into a trigger volume. This requires real design discipline — resisting the urge to "fix" an encounter that goes badly for the player just because it goes badly, since fairness here comes from consistent rules rather than tuned outcomes.

**Modular AI as a cheaper, more alive alternative to scripting.** Rather than hand-authoring behavior for every creature encounter, Videocult gave each creature type a set of behavioral modules (hunt, flee, nest, defend territory) plus relationship tables describing how it perceives every other creature, object, and hazard in the world. Creatures then make moment-to-moment decisions from those modules, which produces emergent outcomes — predators cutting off prey, ecosystem imbalances cascading — that no one explicitly scripted. The broader lesson: simulating the decision-making process, rather than authoring specific decisions, scales better and produces behavior that surprises designers as much as players.

**Physical simulation as the seed of behavior.** Rain World's procedural, soft-body creature animation isn't just a visual flourish — a creature's body is simulated as interconnected physical segments, and its movement options emerge from that physical form rather than being separately authored. A slugcat can't move like a scavenger because its body doesn't allow it; that constraint reads as believable biology rather than as an arbitrary design rule. Tying animation and mechanical capability together this tightly is a model for any game where movement variety needs to feel earned by physical logic rather than feature-flagged.

**An indifferent world told through environment, not exposition.** Jakobsson's "rat in a city built for humans" framing pushed the team to build biomes with their own internal logic — industrial detritus, organic growths, weather cycles — without tutorializing how players should read them. The slugcat (and the player) learns through observation and failure, the same way an animal navigating an environment never designed for it would. Music, not text, carries most of the emotional and narrative weight. This is a strong example of environmental storytelling pursued all the way down: the lesson isn't just "show, don't tell," it's that internal consistency, sustained rigorously, teaches players faster than any explicit tutorial could.

**Harshness is acceptable when it's transparent.** Rain World has no difficulty settings and no systems that pause the world to let the player catch up — the rain cycle advances regardless of readiness, and creatures don't wait their turn. Despite this, the game doesn't read as unfair, because its rules are knowable and consistent: the player always knows roughly how long until rain, and creature behavior always follows the same underlying logic. The transferable principle is that brutal difficulty becomes acceptable, even rewarding, when failure is legible as a consequence of comprehensible rules rather than as arbitrary punishment.
