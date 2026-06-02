---
title: "Hades"
developer: "Supergiant Games"
publisher: "Supergiant Games"
year: 2020
genres: ["roguelike", "action", "hack and slash"]
playtime: 46.0
steam_rating: 96.97
description: "Supergiant Games' breakthrough roguelike that solved one of the genre's oldest design problems: how do you tell a story in a format built around death and repetition? Hades uses the structure of failure itself as a narrative engine, and in doing so effectively invented a new subgenre — the narrative roguelike."
design_tags: ["narrative design", "roguelike design", "procedural dialogue", "early access", "death loops", "accessibility"]
resources:
  - type: gdc_talk
    title: "Breathing Life into Greek Myth: The Dialogue of 'Hades'"
    speaker: "Greg Kasavin, Darren Korb"
    source: "GDC 2021 / YouTube"
    year: 2021
    duration: "55 min"
    summary: "Creative Director Greg Kasavin and Audio Director Darren Korb explain how a team of fewer than twenty people shipped a fully-voiced game with over 22,000 lines of dialogue. Covers their collaborative writing-and-audio workflow, how Early Access community feedback shaped the narrative, and the procedural systems that ensure players almost never hear repeated lines."
    url: "https://www.youtube.com/watch?v=m5KJSAj4afg"
  - type: gdc_talk
    title: "Fireside Chat: Amir Rao on the Making of 'Hades'"
    speaker: "Amir Rao, Kelly Wallick"
    source: "GDC 2021 / YouTube"
    year: 2021
    duration: "45 min"
    summary: "Studio Director Amir Rao reflects on Hades' full development arc — studio culture, creative leadership at a small indie studio, how the game earned 50+ Game of the Year awards, and the work/life balance decisions that shaped the team's process. Invaluable for understanding the organisational design behind the creative output."
    url: "https://www.youtube.com/watch?v=AQidk-HlicQ"
  - type: podcast
    title: "Roguelikes and Narrative Design with Greg Kasavin — GDC Podcast Ep. 16"
    speaker: "Greg Kasavin"
    source: "GDC Podcast / YouTube"
    year: 2021
    duration: "40 min"
    summary: "Kasavin explains why the roguelike structure unlocks narrative possibilities unavailable in linear games — how death-as-repetition becomes a storytelling device when the world responds to each run's events. He also discusses his journey from game journalist to designer and how that perspective shaped Hades' iterative development."
    url: "https://www.youtube.com/watch?v=Rnlax6eATVY"
  - type: article
    title: "How Supergiant Weaves Narrative Rewards into Hades' Cycle of Perpetual Death"
    author: "Alissa McAloon"
    source: "Game Developer"
    year: 2020
    duration: "12 min read"
    summary: "Examines the specific mechanical design of Hades' narrative delivery — how the hub world monitors player state between runs to serve pre-written events at dramatically appropriate moments, how death is reframed as reward rather than punishment, and how the Early Access community's feedback directly shaped which story threads were prioritised."
    url: "https://www.gamedeveloper.com/design/how-supergiant-weaves-narrative-rewards-into-i-hades-i-cycle-of-perpetual-death"
  - type: article
    title: "Supergiant's Fourth Outing Introduces a More Mature, Organised Dev Process"
    author: "Game Developer Staff"
    source: "Game Developer"
    year: 2020
    duration: "10 min read"
    summary: "Traces how Supergiant evolved its development practices across four games, culminating in Hades' disciplined use of Early Access as a structured design tool rather than a revenue mechanism. Covers how the team's iteration and playtesting cadence changed, and how moving from Pyre's narrative experiments to Hades' roguelike framework required rethinking scope."
    url: "https://www.gamedeveloper.com/design/supergiant-s-fourth-outing-i-hades-i-introduces-a-more-mature-organized-dev-process"
---

## Design Notes

**Death as the narrative mechanism, not the obstacle.** The breakthrough insight at the core of Hades is that the roguelike's defining feature — obligatory death and repetition — doesn't have to work against storytelling. It can be the story. Zagreus's repeated escape attempts are literally the plot; every death is a narrative event that the hub-world characters acknowledge, react to, and remember. The game solved the roguelike's traditional story problem not by working around the death loop but by making the loop the subject. Designers studying this approach find a model for how genre constraints, rather than being fought against, can be converted into narrative engines.

**The hub world as emotional anchor.** Between runs, Zagreus returns to the House of Hades — a space that accumulates change over time, filling with new characters, new dialogue, new décor as the story progresses. This serves a precise design function: it gives players a reason to care about each run's outcome beyond mechanical improvement. The House is where relationships develop, where the stakes become personal, and where the player's investment in the narrative is built. Its design as a persistent, evolvable space separating the procedural runs is the structural decision that allows the game to operate as a story at all.

**22,000 lines and almost no repetition.** The dialogue system Kasavin and Korb developed for Hades tracks an extraordinary breadth of player state — current boon loadout, recent death cause, relationship levels with each character, story progress flags — and uses this to select contextually appropriate lines from a vast pool. In realistic play, players almost never hear the same reaction twice. This required an enormous writing effort, but the design payoff is a world that seems genuinely aware of what you've been doing. The lesson is that perceived game intelligence is often a volume problem: the more lines you write tracking specific states, the more alive the world feels.

**Early Access as a design tool with feedback discipline.** Hades spent two years in Early Access, and Supergiant used this period not to finish the game but to test its fundamental design assumptions against real player behaviour. Specific story threads were accelerated or cut based on what the community engaged with. Mechanical systems were redesigned based on observed playtimes. The studio treated Early Access as a structured iteration loop, not an open beta — they were watching, measuring, and deciding, not simply listening. This discipline — the willingness to act on feedback without being captured by it — is the part of the Early Access approach that most developers fail to replicate.

**Accessibility without compromise.** God Mode, Hades' difficulty accommodation option, was designed to be unobtrusive and non-stigmatising: it increases damage resistance by a small percentage each death, offering gradual assistance rather than a binary easy mode. The framing is in-universe (Zagreus is described as toughening over time) and the option is never surfaced at a point that implies the player is failing. This approach treats accessibility as a design challenge requiring the same care as any other system, rather than an afterthought appended to a 'real' difficulty setting. It offers a model for how difficulty accommodation can be built into a game's identity rather than bolted onto its edge.