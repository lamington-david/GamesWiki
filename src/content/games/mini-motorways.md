---
title: "Mini Motorways"
developer: "Dinosaur Polo Club"
publisher: "Dinosaur Polo Club"
year: 2022
genres: ["puzzle", "strategy", "simulation"]
playtime: 4.1
steam_rating: 94.06
description: "Dinosaur Polo Club's follow-up to Mini Metro trades subway lines for road networks, asking players to connect residential zones to matching commercial buildings as cities grow beyond any plan's capacity. A case study in the design of elegant systems with brutal emergent complexity, and in how minimalist aesthetics can communicate dense information effortlessly."
design_tags: ["minimalism", "systems design", "puzzle design", "emergence", "traffic simulation", "zen games", "resource management"]
resources:
  - type: interview
    title: "Dev Interview and Let's Play: Dinosaur Polo Club's Mini Motorways"
    speaker: "Dinosaur Polo Club"
    source: "YouTube"
    year: 2022
    duration: "30 min"
    summary: "The developers of Mini Motorways discuss how the game evolved from Mini Metro's transit puzzle formula to a road-network design challenge, the creative challenge of making traffic feel fair when it is genuinely chaotic, and why Dinosaur Polo Club deliberately kept the visual language minimal despite the additional complexity of road-based simulation."
    url: "https://www.youtube.com/watch?v=gCkRDMDW4wM"
  - type: interview
    title: "Interview: Mini Motorways — Dinosaur Polo Club"
    speaker: "Robert Curry"
    source: "YouTube"
    year: 2022
    duration: "20 min"
    summary: "Co-founder Robert Curry discusses the design of Mini Motorways in detail — how the studio adapted the Mini Metro formula for roads, the challenge of player perception when traffic appears unpredictable, and the tension between the game's calm aesthetic and its increasingly demanding systems. Covers how the game creates a sense of zen engagement even as difficulty escalates."
    url: "https://www.youtube.com/watch?v=sG614cquLDY"
  - type: article
    title: "Turning Road Noise into Music in Mini Motorways"
    author: "Game Developer Staff"
    source: "Game Developer"
    year: 2022
    duration: "8 min read"
    summary: "An exploration of Mini Motorways' audio design — how the sound team translated the abstracted rhythm of traffic into a musical system that reflects the state of the road network. Covers how audio functions as a secondary feedback channel communicating network health without cluttering the minimal visual interface."
    url: "https://www.gamedeveloper.com/design/turning-road-noise-into-music-mini-motorways"
  - type: article
    title: "Mini Motorways and the Delicate Art of Marrying Complexity and Minimalism"
    author: "Game Developer Staff"
    source: "Game Developer"
    year: 2022
    duration: "8 min read"
    summary: "Examines the core design tension in Mini Motorways: a game with a minimal visual language whose underlying simulation is genuinely complex. Discusses how Dinosaur Polo Club navigated the challenge of making the road network's failures feel fair and comprehensible to players, and how the game tests network integrity without overwhelming players with information."
    url: "https://www.gamedeveloper.com/audio/-i-mini-motorways-i-and-the-delicate-art-of-marrying-complexity-and-minimalism"
---

## Design Notes

**Minimalism as information design, not simplicity.** Mini Motorways uses a visual language stripped to its essentials — coloured squares for buildings, thin lines for roads, a clean white grid — but this minimalism is not about making the game simple. It is about ensuring that the information players need is always visible and that nothing competes with it for attention. The map must communicate traffic density, network structure, and resource scarcity simultaneously without cluttering. Dinosaur Polo Club learned this from Mini Metro: the transit map aesthetic, borrowed from real-world infographics, is already optimised for communicating network state at a glance. Applying it to road networks required solving the same problem from scratch, because roads are directional and congestion is more diffuse than train delays.

**Emergence from simple rules.** The core loop of Mini Motorways is almost absurdly simple: draw roads to connect houses to matching shops. But because all traffic shares the same road network and pathfinding algorithms seek shortest routes, small local decisions cascade into global network effects almost immediately. Adding a road to relieve congestion in one neighbourhood can redirect traffic through a previously efficient junction, degrading it. This emergence — where locally rational decisions produce globally unpredictable outcomes — is the game's primary pleasure, and it is entirely a product of rule simplicity. More complex rules would make it a management sim; simpler rules would remove the emergent tension. The design sits exactly at the productive threshold.

**Scarce resources as constraint design.** Players receive bridges, motorways, and traffic lights as limited weekly bonuses, and the scarcity of these upgrades forces genuine prioritisation. A bridge solves a river-crossing problem once; the choice of where to spend it defines the entire late-game layout. This resource scarcity converts what might be a pure optimisation puzzle into something more like a triage exercise — players are always choosing what to fix rather than fixing everything. The design lesson is that scarcity is not just difficulty: it forces players to develop and commit to a network philosophy, making each run feel distinctly authored even though the city grows procedurally.

**Tempo and the zen-to-crisis arc.** Mini Motorways begins slowly — a few buildings, a simple network — and escalates through city growth until the road network eventually collapses under the weight of demand. The shape of a session is always the same arc: a period of zen problem-solving as the network is manageable, then a mounting crisis phase as demand outstrips any planned solution, then eventual failure. This arc is not a bug but a design feature: the zen period is pleasurable precisely because players know the crisis is coming, and the crisis is tolerable precisely because it follows from the player's own decisions. The game does not fail players arbitrarily — it fails the plan they chose to build.

**Audio as a secondary feedback system.** The sound design of Mini Motorways functions as a read-out of network health: individual car sounds, ambient traffic rhythm, and audio events tied to congestion all communicate system state without requiring players to read any numbers. This audio-as-feedback approach means players can feel their network degrading before it becomes visually apparent — a crucial design choice in a game whose visual language is deliberately sparse. Using audio as a second information channel, rather than purely as atmosphere, is a transferable principle: in any system with meaningful state changes, sound can carry the same load as a UI element without breaking visual minimalism.
