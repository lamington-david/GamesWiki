---
title: "Undertale"
developer: "Toby Fox"
publisher: "Toby Fox"
year: 2015
genres: ["RPG", "indie", "bullet hell"]
playtime: 7.8
steam_rating: 95.48
description: "A solo-developed RPG built around a single radical proposition: what if you didn't have to kill anyone? Undertale uses player choice as its structural spine, creating two fundamentally different games depending on whether the player uses violence, and pioneered a style of morally aware game design that treats the player's past actions as permanent narrative consequences."
design_tags: ["moral agency", "pacifist design", "bullet hell", "subverted expectations", "enemy personality", "indie RPG", "meta-awareness"]
resources:
  - type: article
    title: "Game Design Deep Dive: Undertale's Action-Based RPG Battles"
    author: "Toby Fox"
    source: "Game Developer"
    year: 2023
    duration: "10 min read"
    summary: "Toby Fox himself explains the thinking behind Undertale's hybrid battle system — how he built the bullet-hell dodge mechanic to make each monster feel like an individual, why he started with the battle engine before any other game system, and how the constraint of solo development shaped every design decision. A rare first-person account of the game's foundational mechanic."
    url: "https://www.gamedeveloper.com/design/game-design-deep-dive-i-undertale-i-s-action-based-rpg-battles"
  - type: article
    title: "The Hidden Level Design of Undertale"
    author: "Game Developer Staff"
    source: "Game Developer"
    year: 2023
    duration: "8 min read"
    summary: "An analysis of the spatial design choices hiding beneath Undertale's apparently simple maps — how directional flow, left-to-right momentum, and the upward bias of late-game areas reinforce narrative progression without a single line of tutorial text. Shows how conventional level design instincts operate even in a game that appears to ignore them."
    url: "https://www.gamedeveloper.com/design/the-hidden-level-design-of-undertale"
---

## Design Notes

**Every monster as an individual, not a stat block.** Toby Fox built the battle engine before any other system, and its central constraint — each monster has unique bullet patterns, dialogue, and a distinct personality — forced every other design decision to follow. In traditional RPGs, enemies are interchangeable resources for grinding. In Undertale, killing the Froggit means something, because the Froggit has expressed a desire to live. Fox's starting question was how to make every encounter feel like meeting a person, and the solution — individualised dodge patterns paired with character-specific spare conditions — is a direct mechanical answer to that question. The battle engine is the argument; the rest of the game is the evidence.

**The pacifist/genocide split as structural architecture.** Most games with moral choices offer branches within a shared story. Undertale offers two almost entirely different games. The pacifist route and genocide route share maps and dialogue triggers but diverge in tone, pacing, encounter design, and ending so completely that completing both feels like reading two contradictory interpretations of the same text. This required Toby Fox to essentially build the game twice — but the payoff is that the player's overall choice of how to play becomes the narrative subject, not a side detail. The genocide route in particular is a deliberate act of design hostility: it removes the game's pleasures methodically, teaching players what they were actually doing in conventional RPGs by making them feel the cost.

**Music composing the emotional architecture.** Fox composed the entire soundtrack himself, and many design moments are specifically engineered around audio cues rather than visual ones. Boss themes shift mid-fight as encounter phases change; character leitmotifs recur across unexpected scenes; the final confrontation's music is built from melodic fragments introduced hours earlier. Because Fox controlled both the design and the score simultaneously, he could build emotional payoffs that depend on the player recognising a theme they've already bonded with. This music-first design approach — writing gameplay to match audio cues rather than scoring to gameplay — produces emotional moments that feel structurally inevitable rather than incidentally moving.

**Subverting player expectations through memory and consequence.** Undertale tracks player history across save files in ways that conventional games do not, and builds plot twists that require the player to have performed actions they regret. The game's antagonist, Flowey, explicitly describes the player's save-and-reload habits back at them, breaking the fourth wall to implicate the player in the game's violence. This only works because the game has spent hours building the illusion that saves are consequence-free. The violation of that expectation is itself a designed experience — and it requires precise sequencing, where player comfort must be established before it can be exploited.

**Solo development as creative constraint and coherence source.** Fox made almost every creative decision himself — code, design, music, writing, art direction (with artist Temmie Chang handling specific illustrations). The result is an unusual tonal consistency: the humour, horror, and sincerity coexist without register shifts because they all came from the same sensibility. This coherence is largely impossible in team-made games where different departments develop subsystems in relative isolation. Undertale offers a case study in how creative restriction — the constraint of a single designer's bandwidth — can function as a unifying force, ensuring that the game's systems reinforce each other's meanings rather than working at cross-purposes.
