export default function decorate(block) {
  const rows = block.querySelectorAll(':scope > div');
  let imageEl = null;
  let heading = '';
  let description = '';
  let ctaLink = '';
  let ctaText = '';

  rows.forEach((row) => {
    const cells = row.querySelectorAll(':scope > div');
    cells.forEach((cell) => {
      const img = cell.querySelector('img');
      if (img) {
        imageEl = img.cloneNode(true);
      }
      const h2 = cell.querySelector('h2');
      if (h2) {
        heading = h2.textContent.trim();
      }
      const p = cell.querySelector('p');
      if (p) {
        description = p.textContent.trim();
      }
      const a = cell.querySelector('a');
      if (a) {
        ctaLink = a.href;
        ctaText = a.textContent.trim();
      }
    });
  });

  const heroHTML = `
    <div class="hero-image">
      ${imageEl ? imageEl.outerHTML : ''}
    </div>
    <div class="hero-container">
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

  block.innerHTML = heroHTML;
}