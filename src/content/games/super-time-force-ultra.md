---
title: "Super Time Force Ultra"
developer: "Capybara Games"
publisher: "Capybara Games"
year: 2015
genres: ["Action", "Platformer", "Run and Gun"]
playtime: 1.1
steam_rating: 84.37
description: "A run-and-gun platformer built around rewinding time and playing as ghosts of your own past selves simultaneously. Born from a three-day game jam at the Toronto Global Game Jam, Super Time Force Ultra is a case study in taking a mechanically complex idea — time paradox — and solving it through a counterintuitive design decision inspired by quantum mechanics."
design_tags: ["time-manipulation", "rewind-mechanics", "game-jam-to-commercial", "parallel-timelines", "ghost-recording", "sidescroller"]
resources:
  - type: gdc_talk
    title: "Super Time Force: Solving the Time Travel Paradox"
    speaker: "Kenneth Yeung"
    source: "GDC / YouTube"
    year: 2014
    duration: "30 min"
    summary: "Technical director Kenneth Yeung explains how Capybara solved the fundamental design problem of time travel in games — multiple simultaneous timelines with no paradox — by drawing on quantum superposition rather than traditional branching narrative models. Covers the specific implementation decisions that made the mechanic feel fair and fun rather than confusing."
    url: "https://www.youtube.com/watch?v=IJCMdfpr3MQ"
  - type: article
    title: "How Super Time Force was informed by quantum physics"
    author: "Alex Wawro"
    source: "Game Developer"
    year: 2014
    duration: "5 min read"
    summary: "A write-up of Yeung's GDC talk covering how quantum superposition provided the conceptual framework to make time travel comprehensible to players without requiring them to understand physics. The key insight: all timelines coexist simultaneously rather than branching, which resolves the paradox problem and enables cooperative ghost play."
    url: "https://www.gamedeveloper.com/design/how-i-super-time-force-i-was-informed-by-quantum-physics"
  - type: article
    title: "Beneath the pixels: The art direction of Super Time Force"
    author: "Alex Wawro"
    source: "Game Developer"
    year: 2014
    duration: "6 min read"
    summary: "Covers the pixel art direction and how the visual style was designed to remain readable when multiple ghost-selves are on screen simultaneously. The art challenge of Super Time Force was unique: the style had to support up to a dozen translucent past-selves without the screen becoming illegible."
    url: "https://www.gamedeveloper.com/art/beneath-the-pixels-the-art-direction-of-i-super-time-force-i-"
---

## Design Notes

**Solving time travel paradox with quantum superposition.** The central design challenge of Super Time Force was one that has tripped up many time-travel games: what happens to a timeline when you go back and change it? Traditional branching approaches create either confusing multiple-save-states or narrative paradoxes. Capybara technical director Kenneth Yeung's solution was inspired by quantum mechanics: all timelines coexist simultaneously. When you rewind and replay, the original events don't disappear — your past self becomes a ghost that plays out the old timeline in parallel. This isn't just a conceptual elegance; it is the game's core fun. The experience of playing as multiple selves simultaneously is a direct consequence of adopting superposition rather than branching as the underlying model.

**A jam mechanic scaled to a full game.** Super Time Force began at the 2011 Toronto Global Game Jam as a three-day prototype made by three people: two artists and a programmer. The prototype proved the core mechanic was fun in a very basic form. The production decision Capybara then faced — how to scale a jam mechanic into a full commercial game — required not just adding content but identifying what the mechanic demanded from level design, character design, and pacing. The GDC talk Nathan Vella gave on this process at GDC Next 2013 remains one of the cleaner accounts of the jam-to-commercial transition, because the design problem was unusually well-defined from the start.

**The visual design challenge of simultaneous selves.** When a player has rewound time several times, the screen contains multiple translucent past-selves acting out previous runs simultaneously. This creates a genuinely novel art direction problem: how do you make a pixel art game readable when there are sometimes a dozen overlapping characters on screen? The solution involved aggressive use of transparency, distinct character silhouettes, and a colour language that distinguishes active-player from ghost without cluttering the screen. This is a case where a design mechanic generated an art problem that had no precedent to draw on, and the team had to invent a solution.

**Game feel in service of a complex mechanic.** One reason the time-rewind mechanic works in Super Time Force where it fails in less-considered games is the emphasis on game feel at the rewind moment. The freeze-frame, the rewind sound, the visual pop when entering a past timeline — each cue is designed to make the mechanic feel snappy and satisfying rather than technically correct but emotionally flat. This reflects a principle Capybara has applied across their catalogue: complex systems need especially strong moment-to-moment feel to remain accessible, because the player's brain is already loaded with understanding the system.

**Characters as mechanical variety, not just narrative decoration.** Super Time Force features many unlockable characters with distinct abilities. These are not cosmetic: each character enables different strategies for the rewind-and-cooperate mechanic, and some are only useful in specific level configurations. This means the character roster is doing double duty — providing narrative variety (all are comic parodies of action archetypes) while also being the primary source of mechanical depth. The design lesson is that in a game built around a single central mechanic, character differentiation is one of the most efficient ways to extend the mechanic's lifespan without fundamentally altering it.
