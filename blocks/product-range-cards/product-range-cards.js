export default function decorate(block) {
  const rows = Array.from(block.children);
  
  if (rows.length === 0) return;
  
  // First row is the section heading
  const headingRow = rows[0];
  headingRow.classList.add('section-heading');
  
  // Remaining rows are cards - wrap them in a container
  const cardRows = rows.slice(1);
  
  if (cardRows.length > 0) {
    const cardsContainer = document.createElement('div');
    cardsContainer.classList.add('cards-container');
    
    cardRows.forEach((row) => {
      const cells = Array.from(row.children);
      row.classList.add('card');
      
      cells.forEach((cell, index) => {
        if (index === 0) {
          cell.classList.add('card-image');
        } else if (index === 1) {
          cell.classList.add('card-title');
        } else if (index === 2) {
          cell.classList.add('card-description');
        } else if (index === 3) {
          cell.classList.add('card-cta');
        }
      });
      
      cardsContainer.appendChild(row);
    });
    
    block.appendChild(cardsContainer);
  }
}