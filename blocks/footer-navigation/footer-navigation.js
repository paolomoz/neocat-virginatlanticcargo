export default function decorate(block) {
  const rows = [...block.children];
  
  rows.forEach((row, rowIndex) => {
    const cells = [...row.children];
    
    if (rowIndex < 2) {
      // Link columns (Avion Rewards and RBC Royal Bank)
      row.classList.add('link-column');
      
      cells.forEach((cell, cellIndex) => {
        if (cellIndex === 0) {
          // First cell is the heading
          cell.classList.add('column-heading');
        } else {
          // Other cells are navigation links
          cell.classList.add('nav-link');
        }
      });
    } else {
      // Social and app download column
      row.classList.add('social-column');
      
      cells.forEach((cell, cellIndex) => {
        if (cellIndex === 0) {
          // Social links
          cell.classList.add('social-links');
        } else {
          // App badges
          cell.classList.add('app-badges');
        }
      });
    }
  });
}