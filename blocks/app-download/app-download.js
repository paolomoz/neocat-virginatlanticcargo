export default function decorate(block) {
  const row = block.children[0];
  if (!row) return;
  
  const cells = [...row.children];
  
  if (cells[0]) {
    cells[0].classList.add('app-download-phone');
  }
  
  if (cells[1]) {
    cells[1].classList.add('app-download-content');
    
    // Find and wrap app store buttons
    const links = cells[1].querySelectorAll('a');
    if (links.length >= 2) {
      const buttonsWrapper = document.createElement('div');
      buttonsWrapper.classList.add('app-buttons');
      
      links.forEach(link => {
        const parent = link.parentElement;
        buttonsWrapper.appendChild(link);
        if (parent && parent.tagName === 'P' && !parent.textContent.trim()) {
          parent.remove();
        }
      });
      
      cells[1].appendChild(buttonsWrapper);
    }
    
    // Add download label class to the appropriate paragraph
    const paragraphs = cells[1].querySelectorAll('p');
    paragraphs.forEach(p => {
      if (p.textContent.trim().toLowerCase() === 'download the app') {
        p.classList.add('download-label');
      }
    });
  }
}