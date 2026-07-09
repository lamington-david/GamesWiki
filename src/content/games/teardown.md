---
title: "Teardown"
developer: "Tuxedo Labs"
publisher: "Tuxedo Labs"
year: 2022
genres: ["Sandbox", "Puzzle", "Action"]
playtime: 1.0
steam_rating: 94.51
description: "A voxel-based heist sandbox game where every environment is fully destructible, built by a solo developer who spent two years creating a custom voxel engine from scratch. Teardown's design insight is that destruction isn't a spectacle — it's a puzzle element — and the game's two-phase structure (plan freely, execute under a timer) is designed entirely around making creative destruction feel meaningful rather than gratuitous."
design_tags: ["destructible-environments", "voxel", "heist-design", "two-phase-gameplay", "sandbox-puzzle", "custom-engine"]
resources:
  - type: article
    title: "Combining bombastic heists with a fully destructible voxel world in Teardown"
    author: "Bryant Francis"
    source: "Game Developer"
    year: 2022
    duration: "8 min read"
    summary: "Dennis Gustafsson explains how the heist game framework was retrofitted to suit a destruction technology built before any game existed around it, and why the two-phase structure (planning phase, execution phase) was the design solution that made destruction purposeful rather than incidental. Covers the core tension between sandbox freedom and meaningful challenge."
    url: "https://www.gamedeveloper.com/design/combining-bombastic-heists-with-a-fully-destructible-voxel-world-in-i-teardown-i-"
  - type: article
    title: "How beautiful voxels laid the way for Teardown's heist-y framework"
    author: "Alissa McAloon"
    source: "Game Developer"
    year: 2020
    duration: "6 min read"
    summary: "Covers the origin of the voxel engine — Gustafsson began tinkering with voxel rendering and physics in 2018 with no game in mind — and how the engine's properties (every object is a voxel volume, destruction is built into the physics layer) naturally suggested the heist genre as the right context for the technology."
    url: "https://www.gamedeveloper.com/design/how-beautiful-voxels-laid-the-way-for-i-teardown-s-i-heist-y-framework"
  - type: interview
    title: "Tuxedo Labs on the Future of Teardown and Voxel Technology"
    speaker: "Dennis Gustafsson"
    source: "Shacknews / YouTube"
    year: 2023
    duration: "15 min"
    summary: "An interview with Gustafsson on the technical and design future of Teardown, covering the challenges of multiplayer in a fully destructible world, how voxel physics differ from polygon physics for destruction simulation, and what constraints in the custom engine guided game design decisions."
    url: "https://www.youtube.com/watch?v=0x3BAkUoytk"
  - type: podcast
    title: "Teardown and Voxel-Based Rendering with Dennis Gustafsson"
    speaker: "Dennis Gustafsson"
    source: "Software Engineering Daily"
    year: 2025
    duration: "45 min"
    summary: "A deep technical interview with Gustafsson on how the custom Teardown voxel engine works — the 8-bit colour palette per volume, the physics simulation approach, how ray tracing is implemented efficiently, and why building the engine from scratch in C++ was necessary given the novel technology. Provides the technical foundation for understanding why the game's design choices took the shape they did."
    url: "https://softwareengineeringdaily.com/2025/01/02/teardown-and-voxel-based-rendering-with-dennis-gustafsson/"
---

## Design Notes

**Technology-first development and the design problem it creates.** Dennis Gustafsson built the Teardown voxel engine for two years before he knew what game to put around it. The engine came first; the heist game framework was retrofitted. This is a legitimate but uncommon development path, and it carries a specific design challenge: when the technology is the invention and the game is the container, the game must justify every element of the technology rather than treating it as a production choice. Teardown's two-phase structure — a freeform planning phase followed by a timed execution phase — is the solution to this problem. It ensures that destruction is used for a purpose (planning efficient routes, clearing obstacles) rather than simply shown as a spectacle.

**Destruction as a puzzle element.** Most games that feature destruction use it as a visual reward — things explode because explosions are satisfying. Teardown's fundamental design move is to make destruction a puzzle input. Players in the planning phase construct paths through environments by destroying walls, vehicles, and structures in advance; the execution phase then requires them to run a route that didn't exist before they modified the level. This transforms a physics system into a puzzle mechanic: the interesting question isn't "can I destroy this?" (yes, always) but "should I destroy this, in what order, to create the optimal route?" The sandbox becomes purposeful.

**Voxels as the enabling constraint.** The decision to build everything from voxels was pragmatic — Gustafsson found voxel destruction far easier to implement physically than polygon-based destruction, because the destruction state of any object is simply the removal of discrete voxel units from a volume. But the constraint also produced design benefits. Every object in the game is made of the same material system (up to 255 material types per voxel volume), which means destruction is consistent and predictable — a wall behaves like a wall everywhere, and players learn the physics of destruction through experience rather than special-case memorisation. Constraint produced legibility.

**The two-phase structure as pacing design.** The split between planning (sandbox, no timer, full freedom to modify the environment) and execution (timer active, alarm triggered, all theft must happen fast) is a pacing mechanism that produces one of the game's most effective loops: the planning phase is contemplative and strategic, the execution phase is chaotic and high-stakes. The contrast between the two phases is itself a designed experience. Players regularly find that their carefully constructed plan is not quite as efficient as they thought, and the execution phase is the test that reveals the gap between plan and reality. This is a clean version of a design principle shared with many strategy games: preparation followed by imperfect execution.

**Solo development of novel technology.** Teardown was initially a one-person project — Gustafsson wrote the voxel engine, designed the game, and built the levels. Building a custom engine from scratch in C++ while simultaneously making a commercial game is an extremely high-risk approach that most teams would avoid. Gustafsson did it because the game was impossible without the engine — no existing engine could do fully destructible voxel physics at the fidelity he wanted. The result is a game whose design is entirely entangled with its technology in a way that would have been impossible if the game had been built on a conventional engine. The design lesson is that some games require their own tools, and the cost of building those tools can be worth it when the technology enables a mechanic that otherwise cannot exist.
