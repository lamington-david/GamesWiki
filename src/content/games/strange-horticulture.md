---
title: "Strange Horticulture"
developer: "Bad Viking"
publisher: "Iceberg Interactive"
year: 2022
genres: ["puzzle", "indie", "mystery"]
playtime: 5.0
steam_rating: 92.10
description: "An occult puzzle game set in the rainy Victorian town of Undermere, where players run an herbalist shop and must identify plants from their herbarium to help — or not help — customers with suspicious needs. Made by brothers Rob and John Donkin over several years, Strange Horticulture is a study in how asymmetric information, unhurried pacing, and deep atmosphere can make a narrow mechanic sustain an entire narrative experience."
design_tags: ["information design", "puzzle design", "atmosphere", "diegetic UI", "pacing", "narrative design", "small studio design"]
resources:
  - type: article
    title: "Deep Dive: How the Strange Horticulture Devs Set Out to Make Your Next Favourite Game"
    author: "Rob Donkin"
    source: "Game Developer"
    year: 2023
    duration: "12 min read"
    summary: "Developer-authored deep dive by Strange Horticulture programmer Rob Donkin covering the core design problem: how to build a puzzle around incomplete, ambiguous information. He explains the mechanic's origins in the board game Sherlock Holmes: Consulting Detective, the development challenge of testing puzzles before all the red-herring plants exist, and the design decisions that turned an identification game into a mystery game."
    url: "https://www.gamedeveloper.com/design/deep-dive-strange-horticulture"
  - type: article
    title: "Deep Dive: Inside Strange Horticulture's Delightful Steam Success"
    source: "Game Developer"
    year: 2022
    duration: "10 min read"
    summary: "Post-launch analysis of how Strange Horticulture achieved first-week results five times better than the median for a game in its category, and what the marketing approach — targeting diverse communities around the game's themes of books, cats, plants, and old maps rather than gaming audiences — contributed to its discovery. Useful as a companion to the design deep dive for understanding the full context of the game's reception."
    url: "https://www.gamedeveloper.com/business/deep-dive-inside-strange-horticultures-delightful-steam-success"
  - type: podcast
    title: "The Sausage Factory: 381 — Strange Horticulture by Bad Viking"
    speaker: "Rob Donkin, John Donkin"
    source: "Cane and Rinse"
    year: 2022
    duration: "60 min"
    summary: "Both Donkin brothers discuss the full development arc of Strange Horticulture — Rob on code and John on art — including the pacing philosophy (making customers feel unhurried rather than transactional), how the dark undercurrent of the narrative was integrated without overwhelming the cosy surface, and why they kept scope deliberately narrow despite the temptation to expand."
    url: "https://caneandrinse.com/strange-horticulture/"
  - type: interview
    title: "Bad Viking and Color Gray on Game Dev as Two-Brother Studios"
    speaker: "Rob Donkin, John Donkin"
    source: "Escapist Magazine"
    year: 2023
    duration: "8 min read"
    summary: "Interview comparing the experience of Bad Viking (Strange Horticulture) and Color Gray Games (The Case of the Golden Idol) as two-person brother studios. Covers how the sibling dynamic functions as a creative working relationship, the shared design interest in mystery mechanics built on information asymmetry, and how both studios managed scope to stay within their means."
    url: "https://www.escapistmagazine.com/strange-horticulture-case-of-golden-idol-interview-bad-viking-color-gray-games-donkin-klavins/"
---

## Design Notes

**Information asymmetry as the core mechanic.** The player has a herbarium listing botanical properties; customers describe their needs in oblique, emotional language — metaphors, moods, half-remembered symptoms. The puzzle is bridging two incomplete information sets: neither fully specifies the answer, and the player must match a customer's metaphor to a plant's properties through inference. This asymmetry means every transaction is a small interpretive act, and the game sustains interest across its runtime without adding new mechanics.

**Diegetic information as immersive design.** Strange Horticulture uses a physical herbarium — a book the player visually opens and annotates — as its information system. Players flip pages, add notes, and cross-reference entries. This tactile interaction, even rendered digitally, creates the sensation of expertise accumulating: the annotated book records what the player has learned in a form more honest than an XP bar. The diegetic information system reinforces the fantasy of being an expert in a real craft rather than mastering a game system.

**Restraint as worldbuilding tool.** The town of Undermere and its mythology — the cults, the beast, the history — are never explained by any dedicated exposition. Everything the player learns about the world arrives through customers and their requests, at the player's pace, embedded in the main mechanic. The design decision is that mystery revealed through the act of doing something is more immersive than mystery revealed through cutscene or text dump. Restraint in exposition is itself a worldbuilding decision: it produces the sense that Undermere exists beyond what the player can see.

**Unhurried pacing as genre inversion.** The game asks nothing of the player urgently. Customers arrive without timers; the shop opens when the player is ready; nothing punishes leisurely exploration of the herbarium. This is a deliberate inversion of the anxiety loop common to survival and roguelite games, and it is the reason the game's atmosphere works: unhurried pacing creates the conditions for noticing small details, reading descriptions carefully, and inhabiting the space. The calm is the point.

**Narrow scope executed completely.** The Donkin brothers kept Strange Horticulture's scope narrow enough to polish thoroughly over a multi-year development. The result is a game where every customer interaction reads as authored, every plant description functions as prose, and the atmosphere is consistent from the title screen to the final act. This is the core lesson: depth of execution within a constrained scope produces a stronger experience than breadth within a larger one, particularly for a two-person studio. The constraint was the design advantage.
