export default function decorate(block) {
  const rows = Array.from(block.children);
  block.innerHTML = '';
  
  // Create cards container for first two product cards
  const cardsContainer = document.createElement('div');
  cardsContainer.className = 'cards-container';
  
  // Process first two rows as product cards
  for (let i = 0; i < 2 && i < rows.length; i++) {
    const row = rows[i];
    const cells = Array.from(row.children);
    
    const card = document.createElement('div');
    card.className = 'product-card';
    
    // Image
    if (cells[0]) {
      const img = cells[0].querySelector('img');
      if (img) {
        img.className = 'card-image';
        card.appendChild(img);
      }
    }
    
    // Title
    if (cells[1]) {
      const title = document.createElement('h2');
      title.className = 'card-title';
      title.textContent = cells[1].textContent.trim();
      card.appendChild(title);
    }
    
    // Description
    if (cells[2]) {
      const desc = document.createElement('p');
      desc.className = 'card-description';
      desc.textContent = cells[2].textContent.trim();
      card.appendChild(desc);
    }
    
    // CTA
    if (cells[3]) {
      const link = cells[3].querySelector('a');
      if (link) {
        link.className = 'card-cta';
        card.appendChild(link);
      }
    }
    
    cardsContainer.appendChild(card);
  }
  
  block.appendChild(cardsContainer);
  
  // Section title (Book it your way)
  if (rows[2]) {
    const sectionTitleCell = rows[2].children[0];
    if (sectionTitleCell) {
      const sectionTitle = document.createElement('h2');
      sectionTitle.className = 'section-title';
      sectionTitle.textContent = sectionTitleCell.textContent.trim();
      block.appendChild(sectionTitle);
    }
  }
  
  // Booking section cards
  const bookingSection = document.createElement('div');
  bookingSection.className = 'booking-section';
  
  for (let i = 3; i < 5 && i < rows.length; i++) {
    const row = rows[i];
    const cells = Array.from(row.children);
    
    const card = document.createElement('div');
    card.className = 'product-card booking-card';
    
    // Title
    if (cells[0]) {
      const title = document.createElement('h3');
      title.className = 'card-title';
      title.textContent = cells[0].textContent.trim();
      card.appendChild(title);
    }
    
    // Description
    if (cells[1]) {
      const desc = document.createElement('p');
      desc.className = 'card-description';
      desc.textContent = cells[1].textContent.trim();
      card.appendChild(desc);
    }
    
    // CTA
    if (cells[2]) {
      const link = cells[2].querySelector('a');
      if (link) {
        link.className = 'card-cta';
        card.appendChild(link);
      }
    }
    
    bookingSection.appendChild(card);
  }
  
  block.appendChild(bookingSection);
}