---
title: "Splitgate"
developer: "1047 Games"
publisher: "1047 Games"
year: 2021
genres: ["FPS", "arena shooter", "multiplayer"]
playtime: 2.3
steam_rating: 90.15
description: "Splitgate is a free-to-play arena shooter that integrates player-controlled portals into a traditional Halo-style gunplay framework. It demonstrates how a single novel mechanic can transform every inherited element of a genre — movement, positioning, line of sight, and map design — without requiring a complete genre reinvention. Built in a college dorm as a UE4 prototype, it reached 15 million downloads and 200,000 concurrent players after a viral moment in 2021."
design_tags: ["FPS design", "portals", "genre fusion", "multiplayer", "level design", "emergent gameplay", "viral design"]
resources:
  - type: interview
    title: "Splitgate: Arena Warfare Infuses Elements of Halo and Portal to Create a New Breed of FPS"
    speaker: "Ian Proulx"
    source: "Unreal Engine / Epic Games"
    year: 2019
    duration: "10 min read"
    summary: "An Unreal Engine developer spotlight with 1047 Games co-founder Ian Proulx on designing Splitgate's portal system. Covers how early playtests led the team away from Portal-like puzzle geometry toward traditional FPS maps with portal walls placed strategically — a critical design pivot. Discusses the 'easy to learn, impossible to master' philosophy and how portals force opponents to track three-dimensional positions rather than two-dimensional ones."
    url: "https://www.unrealengine.com/developer-interviews/splitgate-arena-warfare-infuses-elements-of-halo-and-portal-to-create-a-new-breed-of-fps"
  - type: article
    title: "We Were Just Fighting to Keep the Lights On"
    author: "Bryant Francis"
    source: "Game Developer"
    year: 2022
    duration: "10 min read"
    summary: "A retrospective interview with 1047 Games founder Ian Proulx on Splitgate's near-failure and unexpected viral success in 2021. Discusses what design decisions contributed to rapid organic spread, including the portal mechanic's streaming-friendliness, and Proulx's lessons about scalable game architecture that he carried into Splitgate's successor project."
    url: "https://www.gamedeveloper.com/design/-we-were-just-fighting-to-keep-the-lights-on-1047-games-founder-on-ditching-splitgate-to-create-a-scalable-sequel-that-can-prosper"
  - type: interview
    title: "Splitgate, One Year Later: CEO Talks Going Beyond 'Halo Meets Portal'"
    speaker: "Ian Proulx"
    source: "Gamepur"
    year: 2022
    duration: "8 min read"
    summary: "An interview with Ian Proulx one year after Splitgate's breakout success, discussing the limits of the 'Halo meets Portal' elevator pitch and how the team thinks about the portal mechanic in terms of depth rather than novelty. Includes discussion of map design philosophy and how portals reward players who develop advanced spatial intuition over those who approach it as a gimmick."
    url: "https://www.gamepur.com/features/splitgate-ceo-interview-halo-meets-portal-talk-triple-a-aim"
---

## Design Notes

**Meeting players before introducing novelty.** Splitgate's central design idea — introducing portals into a Halo-style arena shooter — is less simple to execute than to describe. 1047 Games had to resist the temptation to build the game around portals and instead build portals into an existing game. Early prototypes used Portal-like level geometry that required portal thinking to navigate at all. Playtests revealed this alienated FPS players who found the geometry confusing before the portals became interesting. The critical design revision — traditional FPS maps with portal-friendly walls placed strategically — is a lesson in meeting players inside their existing competencies before introducing novelty. The genre familiarity provides the ground; the novel mechanic grows from it.

**Portals as spatial multipliers.** In a conventional arena shooter, the geometry of a map defines a fixed set of lines of sight, flanking routes, and elevation differentials. Splitgate's portals allow players to create new routes through that geometry dynamically. A sniper position impregnable in a conventional map can be flanked through a wall. This does not break map design — it changes what good map design means. 1047 Games designed maps to have specific portal-compatible walls, constraining the portal-space to reward predictable advanced play rather than producing arbitrary chaos. The lesson for map designers: portals require deliberate negative-space planning. Where portals cannot go shapes what the mechanic accomplishes as much as where they can go.

**Tiered depth as onboarding design.** Splitgate positions the portal system as a high-skill ceiling element that beginners can ignore. A new player can play the game as a conventional arena shooter using existing gunplay alone — portals are available but not required, meaning the onboarding cost is low. As players develop, portals offer increasing depth: defensive use, offensive use, positional use. This tiered depth — accessible entry, genuine ceiling — follows the "easy to learn, impossible to master" model explicitly stated as a design target. The game does not punish players for not using portals; it rewards players who master them, which is a different incentive structure with different player experience implications.

**Mechanic-as-content for streaming.** Splitgate's viral moment in 2021 was partly a function of spectacle. Portal plays in an arena shooter are visually dramatic, easy for spectators to understand, and produce moments of genuine surprise. The mechanic lends itself to highlight clips because portal use demonstrates spatial intelligence in a legible way — the audience can see what the player planned and admire the execution. This is an underappreciated design quality: mechanics that read clearly to non-players have inherent marketing properties that mechanics requiring insider knowledge do not. Designing for spectator clarity — not just player clarity — is a consideration that applies beyond the streaming era.

**Single innovation as complete redesign.** Splitgate demonstrates that a single novel mechanic applied consistently can redesign the feel of an entire genre without requiring new weapons, modes, or progression systems. Every element of the conventional arena shooter — movement, line of sight, cover, flanking routes, zone control — changes its character when portals are available. This is an argument for depth-first mechanics: rather than adding many new things, introduce one thing that multiplies the depth of everything already present. The risk of the strategy is that the single mechanic must genuinely interact with everything; a mechanic that sits beside genre conventions rather than transforming them produces novelty without depth.
