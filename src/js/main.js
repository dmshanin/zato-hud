import { animateCSS } from './helpers';

const methodStore = {
  openPopup: targetSelector => {
    const pageSectionEl = document.querySelector(`.page-section`);
    const popupWrapperEl = document.querySelector(`.popup__wrapper`);
    const popupEl = popupWrapperEl.querySelector(targetSelector);

    // blurred content section
    pageSectionEl.classList.add('in-blur');

    // show popup container
    popupWrapperEl.classList.add('in');

    // open popup
    popupEl.classList.add('in');

    // run animation
    animateCSS(popupWrapperEl, 'fadeIn');
  },
  closePopup: () => {
    const pageSectionEl = document.querySelector(`.page-section`);
    const popupWrapperEl = document.querySelector(`.popup__wrapper`);
    const popup = document.querySelector('.popup.in');

    if (popup !== null) {
      // Скрываем все попапы
      popup.classList.remove('in');

      setTimeout(() => {
        // Убираем блюр с контента
        pageSectionEl.classList.remove('in-blur');

        // Скрываем обертку попапов
        popupWrapperEl.classList.remove('in');
      }, 800);
    }
  },
};

// Close popup
(() => {
  const wrapper = document.querySelectorAll('.popup__wrapper');

  wrapper &&
    wrapper.forEach(item => {
      const closeBtn = item.querySelectorAll('.popup .btn-close, .popup__offset');

      closeBtn.forEach(item => {
        item.addEventListener('click', () => {
          methodStore.closePopup();
        });
      });
    });
})();

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
  const catalogItemEl = document.querySelectorAll('[data-toggle="popup"]');

  catalogItemEl &&
    catalogItemEl.forEach(item => {
      item.addEventListener('click', () => {
        const targetSelector = item.dataset.target;

        animateCSS(item, 'pulse');
        methodStore.openPopup(targetSelector);
      });
    });
})();

// Product presentation tab
(() => {
  const productPresentationEl = document.querySelectorAll('.product-presentation');

  productPresentationEl &&
    productPresentationEl.forEach(item => {
      const btnTab = item.querySelectorAll('[data-target-id]');
      const tabs = item.querySelectorAll(`.product-presentation__tab`);

      btnTab.forEach(btn => {
        const tabId = btn.dataset.targetId;

        btn.addEventListener('click', () => {
          tabs.forEach(tab => {
            tab.classList.remove('active');

            if (Number(tab.dataset.tabId) === Number(tabId)) {
              tab.classList.add('active');
            }
          });
        });
      });
    });
})();

// Collapse
(() => {
  const collapseEl = document.querySelectorAll('[data-toggle="collapse"]');

  collapseEl &&
    collapseEl.forEach(item => {
      item.addEventListener('click', e => {
        const target = item.getAttribute('href');
        const targetEl = document.querySelector(target);

        e.preventDefault();

        if (targetEl.classList.contains('in')) {
          targetEl.classList.remove('in');
        } else {
          targetEl.classList.add('in');
        }
      });
    });
})();

(() => {
  const videoControlEl = document.querySelector('.hud-video-player .btn-control');

  videoControlEl &&
    videoControlEl.addEventListener('click', () => {
      videoControlEl.classList.toggle('active');
    });
})();
