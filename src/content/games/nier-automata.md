---
title: "NieR: Automata"
developer: "PlatinumGames"
publisher: "Square Enix"
year: 2017
genres: ["action RPG", "hack and slash"]
playtime: 8.6
steam_rating: 86.35
description: "A landmark collaboration between PlatinumGames' combat expertise and director Yoko Taro's habit of using game structure itself as a narrative device. NieR: Automata requires multiple full playthroughs to reveal its complete story, with each route recontextualising everything the player experienced before. Its infamous Ending E weaponises the credits sequence as a communal design statement."
design_tags: ["multiple endings", "fourth wall", "narrative structure", "action combat", "feel design", "game structure as story"]
resources:
  - type: gdc_talk
    title: "A Fun Time in Which Some No-Good Game Developers May or May Not Discuss How We Made NieR: Automata"
    speaker: "Yoko Taro, Takahisa Taura"
    source: "GDC 2018 / YouTube"
    year: 2018
    duration: "60 min"
    summary: "Director Yoko Taro and lead game designer Takahisa Taura give a characteristically unconventional postmortem of NieR: Automata's development, covering why the collaboration with PlatinumGames worked, how Taura approached making the combat 'feel' correct, and Taro's philosophy that games should prioritise what players enjoy over what developers intend. Available via GDC Vault and third-party recordings."
    url: "https://www.youtube.com/watch?v=KlkH3hotdf4"
  - type: article
    title: "How Platinum Designed and Tuned NieR: Automata to 'Feel' Good"
    author: "Game Developer Staff"
    source: "Game Developer"
    year: 2017
    duration: "10 min read"
    summary: "Documents the GDC 2018 session in detail, focusing specifically on Takahisa Taura's input-response design process. Covers the team's obsession with button-press latency, how they iterated on dodge-cancel frames to create satisfying moment-to-moment feel, and why Platinum treated Taro's narrative ambitions as design constraints to solve rather than problems to resist."
    url: "https://www.gamedeveloper.com/design/how-platinum-designed-and-tuned-i-nier-automata-i-to-feel-good"
  - type: article
    title: "Video: Yoko Taro and Platinum Games' Postmortem of NieR: Automata"
    author: "Game Developer Staff"
    source: "Game Developer"
    year: 2018
    duration: "12 min read"
    summary: "Covers the full GDC postmortem with additional context on the creative tension between Taro's experimentalism and Platinum's production rigour. Includes discussion of how the multiple-route structure was justified internally, the challenges of writing and translating a narrative designed to work across three distinct playthroughs, and lessons on cross-studio creative collaboration."
    url: "https://www.gamedeveloper.com/design/video-yoko-taro-and-platinum-games-postmortem-of-i-nier-automata-i-"
---

## Design Notes

**Game structure as the narrative's primary medium.** NieR: Automata's most radical design decision is that its story cannot be understood from a single playthrough. Route A and Route B cover the same events from different perspectives; Route C recontextualises both and reveals the game's actual subject. This is not a New Game+ system bolted onto a complete story — the structure itself is the argument. Players who stop after Route A have experienced a well-made action game; players who finish Route C have experienced a meditation on consciousness and meaninglessness that could only be delivered through this format. The form is the content.

**The 'feel' layer as non-negotiable foundation.** PlatinumGames' Takahisa Taura approached Automata's combat with a single governing principle: if pressing a button does not cause an immediate, perceptible, satisfying response, the player will disengage. This required precise iteration on input lag, cancel windows, and animation priority — tuning that is invisible when correct and catastrophic when wrong. Taura's method was to test each mechanic by feel before considering its strategic depth, treating the tactile layer as the foundation on which all other design decisions rest. The game's narrative ambition would be irrelevant without moment-to-moment action that felt worth doing.

**Yoko Taro's design philosophy: player enjoyment over authorial intent.** Taro has stated repeatedly that his creative goal is not to impose a specific experience but to make something players find worth exploring. This manifests in design choices that subvert player expectations (the credits hack in Ending E, the title screen in the final route) but are always designed to be discovered and understood rather than simply to shock. The distinction between surprise-as-device and surprise-as-gimmick is that the former earns its moment through everything that preceded it. Taro's games construct the conditions for player discovery rather than staging a performance.

**Cross-studio collaboration as creative constraint.** The Taro/Platinum partnership worked because both parties understood their respective domains and did not trespass. Taro provided the world, characters, and structural logic; Platinum provided the action systems and production discipline. Neither attempted to redesign the other's expertise. This division created the game's most distinctive quality: a narrative sensibility that could only exist in the high-fidelity action wrapper that Platinum provided, and action systems that only make complete sense in the thematic context Taro constructed. The lesson is that complementary collaboration requires genuine deference to the other party's expertise.

**Ending E as communal game design.** The final ending — which requires players to delete their save data and receive help from other players' ghost data — functions as a social experience embedded in a single-player game. It asks players to sacrifice something real for the sake of an ending that could not be earned alone. The design compresses the game's themes (sacrifice, connection, the value of persisting despite futile odds) into a mechanical act. That it works as a design decision rather than a stunt is because the game has spent sixty hours earning the emotional context that makes the ask meaningful.
