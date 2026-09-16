---
type: Concept
title: Health Balance Quiz
description: Five-question scored quiz that collects an email and points to the Zinzino shop.
tags: [quiz, funnel, javascript]
timestamp: 2026-09-16T00:00:00Z
---

# Health Balance Quiz

The quiz is the site's lead capture. A visitor gives an
email, answers five questions, gets one of three results,
and is sent to the [[Zinzino]] shop. The code is in
[[script.js]]; the markup is the `#quiz` section of
[[index.html Page]].

## Flow

1. Any `.js-quiz-trigger` click hides the launch panel,
   shows the email gate and scrolls to `#quiz`.
2. The email is checked with a simple regex. On success the
   quiz card appears.
3. Five questions (energy, pain, sleep and gut, brain fog,
   omega-3 food intake). Each answer scores 0 to 3, so the
   total is 0 to 15. "Next" stays hidden until an answer is
   picked.
4. The result band is chosen by total: 0-4 yellow, 5-9
   orange, 10-15 red. Each band has its own title, body,
   urgency line and button text.
5. The result is sent to the visitor through [[EmailJS]]
   and shown on the page with a shop button and "Retake
   Quiz". Retake resets all state and shows the launch
   panel again.

## Gotchas

- Questions, result texts and the shop URL are hard-coded
  in `script.js`. Editing the copy means editing JS.
- The result note puts the typed email into `innerHTML`.
  The regex does not forbid `<` or `>`, so a visitor can
  inject markup into their own page. Only they see it, but
  escaping the value would be cleaner.
- Emails are not stored anywhere by the site. If EmailJS is
  not configured, nothing is sent and the address is lost.
  See [[Known Gaps]].

## Sources

- `website/script.js`
- `website/index.html`
