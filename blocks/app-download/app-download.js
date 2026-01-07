export default function decorate(block) {
  const row = block.children[0];
  if (!row) return;

  const cells = [...row.children];
  
  // First cell contains the phone mockup image
  if (cells[0]) {
    cells[0].classList.add('phone-image');
  }
  
  // Second cell contains the text content
  if (cells[1]) {
    cells[1].classList.add('content');
    
    // Find the app buttons container and add class
    const appButtonsDiv = cells[1].querySelector('.app-buttons');
    if (!appButtonsDiv) {
      // Find links that contain app store images and wrap them
      const links = cells[1].querySelectorAll('a');
      if (links.length >= 2) {
        // Check if last paragraph contains the buttons
        const paragraphs = cells[1].querySelectorAll('p');
        paragraphs.forEach(p => {
          const text = p.textContent.trim().toLowerCase();
          if (text === 'download the app') {
            p.classList.add('download-label');
          }
        });
        
        // Find or create app-buttons wrapper
        const lastDiv = cells[1].querySelector('div:last-of-type');
        if (lastDiv && lastDiv.querySelectorAll('a').length >= 2) {
          lastDiv.classList.add('app-buttons');
        }
      }
    }
  }
}