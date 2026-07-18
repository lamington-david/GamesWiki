---
title: "Reigns"
developer: "Nerial"
publisher: "Devolver Digital"
year: 2016
genres: ["card game", "strategy", "roguelike"]
playtime: 0.5
steam_rating: 84.54
description: "Nerial's swipe-based card game distills medieval rule management into binary choices, each one shifting four delicate power balances. Reigns borrows the Tinder swiping interface and applies it to a roguelike political simulation, creating a game that is instantly legible on mobile but grows surprisingly deep through its adaptive narrative card system."
design_tags: ["binary choice design", "narrative design", "card game", "resource management", "roguelike", "swipe mechanic", "mobile design"]
resources:
  - type: gdc_talk
    title: "The Casual (but Regal) Swipe: Creating Game Mechanics in Reigns"
    speaker: "François Alliot"
    source: "GDC 2017 / YouTube"
    year: 2017
    duration: "30 min"
    summary: "Alliot breaks down how the binary swipe mechanic was derived from constraints the team set early in development, how bifurcation and wandering defined both the code architecture and the card writing process, and how a 6-month production timeline forced every design decision to justify itself against the core gesture."
    url: "https://www.youtube.com/watch?v=tDdtbh-oUTU"
  - type: article
    title: "Game Design Deep Dive: Creating an Adaptive Narrative in Reigns"
    author: "François Alliot"
    source: "Game Developer"
    year: 2016
    duration: "8 min read"
    summary: "Alliot explains the dynamic card bag system — how war cards expand the bag and dominate draws while a conflict is active, then are removed to let other content resurface — and traces how the narrative moved from one-shot cards to connected mini-storylines and a long-running devil arc."
    url: "https://www.gamedeveloper.com/design/game-design-deep-dive-creating-an-adaptive-narrative-in-i-reigns-i-"
  - type: article
    title: "How Reigns' Lead Developer Made Politics Feel as Goofy as Tinder"
    author: "François Alliot"
    source: "Game Developer"
    year: 2016
    duration: "6 min read"
    summary: "Alliot discusses how Tinder's swiping interface — designed to exploit the dopamine loop of low-stakes judgment calls — was repurposed to give irreversible political decisions the same gestural lightness, and why glitching screens and vibration feedback reinforce the game's Tinder-influenced aesthetic identity."
    url: "https://www.gamedeveloper.com/design/how-i-reigns-i-lead-developer-made-politics-feel-as-goofy-as-tinder"
---

## Design Notes

**Binary choice as constraint and invitation.** The left/right swipe is the most restricted decision space possible in a game — two options, with no ability to compare them side by side or reconsider. Nerial embraced this constraint entirely. Every card is written so that neither option is obviously better, forcing players into genuine dilemmas with no safe harbour. The binary framing removes the comfort of a clearly correct answer and demands commitment. What looks like a limitation on the game's surface becomes a precise design instrument: every decision is equally weighted, equally irreversible, and equally weighted with consequence.

**Four meters as the difficulty engine.** Reigns' challenge is entirely expressed through four resource bars — Church, People, Army, and Treasury — each of which kills the player if it empties or fills completely. Most card choices shift two or three of these meters in opposite directions, creating a balancing act that can never be fully resolved. The design insight is that these four meters can never be in balance simultaneously; some crisis is always developing in the background, making the player feel perpetually behind. This low-grade permanent tension generates compelling gameplay from a remarkably simple rule set.

**Adaptive narrative through card weighting.** The game's narrative doesn't branch in a traditional visual novel sense. Instead, it uses a weighted card bag: when story conditions are active — a war, a devil's bargain, a royal romance — relevant cards become more probable while others are suppressed. This creates the feeling of coherent story arcs without requiring exponentially branching content trees. The adaptive system means players who die frequently still experience narrative progression, while those who survive longer encounter different content. The narrative engine is a probability distribution, not a flowchart.

**Death as pedagogy.** In most games, death is failure. In Reigns, death is the primary teaching mechanism. Each death reveals a secret, unlocks a card, or exposes a previously invisible rule — the game literally signals that dying is how you learn. This reframing makes deaths feel productive rather than punishing, encouraging continued play rather than frustration. The roguelike structure is used not primarily for replayability but as a narrative device: each new reign applies what the previous death taught, and knowledge outlasts any individual monarch.

**Tinder as design inspiration and critique.** The game explicitly references Tinder — the swiping mechanic, the vibration feedback, the pacing of card reveals — all mimic the dopamine loop of flicking through profiles. But while Tinder's interface is designed to maximise engagement with low-stakes choices, Reigns turns this compulsion loop into a meditation on power and consequence. Every swipe has irreversible stakes; nothing can be undone. By borrowing Tinder's interface, Reigns asks players to notice how readily they make consequential decisions when the gesture is familiar — and what it might mean that so many political choices feel that easy to make.
