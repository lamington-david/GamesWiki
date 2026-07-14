---
title: "The Swindle"
developer: "Size Five Games"
publisher: "Curve Digital"
year: 2015
genres: ["roguelite", "platformer", "stealth"]
playtime: 0.73
steam_rating: 62.25
description: "A steampunk heist roguelite where burglars must loot a procedurally generated Victorian London before Scotland Yard deploys a crime-ending surveillance system on day 100. Developed solo by Dan Marshall, The Swindle was cancelled after two years then revived with a fundamentally different structure inspired by Spelunky."
design_tags: ["procedural generation", "roguelite design", "stealth design", "risk-reward", "permadeath", "urgency design"]
resources:
  - type: video
    title: "Dan Marshall Talks Designing Stealth Games & The Swindle – EGX Rezzed 2015"
    speaker: "Dan Marshall"
    source: "YouTube / EGX Rezzed"
    year: 2015
    duration: "40 min"
    summary: "Marshall discusses his counterintuitive thesis that he 'hates stealth games' despite spending years building one, and uses that tension to analyse what makes stealth satisfying versus frustrating. He covers the design principles behind The Swindle's guard AI — why guards must be predictable to make stealth learnable — and how procedural generation interacts with the genre's demand for readable spaces."
    url: "https://www.youtube.com/watch?v=fF0XfsO-3c8"
  - type: article
    title: "How Spelunky Helped Dan Marshall Reinvent The Swindle"
    author: "Game Developer Staff"
    source: "Game Developer"
    year: 2015
    duration: "8 min read"
    summary: "Marshall explains why he cancelled The Swindle after two years when the systems wouldn't gel, and how playing Spelunky revealed that procedural generation required a specific kind of predictability — guards with readable patrol routes, environments with consistent spatial logic — to make stealth feel fair rather than arbitrary. The prototype he built after this realisation had a 'one more go' quality the original never achieved."
    url: "https://www.gamedeveloper.com/business/how-i-spelunky-i-helped-dan-marshall-reinvent-i-the-swindle-i-"
  - type: interview
    title: "Interview: Dan Marshall on The Swindle, Cancellation and Its Rebirth"
    speaker: "Dan Marshall"
    source: "Nintendo Life"
    year: 2015
    duration: "8 min read"
    summary: "Marshall details the original 2011 concept for The Swindle, why the mechanics weren't working after years of development, and the specific lessons he drew from Spelunky about how to structure a procedurally generated game. He discusses the game's inertia-based controls — deliberately Sonic-influenced, deliberately divisive — and how that physicality interacts with the stealth genre's typical demand for precision."
    url: "https://www.nintendolife.com/news/2015/03/interview_dan_marshall_on_the_swindle_cancellation_and_its_rebirth"
---

## Design Notes

**The cancellation and resurrection.** The Swindle is unusual in game design literature because its development history is itself a design lesson. Marshall spent two years building a steampunk stealth game before cancelling it when the elements wouldn't combine into something fun. The problem wasn't any single system — it was that the systems weren't talking to each other in ways that created genuine moment-to-moment engagement. Playing Spelunky showed him the solution: a roguelite structure where each run is short, readable, and self-contained.

**Predictable AI as a design requirement.** Marshall's central argument about stealth games is that guard AI must be predictable to be fair. Random or erratic guard behavior turns stealth into guessing rather than planning. Every guard in The Swindle has a legible patrol route, and procedural generation is constrained to produce levels that honour that legibility — rooms connect in ways where guard paths don't create unwinnable situations. This distinguishes the game from stealth games where trial-and-error is the primary learning mode.

**The 100-day countdown as a urgency engine.** Scotland Yard's deployment of the Countess — a surveillance system that ends crime permanently — creates a hard timer across all runs. Players have 100 in-game days to earn enough money to rob the Countess herself. This structure creates escalating pressure without increasing difficulty mechanically: the same risk-reward calculations the player has been running throughout the game now carry accumulated consequence. Days spent on cautious low-value heists are days not spent preparing for the finale.

**Procedural generation and the stealth contract.** The tension at the heart of The Swindle's design is that stealth games typically reward knowledge of space — learning patrol routes, memorising guard positions — while procedural generation destroys that knowledge between runs. Marshall's solution is to make the generation follow consistent principles, so players are always acquiring transferable skills (how to read a room, how guards respond to noise) rather than specific memorised knowledge. The player becomes better at the game, not just better at a particular level.

**Inertia-based movement as a design choice.** The Swindle uses physics-influenced platformer movement in a genre where pixel-precise control is the default expectation. This was deliberate but contentious — stealth games traditionally want the player to feel controlled and purposeful, while inertia adds a sense of slip and unpredictability. Marshall acknowledged the controls divided players, but argued that the physicality of the movement made the game feel distinct and that mastering the inertia became part of the skill expression.
