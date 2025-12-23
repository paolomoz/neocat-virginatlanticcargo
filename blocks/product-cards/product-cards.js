export default function decorate(block) {
  const rows = [...block.children];
  
  // First row is the header
  const headerRow = rows[0];
  const headerText = headerRow?.querySelector('div')?.textContent?.trim() || '';
  
  // Remaining rows are cards
  const cardRows = rows.slice(1);
  
  // Build the rendered structure
  const header = document.createElement('div');
  header.className = 'cards-header';
  header.innerHTML = `<h2>${headerText}</h2>`;
  
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
      const imageWrapper = document.createElement('div');
      imageWrapper.className = 'card-image';
      imageWrapper.appendChild(img.cloneNode(true));
      card.appendChild(imageWrapper);
    }
    
    // Title (cell 1)
    const titleCell = cells[1];
    const titleText = titleCell?.textContent?.trim() || '';
    if (titleText) {
      const title = document.createElement('h3');
      title.className = 'card-title';
      title.textContent = titleText;
      card.appendChild(title);
    }
    
    // Description (cell 2)
    const descCell = cells[2];
    if (descCell) {
      const description = document.createElement('div');
      description.className = 'card-description';
      description.innerHTML = descCell.innerHTML;
      card.appendChild(description);
    }
    
    // Link (cell 3)
    const linkCell = cells[3];
    const link = linkCell?.querySelector('a');
    if (link) {
      const linkWrapper = document.createElement('div');
      linkWrapper.className = 'card-cta';
      const newLink = document.createElement('a');
      newLink.className = 'card-link';
      newLink.href = link.href;
      newLink.textContent = link.textContent.trim();
      linkWrapper.appendChild(newLink);
      card.appendChild(linkWrapper);
    }
    
    cardsContainer.appendChild(card);
  });
  
  block.innerHTML = '';
  block.appendChild(header);
  block.appendChild(cardsContainer);
}