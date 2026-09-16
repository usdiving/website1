---
type: Vendor
title: EmailJS
description: Hosted service that sends quiz results by email straight from the browser.
tags: [vendor, email]
website: https://www.emailjs.com
timestamp: 2026-09-16T00:00:00Z
---

# EmailJS

EmailJS sends email from client-side JavaScript, so the
static site needs no backend. [[index.html Page]] loads the
`@emailjs/browser@4` SDK from jsDelivr, and [[script.js]]
calls `emailjs.send` when the [[Health Balance Quiz]]
finishes.

## Setup

In [[script.js]], replace `EMAILJS_PUBLIC_KEY`,
`EMAILJS_SERVICE_ID` and `EMAILJS_TEMPLATE_ID`. The
template must use these variables: `to_email`,
`result_emoji`, `result_title`, `result_body`,
`result_urgency`, `result_cta`, `shop_url`.

The public key is meant to be visible in the browser, so it
is fine in the repo. Nothing else secret should go there.

As of 2026-09 the values are still placeholders, see
[[Known Gaps]].

## Sources

- `website/script.js`
