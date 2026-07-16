---
title: "Cloud Gardens"
developer: "Noio"
publisher: "Coatsink"
year: 2021
genres: ["simulation", "puzzle", "relaxation", "indie"]
playtime: 0.57
steam_rating: 90.64
description: "Thomas van den Berg's meditative simulation about plants reclaiming a world of abandoned structures. Cloud Gardens grew out of a plant-growth prototype that felt better than any game layer placed on top of it — a rare case of a designer recognising the toy before the game."
design_tags: ["simulation", "emergent gameplay", "relaxation design", "progression design", "level design", "toy vs game"]
resources:
  - type: article
    title: "Getting Tangled Up in the Beautiful Landscapes of Cloud Gardens"
    author: "Game Developer Staff"
    source: "Game Developer"
    year: 2021
    duration: "8 min read"
    summary: "Designer Thomas Vandenberg and level designer Elijah Cauley discuss how Cloud Gardens evolved from a pure plant-growth toy into a structured puzzle game — and why 'objects make plants grow' became the design rule that made the whole thing cohere. Covers the specific constraint that no natural material could exist in a level before the player placed it."
    url: "https://www.gamedeveloper.com/design/Getting-tangled-up-in-the-beautiful-landscapes-of-Cloud-Gardens"
  - type: podcast
    title: "From Kingdom to Cloud Gardens"
    speaker: "Thomas van den Berg"
    source: "Codecks Game Production Podcast"
    year: 2021
    duration: "42 min"
    summary: "Van den Berg traces the development arc from Kingdom through Cloud Gardens — discussing what it felt like to follow a breakout hit with a much quieter project, the decision to self-publish rather than work with a publisher again, and how the constraints of a small team shaped the final design."
    url: "https://www.codecks.io/blog/2021/game-production-podcast-ep5-noio/"
  - type: podcast
    title: "Interview with Noio (Cloud Gardens, Kingdom)"
    speaker: "Thomas van den Berg"
    source: "Gamers with Glasses Podcast"
    year: 2021
    duration: "50 min"
    summary: "Wide-ranging conversation about van den Berg's design philosophy across both Kingdom and Cloud Gardens — the appeal of minimal interfaces, designing for calm rather than tension, and how working as a solo developer shapes what kinds of games are even possible to ship."
    url: "https://www.gamerswithglasses.com/gwgpodcast/noio-interview"
---

## Design Notes

**Recognising the toy.** Cloud Gardens began as a plant-growth simulation that van den Berg built during prototyping for an MMO. When he played with the simulation — throwing a seed and watching it grow into spreading vines and leaves — it felt compelling without any goal structure attached. Rather than immediately building a game around it, he sat with the question of whether the toy itself was the product. This patience with the raw material produced a game that still feels like a toy in the best sense: it rewards contact and attention rather than demanding optimal play.

**"Objects make plants grow."** The pivotal design decision in Cloud Gardens was finding a rule that connected the two player actions — placing objects and growing plants — into a feedback loop. The rule Vandenberg settled on was deliberately simple: placing man-made objects in the environment causes plants to grow around them. This rule does enough: it creates a reason to engage with the environment, produces visible results, and scales naturally into a progression system where more coverage unlocks the next level. Its simplicity is the point — a complicated rule would have competed with the visual pleasure of watching plants grow.

**The blank-slate constraint.** A key level design principle in the campaign is that no natural material — no plants, no vines, no leaves — can exist in a level before the player arrives. Everything organic must come from the player's actions. This constraint was chosen because it makes the finished diorama feel genuinely authored: when you leave a level, every green element in the scene is something you placed or caused. Van den Berg found that levels which violated this rule felt less satisfying at completion, because players couldn't take full credit for the transformation.

**Designing for calm.** Where most games design for tension — time pressure, resource scarcity, failure states — Cloud Gardens was consciously designed to feel calm. There is no timer, the failure condition (running out of seeds) is lenient and easily remedied, and the soundtrack was composed to feel unhurried. This is a legitimate design goal with its own technical challenges: a calm game can easily tip into boring. Vandenberg navigated this by ensuring the plant growth always produced something visually interesting — the pleasure of watching the simulation is the intrinsic motivation that does the work tension usually does.

**The problem of "gamey" goals.** Vandenberg describes the mid-development challenge as finding ways to add progression without betraying the toy. Traditional game goals — timers, scores, strict puzzle solutions — would have made the experience anxious rather than meditative. The solution was to keep goals loose (cover a percentage of the environment with plants) and rewards visual (unlocking new environment pieces). This allowed Cloud Gardens to have structure without coercion, and let players approach levels with their own aesthetic sensibility rather than solving for a correct answer.
