export default function decorate(block) {
  const rows = [...block.children];
  
  rows.forEach((row) => {
    row.classList.add('promo-banner-row');
    const cells = [...row.children];
    
    if (cells[0]) {
      cells[0].classList.add('promo-banner-content');
    }
    
    if (cells[1]) {
      cells[1].classList.add('promo-banner-image');
    }
  });
}