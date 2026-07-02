---
title: "Kingdom: Classic"
developer: "Noio, Licorice"
publisher: "Raw Fury"
year: 2015
genres: ["strategy", "roguelike", "indie"]
playtime: 2.0
steam_rating: 88.67
description: "Thomas van den Berg (Noio) and Marco Bancale (Licorice)'s minimalist strategy game that emerged from a single horse animation and grew into a meditative kingdom-building roguelike with almost no explicit tutorial. Kingdom: Classic is a case study in how severe mechanical constraint and atmospheric presentation can combine to produce a distinctive and widely imitated design."
design_tags: ["minimalism", "emergent gameplay", "resource management", "roguelike", "constraint-driven design", "atmospheric design", "no tutorial"]
resources:
  - type: article
    title: "Road to the IGF: Noio and Licorice's Kingdom"
    author: "Game Developer Staff"
    source: "Game Developer"
    year: 2016
    duration: "8 min read"
    summary: "Van den Berg discusses how Kingdom grew from a Flash game experiment into a commercial release, covering the game's deliberate minimalism, the single-resource design, and how the IGF nomination process helped sharpen the team's understanding of what made the game distinctive. Includes reflections on the tension between accessibility and the silence that defines the game's tone."
    url: "https://www.gamedeveloper.com/design/road-to-the-igf-noio-and-licorice-s-i-kingdom-i-"
  - type: interview
    title: "Kingdom Series: Thomas van den Berg Developer Interview"
    speaker: "Thomas van den Berg"
    source: "Critical Moves Podcast / YouTube"
    year: 2025
    duration: "55 min"
    summary: "Van den Berg traces his design philosophy from the Flash game era through Kingdom and his later project Cloud Gardens. Covers how working with severe constraints produces creative clarity, why he prefers discovery over explanation in player onboarding, and how the horse animation that started Kingdom shaped every subsequent design decision. Useful for designers interested in constraint-first game development."
    url: "https://www.youtube.com/watch?v=cfdodN2r6dE"
  - type: interview
    title: "Kingdom Interview with Marco Bancale and Thomas van den Berg"
    speaker: "Thomas van den Berg, Marco Bancale"
    source: "YouTube"
    year: 2015
    duration: "12 min"
    summary: "Both creators discuss the collaborative process behind Kingdom's art and game design, how Bancale's pixel art style emerged alongside the mechanics, and why the procedural generation system was kept as simple as possible to maintain the game's contemplative pacing. Provides context for how a two-person collaboration with geographically distant developers shaped the game's aesthetic."
    url: "https://www.youtube.com/watch?v=TENTiCv92n4"
---

## Design Notes

**A game born from a single animation.** Kingdom: Classic originated when Thomas van den Berg taught himself animation by drawing a horse, then placed a rider on it, then gave the rider things to do. Each addition emerged from the prior one with almost no top-down planning. This genesis is not merely anecdote — it explains the game's structural coherence: every mechanic in Kingdom flows from the central image of a monarch on horseback moving through a world. The coin, the recruitment gesture, the defensive perimeter, the day/night structure all serve the single activity of moving left and right on a horse through a procedurally generated world. Games designed this way tend to have an unusual unity of feeling that planned-from-outline designs often lack.

**Zero explicit tutorial as a design commitment.** Kingdom gives players almost no instructions. The first session involves discovering through experimentation what the left and right buttons do, what coins are for, and what happens when night comes. This is not neglect but policy: van den Berg and the design literature around Kingdom consistently describe the opacity as intentional. The game is specifically designed for the experience of not knowing, then understanding. This produces a distinctive kind of learning — player-initiated rather than developer-imposed — and it means that when the game's systems become clear, they feel personally discovered rather than explained. The cost is that some players disengage before the clarity arrives, which is a legitimate design tradeoff that Kingdom makes explicitly.

**Coins as the singular economy.** Every interaction in Kingdom passes through a single resource: coins. You spend them to recruit subjects, upgrade structures, and recover your crown. You earn them from tax collection and defeated enemies. This single-currency economy creates an unusually legible resource management game — there is never ambiguity about what you're trading for what. The constraint forces all decisions to be comparable: is it better to spend this coin on another archer or save it for a wall upgrade? This legibility at the resource level is what makes the game work at a slow, contemplative pace; if there were multiple resources to track, the game would demand attention management rather than ambient decision-making.

**Atmosphere as information system.** Kingdom uses its visual and audio design to communicate game state in ways that a more literal game would put in a UI. The ambient soundtrack shifts as danger approaches. The colour of the sky communicates time of day. Enemy presence is felt before it is seen. This integration of atmosphere and information is a high-skill design move that requires tight control over visual language — any ambiguity between "this looks ominous for aesthetic reasons" and "this looks ominous because you should be worried" breaks the system. Kingdom succeeds because every atmospheric signal is consistent and learnable, even if its meaning is not labelled.

**Roguelike structure as thematic expression.** The inevitable loss of your kingdom — especially the destruction of the crown, which resets the run — is not just a mechanical constraint but a statement about the nature of kingdoms. The game's design argues that empires are temporary, that the cycle of building and losing is the subject, not the failure state to be avoided. This alignment between mechanic and theme is what distinguishes Kingdom from roguelikes where the run structure is purely a gameplay device. It is also what makes the game's repetition feel meaningful rather than punishing: returning to a freshly generated world after defeat feels like continuation of the story, not interruption of it.
