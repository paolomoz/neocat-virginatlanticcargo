export default function decorate(block) {
  [...block.children].forEach((row) => {
    const cells = [...row.children];
    
    if (cells[0]) {
      cells[0].classList.add('item-heading');
      // Check for NEW! badge text and wrap it
      const headingText = cells[0].innerHTML;
      if (headingText.includes('NEW!')) {
        cells[0].innerHTML = headingText.replace(/NEW!/g, '<span class="new-badge">NEW!</span>');
      }
    }
    
    if (cells[1]) {
      cells[1].classList.add('item-description');
    }
    
    if (cells[2]) {
      cells[2].classList.add('item-cta');
    }
    
    if (cells[3]) {
      cells[3].classList.add('item-secondary');
    }
  });
}