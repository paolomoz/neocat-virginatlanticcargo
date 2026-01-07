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
      
      // Find and style the app buttons container
      const links = cells[1].querySelectorAll('a');
      if (links.length > 0) {
        // Check if links are already in a container
        let buttonsContainer = cells[1].querySelector('.app-buttons');
        
        if (!buttonsContainer) {
          // Find paragraphs containing the app store links
          links.forEach((link) => {
            const parent = link.parentElement;
            if (parent && parent.tagName === 'P' && !parent.classList.contains('download-label')) {
              parent.classList.add('app-buttons');
            }
          });
        }
      }
      
      // Find and mark the download label
      const paragraphs = cells[1].querySelectorAll('p');
      paragraphs.forEach((p) => {
        const text = p.textContent.trim().toLowerCase();
        if (text === 'download the app') {
          p.classList.add('download-label');
        }
      });
    }
  });
}