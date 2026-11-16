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

## Project statuses

Each entry in `projects` (in `content.js`) has a `repo` (`owner/name`). The page asks the GitHub API for that repo when it loads and sets the badge:

| Badge | When |
|---|---|
| Released vX | the repo has a GitHub release |
| Active | last push within 30 days |
| In progress | last push 31–90 days ago |
| Paused | no push for over 90 days |
| Archived | the repo is archived |
| *(the project's `status`)* | no public repo with that name yet |

To bring an idea to life on the site, create a **public** repo with the name in its `repo` field. Private repos read as "not created yet."

## Preview locally

Open `index.html` in a browser, or run:

```bash
python -m http.server 8000
```

then visit http://localhost:8000.
