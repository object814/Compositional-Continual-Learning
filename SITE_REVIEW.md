# Website content review

The latest ICRA LaTeX is the reference for the main story. The earlier appendix
supplies the detailed metric definitions and complete results. No paper source
files were modified.

## Updated on the website

- Replaced the teaser, model separation, and main results figure with exports
  from the latest PDFs, using the crops in their LaTeX wrappers.
- Added the router visualisation, expert ablation, and complete reuse discussion
  from the new results subsection. Added a descriptive ablation caption based on
  the figure and results text because its source caption is `TODO`.
- Corrected BinPnP to **red → blue; yellow → blue; red → purple; composition:
  yellow → purple**. The other five curricula retain their task definitions.
- Added the shared observation/action interface, continual learning settings,
  stored/frozen task heads, and the privileged full-distribution encoder setup.
- Added the latest limitations: six simulated curricula, one size per baseline,
  unmatched parameter/compute budgets, growing PWM capacity, and the encoder's
  access to all tasks before continual training.
- Qualified DreamerV3's advantage as an average over suites, rather than every
  suite–method combination. The numerical tables contain exceptions.
- Removed the old results-caption claim about coloured suite backgrounds, which
  are absent from the new figure. Clarified that shrinking PackNet free capacity
  constrains longer curricula, without asserting a hard task-count limit from
  the stated fractional-allocation rule.
- Qualified the learning-curve caption: the PWM/TD-MPC2 frozen-encoder comparison
  shares an encoder but is not parameter-matched.
- Kept the abstract, title, numerical results, and metric equations consistent
  with the supplied sources. The complete-results LaTeX table, metric illustration
  PDF, and all three complete-learning-curve PDFs are byte-identical between
  versions. All 168 appendix numeric cells match the latest results table.
- Kept figure files outside the temporary sources, with no author metadata;
  vendored fonts and MathJax so the page makes no external asset requests.

## Issues remaining in the paper sources

These are author-facing observations, not changes to the manuscript or its data.

1. `ICRA_Latest/root.pdf` is a three-page IEEE template headed “Preparation of
   Papers for IEEE Sponsored Conferences & Symposia,” not the compiled manuscript.
   The website omits the broken Paper link and preserves the pre-existing deletion
   of `paper.pdf`.
2. `expert_ablation_figure.tex` still has `\caption{TODO}`. The source does not
   specify the fidelity formula, evaluation horizon, ablation renormalisation
   details, or the meaning of the ablation error bars. The website does not invent
   these details or unprovided numerical values.
3. The teaser PDF itself contains question-mark/replacement symbols next to the
   primitive-task rows. The model-separation PDF repeats `a2 r2 q2` in its third
   task-head row. The router legend says “Uniformed expert weight.” These are in
   the supplied artwork; the website exports preserve it. Correct the original
   figures before a final manuscript export if those labels are unintended.
4. The metric appendix says curves are averaged across three seeds **before**
   applying the metric, while the table/figure captions describe means and ranges
   of seed scores. BWT is nonlinear, so these aggregation orders need not agree.
   The website preserves the supplied definitions and captions; experiment code
   or raw runs are needed to resolve the intended reporting convention.
5. The new main-figure caption still mentions shaded suite backgrounds, and the
   results prose claims consistent DreamerV3 dominance despite individual table
   exceptions. The website uses the more precise descriptions above.
6. The paper's “only modularity differs” interpretation should be read with its
   own conclusion acknowledging unmatched budgets and growing PWM capacity.
7. Several original figure PDFs contain author metadata, and the LaTeX includes
   commented author information. Do not publish the source folders or raw figure
   PDFs as anonymous supplementary files. Only clean raster exports are deployed.

## Deployment boundary

The website is hosted separately on Cloudflare. Content anonymity cannot
anonymize an author-associated GitHub account, repository history, or domain.
Publish only the static files listed in README from an anonymous hosting context
for review. The temporary folders, source documents, and working history should
not be part of that publication copy.

## Validation

- Compared all 168 appendix numbers with the latest LaTeX and checked the
  monolithic table's bold/underline selections against its numeric comparisons.
- Confirmed the abstract matches the latest LaTeX after normalising formatting.
- Checked every local HTML asset/anchor and Git ignore eligibility for all
  deployable files; scanned them for source-author identifiers.
- Loaded an isolated copy containing only deployable files under a GitHub Pages
  style repository subpath in Chromium at 1440, 390, and 320 pixels wide.
  All nine figures and 43 math expressions loaded with no missing assets,
  JavaScript or math errors, external network requests, or page-wide overflow.
- Inspected rendered figures, page layout, and PNG metadata. `git diff --check`
  passed. These checks verify transcription and website behaviour, not the
  underlying experimental calculations or hosting-account anonymity.
