---
title: "BattleBlock Theater"
developer: "The Behemoth"
publisher: "The Behemoth"
year: 2014
genres: ["Platformer", "Action", "Co-op", "Puzzle"]
playtime: 4.3
steam_rating: 95.57
description: "A co-op platformer built on over sixty block types, each with distinct mechanics. The Behemoth's approach to teaching this enormous mechanical vocabulary through structured level design — introducing, isolating, then combining — is a textbook case in progressive complexity management."
design_tags: ["level-design", "tutorial-design", "block-mechanics", "co-op", "platformer", "escalating-complexity"]
resources:
  - type: article
    title: "BBT Development: Level Design Part 1"
    author: "The Behemoth"
    source: "The Behemoth Blog"
    year: 2013
    duration: "6 min read"
    summary: "The level design team breaks down how they categorised BattleBlock Theater's block mechanics into three tiers of complexity — static, interactive, and automated — and how each tier required a different teaching strategy in the campaign."
    url: "https://blog.thebehemoth.com/2013/10/01/bbt-development-level-design-part-1/"
  - type: article
    title: "BBT Development: Level Design Part 2"
    author: "The Behemoth"
    source: "The Behemoth Blog"
    year: 2013
    duration: "6 min read"
    summary: "Continues the level design breakdown, focusing on how each new block type required a dedicated isolation zone in the campaign before being combined with other mechanics, and the challenge of going back through finished campaigns to retrofit new mechanics discovered late in development."
    url: "https://blog.thebehemoth.com/2013/10/03/bbt-development-level-design-part-2/"
  - type: interview
    title: "Interview: The Behemoth's Dan Paladin"
    speaker: "Dan Paladin"
    source: "Gamereactor"
    year: 2013
    duration: "8 min read"
    summary: "Art director Dan Paladin discusses The Behemoth's philosophy of changing genre with every game, the role of Will Stamper's narration in establishing tone, and the small team size (one programmer, three level designers, two artists) that produced the game."
    url: "https://www.gamereactor.eu/interview-the-behemoths-dan-paladin/"
---

## Design Notes

**Categorising sixty-plus block types by complexity tier.** BattleBlock Theater contains over sixty distinct block types. The level design team's first move was to sort these into three tiers: static blocks (lava, explosive, cloud — the player simply encounters them), interactive blocks (moveable blocks, fans, boulders — the player directly manipulates them), and automated blocks (lasers that activate bridges, triggers that control lifts — the player orchestrates chains of reactions). This taxonomy isn't just organisational; it maps directly to how much mental overhead each category demands, which shaped the sequencing of the entire campaign.

**Isolation before combination.** For each new block type, the designers created a focused section of a level where that mechanic was introduced with minimal competing distractions. Players could observe and interact with the mechanic in isolation before it appeared in complex combinations. For the automated tier — the most demanding — the designers built an observation zone at the start of Chapter 5 where players could watch a laser hit a bridge block and see the chain reaction play out before being asked to use that knowledge under pressure. This principle of "show it safe, then use it dangerous" runs through the entire campaign structure.

**Non-linear design pressure from late discoveries.** Because designers kept discovering interesting new block combinations during development, the campaign was repeatedly opened up and retrofitted. A new mechanic found late in the design of Chapter 7 might require going back to Chapter 2 to introduce it properly. The team describes this as a "fairly non-linear approach" — the design process flowed backwards through the campaign structure, which is unusual. This retroactive insertion created polish but also difficulty: the designers had to maintain consistency of pacing across a campaign that was never designed sequentially.

**Narration as design tool.** Will Stamper's theatrical narration — delivering in-universe commentary throughout levels — does more than provide tone. It functions as a lightweight hint system that doesn't break the fiction. The narrator can call attention to a block or mechanic without the game explicitly stopping to explain it. This allowed The Behemoth to front-load their tutorial design into the narrative layer, using comedy to deliver information in a way that feels earned rather than instructional. The design implication is that narrative voice can carry tutorial load if it's trusted early enough.

**Small team as constraint and differentiator.** The game was built by one programmer, three level designers, and two artists, plus a producer. This meant every design decision had to be replicable across hundreds of levels without ballooning the asset count — hence the block-type system, where sixty combinable pieces generate almost unlimited level variety without requiring unique assets per level. The constraint of a small team produced the exact modular architecture that makes BattleBlock Theater extensible, including its player-created level editor.
