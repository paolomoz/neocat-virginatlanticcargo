export default function decorate(block) {
  const rows = [...block.children];
  
  // First row contains the section title
  const titleRow = rows[0];
  const titleText = titleRow?.querySelector('div')?.textContent?.trim() || '';
  
  // Remaining rows are the cards
  const cardRows = rows.slice(1);
  
  const cards = cardRows.map(row => {
    const cells = [...row.children];
    const image = cells[0]?.querySelector('img');
    const title = cells[1]?.textContent?.trim() || '';
    const description = cells[2]?.innerHTML || '';
    const link = cells[3]?.querySelector('a');
    
    return { image, title, description, link };
  });
  
  // Build rendered HTML
  let html = '';
  
  if (titleText) {
    html += `<h2 class="section-title">${titleText}</h2>`;
  }
  
  html += '<div class="cards-container">';
  
  cards.forEach(card => {
    html += '<div class="card">';
    
    if (card.image) {
      card.image.classList.add('card-image');
      html += card.image.outerHTML;
    }
    
    if (card.title) {
      html += `<h3 class="card-title">${card.title}</h3>`;
    }
    
    if (card.description) {
      html += `<div class="card-description">${card.description}</div>`;
    }
    
    if (card.link) {
      card.link.classList.add('card-link');
      html += card.link.outerHTML;
    }
    
    html += '</div>';
  });
  
  html += '</div>';
  
  block.innerHTML = html;
}