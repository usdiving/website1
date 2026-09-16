---
type: Module
title: server.py
description: Local preview server for the website folder on port 8000.
tags: [python, dev]
timestamp: 2026-09-16T00:00:00Z
---

# server.py

`server.py` at the repo root serves `website/` on
http://localhost:8000 using the standard library
(`http.server`, `socketserver`). It is for local preview
only; production is any static host, see
[[Decision - Vanilla Static Site]].

It sends no-cache headers so edits to [[styles.css]] and
[[script.js]] show on reload, and it forces the right MIME
types for `.js` and `.css`. Run it with
`python3 server.py`. It changes into `website/` itself, so
it works from any directory.

## Sources

- `server.py`
