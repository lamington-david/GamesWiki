---
title: "Ittle Dew 2+"
developer: "Ludosity"
publisher: "Ludosity"
year: 2016
genres: ["action-adventure", "puzzle", "indie"]
playtime: 1.1
steam_rating: 80.27
description: "Swedish indie studio Ludosity's Zelda-like action-adventure distils the formula to its essentials and then opens it entirely: eight dungeons can be completed in any order, with any combination of available items, with no soft locks. Ittle Dew 2+ became a popular speedrunning game precisely because its nonlinear design rewards route optimisation, making it an unusually clear study in how Zelda-style dungeon design can work without Zelda's mandatory sequence."
design_tags: ["dungeon design", "nonlinear progression", "Zelda-like", "item design", "speedrunning", "puzzle design", "accessible secrets"]
resources:
  - type: article
    title: "Ittle Dew 2 Design — Developer Blog"
    author: "Joel Nyström"
    source: "Ludosity"
    year: 2014
    duration: "8 min read"
    summary: "A pre-production design document published by Ludosity CEO Joel Nyström explaining the design goals for Ittle Dew 2 relative to the original: larger overworld focus, any-order dungeon completion, item-based accessibility for overworld secrets, and a shift from puzzle-in-every-room to exploration-and-combat as primary drivers. An unusually candid look at how a developer articulates structural design goals before a sequel enters production."
    url: "http://ludosity.com/2014/06/ittle-dew-2-design/"
  - type: interview
    title: "Ludosity Talks Ittle Dew, The Comparison to Zelda and the Metroidvania Style of Play"
    speaker: "Joel Nyström"
    source: "Nintendo Life"
    year: 2013
    duration: "8 min read"
    summary: "Ludosity CEO Joel Nyström discusses how Ittle Dew emerged from a university project and how the team approached making a Zelda-like game without pretending to be Zelda. Covers the design decision to use only a few items with broad applicability rather than many single-purpose items, and how the game's jokey tone — including designing things that were initially jokes and keeping them — shaped its identity."
    url: "https://www.nintendolife.com/news/2013/10/developer_interview_ludosity_talks_ittle_dew_the_comparison_to_zelda_and_the_metroidvania_style_of_play"
  - type: article
    title: "Inspired By Zelda: The Mind-Bending Puzzles of Ittle Dew 2+"
    author: "Brendan Wylie"
    source: "Zelda Dungeon"
    year: 2018
    duration: "7 min read"
    summary: "An analysis of how Ittle Dew 2+ translates Zelda's dungeon puzzle philosophy into a condensed, nonlinear framework — covering specific puzzle design choices, how items interact across dungeons, and why the game's approach to environmental secrets (all accessible from the start with the basic stick) avoids the common Zelda frustration of being blocked by missing items."
    url: "https://www.zeldadungeon.net/inspired-by-zelda-the-mind-bending-puzzles-of-ittle-dew-2/"
---

## Design Notes

**Any-order dungeon design without soft locks.** The central design challenge Ludosity set themselves for Ittle Dew 2+ was allowing players to complete all eight dungeons in any order, with whatever items they happened to have, without creating dead ends. The solution was to design each dungeon to be completeable with a subset of available items, and to ensure that items required for later dungeons are never locked behind earlier dungeons in a mandatory sequence. This required mapping every possible item combination against every dungeon's puzzle requirements — a constraint-satisfaction problem at the design level. The result is a game where no route is wrong and speedrunners have discovered dozens of viable completion sequences.

**Accessible secrets and the starting-stick rule.** Ludosity committed to a specific accessibility principle: every secret on the overworld should be findable using only the starting stick, without requiring items found in dungeons. This prevents the common Zelda frustration of finding an obvious secret, recognising it requires an item you don't have, and then either forgetting to return or spending time backtracking. In Ittle Dew 2+, curiosity is always immediately rewarded or immediately answerable — if you can see a secret, you already have what you need to reach it. The rule disciplines the designers to never place secrets behind item gates that haven't been earned yet.

**Item duplication as upgrade economy.** Rather than making duplicate items redundant — a common problem in action-adventure games with fixed inventory — Ittle Dew 2+ upgrades items when duplicates are found. This means exploration is always economically meaningful: finding a second fire sword makes the fire sword better, rather than being wasted loot. The system also means players who explore thoroughly get a power curve that reflects their investment without requiring a separate upgrade economy with currencies and vendors. The design is elegant because it reframes an inevitable outcome (finding items you already have) as a reward rather than a disappointment.

**Condensing Zelda's formula.** Ludosity's stated goal was to make a shorter, more focused Zelda-like game that respects player time — a game you can complete rather than a game you complete in spite of its length. This involved stripping out puzzles from rooms that didn't benefit from them, concentrating mechanical complexity in the dungeons, and using the overworld as exploration space rather than content delivery. The result is a game where every hour is denser than a comparable hour in the games it references. The design lesson is that condensation is a legitimate creative goal: deciding what to remove requires the same design judgment as deciding what to add.

**Speedrunning as design validation.** Ittle Dew 2+ became a popular speedrunning game, which its nonlinear structure made possible by design. When any completion order is valid, runners can discover and optimise routes rather than being channelled through a single mandatory sequence. The game's speedrunning community found routes the developers hadn't anticipated and identified edge cases that revealed both design strengths and occasional gaps. This is a case where design openness produced a community that extended the game's life and produced detailed knowledge about its systems. Designing for speedrunning wasn't Ludosity's explicit goal, but the design philosophy that produced good nonlinear design also produced good speedrunning material.
