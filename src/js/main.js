import { animateCSS } from './helpers';

const methodStore = {
  openPopup: targetSelector => {
    const pageSectionEl = document.querySelector(`.page-section`);
    const popupWrapperEl = document.querySelector(`.popup__wrapper`);
    const popupEl = popupWrapperEl.querySelector(targetSelector);
    const popupOffsetEl = popupWrapperEl.querySelector(`.popup__offset`);

    // blurred content section
    pageSectionEl.classList.add('in-blur');

    // show popup container
    popupWrapperEl.classList.add('in');

    // open popup
    popupEl.classList.add('in');

    // run animation
    animateCSS(popupWrapperEl, 'fadeIn');

    if (!popupOffsetEl.classList.contains('in')) {
      popupOffsetEl.addEventListener('click', () => {
        methodStore.closePopup();
      });

      // Исключаем дублирвание слушателя
      popupOffsetEl.classList.add('in');
    }
  },
  closePopup: () => {
    const pageSectionEl = document.querySelector(`.page-section`);
    const popupWrapperEl = document.querySelector(`.popup__wrapper`);
    const popup = document.querySelector('.popup.in');
    const listener = () => {
      // Убираем блюр с контента
      pageSectionEl.classList.remove('in-blur');

      // Скрываем обертку попапов
      popupWrapperEl.classList.remove('in');

      // Удаляем слушатель
      popup.removeEventListener('transitionend', listener);
    };

    // Вешаем слушатель на окончание анимации
    popup.addEventListener('transitionend', listener);

    // Скрываем все попапы
    popup.classList.remove('in');
  },
};

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

  catalogItemEl.forEach(item => {
    item.addEventListener('click', () => {
      const targetSelector = item.dataset.target;

      animateCSS(item, 'pulse');
      methodStore.openPopup(targetSelector);
    });
  });
})();

// Popups
(() => {
  const popups = document.querySelectorAll('.popup');

  popups.forEach(item => {
    const closeBtn = item.querySelector('.btn-close');

    closeBtn.addEventListener('click', () => {
      methodStore.closePopup();
    });
  });
})();

// Product presentation tab
(() => {
  const productPresentationEl = document.querySelectorAll('.product-presentation');

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
