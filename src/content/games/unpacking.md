---
title: "Unpacking"
developer: "Witch Beam"
publisher: "Humble Games"
year: 2021
genres: ["puzzle", "casual", "indie"]
playtime: 3.5
steam_rating: 91.45
description: "A zen puzzle game about moving house that tells an entire life story through the objects a character owns. Witch Beam's design achievement is making an ordinary act — unpacking boxes — feel emotionally resonant by treating possessions as autobiography, and proving that games can create profound narrative experience without dialogue, scores, or fail states."
design_tags: ["subtractive design", "environmental storytelling", "no fail states", "narrative objects", "accessibility", "cozy games"]
resources:
  - type: gdc_talk
    title: "'Unpacking' Zen: Designing a Game Without Fail States or Scores"
    speaker: "Wren Brier"
    source: "GDC Vault"
    year: 2023
    duration: "60 min"
    summary: "Creative director Wren Brier explains the 'subtractive design' philosophy behind Unpacking — removing every conventional game element that didn't serve the core experience. Covers why there are no scores, no time limits, no fail states, and no dialogue, and how stripping those elements made the game stronger. One of the clearest articulations of design-by-removal available."
    url: "https://gdcvault.com/play/1029400/-Unpacking-Zen-Designing-a"
  - type: gdc_talk
    title: "'Unpacking': The Fun Behind the Foley"
    speaker: "Jeff van Dyck"
    source: "GDC 2022 / YouTube"
    year: 2022
    duration: "30 min"
    summary: "Audio director Jeff van Dyck recounts producing 14,000 distinct foley sounds for every object in the game — and the unexpected creative depth required to make ordinary household items feel tactilely satisfying. The talk demonstrates how audio design in Unpacking functions as gameplay feedback in the absence of traditional mechanical reward systems."
    url: "https://www.youtube.com/watch?v=mA4nZQA2wrs"
  - type: article
    title: "'Unpacking' the design pillars of a chill puzzle game"
    author: "Wren Brier"
    source: "Game Developer"
    year: 2021
    duration: "8 min read"
    summary: "Brier describes how the team distilled their design goals into three pillars — contemplation, discovery, and expression — and used those pillars to make decisions throughout development. Explains the process of translating vague emotional targets ('we want players to feel calm') into concrete design constraints."
    url: "https://www.gamedeveloper.com/design/unpacking-the-design-pillars-of-a-chill-puzzle-game"
  - type: article
    title: "Telling a story through someone's belongings in Unpacking"
    author: "Joel Couture"
    source: "Game Developer"
    year: 2021
    duration: "6 min read"
    summary: "Examines how Witch Beam used 1,000 unique objects to convey an unseen protagonist's life arc across eight moves spanning childhood to adulthood. Covers the specific techniques used to make items communicate character — placement restrictions, object categories, and the deliberate absence of any direct exposition."
    url: "https://www.gamedeveloper.com/design/telling-story-someones-belongings-unpacking"
  - type: interview
    title: "Unpacking: An accidentally commercial game"
    speaker: "Wren Brier"
    source: "YouTube"
    year: 2020
    duration: "20 min"
    summary: "An early talk by Brier on how Unpacking evolved from a prototype she didn't expect to sell into a commercial release, and what surprised her about the game's resonance with players. Provides important context for understanding how the final design emerged from an exploratory creative process rather than deliberate market positioning."
    url: "https://www.youtube.com/watch?v=dwQ5rmEhQnc"
---

## Design Notes

**Subtractive design as core methodology.** Unpacking's most celebrated design decision is what it removed rather than added. There are no scores, no time limits, no fail states, no dialogue, no text, and no explicit narrative. Witch Beam's Wren Brier describes this as "subtractive design" — identifying the emotional core experience (calm, contemplative, autobiographical discovery) and removing anything that didn't serve it. The result is a game that provably works because each removed element would have introduced anxiety, judgement, or distraction incompatible with what the game was trying to be. This approach requires developers to articulate their core emotional target with precision before subtracting, because without a clear target, the removal feels arbitrary.

**Objects as autobiography.** The game's narrative device — telling a character's entire life story without dialogue or cutscenes through only the objects she owns — depends on players projecting meaning onto those objects. A childhood bedroom tells a different story than an adult shared flat; a well-worn toy in a new house tells a different story than the same toy still sealed in its box. Witch Beam designed each room's object manifest as a chapter in a life, with items that contradict each other or disappear between moves carrying implicit narrative weight. The technique leverages the player's pre-existing understanding of what objects mean in real life, using literacy the player already possesses rather than requiring the game to build it.

**The chill game as legitimate design space.** Unpacking contributed to establishing what Brier calls the "chill game" as a design category with specific requirements rather than a game made easier. Designing for calm requires different constraints than designing for tension: success feedback must be gentle, spatial logic must have a "correct" answer that feels satisfying rather than arbitrary, and the player must always know what to do next. The game's soft pass/fail system — objects that can't be placed in certain rooms turn red, but the game never penalises wrong placement — threads the needle between giving players a puzzle to solve and denying them the anxiety of failure.

**Implicit level design through room context.** Each room in Unpacking is a puzzle with a unique solution space shaped by the room's real-world function. A bathroom has obvious right answers for most objects; a study is more ambiguous; a shared bedroom with another person's existing objects creates constraint puzzles. Witch Beam never states these rules — players learn through context because they already know how rooms work. This approach to level design flattens the tutorial problem entirely: the "tutorial" is the player's existing understanding of how humans organise their living spaces. The design challenge becomes curating object sets so they produce interesting decisions within that understood context.

**Pixel art at human scale.** The visual design required a specific solution to representation: objects had to be recognisable at small size but not so abstract as to lose emotional texture. Witch Beam used larger-than-usual pixel art to ensure everyday items — toothbrushes, books, photos — read clearly while retaining enough detail to carry emotional associations. This required deliberately testing which objects were recognisable at that resolution and iterating on ones that weren't. The visual design decision shaped the object design pipeline, requiring each item to be legible as what it is before it could carry the narrative weight the game needed it to.
