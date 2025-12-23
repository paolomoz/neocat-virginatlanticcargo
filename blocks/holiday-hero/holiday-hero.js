export default function decorate(block) {
  const rows = block.querySelectorAll(':scope > div');
  const firstRow = rows[0];
  const cells = firstRow?.querySelectorAll(':scope > div') || [];
  
  // Extract content from cells
  const contentCell = cells[0];
  const imageCell = cells[1];
  
  // Get content elements
  const heading = contentCell?.querySelector('h2')?.textContent || '';
  const paragraph = contentCell?.querySelector('p')?.textContent || '';
  const link = contentCell?.querySelector('a');
  const linkHref = link?.getAttribute('href') || '#';
  const linkText = link?.textContent || 'Contact us';
  
  // Get image
  const image = imageCell?.querySelector('img');
  const imgRef = image?.getAttribute('data-img-ref') || '';
  const imgAlt = image?.getAttribute('alt') || '';
  
  // Build rendered structure
  block.innerHTML = `
    <div class="holiday-hero-snowflakes">
      <span class="snowflake">❄</span>
      <span class="snowflake">❄</span>
      <span class="snowflake">❄</span>
      <span class="snowflake">❄</span>
    </div>
    <div class="holiday-hero-container">
      <div class="holiday-hero-content">
        <h2>${heading}</h2>
        <p>${paragraph}</p>
        <a href="${linkHref}" class="cta-button">${linkText}</a>
      </div>
      <div class="holiday-hero-image">
        ${image ? `<img data-img-ref="${imgRef}" alt="${imgAlt}">` : ''}
      </div>
    </div>
  `;
}