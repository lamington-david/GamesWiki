---
title: "Disco Elysium"
developer: "ZA/UM"
year: 2019
genres: ["RPG", "detective", "narrative"]
playtime: 43.1
steam_rating: 91.40
description: "A groundbreaking detective RPG with no combat, where 24 skills manifest as competing voices in your head. Set in the decaying port city of Revachol, it radically reimagines the RPG by replacing combat with dialogue, ideology, and the fragmented psychology of its amnesiac protagonist."
design_tags: ["dialogue systems", "skill design", "narrative RPG", "political design", "worldbuilding", "failure states"]
resources:
  - type: video
    title: "The Feature That Almost Sank Disco Elysium"
    speaker: "Robert Kurvitz"
    source: "GameSpot Audio Logs"
    year: 2019
    summary: "Robert Kurvitz discusses a critical design challenge during development — a feature whose implementation nearly derailed the whole project. He also covers how ZA/UM structured their dialogue UI around Twitter's aggressive, punchy format, and how the Thought Cabinet system emerged from the need to give players a persistent record of ideological commitments."
    url: "https://www.youtube.com/watch?v=9X0-W5erEXw"
  - type: interview
    title: "Disco Elysium — A chat with Robert Kurvitz, lead writer and designer"
    speaker: "Robert Kurvitz"
    source: "YouTube"
    year: 2019
    summary: "Wide-ranging interview with Kurvitz about how Disco Elysium grew from a decade of pen-and-paper RPG worldbuilding and his 2013 novel Sacred and Terrible Air. He explains the core design philosophy of treating failure as content rather than a dead end, and how the game's political plurality was deliberately built into its skill and ideology systems."
    url: "https://www.youtube.com/watch?v=TMo_th4lI7k"
  - type: gdc_talk
    title: "Crafting Disco Elysium's Outstanding Narrative — GDC 2021"
    speaker: "Justin Keenan"
    source: "Game Developer / GDC 2021"
    year: 2021
    summary: "ZA/UM writer and narrative designer Justin Keenan breaks down the most technically and creatively demanding aspects of Disco Elysium's dialogue pipeline — managing a million words of branching text, writing collaboratively at scale, and designing skill checks that feel like psychological revelation rather than mechanical gates."
    url: "https://www.gamedeveloper.com/design/discover-how-za-um-crafted-i-disco-elysium-i-s-outstanding-narrative-at-gdc-2021"
  - type: article
    title: "Player Agency, Politics, and Narrative Design in Disco Elysium"
    source: "Game Developer"
    year: 2021
    summary: "An analysis of how ZA/UM embedded genuine political plurality into Disco Elysium's design — not by letting players pick a faction, but by making ideology a lens that changes how every conversation reads. The piece examines how the skill interjection system creates simultaneous competing interpretations of the same event."
    url: "https://www.gamedeveloper.com/design/player-agency-politics-and-narrative-design-in-disco-elysium-"
  - type: article
    title: "Why I Love: The Interjections in Disco Elysium"
    source: "Game Developer"
    year: 2021
    summary: "A close design reading of how skill interjections — unsolicited comments from your 24 skills — create meaning through contradiction. When Empathy and Authority give opposite readings of a suspect, the player must synthesise an interpretation themselves. The article traces this back to the Kuleshov effect: the same input produces different emotional output depending on what surrounds it."
    url: "https://www.gamedeveloper.com/design/why-i-love-the-interjections-disco-elysium-"
---

## Design Notes

Disco Elysium's central invention is routing the RPG's stat system through voice. Rather than numbers that gate actions, its 24 skills are personalities — each with opinions, anxieties, and axes to grind. The game's difficulty isn't combat; it's deciding whose voice to trust.

**Failure as forward momentum.** Failed skill checks don't block progress — they produce different content. A failed Rhetoric check might make your argument worse and anger the NPC, which opens new dialogue paths. This means players are never stuck; the world just becomes harder and stranger.

**Ideology is mechanical.** The political spectrum (from ultra-liberal to communist) isn't background flavour — it changes which dialogue options appear, how NPCs respond, and which Thoughts you can develop in the Thought Cabinet. Design lesson: let player values have mechanical weight.

**The Thought Cabinet as persistent commitment.** Players can equip "Thoughts" that passively modify skills and unlock new dialogue. Many Thoughts represent ideological positions the character has internalised. This system externalises the RPG concept of character build into something that feels like genuine belief formation.
