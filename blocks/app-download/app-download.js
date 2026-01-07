export default function decorate(block) {
  const row = block.children[0];
  if (!row) return;

  const cells = [...row.children];
  
  // First cell contains the phone mockup with QR code
  if (cells[0]) {
    cells[0].classList.add('app-download-phone');
  }
  
  // Second cell contains the text content
  if (cells[1]) {
    cells[1].classList.add('app-download-content');
    
    // Find and style the download label paragraph
    const paragraphs = cells[1].querySelectorAll('p');
    paragraphs.forEach((p) => {
      if (p.textContent.trim() === 'Download the app') {
        p.classList.add('download-label');
      }
    });
    
    // Find and wrap the app store button links
    const links = cells[1].querySelectorAll('a');
    if (links.length > 0) {
      // Check if buttons are already wrapped
      const existingWrapper = cells[1].querySelector('.app-store-buttons');
      if (!existingWrapper) {
        const buttonWrapper = document.createElement('div');
        buttonWrapper.classList.add('app-store-buttons');
        
        links.forEach((link) => {
          // Clone and append to wrapper
          const parent = link.parentElement;
          buttonWrapper.appendChild(link);
          // Remove empty parent paragraphs
          if (parent && parent.tagName === 'P' && parent.children.length === 0 && !parent.textContent.trim()) {
            parent.remove();
          }
        });
        
        cells[1].appendChild(buttonWrapper);
      }
    }
  }
}