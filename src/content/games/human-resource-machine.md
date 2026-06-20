---
title: "Human Resource Machine"
developer: "Tomorrow Corporation"
publisher: "Tomorrow Corporation"
year: 2015
genres: ["puzzle", "programming", "educational"]
playtime: 5.0
steam_rating: 90.43
description: "A puzzle game that teaches assembly-level programming by casting the player as an office worker executing simple CPU-like instructions. Tomorrow Corporation's core insight is that the metaphor of a little person running rote commands in a corporate office is the most human-readable way to explain how computers actually think — and that the gap between 'puzzle difficulty' and 'programming skill' can be made nearly invisible through careful level sequencing."
design_tags: ["programming education", "metaphor-driven design", "puzzle sequencing", "constraint-based design", "systemic teaching"]
resources:
  - type: article
    title: "Why a World of Goo Dev Made a Puzzle Game About Programming Humans"
    author: "Kyle Gabler"
    source: "Game Developer"
    year: 2015
    duration: "8 min read"
    summary: "Kyle Gabler explains the central design conceit of Human Resource Machine — that a corporate office is an almost perfect metaphor for a simple CPU, with an inbox, outbox, memory tiles, and a worker who executes one instruction at a time. Covers how the puzzle sequence was designed to teach programming concepts entirely through play, with no documentation."
    url: "https://www.gamedeveloper.com/design/why-a-i-world-of-goo-i-dev-made-a-puzzle-game-about-programming-humans"
  - type: article
    title: "Catching Up with Indie Studio Tomorrow Corporation"
    author: "Staff"
    source: "Game Developer"
    year: 2016
    duration: "6 min read"
    summary: "A broad interview with Tomorrow Corporation touching on their design philosophy across World of Goo, Little Inferno, and Human Resource Machine — how each game uses a single-mechanic structure to reveal an idea, and why the studio deliberately keeps its games short and focused rather than expansive."
    url: "https://www.gamedeveloper.com/design/catching-up-with-indie-studio-tomorrow-corporation"
  - type: interview
    title: "Questions About the Machine"
    speaker: "Tomorrow Corporation"
    source: "Tomorrow Corporation (developer blog)"
    year: 2015
    duration: "5 min read"
    summary: "Tomorrow Corporation answers player and press questions about Human Resource Machine's design — including why they chose assembly language as the game's model, how they approached making programming feel like puzzle-solving, and what they wanted players to understand about computers by the end."
    url: "https://tomorrowcorporation.com/posts/questions-about-the-machine"
---

## Design Notes

**The office-as-computer metaphor.** Human Resource Machine's central conceit is that your character is a tiny office worker executing tasks in a corporate assembly line, but the inbox, outbox, memory slots on the floor, and minimal instruction vocabulary exactly model the architecture of a simple CPU. This metaphor works because corporate bureaucracy already operates on repetitive, rule-following behaviour. Players never feel like they are learning programming — they feel like they are optimising a workflow, which is precisely what assembly programming is. The abstraction is functionally accurate: a worker who moves items from inbox to outbox, holds one item at a time, and reads from memory tiles is enacting real computational logic, not a dumbed-down analogy.

**Puzzle sequencing as implicit curriculum.** Tomorrow Corporation structured the forty levels to introduce each programming concept in isolation before combining them. Each new command appears first in a challenge designed to reveal its function through play rather than explanation. By the time players are composing loops, conditionals, and jump instructions into a single program, they have internalised each element through practice. The sequencing is the game's most sophisticated design achievement: players who finish Human Resource Machine understand branch logic and memory addressing not because they read about them but because each level created exactly the problem that forced them to discover the solution.

**Constraints as the source of creativity.** The game limits players to eleven simple commands — INBOX, OUTBOX, COPYFROM, COPYTO, ADD, SUB, BUMP+, BUMP−, JUMP, JUMPZ, JUMPN — and this deliberate minimalism is what makes clever solutions feel genuinely inventive. Players must achieve complex behaviours from primitive operations, mirroring real assembly programming. A level that asks you to sort a list or multiply two numbers cannot be solved by a single command; it requires the player to compose an algorithm from scratch. The constraint transforms what might feel like a programming exercise into a puzzle game with real creative stakes.

**Aesthetic design as a frame for difficult ideas.** The deliberately cheerful corporate art style — googly-eyed workers, pastel colour palettes, an absurdly demanding boss — creates a soft, non-threatening frame around genuinely intimidating technical content. By making the computer metaphor playful and slightly absurd, Tomorrow Corporation lowers the barrier to engaging with concepts that many players would otherwise find off-putting. The humour also provides relief between challenging levels: the tone communicates that even if you are stuck on a hard puzzle, the game is on your side.

**Optional optimisation as the advanced curriculum.** Beyond solving each puzzle, the game offers optional sub-challenges to complete each level in the fewest possible steps or commands. These challenges are never required for progression, but they push players who have mastered the basic mechanic into genuine algorithmic thinking — the same cost-of-computation problems that practising engineers grapple with. This dual-layer structure serves two audiences simultaneously: casual players who want to see the concepts without mastering them, and players ready to pursue efficiency as a discipline in its own right.

