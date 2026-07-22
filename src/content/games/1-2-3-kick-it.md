---
title: "1... 2... 3... KICK IT! (Drop That Beat Like an Ugly Baby)"
developer: "Dejobaan Games"
publisher: "Dejobaan Games"
year: 2011
genres: ["rhythm", "music", "action"]
playtime: 0.28
steam_rating: 30.74
description: "Dejobaan Games' experimental music-action game that generates its environments procedurally from the player's own MP3 files, making the player's music collection the game's content. A thought-provoking case study in user-generated content through audio, procedural level generation, and — given its 30% Steam rating — the gap between a compelling design premise and a satisfying play loop."
design_tags: ["procedural generation", "music game", "rhythm design", "user-generated content", "algorithmic level design", "experimental design"]
resources:
  - type: interview
    title: "Interview: Dejobaan Games Talks New Business Models with Kick It!"
    author: "Gamasutra Staff"
    source: "Game Developer"
    year: 2011
    duration: "8 min read"
    summary: "Dejobaan president Ichiro Lambe discusses the studio's design philosophy of making games that could not exist without computational generation, the decision to expose the game's procedural parameters to players, and how Dejobaan thought about building on the commercial and critical success of their previous game AaaaaAAaaaAAAaaAAAAaAAAAA!!!"
    url: "https://www.gamedeveloper.com/pc/interview-dejobaan-games-talks-new-business-models-with-i-kick-it-i-"
  - type: article
    title: "1... 2... 3... KICK IT! Developer Diary 2"
    author: "Dejobaan Games"
    source: "IndieDB"
    year: 2011
    duration: "5 min read"
    summary: "A development diary entry from Dejobaan covering the technical and design challenges of building environments that respond meaningfully to audio signals — getting the beat-detection system to translate music energy into playfield events in ways that feel connected to the song rather than arbitrary."
    url: "https://www.indiedb.com/games/1-2-3-kick-it/news/developer-diary-2"
---

## Design Notes

**The player's music as the game's content.** Kick It! generates its environments procedurally from MP3 files the player provides. The music the player brings to the game becomes the game — obstacle placement, environmental pacing, and visual rhythm all derive from the player's own library. This is an extreme form of user-generated content: the player contributes not just a level but the experience's emotional texture through their taste. The design question Dejobaan was answering is whether "content" in a game is always something the developer makes, or whether the player's relationship to external media can substitute.

**Algorithmic generation as aesthetic intent.** Unlike procedural generation systems designed to create plausible spatial coherence or narrative variety, Kick It! generates visuals and obstacles that respond directly to the audio signal — beat frequency, tempo, loudness, drops. The result is environments that feel synchronised to music because they literally are. This is an early example of music-reactive design that goes beyond rhythm game conventions: most rhythm games synchronise pre-authored patterns to music tracks; Kick It! uses the music as generative input for systems it authors in real time. The distinction is significant — it means the game cannot pre-author its best moments.

**Exposed parameters as design transparency.** Players can modify the game's parameters for interpreting audio — adjusting how aggressively it responds to beats, how quickly environments shift. This meta-layer acknowledges that algorithmic generation can fail (a slow ballad might produce an underwhelming environment) and empowers players to compensate. The decision to expose parameters rather than hide them reflects a philosophy about player agency in procedural systems. Players who understand how a system generates experience can shape that experience; players who don't are passive recipients of whatever the algorithm produces.

**Dejobaan's identity as experimental studio.** Kick It! was developed during a period when Dejobaan was consciously building a studio identity around making games that could only exist as software — experiences that required real-time computation to function at all. Ichiro Lambe's interviews from this period discuss the studio's approach as deliberately non-standard: make the game nobody else is making, even if the commercial outcome is uncertain. This framing — studio identity as design strategy — offers a lens for understanding why Kick It! exists in the form it does. The game is an artefact of a studio's philosophy as much as it is a product.

**Commercial failure as design documentation.** Kick It!'s 30.74% Steam rating is itself a design document. Retrospective analysis suggests the core loop — fly through space, avoid obstacles, stay synchronised with music — was too mechanically thin even for players attracted to the concept. The game illustrates the gap between an interesting generative premise and a satisfying play loop: novelty gets players into a game, but the feedback systems — score, progression, skill expression — determine whether they stay. The disconnect between a compelling "what if" and weak "why continue" is a recurring failure mode for systems-first design. Kick It! is a useful reference precisely because its failure is specific and diagnosable.
