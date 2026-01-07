export default function decorate(block) {
  const rows = [...block.children];
  
  // First row is the header section
  if (rows[0]) {
    rows[0].classList.add('header-section');
    const headerCells = [...rows[0].children];
    if (headerCells[0]) headerCells[0].classList.add('main-heading');
    if (headerCells[1]) headerCells[1].classList.add('main-description');
  }
  
  // Create options container for the two columns
  const optionsContainer = document.createElement('div');
  optionsContainer.classList.add('options-container');
  
  // Process RBC clients option (row 2)
  if (rows[1]) {
    const rbcColumn = document.createElement('div');
    rbcColumn.classList.add('option-column');
    
    const cells = [...rows[1].children];
    
    if (cells[0]) {
      const titleDiv = document.createElement('div');
      titleDiv.classList.add('option-title');
      titleDiv.innerHTML = cells[0].innerHTML;
      rbcColumn.appendChild(titleDiv);
    }
    
    if (cells[1]) {
      const descDiv = document.createElement('div');
      descDiv.classList.add('option-description');
      descDiv.innerHTML = cells[1].innerHTML;
      rbcColumn.appendChild(descDiv);
    }
    
    if (cells[2]) {
      const ctaDiv = document.createElement('div');
      ctaDiv.classList.add('option-cta');
      ctaDiv.innerHTML = cells[2].innerHTML;
      rbcColumn.appendChild(ctaDiv);
    }
    
    if (cells[3]) {
      const secondaryDiv = document.createElement('div');
      secondaryDiv.classList.add('option-secondary');
      secondaryDiv.innerHTML = cells[3].innerHTML;
      rbcColumn.appendChild(secondaryDiv);
    }
    
    optionsContainer.appendChild(rbcColumn);
    rows[1].remove();
  }
  
  // Process Everyone else option (row 3)
  if (rows[2]) {
    const elseColumn = document.createElement('div');
    elseColumn.classList.add('option-column');
    
    const cells = [...rows[2].children];
    
    if (cells[0]) {
      const titleDiv = document.createElement('div');
      titleDiv.classList.add('option-title');
      titleDiv.innerHTML = cells[0].innerHTML;
      elseColumn.appendChild(titleDiv);
    }
    
    if (cells[1]) {
      const descDiv = document.createElement('div');
      descDiv.classList.add('option-description');
      descDiv.innerHTML = cells[1].innerHTML;
      elseColumn.appendChild(descDiv);
    }
    
    if (cells[2]) {
      const ctaDiv = document.createElement('div');
      ctaDiv.classList.add('option-cta');
      ctaDiv.innerHTML = cells[2].innerHTML;
      elseColumn.appendChild(ctaDiv);
    }
    
    if (cells[3]) {
      const secondaryDiv = document.createElement('div');
      secondaryDiv.classList.add('option-secondary');
      secondaryDiv.innerHTML = cells[3].innerHTML;
      elseColumn.appendChild(secondaryDiv);
    }
    
    optionsContainer.appendChild(elseColumn);
    rows[2].remove();
  }
  
  block.appendChild(optionsContainer);
}