export default function decorate(block) {
  const rows = [...block.children];
  
  rows.forEach((row) => {
    const cells = [...row.children];
    row.classList.add('app-download-promo-row');
    
    if (cells[0]) {
      cells[0].classList.add('app-download-promo-image');
      const img = cells[0].querySelector('img');
      if (img) {
        img.classList.add('phone-mockup');
      }
    }
    
    if (cells[1]) {
      cells[1].classList.add('app-download-promo-content');
      
      // Find and wrap app store buttons
      const links = cells[1].querySelectorAll('a');
      if (links.length > 1) {
        const existingWrapper = cells[1].querySelector('.app-buttons');
        if (!existingWrapper) {
          const buttonWrapper = document.createElement('div');
          buttonWrapper.classList.add('app-buttons');
          links.forEach((link) => {
            if (link.querySelector('img')) {
              buttonWrapper.appendChild(link);
            }
          });
          if (buttonWrapper.children.length > 0) {
            cells[1].appendChild(buttonWrapper);
          }
        }
      }
      
      // Add class to download label paragraph
      const paragraphs = cells[1].querySelectorAll('p');
      paragraphs.forEach((p) => {
        if (p.textContent.trim().toLowerCase().includes('download the app')) {
          p.classList.add('download-label');
        }
      });
    }
  });
}