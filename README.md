# WeLive2Inspire.com

A simple, single-page static personal website for
**Stefanos Evangelos Tzivopoulos** — world champion diver, coach, and inspirer.

## Live Domain

The site is intended for the domain **WeLive2Inspire.com**.

## Project Structure

```
website1/
├── index.html        # The single-page site
├── styles.css        # All styles (one file, per project rules)
├── script.js         # Vanilla JavaScript (footer year auto-fill)
├── images/
│   └── stefanos.jpg  # Hero photo of Stefanos
└── README.md
```

## Sections

- **Hero** — name, tagline, and championship photo
- **About** — short biography and mission
- **Career Highlights** — major diving achievements and titles
- **Coaching & Mission** — coaching background and the "We Live 2 Inspire" message
- **Connect** — links to I Love Aquatics, Instagram, and LinkedIn

## Running Locally

It is a static site — no build step required. Either:

- Open `index.html` directly in a browser, or
- Serve the folder, e.g. `python3 -m http.server 8000`, then visit
  <http://localhost:8000>.

## Tech Notes

- Plain, standard **vanilla JavaScript** (no frameworks).
- All styling lives in a single `styles.css` file.
- Fully responsive layout for mobile and desktop.
