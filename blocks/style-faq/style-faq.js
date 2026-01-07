export default function decorate(block) {
  const rows = [...block.children];
  
  // First row is header
  const headerRow = rows[0];
  const headerCells = [...headerRow.children];
  
  headerRow.classList.add('style-faq-header');
  if (headerCells[0]) {
    headerCells[0].classList.add('style-faq-title');
  }
  if (headerCells[1]) {
    headerCells[1].classList.add('style-faq-subtitle');
  }
  
  // Remaining rows are FAQ items
  rows.slice(1).forEach((row) => {
    const cells = [...row.children];
    row.classList.add('style-faq-item');
    
    const questionText = cells[0]?.textContent || '';
    const answerText = cells[1]?.textContent || '';
    
    // Clear row and rebuild as accordion
    row.innerHTML = '';
    
    // Create question button
    const questionBtn = document.createElement('button');
    questionBtn.classList.add('style-faq-question');
    questionBtn.setAttribute('aria-expanded', 'false');
    
    const questionLabel = document.createElement('span');
    questionLabel.textContent = questionText;
    
    const chevron = document.createElement('span');
    chevron.classList.add('style-faq-chevron');
    chevron.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6,9 12,15 18,9"></polyline></svg>';
    
    questionBtn.appendChild(questionLabel);
    questionBtn.appendChild(chevron);
    
    // Create answer container
    const answerDiv = document.createElement('div');
    answerDiv.classList.add('style-faq-answer');
    
    const answerContent = document.createElement('div');
    answerContent.classList.add('style-faq-answer-content');
    answerContent.textContent = answerText;
    
    answerDiv.appendChild(answerContent);
    
    row.appendChild(questionBtn);
    row.appendChild(answerDiv);
    
    // Add click handler
    questionBtn.addEventListener('click', () => {
      const isActive = row.classList.contains('active');
      
      // Close all other items
      block.querySelectorAll('.style-faq-item').forEach((item) => {
        item.classList.remove('active');
        item.querySelector('.style-faq-question')?.setAttribute('aria-expanded', 'false');
      });
      
      // Toggle current item
      if (!isActive) {
        row.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}