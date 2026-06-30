---
title: "Hacknet"
developer: "Team Fractal Alligator"
publisher: "Fellow Traveller"
year: 2015
genres: ["hacking simulator", "terminal", "narrative", "puzzle"]
playtime: 2.2
steam_rating: 91.51
description: "Matt Trobbiani's solo-developed terminal hacking simulator that achieves complete player immersion by eliminating the separation between player and character — your screen is the game's interface, and your typed commands are the character's actions. A masterclass in how authentic constraint, interface design, and the absence of combat can create sustained tension and a uniquely direct sense of player identity."
design_tags: ["interface design", "immersion", "terminal design", "solo dev", "UI as gameplay", "tension without combat"]
resources:
  - type: video
    title: "How His Hacking Simulator Game Blew Up — Matt Trobbiani"
    speaker: "Matt Trobbiani"
    source: "MGD Podcast / YouTube"
    year: 2020
    duration: "45 min"
    summary: "Trobbiani covers Hacknet's complete origin story — from the 48-hour game jam that produced the prototype to three years of part-time solo development, the viral IndieDB moment that gave the site its highest-traffic day, and the Steam launch that sold 100,000 copies in four months. Key discussion of the design decision to use real Unix-like commands and why authentic system simulation was core to the game's identity."
    url: "https://www.youtube.com/watch?v=uUuAIChSfvI"
  - type: article
    title: "When the Player's Screen Is the Game's Screen"
    source: "Game Developer"
    year: 2016
    duration: "8 min read"
    summary: "Examines how Hacknet achieves immersion by making the player's actual monitor the game's interface — every window, file, and command prompt is simultaneously the game's UI and the fictional computer system being hacked. Discusses how Trobbiani designed the game so that real data could be plugged in and remain believable, reflecting the same realism principle that drives the command design."
    url: "https://www.gamedeveloper.com/design/when-the-player-s-screen-is-the-game-s-screen"
  - type: interview
    title: "Hacknet Developer Interview"
    speaker: "Matt Trobbiani"
    source: "GeekOut UK"
    year: 2016
    duration: "12 min read"
    summary: "Trobbiani discusses his design goals for Hacknet — particularly his central aim that 'the player is the one making decisions, with no avatar separating them from the game.' Covers the influences of Introversion's Uplink, the choice to simulate a real OS rather than an invented one, and how solo development forced scope decisions that ultimately made the game more coherent."
    url: "https://geekoutsw.wordpress.com/2016/05/18/hacknet-developer-interview/"
---

## Design Notes

**The player IS the hacker.** Hacknet's defining design decision is the complete elimination of the separation between player and character. You don't play as a hacker navigating a fictional interface — you are the hacker, typing real commands into a simulated Unix-like terminal, reading actual error messages, navigating a real-feeling file system. Trobbiani explicitly stated this as his primary design goal: no avatar, no fictional intermediary, just a direct line from your decision to its consequence in the game world. This produces a form of identity immersion that avatar-based games cannot achieve because it removes the narrative distance that normally cushions player choices.

**Authentic interfaces as world-building.** Unlike Hollywood hacking simulations that use dramatic but meaningless visual interfaces, Hacknet simulates real Unix-like commands — ls, cd, scp, rm, probe, PortHack — within a consistent OS metaphor. Players who know basic Linux feel genuine competence; newcomers learn concepts that transfer to real systems. This authenticity establishes the world as having internal logic that can be learned and exploited, which is the foundation of all satisfying puzzle design. The game's tension comes from understanding a real system well enough to manipulate it, not from pattern matching or trial and error.

**Tension without combat.** Hacknet generates anxiety through information scarcity and connection traces — if you remain on a target system too long, a trace countdown initiates and eventually disconnects you — rather than through combat or health systems. The trace mechanic converts the normally low-stakes act of reading documentation into tense decision-making about how long you can afford to stay. This demonstrates that anxiety is an independently designable emotional state; it requires threat and time pressure, not necessarily violence. The game is proof that tension and a sense of danger can coexist with the complete absence of a combat system.

**Game jam constraints as permanent design principles.** Hacknet originated from a 48-hour game jam with the theme "UIs and Interfaces." The core design — one mechanic (the terminal), one screen, one voice guiding you — reflects the clarity that jam constraints produce. Trobbiani extended this over three years of solo development without adding complexity that would break the premise: no combat, no inventory, no skill trees, no dialogue trees. The discipline of knowing what NOT to add is the harder skill in game development, and Hacknet is an example of it applied rigorously. Every feature proposal had to pass the filter of "does this serve the terminal experience?"

**Solo development and coherence.** Hacknet was built part-time by a single developer, and this constraint enforced an unusual degree of design coherence. No feature could be added without the author of every other feature evaluating it against the game's premise. The resulting work is unusually consistent in tone, difficulty curve, and thematic focus — quality that is harder to achieve in larger teams where individual contributors may have different priorities. The Fellow Traveller publishing relationship gave the game commercial distribution without compromising the design's insularity. Solo development, in this case, was a quality mechanism.
