export default function decorate(block) {
  const rows = Array.from(block.children);
  const slides = [];

  rows.forEach((row, index) => {
    const cells = Array.from(row.children);
    const imageCell = cells[0];
    const contentCell = cells[1];

    const img = imageCell?.querySelector('img');
    const heading = contentCell?.querySelector('h2');
    const paragraph = contentCell?.querySelector('p');
    const link = contentCell?.querySelector('a');

    slides.push({
      image: img ? img.outerHTML : '',
      heading: heading ? heading.textContent : '',
      text: paragraph ? paragraph.textContent : '',
      linkHref: link ? link.getAttribute('href') : '',
      linkText: link ? link.textContent : '',
      index: index
    });
  });

  const carouselHTML = `
    <div class="carousel-container">
      ${slides.map((slide, i) => `
        <div class="carousel-slide ${i === 0 ? 'active' : ''}" data-slide="${i}">
          <div class="slide-image-wrapper">
            ${slide.image.replace('<img', '<img class="slide-image"')}
          </div>
          <div class="slide-content">
            <h2>${slide.heading}</h2>
            <p>${slide.text}</p>
            ${slide.linkHref ? `<a href="${slide.linkHref}">${slide.linkText}</a>` : ''}
          </div>
        </div>
      `).join('')}
    </div>
    <div class="carousel-indicators">
      ${slides.map((_, i) => `
        <button class="carousel-indicator ${i === 0 ? 'active' : ''}" data-slide="${i}" aria-label="Slide ${i + 1}"></button>
      `).join('')}
    </div>
  `;

  block.innerHTML = carouselHTML;

  // Carousel functionality
  const slidesEl = block.querySelectorAll('.carousel-slide');
  const indicators = block.querySelectorAll('.carousel-indicator');
  let currentSlide = 0;
  let autoplayInterval;

  function showSlide(index) {
    slidesEl.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle('active', i === index);
    });
    currentSlide = index;
  }

  function nextSlide() {
    const next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }

  indicators.forEach((indicator) => {
    indicator.addEventListener('click', () => {
      const slideIndex = parseInt(indicator.dataset.slide, 10);
      showSlide(slideIndex);
      resetAutoplay();
    });
  });

  function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 8000);
  }

  function resetAutoplay() {
    clearInterval(autoplayInterval);
    startAutoplay();
  }

  startAutoplay();
}