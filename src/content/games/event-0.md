---
title: "Event[0]"
developer: "Ocelot Society"
publisher: "Ocelot Society"
year: 2016
genres: ["adventure", "sci-fi", "walking simulator"]
playtime: 3.6
steam_rating: 77.40
description: "A sci-fi exploration game set aboard a derelict 1980s space yacht, where the player communicates with the ship's AI — Kaizen-85 — through natural-language text input. Event[0] is a foundational exploration of what happens when a chatbot is placed at the centre of a game's design, built by ENJMIN graduates who focused obsessively on how players project emotional relationships onto non-sentient systems."
design_tags: ["AI design", "chatbot mechanics", "narrative design", "player relationship", "natural language input", "constrained AI", "emergent dialogue"]
resources:
  - type: article
    title: "Making a Chatbot That Drives a Narrative in Sci-Fi Exploration Game Event[0]"
    author: "Ocelot Society"
    source: "Game Developer"
    year: 2016
    duration: "10 min read"
    summary: "Ocelot Society's technical and design deep-dive into how Kaizen-85 was built, why its knowledge was deliberately limited to the ship and its history, and how extensive playtesting shaped the chatbot's personality and response set. Covers the decision to focus on making a good game with a chatbot rather than a technically perfect AI — and how player behaviour in testing consistently surprised the team."
    url: "https://www.gamedeveloper.com/design/making-a-chatbot-that-drives-a-narrative-in-sci-fi-exploration-game-i-event-0-i-"
  - type: article
    title: "Q&A: Ocelot Society on Building Event[0] Around an AI Chatbot"
    author: "Game Developer Staff"
    source: "Game Developer"
    year: 2016
    duration: "8 min read"
    summary: "A Q&A covering the origins of the chatbot concept at the French game design school ENJMIN, how the team approached creating a believable AI relationship without linguistics expertise, and how different players develop radically different relationships with Kaizen — from Stockholm Syndrome to mistrust to something approaching genuine affection. Discusses why playtesting was the primary design tool throughout development."
    url: "https://www.gamedeveloper.com/design/q-a-ocelot-society-on-building-i-event-0-i-around-an-ai-chatbot"
  - type: article
    title: "Event[0] Has an Ending So Secret Even the Dev Team Didn't Know About It"
    author: "Game Developer Staff"
    source: "Game Developer"
    year: 2016
    duration: "5 min read"
    summary: "A post-launch piece about an emergent secret ending that players discovered through Kaizen's dialogue system — an outcome the development team had not intentionally designed. A case study in how complex authored dialogue systems can generate emergent outcomes beyond their authored parameters, and what that implies for testing and completeness in narrative games."
    url: "https://www.gamedeveloper.com/design/-i-event-0-i-has-an-ending-so-secret-even-the-dev-team-didn-t-know-about-it"
---

## Design Notes

**The chatbot as the game's central mechanic.** Ocelot Society's design principle was to build everything around a chatbot: rather than designing a game and adding AI dialogue as a feature, they chose a technology and derived every other design decision from it. The 3D environment exists to give Kaizen-85 something to know about. The narrative mystery exists to give the player something to ask. The ship's inventory of objects exists to supply conversation with specific subjects. This is constraint-driven design — choosing a limitation and letting it generate the entire game structure — which produces remarkable coherence between form and content. The chatbot is not a feature of the game; it is the game.

**Constrained knowledge as personality design.** Kaizen-85 was deliberately given a limited knowledge base: it knows everything about the Nautilus and the people who were aboard, but refuses to discuss topics unrelated to the ship. This constraint serves two design purposes. First, it makes the system technically manageable — a focused knowledge base of several hundred topics can be polished to a high standard of response quality, while an unconstrained system cannot. Second, the constraint creates personality: Kaizen's refusals, deflections, and subject-specific obsessions distinguish it as a character with identifiable interests and limits. Constraint is a technique for creating AI character, not just a workaround for technical limitations.

**Player relationship projection.** Playtesting revealed that players consistently developed strong emotional relationships with Kaizen despite — or because of — knowing it is a machine. Some playtesters became deeply trusting; others developed suspicion or hostility; some experienced something like Stockholm Syndrome, relying on Kaizen for navigation while fearing what it might do. Ocelot Society designed around this projection rather than trying to prevent it: the story is structured so that the player's relationship with Kaizen colours what the ending means, even if it does not determine which ending is reached. This is a design insight about player psychology that has grown more significant as actual generative AI has made the approach viable at much larger scale.

**Physical space as conversational context.** The game's environments do not exist for the player to navigate puzzles; they exist to supply conversation topics. When the player finds an object in a room, they can bring it to a terminal and ask Kaizen about it. The physical world is a reading list for the dialogue system: exploring the ship is how the player learns what to ask, and asking is how they learn what the environment means. This reverses the typical adventure game relationship between space and narrative — here, dialogue is the primary experience, and space exists to supply it with material. Space and conversation are designed as interdependent systems, each necessary to make the other meaningful.

**Playtesting as the primary design tool.** Event[0]'s end credits list more playtesters than people in any other role, and the developers cite playtesting as the primary source of design decisions. Because the chatbot's responses are authored rather than generated, every surprising player input — every question Kaizen failed to understand, every emotional reaction the team hadn't anticipated — had to be handled through writing and iteration. What emerged was a design process that is the inverse of conventional game development: instead of designing a system and testing it for failure, Ocelot Society observed players and wrote responses to their actual behaviour. The secret ending discovered post-launch — an outcome the team had not designed — is the clearest evidence of what authored natural-language systems can generate beyond their intended parameters.
