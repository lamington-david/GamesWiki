---
title: "Darkest Dungeon"
developer: "Red Hook Studios"
publisher: "Red Hook Studios"
year: 2016
genres: ["roguelite", "RPG", "strategy", "gothic horror"]
playtime: 1.7
steam_rating: 90.55
description: "A gothic roguelite RPG from Canadian studio Red Hook Studios built around the Affliction System — a stress mechanic that gives adventuring heroes persistent psychological disorders as trauma accumulates. Darkest Dungeon is a canonical reference for designing games about loss and attrition, and for the experience of developing a game publicly on Steam Early Access for over a year."
design_tags: ["stress mechanics", "roguelite", "gothic horror", "affliction systems", "Early Access development", "player psychology", "party management"]
resources:
  - type: gdc_talk
    title: "Darkest Dungeon: A Design Postmortem"
    speaker: "Tyler Sigman"
    source: "GDC 2016 / YouTube"
    year: 2016
    duration: "60 min"
    summary: "Tyler Sigman covers the greatest design challenges Red Hook faced combining classic party-based CRPGs, boardgames, roguelikes, and wargames into a cohesive experience. Discusses how Early Access forced real-time design iteration under community pressure, what went right and wrong with the stress system, and the practical lessons of making a difficult game more accessible without compromising its identity."
    url: "https://www.youtube.com/watch?v=0IUaGQhlPwo"
  - type: article
    title: "Game Design Deep Dive: Darkest Dungeon's Affliction System"
    author: "Chris Bourassa, Tyler Sigman"
    source: "Game Developer"
    year: 2016
    duration: "12 min read"
    summary: "Bourassa and Sigman explain the design rationale behind the Affliction System — how heroes develop selfish, paranoid, abusive, or hopeless behaviours under stress, and how these behaviours interact with party dynamics. Covers the inspiration from wargame morale systems and war films (Aliens, The Thing), and why the human response to stress was chosen as the core design concept over Lovecraftian horror alone."
    url: "https://www.gamedeveloper.com/design/game-design-deep-dive-i-darkest-dungeon-s-i-affliction-system"
  - type: article
    title: "Darkest Dungeon: Designing for Despair, and Kicking You When You're Down"
    author: "Chris Bourassa, Tyler Sigman"
    source: "Game Developer"
    year: 2016
    duration: "10 min read"
    summary: "Interview with Bourassa and Sigman addressing whether Darkest Dungeon's punishing difficulty limits its audience — and why Red Hook chose to embrace that limitation rather than soften it. Covers the relationship between the stress mechanic and the emotional reality of game development crunch, and the team's philosophy that fairness and difficulty are not mutually exclusive."
    url: "https://www.gamedeveloper.com/business/-i-darkest-dungeon-i-designing-for-despair-and-kicking-you-when-you-re-down"
  - type: article
    title: "Road to the IGF: Red Hook Studios' Darkest Dungeon"
    author: "Game Developer Staff"
    source: "Game Developer"
    year: 2016
    duration: "8 min read"
    summary: "Pre-launch interview covering Red Hook's design concept origins — the observation that RPGs tend to treat adventuring through a romanticised lens where heroes are immutable and aspirational, and the decision to invert that premise by making psychological fragility the central mechanic. Covers the Kickstarter process and the team's approach to Early Access development."
    url: "https://www.gamedeveloper.com/audio/road-to-the-igf-red-hook-studios-i-darkest-dungeon-i-"
---

## Design Notes

**The psychological cost of adventuring as the core mechanic.** Most RPGs treat the hero's mind as permanent and the hero's body as the resource being managed. Darkest Dungeon inverts this: hit points can be restored with bandages; stress cannot be easily removed, and when it peaks, heroes develop lasting psychological conditions — Afflictions — that alter their behaviour for the rest of the expedition. The design premise, as Bourassa and Sigman describe it, is that adventuring should have a psychological toll, because it does in every meaningful account of warfare, exploration, and survival. This premise generates the game's distinctive emotional register: dread not of failure but of the incremental degradation of resources you cannot fully control.

**The Affliction System as party-level design.** When a hero becomes afflicted — selfish, paranoid, hopeless, masochistic — the effect is not just on that hero's combat performance but on the entire party's morale. A selfish hero may take party supplies for themselves; a paranoid hero may attack an ally; an abusive hero will demoralise others with verbal cruelty. This turns the Affliction System into a party management problem rather than a simple individual-resource problem: the player must manage not just each hero's stress level but the way in which afflicted behaviours interact with each other. The inspiration was wargame morale systems and the portrayal of group psychology under extreme stress in films like Aliens and The Thing, where the social dynamics of a small group under pressure become as threatening as the external enemy.

**Developing publicly under community pressure.** Darkest Dungeon launched on Steam Early Access in January 2015 and remained in Early Access for a year, during which Red Hook made significant design changes — including controversial adjustments to the healing system and the deathblow mechanic — in response to player feedback. Sigman has described Early Access development as "like working while naked in a transparent cube suspended above Times Square," with every design decision visible and debated in real time. The practical lessons Red Hook drew from this experience are unusually specific: the importance of communicating design intent rather than just mechanics when making changes, the danger of optimising for the loudest community voices, and the value of having a clear articulated design philosophy to return to when player feedback pulled in conflicting directions.

**Readable art direction under extreme stylisation.** Darkest Dungeon's aesthetic — Chris Bourassa's ink-heavy gothic comic art, the narrated doom-laden commentary, the extreme colour palette desaturation — is so stylised that it operates as a distinct design argument: that horror is communicated through tone and texture as much as through mechanics. But beneath the stylisation, the art direction serves strict functional requirements. Enemy telegraphing is readable through silhouette; hero condition is readable through posture and expression; the dungeon environment communicates threat level through lighting and decoration. Bourassa's design achievement is art that maintains extreme stylistic consistency while remaining functionally legible under the cognitive load of party management decisions.

**Accepting attrition as the design's honest position.** Where most roguelites reset the player to a clean state on death, Darkest Dungeon retains consequence even across runs: the estate persists, the stress on surviving heroes persists, and dead heroes are replaced by new recruits who carry none of their predecessors' accumulated power. The game's honest position — that you can always improve your situation even if you cannot win the current fight — is its design thesis. Sigman has articulated this as a rejection of the RPG fantasy that a player who prepares correctly can succeed inevitably. The design accepts that players will lose heroes, that campaigns will sometimes end badly, and that this acknowledgment of adventuring's actual cost is more interesting than a system designed to guarantee victory for sufficiently patient players.
