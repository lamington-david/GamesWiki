---
title: "Bastion"
developer: "Supergiant Games"
publisher: "Warner Bros. Interactive Entertainment"
year: 2011
genres: ["action RPG", "indie"]
playtime: 9.9
steam_rating: 93.39
description: "Supergiant Games' debut title, developed by seven people over two years without external funding, introduced one of the most imitated narrative devices in game design: a reactive narrator who comments on the player's actions in real time. Beyond the narration, Bastion is a case study in bootstrap indie development — how a tiny team built a critically acclaimed action RPG by ruthlessly controlling scope."
design_tags: ["narrative design", "dynamic narration", "indie development", "bootstrap funding", "audio design", "isometric action"]
resources:
  - type: documentary
    title: "The Making of Bastion"
    speaker: "Supergiant Games"
    source: "Noclip / YouTube"
    year: 2020
    duration: "40 min"
    summary: "Noclip's retrospective documentary on Bastion's creation, featuring the full Supergiant team reflecting on the studio's formation, the game's development under self-imposed financial constraints, and how they shipped a debut title to critical acclaim on a team of seven. Covers the decision to self-fund, the bootstrap development model, and how Bastion established the studio's subsequent identity."
    url: "https://www.youtube.com/watch?v=uo7TcJ2E0-I"
  - type: gdc_talk
    title: "Maximizing Risk: The Building of Bastion"
    speaker: "Amir Rao, Gavin Simon"
    source: "GDC 2012 / GDC Vault"
    year: 2012
    duration: "60 min"
    summary: "Co-founders Amir Rao and Gavin Simon detail how they quit EA in 2009 to start Supergiant without external funding, then shipped Bastion twenty months later with a team of seven. Covers the studio formation, funding strategy, prototyping process, and production methodology — a rare account of how to take the risk of starting an indie studio seriously without safety nets."
    url: "https://gdcvault.com/play/1015193/Maximizing-Risk-The-Building-of"
  - type: gdc_talk
    title: "Build That Wall: Creating the Audio for Bastion"
    speaker: "Darren Korb"
    source: "GDC 2012 / GDC Vault"
    year: 2012
    duration: "50 min"
    summary: "Audio Director Darren Korb explains how he created Bastion's critically acclaimed 'acoustic frontier trip-hop' soundtrack, recorded 3,000 narrator lines with Logan Cunningham in a closet, and built the reactive sound design — all as a one-person audio department on a shoestring budget. A practical account of how to do AAA-quality audio work under indie constraints."
    url: "https://gdcvault.com/play/1015553/Build-That-Wall-Creating-the"
  - type: article
    title: "Interview: Storytelling Through Narration in Bastion"
    author: "Game Developer Staff"
    source: "Game Developer"
    year: 2011
    duration: "10 min read"
    summary: "Greg Kasavin and Amir Rao discuss how the reactive narration system emerged — simultaneously a worldbuilding tool, a tutorial replacement, and a story delivery mechanism. Covers the specific design logic of why narration tied to player action works better than cutscenes for an isometric action game, and how the system was scoped to stay within a small team's production capacity."
    url: "https://www.gamedeveloper.com/design/interview-storytelling-through-narration-in-i-bastion-i-"
---

## Design Notes

**Reactive narration as a design solution to multiple problems at once.** The narrator who comments on the Kid's actions in real time is often cited as Bastion's defining feature, but its design purpose goes beyond atmosphere. The narration serves as a tutorial (explaining mechanics as the player encounters them), a worldbuilding mechanism (the narrator's voice is the primary exposition channel), and an emotional amplifier (the same actions feel weightier when witnessed and named). This multi-function efficiency is characteristic of good indie design — a single system doing the work of three. The key constraint is that it only works when the narration responds to specific player actions rather than playing as ambient commentary; the reactive specificity is what creates the illusion of a world noticing what you do.

**Bootstrap development as a scope control mechanism.** Supergiant started with two founders — Amir Rao and Gavin Simon — who quit EA without external funding, lived cheaply, and hired the smallest team they thought could ship the game. This financial constraint imposed a discipline that's visible in the design: Bastion has no mechanics that don't directly serve the core loop, no modes that exist without a clear purpose, and no systems that couldn't be built by seven people in twenty months. The game's relative tightness — short by genre standards, focused in its action RPG mechanics — is a product of scope decisions made under resource pressure. The studio's subsequent games (Transistor, Pyre, Hades) maintained this discipline even as the team grew.

**One-person audio as creative unity.** Darren Korb created all of Bastion's music and sound design, recorded the narrator, and mixed the audio alone. This constraint — unusual even for indie games — produced an unusual coherence: Bastion's audio world feels designed as a unified system because it was. The "acoustic frontier trip-hop" aesthetic, the specific quality of Logan Cunningham's vocal delivery, and the way ambient sound integrates with the soundtrack all reflect a single person's decisions. The production approach — recording in a closet, composing on consumer equipment in an apartment — demonstrates that audio identity is primarily a creative discipline and secondarily a resource question.

**The Who Knows Where challenge rooms and optional difficulty.** Bastion's optional challenge rooms function as the game's difficulty system without being presented as a difficulty setting. Players choose whether to enter them, what they offer is clearly communicated, and the game doesn't require them to proceed. This design approach — optional challenge that rewards engagement rather than gating progress — sits alongside the game's broader accessibility philosophy. The Shrine system, which lets players enable optional handicaps on enemies for increased rewards, gives experienced players depth without punishing newcomers. Together these systems represent a considered approach to difficulty as a spectrum of choices rather than a binary setting.

**The ending as a design statement.** Bastion's two-ending structure, offered to the player as a final choice, reframes the entire preceding game as the backstory for a moral decision. The game earns this because its world, delivered through narration across the run, has made the stakes of both options clear. It's a structural trick — the interactive medium's capacity to make a choice feel personal — deployed at the moment of maximum emotional investment. The lesson is that branching narrative design doesn't require branching throughout the game; a single meaningful choice at the end, properly set up, can create the sensation of agency across the whole experience.
