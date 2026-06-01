---
title: "FAITH"
developer: "Airdorf Games"
year: 2022
genres: ["horror", "action", "indie"]
playtime: 7.5
steam_rating: 92.06
description: "A lo-fi horror game rendered in CGA-style graphics where a priest performs exorcisms in a haunted farmhouse. FAITH uses severe technical limitation — 192x160 pixels, four colours — to create horror that is more unsettling than photorealism, proving that abstraction can be more frightening than explicit imagery."
design_tags: ["lo-fi aesthetics", "constraint-driven design", "horror design", "minimalism", "sound design", "player trust"]
resources:
  - type: gdc_talk
    title: "The Art of FAITH — Horror at 192x160 Pixels"
    speaker: "Mason Smith (Airdorf)"
    source: "GDC Vault"
    year: 2022
    summary: "Airdorf explains how designing at extreme pixel resolution forces every visual element to be intentional — there are no accidental details. He covers the rotoscoped animation technique used for cutscenes (originally done with a mouse, later a drawing tablet), how CGA's four-colour palette creates eerie abstraction, and why horror benefits from showing less rather than more."
    url: "https://www.gdcvault.com/play/1026045/The-Art-of-FAITH-Horror"
  - type: gdc_talk
    title: "MORTIS 101 — FAITH's Horror Design Toolkit"
    speaker: "Mason Smith (Airdorf)"
    source: "GDC Vault"
    year: 2023
    summary: "The eight-part horror design toolkit Airdorf developed while making the FAITH trilogy. He covers embracing vulnerability, earning and then betraying player trust, turning game mechanics against the player, the ethics of telegraphing scares in advance, and why horror is enhanced — not diminished — by giving players information about what's coming. Practical and unusually honest about what works versus what doesn't."
    url: "https://www.gdcvault.com/play/1027195/MORTIS-101-FAITH-s-Horror"
  - type: article
    title: "Using Minimalism to Channel the Fear of the Unknown in FAITH"
    source: "Game Developer"
    year: 2022
    summary: "Analysis of how FAITH: The Unholy Trinity generates dread through restraint — enemy designs that are readable but not fully defined, audio cues that prime the imagination before anything appears on screen, and level layouts that funnel the player into vulnerable positions without feeling unfair. The piece examines minimalism not as a budget constraint but as a deliberate horror tool."
    url: "https://www.gamedeveloper.com/design/faith-the-unholy-trinity"
  - type: interview
    title: "Digging into the Low-Poly Horror Vibes of Airdorf's FAITH and Hatching"
    author: "Bryant Francis"
    source: "Game Developer"
    year: 2023
    summary: "Interview with Airdorf about his evolving aesthetic between FAITH Chapter III and his next project Hatching — the transition from CGA to low-poly 3D while maintaining the same philosophy of horror through abstraction. He discusses teaching game design and how explaining horror mechanics to students sharpened his own understanding of what makes FAITH work."
    url: "https://www.gamedeveloper.com/design/airdorf-interview"
  - type: interview
    title: "The FAITH Series Draws On 'A Library Of Horror Films'"
    author: "GameMaker"
    source: "GameMaker Blog"
    year: 2022
    summary: "Airdorf's account of the horror film influences behind FAITH's visual language and pacing — specifically the 1970s-80s Christian horror and VHS-era low-budget genre films that he studied as a library of techniques. He explains how translating cinematic horror conventions into a top-down pixel game forced him to understand what each technique was actually doing emotionally, rather than just what it looked like."
    url: "https://gamemaker.io/en/blog/faith-interview"
---

## Design Notes

FAITH's central insight is that technical limitation is not a barrier to horror — it's often the mechanism of it. The game was made in GameMaker with CGA-era constraints, and every design decision flows from the question: what can you do with this almost nothing?

**The gap between representation and imagination.** At 192x160 pixels, enemies are suggestions. The player's brain fills in the gap between the abstract pixel cluster and what it might represent — and the imagination is always worse than explicit imagery. Airdorf understood this and leaned into it.

**Earning trust before breaking it.** One of Airdorf's explicit design tools is the trust cycle: establish that the game behaves consistently, give the player tools that work, build confidence — then use those same tools against the player. The exorcism mechanic that saves you early in the game becomes a source of tension later because you've learned to rely on it.

**Sound as primary carrier.** FAITH's audio design punches well above its visual weight class. The distorted speech audio (later revealed to be reversed/scrambled Bible verses), the ambient drones, and the specific sound signatures of enemies do more horror work than the visuals. Design lesson: in a visually constrained game, audio fills the space.

**Telegraphing doesn't reduce fear.** Counterintuitively, telling players what's about to happen can heighten dread rather than reduce it. Knowing a scare is coming creates anticipatory anxiety. FAITH uses this deliberately — signs, warnings, and audio cues that announce approaching threats are scarier than jump scares.
