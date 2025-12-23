export default function decorate(block) {
  const rows = [...block.children];
  
  // First row is the heading
  const headingRow = rows[0];
  const headingText = headingRow?.querySelector('div')?.textContent?.trim() || '';
  
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
  const cardsHTML = cards.map(card => {
    const imgHTML = card.image ? `<div class="card-image">${card.image.outerHTML}</div>` : '';
    const linkHTML = card.link ? `<a href="${card.link.href}" class="card-link">${card.link.textContent.trim()}</a>` : '';
    
    return `
      <div class="card">
        ${imgHTML}
        <h3 class="card-title">${card.title}</h3>
        <p class="card-description">${card.description}</p>
        ${linkHTML}
      </div>
    `;
  }).join('');
  
  block.innerHTML = `
    <h2 class="main-heading">${headingText}</h2>
    <div class="cards-container">
      ${cardsHTML}
    </div>
  `;
}