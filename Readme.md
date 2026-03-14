# Institute of Digital Risk — Website & Brand Identity

A complete brand identity and responsive single-page website built for the **Institute of Digital Risk (IDR)**, an industry-led training and deployment institute focused on digital, cyber, and AI risk.

---

## Live Demo

> [Add your Netlify / GitHub Pages link here]

---

## Project Structure

```
idr-website/
├── index.html          # Main HTML file (semantic structure)
├── style.css           # All styles (layout, animations, responsive)
├── main.js             # JavaScript (nav, form, scroll animations)
├── idr-logo-icon.svg       # Logo — icon only variant
└── idr-logo-wordmark.svg   # Logo — icon + full name variant
```

---

## What's Included

### Logo Design
- Built entirely in SVG — no external tools or assets
- Two variants: **icon-only** (for favicons, avatars) and **icon + wordmark** (for headers and documents)
- Isometric cube icon using orange, black and dark grey — symbolising structure, resilience, and the multi-dimensional nature of risk
- Scalable and crisp at any size

### Homepage Sections
| Section | Description |
|---|---|
| **Hero** | Full-screen dark hero with animated headline, cube illustration, and scrolling ticker |
| **About IDR** | Two-column layout with organisation description and four stat cells |
| **Model / Pillars** | Three service cards (Academy, Innovation, Advisory) + Train→Innovate→Hire→Deploy pipeline |
| **Community** | Audience cards and sector tag cloud |
| **Contact** | Interest registration form with client-side validation |
| **Footer** | Navigation links and copyright |

---

## Tech Stack

- **HTML5** — semantic elements (`header`, `nav`, `main`, `section`, `footer`)
- **CSS3** — custom properties, Flexbox, Grid, keyframe animations, media queries
- **Vanilla JavaScript** — no libraries or frameworks
- **Google Fonts** — DM Serif Display + DM Sans

> No Bootstrap. No jQuery. No build tools. Just clean, hand-written code.

---

## Features

- Sticky navigation bar with scroll-triggered border and shadow
- Smooth scrolling between sections
- Hamburger menu for mobile with open/close animation
- Hero entrance animations (staggered fade-up)
- Scroll-triggered fade-in on cards and stat cells (Intersection Observer)
- Hover states on all interactive elements
- Contact form with basic validation and success message
- Fully responsive — tested on mobile, tablet, and desktop

---

## Getting Started

No installation or build step needed.

1. Clone or download the repository
2. Open `index.html` in any browser

```bash
git clone https://github.com/your-username/idr-website.git
cd idr-website
open index.html
```

---

## Colour Palette

| Name | Hex | Usage |
|---|---|---|
| Orange | `#E85A1B` | Primary accent, CTAs, logo |
| Orange Light | `#FF7A38` | Hover states, hero italic text |
| Black | `#0D0D0D` | Hero background, pipeline strip |
| Ink | `#1C1C1C` | Body text |
| Mid | `#3D3D3D` | Secondary text |
| Muted | `#767676` | Captions, descriptions |
| Off White | `#F8F6F3` | Section backgrounds |
| White | `#FFFFFF` | Cards, base background |

---

## Responsive Breakpoints

| Breakpoint | Layout changes |
|---|---|
| `> 900px` | Full desktop: two-column grids, horizontal nav |
| `≤ 900px` | Single-column layout, hamburger menu, stacked pipeline |
| `≤ 480px` | Tighter padding, single-column stat grid |

---

## Author

Built as a frontend portfolio project demonstrating HTML, CSS, and JavaScript skills without any external frameworks or dependencies.

---

## License

This project is open for portfolio and educational use.