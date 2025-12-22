export default function decorate(block) {
  const rows = Array.from(block.children);
  
  // First row is the section heading
  const headingRow = rows[0];
  const headingText = headingRow?.textContent?.trim() || '';
  
  // Create section heading
  const headingContainer = document.createElement('div');
  const heading = document.createElement('h2');
  heading.className = 'section-heading';
  heading.textContent = headingText;
  headingContainer.appendChild(heading);
  
  // Create cards container
  const cardsContainer = document.createElement('div');
  cardsContainer.className = 'cards-container';
  
  // Process card rows (skip first heading row)
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const cells = Array.from(row.children);
    
    const card = document.createElement('div');
    card.className = 'card';
    
    // Cell 0: Image
    if (cells[0]) {
      const imageDiv = document.createElement('div');
      imageDiv.className = 'card-image';
      const img = cells[0].querySelector('img');
      if (img) {
        imageDiv.appendChild(img.cloneNode(true));
      }
      card.appendChild(imageDiv);
    }
    
    // Cell 1: Title
    if (cells[1]) {
      const titleDiv = document.createElement('h3');
      titleDiv.className = 'card-title';
      titleDiv.textContent = cells[1].textContent.trim();
      card.appendChild(titleDiv);
    }
    
    // Cell 2: Description
    if (cells[2]) {
      const descDiv = document.createElement('p');
      descDiv.className = 'card-description';
      descDiv.textContent = cells[2].textContent.trim();
      card.appendChild(descDiv);
    }
    
    // Cell 3: CTA
    if (cells[3]) {
      const ctaDiv = document.createElement('div');
      ctaDiv.className = 'card-cta';
      const link = cells[3].querySelector('a');
      if (link) {
        ctaDiv.appendChild(link.cloneNode(true));
      }
      card.appendChild(ctaDiv);
    }
    
    cardsContainer.appendChild(card);
  }
  
  // Clear and rebuild block
  block.innerHTML = '';
  block.appendChild(headingContainer);
  block.appendChild(cardsContainer);
}