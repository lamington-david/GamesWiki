---
title: "Peglin"
developer: "Red Nexus Games"
publisher: "Red Nexus Games"
year: 2022
genres: ["roguelike", "strategy", "pachinko"]
playtime: 0.48
steam_rating: 81.95
description: "Red Nexus Games' pachinko-meets-roguelike invention replaces tactical card play with physics-based ball drops, asking players to aim into pegs rather than select from hands. Peglin demonstrates how swapping a genre's core randomness engine — from dice rolls to physical simulation — creates a fundamentally different player psychology while preserving the roguelike loop structure that makes Slay the Spire compelling."
design_tags: ["roguelike design", "pachinko", "physics systems", "deckbuilding", "game jam origins", "early access design", "genre mashup"]
resources:
  - type: interview
    title: "Creating a Pachinko Roguelike With Peglin"
    speaker: "Dylan Gedig"
    source: "YouTube"
    year: 2023
    duration: "25 min"
    summary: "Dylan Gedig discusses how the game evolved from a 48-hour game jam prototype into a full roguelike, why the physics-based combat creates a different feel from card-selection roguelikes, and how the early access community shaped the final shape of the game's act structure and orb variety."
    url: "https://www.youtube.com/watch?v=Z7KDPO1R_YE"
  - type: interview
    title: "Interview - Peglin (Red Nexus Games)"
    speaker: "Dylan Gedig"
    source: "YouTube"
    year: 2021
    duration: "20 min"
    summary: "An early interview with Gedig during Peglin's early access period covering the game's origins as a 48-hour jam around the theme 'Fall', how pachinko and pinball provided the drop mechanic, and what design problems emerged when adding a roguelike progression layer on top of a physics-based combat system."
    url: "https://www.youtube.com/watch?v=iUrhaFzdcn0"
---

## Design Notes

**Physics as the randomness engine.** Traditional card roguelikes use random deck draws or dice rolls to introduce uncertainty into each encounter. Peglin replaces this with physical simulation: the player aims an orb into a field of pegs, and combat outcomes are determined by the ball's actual trajectory rather than by an RNG function. This produces a fundamentally different player psychology — aiming skill genuinely matters, but the chaotic bouncing still generates surprise. Players feel agency even in unpredictable outcomes because they made a physical choice rather than a statistical one, and failure feels like a missed aim rather than a bad draw.

**Slay the Spire structure, Peggle feel.** Peglin's design is an explicit mashup of two reference points, and Dylan Gedig has been candid about both. The macro structure — run-based map progression, event nodes, relic-style modifiers — derives directly from Slay the Spire. The micro combat feel — satisfying peg destruction, score-reveal animations, the arc of the ball — derives from Peggle. The design challenge was whether these two registers could coexist without one undermining the other. Peglin succeeds by assigning each to a different scale: the Slay the Spire layer governs strategic decisions between battles, the Peggle layer governs what actually happens inside them, and each reinforces the other without collision.

**Game jam origins and the 48-hour proof.** Peglin emerged from a 48-hour game jam with the theme "Fall." The constraint immediately suggested pachinko — things fall — and the core prototype proved playable within that window. This origin is significant because the game's most distinctive elements had to be proven viable in 48 hours, which means they are inherently simple to understand and implement. The best game jam concepts are ones whose fundamental loops never need replacement, only extension. Peglin's physical combat required no redesign from prototype to shipped game; the jam produced the design, and the years of development added depth without changing the core.

**Community-shaped design through Early Access.** Peglin spent approximately two years in Steam Early Access before its full release, and during that time the community shaped nearly every late-game system — orb variety, relic balance, act structure, difficulty curves, and the pacing of content unlocks were all iterated based on regular player feedback. Early Access is often treated as a monetisation strategy or an availability shortcut; Peglin used it as a sustained multi-year playtest with a deeply invested community. The final design reflects what actual long-term players found compelling rather than what the developer predicted they would enjoy.

**Visual clarity in physical chaos.** A recurring design problem in pachinko-style games is readability: when orbs, pegs, status effects, and enemy health bars are all active simultaneously, the screen can become incomprehensible. Peglin's visual design addresses this through colour coding (peg types have distinct colours whose effects match their visual identity), strong silhouettes for orbs and enemies that read clearly in motion, and deliberate pacing in the orb's physics to give players time to track consequences. The pixel art aesthetic is a functional choice as much as a stylistic one — clean pixels track better under rapid motion than high-fidelity 3D geometry, and legibility under movement is a core requirement of the genre.
