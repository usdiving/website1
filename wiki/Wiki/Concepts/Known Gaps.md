---
type: Concept
title: Known Gaps
description: Placeholders, unused files and loose ends found in the 2026-09 review.
tags: [todo, review]
timestamp: 2026-09-16T00:00:00Z
---

# Known Gaps

Found while reviewing the site on 2026-09-16. Check the
code before acting on any of these; some may be fixed.

- **Partner links go nowhere.** Both "Become a Partner" and
  "Start Your Partner Journey" have `href="#"` in
  [[index.html Page]].
- **EmailJS is not configured.** The public key, service id
  and template id in [[script.js]] are still
  `YOUR_PUBLIC_KEY` and friends. Until they are filled in,
  [[EmailJS]] sends nothing, yet the page tells the visitor
  their results are on the way.
- **Bio titles lag the request.** The prompts asked for
  "World and European Masters diving champion"; the page
  still says "Multiple-Time World, European & National
  Champion". See [[Site History]].
- **Instagram link** points to `instagram.com/usdiving`,
  which is USA Diving, not Stefanos.
- **Unused images.** `stefanos-pro.jpg` and
  `stefanos2.jpg` are not referenced. See [[Site Images]].
- **Inline styles.** `style="display: none"` on
  `#quizNext` and `#quizResult`, against
  [[Decision - Vanilla Static Site]].
- **Unescaped email** in the quiz result, see
  [[Health Balance Quiz]].
- **Stale product copy.** The Balance Oil card uses a coffee
  cup icon (`&#9749;`).

## Sources

- `website/index.html`
- `website/script.js`
