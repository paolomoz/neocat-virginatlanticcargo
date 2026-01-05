export default function decorate(block) {
  const rows = Array.from(block.children);
  const indicators = [];
  
  rows.forEach((row) => {
    const cell = row.querySelector('div');
    if (cell) {
      const content = cell.textContent.trim();
      const parts = content.split('|');
      const label = parts[0] || '';
      const name = parts[1] || '';
      const isActive = parts[2] === 'active';
      
      indicators.push({
        label,
        name,
        isActive
      });
    }
  });
  
  const list = document.createElement('ol');
  list.className = 'carousel-indicators-list';
  list.setAttribute('role', 'tablist');
  list.setAttribute('aria-label', 'Choose a slide to display');
  
  indicators.forEach((indicator, index) => {
    const dot = document.createElement('li');
    dot.className = `carousel-indicators-dot${indicator.isActive ? ' carousel-indicators-dot--active' : ''}`;
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-label', indicator.label);
    dot.setAttribute('aria-selected', indicator.isActive ? 'true' : 'false');
    dot.setAttribute('tabindex', indicator.isActive ? '0' : '-1');
    dot.textContent = '';
    
    dot.addEventListener('click', () => {
      list.querySelectorAll('.carousel-indicators-dot').forEach((d) => {
        d.classList.remove('carousel-indicators-dot--active');
        d.setAttribute('aria-selected', 'false');
        d.setAttribute('tabindex', '-1');
      });
      dot.classList.add('carousel-indicators-dot--active');
      dot.setAttribute('aria-selected', 'true');
      dot.setAttribute('tabindex', '0');
    });
    
    list.appendChild(dot);
  });
  
  block.innerHTML = '';
  block.appendChild(list);
}