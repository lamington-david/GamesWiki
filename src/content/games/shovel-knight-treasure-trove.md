---
title: "Shovel Knight: Treasure Trove"
developer: "Yacht Club Games"
publisher: "Yacht Club Games"
year: 2017
genres: ["platformer", "action", "indie"]
playtime: 2.1
steam_rating: 93.17
description: "Yacht Club Games' definitive NES-inspired platformer collection, covering four full campaigns that collectively represent one of the most exhaustively documented indie design processes in the medium. Shovel Knight's development writings — boss breakdowns, mobility analyses, secret design — offer an unusually transparent window into how a small team rebuilds retro craftsmanship from first principles."
design_tags: ["retro design", "platformer", "boss design", "game feel", "NES-inspired", "level design", "secrets"]
resources:
  - type: article
    title: "Game Design Deep Dive: Unlocking Chester in Shovel Knight"
    author: "David D'Angelo"
    source: "Game Developer"
    year: 2014
    duration: "8 min read"
    summary: "Yacht Club programmer David D'Angelo traces the evolution of Chester, the secret in-stage merchant, from a simple chest to a design solution for making hidden areas worth seeking. Illustrates how the team worked backwards from 'what is the reward worth pursuing?' and arrived at a character whose in-stage discount creates a mechanical reason for exploration."
    url: "https://www.gamedeveloper.com/design/game-design-deep-dive-unlocking-chester-in-shovel-knight"
  - type: article
    title: "How Yacht Club Games Created Shovel Knight's Specter Knight, Plague Knight, and Propeller Knight Bosses"
    author: "David L. Craddock"
    source: "Game Developer"
    year: 2018
    duration: "10 min read"
    summary: "Adapted from Boss Fight Books' Shovel Knight volume, this piece reveals how the team approached each boss as a character whose combat vocabulary had to express personality. Discusses cinematic attack timing, the decision to give players enough warning on telegraphed moves, and how difficulty was tuned for players who were encountering the boss for the first time versus speedrunners."
    url: "https://www.gamedeveloper.com/design/how-yacht-club-games-created-shovel-knight-s-specter-knight-plague-knight-and-propeller-knight-bosses"
  - type: article
    title: "Dissecting Design: Shovel Knight's Modern Retro Design"
    author: "Game Developer Staff"
    source: "Game Developer"
    year: 2014
    duration: "7 min read"
    summary: "Analyses Yacht Club's core thesis — that NES-era constraints were creative opportunities rather than limitations — and how the team identified which elements of retro games to emulate and which to leave behind. Particularly useful on the topic of mathematical precision in 2D movement and why Shovel Knight's jump physics feel 'right' in ways that modern platformers often don't."
    url: "https://www.gamedeveloper.com/design/dissecting-design-shovel-knight-s-modern-retro-design"
  - type: interview
    title: "Shovel Knight Interview with Developer David D'Angelo"
    speaker: "David D'Angelo"
    source: "YouTube"
    year: 2015
    duration: "15 min"
    summary: "D'Angelo discusses retro game inspirations, the Kickstarter campaign's role in shaping the game's scope, and how feedback during development influenced specific mechanical decisions. A conversational counterpart to the technical writing elsewhere in the design canon."
    url: "https://www.youtube.com/watch?v=2VUy74qzups"
---

## Design Notes

**Modern retro design is a thesis, not an aesthetic.** Yacht Club Games made a core distinction that separates Shovel Knight from simple nostalgia games: they were not trying to recreate NES games but to identify which design principles from that era remain valid and rebuild them with modern craft. The question they kept asking was "why does this classic mechanic feel right?" rather than "how do we replicate this mechanic?" This meant abandoning NES limitations that produced bad outcomes (arbitrary deaths, poor feedback, limited accessibility) while preserving the ones that produced good outcomes (tight controls, precise jump physics, character-expressive level design). The resulting game feels genuinely retro without being a museum piece.

**Jump mathematics as the foundation of game feel.** D'Angelo's public design writing repeatedly emphasises what he calls the "jump math" principle: if a player jumps at a specific point, they should land at a predictable, learnable location. This precision — where movement feels deterministic rather than approximate — is the quality that made NES platformers feel satisfying to master and is also what many modern platformers abandon in favour of floaty, forgiving controls. Shovel Knight rebuilds this precision deliberately, with the result that expert play looks and feels meaningfully different from beginner play. The shovel drop mechanic (bouncing off enemies and certain objects) extends this mathematical quality into vertical space, giving the game a second axis of precision movement.

**Boss design as character expression.** Every boss in Shovel Knight was conceived as a personality first and a combat encounter second. The design process started with "who is this character and how do they move?" rather than "what attack patterns would be interesting?" This inversion means that fighting a boss communicates something about them — Specter Knight fights like someone who has given up on effort, with lazy, powerful swings; Plague Knight fights like someone excited and erratic. The design team also made a deliberate choice about telegraphing: cinematic attacks that disappear the boss from the screen before reappearing work only if the boss reappears quickly and predictably. Every dramatic moment was tested against the question "does the player have enough time and information to respond?"

**The DLC campaigns as design laboratories.** The campaigns added after the original game — Plague of Shadows, Specter of Torment, King of Cards — each explore a distinct mobility vocabulary using the same levels. Plague Knight's bomb-jumping system makes familiar stages disorienting; Specter Knight's wall-slash movement rewards momentum-reading; King of Cards' card game integration adds a meta-layer absent from the main game. What makes this useful as a design reference is that it demonstrates how identical map geometry can produce fundamentally different experiences through movement systems alone. Yacht Club used the campaigns to experiment with mobility design in a controlled environment where the level layouts were already tested and understood.

**Secrets as a reward ecosystem, not a checklist.** Shovel Knight's hidden content is designed around the concept that secrets should feel discovered rather than collected. The Chester system exemplifies this: finding the merchant in a level gives you a discount on the stage's relic, creating a tangible benefit that justifies the detour. The game also uses false walls, unusual traversal paths, and environmental cues (a suspiciously placed platform, a gap that suggests something beyond it) in the tradition of NES games where secrets were communicated through implication rather than UI markers. D'Angelo's deep dive on Chester is a model example of designing a system backwards from "what makes the player feel rewarded?" and arriving at an elegant solution.
