export default function decorate(block) {
  const rows = [...block.children];
  
  // First row is the header
  const headerRow = rows[0];
  const headerText = headerRow?.querySelector('div')?.textContent?.trim() || '';
  
  // Remaining rows are cards
  const cardRows = rows.slice(1);
  
  // Build rendered structure
  const rendered = document.createElement('div');
  
  // Add section header
  if (headerText) {
    const sectionHeader = document.createElement('div');
    sectionHeader.className = 'section-header';
    const h2 = document.createElement('h2');
    h2.textContent = headerText;
    sectionHeader.appendChild(h2);
    rendered.appendChild(sectionHeader);
  }
  
  // Create cards container
  const cardsContainer = document.createElement('div');
  cardsContainer.className = 'cards-container';
  
  cardRows.forEach((row) => {
    const cells = [...row.children];
    if (cells.length < 4) return;
    
    const card = document.createElement('div');
    card.className = 'card';
    
    // Image
    const imageCell = cells[0];
    const img = imageCell.querySelector('img');
    if (img) {
      const cardImage = document.createElement('div');
      cardImage.className = 'card-image';
      cardImage.appendChild(img.cloneNode(true));
      card.appendChild(cardImage);
    }
    
    // Title
    const titleCell = cells[1];
    const cardTitle = document.createElement('h3');
    cardTitle.className = 'card-title';
    cardTitle.textContent = titleCell.textContent.trim();
    card.appendChild(cardTitle);
    
    // Description
    const descCell = cells[2];
    const cardDesc = document.createElement('p');
    cardDesc.className = 'card-description';
    cardDesc.textContent = descCell.textContent.trim();
    card.appendChild(cardDesc);
    
    // Link
    const linkCell = cells[3];
    const link = linkCell.querySelector('a');
    if (link) {
      const cardLink = document.createElement('div');
      cardLink.className = 'card-link';
      const newLink = document.createElement('a');
      newLink.href = link.href;
      newLink.textContent = link.textContent.trim();
      cardLink.appendChild(newLink);
      card.appendChild(cardLink);
    }
    
    cardsContainer.appendChild(card);
  });
  
  rendered.appendChild(cardsContainer);
  
  block.innerHTML = '';
  block.appendChild(rendered);
}