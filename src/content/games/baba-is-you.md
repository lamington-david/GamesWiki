---
title: "Baba Is You"
developer: "Hempuli Oy"
publisher: "Hempuli Oy"
year: 2019
genres: ["puzzle"]
playtime: 9.3
steam_rating: 95.45
description: "A puzzle game by Finnish solo developer Arvi 'Hempuli' Teikari in which the rules of the game are physical objects inside the game world — sentences made of word blocks that can be pushed, broken apart, and rearranged to change how everything works. It is one of the most influential puzzle designs of its era: a demonstration that a small vocabulary of interacting elements can generate nearly inexhaustible depth."
design_tags: ["rule bending", "puzzle design", "emergent mechanics", "meta-design", "solo development", "sokoban"]
resources:
  - type: gdc_talk
    title: "Reading the Rules of 'Baba Is You'"
    speaker: "Arvi Teikari"
    source: "GDC 2020 / YouTube"
    year: 2020
    duration: "30 min"
    summary: "Teikari explains the technical implementation of Baba Is You's sentence-based rule system — how physical word blocks become parsed rules, how the game tracks rule state without a traditional programming layer, and the specific data structures used to make dynamic rule evaluation work inside GameMaker's scripting environment. Essential for understanding the gap between the system's apparent simplicity and its internal complexity."
    url: "https://www.youtube.com/watch?v=Jf5O8S5GiOo"
  - type: video
    title: "Talk & Dev: The Making of Baba Is You"
    speaker: "Arvi Teikari"
    source: "YouTube"
    year: 2019
    duration: "45 min"
    summary: "Teikari walks through the full development history of Baba Is You, from its origins as a Hel sinki game jam entry to its commercial release. Covers how the rule system evolved over multiple years, which mechanics were discovered rather than designed, and how solo development shaped the game's scope and vocabulary."
    url: "https://www.youtube.com/watch?v=v7ICYHL5MD4"
  - type: video
    title: "Making Baba Is You — What Is This?"
    speaker: "Arvi Teikari"
    source: "GameLab 2019 / YouTube"
    year: 2019
    duration: "40 min"
    summary: "Teikari's GameLab Barcelona talk exploring how the core mechanic emerged, how puzzle design operates when rules are generative rather than fixed, and how he navigated the tension between the system's generativity and the need for individual puzzles to feel authored and coherent. Includes discussion of unintended solutions and how they shaped the final design."
    url: "https://www.youtube.com/watch?v=8eTFea_UZcc"
  - type: article
    title: "Designing Baba Is You's Delightfully Innovative Rule-Writing System"
    author: "Arvi Teikari"
    source: "Game Developer"
    year: 2019
    duration: "10 min read"
    summary: "Teikari's written account of the rule system's mechanics and design logic — how words like SINK, PULL, and LONELY originated, how meta-words like TEXT and MORE were introduced to create rules about rules, and how the update logic ensures rule changes propagate correctly when sentences are interrupted or completed mid-action."
    url: "https://www.gamedeveloper.com/design/designing-i-baba-is-you-i-s-delightfully-innovative-rule-writing-system"
---

## Design Notes

**Rules as first-class objects.** The defining insight of Baba Is You is that rules, which in every other game exist above and outside the game world, can be placed inside it. Sentences like "BABA IS YOU", "ROCK IS PUSH", and "FLAG IS WIN" are not descriptions of the current rules — they are the rules, instantiated as physical blocks that obey the same movement laws as everything else. This collapses the distance between the game's logic layer and its play layer. When you push a word block, you are simultaneously performing an action and changing the conditions under which actions are evaluated. No other puzzle game has made this move so completely or with such consequences for the design space.

**Emergent complexity from minimal vocabulary.** The game contains roughly sixty words, but the number of meaningful rule combinations vastly exceeds what any single designer could fully enumerate. Teikari's design process involved discovering what combinations were interesting and building puzzles around those discoveries — the same process the player undergoes, but at the level of exploring the vocabulary rather than applying it. Many puzzles have unintended solutions that work because the system is internally coherent; Teikari's response to these discoveries shaped one of the game's implicit design positions: an unintended solution that works is not a bug but a proof that the system is doing something right.

**Meta-design and self-reference.** Some of Baba Is You's deepest puzzles require making inanimate objects win conditions, erasing concepts from the game world, or changing what "YOU" refers to mid-level. When "TEXT IS WIN" is written, every word block in sight becomes something to collect. When "BABA IS DEFEAT", touching Baba kills you. This capacity for rules about rules — conditions on conditions — gives the game a fractal depth that most puzzle games reach once, at most. The player is not solving puzzles by finding a hidden path; they are constructing arguments about what the rules should say.

**Solo development as design constraint and creative engine.** The entire game was built by Arvi Teikari alone, primarily in GameMaker without native object-oriented support. The GDC 2020 talk covers the data structures required to make rule evaluation work inside this constraint — the result is elegant precisely because it had to be. Solo development imposed a scope discipline that shaped the vocabulary: each new word had to justify its presence against the combinatorial debt it added. The final vocabulary is small enough to be fully learned and large enough to generate years of puzzle design.

**Discovery as the design relationship.** Because the rule system is generative, Teikari could not fully author every puzzle interaction from above. He describes encountering combinations that surprised him, designing puzzles around mechanics that appeared rather than planned. This is a different relationship between designer and puzzle than in traditional puzzle games, where the author sets up a specific solution to be found. Here the author curates configurations from a design space too large to survey — selecting which discoveries make for interesting and readable challenges, and trusting the system to generate meaning from the rest.

---
