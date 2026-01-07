export default function decorate(block) {
  const rows = [...block.children];
  
  rows.forEach((row) => {
    const cells = [...row.children];
    
    // First cell contains the icon
    if (cells[0]) {
      cells[0].classList.add('feature-icon');
    }
    
    // Second cell contains the text
    if (cells[1]) {
      cells[1].classList.add('feature-text');
    }
  });
}