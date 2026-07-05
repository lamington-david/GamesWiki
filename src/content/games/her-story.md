---
title: "Her Story"
developer: "Sam Barlow"
publisher: "Sam Barlow"
year: 2015
genres: ["mystery", "interactive fiction", "fmv"]
playtime: 1.5
steam_rating: 86.95
description: "A police database mystery in which the player searches hundreds of live-action video clips by keyword to reconstruct a murder investigation. Her Story pioneered the idea that a player's imagination is the most powerful narrative tool in game design, using deliberate informational gaps to create a story more personally felt than any authored cutscene could achieve."
design_tags: ["narrative design", "non-linear storytelling", "player imagination", "fmv", "mystery", "database fiction"]
resources:
  - type: gdc_talk
    title: "Making Her Story: Telling a Story Using the Player's Imagination"
    speaker: "Sam Barlow"
    source: "GDC 2016 / YouTube"
    year: 2016
    duration: "29 min"
    summary: "Barlow's Narrative Summit talk arguing that the player's brain is the most powerful game engine available, and that designing for imagination rather than explicitness produces stronger emotional responses. Covers Hemingway's iceberg principle as a writing framework, how non-linear clip ordering was stress-tested for satisfying discovery, and why the absence of a 'wrong order' is a feature, not a bug."
    url: "https://www.youtube.com/watch?v=S-1GBV3ApgI"
  - type: video
    title: "Her Story Retrospective: Dev Dive Interview with Sam Barlow"
    speaker: "Sam Barlow"
    source: "YouTube"
    year: 2025
    duration: "45 min"
    summary: "A 10th anniversary retrospective in which Barlow reflects on what Her Story got right, the decisions that felt risky at the time, and how the project's stripped-back design — no inventory, no fail states, no tutorial — held up over a decade. Covers how the FMV format was chosen not for novelty but because it was the most efficient way to communicate character through performance."
    url: "https://www.youtube.com/watch?v=72HCxBlnVL8"
  - type: article
    title: "Video: Making Her Story and Using the Player's Imagination as a Narrative Tool"
    author: "Game Developer Staff"
    source: "Game Developer"
    year: 2016
    duration: "6 min read"
    summary: "A summary of Barlow's GDC talk with key quotes on the iceberg principle, the calculation process Barlow used to ensure clip connectivity, and the philosophy of writing scenes where context deliberately changes their meaning when encountered in different orders."
    url: "https://www.gamedeveloper.com/design/video-making-i-her-story-i-and-using-the-player-s-imagination-as-a-narrative-tool"
  - type: article
    title: "Road to the IGF: Sam Barlow's Her Story"
    author: "Sam Barlow"
    source: "Game Developer"
    year: 2015
    duration: "8 min read"
    summary: "Barlow's pre-launch interview discussing the conceptual origins of Her Story — his frustration with conventional game narrative structures, the decision to use real video footage rather than actors in a game engine, and how the database search mechanic emerged as a design solution to delivering non-linear narrative without branching."
    url: "https://www.gamedeveloper.com/audio/road-to-the-igf-sam-barlow-s-i-her-story-i-"
---

## Design Notes

**The player's imagination as a game mechanic.** Her Story's central design argument is that deliberately withholding information is more powerful than providing it. Sam Barlow drew explicitly on Hemingway's iceberg principle — the idea that a story's emotional weight comes from what is beneath the surface rather than what is stated. In Her Story, no single clip tells the full story, and no playthrough reveals every clip. The game exploits the fact that players fill information gaps with their own interpretations, making the story feel authored specifically for them. Barlow's GDC talk frames this not as a design shortcut but as the most sophisticated tool available to game writers: engaging the player's imagination creates investment that explicit exposition cannot replicate.

**Database search as both mechanic and metaphor.** The game's only interface is a keyword search bar connected to a fictional police database. This design choice means there is no prescribed order, no map, no inventory, and no explicit objective. Players discover clips by entering words they have heard, creating a loop where every discovery suggests new searches. The mechanic literalises the investigation — players are doing exactly what a detective does, following linguistic threads through evidence. The design's elegance is that the system never has to explain itself; the search bar's function is immediately understood, and the desire to know what happened is sufficient to sustain the entire experience.

**Writing for non-linear discovery.** The challenge of Her Story's script was that every clip had to be emotionally coherent and dramatically interesting regardless of when it was encountered. Barlow stress-tested the script by calculating how well-connected each clip was to others — ensuring that any entry point into the database could lead somewhere meaningful. He also designed multiple layers of context so that earlier clips gain new meaning when encountered after revelatory ones, and vice versa. This produced a script written in four dimensions rather than two, where the order of discovery is itself a form of player expression.

**FMV as a design choice, not a novelty.** Her Story arrived in 2015 when FMV was associated primarily with the failed experiments of the mid-1990s. Barlow's choice was deliberate: live-action footage communicates character through micro-expression, vocal tone, and physical performance in ways that game engine animations cannot. The constrained format — one actress, one location, talking directly to an off-camera interviewer — means the entire storytelling burden falls on that performance. The design lesson is that medium should follow function: FMV was chosen because it was the most efficient vehicle for what the game was actually trying to do, which was convey the texture of a specific person telling the truth and lying simultaneously.

**Removing fail states as a design position.** Her Story has no wrong answers, no game over, and no mandatory completion. Players can stop at any point and the story exists in whatever state their discovery left it. Barlow treats this not as laxity but as respect — the game's challenge is intellectual and emotional rather than mechanical, and gatekeeping access to content behind skill tests would undermine both. This places Her Story in a lineage of games that treat the player as a reader or detective rather than an agent who must earn the right to experience the narrative, a design position with significant implications for who games can reach and what stories they can tell.
