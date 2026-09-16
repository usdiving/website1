---
type: Module
title: script.js
description: Vanilla JS for the hero sparkles, footer year and the health quiz.
tags: [javascript, file]
timestamp: 2026-09-16T00:00:00Z
---

# script.js

`website/script.js` (about 400 lines) runs on
`DOMContentLoaded` and does three things:

- draws about 80 gold sparkle particles on a canvas it
  inserts into the hero, redrawn with
  `requestAnimationFrame` and rebuilt on resize;
- fills the footer year;
- runs the [[Health Balance Quiz]], including the email
  gate and the [[EmailJS]] send.

The three EmailJS ids sit at the top of the file with setup
steps in comments. The quiz questions, result bands and
`SHOP_URL` are plain arrays and strings further down.

## Sources

- `website/script.js`
