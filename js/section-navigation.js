const sectionDropdowns = document.querySelectorAll('.section-dropdown');
let pinnedDropdown = null;

function closeDropdown(dropdown) {
  dropdown.open = false;
  if (pinnedDropdown === dropdown) pinnedDropdown = null;
}

function openDropdown(dropdown) {
  sectionDropdowns.forEach(other => {
    if (other !== dropdown) closeDropdown(other);
  });
  dropdown.open = true;
}

sectionDropdowns.forEach(dropdown => {
  const summary = dropdown.querySelector('summary');

  dropdown.addEventListener('pointerenter', event => {
    if (event.pointerType === 'mouse') openDropdown(dropdown);
  });
  dropdown.addEventListener('pointerleave', event => {
    if (event.pointerType === 'mouse' && pinnedDropdown !== dropdown &&
        !dropdown.contains(document.activeElement)) closeDropdown(dropdown);
  });
  summary.addEventListener('click', event => {
    event.preventDefault();
    if (pinnedDropdown === dropdown) {
      closeDropdown(dropdown);
    } else {
      openDropdown(dropdown);
      pinnedDropdown = dropdown;
    }
  });
  dropdown.addEventListener('focusout', event => {
    if (!dropdown.contains(event.relatedTarget)) closeDropdown(dropdown);
  });
  dropdown.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => closeDropdown(dropdown));
  });
});

document.addEventListener('click', event => {
  sectionDropdowns.forEach(dropdown => {
    if (!dropdown.contains(event.target)) closeDropdown(dropdown);
  });
});
document.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  sectionDropdowns.forEach(dropdown => {
    if (!dropdown.open) return;
    if (dropdown.contains(document.activeElement)) dropdown.querySelector('summary').focus();
    closeDropdown(dropdown);
  });
});
