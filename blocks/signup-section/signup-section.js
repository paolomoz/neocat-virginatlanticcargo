export default function decorate(block) {
  const rows = [...block.children];
  
  if (rows[0]) {
    rows[0].classList.add('signup-section-header');
  }
  
  if (rows[1]) {
    rows[1].classList.add('signup-section-options');
    const columns = [...rows[1].children];
    
    if (columns[0]) {
      columns[0].classList.add('signup-section-option', 'signup-section-rbc');
    }
    
    if (columns[1]) {
      columns[1].classList.add('signup-section-option', 'signup-section-everyone');
      
      // Find h3 and wrap badge text
      const h3 = columns[1].querySelector('h3');
      if (h3) {
        const text = h3.textContent;
        if (text.includes('NEW!')) {
          h3.innerHTML = text.replace('NEW!', '<span class="signup-section-badge">NEW!</span>');
        }
      }
    }
  }
  
  // Style buttons and links
  block.querySelectorAll('a').forEach((link) => {
    const text = link.textContent.toLowerCase();
    if (text.includes('sign in') || text.includes('sign up with email')) {
      link.classList.add('signup-section-btn');
    } else if (text.includes('click here') || text.includes('enroll')) {
      link.classList.add('signup-section-link');
    }
  });
}