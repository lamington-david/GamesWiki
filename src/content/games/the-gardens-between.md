---
title: "The Gardens Between"
developer: "The Voxel Agents"
publisher: "The Voxel Agents"
year: 2018
genres: ["puzzle", "adventure"]
playtime: 0.38
steam_rating: 89.69
description: "An Australian puzzle-adventure that gives players a single verb — control the flow of time — and builds an entire game from it. Made over four years by Melbourne studio The Voxel Agents, it earned an IGF nomination for visual art and stands as a precise study in how a single elegant constraint, applied without compromise, can sustain a complete experience."
design_tags: ["time manipulation", "puzzle design", "single mechanic", "narrative", "no failure state", "IGF nominee"]
resources:
  - type: article
    title: "Q&A: Designing the Beautifully Surreal Time Puzzles of The Gardens Between"
    author: "Gamasutra Staff"
    source: "Game Developer"
    year: 2018
    duration: "10 min read"
    summary: "Simon Joslin and Matt Clark explain how the game's core mechanic emerged from a Minority Report prototype in 2014, how they designed puzzles where a single object placed before or after another changes every possible permutation, and why they deliberately chose not to punish failure. Key reading on constraint-first puzzle design."
    url: "https://www.gamedeveloper.com/design/q-a-designing-the-beautifully-surreal-time-puzzles-of-i-the-gardens-between-i-"
  - type: article
    title: "Road to the IGF: The Voxel Agents' The Gardens Between"
    author: "Game Developer Staff"
    source: "Game Developer"
    year: 2019
    duration: "6 min read"
    summary: "Covers the four-year development arc, the decision to strip all traditional game verbs and leave only time control, and how the team balanced puzzle difficulty against the emotional throughline of a childhood friendship. IGF nominees discuss how narrative and mechanic can reinforce each other."
    url: "https://www.gamedeveloper.com/business/road-to-the-igf-the-voxel-agents-i-the-gardens-between-i-"
  - type: interview
    title: "Made In Australia: We Talk The Gardens Between With The Voxel Agents"
    speaker: "Simon Joslin"
    source: "Well Played"
    year: 2018
    duration: "8 min read"
    summary: "Simon Joslin discusses the studio's decade-long track record building mobile puzzlers and how that experience shaped The Gardens Between's commitment to simplicity — one mechanic, no enemies, no text-based story exposition. Also covers how the Australian development scene influenced the game's tone."
    url: "https://www.well-played.com.au/made-in-australia-we-talk-the-gardens-between-with-the-voxel-agents/"
---

## Design Notes

**One mechanic, no compromises.** The Gardens Between gives players a single verb: control the flow of time. Characters move automatically; the player only decides whether time runs forward or backward. Every puzzle in the game is built from this constraint without exception — no swimming, jumping, inventory, combat, or dialogue. This level of discipline is rare in puzzle design. The team deliberately refused to add systems that would have made individual puzzles easier to design, because each new verb would have diluted what the game was fundamentally about. The lesson is not that single-mechanic games are always better, but that a design team must be willing to defend its constraints even when adding one more system would make a hard design problem temporarily easier.

**The Minority Report prototype as design origin.** The game began with a question: could you turn the scrubbing interface Tom Cruise uses in Minority Report into a game? In that scene, he physically moves forward and backward through recorded memories looking for clues. The Voxel Agents took that gesture and inverted the power relationship — instead of a character looking at time, the player holds time in their hands while the characters inhabit it. This reframing of an existing interaction as a game mechanic is a clean example of how design concepts can travel from film without simply copying the source material.

**Puzzle permutations from object relationships.** Simon Joslin described the puzzle design process as extraordinarily complex: moving a single object before or after another changes every possible permutation for what the player can do. Because the player controls global time rather than individual objects, each item's position in the causal sequence matters enormously. The team found that this made playtesting unusually difficult — a puzzle that felt obvious to designers who had spent weeks with the system could be impenetrable or trivially easy for fresh eyes. Heavy playtesting was essential to calibrating the difficulty curve, and the team found that their own familiarity with the mechanic made them unreliable evaluators of their own puzzles.

**No failure state as a design position.** The Gardens Between has no game over, no death, no wrong moves — only a player who hasn't yet found the solution. Time can always be rewound. This is a deliberate design stance: the team wanted players to be in an observational, exploratory mindset rather than a cautious, risk-management mindset. The failure state was removed because it would have changed what players paid attention to. Designers who add punishment to puzzle games should ask whether the punishment is improving the cognitive experience or simply adding friction — in some puzzle contexts, the anxiety of possible failure narrows exactly the kind of open attention that finding solutions requires.

**Narrative without text.** The story of two childhood friends and the summer before one of them moves away is told entirely through environmental detail and animation — no dialogue, no text, no cutscenes. Each island is a diorama of a shared memory: a TV set, a cassette player, a garden hose. Players who pay attention to what's on each island before solving its puzzle will experience the story; players who skip straight to the mechanics won't be blocked. This approach to optional narrative depth — present for those who look, invisible to those who don't — is a useful model for games that want to carry emotional weight without mandating engagement with it.
