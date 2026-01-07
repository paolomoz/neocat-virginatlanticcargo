export default function decorate(block) {
  const columns = [...block.children];

  columns.forEach((column, index) => {
    const cells = [...column.children];

    if (index < 2) {
      // Navigation columns (Avion Rewards, RBC Royal Bank)
      column.classList.add('nav-column');

      if (cells[0]) {
        cells[0].classList.add('nav-heading');
      }

      // Create links container
      const linksContainer = document.createElement('div');
      linksContainer.classList.add('nav-links');

      cells.slice(1).forEach((cell) => {
        const link = cell.querySelector('a');
        if (link) {
          linksContainer.appendChild(link);
        }
        cell.remove();
      });

      column.appendChild(linksContainer);
    } else {
      // Social and app badges column
      column.classList.add('social-column');

      if (cells[0]) {
        cells[0].classList.add('social-icons');
        const socialLinks = cells[0].querySelectorAll('a');
        socialLinks.forEach((link) => {
          link.classList.add('social-link');
        });
      }

      if (cells[1]) {
        cells[1].classList.add('app-badges');
        const badgeLinks = cells[1].querySelectorAll('a');
        badgeLinks.forEach((link) => {
          link.classList.add('app-badge-link');
        });
      }
    }
  });
}