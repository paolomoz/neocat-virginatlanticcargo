export default function decorate(block) {
  // Add wrapper for background styling
  const wrapper = block.closest('.quick-links-bar-wrapper') || block.parentElement;
  if (wrapper) {
    wrapper.classList.add('quick-links-bar-wrapper');
  }
  
  // Process each link item
  const rows = block.querySelectorAll(':scope > div');
  
  rows.forEach((row) => {
    row.classList.add('quick-link-item');
    
    const cell = row.querySelector(':scope > div');
    if (cell) {
      cell.classList.add('quick-link-content');
      
      // Ensure icon and link are properly structured
      const img = cell.querySelector('img');
      const link = cell.querySelector('a');
      
      if (img) {
        img.classList.add('quick-link-icon');
      }
      
      if (link) {
        link.classList.add('quick-link-anchor');
        
        // Ensure arrow is present in link text
        if (!link.textContent.includes('→')) {
          link.textContent = link.textContent.trim() + ' →';
        }
      }
    }
  });
}