export default function decorate(block) {
  const row = block.children[0];
  if (!row) return;

  const cells = [...row.children];

  // Apply classes to each cell based on content type
  if (cells[0]) {
    cells[0].classList.add('hero-image');
  }
  if (cells[1]) {
    cells[1].classList.add('hero-heading');
  }
  if (cells[2]) {
    cells[2].classList.add('hero-description');
  }
  if (cells[3]) {
    cells[3].classList.add('hero-cta');
  }
}