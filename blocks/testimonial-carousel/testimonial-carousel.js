export default function decorate(block) {
  const rows = [...block.children];
  const testimonials = [];
  let headerContent = null;
  let ctaContent = null;

  rows.forEach((row) => {
    const cells = [...row.children];
    const type = cells[0]?.textContent?.trim().toLowerCase();

    if (type === 'header') {
      headerContent = cells[1];
    } else if (type === 'testimonial') {
      testimonials.push({
        stars: cells[1]?.textContent?.trim() || '★★★★★',
        quote: cells[2]?.textContent?.trim() || ''
      });
    } else if (type === 'cta') {
      ctaContent = cells[1];
    }
  });

  block.innerHTML = '';

  // Header section
  if (headerContent) {
    const header = document.createElement('div');
    header.className = 'testimonial-carousel-header';
    header.innerHTML = headerContent.innerHTML;
    block.appendChild(header);
  }

  // Carousel track wrapper
  const trackWrapper = document.createElement('div');
  trackWrapper.className = 'testimonial-carousel-track-wrapper';

  const track = document.createElement('div');
  track.className = 'testimonial-carousel-track';

  testimonials.forEach((testimonial) => {
    const card = document.createElement('div');
    card.className = 'testimonial-carousel-card';
    card.innerHTML = `
      <div class="testimonial-carousel-stars">${testimonial.stars}</div>
      <p class="testimonial-carousel-quote">${testimonial.quote}</p>
    `;
    track.appendChild(card);
  });

  trackWrapper.appendChild(track);
  block.appendChild(trackWrapper);

  // Navigation
  const nav = document.createElement('div');
  nav.className = 'testimonial-carousel-nav';

  const prevBtn = document.createElement('button');
  prevBtn.className = 'testimonial-carousel-arrow prev';
  prevBtn.innerHTML = '‹';
  prevBtn.setAttribute('aria-label', 'Previous');

  const dotsContainer = document.createElement('div');
  dotsContainer.className = 'testimonial-carousel-dots';

  const totalSlides = Math.ceil(testimonials.length / 3);
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('button');
    dot.className = `testimonial-carousel-dot${i === 0 ? ' active' : ''}`;
    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
    dot.dataset.index = i;
    dotsContainer.appendChild(dot);
  }

  const nextBtn = document.createElement('button');
  nextBtn.className = 'testimonial-carousel-arrow next';
  nextBtn.innerHTML = '›';
  nextBtn.setAttribute('aria-label', 'Next');

  nav.appendChild(prevBtn);
  nav.appendChild(dotsContainer);
  nav.appendChild(nextBtn);
  block.appendChild(nav);

  // CTA section
  if (ctaContent) {
    const cta = document.createElement('div');
    cta.className = 'testimonial-carousel-cta';
    cta.innerHTML = ctaContent.innerHTML;
    block.appendChild(cta);
  }

  // Carousel functionality
  let currentIndex = 0;
  const dots = dotsContainer.querySelectorAll('.testimonial-carousel-dot');

  function getCardsPerView() {
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 900) return 2;
    return 3;
  }

  function updateCarousel() {
    const cardsPerView = getCardsPerView();
    const cardWidth = track.querySelector('.testimonial-carousel-card')?.offsetWidth || 0;
    const gap = 24;
    const offset = currentIndex * (cardWidth + gap);
    track.style.transform = `translateX(-${offset})`;

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  }

  function getMaxIndex() {
    const cardsPerView = getCardsPerView();
    return Math.max(0, testimonials.length - cardsPerView);
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = Math.max(0, currentIndex - 1);
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = Math.min(getMaxIndex(), currentIndex + 1);
    updateCarousel();
  });

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      currentIndex = Math.min(parseInt(dot.dataset.index, 10), getMaxIndex());
      updateCarousel();
    });
  });

  window.addEventListener('resize', () => {
    currentIndex = Math.min(currentIndex, getMaxIndex());
    updateCarousel();
  });

  updateCarousel();
}