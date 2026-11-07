# Kartikey — Portfolio

A single-page personal portfolio for **Kartikey**, a B.Tech CSE (AI/ML) undergraduate and builder based in New Delhi.

Built with plain HTML, CSS, and vanilla JavaScript — no frameworks, no build step, no dependencies. Designed to load fast, work on every screen size, and stay accessible.

## What's inside

- Dark, responsive single-page layout
- Hero with an animated terminal card
- About, skills, featured projects, education, certifications, achievements, and contact sections
- Scroll-reveal animations, active navigation, scroll progress bar, and mobile menu
- Copy-email button with a toast notification
- Downloadable resume
- SEO meta tags, SVG favicon, and JSON-LD person schema
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

### Vercel (recommended)

1. Push this folder to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework preset: **Other**. Build command: leave empty. Output directory: leave empty.
4. Deploy.

Every push to the default branch will redeploy automatically.

### GitHub Pages

1. Create a repository named `Kartikey0907.github.io` (or any repository name).
2. Push these files to the `main` branch.
3. Open **Settings → Pages** and set the source to **Deploy from a branch → main → / (root)**.
4. The site will be available at `https://kartikey0907.github.io` (or `https://kartikey0907.github.io/<repo-name>/`).

If you use a project repository instead of the username repository, update the relative asset paths only if you move files out of the root.

## Updating content

- **Text:** edit `index.html` directly; each section is marked with a comment and a numbered heading.
- **Colors and fonts:** change the custom properties at the top of `css/styles.css` (`--accent`, `--gradient`, `--font-heading`, etc.).
- **Resume:** replace `assets/Kartikey-Resume.pdf` with a newer PDF, keeping the same filename.
- **Links:** search `index.html` for `github.com/Kartikey0907`, `linkedin.com/in/kartikey-6a5854388`, and `kartikey0905@gmail.com` if any of them change.

## Notes

- The contact section intentionally uses `mailto:` links and a copy-email button instead of a form, so there is no backend or third-party service to configure.
- The phone number from the resume is intentionally **not** displayed publicly.
- To add analytics later, paste a privacy-friendly snippet (for example Plausible or GoatCounter) before the closing `</body>` tag.
- The featured project metrics and descriptions are taken from Kartikey's resume. Live demo links point to the deployed apps, and source links point to the corresponding GitHub repositories.

## Credits

Design and build: custom, using HTML5, CSS3, and vanilla JavaScript.
Typefaces: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk), [Inter](https://fonts.google.com/specimen/Inter), and [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) via Google Fonts.
