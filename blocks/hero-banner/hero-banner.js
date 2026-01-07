export default function decorate(block) {
  const row = block.children[0];
  if (row) {
    row.classList.add('hero-content');
    
    const cells = [...row.children];
    if (cells[0]) {
      // Find paragraphs and add appropriate classes
      const paragraphs = cells[0].querySelectorAll('p');
      paragraphs.forEach((p, index) => {
        if (p.querySelector('a')) {
          p.classList.add('hero-cta');
        } else {
          p.classList.add('hero-description');
        }
      });
    }
  }
}