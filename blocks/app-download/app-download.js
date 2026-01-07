export default function decorate(block) {
  const row = block.children[0];
  if (!row) return;

  const cells = [...row.children];
  
  // First cell contains the phone mockup image
  if (cells[0]) {
    cells[0].classList.add('app-download-image-container');
    const phoneImg = cells[0].querySelector('img');
    if (phoneImg) {
      phoneImg.classList.add('app-download-phone');
    }
  }

  // Second cell contains text content
  if (cells[1]) {
    cells[1].classList.add('app-download-content');
    
    // Find and style the subtitle paragraph
    const paragraphs = cells[1].querySelectorAll('p');
    paragraphs.forEach((p) => {
      if (p.textContent.trim() === 'Download the app') {
        p.classList.add('app-download-subtitle');
      }
    });

    // Find the links container and style it
    const links = cells[1].querySelectorAll('a');
    if (links.length > 0) {
      // Check if links are already in a container div
      const lastDiv = cells[1].querySelector('.app-download-buttons');
      if (!lastDiv) {
        // Wrap store links in a buttons container
        const buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('app-download-buttons');
        
        links.forEach((link) => {
          const parent = link.parentElement;
          buttonsContainer.appendChild(link);
          // Remove empty parent if it was just containing the link
          if (parent && parent.children.length === 0 && parent.tagName === 'P') {
            parent.remove();
          }
        });
        
        cells[1].appendChild(buttonsContainer);
      }
    }
  }
}