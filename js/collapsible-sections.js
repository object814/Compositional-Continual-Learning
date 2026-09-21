const folds = Array.from(document.querySelectorAll('.fold'));
const foldAllButton = document.querySelector('.fold-all');

function setFold(fold, open) {
  fold.classList.toggle('is-open', open);
  fold.querySelector('.fold-toggle').setAttribute('aria-expanded', String(open));
  // Keep collapsed content out of the tab order and the accessibility tree.
  fold.querySelector('.fold-body').inert = !open;
  updateFoldAllButton();
}

function updateFoldAllButton() {
  if (!foldAllButton) return;
  const allOpen = folds.every(fold => fold.classList.contains('is-open'));
  foldAllButton.textContent = allOpen ? 'Collapse all' : 'Expand all';
  foldAllButton.setAttribute('aria-pressed', String(allOpen));
}

// Open the section containing the hash target, then scroll to the target.
function revealHash(hash, smooth) {
  if (!hash || hash === '#') return false;
  let target;
  try {
    target = document.querySelector(hash);
  } catch (error) {
    return false;
  }
  if (!target) return false;
  const fold = target.closest('.fold-section')?.querySelector('.fold');
  if (fold) setFold(fold, true);
  target.scrollIntoView({behavior: smooth ? 'smooth' : 'auto', block: 'start'});
  return true;
}

folds.forEach(fold => {
  setFold(fold, false);
  fold.querySelector('.fold-toggle').addEventListener('click', () => {
    setFold(fold, !fold.classList.contains('is-open'));
  });
});

if (foldAllButton) {
  foldAllButton.addEventListener('click', () => {
    const open = !folds.every(fold => fold.classList.contains('is-open'));
    folds.forEach(fold => setFold(fold, open));
  });
}

document.addEventListener('click', event => {
  const link = event.target.closest('a[href^="#"]');
  if (!link) return;
  const hash = link.getAttribute('href');
  if (revealHash(hash, true)) {
    event.preventDefault();
    history.pushState(null, '', hash);
  }
});

window.addEventListener('hashchange', () => revealHash(location.hash, false));
window.addEventListener('beforeprint', () => folds.forEach(fold => setFold(fold, true)));

revealHash(location.hash, false);
