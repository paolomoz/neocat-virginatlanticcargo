export default function decorate(block) {
  const row = block.children[0];
  if (!row) return;

  const cells = [...row.children];
  
  if (cells[0]) {
    cells[0].classList.add('app-download-phone');
  }
  
  if (cells[1]) {
    cells[1].classList.add('app-download-content');
    
    // Find and style the app buttons container
    const links = cells[1].querySelectorAll('a');
    if (links.length >= 2) {
      // Check if links are already in a container div
      let buttonsContainer = links[0].closest('.app-buttons');
      
      if (!buttonsContainer) {
        // Find or create the buttons wrapper
        const lastParagraph = cells[1].querySelector('p:last-of-type');
        if (lastParagraph && lastParagraph.textContent.includes('Download the app')) {
          lastParagraph.classList.add('download-label');
        }
        
        // Look for existing app-buttons div
        buttonsContainer = cells[1].querySelector('.app-buttons');
        if (buttonsContainer) {
          buttonsContainer.classList.add('app-buttons');
        }
      }
    }
  }
}