const iconeMenuBg = document.querySelector('.icone-menu-bg');

const menuBurger = document.querySelector('.menu-burger');

iconeMenuBg.addEventListener('click', () => {
  iconeMenuBg.classList.toggle('active');
  menuBurger.classList.toggle('active');
} )