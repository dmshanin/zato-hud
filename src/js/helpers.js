export function animateCSS(element, animationName, callback) {
  const node =
    typeof element !== 'string' && typeof element !== 'undefined'
      ? element
      : document.querySelector(element);

  node.classList.add('animated', animationName);

  function handleAnimationEnd() {
    node.classList.remove('animated', animationName);
    node.removeEventListener('animationend', handleAnimationEnd);

    if (typeof callback === 'function') callback();
  }

  node.addEventListener('animationend', handleAnimationEnd);
}
