export default function decorate(block) {
  const rows = [...block.children];
  
  // Clear and rebuild structure
  block.innerHTML = '';
  
  // Header row (first row)
  if (rows[0]) {
    const headerRow = document.createElement('div');
    headerRow.className = 'header-row';
    
    const cells = [...rows[0].children];
    
    const mainTitle = document.createElement('h2');
    mainTitle.className = 'main-title';
    mainTitle.textContent = cells[0]?.textContent?.trim() || '';
    headerRow.appendChild(mainTitle);
    
    const subtitle = document.createElement('p');
    subtitle.className = 'subtitle';
    subtitle.textContent = cells[1]?.textContent?.trim() || '';
    headerRow.appendChild(subtitle);
    
    block.appendChild(headerRow);
  }
  
  // Options container
  const optionsContainer = document.createElement('div');
  optionsContainer.className = 'options-container';
  
  // RBC clients column (second row)
  if (rows[1]) {
    const rbcColumn = document.createElement('div');
    rbcColumn.className = 'option-column rbc-clients';
    
    const cells = [...rows[1].children];
    
    const title = document.createElement('h3');
    title.className = 'option-title';
    title.textContent = cells[0]?.textContent?.trim() || '';
    rbcColumn.appendChild(title);
    
    const description = document.createElement('p');
    description.className = 'option-description';
    description.textContent = cells[1]?.textContent?.trim() || '';
    rbcColumn.appendChild(description);
    
    const ctaLink = cells[2]?.querySelector('a');
    if (ctaLink) {
      ctaLink.className = 'cta-button';
      rbcColumn.appendChild(ctaLink);
    }
    
    const enrollDiv = document.createElement('p');
    enrollDiv.className = 'enroll-link';
    const enrollCell = cells[3];
    if (enrollCell) {
      const enrollLink = enrollCell.querySelector('a');
      if (enrollLink) {
        enrollDiv.innerHTML = `Don't have Online Banking? <a href="${enrollLink.href}">Click here to enroll</a>`;
      }
    }
    rbcColumn.appendChild(enrollDiv);
    
    optionsContainer.appendChild(rbcColumn);
  }
  
  // Everyone else column (third row)
  if (rows[2]) {
    const everyoneColumn = document.createElement('div');
    everyoneColumn.className = 'option-column everyone-else';
    
    const cells = [...rows[2].children];
    
    const titleWrapper = document.createElement('h3');
    titleWrapper.className = 'option-title';
    titleWrapper.innerHTML = `${cells[0]?.textContent?.trim() || ''} <span class="new-badge">${cells[1]?.textContent?.trim() || ''}</span>`;
    everyoneColumn.appendChild(titleWrapper);
    
    const description = document.createElement('p');
    description.className = 'option-description';
    description.textContent = cells[2]?.textContent?.trim() || '';
    everyoneColumn.appendChild(description);
    
    const ctaLink = cells[3]?.querySelector('a');
    if (ctaLink) {
      ctaLink.className = 'cta-button';
      everyoneColumn.appendChild(ctaLink);
    }
    
    optionsContainer.appendChild(everyoneColumn);
  }
  
  block.appendChild(optionsContainer);
  
  // Eligibility row (fourth row)
  if (rows[3]) {
    const eligibilityRow = document.createElement('div');
    eligibilityRow.className = 'eligibility-row';
    
    const cells = [...rows[3].children];
    const eligLink = cells[0]?.querySelector('a');
    
    if (eligLink) {
      eligLink.className = 'eligibility-link';
      const tooltipIcon = document.createElement('span');
      tooltipIcon.className = 'tooltip-icon';
      tooltipIcon.textContent = 'i';
      tooltipIcon.setAttribute('aria-label', 'More information');
      
      eligibilityRow.appendChild(eligLink);
      eligibilityRow.appendChild(tooltipIcon);
    }
    
    block.appendChild(eligibilityRow);
  }
}