export default function decorate(block) {
  const row = block.children[0];
  if (!row) return;
  
  const cells = [...row.children];
  
  row.classList.add('app-download-content');
  
  if (cells[0]) {
    cells[0].classList.add('app-download-phone');
  }
  
  if (cells[1]) {
    cells[1].classList.add('app-download-text');
    
    // Find and style the subtitle paragraph
    const paragraphs = cells[1].querySelectorAll('p');
    paragraphs.forEach((p) => {
      if (p.textContent.trim() === 'Download the app') {
        p.classList.add('app-download-subtitle');
      }
    });
    
    // Find the buttons container (div with links)
    const links = cells[1].querySelectorAll('a');
    if (links.length > 0) {
      const buttonsContainer = links[0].parentElement;
      if (buttonsContainer && buttonsContainer.tagName === 'DIV') {
        buttonsContainer.classList.add('app-download-buttons');
      }
    }
  }
}