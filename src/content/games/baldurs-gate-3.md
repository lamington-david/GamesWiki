---
title: "Baldur's Gate 3"
developer: "Larian Studios"
publisher: "Larian Studios"
year: 2023
genres: ["RPG", "turn-based strategy", "CRPG"]
playtime: 29.4
steam_rating: 96.03
description: "Larian Studios' decade-in-the-making return to the Baldur's Gate franchise, built around an unprecedented commitment to systemic reactivity and authored player choice. With over 17,000 ending variations and 174 hours of cinematics, BG3 is the most ambitious argument yet made for reactive narrative as a design discipline."
design_tags: ["narrative design", "systemic design", "branching narrative", "character design", "performance capture", "D&D adaptation", "reactive world"]
resources:
  - type: gdc_talk
    title: "Larian Cinematics: A Top-Down Look at Our Bottom-Up Approach in Baldur's Gate 3"
    speaker: "Jason Latino"
    source: "YouTube / GDC 2024"
    year: 2024
    duration: "60 min"
    summary: "Larian's Cinematic Director Jason Latino discusses how BG3's cinematic pipeline evolved under the pressure of the game's scale — covering specific moments that forced changes to tools, team structure, and first-principles thinking about what cinematics are for. Essential for understanding how the studio handled 174 hours of authored camera work across 1,700+ characters."
    url: "https://www.youtube.com/watch?v=MdmY9Mt-vz8"
  - type: article
    title: "Building Baldur's Gate 3's Memorable Characters Was All About Forming Trust in Performance Capture"
    author: "Game Developer Staff"
    source: "Game Developer"
    year: 2024
    duration: "8 min read"
    summary: "Performance Director Greg Lidstone discusses how Larian directed actors through motion capture for BG3's companions, including techniques for achieving authentic emotional performance within technical constraints. Covers how the studio blended traditional acting direction with the practical demands of a branching RPG."
    url: "https://www.gamedeveloper.com/art/building-baldur-s-gate-3-s-memorable-characters-was-all-about-forming-trust-in-performance-capture"
  - type: article
    title: "What Works (and Doesn't Work) About Baldur's Gate 3's D&D-Driven Systems"
    author: "Game Developer Staff"
    source: "Game Developer"
    year: 2023
    duration: "10 min read"
    summary: "An analysis of the design trade-offs in translating D&D 5th Edition rules to a video game — what the fidelity approach enables (player literacy from tabletop, familiar probability models) and what it constrains (some rules feel unfair in digital form without a human GM to mediate). A valuable case study in licensed system adaptation."
    url: "https://www.gamedeveloper.com/design/what-works-and-doesn-t-work-about-baldur-s-gate-3-s-use-of-d-d-systems"
  - type: article
    title: "Tides of Chaos: How Baldur's Gate 3 Tackles the RNG of D&D-Inspired Dice Rolls"
    author: "Game Developer Staff"
    source: "Game Developer"
    year: 2023
    duration: "6 min read"
    summary: "Covers Larian's specific design solutions to the problem of player-hostile randomness — how skill check difficulty numbers were kept within learnable ranges, how the Tides of Chaos mechanic reframes random outcomes as player agency, and why the team deliberately bucketed difficulty values to create consistent expectations."
    url: "https://www.gamedeveloper.com/design/tides-of-chaos-how-i-baldur-s-gate-3-i-tackles-the-rng-of-d-d-inspired-dice-rolls"
  - type: interview
    title: "Scripting the Unscriptable: Larian Studios' Narrative Design in Baldur's Gate 3"
    speaker: "Vladimir Gaidenko"
    source: "Gamereactor / DevGAMM"
    year: 2023
    duration: "12 min read"
    summary: "Associate Lead Scripter Vladimir Gaidenko gives a detailed account of the systems and workflow Larian built for producing unique branching narrative across hundreds of quests — covering the 'what if' design approach, the scripting language developed to handle conditional state, and how the team managed combinatorial explosion in a game with thousands of interlocking variables."
    url: "https://www.gamereactor.eu/vladimir-gaidenko-gives-a-masterclass-on-larian-studios-narrative-design-in-baldurs-gate-3-scripting-the-unscriptable-1505593/"
---

## Design Notes

**Systemic reactivity as the central design commitment.** Baldur's Gate 3's defining characteristic is not its scale but its depth of reaction — the game responds to player race, class, background, previous choices, and companion relationships across tens of thousands of conditional branches. This commitment means that the design work is invisible to individual players: most players will never see most of the game's authored content. Larian's design argument is that the feeling of being responded to — of a world that acknowledges who you are and what you did — is worth the enormous authoring cost. The game treats reactive narrative not as a feature but as a form of respect for player investment.

**Adapting tabletop rules to digital form.** The decision to stay close to D&D 5th Edition rules, rather than designing a new system inspired by D&D, was a significant constraint. It gave players with tabletop literacy an immediate framework — they knew what an ability check meant, how spell slots worked, why their character's stats mattered. But it also introduced rules that feel unfair without a human GM to mediate, since digital probability is experienced differently from tabletop probability. Larian's specific solutions — bucketing difficulty values, the Tides of Chaos mechanic, transparent dice rolls — are a practical manual for designers adapting tabletop systems to video games while preserving the source material's identity.

**Performance capture at RPG scale.** BG3's 174 hours of cinematics required building a performance capture pipeline that could handle over 1,700 individual characters, from main companions to background NPCs with a single scene. Performance Director Greg Lidstone's approach — prioritising actor trust and authentic emotional investment rather than precise technical compliance — produced companion performances that players described as among the most memorable in the medium. The lesson is about the relationship between direction and performance at scale: when actors understand and inhabit their characters, the resulting performances require less technical correction and carry more emotional authenticity across the thousands of conditional branches each character appears in.

**Early Access as live design iteration.** BG3 spent three years in Early Access before its full release in 2023, shipping its first act in 2020 with the game approximately 25% complete. Larian used player behaviour and feedback during this period to make significant structural changes — reworking Act 1, revising companion personalities, adjusting the difficulty curve, and overhauling the user interface. Creative Director Swen Vincke described how many originally planned locations and systems were cut based on Early Access signal. This model — genuine live iteration on a shipped product rather than post-release patching — is a design case study for how studios can use partial release to test assumptions before committing to the full structure.

**Companion reactivity as the emotional centre.** The six main companions in BG3 have approval systems, personal questlines, individual reactions to hundreds of world events, and relationship arcs that branch based on player values and choices. Larian's design placed companions at the emotional centre of the experience rather than treating them as mechanical supports — they have conflicting agendas, they disagree with player choices, they pursue their own goals independently. This design demands that companion writers model not just personality but motivation and situational response at enormous granularity. The payoff is that players form genuine attachments, which amplifies the stakes of every decision the game presents.
