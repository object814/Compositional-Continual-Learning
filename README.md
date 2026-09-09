# Benchmarking World Models for Continual Learning on Compositional Tasks

Anonymous supplementary website for the ICRA submission. It contains the benchmark,
main results, modular reuse analysis, limitations, and the complete appendix
(metric definitions, numerical results, and learning curves).

## Local preview

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Open `http://localhost:8000`. No build step or internet connection is needed.
Figures, fonts, icons, and MathJax are served locally. Click a figure to open its
full-resolution image.

## Hosting and anonymous review

The deployable files are `index.html`, `css/`, `js/`, `static/`, `robots.txt`, and
`.nojekyll`. All required assets are eligible for Git tracking. Temporary paper
sources and upload archives are ignored and are not needed to serve the site.

The live website is hosted on Cloudflare. This GitHub repository stores the
maintained source; pushing here does not update a manual Cloudflare deployment.
To publish an update, upload a fresh copy of only the deployable files to the
existing Cloudflare project. Keep `index.html` at the upload root. All asset paths
are relative. Do not upload `.git/`, temporary paper sources, or maintenance notes.
The `.nojekyll` file is retained for optional GitHub Pages compatibility.

For the review URL, use an anonymous host/account whose profile, repository,
commit history, and domain do not identify the authors. Publishing this working
repository under an author-associated account does not become anonymous just
because the page says “Anonymous Authors.” Use a separate anonymous publication
copy without this repository's history when needed. Do not add analytics,
author links, affiliations, acknowledgements, or identifying PDF metadata.
The `noindex` metadata and `robots.txt` discourage indexing; they do not provide
access control or anonymize hosting.

[ICRA's submission guidance](https://2027.ieee-icra.org/contribute/call-for-icra-2027-papers-now-accepting-submissions/)
allows URLs but does not require reviewers to consult them. Supplementary paper
content must fit within the eight-page limit; the website is optional supporting
material. See also the [RAS anonymity rules](https://www.ieee-ras.org/publications/rules-for-the-double-anonymous-review-process/).

## Content and assets

- `index.html` — paper content, supplementary analysis, and appendix.
- `static/images/` — local figure exports; no source PDF author metadata.
- `css/fonts.css`, `static/fonts/` — Noto Sans with its OFL license.
- `static/vendor/mathjax/` — MathJax 3.2.2, its local fonts/extensions, and license.
- `css/bulma.min.css`, `css/index.css`, `js/fontawesome.all.min.js` — styling and icons.
- `SITE_REVIEW.md` — content provenance and remaining issues in the supplied paper sources.

The Paper button is omitted because no compiled ICRA manuscript was supplied:
`ICRA_Latest/root.pdf` is an unrelated IEEE template. When a real anonymous PDF is
available, check its visible content, metadata, and links before adding it as
`paper.pdf` and restoring the button. The website does not depend on that file.
