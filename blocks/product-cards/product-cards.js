export default function decorate(block) {
  const rows = [...block.children];
  
  // First row contains the main heading
  const headingRow = rows[0];
  const headingText = headingRow?.querySelector('div')?.textContent?.trim() || '';
  
  // Remaining rows are cards
  const cardRows = rows.slice(1);
  
  const cardsHTML = cardRows.map(row => {
    const cells = [...row.children];
    const image = cells[0]?.querySelector('img');
    const title = cells[1]?.textContent?.trim() || '';
    const description = cells[2]?.textContent?.trim() || '';
    const link = cells[3]?.querySelector('a');
    
    const imgHTML = image ? `<img class="card-image" src="${image.src || ''}" alt="${image.alt || ''}" data-img-ref="${image.getAttribute('data-img-ref') || ''}">` : '';
    const linkHTML = link ? `<a class="card-link" href="${link.href}">${link.textContent.trim()}</a>` : '';
    
    return `
      <div class="card">
        ${imgHTML}
        <h3 class="card-title">${title}</h3>
        <p class="card-description">${description}</p>
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