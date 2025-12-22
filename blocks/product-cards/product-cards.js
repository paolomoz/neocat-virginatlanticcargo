export default function decorate(block) {
  const rows = [...block.children];
  
  // First row is the section title
  const titleRow = rows[0];
  const titleText = titleRow.querySelector('div').textContent.trim();
  
  // Create section title element
  const sectionTitle = document.createElement('h2');
  sectionTitle.className = 'section-title';
  sectionTitle.textContent = titleText;
  
  // Create cards container
  const cardsContainer = document.createElement('div');
  cardsContainer.className = 'cards-container';
  
  // Process remaining rows as cards
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const cells = [...row.children];
    
    const card = document.createElement('div');
    card.className = 'card';
    
    // Image (first cell)
    if (cells[0]) {
      const imageDiv = document.createElement('div');
      imageDiv.className = 'card-image';
      const img = cells[0].querySelector('img');
      if (img) {
        imageDiv.appendChild(img.cloneNode(true));
      }
      card.appendChild(imageDiv);
    }
    
    // Title (second cell)
    if (cells[1]) {
      const titleDiv = document.createElement('h3');
      titleDiv.className = 'card-title';
      titleDiv.textContent = cells[1].textContent.trim();
      card.appendChild(titleDiv);
    }
    
    // Description (third cell)
    if (cells[2]) {
      const descDiv = document.createElement('p');
      descDiv.className = 'card-description';
      descDiv.textContent = cells[2].textContent.trim();
      card.appendChild(descDiv);
    }
    
    // CTA (fourth cell)
    if (cells[3]) {
      const ctaDiv = document.createElement('div');
      ctaDiv.className = 'card-cta';
      const link = cells[3].querySelector('a');
      if (link) {
        ctaDiv.appendChild(link.cloneNode(true));
      }
      card.appendChild(ctaDiv);
    }
    
    cardsContainer.appendChild(card);
  }
  
  // Clear block and rebuild
  block.innerHTML = '';
  
  const titleWrapper = document.createElement('div');
  titleWrapper.appendChild(sectionTitle);
  block.appendChild(titleWrapper);
  block.appendChild(cardsContainer);
}