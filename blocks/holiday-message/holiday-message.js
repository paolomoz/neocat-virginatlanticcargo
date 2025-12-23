export default function decorate(block) {
  const rows = block.querySelectorAll(':scope > div');
  
  let title = '';
  let text = '';
  
  rows.forEach(row => {
    const cells = row.querySelectorAll(':scope > div');
    cells.forEach(cell => {
      const h2 = cell.querySelector('h2');
      const p = cell.querySelector('p');
      if (h2) title = h2.textContent.trim();
      if (p) text = p.textContent.trim();
    });
  });
  
  const wrapper = document.createElement('div');
  wrapper.className = 'holiday-message-wrapper';
  
  wrapper.innerHTML = `
    <div class="holiday-message-container">
      <h2 class="holiday-message-title">${title}</h2>
      <p class="holiday-message-text">${text}</p>
    </div>
    <div class="holiday-message-decoration">
      <div class="snowflakes">â â â</div>
      <div class="sleigh"></div>
    </div>
  `;
  
  block.textContent = '';
  block.appendChild(wrapper);
}