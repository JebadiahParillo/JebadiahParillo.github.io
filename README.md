# JebadiahParillo.github.io

Personal site for Jebadiah Parillo, controls automation engineer. Live at **https://JebadiahParillo.github.io**.

Plain HTML, Tailwind (CDN), and vanilla JavaScript. No build step.

## Files

| File | What it is |
|---|---|
| `index.html` | The page layout, colors, and interactions |
| `content.js` | All text: summary, skills, experience, projects, links. Edit this to update the site |
| `resume.pdf` | Your résumé (add it yourself; use a copy without street address or phone) |
| `.nojekyll` | Tells GitHub Pages to serve files as-is |

## Update the site

1. Edit `content.js` (or replace `resume.pdf`).
2. Commit and push:
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```
3. GitHub Pages republishes in about a minute.

## Preview locally

Open `index.html` in a browser, or run:

```bash
python -m http.server 8000
```

then visit http://localhost:8000.
