export default function decorate(block) {
  const row = block.querySelector(':scope > div');
  const cells = row ? row.querySelectorAll(':scope > div') : [];
  
  const links = [];
  cells.forEach(cell => {
    const content = cell.textContent.trim();
    if (content.includes('|')) {
      const [text, url] = content.split('|');
      links.push({ text: text.trim(), url: url.trim() });
    }
  });
  
  const nav = document.createElement('div');
  nav.className = 'login-nav';
  
  links.forEach((link, index) => {
    if (index > 0) {
      const divider = document.createElement('span');
      divider.className = 'divider';
      divider.textContent = '|';
      nav.appendChild(divider);
    }
    
    if (link.text === 'myVs Login') {
      const icon = document.createElement('span');
      icon.className = 'user-icon';
      nav.appendChild(icon);
    }
    
    const anchor = document.createElement('a');
    anchor.href = link.url;
    anchor.textContent = link.text;
    nav.appendChild(anchor);
  });
  
  block.innerHTML = '';
  block.appendChild(nav);
}