export default function decorate(block) {
  const row = block.children[0];
  if (row) {
    row.classList.add('promo-accessories-row');
    const cells = [...row.children];
    if (cells[0]) {
      cells[0].classList.add('promo-accessories-content');
      const heading = cells[0].querySelector('h2');
      if (heading) {
        const headingText = heading.innerHTML;
        heading.innerHTML = headingText.replace(/Vor/g, '<span class="strikethrough">Vor</span>');
      }
      const paragraphs = cells[0].querySelectorAll('p');
      paragraphs.forEach((p, index) => {
        if (index === 0) p.classList.add('subtext');
        if (index === 1) p.classList.add('promo-text');
      });
      const link = cells[0].querySelector('a');
      if (link) {
        link.classList.add('cta-button');
      }
    }
    if (cells[1]) {
      cells[1].classList.add('promo-accessories-image');
    }
  }
}