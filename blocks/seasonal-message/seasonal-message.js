export default function decorate(block) {
  const rows = block.querySelectorAll(':scope > div');
  const content = rows[0]?.querySelector(':scope > div');
  
  const heading = content?.querySelector('h2')?.textContent || '';
  const paragraph = content?.querySelector('p')?.textContent || '';
  
  const decorationSVG = `
    <svg viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="250" cy="75" r="60" stroke="white" stroke-width="3" fill="none" opacity="0.6"/>
      <path d="M 180 20 Q 220 75 180 130" stroke="white" stroke-width="3" fill="none" opacity="0.6"/>
      <circle cx="200" cy="30" r="4" fill="white" opacity="0.8"/>
      <circle cx="220" cy="50" r="3" fill="white" opacity="0.6"/>
      <circle cx="190" cy="60" r="2" fill="white" opacity="0.5"/>
    </svg>
  `;
  
  block.innerHTML = `
    <div class="seasonal-message-content">
      <h2>${heading}</h2>
      <p>${paragraph}</p>
    </div>
    <div class="seasonal-message-decoration">
      ${decorationSVG}
    </div>
  `;
}