export default function decorate(block) {
  const rows = block.querySelectorAll(':scope > div');
  const firstRow = rows[0];
  const cells = firstRow?.querySelectorAll(':scope > div') || [];
  
  const contentCell = cells[0];
  const imageCell = cells[1];
  
  // Extract content
  const heading = contentCell?.querySelector('h2')?.textContent || '';
  const paragraph = contentCell?.querySelector('p')?.textContent || '';
  const link = contentCell?.querySelector('a');
  const linkHref = link?.getAttribute('href') || '#';
  const linkText = link?.textContent || 'Contact us';
  
  // Extract image
  const image = imageCell?.querySelector('img');
  const imgRef = image?.getAttribute('data-img-ref') || '';
  const imgAlt = image?.getAttribute('alt') || '';
  
  // Build rendered structure
  const rendered = document.createElement('div');
  rendered.className = 'holiday-hero-wrapper-inner';
  
  // Add snowflakes decoration
  const snowflakes = document.createElement('div');
  snowflakes.className = 'holiday-hero-snowflakes';
  snowflakes.innerHTML = `
    <span class="snowflake">❄</span>
    <span class="snowflake">❄</span>
    <span class="snowflake">❄</span>
    <span class="snowflake">❄</span>
  `;
  rendered.appendChild(snowflakes);
  
  // Create container
  const container = document.createElement('div');
  container.className = 'holiday-hero-container';
  
  // Content section
  const contentDiv = document.createElement('div');
  contentDiv.className = 'holiday-hero-content';
  contentDiv.innerHTML = `
    <h2>${heading}</h2>
    <p>${paragraph}</p>
    <a href="${linkHref}">${linkText}</a>
  `;
  container.appendChild(contentDiv);
  
  // Image section
  const imageDiv = document.createElement('div');
  imageDiv.className = 'holiday-hero-image';
  if (imgRef) {
    const imgEl = document.createElement('img');
    imgEl.setAttribute('data-img-ref', imgRef);
    imgEl.setAttribute('alt', imgAlt);
    imageDiv.appendChild(imgEl);
  }
  container.appendChild(imageDiv);
  
  rendered.appendChild(container);
  
  block.innerHTML = '';
  block.appendChild(rendered);
}