---
title: "Crocotile 3D"
developer: "Alex Hanson-White"
publisher: "Alex Hanson-White"
year: 2015
genres: ["Tool", "Game Development", "Level Editor"]
playtime: 1.2
steam_rating: 82.40
description: "A tile-based 3D level editor designed for creating low-poly, pixel-art environments reminiscent of PlayStation-era graphics. Built by a solo developer out of frustration with bloated existing tools, Crocotile 3D is a notable case study in how constrained, opinionated tooling shapes the aesthetic of the games made with it."
design_tags: ["tile-based-modeling", "retro-aesthetics", "low-poly", "pixel-art", "tool-design", "level-editing"]
resources:
  - type: video
    title: "Crocotile 3D: Introduction to the Program"
    speaker: "Alex Hanson-White"
    source: "YouTube"
    year: 2022
    duration: "15 min"
    summary: "The developer walks through the core workflow of Crocotile 3D — the tileset window, scene viewport, draw and edit modes, and how the tile-based approach constrains and guides 3D construction. Essential for understanding why the tool produces the aesthetic it does."
    url: "https://www.youtube.com/watch?v=bY2fySiiJ2o"
  - type: article
    title: "Ten Years of Crocotile 3D"
    author: "Alex Hanson-White"
    source: "itch.io Devlog"
    year: 2025
    duration: "10 min read"
    summary: "A retrospective from the developer on the decade-long evolution of Crocotile 3D, covering the original motivation (no existing tool did tile-based 3D intuitively), the slow growth of the community, and what guided design decisions in the editor itself over ten years of iterative development."
    url: "https://prominent.itch.io/crocotile3d/devlog/940922/ten-years-of-crocotile-3d"
  - type: video
    title: "Crocotile 3D Tutorial Playlist"
    speaker: "Alex Hanson-White"
    source: "YouTube"
    year: 2020
    duration: "Series"
    summary: "The official tutorial series covering character modeling, staircase construction, scene composition, and import/export to engines including Unity, Godot, and Blender. Shows how the tile-constraint approach guides users toward a specific aesthetic even without enforcement."
    url: "https://www.youtube.com/playlist?list=PLgH-HrnIp-Z2Oc_l5njEag2Mils66FuUA"
---

## Design Notes

**The tile constraint as a worldview.** Crocotile 3D's core premise — that 3D environments should be built from 2D tiles exactly as 2D tilemaps work in side-scrolling games — is not just a workflow choice. It is an aesthetic philosophy. The tiles come from a flat tileset image, are placed on a 3D grid, and repeat according to the same logic that governs a Game Boy platformer level. This means the resulting environments carry an unmistakable legibility: geometry is never arbitrary, colour is always from the same palette source, and scale is regulated by the grid. The tool doesn't permit the kind of freeform organic modelling that produces most 3D art; what it permits is what it produces.

**Designing against bloat.** Alex Hanson-White built Crocotile 3D because existing 3D tools felt overwhelming for the specific task of building game environments with a retro pixel-art aesthetic. The design philosophy of the tool is therefore a response to what the developer found absent: simplicity, directness, and an interface that doesn't bury basic operations behind menus built for film VFX. This is an instructive case of a creator building the tool they wished existed — and the result is a tool whose constraints are directly legible as the original frustrations that motivated it.

**Retro aesthetics as a deliberate design choice.** The PS1-era look that Crocotile 3D naturally produces — low-poly geometry, pixelated textures, wobbly vertex snapping — emerged in the late 2010s as a deliberate aesthetic in indie games rather than a technical limitation. Games like Dusk, Lunacid, and Caves of Qud used low-poly PS1 visuals as expressive choices. Crocotile 3D is the level editor most associated with this movement, and its design embeds the assumption that the aesthetic is desirable — not a compromise. Understanding this matters for game designers: the tool makes the aesthetic feel natural and correct rather than like an obstacle to overcome.

**Tools shape games.** The communities that form around constrained tools tend to produce work with a recognisable visual coherence. Games made in Crocotile 3D share not just a visual style but a spatial grammar: environments tend to be modular, navigable, and architecturally readable. This is partly because tile-based tools privilege the player-facing geometry over organic or sculptural ambition. The design lesson is that tool selection is a creative decision with downstream consequences for what a game looks and feels like — not just a production decision about efficiency.

**Solo development sustainability.** Crocotile 3D itself was built and maintained by a single developer across a decade, accreting features gradually while preserving the original simplicity. This is an unusual model in game tooling, where tools are typically either commercial products with teams or abandoned side projects. That a solo developer sustained a well-regarded niche tool for ten years, funded by direct sales, is a small but instructive precedent for how open-ended game development tools can be viable when they serve a specific aesthetic community with genuine precision.
