export default function decorate(block) {
  const rows = [...block.children];
  
  // Create the indicators container
  const dotsContainer = document.createElement('ol');
  dotsContainer.className = 'carousel-indicators__dots';
  dotsContainer.setAttribute('role', 'tablist');
  dotsContainer.setAttribute('aria-label', 'Choose a slide to display');
  
  rows.forEach((row, index) => {
    const cell = row.querySelector('div');
    const content = cell ? cell.textContent.trim() : '';
    const [ariaLabel, text] = content.split('|');
    
    const dot = document.createElement('li');
    dot.className = 'carousel-indicators__dot';
    if (index === 0) {
      dot.classList.add('carousel-indicators__dot--active');
    }
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-label', ariaLabel || `Slide ${index + 1}`);
    dot.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
    dot.setAttribute('tabindex', index === 0 ? '0' : '-1');
    
    // Visually hidden text for accessibility
    const srText = document.createElement('span');
    srText.className = 'sr-only';
    srText.style.cssText = 'position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); border: 0;';
    srText.textContent = text || `Image ${index + 1}`;
    dot.appendChild(srText);
    
    dotsContainer.appendChild(dot);
  });
  
  block.innerHTML = '';
  block.appendChild(dotsContainer);
}