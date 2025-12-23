export default function decorate(block) {
  const rows = block.querySelectorAll(':scope > div');
  const indicators = [];

  rows.forEach((row) => {
    const cell = row.querySelector('div');
    if (cell) {
      const content = cell.textContent.trim();
      const parts = content.split('|');
      indicators.push({
        label: parts[0] || '',
        text: parts[1] || '',
        active: parts[2] === 'active'
      });
    }
  });

  const list = document.createElement('ol');
  list.className = 'carousel-indicators-list';
  list.setAttribute('role', 'tablist');
  list.setAttribute('aria-label', 'Choose a slide to display');

  indicators.forEach((indicator, index) => {
    const dot = document.createElement('li');
    dot.className = 'carousel-indicators-dot';
    if (indicator.active) {
      dot.classList.add('carousel-indicators-dot--active');
    }
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-label', indicator.label);
    dot.setAttribute('aria-selected', indicator.active ? 'true' : 'false');
    dot.setAttribute('tabindex', indicator.active ? '0' : '-1');
    
    const srText = document.createElement('span');
    srText.textContent = indicator.text;
    dot.appendChild(srText);
    
    list.appendChild(dot);
  });

  block.innerHTML = '';
  block.appendChild(list);
}