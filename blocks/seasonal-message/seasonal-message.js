export default function decorate(block) {
  const rows = block.querySelectorAll(':scope > div');
  let heading = '';
  let paragraph = '';
  
  if (rows.length > 0) {
    const cells = rows[0].querySelectorAll(':scope > div');
    if (cells.length > 0) {
      const h2 = cells[0].querySelector('h2');
      const p = cells[0].querySelector('p');
      if (h2) heading = h2.textContent;
      if (p) paragraph = p.textContent;
    }
  }
  
  const renderedHTML = `
    <div class="seasonal-message-content">
      <div class="seasonal-message-wrapper">
        <h2>${heading}</h2>
        <p>${paragraph}</p>
      </div>
    </div>
    <div class="seasonal-message-decoration">
      <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="350" cy="100" r="80" fill="none" stroke="white" stroke-width="3"/>
        <path d="M280 100 Q320 60 360 100 Q320 140 280 100" fill="none" stroke="white" stroke-width="3"/>
        <circle cx="200" cy="50" r="3" fill="white"/>
        <circle cx="220" cy="80" r="2" fill="white"/>
        <circle cx="180" cy="70" r="2" fill="white"/>
      </svg>
    </div>
  `;
  
  block.innerHTML = renderedHTML;
}