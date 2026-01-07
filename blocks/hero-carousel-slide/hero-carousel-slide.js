export default function decorate(block) {
  const slides = [...block.children];
  
  // Create wrapper structure
  block.innerHTML = '';
  
  const wrapper = document.createElement('div');
  wrapper.className = 'hero-carousel-slide-wrapper';
  
  slides.forEach((slide, index) => {
    const cells = [...slide.children];
    
    const slideItem = document.createElement('div');
    slideItem.className = 'hero-carousel-slide-item';
    
    // Background image container
    const bgContainer = document.createElement('div');
    bgContainer.className = 'hero-carousel-slide-bg-container';
    if (cells[0]) {
      const bgImg = cells[0].querySelector('img');
      if (bgImg) {
        bgContainer.appendChild(bgImg.cloneNode(true));
      }
    }
    slideItem.appendChild(bgContainer);
    
    // Content box
    const content = document.createElement('div');
    content.className = 'hero-carousel-slide-content';
    
    // Heading
    if (cells[1]) {
      const heading = cells[1].querySelector('h2') || document.createElement('h2');
      if (!cells[1].querySelector('h2')) {
        heading.textContent = cells[1].textContent.trim();
      }
      content.appendChild(heading.cloneNode(true));
    }
    
    // Paragraph
    if (cells[2]) {
      const para = cells[2].querySelector('p') || document.createElement('p');
      if (!cells[2].querySelector('p')) {
        para.textContent = cells[2].textContent.trim();
      }
      content.appendChild(para.cloneNode(true));
    }
    
    // CTA
    if (cells[3]) {
      const link = cells[3].querySelector('a');
      if (link) {
        link.className = 'hero-carousel-slide-cta';
        content.appendChild(link.cloneNode(true));
      }
    }
    
    slideItem.appendChild(content);
    wrapper.appendChild(slideItem);
  });
  
  block.appendChild(wrapper);
  
  // Navigation buttons
  const prevBtn = document.createElement('button');
  prevBtn.className = 'hero-carousel-slide-nav hero-carousel-slide-nav-prev';
  prevBtn.innerHTML = '<svg viewBox="0 0 24 24"><polyline points="15,18 9,12 15,6"></polyline></svg>';
  prevBtn.setAttribute('aria-label', 'Previous slide');
  
  const nextBtn = document.createElement('button');
  nextBtn.className = 'hero-carousel-slide-nav hero-carousel-slide-nav-next';
  nextBtn.innerHTML = '<svg viewBox="0 0 24 24"><polyline points="9,6 15,12 9,18"></polyline></svg>';
  nextBtn.setAttribute('aria-label', 'Next slide');
  
  block.appendChild(prevBtn);
  block.appendChild(nextBtn);
  
  // Pagination dots
  const pagination = document.createElement('div');
  pagination.className = 'hero-carousel-slide-pagination';
  
  slides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.className = 'hero-carousel-slide-dot';
    if (index === 0) dot.classList.add('active');
    dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
    pagination.appendChild(dot);
  });
  
  block.appendChild(pagination);
  
  // Carousel functionality
  let currentSlide = 0;
  const totalSlides = slides.length;
  const dots = pagination.querySelectorAll('.hero-carousel-slide-dot');
  
  function goToSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    
    currentSlide = index;
    wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });
  }
  
  prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
  nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
  
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => goToSlide(index));
  });
}