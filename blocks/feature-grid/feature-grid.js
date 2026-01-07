const iconSVGs = {
  chat: `<svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`,
  mail: `<svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>`,
  'check-circle': `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`,
  sparkle: `<svg viewBox="0 0 24 24"><path d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5z"/><path d="M5 5l1.5 3L10 9.5 6.5 11 5 14l-1.5-3L0 9.5 3.5 8z"/></svg>`,
  person: `<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>`,
  document: `<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>`,
  calendar: `<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>`,
  location: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>`
};

export default function decorate(block) {
  [...block.children].forEach((row) => {
    const cells = [...row.children];
    const iconType = cells[0]?.textContent?.trim() || 'chat';
    const textContent = cells[1]?.textContent?.trim() || '';
    
    // Create icon container
    const iconDiv = document.createElement('div');
    iconDiv.className = 'feature-icon';
    iconDiv.innerHTML = iconSVGs[iconType] || iconSVGs.chat;
    
    // Create text container
    const textDiv = document.createElement('div');
    textDiv.className = 'feature-text';
    textDiv.textContent = textContent;
    
    // Clear and rebuild row
    row.innerHTML = '';
    row.appendChild(iconDiv);
    row.appendChild(textDiv);
  });
}