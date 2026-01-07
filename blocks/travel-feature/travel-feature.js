export default function decorate(block) {
  const row = block.children[0];
  if (!row) return;

  const cells = [...row.children];
  
  // Create wrapper structure
  row.classList.add('feature-row');
  
  // Create image container (left side)
  const imageWrapper = document.createElement('div');
  imageWrapper.classList.add('feature-image');
  
  // Create content container (right side)
  const contentWrapper = document.createElement('div');
  contentWrapper.classList.add('feature-content');
  
  // Process cells
  if (cells[0]) {
    cells[0].classList.add('feature-image-cell');
    imageWrapper.appendChild(cells[0].cloneNode(true));
  }
  
  if (cells[1]) {
    cells[1].classList.add('feature-title');
    contentWrapper.appendChild(cells[1].cloneNode(true));
  }
  
  if (cells[2]) {
    cells[2].classList.add('feature-description');
    contentWrapper.appendChild(cells[2].cloneNode(true));
  }
  
  if (cells[3]) {
    cells[3].classList.add('feature-cta');
    contentWrapper.appendChild(cells[3].cloneNode(true));
  }
  
  // Clear and rebuild row
  row.innerHTML = '';
  row.appendChild(imageWrapper);
  row.appendChild(contentWrapper);
}