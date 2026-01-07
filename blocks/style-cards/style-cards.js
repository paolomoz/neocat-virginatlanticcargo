export default function decorate(block) {
  const rows = [...block.children];
  
  rows.forEach((row) => {
    const cells = [...row.children];
    
    row.classList.add('card');
    
    // Create card structure
    const cardImage = document.createElement('div');
    cardImage.classList.add('card-image');
    
    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    
    // Cell 0: Image
    if (cells[0]) {
      const img = cells[0].querySelector('img');
      if (img) {
        cardImage.appendChild(img);
      }
    }
    
    // Create meta container for tag and read time
    const cardMeta = document.createElement('div');
    cardMeta.classList.add('card-meta');
    
    // Cell 1: Tag
    if (cells[1]) {
      const tagEl = document.createElement('span');
      tagEl.classList.add('card-tag');
      tagEl.textContent = cells[1].textContent.trim();
      cardMeta.appendChild(tagEl);
    }
    
    // Cell 2: Read time
    if (cells[2]) {
      const readTimeEl = document.createElement('span');
      readTimeEl.classList.add('card-read-time');
      readTimeEl.textContent = cells[2].textContent.trim();
      cardMeta.appendChild(readTimeEl);
    }
    
    cardContent.appendChild(cardMeta);
    
    // Cell 3: Title
    if (cells[3]) {
      const titleEl = document.createElement('div');
      titleEl.classList.add('card-title');
      const h3 = cells[3].querySelector('h3');
      if (h3) {
        titleEl.appendChild(h3);
      } else {
        const newH3 = document.createElement('h3');
        newH3.textContent = cells[3].textContent.trim();
        titleEl.appendChild(newH3);
      }
      cardContent.appendChild(titleEl);
    }
    
    // Cell 4: Description
    if (cells[4]) {
      const descEl = document.createElement('div');
      descEl.classList.add('card-description');
      const p = cells[4].querySelector('p');
      if (p) {
        descEl.appendChild(p);
      } else {
        const newP = document.createElement('p');
        newP.textContent = cells[4].textContent.trim();
        descEl.appendChild(newP);
      }
      cardContent.appendChild(descEl);
    }
    
    // Cell 5: Link
    if (cells[5]) {
      const linkEl = document.createElement('div');
      linkEl.classList.add('card-link');
      const a = cells[5].querySelector('a');
      if (a) {
        linkEl.appendChild(a);
      } else {
        const newA = document.createElement('a');
        newA.href = '#';
        newA.textContent = cells[5].textContent.trim();
        linkEl.appendChild(newA);
      }
      cardContent.appendChild(linkEl);
    }
    
    // Clear row and rebuild
    row.innerHTML = '';
    row.appendChild(cardImage);
    row.appendChild(cardContent);
  });
}