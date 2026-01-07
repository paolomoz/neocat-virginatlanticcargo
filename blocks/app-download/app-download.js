export default function decorate(block) {
  const rows = [...block.children];
  
  rows.forEach((row) => {
    const cells = [...row.children];
    
    if (cells[0]) {
      cells[0].classList.add('phone-mockup');
    }
    
    if (cells[1]) {
      cells[1].classList.add('content');
      
      // Find and wrap app store buttons
      const links = cells[1].querySelectorAll('a');
      if (links.length > 0) {
        const existingButtonsDiv = cells[1].querySelector('.app-buttons');
        if (!existingButtonsDiv) {
          const buttonsWrapper = document.createElement('div');
          buttonsWrapper.classList.add('app-buttons');
          
          links.forEach((link) => {
            if (link.querySelector('img')) {
              buttonsWrapper.appendChild(link);
            }
          });
          
          if (buttonsWrapper.children.length > 0) {
            cells[1].appendChild(buttonsWrapper);
          }
        }
      }
      
      // Add class to download label paragraph
      const paragraphs = cells[1].querySelectorAll('p');
      paragraphs.forEach((p) => {
        if (p.textContent.trim().toLowerCase() === 'download the app') {
          p.classList.add('download-label');
        }
      });
    }
  });
}