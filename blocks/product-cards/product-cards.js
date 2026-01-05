export default function decorate(block) {
  const rows = [...block.children];
  
  // First row is the header
  const headerRow = rows[0];
  const headerText = headerRow?.querySelector('div')?.textContent?.trim() || '';
  
  // Remaining rows are cards
  const cardRows = rows.slice(1);
  
  const cards = cardRows.map(row => {
    const cells = [...row.children];
    const image = cells[0]?.querySelector('img');
    const title = cells[1]?.textContent?.trim() || '';
    const description = cells[2]?.textContent?.trim() || '';
    const link = cells[3]?.querySelector('a');
    
    return { image, title, description, link };
  });
  
  // Build rendered HTML
  const header = document.createElement('div');
  header.className = 'cards-header';
  header.innerHTML = `<h2>${headerText}</h2>`;
  
  const container = document.createElement('div');
  container.className = 'cards-container';
  
  cards.forEach(card => {
    const cardEl = document.createElement('div');
    cardEl.className = 'card';
    
    const imageDiv = document.createElement('div');
    imageDiv.className = 'card-image';
    if (card.image) {
      imageDiv.appendChild(card.image.cloneNode(true));
    }
    
    const titleEl = document.createElement('h3');
    titleEl.className = 'card-title';
    titleEl.textContent = card.title;
    
    const descEl = document.createElement('p');
    descEl.className = 'card-description';
    descEl.textContent = card.description;
    
    const linkDiv = document.createElement('div');
    linkDiv.className = 'card-link';
    if (card.link) {
      linkDiv.appendChild(card.link.cloneNode(true));
    }
    
    cardEl.appendChild(imageDiv);
    cardEl.appendChild(titleEl);
    cardEl.appendChild(descEl);
    cardEl.appendChild(linkDiv);
    
    container.appendChild(cardEl);
  });
  
  block.innerHTML = '';
  block.appendChild(header);
  block.appendChild(container);
}