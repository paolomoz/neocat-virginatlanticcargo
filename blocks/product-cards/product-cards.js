export default function decorate(block) {
  const rows = Array.from(block.children);
  
  // Create wrapper
  const wrapper = document.createElement('div');
  wrapper.className = 'product-cards-wrapper';
  
  // First row is the section heading
  if (rows.length > 0) {
    const headingRow = rows[0];
    const headingText = headingRow.textContent.trim();
    const heading = document.createElement('h2');
    heading.className = 'product-cards-heading';
    heading.textContent = headingText;
    wrapper.appendChild(heading);
  }
  
  // Create grid container for cards
  const grid = document.createElement('div');
  grid.className = 'product-cards-grid';
  
  // Process remaining rows as cards
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const cells = Array.from(row.children);
    
    const card = document.createElement('div');
    card.className = 'product-card';
    
    // Cell 0: Image
    if (cells[0]) {
      const imageDiv = document.createElement('div');
      imageDiv.className = 'product-card-image';
      const img = cells[0].querySelector('img');
      if (img) {
        imageDiv.appendChild(img.cloneNode(true));
      }
      card.appendChild(imageDiv);
    }
    
    // Cell 1: Title
    if (cells[1]) {
      const title = document.createElement('h3');
      title.className = 'product-card-title';
      title.textContent = cells[1].textContent.trim();
      card.appendChild(title);
    }
    
    // Cell 2: Description
    if (cells[2]) {
      const description = document.createElement('p');
      description.className = 'product-card-description';
      description.textContent = cells[2].textContent.trim();
      card.appendChild(description);
    }
    
    // Cell 3: CTA
    if (cells[3]) {
      const ctaDiv = document.createElement('div');
      ctaDiv.className = 'product-card-cta';
      const link = cells[3].querySelector('a');
      if (link) {
        ctaDiv.appendChild(link.cloneNode(true));
      }
      card.appendChild(ctaDiv);
    }
    
    grid.appendChild(card);
  }
  
  wrapper.appendChild(grid);
  
  // Clear block and append new structure
  block.textContent = '';
  block.appendChild(wrapper);
}