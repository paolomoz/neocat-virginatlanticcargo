export default function decorate(block) {
  const rows = Array.from(block.children);
  
  // Clear block and rebuild
  block.innerHTML = '';
  
  // First row contains the two product cards
  if (rows[0]) {
    const cardsContainer = document.createElement('div');
    cardsContainer.className = 'cards-container';
    
    const cells = Array.from(rows[0].children);
    cells.forEach(cell => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = cell.innerHTML;
      cardsContainer.appendChild(card);
    });
    
    block.appendChild(cardsContainer);
  }
  
  // Second row contains section heading
  if (rows[1]) {
    const sectionHeading = document.createElement('div');
    sectionHeading.className = 'section-heading';
    sectionHeading.innerHTML = rows[1].querySelector('div')?.innerHTML || '';
    block.appendChild(sectionHeading);
  }
  
  // Third row contains booking options
  if (rows[2]) {
    const bookingOptions = document.createElement('div');
    bookingOptions.className = 'booking-options';
    
    const cells = Array.from(rows[2].children);
    cells.forEach(cell => {
      const option = document.createElement('div');
      option.className = 'booking-option';
      option.innerHTML = cell.innerHTML;
      bookingOptions.appendChild(option);
    });
    
    block.appendChild(bookingOptions);
  }
}