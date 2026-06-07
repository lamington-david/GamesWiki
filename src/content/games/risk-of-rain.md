---
title: "Risk of Rain"
developer: "Hopoo Games"
publisher: "Chucklefish"
year: 2013
genres: ["roguelike", "platformer", "action"]
playtime: 17.7
steam_rating: 91.11
description: "A two-person student project from the University of Washington that became a landmark indie roguelike. Risk of Rain's defining contribution is converting time itself into a difficulty axis — the longer a run lasts, the more dangerous the world becomes, creating relentless forward pressure that never lets the player settle."
design_tags: ["difficulty scaling", "roguelike design", "item synergies", "time pressure", "procedural challenge", "indie"]
resources:
  - type: article
    title: "Why Risk of Rain Returns Is Taking the Series Back to 2D"
    author: "Joel Couture"
    source: "Game Developer"
    year: 2023
    duration: "10 min read"
    summary: "Paul Morse discusses how the original Risk of Rain was conceived as a fusion of the designers' favourite games and explains the tension between player power fantasy and unforgiving difficulty. Covers the game's design DNA — the pacing of the difficulty curve, item philosophy, and why the series returned to its 2D roots rather than continuing as a 3D game."
    url: "https://www.gamedeveloper.com/design/risk-of-rain-interview"
  - type: article
    title: "How Moving from 2D to 3D Shaped the Design of Risk of Rain 2"
    author: "Chris Kerr"
    source: "Game Developer"
    year: 2019
    duration: "8 min read"
    summary: "Hopoo Games co-founders Paul Morse and Duncan Drummond trace how the original game's design language — its item design, scaling philosophy, and player agency — was translated into three dimensions. Offers direct comparison of both games' design logic and reveals which original systems survived unchanged versus which required fundamental rethinking."
    url: "https://www.gamedeveloper.com/design/how-moving-from-2d-to-3d-shaped-the-design-of-i-risk-of-rain-2-i-"
  - type: interview
    title: "A Chat with the Makers of Risk of Rain 2 (Hopoo Games)"
    speaker: "Paul Morse, Duncan Drummond"
    source: "YouTube"
    year: 2019
    duration: "25 min"
    summary: "Morse and Drummond reflect on the design history of the series, tracing ideas that originated in the original 2013 game through to their follow-up. Covers their philosophy on item design, the challenge of balancing emergent complexity, and how a two-person student team shipped a game that went on to win the IGF Best Student Game award."
    url: "https://www.youtube.com/watch?v=j0Mpqfl3L50"
---

## Design Notes

**Time as the difficulty axis.** Risk of Rain's core design insight — and its most transferable lesson — is that making time itself the driver of difficulty eliminates the need for arbitrary difficulty selection or level-gating. The longer a run lasts, the more the game's internal difficulty counter climbs, spawning more dangerous enemy types and increasing spawn rates. This creates a constant forward pressure that never lets the player settle into a comfortable routine. Every moment spent consolidating a position costs something; the game rewards aggression because passivity is punished automatically. For designers, this is a study in how a single well-chosen variable can replace a more complex difficulty system while feeling more organic.

**Item design built for absurdity.** Risk of Rain ships with over 100 items, and many of them stack multiplicatively. The design explicitly chases the power fantasy: finding a rare item and watching it break the game in the player's favour is a reward, not a bug. The items are categorised by rarity but not by situation — there are no "tank" or "damage" build paths prescribed by the system. Players discover emergent synergies themselves, and the excitement of discovering that two items combine in an unexpected way carries much of the game's replayability. This is item design that trusts the player to find complexity rather than encoding it into legible build paths.

**Procedural levels with authored set-pieces.** The game uses procedural generation for level layout but plants authored obstacles and interactable elements throughout. This hybrid approach gives each run a different shape while ensuring that important design moments — the teleporter encounter that caps each stage, the shrines and chests — always exist and are findable. The level design is not trying to generate endless meaningful variety; it is trying to generate enough variation that the authored content feels fresh on each encounter. The lesson is that procedural generation and authorship are not opposites but collaborators.

**Character design through challenge unlocks.** Each playable character is unlocked by completing a specific in-game challenge — not by purchasing with accumulated currency, but by performing a particular feat in a run. This means the unlock system teaches the player about the game's depth before they access more of it. Completing the challenge for a new character demonstrates mastery of a specific mechanic, so players arrive at each character already primed for its playstyle. The unlock system is simultaneously a tutorial structure and a reward delivery mechanism, and neither function undermines the other.

**Built by two students under constraints.** Risk of Rain's design was as much a product of its constraints as its intentions. Two students with limited art and programming resources built a game using the GameMaker engine, where every system had to justify its development cost against a very small budget of time and complexity. The result is a game where the systems that survived are the ones that did the most work per line of code — difficulty scaling, item stacking, procedural layouts — and superfluous systems were never added. This makes the game an inadvertent case study in design economy, where the stripped-down final product is sharper than a better-resourced version might have been.