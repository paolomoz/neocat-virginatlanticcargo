export default function decorate(block) {
  const rows = [...block.children];
  
  // First row contains the heading
  const headingRow = rows[0];
  const headingText = headingRow?.querySelector('div')?.textContent?.trim() || '';
  
  // Remaining rows are cards
  const cardRows = rows.slice(1);
  
  const cardsHTML = cardRows.map(row => {
    const cells = [...row.children];
    const image = cells[0]?.querySelector('img');
    const title = cells[1]?.textContent?.trim() || '';
    const description = cells[2]?.innerHTML || '';
    const link = cells[3]?.querySelector('a');
    
    return `
      <div class="card">
        ${image ? `<img class="card-image" src="${image.src || ''}" alt="${image.alt || title}" data-img-ref="${image.getAttribute('data-img-ref') || ''}">` : ''}
        <h3 class="card-title">${title}</h3>
        <div class="card-description">${description}</div>
        ${link ? `<a class="card-link" href="${link.href}">${link.textContent.trim()}</a>` : ''}
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