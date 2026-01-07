export default function decorate(block) {
  const rows = [...block.children];
  
  rows.forEach((row) => {
    row.classList.add('app-download-row');
    const cells = [...row.children];
    
    if (cells[0]) {
      cells[0].classList.add('phone-mockup');
    }
    
    if (cells[1]) {
      cells[1].classList.add('content-area');
      
      // Find and wrap app store buttons
      const links = cells[1].querySelectorAll('a');
      const appButtonsContainer = cells[1].querySelector('.app-buttons');
      
      if (!appButtonsContainer && links.length > 0) {
        const buttonWrapper = document.createElement('div');
        buttonWrapper.classList.add('app-buttons');
        
        links.forEach((link) => {
          const img = link.querySelector('img');
          if (img) {
            link.parentElement.removeChild(link);
            buttonWrapper.appendChild(link);
          }
        });
        
        if (buttonWrapper.children.length > 0) {
          cells[1].appendChild(buttonWrapper);
        }
      }
      
      // Add class to download label paragraph
      const paragraphs = cells[1].querySelectorAll('p');
      paragraphs.forEach((p) => {
        if (p.textContent.toLowerCase().includes('download the app')) {
          p.classList.add('download-label');
        }
      });
    }
  });
}