export default function decorate(block) {
  const rows = Array.from(block.children);
  
  // First row is the section heading
  const headingRow = rows[0];
  const headingText = headingRow.querySelector('div').textContent.trim();
  
  // Create section heading
  const sectionHeading = document.createElement('h2');
  sectionHeading.className = 'section-heading';
  sectionHeading.textContent = headingText;
  
  // Create cards container
  const cardsContainer = document.createElement('div');
  cardsContainer.className = 'cards-container';
  
  // Process each card row (skip first row which is heading)
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const cells = Array.from(row.children);
    
    const card = document.createElement('div');
    card.className = 'card';
    
    // Card image
    if (cells[0]) {
      const imageDiv = document.createElement('div');
      imageDiv.className = 'card-image';
      const img = cells[0].querySelector('img');
      if (img) {
        imageDiv.appendChild(img.cloneNode(true));
      }
      card.appendChild(imageDiv);
    }
    
    // Card title
    if (cells[1]) {
      const titleEl = document.createElement('h3');
      titleEl.className = 'card-title';
      titleEl.textContent = cells[1].textContent.trim();
      card.appendChild(titleEl);
    }
    
    // Card description
    if (cells[2]) {
      const descEl = document.createElement('p');
      descEl.className = 'card-description';
      descEl.textContent = cells[2].textContent.trim();
      card.appendChild(descEl);
    }
    
    // Card CTA
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
  
  // Clear block and rebuild
  block.textContent = '';
  block.appendChild(sectionHeading);
  block.appendChild(cardsContainer);
}