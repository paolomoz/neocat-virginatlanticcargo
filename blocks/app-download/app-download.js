export default function decorate(block) {
  const rows = [...block.children];
  
  rows.forEach((row) => {
    row.classList.add('app-download-row');
    const cells = [...row.children];
    
    if (cells[0]) {
      cells[0].classList.add('app-download-phone');
    }
    
    if (cells[1]) {
      cells[1].classList.add('app-download-content');
      
      // Find and style the buttons container
      const links = cells[1].querySelectorAll('a');
      if (links.length > 0) {
        // Check if links are already wrapped
        const existingButtonsDiv = cells[1].querySelector('.app-download-buttons');
        if (!existingButtonsDiv) {
          const buttonsDiv = document.createElement('div');
          buttonsDiv.classList.add('app-download-buttons');
          links.forEach((link) => {
            buttonsDiv.appendChild(link.cloneNode(true));
            link.remove();
          });
          cells[1].appendChild(buttonsDiv);
        }
      }
      
      // Find and style subheading
      const paragraphs = cells[1].querySelectorAll('p');
      paragraphs.forEach((p) => {
        if (p.textContent.trim().toLowerCase().includes('download the app')) {
          p.classList.add('app-download-subheading');
        }
      });
    }
  });
}