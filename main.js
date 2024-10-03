
// document.addEventListener("DOMContentLoaded", function() {
//     const menuToggle = document.querySelector('.menu-toggle');
//     const menu = document.querySelector('.mobile_modal');

//     menuToggle.addEventListener('click', function() {
//         menu.classList.toggle('show');
//     });
// });
(() => {
    const mobileMenu = document.querySelector('.js-menu-container');
    const openMenuBtn = document.querySelector('.js-open-menu');
    const closeMenuBtn = document.querySelector('.js-close-menu');

    const toggleMenu = () => {
      const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true';
      openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
      mobileMenu.classList.toggle('is-open');

      // Obsługa blokowania przewijania
      const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
      bodyScrollLock[scrollLockMethod](document.body);
    };

    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);

    // Zamknij menu na większych ekranach, gdy zmienia się orientacja urządzenia
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
      if (!e.matches) return;
      mobileMenu.classList.remove('is-open');
      openMenuBtn.setAttribute('aria-expanded', false);
      bodyScrollLock.enableBodyScroll(document.body);
    });
  })();
