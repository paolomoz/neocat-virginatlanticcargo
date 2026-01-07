export default function decorate(block) {
  const rows = [...block.children];
  
  rows.forEach((row, index) => {
    row.classList.add('dual-signup-column');
    
    const cell = row.children[0];
    if (cell) {
      cell.classList.add('dual-signup-content');
      
      // Find and style the heading
      const heading = cell.querySelector('h3');
      if (heading) {
        heading.classList.add('dual-signup-heading');
      }
      
      // Find and style buttons
      const links = cell.querySelectorAll('a');
      links.forEach((link) => {
        if (link.classList.contains('button')) {
          link.classList.add('dual-signup-cta');
        } else if (link.classList.contains('text-link')) {
          link.classList.add('dual-signup-link');
        }
      });
      
      // Find and style paragraphs
      const paragraphs = cell.querySelectorAll('p');
      paragraphs.forEach((p) => {
        if (p.classList.contains('secondary-text')) {
          p.classList.add('dual-signup-secondary');
        }
      });
    }
  });
}