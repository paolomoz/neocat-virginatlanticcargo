export default function decorate(block) {
  const rows = block.querySelectorAll(':scope > div');
  const indicators = [];

  rows.forEach((row) => {
    const cell = row.querySelector('div');
    if (cell) {
      const content = cell.textContent.trim();
      const parts = content.split('|');
      const label = parts[0] || '';
      const text = parts[1] || '';
      const isActive = parts[2] === 'active';
      indicators.push({ label, text, isActive });
    }
  });

  const ol = document.createElement('ol');
  ol.className = 'carousel-indicators-list';
  ol.setAttribute('role', 'tablist');
  ol.setAttribute('aria-label', 'Choose a slide to display');

  indicators.forEach((indicator, index) => {
    const li = document.createElement('li');
    li.className = 'carousel-indicators-item';
    li.setAttribute('role', 'tab');
    li.setAttribute('aria-label', indicator.label);
    li.setAttribute('aria-selected', indicator.isActive ? 'true' : 'false');
    li.setAttribute('tabindex', indicator.isActive ? '0' : '-1');

    const span = document.createElement('span');
    span.textContent = indicator.text;
    li.appendChild(span);

    ol.appendChild(li);
  });

  block.innerHTML = '';
  block.appendChild(ol);

  // Add click functionality
  const items = ol.querySelectorAll('.carousel-indicators-item');
  items.forEach((item) => {
    item.addEventListener('click', () => {
      items.forEach((i) => {
        i.setAttribute('aria-selected', 'false');
        i.setAttribute('tabindex', '-1');
      });
      item.setAttribute('aria-selected', 'true');
      item.setAttribute('tabindex', '0');
    });
  });
}