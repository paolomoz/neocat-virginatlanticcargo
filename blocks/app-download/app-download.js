export default function decorate(block) {
  const row = block.children[0];
  if (!row) return;

  const cells = [...row.children];
  
  if (cells[0]) {
    cells[0].classList.add('app-download-phone');
  }
  
  if (cells[1]) {
    cells[1].classList.add('app-download-content');
    
    const paragraphs = cells[1].querySelectorAll('p');
    paragraphs.forEach((p, index) => {
      if (p.textContent.trim() === 'Download the app') {
        p.classList.add('app-download-subheading');
      }
    });
    
    const links = cells[1].querySelectorAll('a');
    if (links.length > 0) {
      const buttonsContainer = document.createElement('div');
      buttonsContainer.classList.add('app-download-buttons');
      
      links.forEach(link => {
        const parent = link.parentElement;
        buttonsContainer.appendChild(link);
        if (parent && parent.tagName === 'P' && parent.children.length === 0 && !parent.textContent.trim()) {
          parent.remove();
        }
      });
      
      cells[1].appendChild(buttonsContainer);
    }
  }
}