export default function decorate(block) {
  const rows = [...block.children];
  
  // First row is header content
  const headerRow = rows[0];
  if (headerRow) {
    headerRow.classList.add('header-row');
    const headerCells = [...headerRow.children];
    if (headerCells[0]) {
      headerCells[0].classList.add('main-heading');
    }
    if (headerCells[1]) {
      headerCells[1].classList.add('subheading');
    }
    if (headerCells[2]) {
      headerCells[2].classList.add('cta-container');
      const link = headerCells[2].querySelector('a');
      if (link) {
        link.classList.add('cta-button');
      }
    }
  }
  
  // Create cards container
  const cardsContainer = document.createElement('div');
  cardsContainer.classList.add('cards-container');
  
  // Rows 2-4 are cards
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const cells = [...row.children];
    
    row.classList.add('card');
    
    if (cells[0]) {
      cells[0].classList.add('card-image');
    }
    
    // Create card content wrapper
    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    
    if (cells[1]) {
      cells[1].classList.add('card-title');
      cardContent.appendChild(cells[1]);
    }
    
    if (cells[2]) {
      cells[2].classList.add('card-description');
      cardContent.appendChild(cells[2]);
    }
    
    row.appendChild(cardContent);
    cardsContainer.appendChild(row);
  }
  
  // Move CTA to end
  const ctaContainer = headerRow.querySelector('.cta-container');
  const ctaWrapper = document.createElement('div');
  ctaWrapper.classList.add('cta-container');
  if (ctaContainer) {
    ctaWrapper.innerHTML = ctaContainer.innerHTML;
    const link = ctaWrapper.querySelector('a');
    if (link) {
      link.classList.add('cta-button');
    }
    ctaContainer.remove();
  }
  
  // Restructure block
  block.innerHTML = '';
  block.appendChild(headerRow);
  block.appendChild(cardsContainer);
  block.appendChild(ctaWrapper);
}