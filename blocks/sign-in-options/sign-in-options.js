export default function decorate(block) {
  const rows = [...block.children];
  
  rows.forEach((row, index) => {
    row.classList.add('option-column');
    
    if (index === 0) {
      row.classList.add('rbc-clients');
    } else {
      row.classList.add('everyone-else');
    }
    
    const cells = [...row.children];
    cells.forEach((cell) => {
      cell.classList.add('option-content');
      
      const links = cell.querySelectorAll('a');
      links.forEach((link) => {
        if (link.classList.contains('btn-primary')) {
          link.setAttribute('role', 'button');
        }
      });
    });
  });
}