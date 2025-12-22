export default function decorate(block) {
  const rows = Array.from(block.children);
  
  // Clear the block
  block.innerHTML = '';
  
  // First row contains the section heading
  if (rows.length > 0) {
    const headingRow = rows[0];
    const headingText = headingRow.textContent.trim();
    const sectionHeading = document.createElement('h2');
    sectionHeading.className = 'section-heading';
    sectionHeading.textContent = headingText;
    block.appendChild(sectionHeading);
  }
  
  // Create cards container
  const cardsContainer = document.createElement('div');
  cardsContainer.className = 'cards-container';
  
  // Process remaining rows as cards
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
    
    // Cell 1: Heading
    if (cells[1]) {
      const headingDiv = document.createElement('h3');
      headingDiv.className = 'card-heading';
      headingDiv.textContent = cells[1].textContent.trim();
      card.appendChild(headingDiv);
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
  
  block.appendChild(cardsContainer);
}