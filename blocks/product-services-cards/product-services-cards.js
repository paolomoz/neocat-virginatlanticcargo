export default function decorate(block) {
  const rows = [...block.children];
  block.innerHTML = '';

  // Create cards grid for first two rows (products)
  const cardsGrid = document.createElement('div');
  cardsGrid.className = 'cards-grid';

  // Process first two rows as product cards
  for (let i = 0; i < 2 && i < rows.length; i++) {
    const row = rows[i];
    const cells = [...row.children];
    
    const card = document.createElement('div');
    card.className = 'card';

    // Image cell
    if (cells[0]) {
      const img = cells[0].querySelector('img');
      if (img) {
        img.className = 'card-image';
        card.appendChild(img);
      }
    }

    // Content cell
    if (cells[1]) {
      const content = document.createElement('div');
      content.className = 'card-content';

      const heading = cells[1].querySelector('h2');
      if (heading) {
        heading.className = 'card-title';
        content.appendChild(heading);
      }

      const paragraph = cells[1].querySelector('p');
      if (paragraph) {
        paragraph.className = 'card-description';
        content.appendChild(paragraph);
      }

      const link = cells[1].querySelector('a');
      if (link) {
        link.className = 'card-link';
        content.appendChild(link);
      }

      card.appendChild(content);
    }

    cardsGrid.appendChild(card);
  }

  block.appendChild(cardsGrid);

  // Section heading row
  if (rows[2]) {
    const headingCell = rows[2].querySelector('h2');
    if (headingCell) {
      headingCell.className = 'section-heading';
      block.appendChild(headingCell);
    }
  }

  // Booking options grid
  if (rows[3]) {
    const bookingGrid = document.createElement('div');
    bookingGrid.className = 'booking-grid';

    const cells = [...rows[3].children];
    cells.forEach(cell => {
      const bookingCard = document.createElement('div');
      bookingCard.className = 'booking-card';

      const heading = cell.querySelector('h3');
      if (heading) {
        heading.className = 'booking-title';
        bookingCard.appendChild(heading);
      }

      const paragraph = cell.querySelector('p');
      if (paragraph) {
        paragraph.className = 'booking-description';
        bookingCard.appendChild(paragraph);
      }

      const link = cell.querySelector('a');
      if (link) {
        link.className = 'card-link';
        bookingCard.appendChild(link);
      }

      bookingGrid.appendChild(bookingCard);
    });

    block.appendChild(bookingGrid);
  }
}