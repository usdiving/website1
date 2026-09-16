# WeLive2Inspire.com

A single-page static website that invites visitors to try
**Zinzino** health products or join Zinzino as a partner.
It features **Stefanos Evangelos Tzivopoulos**, a World and
European diving champion, coach and Zinzino brand
ambassador.

## Project Structure

```
website1/
├── website/                   # The site (deploy this folder)
│   ├── index.html             # The single page
│   ├── styles.css             # All styles (one file)
│   ├── script.js              # Vanilla JS: sparkles, quiz, footer year
│   └── images/
│       ├── zinzino-products.png   # Hero: BalanceOil+ and BalanceTest
│       ├── Stefanos_diamond.jpg   # About section photo
│       ├── stefanos-pro.jpg       # (unused)
│       └── stefanos2.jpg          # (unused)
├── server.py                  # Local preview server, port 8000
├── myprompts/p01.md           # Requirements history (prompts)
├── wiki/                      # Project knowledge base (see below)
├── .claude/rules/             # Coding rules for this project
└── README.md
```

## Page Sections

In the order they appear on the page:

1. **Health Quiz** (`#quiz`): email gate, 5 scored
   questions, result with a shop button
2. **Hero** (`#home`): "Take Control of the Balance of
   Your Health", buttons for quiz, shop, partner and the
   business presentation video
3. **Wake-up call**: symptom questions leading to the quiz
4. **Products** (`#products`): Balance Oil, Gut Health,
   Immune Support
5. **Partner** (`#partner`): the Zinzino partner offer
6. **Zoom** (`#zoom`): live session at MeetWithStefanos.com
7. **About** (`#about`): Stefanos's photo and bio
8. **Connect** (`#contact`): I Love Aquatics, Instagram,
   LinkedIn

## Health Quiz

The quiz asks for an email, then 5 questions scored 0-3
each. The total (0-15) picks one of three results: 0-4,
5-9 or 10-15. The result is shown on the page and emailed
to the visitor through [EmailJS](https://www.emailjs.com).

To enable email, set these three values at the top of
`website/script.js`:

```js
var EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";
var EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";
var EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
```

The template variables are listed in the comment above
them. Questions, result texts and the shop URL are also
in `script.js`.

## Running Locally

No build step. Either:

- `python3 server.py`, then open <http://localhost:8000>
  (sends no-cache headers, so edits show on reload), or
- `cd website && python3 -m http.server 8000`

## Deploying

Upload the contents of `website/` to any static host.

## To Do

- Partner buttons still link to `#`
- EmailJS ids are placeholders
- Instagram link points to `@usdiving`, not Stefanos
- Two unused photos in `website/images/`

Details in `wiki/Wiki/Concepts/Known Gaps.md`.

## Tech Notes

- Plain vanilla JavaScript, no frameworks
- All styles in one `styles.css` (black and gold theme)
- External: Google Fonts, EmailJS SDK from jsDelivr
- Responsive for mobile and desktop

## Wiki

`wiki/` holds the project knowledge base (structure,
quiz logic, decisions, history, known gaps). Start at
`wiki/Dashboards/Home.md`, or browse it with `/wiki-serve`.
