export default function decorate(block) {
  const rows = Array.from(block.children);
  
  const indicators = rows.map((row, index) => {
    const cell = row.querySelector('div');
    const content = cell ? cell.textContent.trim() : '';
    const parts = content.split('|');
    const isActive = parts.includes('active');
    
    return {
      label: parts[0] || `Slide ${index + 1}`,
      text: parts[1] || `Image ${index + 1}`,
      active: isActive
    };
  });
  
  const indicatorList = document.createElement('ol');
  indicatorList.className = 'carousel-indicators__list';
  indicatorList.setAttribute('role', 'tablist');
  indicatorList.setAttribute('aria-label', 'Choose a slide to display');
  
  indicators.forEach((indicator, index) => {
    const dot = document.createElement('li');
    dot.className = 'carousel-indicators__dot';
    if (indicator.active) {
      dot.classList.add('carousel-indicators__dot--active');
    }
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-label', indicator.label);
    dot.setAttribute('aria-selected', indicator.active ? 'true' : 'false');
    dot.setAttribute('tabindex', indicator.active ? '0' : '-1');
    dot.textContent = '';
    indicatorList.appendChild(dot);
  });
  
  block.innerHTML = '';
  block.appendChild(indicatorList);
  
  // Add click functionality
  const dots = indicatorList.querySelectorAll('.carousel-indicators__dot');
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      dots.forEach(d => {
        d.classList.remove('carousel-indicators__dot--active');
        d.setAttribute('aria-selected', 'false');
        d.setAttribute('tabindex', '-1');
      });
      dot.classList.add('carousel-indicators__dot--active');
      dot.setAttribute('aria-selected', 'true');
      dot.setAttribute('tabindex', '0');
    });
  });
}