import { animateCSS } from './helpers';

// Menu
(() => {
  const navItemEl = document.querySelectorAll('[data-menu-item-parent]');
  const navOverlayEl = document.querySelectorAll('.nav__content__overlay');
  const navContentEl = document.querySelector('.nav__content');
  const navLinkGroupEl = document.querySelectorAll('.nav__content__link-group');

  navItemEl.forEach(item => {
    item.addEventListener('click', () => {
      const itemId = item.dataset.id;

      if (itemId === '0') {
        navContentEl.classList.add('in');
      }

      navLinkGroupEl.forEach(item => {
        item.classList.remove('in');

        if (item.dataset.sourceId === itemId) {
          item.classList.add('in');
        }
      });
    });
  });

  navOverlayEl.forEach(item => {
    item.addEventListener('click', () => {
      navContentEl.classList.remove('in');

      navLinkGroupEl.forEach(item => {
        item.classList.remove('in');
      });
    });
  });
})();

// Catalog
(() => {
  const catalogItemEl = document.querySelectorAll('.h__pc__list-item');

  catalogItemEl.forEach(item => {
    item.addEventListener('click', () => {
      animateCSS(item, 'pulse', () => {
        console.log('ХУЙ');
      });
    });
  });
})();
