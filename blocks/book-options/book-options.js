export default function decorate(block) {
  const rows = [...block.children];
  
  // Create wrapper
  const wrapper = document.createElement('div');
  wrapper.className = 'book-options-wrapper';
  
  // Get title from first row
  const titleRow = rows[0];
  const titleText = titleRow?.querySelector('div')?.textContent?.trim() || '';
  
  // Create main title
  const mainTitle = document.createElement('h2');
  mainTitle.className = 'main-title';
  mainTitle.textContent = titleText;
  wrapper.appendChild(mainTitle);
  
  // Create columns container
  const columnsContainer = document.createElement('div');
  columnsContainer.className = 'columns-container';
  
  // Get columns from second row
  if (rows[1]) {
    const columns = [...rows[1].children];
    
    columns.forEach((col) => {
      const column = document.createElement('div');
      column.className = 'column';
      
      // Get heading
      const heading = col.querySelector('h3');
      if (heading) {
        const h3 = document.createElement('h3');
        h3.textContent = heading.textContent.trim();
        column.appendChild(h3);
      }
      
      // Get paragraphs
      const paragraphs = col.querySelectorAll('p');
      paragraphs.forEach((p) => {
        const para = document.createElement('p');
        para.textContent = p.textContent.trim();
        column.appendChild(para);
      });
      
      // Get link
      const link = col.querySelector('a');
      if (link) {
        const a = document.createElement('a');
        a.href = link.href;
        a.textContent = link.textContent.trim();
        if (link.target) {
          a.target = link.target;
        }
        column.appendChild(a);
      }
      
      columnsContainer.appendChild(column);
    });
  }
  
  wrapper.appendChild(columnsContainer);
  
  // Clear and append
  block.textContent = '';
  block.appendChild(wrapper);
}