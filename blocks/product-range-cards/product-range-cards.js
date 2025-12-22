export default function decorate(block) {
  const rows = [...block.children];
  
  // Clear block content
  block.innerHTML = '';
  
  // First row is the section heading
  if (rows.length > 0) {
    const headingRow = rows[0];
    const headingText = headingRow.textContent.trim();
    const sectionHeading = document.createElement('h2');
    sectionHeading.className = 'section-heading';
    sectionHeading.textContent = headingText;
    block.appendChild(sectionHeading);
  }
  
  // Create cards container
  const cardsContainer = document.createElement('div');
  cardsContainer.className = 'cards-container';
  
  // Process remaining rows as cards
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const cells = [...row.children];
    
    const card = document.createElement('div');
    card.className = 'card';
    
    // Cell 0: Image
    if (cells[0]) {
      const img = cells[0].querySelector('img');
      if (img) {
        img.className = 'card-image';
        card.appendChild(img);
      }
    }
    
    // Cell 1: Heading
    if (cells[1]) {
      const heading = document.createElement('h3');
      heading.className = 'card-heading';
      heading.textContent = cells[1].textContent.trim();
      card.appendChild(heading);
    }
    
    // Cell 2: Description text
    if (cells[2]) {
      const text = document.createElement('p');
      text.className = 'card-text';
      text.textContent = cells[2].textContent.trim();
      card.appendChild(text);
    }
    
    // Cell 3: CTA link
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
}