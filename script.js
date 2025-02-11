//Pour le Menu Burger
const iconeMenuBg = document.querySelector('.icone-menu-bg');

const menuBurger = document.querySelector('.menu-burger');


iconeMenuBg.addEventListener('click', () => {
  const isActive = menuBurger.classList.toggle('active');
  iconeMenuBg.classList.toggle('active');

  if (isActive) {
    body.style.overflow = 'hidden';
    body.style.position = 'fixed'; 
    body.style.width = '100%'; 
  } else {
    body.style.overflow = '';
    body.style.position = '';
    body.style.width = '';
  }
});

//Pour la vidéo
const boutonVideo = document.querySelector('.button-video');
const videoPetit = document.querySelector('.div-petit-video');
const boutonPetitVideo = document.querySelector('.button-petit-video')
const videoGrand = document.querySelector('.video-grand');
const body = document.body; 

boutonVideo.addEventListener('click', toggleVideo);
boutonPetitVideo.addEventListener('click', toggleVideo);

//Permet de mettre le mode actif sur la class div-petit-video et button-video, ce qui vient flouter
//flouter le back-ground et mettre la petite vidéo en premier plan
function toggleVideo() {
  const isActive = videoGrand.classList.toggle('active');
  videoPetit.classList.toggle('active'); 
  boutonVideo.classList.toggle('active');

  if (isActive) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = '';
  }
}