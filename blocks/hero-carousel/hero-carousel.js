export default function decorate(block) {
  const rows = Array.from(block.children);
  
  let backgroundImage = '';
  let heading = '';
  let description = '';
  let ctaLink = '';
  let ctaText = '';

  rows.forEach(row => {
    const cells = Array.from(row.children);
    if (cells.length >= 2) {
      const label = cells[0].textContent.trim().toLowerCase();
      const content = cells[1];

      switch (label) {
        case 'background':
          const img = content.querySelector('img');
          if (img) {
            backgroundImage = img.outerHTML;
          }
          break;
        case 'heading':
          heading = content.textContent.trim();
          break;
        case 'description':
          description = content.textContent.trim();
          break;
        case 'cta':
          const link = content.querySelector('a');
          if (link) {
            ctaLink = link.getAttribute('href') || '#';
            ctaText = link.textContent.trim();
          }
          break;
      }
    }
  });

  const wrapper = document.createElement('div');
  wrapper.className = 'hero-carousel-wrapper';

  wrapper.innerHTML = `
    <div class="hero-background">
      ${backgroundImage}
    </div>
    <div class="hero-content">
      <div class="hero-content-box">
        <h1 class="hero-heading">${heading}</h1>
        <p class="hero-description">${description}</p>
        <div class="hero-cta">
          <a href="${ctaLink}">${ctaText}</a>
        </div>
      </div>
    </div>
    <div class="carousel-indicators">
      <button class="carousel-indicator active" aria-label="Slide 1"></button>
      <button class="carousel-indicator" aria-label="Slide 2"></button>
      <button class="carousel-indicator" aria-label="Slide 3"></button>
    </div>
  `;

  block.textContent = '';
  block.appendChild(wrapper);

  // Add indicator click functionality (for future carousel expansion)
  const indicators = wrapper.querySelectorAll('.carousel-indicator');
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      indicators.forEach(ind => ind.classList.remove('active'));
      indicator.classList.add('active');
    });
  });
}