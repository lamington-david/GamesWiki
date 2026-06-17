---
title: "Phasmophobia"
developer: "Kinetic Games"
publisher: "Kinetic Games"
year: 2020
genres: ["horror", "cooperative", "investigation"]
playtime: 6.2
steam_rating: 93.83
description: "A co-op horror investigation game developed almost entirely by a solo developer who built the game he couldn't find on Steam. Phasmophobia almost accidentally invented the 'social horror' subgenre — where terror comes as much from the shared experience with friends as from the ghosts themselves — and launched to 1 million players in its first week."
design_tags: ["social horror", "cooperative design", "emergent gameplay", "VR compatible", "investigation mechanics", "fear design"]
resources:
  - type: video
    title: "The Tech Behind Phasmophobia w/ Ben Lavender of Kinetic Games"
    speaker: "Ben Lavender"
    source: "YouTube"
    year: 2022
    duration: "40 min"
    summary: "Technical director Ben Lavender details the specific engineering choices behind Phasmophobia's fear design — room tone (borrowed from film sound recording), dynamic lighting degradation as ghost strength increases, procedural ghost behaviour that makes the same map feel different each time, and the voice recognition system that lets ghosts hear players call their name."
    url: "https://www.youtube.com/watch?v=T4d8_a_iaPc"
  - type: interview
    title: "It Didn't Exist and I Wanted to Play It: Phasmophobia's Lead Dev on Creating the Game"
    speaker: "Daniel Knight"
    source: "PC Gamer"
    year: 2024
    duration: "10 min read"
    summary: "Daniel Knight describes building Phasmophobia as a market gap strategy — he kept looking for a co-op horror puzzle game on Steam and found nothing. Covers the shift from a planned VR puzzle game to an accidental horror phenomenon, the decision to scope for solo-developer feasibility, and how the 30-minute session design was a practical constraint that became a core design feature."
    url: "https://www.pcgamer.com/games/horror/it-didnt-exist-and-i-wanted-to-play-it-phasmophobias-lead-dev-got-tired-of-trawling-around-steam-for-a-co-op-horror-puzzle-game-so-decided-to-just-make-it-himself/"
  - type: article
    title: "For Phasmophobia To Be So Terrifying, The Devil Is In The Details"
    author: "Phil Hornshaw"
    source: "GameSpot"
    year: 2021
    duration: "8 min read"
    summary: "An analysis of how Phasmophobia's fear system accumulates through environmental detail — the specific sound design choices, the way lighting reacts to ghost presence, how information asymmetry between players creates dread — and why these details compound into sustained tension rather than punctual scares."
    url: "https://www.gamespot.com/articles/for-phasmophobia-to-be-so-terrifying-the-devil-is-in-the-details/1100-6527456/"
---

## Design Notes

**Accidental horror, intentional tension design.** Daniel Knight built Phasmophobia as a VR co-op puzzle game — not a horror game. He doesn't particularly like horror games, and when asked about influences cited The Haunting of Hill House (a TV series more interested in tension than gore) and The Terror. The horror emerged from the design: investigations in dark spaces, limited information, tools that only partially work, and ghosts that don't behave predictably. The lesson is not that you need to be a horror fan to make horror — it's that constraint, uncertainty, and information asymmetry create fear more reliably than jump scares or explicit threat. Phasmophobia is the product of a designer who thought carefully about what makes something tense, not about what makes something scary.

**Social horror as the medium.** What distinguishes Phasmophobia from other horror games is that its most frightening moments are shared moments. When one player hears something and the others didn't, and no one knows if it's the ghost or environmental noise, the uncertainty shared between real people produces a more effective fear response than any scripted horror sequence. The game uses voice recognition so ghosts can hear players call their name; discovering this by accident — a ghost turning hostile immediately after you said its name — is a design achievement that can't be scripted or predicted. Phasmophobia's best scares happen in the gap between what players know, what they tell each other, and what turns out to be true.

**Solo developer scope and market gap strategy.** Knight made Phasmophobia because he kept looking for a co-op horror puzzle game on Steam and couldn't find one. This "I wanted to play it and it didn't exist" motivation — combined with the discipline to scope the project to what one developer could ship — produced a game that filled a genre-sized gap and launched to 1 million players in its first week. The 30-minute session design was practically motivated (a solo developer can't build a 50-hour open-world horror game) but it's also the correct design decision for a social game: it's long enough to create stakes and short enough to play a second session before bedtime. Practical constraints and design correctness aligned.

**Fear through technical craft.** Technical director Ben Lavender has documented the specific choices that create fear in Phasmophobia: room tone (a practice borrowed from film sound recording, where each location has a unique ambient track to create subtle unease), procedural ghost behaviour that makes the same map different each run, and dynamic lighting that degrades as the ghost grows stronger. These are production design choices borrowed from film and applied to interactive media. Fear is cumulative and environmental, not punctual — the frequency of the ghost's breathing, the timing of lights flickering, the sound of a door opening untouched — each detail compounds into dread that can't be reduced to any single element. The design lesson is that sustained atmospheric fear is primarily a craft problem, not a mechanics problem.

**VR and flat-screen coexistence without compromise.** Phasmophobia was built for VR but works without it, and the design accommodates both modes without feeling wrong in either. Knight's solution was to focus the core loop on investigative activity — using equipment, consulting teammates, interpreting signals — rather than on physical interaction or perspective. This meant the mechanic was mode-agnostic at the design level, rather than retrofitting either mode onto the other after the fact. For designers considering VR support, Phasmophobia is the model for how to design the activity first and let both embodiments inhabit it, rather than designing for one embodiment and adapting.
