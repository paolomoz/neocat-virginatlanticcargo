export default function decorate(block) {
  const rows = [...block.children];
  
  // Clear block and rebuild structure
  block.innerHTML = '';
  
  rows.forEach((row, index) => {
    const cells = [...row.children];
    
    if (index === 0) {
      // Header row
      const headerRow = document.createElement('div');
      headerRow.classList.add('header-row');
      
      const title = document.createElement('h2');
      title.classList.add('header-title');
      title.textContent = cells[0]?.textContent?.trim() || '';
      
      const subtitle = document.createElement('p');
      subtitle.classList.add('header-subtitle');
      subtitle.textContent = cells[1]?.textContent?.trim() || '';
      
      headerRow.appendChild(title);
      headerRow.appendChild(subtitle);
      block.appendChild(headerRow);
    } else {
      // Accordion item
      const accordionItem = document.createElement('div');
      accordionItem.classList.add('accordion-item');
      
      const accordionHeader = document.createElement('div');
      accordionHeader.classList.add('accordion-header');
      
      const question = document.createElement('h3');
      question.classList.add('accordion-question');
      question.textContent = cells[0]?.textContent?.trim() || '';
      
      const icon = document.createElement('div');
      icon.classList.add('accordion-icon');
      icon.innerHTML = '<svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></svg>';
      
      accordionHeader.appendChild(question);
      accordionHeader.appendChild(icon);
      
      const accordionContent = document.createElement('div');
      accordionContent.classList.add('accordion-content');
      
      const answer = document.createElement('p');
      answer.classList.add('accordion-answer');
      answer.textContent = cells[1]?.textContent?.trim() || '';
      
      accordionContent.appendChild(answer);
      
      accordionItem.appendChild(accordionHeader);
      accordionItem.appendChild(accordionContent);
      
      // Click handler for accordion
      accordionHeader.addEventListener('click', () => {
        const isActive = accordionItem.classList.contains('active');
        
        // Close all other items
        block.querySelectorAll('.accordion-item').forEach(item => {
          item.classList.remove('active');
        });
        
        // Toggle current item
        if (!isActive) {
          accordionItem.classList.add('active');
        }
      });
      
      block.appendChild(accordionItem);
    }
  });
}