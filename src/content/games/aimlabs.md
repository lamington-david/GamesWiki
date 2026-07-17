---
title: "Aimlabs"
developer: "Statespace"
publisher: "Statespace"
year: 2020
genres: ["action", "utility", "free-to-play", "esports training"]
playtime: 0.52
steam_rating: 90.14
description: "A neuroscience-based aim training platform built by neuroscientists and computer vision researchers, not game designers. Aimlabs applies behavioral science, machine learning, and performance analytics to the skill-development loop — using game mechanics as delivery infrastructure for a training methodology rooted in academic research on vision and motor control."
design_tags: ["skill training", "personalization", "behavioral design", "data-driven design", "gamification", "performance analytics", "esports", "feedback loops"]
resources:
  - type: interview
    title: "Interview: Dr. Wayne Mackey, CEO of Statespace / Aimlabs"
    speaker: "Wayne Mackey"
    source: "YouTube"
    year: 2021
    duration: "25 min"
    summary: "Wayne Mackey discusses building Aimlabs while completing a PhD in neuroscience at NYU, the academic research underpinning the platform's training design, and why the sports performance model — where elite athletes have dedicated performance analytics support — should apply to esports. Covers the decision to make the platform free and monetise through developer partnerships rather than paywalls."
    url: "https://www.youtube.com/watch?v=VvjnhqhZG-4"
  - type: article
    title: "Why Multiplayer Devs Are Turning to Aim Lab for Advanced Player Training"
    author: "Game Developer Staff"
    source: "Game Developer"
    year: 2023
    duration: "8 min read"
    summary: "Covers Aimlabs' B2B model — partnerships with Ubisoft (Rainbow Six Siege) and Riot Games (Valorant) to become designated official training platforms. Examines why developers find value in directing skilled players to an external training environment and how Aimlabs functions as a player development pipeline for competitive titles. Includes discussion of the neuroscience methodology behind task design."
    url: "https://www.gamedeveloper.com/design/why-multiplayer-devs-are-turning-to-aim-lab-for-advanced-player-training"
  - type: article
    title: "These Neuroscientists Think They Can Help You Get More Headshots"
    author: "Vice Staff"
    source: "Vice"
    year: 2019
    duration: "10 min read"
    summary: "An early profile of Statespace and the origin story of Aimlabs, focusing on co-founders Wayne Mackey and Jay Fuller's PhD research on vision and motor control at NYU. Explains how academic research on attention, visual processing, and sensorimotor learning was translated into training scenarios, and articulates the ambition to do for esports what sports science has done for professional athletics."
    url: "https://www.vice.com/en_us/article/3k7zwj/these-neuroscientists-think-they-can-help-you-get-more-headshots"
---

## Design Notes

**Neuroscience as design methodology.** Aimlabs was created by neuroscientists rather than game designers, and this origin shapes its entire approach. Co-founders Wayne Mackey and Jay Fuller's PhD research at NYU focused on computational models of vision, attention, and motor control — the precise domains relevant to first-person shooter aim. These research areas directly informed how Aimlabs designs training tasks, structures feedback, and interprets performance data. The game-like wrapper around training exercises is not cosmetic: behavioral reinforcement principles from academic research on sensorimotor learning are implemented as game mechanics. The product is what happens when the methodology comes first and the game comes second.

**Adaptive personalization as the core loop.** Where a traditional game gives all players the same content, Aimlabs uses performance analytics to identify individual weaknesses and generate targeted training prescriptions. Performance on each scenario is tracked across multiple dimensions — tracking accuracy, flicking speed, reaction time, target acquisition — and the system recommends scenarios that address identified deficits. This adaptive loop (play, measure, adapt, repeat) applies machine learning to skill development in a way that static game content cannot replicate. The personalization is the product; the scenarios themselves are implementation details of the measurement and recommendation system.

**Target-game fidelity as transfer principle.** Aimlabs explicitly models the visual parameters, movement physics, and hitbox sizes of specific partner games — a Valorant training mode, an Apex Legends mode — allowing players to transfer skills directly from the trainer to the target application. This fidelity-to-context principle reflects a well-established finding in motor learning research: transfer is higher when the training environment closely matches the application environment. The decision to build game-specific modes rather than generic exercises is a principled design choice rooted in the transfer literature, not merely a marketing partnership benefit.

**Gamification of performance data.** Aimlabs succeeds commercially because it makes the skill-improvement process itself engaging rather than merely instrumental. Personal bests, global leaderboards, scenario ranking tiers, and progression systems provide motivational architecture that transforms a drills regime into something players return to voluntarily. This represents a specific application of game design thinking to non-game activities: the motivational structures that sustain engagement in games — mastery progression, competitive positioning, incremental reward — are applied to sustained training behavior. The lesson is bidirectional: game designers can study how Aimlabs gamifies genuine skill development, not just simulated skill development.

**B2B publisher partnerships as free-to-play model.** Aimlabs operates on a dual commercial model: free for players, sold as a certified training platform to game publishers. Riot Games and Ubisoft designating Aimlabs as official training partners provided revenue without paywalling the core product, while the publisher partnerships created legitimacy that drove player adoption. This model is structurally different from cosmetic or battle-pass free-to-play: value is extracted from a B2B relationship with developers whose games Aimlabs complements rather than competes with. The game is designed to be additive to, not substitutive of, the partner titles — a design constraint that shapes every product decision.