export default function decorate(block) {
  [...block.children].forEach((row) => {
    const cells = [...row.children];
    row.classList.add('card');
    
    // Create image container
    if (cells[0]) {
      cells[0].classList.add('card-image');
    }
    
    // Create content wrapper
    const contentWrapper = document.createElement('div');
    contentWrapper.classList.add('card-content');
    
    // Create meta container for category and read time
    const metaContainer = document.createElement('div');
    metaContainer.classList.add('card-meta');
    
    // Category badge
    if (cells[1]) {
      cells[1].classList.add('card-category');
      metaContainer.appendChild(cells[1]);
    }
    
    // Read time
    if (cells[2]) {
      cells[2].classList.add('card-readtime');
      metaContainer.appendChild(cells[2]);
    }
    
    contentWrapper.appendChild(metaContainer);
    
    // Title
    if (cells[3]) {
      cells[3].classList.add('card-title');
      contentWrapper.appendChild(cells[3]);
    }
    
    // Description
    if (cells[4]) {
      cells[4].classList.add('card-description');
      contentWrapper.appendChild(cells[4]);
    }
    
    // Read link
    if (cells[5]) {
      cells[5].classList.add('card-link');
      contentWrapper.appendChild(cells[5]);
    }
    
    row.appendChild(contentWrapper);
  });
}