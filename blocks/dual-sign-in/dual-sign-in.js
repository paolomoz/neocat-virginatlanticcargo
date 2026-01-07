export default function decorate(block) {
  const rows = [...block.children];

  rows.forEach((row) => {
    row.classList.add('dual-sign-in-option');
    const cells = [...row.children];

    if (cells[0]) {
      cells[0].classList.add('dual-sign-in-heading');
      // Check for NEW! badge text and wrap it
      const headingText = cells[0].textContent;
      if (headingText.includes('NEW!')) {
        const parts = headingText.split('NEW!');
        cells[0].innerHTML = parts[0].trim() + '<span class="new-badge">NEW!</span>';
      }
    }

    if (cells[1]) {
      cells[1].classList.add('dual-sign-in-description');
    }

    if (cells[2]) {
      cells[2].classList.add('dual-sign-in-cta');
    }

    if (cells[3]) {
      cells[3].classList.add('dual-sign-in-secondary');
    }
  });
}