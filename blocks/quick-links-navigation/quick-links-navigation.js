export default function decorate(block) {
  // Get all rows from the block
  const rows = Array.from(block.children);
  
  // Process each row as a quick link item
  rows.forEach((row) => {
    row.classList.add('quick-link-item');
    
    const cells = Array.from(row.children);
    
    if (cells.length >= 2) {
      // First cell contains the icon
      const iconCell = cells[0];
      iconCell.classList.add('quick-link-icon');
      
      // Second cell contains the link
      const linkCell = cells[1];
      linkCell.classList.add('quick-link-text');
      
      // Find the anchor and ensure proper styling
      const anchor = linkCell.querySelector('a');
      if (anchor) {
        anchor.classList.add('quick-link-anchor');
      }
    }
  });
}