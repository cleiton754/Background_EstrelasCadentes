(function () {
  'use strict';
  function start() { // inicia loop de criação de estrelas
    const containerElement = document.querySelector('.stars-container');
    if (!containerElement) return;
    const create = () => {
      const boundingRect = containerElement.getBoundingClientRect();
      const starElement = document.createElement('div');
      starElement.className = 'star';
      starElement.style.left = 200 - Math.random() * boundingRect.width + 'px';
      starElement.style.top = '-50px';
      containerElement.appendChild(starElement);

      gsap.to(starElement, {
        x: boundingRect.width + 100,
        y: boundingRect.height + 100,
        duration: gsap.utils.random(3, 20),
        ease: 'power1.in',
        onComplete: () => starElement.remove() // remove após término
      });
    };
    setInterval(create, 1000);
  }
  setTimeout(() =>
    window.gsap ? start() : load('https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js').then(start).catch(e => console.error('GSAP failed', e)), 100);
})();