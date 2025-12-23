export default function decorate(block) {
  const rows = block.querySelectorAll(':scope > div');
  rows.forEach((row) => {
    const cells = row.querySelectorAll(':scope > div');
    cells.forEach((cell) => {
      const paras = cell.querySelectorAll('p');
      if (paras.length >= 2) {
        const label = paras[0].textContent.trim();
        const hex = paras[1].textContent.trim();

        // Create swatch element
        const swatch = document.createElement('div');
        swatch.className = 'swatch-color';
        swatch.style.backgroundColor = hex;
        swatch.style.height = '80px';
        swatch.style.borderRadius = '8px';
        swatch.style.marginBottom = '8px';
        swatch.style.border = '1px solid rgba(0,0,0,0.1)';

        // Insert before label
        cell.insertBefore(swatch, paras[0]);

        // Style the paragraphs
        paras[0].style.fontWeight = '600';
        paras[0].style.margin = '4px 0';
        paras[1].style.fontFamily = 'monospace';
        paras[1].style.fontSize = '12px';
        paras[1].style.opacity = '0.7';
        paras[1].style.margin = '4px 0';
      }
    });
  });
}
