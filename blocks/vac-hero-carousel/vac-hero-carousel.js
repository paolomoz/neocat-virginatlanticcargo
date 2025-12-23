export default function decorate(block) {
  const rows = block.querySelectorAll(':scope > div');
  let backgroundImage = null;
  let heading = '';
  let description = '';
  let ctaLink = '';
  let ctaText = '';

  rows.forEach(row => {
    const cells = row.querySelectorAll(':scope > div');
    cells.forEach(cell => {
      const img = cell.querySelector('img');
      const h2 = cell.querySelector('h2');
      const p = cell.querySelector('p');
      const a = cell.querySelector('a');

      if (img) {
        backgroundImage = img.cloneNode(true);
      }
      if (h2) {
        heading = h2.textContent.trim();
      }
      if (p) {
        description = p.textContent.trim();
      }
      if (a) {
        ctaLink = a.getAttribute('href') || '#';
        ctaText = a.textContent.trim();
      }
    });
  });

  const renderedHTML = `
    <div class="hero-background">
      ${backgroundImage ? backgroundImage.outerHTML : ''}
    </div>
    <div class="hero-content-wrapper">
      <div class="hero-content">
        <h2>${heading}</h2>
        <p>${description}</p>
        <a href="${ctaLink}" class="hero-cta">${ctaText}</a>
      </div>
    </div>
    <div class="carousel-dots">
      <span class="carousel-dot active"></span>
      <span class="carousel-dot"></span>
      <span class="carousel-dot"></span>
    </div>
  `;

  block.innerHTML = renderedHTML;
}