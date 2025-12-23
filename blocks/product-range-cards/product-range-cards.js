export default function decorate(block) {
  const rows = [...block.children];
  
  // Clear block and rebuild structure
  block.innerHTML = '';
  
  // First row is the section heading
  const headingRow = rows[0];
  const headingText = headingRow?.querySelector('div')?.textContent?.trim() || '';
  
  if (headingText) {
    const sectionHeading = document.createElement('h2');
    sectionHeading.className = 'section-heading';
    sectionHeading.textContent = headingText;
    block.appendChild(sectionHeading);
  }
  
  // Create cards container
  const cardsContainer = document.createElement('div');
  cardsContainer.className = 'cards-container';
  
  // Process remaining rows as cards (each row represents a card)
  const cardRows = rows.slice(1);
  
  cardRows.forEach((row) => {
    const cells = [...row.children];
    
    const card = document.createElement('div');
    card.className = 'card';
    
    cells.forEach((cell, index) => {
      const img = cell.querySelector('img');
      const link = cell.querySelector('a');
      const text = cell.textContent?.trim();
      
      if (img) {
        // Image cell
        const imageWrapper = document.createElement('div');
        imageWrapper.className = 'card-image';
        imageWrapper.appendChild(img.cloneNode(true));
        card.appendChild(imageWrapper);
      } else if (link) {
        // CTA cell
        const ctaWrapper = document.createElement('div');
        ctaWrapper.className = 'card-cta';
        ctaWrapper.appendChild(link.cloneNode(true));
        card.appendChild(ctaWrapper);
      } else if (text) {
        // Check if it's a title (shorter text) or description (longer text)
        const existingTitle = card.querySelector('.card-title');
        const existingDesc = card.querySelector('.card-description');
        
        if (!existingTitle && text.length < 50) {
          const title = document.createElement('h3');
          title.className = 'card-title';
          title.textContent = text;
          card.appendChild(title);
        } else if (!existingDesc) {
          const description = document.createElement('p');
          description.className = 'card-description';
          description.textContent = text;
          card.appendChild(description);
        }
      }
    });
    
    if (card.children.length > 0) {
      cardsContainer.appendChild(card);
    }
  });
  
  block.appendChild(cardsContainer);
  
  // Add wrapper class for background styling
  const wrapper = block.closest('.product-range-cards-wrapper') || block.parentElement;
  if (wrapper && !wrapper.classList.contains('product-range-cards-wrapper')) {
    wrapper.classList.add('product-range-cards-wrapper');
  }
}