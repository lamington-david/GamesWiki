---
title: "Dishonored 2"
developer: "Arkane Studios"
publisher: "Bethesda Softworks"
year: 2016
genres: ["immersive sim", "action", "stealth"]
playtime: 4.2
steam_rating: 88.22
description: "Arkane Studios' definitive statement on the immersive sim genre, Dishonored 2 offers two playable protagonists with distinct power sets and levels designed to accommodate every conceivable approach. Missions like the mechanical Clockwork Mansion and the time-bending Crack in the Slab have become benchmark case studies in systemic level design."
design_tags: ["immersive sim", "level design", "player agency", "AI design", "stealth", "systemic design", "world-building"]
resources:
  - type: gdc_talk
    title: "Holistic Level Design in Dishonored 2 and Immersive Sims"
    speaker: "Steve Lee"
    source: "GDC / YouTube"
    year: 2017
    duration: "50 min"
    summary: "Level designer Steve Lee argues that immersive sim levels must be designed holistically — each element (gameplay, presentation, narrative) informing every other. Covers affordances, intentionality, world-building, and the interactive storytelling that emerges from their intersection, using Dishonored 2 as the primary case study throughout."
    url: "https://www.youtube.com/watch?v=NO1lvc3ikXE"
  - type: gdc_talk
    title: "Taking Back What's Ours: The AI of Dishonored 2"
    speaker: "Arkane Studios"
    source: "GDC / YouTube"
    year: 2017
    duration: "40 min"
    summary: "A deep technical dive into the NPC AI architecture underpinning Dishonored 2's stealth sandbox. Covers multi-agent coordination, spatial reasoning for search and patrol behaviour, and the data-driven rule system governing guard dialogue and animation reactions — the systems that make player-authored stealth encounters feel genuinely legible."
    url: "https://www.youtube.com/watch?v=VoXSJBVqdek"
  - type: article
    title: "Level Design Deep Dive: Dishonored 2's Clockwork Mansion"
    author: "Dana Nightingale"
    source: "Game Developer"
    year: 2017
    duration: "15 min read"
    summary: "Level designer Dana Nightingale explains how she built a mansion whose rooms mechanically transform when players pull levers — creating two overlapping level geometries. The central challenge was ensuring players navigating the industrial 'backstage' always maintain a spatial relationship to the ornate 'front of house' spaces they are circumventing."
    url: "https://www.gamedeveloper.com/design/level-design-deep-dive-i-dishonored-2-s-i-clockwork-mansion"
  - type: interview
    title: "Dishonored 2 Director Harvey Smith on Creating Compelling Worlds"
    speaker: "Harvey Smith"
    source: "Game Developer"
    year: 2016
    duration: "10 min read"
    summary: "Co-creative director Harvey Smith discusses how Arkane gives players personal stakes in a living world, how the chaos system tracks player lethality to modulate the world's visible state, and why immersive sims demand that every system be readable enough for players to form genuine hypotheses about their options before committing to them."
    url: "https://www.gamedeveloper.com/design/-i-dishonored-2-i-director-harvey-smith-on-creating-compelling-worlds"
---

## Design Notes

**The immersive sim as design stance, not feature list.** Dishonored 2 is the genre's clearest demonstration that "immersive sim" describes a design commitment rather than a set of mechanics: every system must be legible enough for players to form genuine hypotheses, and the level must let those hypotheses play out. Players can observe a guard patrol, read the architecture for alternate routes, and predict whether a particular power combination will succeed — then test it. Arkane's consistent goal was to maximise player-authored moments per hour while keeping every system readable enough that experimentation feels confident rather than random. When a mechanic is too opaque to theorise about, it fails the genre's core contract.

**Two protagonists as design multiplier.** Offering Emily and Corvo is not a cosmetic decision — it doubles the systemic design surface of every level. Each power set demands the level provide different traversal affordances, different vertical opportunities, different uses of cover and line-of-sight. Every mission must be solvable as a time-stopping Corvo, a shadow-stepping Emily, or a pure no-powers stealth run. The discipline required to guarantee this across every encounter is what separates Dishonored 2's level design ambition from contemporaries: levels were not built around one intended solution that players could optionally vary, but around genuinely divergent strategies from the ground up.

**The Clockwork Mansion as dual-layer level design.** The mansion's mechanically transforming rooms — toggled by levers that rearrange walls and floors — create two overlapping level geometries: the ornate public-facing mansion and the industrial backstage. The primary design challenge was not building the transformation itself but ensuring that players navigating backstage always maintained a cognitive map of their relationship to the front of house. Visual and audio connections between layers were carefully engineered so that traversing through machinery never felt like entering a disconnected space. This solved the classic dual-layer level problem: when players lose spatial awareness of the primary space, the alternative path stops feeling like a clever parallel choice and becomes a confusing detour.

**NPC AI as the engine of stealth authorship.** Dishonored 2's guard AI was designed with multi-agent coordination at its core: guards share information, investigate in coordinated patterns, and escalate through alert states in ways that create legible, player-readable pressure. This depth is what makes stealth feel authored rather than accidental — players can predict guard responses, exploit coordination seams, and chain interactions into coherent plans. When AI is too simple, stealth reduces to waiting; when it is too complex, it becomes unreadable. Dishonored 2's AI sits precisely at the productive point where it is sophisticated enough to be interesting but patterned enough to be understood and manipulated.

**World-building as moral feedback.** The chaos system — tracking player lethality and modulating the world's visible state in response — serves a narrative function as much as a mechanical one. A high-chaos city fills with plague rats and hardened guards; a low-chaos city is visibly calmer. This makes player moral choices legible as world-states rather than abstract scores. Harvey Smith has consistently described this as the key design challenge: making the world feel like it genuinely responds to the player's behaviour rather than simply incrementing a counter. The environment becomes the moral ledger, ensuring that even players who never check a chaos rating understand what their choices are doing to the world they inhabit.
