export default function decorate(block) {
  const rows = [...block.children];
  
  rows.forEach((row) => {
    const cells = [...row.children];
    
    // First cell: phone mockup image
    if (cells[0]) {
      cells[0].classList.add('app-download-phone');
    }
    
    // Second cell: content area
    if (cells[1]) {
      cells[1].classList.add('app-download-content');
      
      // Find the app buttons container and ensure links are styled correctly
      const appButtonsDiv = cells[1].querySelector('.app-buttons');
      if (appButtonsDiv) {
        const links = appButtonsDiv.querySelectorAll('a');
        links.forEach((link) => {
          link.classList.add('app-store-link');
        });
      }
    }
  });
}