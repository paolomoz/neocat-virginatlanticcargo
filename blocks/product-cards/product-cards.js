export default function decorate(block) {
  const rows = [...block.children];
  
  // Clear block
  block.innerHTML = '';
  
  // First row is the section heading
  if (rows.length > 0) {
    const headingRow = rows[0];
    const headingText = headingRow.textContent.trim();
    const headingDiv = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.className = 'section-heading';
    h2.textContent = headingText;
    headingDiv.appendChild(h2);
    block.appendChild(headingDiv);
  }
  
  // Create cards container
  const cardsContainer = document.createElement('div');
  cardsContainer.className = 'cards-container';
  
  // Process remaining rows as cards
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const cells = [...row.children];
    
    const card = document.createElement('div');
    card.className = 'card';
    
    // Image cell
    if (cells[0]) {
      const imageDiv = document.createElement('div');
      imageDiv.className = 'card-image';
      const img = cells[0].querySelector('img');
      if (img) {
        imageDiv.appendChild(img.cloneNode(true));
      }
      card.appendChild(imageDiv);
    }
    
    // Title cell
    if (cells[1]) {
      const titleDiv = document.createElement('h3');
      titleDiv.className = 'card-title';
      titleDiv.textContent = cells[1].textContent.trim();
      card.appendChild(titleDiv);
    }
    
    // Description cell
    if (cells[2]) {
      const descDiv = document.createElement('p');
      descDiv.className = 'card-description';
      descDiv.textContent = cells[2].textContent.trim();
      card.appendChild(descDiv);
    }
    
    // CTA cell
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