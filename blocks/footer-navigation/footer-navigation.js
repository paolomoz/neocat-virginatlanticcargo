export default function decorate(block) {
  const rows = [...block.children];
  
  rows.forEach((row) => {
    const cells = [...row.children];
    
    if (cells.length === 0) return;
    
    // First cell contains the column type identifier
    const typeCell = cells[0];
    const columnType = typeCell.textContent.trim().toLowerCase();
    
    row.classList.add(columnType);
    typeCell.style.display = 'none';
    
    if (columnType === 'avion-rewards' || columnType === 'rbc-royal-bank') {
      // Navigation column
      cells.forEach((cell, index) => {
        if (index === 0) return; // skip type cell
        
        if (index === 1) {
          // Heading cell
          cell.classList.add('section-heading');
        } else {
          // Link cells
          cell.classList.add('nav-link');
        }
      });
    } else if (columnType === 'social-apps') {
      // Social and app badges column
      cells.forEach((cell, index) => {
        if (index === 0) return; // skip type cell
        
        if (index === 1) {
          // Hidden label
          cell.style.display = 'none';
        } else if (index === 2) {
          // Social icons
          cell.classList.add('social-icons');
        } else if (index === 3) {
          // App badges
          cell.classList.add('app-badges');
        }
      });
    }
  });
}