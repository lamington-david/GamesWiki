---
title: "Easy Pose"
developer: "Madcat Games"
publisher: "Madcat Games"
year: 2020
genres: ["Tool", "Art", "Software"]
playtime: 0.27
steam_rating: 86.48
description: "A 3D pose reference application for artists, ported from mobile to Steam in 2020. Easy Pose lets illustrators, animators, and comic artists rotate a poseable figure into any position and examine it from any angle. As a design object, it is a study in radical feature scope, touch-first UX on desktop, and how a tool's refusal to do more than one thing well becomes a product-market argument."
design_tags: ["tool-design", "ux-design", "artist-tools", "mobile-to-desktop", "scope-constraint", "reference-tools", "made-with-unity"]
resources: []
---

## Design Notes

**The 3D pose reference as a UX problem.** Drawing reference is an ancient artistic practice — pose books, life drawing classes, and photograph collections all serve the same function: giving artists a body to observe. Easy Pose digitises the pose book and solves a specific interaction problem: how to make a 3D figure poseable by an artist who needs a reference, not a 3D modeler who builds assets for production. Every interface decision follows from this. The gizmo controls, the slider panel for individual joints, the quick-pose presets — all are in service of the narrowest possible user intent: seeing a human body in a particular position, from any angle, in the next few seconds.

**Mobile-first simplicity on desktop.** Easy Pose was designed primarily for tablet use — artists drawing on iPads or Android tablets who needed a reference they could check without leaving their work application. The Steam release carries this inheritance directly: the UI is unusually minimal for desktop software, gesture-optimised, and free of the panel-heavy interface common in professional 3D tools. This is counterintuitively refreshing. Tools designed under mobile constraints tend to feel cleaner on desktop precisely because they weren't designed to contain everything professional users might eventually want. The experience of picking up Easy Pose without reading anything — and succeeding immediately — is the product of constraints that most desktop software imposes on itself only after years of interface simplification work.

**Feature scope as product definition.** Easy Pose does one thing: pose a human figure and display it. It does not render for production, export to game engines, animate, create perspective grids, or simulate lighting. This scope constraint is a design decision with clear commercial implications — it positions the tool against far more complex competitors by being significantly faster to start and impossible to misuse. The tool's ten million mobile downloads (across Google Play and the Apple App Store) suggest the constraint is correct: the majority of users needed pose reference, not a full 3D toolchain. Knowing what your tool is not is as important as knowing what it is.

**Made with Unity as an application platform.** Easy Pose was built in Unity and was a finalist in the Made with Unity 2018 innovation category — an unusual recognition for software rather than a game. This reflects a broader shift: game engines as general-purpose interactive application platforms. Unity's real-time rendering pipeline makes it well-suited for pose reference tools, where the user needs immediate visual feedback on every joint adjustment and camera rotation without a render pass. The same infrastructure built for interactive 3D games — real-time meshes, physics-ready rigs, immediate viewport response — was repurposed as the foundation for an artist utility. Easy Pose's existence is partly an argument that the distance between game engine and art tool is shorter than the software industry has historically assumed.

**Global reach through constrained design.** The mobile version's ten million downloads represent evidence that the UX problem Easy Pose solved — accessible, immediate 3D pose reference available on a device artists already use for digital drawing — was both real and underserved at the time of its release. That a small developer could build and distribute a tool that found a global artist audience, across multiple platforms and languages, without changing its core simplicity, is a data point on how narrow creative software finds its market through platform distribution rather than traditional publishing. The Steam release extends this reach to desktop artists while the tool's tight scope ensures that nothing about the transition requires the product to become something different.
