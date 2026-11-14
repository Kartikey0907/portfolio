# Kartikey — Portfolio

A single-page personal portfolio for **Kartikey**, a B.Tech CSE (AI/ML) undergraduate and builder based in New Delhi.

Built with plain HTML, CSS, and vanilla JavaScript — no frameworks, no build step, no dependencies. Designed to load fast, work on every screen size, and stay accessible.

## Live site

- **GitHub Pages:** [kartikey0907.github.io/portfolio](https://kartikey0907.github.io/portfolio/)
- **Source:** [github.com/Kartikey0907/portfolio](https://github.com/Kartikey0907/portfolio)

## What's inside

- Dark, responsive single-page layout
- Hero with an animated terminal card
- About, skills, featured projects, education, certifications, achievements, and contact sections
- Scroll-reveal animations, active navigation, scroll progress bar, and mobile menu
- Copy-email button with a toast notification
- Downloadable resume
- SEO meta tags, canonical URL, Open Graph/Twitter preview image, SVG favicon, and JSON-LD person schema
- Respects `prefers-reduced-motion`

## Files

```text
portfolio/
├── index.html                  # All page content
├── css/
│   └── styles.css              # Design system and responsive styles
├── js/
│   └── main.js                 # Navigation, animations, copy button
├── assets/
│   ├── favicon.svg             # Browser icon
│   ├── og-image.png            # Social sharing preview (1200×630)
│   └── Kartikey-Resume.pdf     # Downloadable resume
└── README.md
```

## Run locally

Open `index.html` directly in a browser, or serve the folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

The Google Fonts and external links need an internet connection. Everything else works offline.

## Deploy

The site is live on **GitHub Pages** at <https://kartikey0907.github.io/portfolio/>.

### GitHub Pages (live)

1. Push changes to the `main` branch.
2. In **Settings → Pages**, the source is **Deploy from a branch → main → / (root)**.
3. Every push to `main` redeploys the site automatically.

### Vercel (optional)

1. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
2. Framework preset: **Other**. Build command: leave empty. Output directory: leave empty.
3. Deploy.

If you move to a custom domain or a different host, update the canonical and social-preview URLs in `index.html` (the `canonical`, `og:url`, `og:image`, `twitter:image`, and JSON-LD `url` tags).

## Updating content

- **Text:** edit `index.html` directly; each section is marked with a comment and a numbered heading.
- **Colors and fonts:** change the custom properties at the top of `css/styles.css` (`--accent`, `--gradient`, `--font-heading`, etc.).
- **Resume:** replace `assets/Kartikey-Resume.pdf` with a newer PDF, keeping the same filename.
- **Social preview:** replace `assets/og-image.png` (1200×630) when your role or contact details change.
- **Links:** search `index.html` for `github.com/Kartikey0907`, `linkedin.com/in/kartikey-6a5854388`, and `kartikey0905@gmail.com` if any of them change.
- **Domain:** if the site moves, update the canonical and social-preview URLs listed in the deploy section above.

## Notes

- The contact section intentionally uses `mailto:` links and a copy-email button instead of a form, so there is no backend or third-party service to configure.
- The phone number from the resume is intentionally **not** displayed publicly.
- To add analytics later, paste a privacy-friendly snippet (for example Plausible or GoatCounter) before the closing `</body>` tag.
- The featured project metrics and descriptions are taken from Kartikey's resume. Live demo links point to the deployed apps, and source links point to the corresponding GitHub repositories.

## Credits

Design and build: custom, using HTML5, CSS3, and vanilla JavaScript.
Typefaces: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk), [Inter](https://fonts.google.com/specimen/Inter), and [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) via Google Fonts.
