export default function decorate(block) {
  const rows = block.querySelectorAll(':scope > div');
  
  rows.forEach((row, index) => {
    row.classList.add('products-services-row');
    
    if (index === 0) {
      row.classList.add('cards-row');
    } else if (index === 1) {
      row.classList.add('section-header-row');
    } else if (index === 2) {
      row.classList.add('booking-row');
    }
    
    const cells = row.querySelectorAll(':scope > div');
    cells.forEach((cell, cellIndex) => {
      cell.classList.add('products-services-cell');
      
      const link = cell.querySelector('a');
      if (link && !link.classList.contains('cta-link')) {
        link.classList.add('cta-link');
      }
    });
  });
  
  const images = block.querySelectorAll('img');
  images.forEach(img => {
    img.loading = 'lazy';
  });
}