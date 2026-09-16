---
type: Decision
title: Decision - Vanilla Static Site
description: No framework, no build step, one page, one stylesheet.
tags: [decision, architecture]
timestamp: 2026-09-16T00:00:00Z
---

# Decision - Vanilla Static Site

The site is plain HTML, one CSS file and one vanilla
JavaScript file. There is no framework, bundler or
backend.

## Why

- The project rules in `.claude/rules/web_development.md`
  forbid JavaScript frameworks and require all styles in a
  single `styles.css`.
- Every prompt in `myprompts/p01.md` asks for a single-page
  static site.
- The page has one interactive feature, the
  [[Health Balance Quiz]]. It does not need more.

## Consequences

- Any static host can serve `website/` as is.
- The quiz cannot send email by itself, so it uses the
  hosted [[EmailJS]] service from the browser.
- Local preview is a plain HTTP server, see [[server.py]].
- A few inline `style="display: none"` attributes remain in
  [[index.html Page]], which bends the one-stylesheet rule.
  See [[Known Gaps]].

## Sources

- `.claude/rules/web_development.md`
- `myprompts/p01.md`
