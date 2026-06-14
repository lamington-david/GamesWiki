---
title: "BELOW"
developer: "Capybara Games"
publisher: "Capybara Games"
year: 2018
genres: ["roguelike", "action-adventure", "dungeon crawler"]
playtime: 7.6
steam_rating: 68.19
description: "Capybara Games' six-year labour of love is an uncompromising experiment in zero-information design — no tutorial, no UI, no dialogue, no hand-holding. BELOW asks whether atmosphere and hostile opacity can carry a game where mechanical clarity is deliberately withheld, and its divisive reception makes it one of the most instructive design case studies in the roguelike genre."
design_tags: ["minimalist UI", "zero-information design", "atmosphere", "roguelike", "procedural generation", "difficulty", "miniaturization"]
resources:
  - type: video
    title: "The Rendering of Below"
    speaker: "Colin Weick"
    source: "GDC 2017 / YouTube"
    year: 2017
    duration: "28 min"
    summary: "Capybara's technical artist Colin Weick details the visual pipeline behind BELOW's striking aesthetic — how the team achieved dense, atmospheric lighting and fog effects on constrained hardware, what drives the game's deliberate colour palette, and how the look was designed to support the game's mood rather than maximise readability. Essential for understanding how visual design and game feel interact."
    url: "https://www.youtube.com/watch?v=4D5uX8wL1V8"
  - type: interview
    title: "The Full Story Behind Below's Long Development"
    speaker: "Kris Piotrowski"
    source: "Game Informer / YouTube"
    year: 2018
    duration: "22 min"
    summary: "Creative director Kris Piotrowski discusses the six-year development of BELOW — why the scope ballooned, what decisions were made to cut and refocus the game, and how the team reconciled their atmospheric vision with the demands of a functional roguelike. Candid about the difficulty of maintaining a creative vision over a very long development cycle."
    url: "https://www.youtube.com/watch?v=mJNe3r2_vwg"
  - type: interview
    title: "Below Developer Interview with Nathan Vella"
    speaker: "Nathan Vella"
    source: "YouTube"
    year: 2018
    duration: "15 min"
    summary: "Capybara co-founder Nathan Vella discusses the studio's design philosophy for BELOW — the deliberate choice to withhold information, how they thought about player discovery versus player frustration, and what they were trying to achieve with the game's extreme miniaturization of the player character."
    url: "https://www.youtube.com/watch?v=oY4WAz6ahhY"
---

## Design Notes

**Zero-information design as total commitment.** BELOW has no tutorial, no map, no UI markers, no quest log, and almost no dialogue. This isn't minimalism as style — it's a design stance about how knowledge should be acquired. Capybara believed that the player's discovery of the world's rules should be visceral and earned, that reading a tutorial destroys the sense of being genuinely lost and genuinely small. The result is a game that's actively hostile to the first hour of play, and whose design only reveals its intentions to players willing to sit with confusion long enough to learn the language. The question BELOW poses is whether the atmospheric payoff of this approach justifies the attrition of players who don't persist — and its lukewarm reception (Steam rating 68%) suggests that, commercially at least, this is a question without an easy answer.

**Scale as vulnerability statement.** The player character is deliberately tiny on screen — so small that they read as a speck against the dungeon's vast stone corridors. This miniaturization is not a technical decision but a tonal one: it makes the player feel genuinely outmatched, genuinely dwarfed by a world that doesn't care whether they survive. Most games use camera and character scale to make the player feel powerful, centred, consequential. BELOW uses scale to communicate the opposite, and every other design decision — the fragility, the darkness, the enemies that can kill in a few hits — extends this aesthetic argument into mechanics. Scale is design language.

**Atmosphere as the primary game system.** The fog effects, the lighting, the ambient sound, the deliberate colour palette — these are not decoration but the primary vehicle of the game's design intent. Colin Weick's GDC talk reveals how much engineering effort went into systems that exist purely to serve mood: custom lighting pipelines, procedural fog density, colour-temperature shifts tied to depth. Capybara treated visual atmosphere as a first-class design consideration, not a polish pass. This is the most instructive aspect of BELOW for other developers: the investment in feel as a system, designed and iterated the way collision or combat would be.

**Roguelike structure as loss amplifier.** BELOW uses the roguelike's permadeath framework not as a difficulty device but as a consequence intensifier — when the character dies, the loss of progress, items, and discovered knowledge is the point. The mechanic asks how much the player is willing to risk on a run, knowing that the dungeon goes deeper than they've ever reached and that everything gained can be lost at once. Six years of development went into a game structured around making loss meaningful; Capybara were trying to create the emotional texture of genuine stakes in a genre where death is typically trivial.

**Long development as creative compression and coherence risk.** BELOW took six years from announcement to release, and the development story reveals the cost and the benefit of extended production on an atmospheric vision. The benefit: the team had time to achieve a visual and audio coherence that shorter productions rarely manage. The cost: scope decisions made in year two may not match the game the team wanted to make by year five, and six years of expectation management — both externally and internally — creates pressures that can distort a project's final shape. BELOW's divisive reception is partly a story about how long development cycles produce games that arrive on the wrong side of changed player expectations.
