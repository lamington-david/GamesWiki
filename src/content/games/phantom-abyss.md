---
title: "Phantom Abyss"
developer: "Team WIBY"
publisher: "Devolver Digital"
year: 2024
genres: ["Action", "Roguelite", "Platformer", "Multiplayer"]
playtime: 4.4
steam_rating: 78.25
description: "A first-person asynchronous multiplayer game where players race through procedurally generated temples using a whip for movement and evasion. Once a relic is claimed, that temple is gone forever for everyone — a novel take on competitive design that removes coordination friction from multiplayer."
design_tags: ["asynchronous-multiplayer", "ghost-mechanics", "procedural-generation", "permadeath", "movement-design", "roguelite"]
resources:
  - type: interview
    title: "Phantom Abyss Combines Battle Royale, Asynchronous Multiplayer, and Procedural Generation"
    speaker: "Ben Marrinan"
    source: "Unreal Engine Developer Interviews"
    year: 2021
    duration: "10 min read"
    summary: "Creative Director Ben Marrinan discusses how the small team size (three people in 2018) directly shaped the asynchronous design, the evolution from PvP battle royale concept to a cooperative ghost system, and the philosophy of making a social game that doesn't require scheduling."
    url: "https://www.unrealengine.com/en-US/developer-interviews/phantom-abyss-combines-battle-royal-asynchronous-multiplayer-and-procedural-generation"
  - type: interview
    title: "Phantom Abyss Launches Out of Early Access: Interview with Team WIBY"
    speaker: "Josh Sanderson"
    source: "Quest Daily"
    year: 2024
    duration: "8 min read"
    summary: "Managing Director Josh Sanderson reflects on three years of Early Access development and the ways the game changed since the original Devolver Digital pitch — from PvP concept to the final cooperative ghost mechanic, and how the temple permanence system evolved."
    url: "https://questdaily.com.au/interviews/phantom-abyss-launches-out-of-early-access-interview-with-team-wiby/"
  - type: article
    title: "Phantom Abyss Is Online Multiplayer Without the Scheduling Nightmare"
    author: "GamesHub"
    source: "GamesHub"
    year: 2021
    duration: "6 min read"
    summary: "An analysis of how asynchronous multiplayer resolves the coordination problem for adult players — how Phantom Abyss lets you play alongside friends' ghosts without ever needing to be online at the same time, and what that means for the emotional texture of competition."
    url: "https://www.gameshub.com/news/features/phantom-abyss-is-a-social-game-without-the-scheduling-nightmare-1937/"
---

## Design Notes

**Asynchronous multiplayer as a solution to real-world scheduling friction.** The core design question behind Phantom Abyss was how to make a social multiplayer game that doesn't require players to coordinate their schedules. Creative Director Ben Marrinan describes the moment of insight: working adults and parents can't always gather at the same time, but they can leave traces for each other. By populating temples with ghosts of other players' past attempts, the game delivers genuine social presence without requiring synchronous sessions — a design decision that started as a constraint of a three-person team and became the game's defining characteristic.

**Temple permanence creates irreversible stakes.** Each temple is one-time-only: once a player claims the relic at its heart, that temple is gone forever for every player worldwide. This is an unusual form of competitive pressure — you're not racing against other players in real time, but against the possibility that someone else will beat the level before you. The ghost system flips this into a cooperative layer, because the ghosts of failed players act as guides, revealing traps and path choices, so failure benefits those who come after you even as it eliminates your own chance to win.

**Whip movement expands the design space beyond traps.** The whip began as a thematic prop — an Indiana Jones reference — but evolved into the primary movement tool. Grappling with the whip allows players to swing across gaps, redirect momentum, and reach areas they couldn't reach on foot. This turns trap navigation from a reflex test into a spatial puzzle, where the question isn't just "can I avoid the trap?" but "can I use the whip to create a route that bypasses it entirely?" The movement ceiling creates a skill expression layer that coexists with the ghost-watching/hint system.

**Procedural generation serves the permanence mechanic.** The temples need to be procedurally generated precisely because they're permanently destroyed. A handcrafted level database would be depleted — players would run out of content. Procedural generation means the supply of temples is effectively infinite, which makes the permanent destruction emotionally meaningful without creating a content drought. The generation system must therefore be robust enough that the loss of any individual temple doesn't feel like the loss of something irreplaceable.

**Early Access as design tool.** The game that shipped in 2024 is, by the studio's own description, "ten times as much stuff" as the Early Access launch in 2021. The original concept was closer to an asynchronous battle royale; the cooperative emphasis, the curse system, and much of the temple variety were added or reworked during the three-year period. This makes Phantom Abyss a case study in using Early Access not as a monetization mechanism but as a genuine extended design phase — a longer playtesting loop with real players.
