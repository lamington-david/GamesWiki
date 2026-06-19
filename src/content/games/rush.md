---
title: "RUSH"
developer: "Two Tribes"
publisher: "Two Tribes"
year: 2010
genres: ["puzzle", "indie"]
playtime: 5.4
steam_rating: 85.17
description: "A 3D puzzle game where players guide colour-coded cubes to matching exits using a small set of directional tiles — arrows, splitters, warps, and stops. Evolved from a minigame in Rubik's World, RUSH demonstrates how a rule set that fits in one sentence can sustain seventy levels of escalating complexity through constraint-based composition rather than feature bloat."
design_tags: ["constraint-based design", "puzzle design", "emergent complexity", "progressive disclosure", "minimalism"]
resources:
  - type: interview
    title: "Interviews: Rubik's Puzzle Galaxy: RUSH — Two Tribes"
    speaker: "Collin van Ginkel"
    source: "Nintendo Life"
    year: 2009
    duration: "5 min read"
    summary: "Pre-release interview with Two Tribes co-founder Collin van Ginkel about how the studio extracted RUSH from a minigame in Rubik's World and why they believed the mechanic had more potential as a standalone puzzle game. Covers the decision to stick with a deceptively simple premise and let difficulty emerge entirely from level design rather than new mechanics."
    url: "https://www.nintendolife.com/news/2009/08/interviews_rubiks_puzzle_galaxy_rush_two_tribes"
  - type: video
    title: "RUSH Official Steam Trailer"
    source: "Two Tribes / YouTube"
    year: 2010
    duration: "1 min"
    summary: "The official launch trailer demonstrates all core tile types and shows how the same small vocabulary of mechanics produces increasingly elaborate level configurations. Useful as a fast overview of the visual and mechanical language before play."
    url: "https://www.youtube.com/watch?v=hdEMOL2dFbg"
---

## Design Notes

**Rules that fit in one sentence, depth that doesn't.** RUSH teaches its core mechanic instantly: cubes roll in a straight line until a tile redirects them. Every subsequent tile type — splitter, warp, stop — is a small elaboration on this rule rather than a new system. The cognitive load accumulates slowly, keeping the player's mental model ahead of their failures and avoiding the tutorial-fatigue trap of games that front-load their complexity.

**Sequence-order puzzles in spatial form.** Each level is essentially a routing and timing puzzle. Cubes spawn at intervals and multiple cubes must arrive at their goals simultaneously or in the right order — so the player isn't just drawing paths but orchestrating a sequence. This transforms a spatial puzzle into a programming problem without requiring any interface beyond placing tiles. The gap between "I understand the rules" and "I can solve this" is entirely composed of reasoning about sequences.

**3D as a legibility constraint, not a decoration.** Unlike most puzzle games, RUSH uses a fully three-dimensional grid viewed from a fixed isometric angle. Players must track cube paths through space rather than across a flat grid, which adds difficulty through visual complexity rather than rule complexity. The consistent camera angle becomes a vocabulary the player learns to read — learning to mentally rotate the grid is itself a skill the game develops over its seventy levels.

**A small vocabulary of well-chosen rules.** Two Tribes kept the tile count deliberately small. The difficulty comes from combining the same handful of tiles in ways that produce counter-intuitive outcomes — a single split tile placed one square earlier changes the entire solution. This is a lesson in restriction: a small, combinatorially rich set of rules creates more interesting problems than a large set of specialized rules, because the interactions between the few are more surprising than the applications of the many.

**Minigame as proof of concept.** RUSH originated as one activity inside Rubik's World, a licensed Rubik's cube game. Two Tribes recognized that the minigame had more intrinsic puzzle potential than the product it was embedded in, and extracted it. This is a pattern worth noting: constraints and mechanics that work cleanly in isolation — that produce interesting decisions without requiring contextual support — are candidates for expansion into standalone experiences. The original minigame context was a filter that identified which mechanic was worth pursuing.
