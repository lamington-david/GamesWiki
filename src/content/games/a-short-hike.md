---
title: "A Short Hike"
developer: "Adam Robinson-Yu"
publisher: "Adam Robinson-Yu"
year: 2019
genres: ["Adventure", "Exploration", "Casual"]
playtime: 1.1
steam_rating: 96.74
description: "A tiny open-world game made solo in under four months, where a bird named Claire hikes to a mountain summit. A Short Hike is a precise design study in scope — how to build a complete, satisfying open world as one person by finding smart shortcuts in art, writing, and systems design, and by letting a clear emotional goal drive every scope decision."
design_tags: ["open-world", "solo-development", "scope-management", "exploration", "accessible-design", "feel-good"]
resources:
  - type: gdc_talk
    title: "Crafting A Tiny Open World: A Short Hike Postmortem"
    speaker: "Adam Robinson-Yu"
    source: "GDC / YouTube"
    year: 2020
    duration: "30 min"
    summary: "Adam Robinson-Yu's GDC 2020 postmortem on how he made A Short Hike in under four months as a solo developer. Covers the decision to pivot from a larger project, the use of agile-style sprints for solo development, how he found an art style that he could produce quickly without compromising visual quality, and the specific scope decisions that made a tiny open world feel complete."
    url: "https://www.youtube.com/watch?v=ZW8gWgpptI8"
  - type: article
    title: "Finding Smart Shortcuts in A Short Hike Postmortem"
    author: "Simon Carless"
    source: "Game Developer"
    year: 2021
    duration: "8 min read"
    summary: "Analysis of the key design and production shortcuts Robinson-Yu used: reusing tools from previous projects, finding an art style from working within limitations rather than designing toward one, using scrum methodology adapted for solo work, and how the game's short scope paradoxically produced stronger design clarity than a longer project would have."
    url: "https://www.gamedeveloper.com/design/finding-smart-shortcuts-in-a-short-hike-postmortem-unlocking-the-vault-4"
  - type: article
    title: "Road to the IGF: Adam Robinson-Yu's A Short Hike"
    author: "Joel Couture"
    source: "Game Developer"
    year: 2020
    duration: "6 min read"
    summary: "A pre-release interview with Robinson-Yu about the design goals of A Short Hike — specifically, the desire to create a natural-feeling open world where players set their own pace and carve their own path, inspired by real-world hiking experiences and the joy of incidental discovery."
    url: "https://www.gamedeveloper.com/business/road-to-the-igf-adam-robinson-yu-s-i-a-short-hike-i-"
---

## Design Notes

**Scope as a design tool, not a constraint.** Adam Robinson-Yu made A Short Hike in under four months by treating scope limitation as a creative resource rather than a compromise. He had been working on a larger project and set it aside to make something he could finish quickly; the short timeline forced every element of the game to earn its place. This produced an unusual clarity of purpose: the summit of the mountain is the goal, everything on the mountain is designed to reward exploration toward that goal, and nothing exists to pad the runtime. The completeness of the experience — players consistently report A Short Hike feeling finished rather than small — is a direct product of this deliberate compression.

**Finding an art style through limitation.** Robinson-Yu developed A Short Hike's distinctive dithered pixelart look by working within what he could produce quickly, rather than designing toward a target aesthetic and then trying to achieve it. The style emerged from the intersection of his art ability, the time available, and the look of games he admired. This is a productively different process from designing a visual target and building toward it: the resulting style is organically suited to the developer's capabilities, which means it could be produced consistently and without the friction of reaching for something beyond current skill. The dithering technique in particular produces a warmth and texture that more polished pixel art often lacks.

**Agile methods for solo development.** Robinson-Yu used a modified scrum approach for his solo development — sprint planning, retrospectives, and task lists applied to one-person production. He acknowledged in the GDC talk that these methods were designed for teams, but adapted to solo work they provided an external structure that counteracted the isolation of solo development. The sprints created artificial deadlines within the broader deadline, and the retrospectives gave him a formal mechanism to notice when something wasn't working rather than persisting out of sunk-cost. The broader lesson is that solo developers can benefit from team methodologies even without a team, because the methodologies solve human problems (distraction, scope creep, low morale) rather than just coordination problems.

**The feel of traversal as a primary design system.** Movement in A Short Hike is designed to feel good rather than to challenge the player. Gliding, climbing, and walking each have a physical satisfaction that rewards exploration not through content rewards (rare items, hidden rooms) but through the pleasure of moving through the world. This is a design choice with strong precedent in games like Journey and Flower — the traversal is the game, and making it feel wonderful is what makes exploration intrinsically motivating rather than contingent on external rewards. The game does have content rewards (golden feathers that unlock climbing stamina), but they are clearly secondary to the feeling of moving through the mountain.

**Dialogue as incidental discovery.** The NPCs scattered across the mountain have short, often funny conversations that are encountered incidentally rather than sought out. The writing is designed to be light and warm without being cloying — it rewards players who happen to walk past an NPC but doesn't demand to be read. This is a particular kind of open-world writing discipline: the game is not a narrative-heavy experience, but the writing is good enough that players who find it are glad they did. The game makes no effort to ensure players find every conversation, and this is correct: in a short open world, unforced incidental discovery is more pleasurable than completionist tracking.
