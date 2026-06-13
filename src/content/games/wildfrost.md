---
title: "Wildfrost"
developer: "Deadpan Games / Gaziter"
publisher: "Chucklefish"
year: 2023
genres: ["roguelike", "deckbuilder"]
playtime: 8.3
steam_rating: 80.64
description: "A roguelike deckbuilder developed by a two-person team that replaces the genre's standard energy economy with a per-unit counter system, where every card operates on its own attack timer. This single mechanical inversion creates radically different strategic considerations from other deckbuilders, shifting player focus from resource expenditure to timing, sequencing, and board-state prediction."
design_tags: ["deckbuilder", "roguelike", "counter system", "resource design", "small team", "mechanical innovation"]
resources:
  - type: article
    title: "When We Made… Wildfrost"
    author: "Vince Pavey"
    source: "MCV/DEVELOP"
    year: 2023
    duration: "10 min read"
    summary: "Developers Will Lewis and Gaziter walk through the game's origins during COVID lockdown — how they experimented with genres before settling on the deckbuilder format, how the counter system emerged from prototyping a physical card game, and what it was like to work with Chucklefish as a two-person team. Covers key design pivots and the moment they knew the counter mechanic was worth building around."
    url: "https://mcvuk.com/business-news/when-we-made-wildfrost/"
  - type: article
    title: "Announcing Wildfrost — A Tactical Roguelike Deckbuilder"
    author: "Chucklefish"
    source: "Chucklefish Blog"
    year: 2022
    duration: "5 min read"
    summary: "The official announcement post introduces the game's core design philosophy and the team behind it. Explains how Will Lewis's background in roguelike platformers (Caveblazers) and Gaziter's experience in game art informed their collaborative approach, and how the idea of building a 'team' of unit cards rather than a traditional hand of action cards came from Monster Train."
    url: "https://chucklefish.org/blog/announcing-wildfrost/"
---

## Design Notes

**Replacing energy with time.** Most deckbuilders give players an energy pool each turn and ask them to spend it wisely. Wildfrost removes energy entirely and replaces it with a per-unit attack counter — a number printed on each card that counts down every global turn, triggering that unit's action when it reaches zero. This is not a superficial variant; it is a completely different strategic paradigm. Instead of asking "what can I afford to play this turn," the game asks "when will each unit act, what will they collide with, and how do I position my board to survive and punish those specific moments." The shift from expenditure to timing is the central design innovation.

**The counter as a two-sided constraint.** The attack counter applies equally to enemies and allies — every unit on both sides of the board is running its own internal clock. This means combat is not turn-by-turn in the traditional sense but a web of concurrent countdowns that the player must read and manage simultaneously. A unit with a counter of five is a long investment; a unit with a counter of one is both a powerful attacker and a fragile liability. The mechanic creates genuine tension between offensive and defensive positioning in a way that energy-based systems rarely achieve, because the threat is always visible and the timing is always exact.

**Building a team, not a deck.** Wildfrost's companion system asks players to recruit persistent unit cards that fight alongside their hero, distinct from the consumable cards that cycle through the hand. These companions carry their own stats, counters, and charm slots, and they survive between runs — meaning players develop attachment and strategy around specific units rather than rebuilding a new strategy from scratch each run. The instruction to think of progression as "who is my team" rather than "what is my deck" is a subtle but significant framing shift that changes how players engage with the roguelike structure.

**Physical prototyping as a design method.** The counter system was originally developed by making Wildfrost into a physical card game during development. Testing mechanics with paper cards forced the team to make rules explicit and eliminates the ability to hide design problems behind code — if a rule was confusing on a physical card, it would be confusing in the digital game. This prototyping method is chronically underused in digital game design; physical testing surfaces player-facing complexity much faster than digital playtesting because there is no UI to obscure ambiguity.

**Two-person scope discipline.** Wildfrost was built by Will Lewis (programmer and designer) and Gaziter (artist and designer) before publisher Chucklefish joined. The two-person constraint forced radical scope discipline: the game has a limited but deeply interconnected card pool, a single campaign progression structure, and a coherent visual language that Gaziter could sustain alone. The limitation produced coherence. Games with small teams often achieve this by default — when one person understands the entire system, consistency is easier to maintain than in large teams where no one holds the whole picture.
