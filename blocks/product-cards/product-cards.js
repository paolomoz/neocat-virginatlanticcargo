export default function decorate(block) {
  const rows = [...block.children];
  
  // First row is the main heading
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
    
    return `
      <div class="card">
        <div class="card-image">
          ${image ? image.outerHTML : ''}
        </div>
        <h3 class="card-title">${title}</h3>
        <p class="card-description">${description}</p>
        <div class="card-link">
          ${link ? `<a href="${link.href}">${link.textContent.trim()}</a>` : ''}
        </div>
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