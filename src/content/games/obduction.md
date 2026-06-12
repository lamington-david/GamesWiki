---
title: "Obduction"
developer: "Cyan Worlds"
publisher: "Cyan Worlds"
year: 2016
genres: ["adventure", "puzzle", "first-person"]
playtime: 9.6
steam_rating: 77.34
description: "Cyan's Kickstarter-funded spiritual successor to Myst transplants the studio's core design values — no enemies, no death, exploration through logic and observation — into a science-fiction setting where transplanted chunks of Earth sit inside alien worlds. Its value as a design reference is largely in how Cyan's philosophy survived a decade of dormancy, and the detailed postmortem on adapting a flatscreen game to VR."
design_tags: ["environmental storytelling", "exploration", "puzzle design", "no-death design", "VR design", "world building"]
resources:
  - type: video
    title: "Obduction Dev Talk: Josh Van Veldhuizen and Ryan Warzecha Talk About Obduction's Dev Process"
    speaker: "Josh Van Veldhuizen, Ryan Warzecha"
    source: "Cyan Worlds / YouTube"
    year: 2016
    duration: "25 min"
    summary: "QA Manager Josh Van Veldhuizen and Producer Ryan Warzecha discuss the full development pipeline of Obduction, covering Cyan's transition from proprietary engine technology to Unreal Engine 4, the team's workflow on a small budget, and the challenges of delivering Kickstarter promises while evolving the scope."
    url: "https://www.youtube.com/watch?v=PefxeMlkusw"
  - type: article
    title: "What Cyan Learned in Taking FMV-Rich Obduction from 2D into VR"
    author: "Hannah Gamiel"
    source: "Game Developer"
    year: 2017
    duration: "8 min read"
    summary: "Hannah Gamiel's postmortem on retrofitting Obduction for VR after its flatscreen release. Covers the performance challenges of hitting VR frame-rate requirements in a game not designed for them, the stereoscopic FMV solutions Cyan engineered, and the key lesson: decide early whether a game is VR-native rather than treating VR as an export target."
    url: "https://www.gamedeveloper.com/design/what-cyan-learned-in-taking-fmv-rich-i-obduction-i-from-2d-into-vr"
  - type: article
    title: "Obduction Let Cyan Experiment with VR in a Non-Myst Universe"
    author: "Game Developer Staff"
    source: "Game Developer"
    year: 2017
    duration: "6 min read"
    summary: "Pre-VRDC interview with Hannah Gamiel examining how Obduction gave Cyan a testing ground for VR in a world not constrained by Myst's canon. Discusses designing for two audiences simultaneously — long-time Myst players on flatscreen and first-time Cyan players entering through VR headsets."
    url: "https://www.gamedeveloper.com/design/-i-obduction-i-let-cyan-experiment-with-vr-in-a-non--i-myst-i-universe"
  - type: article
    title: "Into the Myst: The Oral History of America's Oldest Surviving Indie Game Studio"
    author: "Inverse Staff"
    source: "Inverse"
    year: 2023
    duration: "25 min read"
    summary: "A comprehensive oral history of Cyan Worlds from Myst through Obduction to Firmament. Covers the studio's near-collapse after the Uru MMO failure, the Kickstarter revival that funded Obduction, and the creative philosophy Rand Miller has maintained across thirty years of exploration-focused design."
    url: "https://www.inverse.com/gaming/myst-cyan-worlds-oral-history"
---

## Design Notes

**The Myst inheritance and what changed.** Obduction is Cyan's return after a decade of near-dormancy following the failure of Uru Live. It carries forward the studio's founding principles — no enemies, no death, no score — and adds a science-fiction device Myst never used: the world bubble, a sphere of transplanted terrain where Earth geography bleeds into alien landscape at a visible seam. This device is design-functional, not just aesthetic. Each bubble is literally two worlds occupying the same space, giving the puzzle design a layer of historical collision that Myst's Ages lacked. Players don't just explore a strange place; they read the collision of two strange places.

**Environmental storytelling without instruction.** Like Myst, Obduction provides almost no explicit direction. The player is given a name, an initial location, and a world that apparently had a life before their arrival. Journals, architecture, machine states, and artifacts tell the story — none of it labelled, none of it highlighted. This trust in player attention is Cyan's most consistent design signature, and Obduction is a test of how far it holds in a 2016 release context where most games assume players will not read text or examine environments without prompting.

**Interconnected world design.** Obduction's puzzles are not solved within a single world. Solutions depend on changes propagated across multiple bubble worlds via teleportation portals, requiring players to hold a mental model of several world-states at once. This creates the experience characteristic of Cyan's best work: the moment of understanding arrives late, after a long incubation of observation, and feels discovered rather than given. The design demands patience from players who would otherwise approach the game as a task list.

**VR as an afterthought vs. native VR design.** The VRDC postmortem on Obduction's VR port is one of the most candid public accounts of what happens when VR is added after a game ships. The core problem was performance: optimising a detailed flatscreen world to meet VR's frame-rate requirements required significant engine work that wasn't budgeted. The FMV sequences — a Cyan staple — required custom stereoscopic shader solutions so players wouldn't see the edges of video planes in 3D space. The lesson Cyan drew is one they applied to subsequent projects: commit to VR or don't; half-VR is an expensive middle path.

**The risk of Kickstarter nostalgia.** Obduction was funded by roughly 22,000 backers largely nostalgic for Myst and Riven. That community shaped its design brief conservatively: preserve the values, don't disrupt the formula. The relatively low Steam rating reflects a gap between the nostalgia-market and the broader player base that encountered it without the reference. It's an instructive case of community-funded design: when the backers are the most vocal critics and also the intended audience, the game risks being designed for an audience of one emotional moment rather than a durable design proposition.

---
