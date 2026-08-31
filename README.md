# Benchmarking World Models for Continual Learning on Compositional Tasks

Project page hosting the paper's abstract, teaser, and the full appendix
(metric definitions, complete numerical results, complete learning curves).

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Hosting (GitHub Pages)

```bash
git add -A && git commit -m "Project page" && git push
```

Then on GitHub: **Settings → Pages → Source: Deploy from a branch → `main` / `/ (root)`**.
The page appears at `https://<user>.github.io/Compositional-Continual-Learning/`
after a minute or two.

## Layout

- `index.html` — the whole page
- `static/images/` — figures rendered from the source PDFs
- `css/bulma.min.css`, `css/index.css`, `js/fontawesome.all.min.js` — template assets
- `paper.pdf` — linked from the Paper button
- `media/` — source figure PDFs and LaTeX tables, kept local (gitignored)
