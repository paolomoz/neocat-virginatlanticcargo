export default function decorate(block) {
  // Add wrapper for background styling
  const wrapper = block.closest('.feature-cards-wrapper') || block.parentElement;
  if (wrapper) {
    wrapper.classList.add('feature-cards-wrapper');
  }

  // Process each card row
  [...block.children].forEach((row) => {
    const cells = [...row.children];
    row.classList.add('card');

    // Cell 0: Image
    if (cells[0]) {
      cells[0].classList.add('card-image');
    }

    // Cell 1: Eyebrow text
    if (cells[1]) {
      cells[1].classList.add('card-eyebrow');
    }

    // Cell 2: Heading
    if (cells[2]) {
      cells[2].classList.add('card-heading');
    }

    // Cell 3: Description
    if (cells[3]) {
      cells[3].classList.add('card-description');
    }
  });
}