export default function decorate(block) {
  const rows = block.querySelectorAll(':scope > div');
  const content = rows[0]?.querySelector('div');
  
  const heading = content?.querySelector('h2')?.textContent || '';
  const paragraph = content?.querySelector('p')?.textContent || '';
  
  block.innerHTML = `
    <div class="seasonal-message-wrapper">
      <div class="seasonal-message-content">
        <h2>${heading}</h2>
        <p>${paragraph}</p>
      </div>
      <div class="seasonal-message-decoration">
        <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
          <!-- Decorative circles and arcs -->
          <circle class="decoration-circle" cx="300" cy="100" r="80" />
          <path class="decoration-arc" d="M 150 50 Q 200 0 250 50" />
          <path class="decoration-arc" d="M 100 150 Q 150 200 200 150" />
          <path class="decoration-arc" d="M 320 30 Q 380 60 350 120" />
          <!-- Snowflakes -->
          <text class="snowflake" x="180" y="80">❄</text>
          <text class="snowflake" x="220" y="120">❄</text>
          <text class="snowflake" x="160" y="140">❄</text>
        </svg>
      </div>
    </div>
  `;
}