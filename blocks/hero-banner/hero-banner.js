export default function decorate(block) {
  // Create background shapes container
  const bgContainer = document.createElement('div');
  bgContainer.className = 'hero-banner-background';
  
  const shape1 = document.createElement('div');
  shape1.className = 'bg-shape bg-shape-1';
  
  const shape2 = document.createElement('div');
  shape2.className = 'bg-shape bg-shape-2';
  
  const shape3 = document.createElement('div');
  shape3.className = 'bg-shape bg-shape-3';
  
  bgContainer.appendChild(shape1);
  bgContainer.appendChild(shape2);
  bgContainer.appendChild(shape3);
  
  // Insert background at the beginning
  block.insertBefore(bgContainer, block.firstChild);
  
  // Style the content rows
  const rows = [...block.children].filter(el => !el.classList.contains('hero-banner-background'));
  
  rows.forEach((row) => {
    row.classList.add('hero-banner-content');
    
    const cells = [...row.children];
    if (cells[0]) {
      cells[0].classList.add('hero-banner-text');
    }
  });
}