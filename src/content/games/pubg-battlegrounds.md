---
title: "PUBG: BATTLEGROUNDS"
developer: "PUBG Corporation"
publisher: "PUBG Corporation"
year: 2017
genres: ["battle royale", "shooter", "survival"]
playtime: 3.6
steam_rating: 60.23
description: "The game that defined and popularised the battle royale genre, placing 100 players on a large island with scarce weapons and a shrinking safe zone. Designed by Brendan 'PlayerUnknown' Greene from his experience building battle royale mods for ArmA and H1Z1, PUBG's map, circle, and survival systems have been directly copied by virtually every battle royale game released since."
design_tags: ["battle royale", "emergent gameplay", "map design", "survival mechanics", "pacing design", "scarcity design", "streaming culture"]
resources:
  - type: gdc_talk
    title: "PLAYERUNKNOWN: From Mod Creator to Creative Director of PUBG"
    speaker: "Brendan Greene"
    source: "GDC 2018 / YouTube"
    year: 2018
    duration: "30 min"
    summary: "Brendan Greene traces his path from designing ArmA 2 and H1Z1 battle royale mods to becoming Creative Director of PUBG Corp. Covers the design origins of the battle royale format, how the mod community shaped his design vocabulary, and what changed when building a standalone game versus modding an existing engine. The most comprehensive account of PUBG's design lineage available."
    url: "https://www.youtube.com/watch?v=TJQR1Sfinjk"
  - type: video
    title: "PlayerUnknown's Battlegrounds Developer Interview — E3 2017"
    speaker: "Brendan Greene"
    source: "Unreal Engine / YouTube"
    year: 2017
    duration: "12 min"
    summary: "An E3 2017 interview with Greene during the period of PUBG's explosive early access growth. Discusses the design of the island's points of interest, how scarcity was tuned to create player motivation across the map, and the decision to use Unreal Engine 4 for a game that needed to support 100 simultaneous players in an open world with minimal scripted events."
    url: "https://www.youtube.com/watch?v=BEzl1KjF5FY"
  - type: article
    title: "Designing the Giant Battle Royale Maps of PlayerUnknown's Battlegrounds"
    author: "Game Developer Staff"
    source: "Game Developer"
    year: 2017
    duration: "10 min read"
    summary: "Greene describes the design process for Erangel — PUBG's original island map — including how points of interest were distributed to create varied loot density, how the river was added late in development to enable boat mechanics, and how the team iterated on map layout through playtesting. Includes Greene's key principle of designing 'context rather than levels,' borrowed from his ArmA modding background."
    url: "https://www.gamedeveloper.com/design/designing-the-giant-battle-royale-maps-of-i-playerunknown-s-battlegrounds-i-"
---

## Design Notes

**The shrinking circle as pacing mechanic.** The blue zone — a circle that shrinks over the course of a match and kills players outside it — is PUBG's primary pacing system. Greene calls it "the deus ex machina of our game": it is not a realistic element of the world but a pure design tool for managing match tempo and player density. Early in a match, the circle is large and players spread across the map; as it shrinks, engagements become inevitable. This is battle royale's essential design contribution — a pacing system that makes conflict escalate without scripting it. The circle creates urgency without removing the player's agency in how they respond to that urgency, producing a consistent dramatic arc in every session regardless of whether a player fights or avoids for twenty minutes.

**Scarcity as motivation design.** Every player starts with nothing and finds their equipment through exploration. This scarcity is the engine of player motivation: movement is always meaningful because it might yield a better weapon, armour, or healing item. Scarcity also creates asymmetrical player states — a player with a sniper rifle and a player still carrying a pistol have radically different relationships to the same terrain — which is the source of the game's emergent stories. The loot distribution across the map is a design question about where to concentrate these asymmetries: high-value loot clusters in named locations create magnets that guarantee early-game conflict, while sparser zones provide routes for players willing to trade early loot for safety.

**Designing context, not levels.** Greene's design philosophy, imported from his ArmA modding background, is that a battle royale designer designs context rather than levels. A level designer places encounters, routes players through space, and ensures pacing within that space. A context designer places an environment, tools, and pressures, and observes what players create within them. Erangel was designed with different terrain types, building densities, and loot distributions, but not with specific encounters: the encounters emerge from the interactions of 100 players with those resources and constraints. This distinction is important for understanding PUBG's design — it is an environment design problem, not a level design problem.

**Sound as strategic information.** PUBG's audio design is calibrated to function as strategic information rather than atmosphere. Gunshots have distance-dependent attenuation and terrain-dependent reverb and occlusion: a shot heard in the open sounds different from one heard through a building. Experienced players estimate distance, direction, and weapon type from audio cues. Vehicle sounds carry across large distances. Footsteps indicate proximity in buildings. This approach — treating audio parameters as gameplay-relevant information rather than immersion or spectacle — is a design principle applicable beyond battle royale: any game where positional information matters can use sound as an information system rather than pure ambience.

**The mod-to-product pipeline.** PUBG demonstrates that community modding can generate genre-defining standalone products. Greene designed battle royale mods for ArmA 2 and ArmA 3, accumulated a community, was hired by Daybreak to build an official mode for H1Z1, then founded his own studio to build a standalone game. Each stage involved a larger team, more resources, and a design brief refined by observing player behaviour in the previous version. Modding communities are a form of design research infrastructure: they test ideas at scale with motivated players and provide honest feedback through play behaviour that precedes and outperforms market research. PUBG's design — and the entire battle royale genre that followed it — originated in this pipeline.
