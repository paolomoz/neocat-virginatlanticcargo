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
      if (links.length >= 2) {
        // Create app buttons wrapper if links are siblings
        const lastLink = links[links.length - 1];
        const secondLastLink = links[links.length - 2];
        
        // Check if there's already a wrapper
        let buttonsWrapper = cells[1].querySelector('.app-buttons');
        if (!buttonsWrapper) {
          // Find paragraph containing download label
          const paragraphs = cells[1].querySelectorAll('p');
          paragraphs.forEach((p) => {
            const text = p.textContent.toLowerCase();
            if (text.includes('download the app')) {
              p.classList.add('download-label');
            }
          });
          
          // Wrap the app store links
          const linkParents = new Set();
          links.forEach((link) => {
            if (link.querySelector('img')) {
              linkParents.add(link.parentElement);
            }
          });
          
          linkParents.forEach((parent) => {
            if (parent && parent.tagName === 'P') {
              parent.classList.add('app-buttons');
            }
          });
        }
      }
    }
  });
}