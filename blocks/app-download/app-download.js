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
      buttonsWrapper.className = 'app-buttons';
      
      // Find the download label paragraph
      const paragraphs = cells[1].querySelectorAll('p');
      paragraphs.forEach(p => {
        if (p.textContent.toLowerCase().includes('download the app')) {
          p.classList.add('download-label');
        }
      });
      
      links.forEach(link => {
        const clone = link.cloneNode(true);
        buttonsWrapper.appendChild(clone);
        link.remove();
      });
      
      cells[1].appendChild(buttonsWrapper);
    }
  }
}