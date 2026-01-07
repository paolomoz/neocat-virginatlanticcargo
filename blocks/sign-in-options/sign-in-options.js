export default function decorate(block) {
  const rows = [...block.children];
  
  rows.forEach((row, index) => {
    row.classList.add('sign-in-options-column');
    
    const cell = row.children[0];
    if (cell) {
      cell.classList.add('sign-in-options-content');
      
      // Find and style primary buttons
      const links = cell.querySelectorAll('a');
      links.forEach((link) => {
        const parentP = link.closest('p');
        const isOnlyChild = parentP && parentP.childNodes.length === 1;
        
        if (isOnlyChild && !link.textContent.includes('Click here')) {
          link.classList.add('button-primary');
        } else if (link.textContent.includes('Click here')) {
          link.classList.add('text-link');
        }
      });
      
      // Find heading with "Everyone else" and add badge
      const headings = cell.querySelectorAll('h3');
      headings.forEach((heading) => {
        if (heading.textContent.includes('NEW!')) {
          const text = heading.innerHTML;
          heading.innerHTML = text.replace('NEW!', '<span class="new-badge">NEW!</span>');
        }
      });
    }
  });
}