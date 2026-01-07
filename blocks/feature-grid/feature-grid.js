const icons = {
  chat: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',
  mail: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
  'check-circle': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>',
  sparkle: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z"/></svg>',
  person: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a6.5 6.5 0 0 1 13 0"/></svg>',
  document: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 7h6M9 11h6M9 15h4"/></svg>',
  calendar: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
  location: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 2a10 10 0 0 0-10 10c0 5.25 10 12 10 12s10-6.75 10-12a10 10 0 0 0-10-10z"/></svg>'
};

export default function decorate(block) {
  [...block.children].forEach((row) => {
    const cells = [...row.children];
    row.classList.add('feature-grid-item');
    
    if (cells[0]) {
      const iconName = cells[0].textContent.trim();
      const iconWrapper = document.createElement('div');
      iconWrapper.classList.add('feature-grid-icon');
      iconWrapper.innerHTML = icons[iconName] || icons.chat;
      cells[0].replaceWith(iconWrapper);
    }
    
    if (cells[1]) {
      cells[1].classList.add('feature-grid-content');
    }
  });
}