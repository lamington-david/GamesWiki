---
title: "Risk of Rain 2"
developer: "Hopoo Games"
publisher: "Gearbox Publishing"
year: 2020
genres: ["roguelite", "third-person shooter", "action"]
playtime: 10.0
steam_rating: 92.85
description: "Hopoo Games' sequel took a beloved 2D side-scrolling roguelite and translated it into a fully 3D third-person shooter without losing what made the original work. The transition from 2D to 3D forced a complete redesign of the item system, level structure, and character visibility — making the game an unusual case study in how a sequel can change almost everything about its format while preserving its predecessor's feel."
design_tags: ["roguelite", "3D design", "item design", "scaling difficulty", "sequel design", "small team development"]
resources:
  - type: article
    title: "How Moving from 2D to 3D Shaped the Design of Risk of Rain 2"
    author: "Game Developer Staff"
    source: "Game Developer"
    year: 2019
    duration: "10 min read"
    summary: "The most substantive design document on Risk of Rain 2's development — covers how almost every system in the original had to be redesigned when the team moved to 3D. Explains why the item pool was cut from 100 to 75 items (3D required each item's effect to be legible on a character model), how the 3D space enabled entirely new item mechanics like the Royal Capacitor, and why procedural generation was abandoned in favour of hand-crafted maps."
    url: "https://www.gamedeveloper.com/design/how-moving-from-2d-to-3d-shaped-the-design-of-i-risk-of-rain-2-i-"
  - type: video
    title: "A Chat with the Makers of Risk of Rain 2 (Hopoo Games)"
    speaker: "Duncan Drummond, Paul Morse"
    source: "YouTube"
    year: 2020
    duration: "45 min"
    summary: "Both Hopoo co-founders discuss item design philosophy at length — starting every item with a specific mechanical purpose, avoiding dilution of the item pool, and ensuring that unlocked items never become obsolete. Covers their approach to designing for a small team and how they think about balance in a game where player power can scale to absurd levels."
    url: "https://www.youtube.com/watch?v=j0Mpqfl3L50"
  - type: interview
    title: "Risk of Rain 2's Developers Discuss the Game's Shift to 3D"
    speaker: "Paul Morse, Duncan Drummond"
    source: "Kotaku"
    year: 2018
    duration: "8 min read"
    summary: "Early development interview capturing the moment of decision — the game started as a 2D prototype where players controlled monsters, and went through a rapid iteration ('one week 2D, next 2.5D, next 3D') before settling on full 3D. The developers discuss the specific challenges of translating side-scrolling level design to 3D space and how item visibility on character models became an unexpected design constraint."
    url: "https://kotaku.com/risk-of-rain-2-developers-discuss-the-games-shift-to-3d-1821553824"
---

## Design Notes

**The 2D-to-3D translation as a complete redesign problem.** Risk of Rain 2 is unusual in that the sequel format required not iterating on the original but rebuilding almost everything from scratch in a different spatial dimension. Moving from 2D side-scrolling to 3D third-person changed item design (effects visible on a 3D model require different visual design than effects in a 2D sprite), level design (3D spaces require different traversal logic than 2D platforming), and enemy design (enemies built to be read on a 2D plane fail to read in a 3D environment). The sequel succeeded commercially and critically, but the path was a thorough deconstruction of the original followed by a reconstruction of its feel in a new format.

**Item design as the game's core creative discipline.** Both Risk of Rain games are defined by their item systems — each run is shaped by which of the large item pool you acquire through chests and boss drops. Hopoo's design philosophy for items is specific: each item starts with a defined mechanical purpose, the pool must not be diluted with weak filler items, and unlocked items must remain viable into late game. In 3D, this required each item's effect to be legible on a character model — the visual feedback of items stacking on a character (eventually absurdly) became an unplanned but beloved design feature. The constraint forced the team to cut the item count from the original's 100 to 75 items, but the curation improved the pool's overall quality.

**Scaling difficulty as the game's tempo system.** Risk of Rain's signature mechanic is that difficulty increases the longer a run lasts — not through level gating but through a time-based difficulty ramp that affects enemy stats and spawn rates regardless of player progress. This creates a distinctive time pressure absent from most roguelites: the game asks players to decide when to engage in optional content, when to rush forward, and when the difficulty curve has outpaced their item build. The mechanic originated in the original but works differently in 3D, where the added spatial dimension gives players more tools to manage the incoming pressure. Designing difficulty as a continuous function of time rather than a discrete level structure is the game's most transferable design idea.

**Hand-crafted maps over procedural generation.** One of the most significant departures from the original's roguelike structure was the decision to use hand-crafted maps rather than procedural generation. The team's assessment was that generating interesting 3D spaces procedurally was beyond their capacity as a small team, and that hand-crafted maps allowed them to control pacing, sight lines, and traversal in ways that procedural systems couldn't guarantee. This is an honest accounting of scope — procedural generation is often presented as the roguelike standard, but Risk of Rain 2's approach shows that hand-crafted variety, combined with randomised items and enemy spawns, can achieve equivalent replay variety without the technical overhead.

**Small team design discipline.** Hopoo Games consisted of two people — Duncan Drummond and Paul Morse — for most of Risk of Rain 2's development, with a small contracted team for the full release. At this scale, every design decision carries immediate implementation cost, and the game's relative leanness (focused on a core loop without feature bloat) reflects that constraint. The studio was later acquired by Valve, but the game's design clarity — especially its item system and scaling mechanics — is partly a product of the discipline imposed by small-team resource limits. It stands as an argument that scope constraint, properly applied, improves rather than limits game design.
