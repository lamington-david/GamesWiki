---
title: "The Swords of Ditto: Mormo's Curse"
developer: "onebitbeyond"
publisher: "Devolver Digital"
year: 2018
genres: ["action RPG", "roguelite", "indie"]
playtime: 5.0
steam_rating: 62.09
description: "A top-down action RPG with roguelite elements, developed by Jonathan Biddle and Sam Robinson at onebitbeyond. Each playthrough follows a new hero chosen to defeat the witch Mormo; failure leaves the world in a worse state for the next hero. Notable as an attempt to make the roguelite genre accessible to players who don't ordinarily engage with it, and as a study in procedural generation designed to look hand-crafted."
design_tags: ["roguelite", "procedural generation", "legacy mechanics", "action RPG", "zelda-like", "accessible design", "procedural aesthetics"]
resources:
  - type: article
    title: "Making Every Procedurally-Generated Playthrough Feel Unique in Swords of Ditto"
    author: "Jack Yarwood"
    source: "Game Developer"
    year: 2018
    duration: "8 min read"
    summary: "Design interview covering onebitbeyond's central technical and aesthetic challenge: generating levels that felt hand-crafted rather than algorithmically assembled. Explains the tilesets, encounter templates, and placement rules used to ensure procedural spaces never looked random, and how the team's commitment to a clean cartoon aesthetic aided this goal by being more forgiving of imperfect spatial composition than realistic styles."
    url: "https://www.gamedeveloper.com/design/making-every-procedurally-generated-playthrough-feel-unique-in-i-swords-of-ditto-i-"
  - type: interview
    title: "Why Onebitbeyond Wanted to Make a Roguelike with Broader Appeal in Swords of Ditto"
    speaker: "Jonathan Biddle"
    source: "PC Games Insider"
    year: 2018
    duration: "6 min read"
    summary: "Jonathan Biddle discusses the explicit design goal of making a Zelda-like experience accessible to players who don't play roguelites, and why the genre's visual languages and punishing conventions had previously limited its audience. He covers the decision to borrow Zelda's item grammar — the gadget that opens a new dimension of the space — and embed it in a procedural framework rather than building a new vocabulary from scratch."
    url: "https://www.pcgamesinsider.biz/indie-interview/66951/why-onebitbeyond-wanted-to-make-a-roguelike-title-with-broader-appeal-in-swords-of-ditto/"
  - type: interview
    title: "The Swords of Ditto — Jonathan Biddle Interview"
    speaker: "Jonathan Biddle"
    source: "Gamereactor"
    year: 2018
    duration: "5 min"
    summary: "Video interview with creative director Jonathan Biddle discussing the game's core concept — a world that degrades across failed runs, with each successive hero inheriting a darker and more hostile Ditto — and the design work required to make that legacy system feel meaningful rather than punitive. Covers how co-op play was considered from early in development as a second mode of experience rather than an afterthought."
    url: "https://www.gamereactor.eu/video/323983/The+Swords+of+Ditto+-+Jonathan+Biddle+Interview/"
---

## Design Notes

**Legible procedural generation.** The Swords of Ditto's central design constraint was that randomly-generated levels must look hand-crafted. onebitbeyond used tilesets with internal composition rules, enemy encounter templates placed by type rather than position, and a clean cartoon visual language that forgives imperfect spatial composition in ways that realistic environments would not. The procedural system is hidden behind aesthetic decisions that make its outputs seem authored — a reminder that players read "designed" and "random" through visual language as much as structural analysis.

**Legacy through failure as motivational design.** Each failed run leaves Ditto in a worse state for the next hero: buildings crumble, NPCs grow hostile, the colour palette darkens and Mormo's influence spreads. This makes failure feel like a consequence that persists rather than a reset that erases. Players who fail have a reason to want the next run to succeed that extends beyond personal performance — they've watched the world they'll re-inherit deteriorate. Legacy mechanics convert failure from a setback into a stake.

**Borrowing genre grammar to reduce onboarding cost.** Rather than build a new vocabulary from scratch, onebitbeyond borrowed Zelda's established design language — the gadget that opens a new dimension of the space, the inventory of items with distinct use cases, the dungeon as the locus of the item that unlocks it. Players bring Zelda literacy that the game leverages from the first encounter. This is a design efficiency: inherited vocabulary frees development time and reduces player onboarding burden, while the procedural framework provides novelty within a familiar structure.

**Broadening a genre's audience.** Biddle explicitly designed The Swords of Ditto to be the roguelite for players who don't play roguelites — approachable art direction, warmer difficulty curve, lower punish on failure than the genre norm. This required identifying which genre conventions serve the core experience (runs that persist, world states that change) versus which are arbitrary tradition (punishing difficulty, abstract visual language). Broadening genre appeal without losing genre identity is a design problem that requires understanding what a genre's audience is actually responding to.

**Co-op as a balance disruption.** The Mormo's Curse update significantly improved co-op, revealing a structural tension: tuning for a solo player produces a different experience when a second player of different skill level joins. Enemy behaviour, item availability, and difficulty scaling all need to accommodate variance in player capability that single-player design can ignore. Designing for two players requires treating their skill asymmetry as a first-class design constraint — the experienced player teaching the new one is an intended mode of play, not an edge case.
