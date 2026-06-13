---
title: "Clair Obscur: Expedition 33"
developer: "Sandfall Interactive"
publisher: "Kepler Interactive"
year: 2025
genres: ["turn-based RPG", "action RPG"]
playtime: 7.9
steam_rating: 94.34
description: "A debut RPG from a 30-person French studio that fuses classic turn-based structure with real-time parry and dodge mechanics, set in a surrealist world inspired by Belle Époque France. Clair Obscur won Game Developers Choice Awards Game of the Year 2025 and demonstrated that a small team with Unreal Engine 5 Blueprints and strong creative vision can produce AAA-competitive production values."
design_tags: ["turn-based", "real-time mechanics", "parry system", "indie", "narrative design", "unreal engine", "small team"]
resources:
  - type: interview
    title: "Inside the Development Journey of Clair Obscur: Expedition 33"
    speaker: "Tom Guillermin"
    source: "Unreal Engine / YouTube"
    year: 2025
    duration: "20 min"
    summary: "Sandfall Interactive's co-founder and CTO Tom Guillermin discusses how a team of mostly first-time AAA developers used Unreal Engine 5 to build a game with blockbuster-scale production values. Covers the decision to use Blueprint scripting almost exclusively, the 'vanilla-first' engine philosophy that kept the codebase manageable, and how Guillermin got started with UE5 from scratch."
    url: "https://www.youtube.com/watch?v=Hc5jC099-vE"
  - type: interview
    title: "Clair Obscur: Expedition 33 — Sandfall Interactive Q&A"
    speaker: "Guillaume Broche, Nicholas Maxson-Francombe"
    source: "YouTube"
    year: 2025
    duration: "30 min"
    summary: "Director Guillaume Broche and narrative director Nicholas Maxson-Francombe answer community questions about the game's development and design philosophy. Covers the origins of the Paintress concept, how the game's real-time parry system was balanced against the turn-based core, and the team's approach to building a studio culture that preserved creative autonomy."
    url: "https://www.youtube.com/watch?v=7MSRfVKC-Tc"
  - type: article
    title: "Clair Obscur: Expedition 33 Is '95 Percent' Made with Blueprints"
    author: "Game Developer Staff"
    source: "Game Developer"
    year: 2026
    duration: "8 min read"
    summary: "Reports on Sandfall's GDC 2026 talk revealing that almost all gameplay systems in Clair Obscur were built using Unreal's Blueprint visual scripting rather than C++ code. Covers how four programmers empowered a team of designers and artists to build camera systems, VFX, character behaviour, and skill animations directly without coding knowledge — the key decision that allowed a 30-person team to produce the content volume of a much larger studio."
    url: "https://www.gamedeveloper.com/programming/clair-obscur-expedition-33-was-built-95-percent-with-unreal-blueprints"
  - type: article
    title: "Crafting Clair Obscur: Expedition 33's Mournful Tale"
    author: "Beth Elderkin"
    source: "Game Developer"
    year: 2025
    duration: "10 min read"
    summary: "Narrative director Jennifer Svedberg-Yen discusses the creative decisions behind Clair Obscur's story — how grief and cyclical loss were built into the world's premise, the process of writing characters whose deaths are structurally inevitable, and how the team balanced the game's dark thematic core against the need for moments of warmth and player investment."
    url: "https://www.gamedeveloper.com/design/crafting-clair-obscur-expedition-33-s-mournful-tale-ft-jennifer-svedeberg-yen"
  - type: article
    title: "How the Clair Obscur: Expedition 33 Dev Process Powered Creative Design Freedom"
    author: "PlayStation Blog Staff"
    source: "PlayStation Blog"
    year: 2026
    duration: "8 min read"
    summary: "Tom Guillermin and Florian Torres explain how Sandfall structured the programming team to give designers maximum creative freedom. Covers the specific Blueprint node system they built as building blocks for non-programmers, how any team member could directly modify game logic and camera behaviour, and the studio's argument that empowering non-technical staff is a competitive advantage for small teams."
    url: "https://blog.playstation.com/2026/03/11/how-the-clair-obscur-expedition-33-dev-process-powered-creative-design-freedom/"
---

## Design Notes

**Real-time skill within a turn-based frame.** Clair Obscur's defining mechanical tension is that it is turn-based in structure but real-time in execution. During enemy attacks, players must press buttons at specific moments to parry or dodge — a rhythm-action skill layer that sits inside the traditional ATB framework. This hybrid does not compromise either half: the turn-based layer handles strategy and positioning, while the parry layer handles moment-to-moment engagement and keeps combat physically active. The combination prevents the passive waiting that often deadens classical turn-based combat while preserving the deliberate decision-making that makes the format strategically interesting.

**The Paintress premise as a design engine.** The game's central conceit — a supernatural figure who paints a number each year and causes everyone of that age to vanish — creates a world where mortality is known, inevitable, and shared. This premise is not merely narrative flavour; it generates the game's emotional stakes, the structure of each expedition, and the basis for every character relationship. Good world premises produce gameplay logic naturally: in this world, why do people still go on expeditions? Because there is no alternative. The premise answers questions that other RPGs would need to construct elaborate backstories to justify.

**Blueprint scripting as a content multiplier.** Sandfall's four programmers built a library of Blueprint nodes that designers and artists could combine directly without writing code. Skills, camera systems, VFX sequences, and character behaviours were built by the people with direct creative ownership over them rather than being translated through engineering. The result was that a 30-person team produced the content volume typically associated with studios four or five times their size. This is not a technical curiosity — it is a production philosophy that treats programmer time as the scarce resource and builds tools to make non-programmers independent rather than dependent.

**Debut game ambition with first-principles scope discipline.** Sandfall set out to make a game with cinematic production values, a full orchestral score, and AAA-scale world-building, despite being a new studio on their first project. This succeeded partly because the team was small enough for director Guillaume Broche to maintain creative oversight across every system, and partly because the UE5 toolset genuinely compressed the engineering costs of high-fidelity production. The lesson is not that first studios should attempt blockbuster games, but that clear creative vision, appropriate tooling, and production discipline can occasionally close gaps that experience would otherwise require.

**Narrative direction as game design.** The decision to give the game's central antagonist, the Paintress, genuine motivation and grief rather than making her a conventional villain was a design choice with gameplay implications: players are not chasing a monster but unravelling a tragedy. This changes the emotional register of the entire game — the goal is not destruction but understanding. Narrative decisions of this kind cascade into mission design, dialogue options, and how boss encounters are framed. In RPGs especially, the design of antagonist motivation is a game design decision, not just a writing decision.
