export default function decorate(block) {
  const rows = [...block.children];
  
  // Clear the block
  block.innerHTML = '';
  
  // First row is header
  const headerRow = rows[0];
  const headerCells = [...headerRow.children];
  
  const header = document.createElement('div');
  header.className = 'style-faq-header';
  
  const title = document.createElement('h2');
  title.className = 'style-faq-title';
  title.textContent = headerCells[0]?.textContent?.trim() || '';
  
  const subtitle = document.createElement('p');
  subtitle.className = 'style-faq-subtitle';
  subtitle.textContent = headerCells[1]?.textContent?.trim() || '';
  
  header.appendChild(title);
  header.appendChild(subtitle);
  block.appendChild(header);
  
  // Create FAQ list
  const faqList = document.createElement('div');
  faqList.className = 'style-faq-list';
  
  // Process FAQ items (skip first row which is header)
  rows.slice(1).forEach((row, index) => {
    const cells = [...row.children];
    const question = cells[0]?.textContent?.trim() || '';
    const answer = cells[1]?.textContent?.trim() || '';
    
    const item = document.createElement('div');
    item.className = 'style-faq-item';
    
    const questionBtn = document.createElement('button');
    questionBtn.className = 'style-faq-question';
    questionBtn.setAttribute('aria-expanded', 'false');
    questionBtn.setAttribute('aria-controls', `faq-answer-${index}`);
    
    const questionText = document.createElement('span');
    questionText.className = 'style-faq-question-text';
    questionText.textContent = question;
    
    const chevron = document.createElement('span');
    chevron.className = 'style-faq-chevron';
    chevron.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6,9 12,15 18,9"></polyline></svg>';
    
    questionBtn.appendChild(questionText);
    questionBtn.appendChild(chevron);
    
    const answerDiv = document.createElement('div');
    answerDiv.className = 'style-faq-answer';
    answerDiv.id = `faq-answer-${index}`;
    
    const answerContent = document.createElement('p');
    answerContent.className = 'style-faq-answer-content';
    answerContent.textContent = answer;
    
    answerDiv.appendChild(answerContent);
    
    item.appendChild(questionBtn);
    item.appendChild(answerDiv);
    faqList.appendChild(item);
    
    // Add click handler for accordion
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other items
      faqList.querySelectorAll('.style-faq-item').forEach(otherItem => {
        otherItem.classList.remove('active');
        otherItem.querySelector('.style-faq-question')?.setAttribute('aria-expanded', 'false');
      });
      
      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });
  
  block.appendChild(faqList);
}