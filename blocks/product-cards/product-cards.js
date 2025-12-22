export default function decorate(block) {
  const rows = [...block.children];
  
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
  
  // Process remaining rows as cards
  rows.slice(1).forEach(row => {
    const cells = [...row.children];
    const card = document.createElement('div');
    card.className = 'card';
    
    // Card image
    const imageCell = cells[0];
    const img = imageCell.querySelector('img');
    if (img) {
      const imageWrapper = document.createElement('div');
      imageWrapper.className = 'card-image';
      imageWrapper.appendChild(img.cloneNode(true));
      card.appendChild(imageWrapper);
    }
    
    // Card title
    const titleCell = cells[1];
    const title = document.createElement('h3');
    title.className = 'card-title';
    title.textContent = titleCell.textContent.trim();
    card.appendChild(title);
    
    // Card description
    const descCell = cells[2];
    const description = document.createElement('p');
    description.className = 'card-description';
    description.textContent = descCell.textContent.trim();
    card.appendChild(description);
    
    // Card CTA
    const ctaCell = cells[3];
    const link = ctaCell.querySelector('a');
    if (link) {
      const ctaWrapper = document.createElement('div');
      ctaWrapper.className = 'card-cta';
      ctaWrapper.appendChild(link.cloneNode(true));
      card.appendChild(ctaWrapper);
    }
    
    cardsContainer.appendChild(card);
  });
  
  // Clear block and rebuild
  block.textContent = '';
  block.appendChild(sectionHeading);
  block.appendChild(cardsContainer);
}