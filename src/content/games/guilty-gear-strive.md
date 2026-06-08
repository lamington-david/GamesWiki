---
title: "GUILTY GEAR -STRIVE-"
developer: "Arc System Works"
publisher: "Arc System Works"
year: 2021
genres: ["fighting"]
playtime: 15.9
steam_rating: 86.66
description: "Arc System Works' franchise reinvention demonstrates how to make a deep fighting game accessible to newcomers without stripping the systems that veterans care about. Strive solved the fighting game's perennial tension — accessibility versus depth — through visual clarity, a redesigned movement system, and rollback netcode that finally made competitive online play viable for the genre."
design_tags: ["fighting game design", "accessibility", "visual clarity", "netcode", "franchise reinvention", "character design"]
resources:
  - type: article
    title: "Guilty Gear -Strive- Developer's Backyard"
    speaker: "Daisuke Ishiwatari, Akira Katano"
    source: "Arc System Works Official"
    year: 2021
    duration: "Series of articles"
    summary: "Arc System Works' official design blog series where General Director Daisuke Ishiwatari and Director Akira Katano answer community questions about Strive's design philosophy — covering the distinction between 'simple' and 'easy,' their approach to character balance, how they integrated feedback from previous entries, and why they chose to treat Strive as a new game rather than an iteration."
    url: "https://www.arcsystemworks.jp/guiltygear/db/en/"
  - type: article
    title: "How Guilty Gear -Strive- Hits an Ultra Combo with Groundbreaking Visuals and Gameplay"
    author: "Unreal Engine Team"
    source: "Unreal Engine / Epic Games"
    year: 2021
    duration: "10 min read"
    summary: "A technical deep-dive into how Arc System Works used Unreal Engine 4 to achieve Strive's distinctive 2.5D cel-shaded aesthetic — rendering 3D models to look like hand-drawn animation at 60fps. Also covers the team's accessibility goals, their approach to balancing new player matchmaking, and how they aimed to make the series' most accessible and deepest fighting system simultaneously."
    url: "https://www.unrealengine.com/en-US/developer-interviews/how-guilty-gear--strive--hits-an-ultra-combo-with-groundbreaking-visuals-and-gameplay"
  - type: article
    title: "Guilty Gear -Strive- Developer's Backyard Volume Two"
    speaker: "Daisuke Ishiwatari, Akira Katano"
    source: "Gematsu"
    year: 2020
    duration: "8 min read"
    summary: "English translation of the second Developer's Backyard entry, where Ishiwatari and Katano explain Strive's design philosophy of distinguishing 'simplified' from 'accessible.' Covers how they approached making move inputs more readable, how they redesigned the wall system to create more dynamic neutral play, and their approach to ensuring that new character concepts are legible to both developers and players."
    url: "https://www.gematsu.com/2020/07/guilty-gear-strive-developers-backyard-volume-two"
  - type: interview
    title: "Guilty Gear — 1998 Developer Interview"
    speaker: "Daisuke Ishiwatari, Hideyuki Anbe"
    source: "Shmuplations (translated from Japanese)"
    year: 1998
    duration: "10 min read"
    summary: "Shmuplations' translation of the original 1998 developer interview with Strive's general director Daisuke Ishiwatari, covering the founding philosophy of the Guilty Gear franchise — the emphasis on fast, expressive gameplay and distinctive character identities. Valuable historical context for understanding the design commitments Strive was built to honour while reinventing the series."
    url: "https://shmuplations.com/guiltygear/"
  - type: article
    title: "4Gamer Interview with Guilty Gear Strive's Development Team"
    author: "4Gamer (translated by JPFGC)"
    source: "4Gamer / JPFGC (translated from Japanese)"
    year: 2022
    duration: "15 min read"
    summary: "Translated interview covering Strive's post-launch direction — how the team responded to community feedback on the Season 1 DLC characters, their approach to designing characters that feel distinct at a high level of play, and their balance philosophy of prioritising 'fun' over mathematical equilibrium. Includes specific discussion of how they think about the appeal of each character as a design unit."
    url: "https://jiyunajp.wordpress.com/2022/10/13/4gamer-interview-with-guilty-gear-strives-development-team/"
---

## Design Notes

**Distinguishing 'simple' from 'accessible.'** The most important design commitment in Strive is the distinction Ishiwatari and Katano draw between making a game simple and making it accessible. Simplification removes depth; accessibility removes friction on the path to that depth. Strive made specific interventions — reduced input complexity for special moves, clearer visual telegraphing of attack properties, a wall-break system that resets neutral — while leaving the fundamental depth of the fighting system intact. The game is not easy for experienced players; it is easier to begin. This distinction is the frame every competitive genre designer needs to internalise.

**Visual clarity as a design value.** Strive's 2.5D cel-shaded aesthetic, rendered with Unreal Engine 4, was designed to make character states and attack properties immediately legible. Hit sparks are large and colour-coded; recovery frames are visually distinct; the wall positions are architecturally clear. Compared to prior Guilty Gear games, whose visual density could obscure mechanical information, Strive treats the visual layer as part of the game's communication system rather than just its presentation. The implication for fighting game design is that the screen is not just a canvas — it is a HUD, and every visual choice is also an information design choice.

**Character identity as design unit.** Ishiwatari's long-standing principle for Guilty Gear characters is that each one should have a clearly defined concept legible at a glance — not just visually but mechanically. A new player seeing Axl Low should be able to infer his role (zoner with long-range chains) from his visual design; a new player watching Millia Rage should infer her role (rushdown with hair-as-weapon). Strive extended this to new characters' move sets, with Ishiwatari explicitly stating that character concepts must make sense to both developers and players without explanation. This unity of visual and mechanical identity is one of the most transferable principles from Arc System Works to other genres.

**Rollback netcode as design infrastructure.** Strive launched with rollback netcode at a time when most fighting games still relied on delay-based connections. This was not a minor technical improvement — it fundamentally changed who could play the game competitively. Online players who would have been effectively excluded from the competitive scene by poor connections could now practice and compete at close to local play quality. The design lesson is that infrastructure decisions (netcode, matchmaking, server architecture) are gameplay decisions: they determine who the game is actually for in practice, regardless of what the design documentation says in theory.

**Reinvention while honouring legacy.** Ishiwatari has described Strive as a game designed to 'destroy' Guilty Gear Xrd — not to continue it but to replace it with something new that honoured the franchise's spirit while abandoning its accumulated complexity. This required accepting that some existing players would feel the new game was not for them, a commercially painful but creatively necessary trade-off. The franchise's long-term health depended on attracting new players, and attracting new players required making design decisions that veteran players would resist. Strive is a case study in how to execute a franchise reinvention that expands an audience without simply alienating the existing one.

