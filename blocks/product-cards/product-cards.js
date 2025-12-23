export default function decorate(block) {
  const rows = [...block.children];
  
  // First row is the header
  const headerRow = rows[0];
  const headerText = headerRow?.children[0]?.textContent?.trim() || '';
  
  // Remaining rows are cards
  const cardRows = rows.slice(1);
  
  // Build the rendered structure
  const sectionHeader = document.createElement('div');
  sectionHeader.className = 'section-header';
  sectionHeader.innerHTML = `<h2>${headerText}</h2>`;
  
  const cardsContainer = document.createElement('div');
  cardsContainer.className = 'cards-container';
  
  cardRows.forEach((row) => {
    const cells = [...row.children];
    
    const card = document.createElement('div');
    card.className = 'card';
    
    // Image (cell 0)
    const imageCell = cells[0];
    const img = imageCell?.querySelector('img');
    if (img) {
      const cardImage = document.createElement('div');
      cardImage.className = 'card-image';
      cardImage.appendChild(img.cloneNode(true));
      card.appendChild(cardImage);
    }
    
    // Title (cell 1)
    const titleText = cells[1]?.textContent?.trim() || '';
    if (titleText) {
      const cardTitle = document.createElement('h3');
      cardTitle.className = 'card-title';
      cardTitle.textContent = titleText;
      card.appendChild(cardTitle);
    }
    
    // Description (cell 2)
    const descText = cells[2]?.textContent?.trim() || '';
    if (descText) {
      const cardDesc = document.createElement('p');
      cardDesc.className = 'card-description';
      cardDesc.textContent = descText;
      card.appendChild(cardDesc);
    }
    
    // Link (cell 3)
    const linkCell = cells[3];
    const link = linkCell?.querySelector('a');
    if (link) {
      const cardLink = document.createElement('div');
      cardLink.className = 'card-link';
      cardLink.appendChild(link.cloneNode(true));
      card.appendChild(cardLink);
    }
    
    cardsContainer.appendChild(card);
  });
  
  // Clear and rebuild block
  block.innerHTML = '';
  block.appendChild(sectionHeader);
  block.appendChild(cardsContainer);
}