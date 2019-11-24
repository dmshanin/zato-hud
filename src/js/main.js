// Menu
(() => {
  const navTogglerEl = document.querySelector('.nav__toggler .btn');
  const navOverlayEl = document.querySelectorAll('.nav__content__overlay');
  const navContentEl = document.querySelector('.nav__content');

  navTogglerEl.addEventListener('click', () => {
    navContentEl.classList.add('in');
  });

  navOverlayEl.forEach(item => {
    item.addEventListener('click', () => {
      navContentEl.classList.remove('in');
    });
  });
})();
