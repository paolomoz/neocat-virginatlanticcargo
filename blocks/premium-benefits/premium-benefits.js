export default function decorate(block) {
  const rows = [...block.children];
  
  // First row contains header and CTAs
  const headerRow = rows[0];
  const headerCells = [...headerRow.children];
  
  const heading = headerCells[0]?.textContent?.trim() || '';
  const primaryCtaText = headerCells[1]?.textContent?.trim() || '';
  const primaryCtaUrl = headerCells[2]?.textContent?.trim() || '#';
  const secondaryLinkText = headerCells[3]?.textContent?.trim() || '';
  const secondaryLinkUrl = headerCells[4]?.textContent?.trim() || '#';
  
  // Remaining rows are benefit cards
  const cardRows = rows.slice(1);
  
  // Build cards HTML
  const cardsHtml = cardRows.map(row => {
    const cells = [...row.children];
    const iconImg = cells[0]?.querySelector('img');
    const title = cells[1]?.textContent?.trim() || '';
    const description = cells[2]?.textContent?.trim() || '';
    
    return `
      <div class="benefit-card">
        <div class="card-icon">${iconImg ? iconImg.outerHTML : ''}</div>
        <div class="card-title">${title}</div>
        <div class="card-description">${description}</div>
      </div>
    `;
  }).join('');
  
  // Build complete block structure
  block.innerHTML = `
    <div class="section-heading">${heading}</div>
    <div class="cards-container">
      ${cardsHtml}
    </div>
    <div class="cta-container">
      <a href="${primaryCtaUrl}" class="primary-cta">${primaryCtaText}</a>
      <div>
        <a href="${secondaryLinkUrl}" class="secondary-link">${secondaryLinkText}</a>
      </div>
    </div>
  `;
  
  // Add wrapper background class
  const wrapper = block.closest('.premium-benefits-wrapper') || block.parentElement;
  if (wrapper) {
    wrapper.classList.add('premium-benefits-wrapper');
  }
}