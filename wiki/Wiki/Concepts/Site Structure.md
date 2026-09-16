---
type: Concept
title: Site Structure
description: The sections of the single page, in the order they render.
tags: [structure, html]
timestamp: 2026-09-16T00:00:00Z
---

# Site Structure

Everything lives in one file, [[index.html Page]], under
`website/`. The sticky navbar links to anchors on the same
page. As of 2026-09 the sections render in this order:

1. `#quiz`: the [[Health Balance Quiz]] with its launch
   panel, email gate and question card. It sits above the
   hero, so it is the first thing a visitor sees.
2. `#home`: hero. Headline "Take Control of the Balance of
   Your Health", four buttons (quiz, shop, partner,
   business presentation video) and the product photo.
3. Wake-up call (no id): a list of symptom questions
   (pain, fatigue, insomnia, colon issues) ending in a
   second quiz button.
4. `#products`: three cards (Balance Oil, Gut Health,
   Immune Support) and a shop button.
5. `#partner`: why to become a [[Zinzino]] partner, plus
   the business presentation video link.
6. `#zoom`: button to the live Zoom session at
   MeetWithStefanos.com.
7. `#about`: photo and bio of
   [[Stefanos Evangelos Tzivopoulos]].
8. `#contact`: I Love Aquatics, Instagram, LinkedIn.
9. Footer with the year filled in by [[script.js]].

Every quiz button carries the class `js-quiz-trigger`.
That is how [[script.js]] finds them, so a new quiz button
only needs the class.

## Sources

- `website/index.html`
