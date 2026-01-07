export default function decorate(block) {
  [...block.children].forEach((row) => {
    const cells = [...row.children];
    row.classList.add('card');
    
    if (cells[0]) {
      cells[0].classList.add('card-image');
    }
    
    if (cells[1]) {
      cells[1].classList.add('card-category');
    }
    
    if (cells[2]) {
      cells[2].classList.add('card-read-time');
    }
    
    if (cells[3]) {
      cells[3].classList.add('card-title');
    }
    
    if (cells[4]) {
      cells[4].classList.add('card-description');
    }
    
    if (cells[5]) {
      cells[5].classList.add('card-link');
    }
    
    // Reorganize layout: image on left, content on right
    const contentWrapper = document.createElement('div');
    contentWrapper.classList.add('card-content');
    
    // Create meta row with category and read time
    const metaRow = document.createElement('div');
    metaRow.classList.add('card-meta');
    
    if (cells[1]) metaRow.appendChild(cells[1].cloneNode(true));
    if (cells[2]) metaRow.appendChild(cells[2].cloneNode(true));
    
    // Clear row and rebuild
    row.innerHTML = '';
    
    if (cells[0]) row.appendChild(cells[0]);
    row.appendChild(metaRow);
    if (cells[3]) row.appendChild(cells[3]);
    if (cells[4]) row.appendChild(cells[4]);
    if (cells[5]) row.appendChild(cells[5]);
  });
}