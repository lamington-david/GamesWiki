---
title: "868-HACK"
developer: "Michael Brough"
publisher: "Michael Brough"
year: 2013
genres: ["roguelike", "strategy", "puzzle"]
playtime: 0.88
steam_rating: 81.74
description: "A brutally minimal roguelike by Michael Brough, set on a 6x6 grid, where a hacking program must collect data before a defence system destroys it. A masterclass in isolation as a design method: every mechanic was deliberately stripped from a larger roguelike tradition and rebuilt with nothing extraneous. IGF 2014 Excellence in Design nominee."
design_tags: ["minimal design", "roguelike design", "constraint-driven design", "opportunity cost", "procedural generation", "systemic design"]
resources:
  - type: video
    title: "PRACTICE 2013: rogue(like)^n"
    speaker: "Michael Brough"
    source: "NYU Game Center / YouTube"
    year: 2013
    duration: "40 min"
    summary: "Brough's lecture at NYU's PRACTICE 2013 conference dissecting roguelike game design, presented around the time of 868-HACK's release. Covers the tradition he was drawing from, the specific mechanics he isolated, and his broader philosophy of distillation — taking large existing systems and reducing them to their most expressive core."
    url: "https://www.youtube.com/watch?v=_4iswqa8r-Q"
  - type: article
    title: "The Gorgeous Math of Michael Brough's 868-HACK"
    author: "Mike Rose"
    source: "Game Developer"
    year: 2013
    duration: "8 min read"
    summary: "A detailed design breakdown of 868-HACK's systems: how opportunity cost is created through the program collection mechanic, how the 6x6 grid produces tactical density without information overload, and how all sounds were derived from Brough's own voice — a production choice that reinforces the game's human-inside-a-machine aesthetic."
    url: "https://www.gamedeveloper.com/design/the-gorgeous-math-of-michael-brough-s-i-868-hack-i-"
  - type: article
    title: "Road to the IGF: Michael Brough's 868-HACK"
    author: "Gamasutra Staff"
    source: "Game Developer"
    year: 2014
    duration: "6 min read"
    summary: "Brough explains the design lineage from Zaga-33 to 868-HACK, describing how he deliberately chose which roguelike elements to keep and which to discard for each project. Covers how long-term strategic thinking was the specific element he wanted to isolate, and how the program-acquisition mechanic creates ongoing choice pressure across an entire run."
    url: "https://www.gamedeveloper.com/design/road-to-the-igf-michael-brough-s-i-868-hack-i-"
---

## Design Notes

**Isolation as design method.** Michael Brough's approach to each game is to take the full tradition of roguelike design, identify one or two specific elements, isolate them, and build an entire game around only those elements. For Zaga-33, the isolated element was tactical movement in tight spaces. For 868-HACK, Brough wanted to explore long-term strategic thinking — what happens when you give the player repeatable abilities that compound across a run rather than single-use items. Every other roguelike convention that wasn't essential to that question was discarded. The grid shrank to 6x6. The enemies simplified. The economy reduced to a single resource. The result is a game that examines one design idea with a precision that a larger game cannot afford.

**Opportunity cost as the core experience.** The central mechanic of 868-HACK is collecting programs — repeatable abilities — but the player can only hold a limited number, and they must be chosen from a random set. This constraint produces continuous opportunity cost: taking one program means forever foregoing another, and the programs interact in ways that require planning ahead. The player is always making irreversible decisions under uncertainty, which is the emotional core of all good roguelike design. Brough's contribution was to strip away everything that dilutes this pressure — the programs and their interactions are the game, and every other system exists to produce situations where those choices matter.

**The 6x6 grid as a design statement.** The field of play in 868-HACK is small enough to hold entirely in working memory. Every enemy, every exit, every threat is visible at once. This is not a limitation — it is the design. Roguelikes typically produce tension through incomplete information about the map, but 868-HACK produces tension through complete information that the player is not yet skilled enough to correctly evaluate. The board is small and legible; the player's mistake is analytical, not exploratory. The entire challenge lives in seeing the board correctly, not in surviving what cannot be seen. This inversion of the usual roguelike tension is possible only because the grid is small enough to make full comprehension theoretically achievable.

**Randomness that respects the designer's intent.** Brough has spoken extensively about using randomness as a design tool rather than a difficulty modifier. In 868-HACK, the procedurally generated board and program offerings are random, but they are constrained to produce situations where meaningful decisions are available. Bad luck in Brough's design means a hard run, not a lost run — the systems are tuned so that skilled play can almost always find a viable path. This requires careful probability work behind the scenes to ensure the random outputs stay within the range where the designer's intended experience is still accessible. Randomness, in this framing, is a palette the designer uses deliberately rather than a chaos engine set loose on the player.

**Sound design as aesthetic coherence.** All sounds in 868-HACK were generated from Brough's own voice, recorded and processed digitally. The result is that the game's forbidding grid, abstract graphics, and mechanised aesthetic are all threaded through with a faint human quality — the machine sounds slightly biological, slightly wrong. This is not merely a budget constraint workaround; it is an aesthetic statement consistent with the game's thematic content (a human hacking program inside a hostile system). The sound design lesson is that coherence of aesthetic across all elements — including audio — reinforces the game's core feel in ways that technically superior but thematically neutral audio cannot.
