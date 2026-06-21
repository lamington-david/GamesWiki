---
title: "Into the Breach"
developer: "Subset Games"
publisher: "Subset Games"
year: 2018
genres: ["strategy", "turn-based", "roguelike"]
playtime: 4.5
steam_rating: 92.08
description: "A minimalist turn-based strategy game from the makers of FTL that treats perfect information as its core design pillar. Every enemy action is telegraphed one turn in advance, converting each encounter into a legible spatial puzzle — a deliberate rejection of strategy game opacity that took four years and numerous cut systems to achieve."
design_tags: ["perfect information", "UI clarity", "puzzle design", "roguelike", "failure design", "telegraphed mechanics"]
resources:
  - type: gdc_talk
    title: "Into the Breach Design Postmortem"
    speaker: "Matthew Davis"
    source: "GDC 2019 / YouTube"
    year: 2019
    duration: "59 min"
    summary: "Subset Games co-founder Matthew Davis walks through the entire design process of Into the Breach — from early prototypes through four years of iteration, cut content, and balancing decisions. Covers the pivot from a more traditional strategy game to the telegraphed-attack system, how the UI design philosophy emerged, and specific cut mechanics that would have undermined the game's clarity."
    url: "https://www.youtube.com/watch?v=s_I07Iq_2XM"
  - type: video
    title: "The Design of FTL and Into the Breach"
    speaker: "Justin Ma, Matthew Davis"
    source: "Noclip / YouTube"
    year: 2019
    duration: "35 min"
    summary: "Noclip's documentary-style interview with both Subset Games founders tracing the design DNA connecting FTL to Into the Breach. Discusses how lessons from FTL's randomness and player frustration directly shaped Into the Breach's commitment to giving players complete information, and how they approached the challenge of following up a breakthrough hit."
    url: "https://www.youtube.com/watch?v=BT-qkoaeGrw"
  - type: article
    title: "Into the Breach Dev on UI Design: 'Sacrifice Cool Ideas for the Sake of Clarity Every Time'"
    author: "Alex Wawro"
    source: "Game Developer"
    year: 2018
    duration: "8 min read"
    summary: "Justin Ma explains the UI design philosophy that makes Into the Breach readable at a glance — every unit shows its intended target with an arrow, every attack shows its effect on the grid before execution. Ma's central principle was ruthless: if a mechanic or UI element couldn't be communicated clearly to the player at the moment they needed it, it was cut, regardless of how interesting it was in isolation."
    url: "https://www.gamedeveloper.com/design/-i-into-the-breach-i-dev-on-ui-design-sacrifice-cool-ideas-for-the-sake-of-clarity-every-time-"
  - type: article
    title: "Reimagining Failure in Strategy Game Design in Into the Breach"
    author: "Game Developer Staff"
    source: "Game Developer"
    year: 2018
    duration: "7 min read"
    summary: "Examines how Into the Breach reframes failure through its time-travel narrative framing — the player's mech pilots jump back when the timeline is lost, carrying memories forward. The article analyses how this mechanical framing makes runs feel consequential even when lost, and how the game distinguishes between failure-as-lesson and failure-as-frustration."
    url: "https://www.gamedeveloper.com/design/reimagining-failure-in-strategy-game-design-in-i-into-the-breach-i-"
---

## Design Notes

**Telegraphed attacks as the game's central idea.** Into the Breach shows every enemy's intended target with an arrow on the grid before the player takes their turn. This single design decision is the game's entire identity. Where strategy games typically use hidden information or fog of war to create tension, Into the Breach creates tension through the opposite — you can see everything that's about to happen, and your job is to find a move that prevents as much damage as possible. The game's difficulty is not about uncovering information; it's about finding solutions within perfect information. This distinction separates Into the Breach from virtually every strategy game that preceded it.

**Clarity above all other design values.** Justin Ma's stated design principle — sacrifice cool ideas for clarity, every time — produced a game that appears sparse but is extraordinarily legible. Each unit communicates its state visually: health, attack range, intended action. The grid communicates threats, hazards, and outcomes before they happen. This legibility makes the game feel fair in a way that few strategy games achieve; when you lose a grid tile, you understand exactly why. The design lesson is that restraint in system design — actively cutting interesting-but-confusing mechanics — can produce a richer player experience than addition does.

**FTL's failures as the design brief.** Subset Games has been direct about the fact that Into the Breach was designed partly in response to frustrations players had with FTL. FTL's randomness could kill runs in ways that felt unfair — equipment RNG, event outcomes, late-game spikes — and players sometimes felt that defeat was the game's fault, not theirs. Into the Breach was built to ensure that every loss was traceable to a player decision. The random elements that remain — Vek spawn positions, available pilots — are clearly surfaced before they affect the board state. The goal was a game where players could always feel like they lost because of themselves.

**The puzzle game hiding inside the roguelike.** Despite its roguelike structure, each turn of Into the Breach is effectively a spatial logic puzzle with a small number of units, a defined set of actions, and a set of constraints to satisfy. This makes the micro-level design feel more like the Witness or Baba Is You than XCOM — there's often a correct solution, or a set of nearly-correct solutions, that a patient player can find. The roguelike framing adds run-to-run variety and stakes, but the moment-to-moment experience is closer to puzzle-solving than strategy-managing.

**Following a breakthrough hit.** Into the Breach was Subset Games' second game, following FTL's significant commercial and critical success. Davis and Ma spent four years on it, and the GDC postmortem reveals how many systems were cut — a greater variety of Vek, different progression systems, earlier structural designs — because they complicated the core clarity principle. The willingness to spend four years removing complexity from a game that started more complex is a lesson about the discipline required to achieve designed simplicity. The shipped game appears minimal; arriving at that minimum required enormous work.
