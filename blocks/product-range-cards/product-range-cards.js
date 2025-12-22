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
    
    if (cells.length >= 4) {
      const card = document.createElement('div');
      card.className = 'card';
      
      // Card image
      const cardImage = document.createElement('div');
      cardImage.className = 'card-image';
      const img = cells[0].querySelector('img');
      if (img) {
        cardImage.appendChild(img.cloneNode(true));
      }
      card.appendChild(cardImage);
      
      // Card title
      const cardTitle = document.createElement('h3');
      cardTitle.className = 'card-title';
      cardTitle.textContent = cells[1].textContent.trim();
      card.appendChild(cardTitle);
      
      // Card description
      const cardDescription = document.createElement('p');
      cardDescription.className = 'card-description';
      cardDescription.textContent = cells[2].textContent.trim();
      card.appendChild(cardDescription);
      
      // Card CTA
      const cardCta = document.createElement('div');
      cardCta.className = 'card-cta';
      const link = cells[3].querySelector('a');
      if (link) {
        cardCta.appendChild(link.cloneNode(true));
      }
      card.appendChild(cardCta);
      
      cardsContainer.appendChild(card);
    }
  }
  
  block.appendChild(cardsContainer);
}