---
type: Module
title: styles.css
description: The one stylesheet for the site, black and gold theme.
tags: [css, file]
timestamp: 2026-09-16T00:00:00Z
---

# styles.css

`website/styles.css` (about 1050 lines) holds every style,
per [[Decision - Vanilla Static Site]]. Colors and sizes are
CSS variables in `:root`: gold shades, near-black
backgrounds, `--max-width: 960px`, `--radius: 14px`.

It is split by banner comments: animations, typography,
header, hero, hero buttons (with a shimmer sweep), wake-up
call, quiz (launch, email gate, card, result), sections,
product cards, about Stefanos, contact, footer, and a
responsive block at the end.

The quiz relies on two classes here,
`quiz-card--hidden` and `quiz-card--visible`, which
[[script.js]] toggles.

## Sources

- `website/styles.css`
