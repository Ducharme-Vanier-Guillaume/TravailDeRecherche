//---------------- GESTION MENU BURGER ----------------//

// Les Variables
const iconeMenuBg = document.querySelector('.icone-menu-bg');
const menuBurger = document.querySelector('.menu-burger');
const menuLinks = document.querySelectorAll('.menu-burger a');

// Fonction pour ouvrir/fermer le menu
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

// Pour fermer le menu quand on clique sur un lien
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    
    menuBurger.classList.remove('active');
    iconeMenuBg.classList.remove('active');

    body.style.overflow = '';
    body.style.position = '';
    body.style.width = '';
  });
});

//---------------- GESTION DE LA VIDÉO ----------------//

// Les Variables
const boutonVideo = document.querySelector('.button-video');
const videoPetitDiv = document.querySelector('.div-petit-video');

const videoGrand = document.querySelector('.video-grand');
const videoPetit = document.querySelector('.video-petit')

const body = document.body; 

const footerh1 = document.querySelector('.h1-footer');
const infoFooter = document.querySelector('.info-footer');
const galerie = document.querySelector('.galerie-desktop');

boutonVideo.addEventListener('click', toggleVideo);

//La fonction sert à flouter le fond et arrêter le scrolling
// Le else sert à remettre la vidéo à 0 lorsque l'on quite le mode pleins écrant
function toggleVideo() {
  const isActive = videoGrand.classList.toggle('active');

  footerh1.classList.toggle('active');
  infoFooter.classList.toggle('active');
  galerie.classList.toggle('active');
  videoPetitDiv.classList.toggle('active'); 
  boutonVideo.classList.toggle('active');

  if (isActive) {
    body.style.overflow = 'hidden';
  } 
  
  else {
    body.style.overflow = '';
    videoPetit.pause(); 
    videoPetit.currentTime = 0; 
  }
}

//---------------- GESTION POUR QUITTER LA VIDÉO ----------------//

//Si on clique à l'extérieur de la div de la petite vidéo cela la ferme
document.addEventListener('click', (event) => {

  if (videoGrand.classList.contains('active')) {
    if (!videoPetit.contains(event.target) && !boutonVideo.contains(event.target)) {
      toggleVideo();
    }
  }
});

//Si l'on appuie ECHAP cela ferme la petite vidéo
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && videoGrand.classList.contains('active')) {
    toggleVideo();
  }
});

//---------------- GESTION DU VALUE DANS LE FORM POUR LA PAGE CONTACT ----------------//

//Lorsque l'on clique sur un élément du form, cela efface la valeur du value par défaut
function clearPlaceholder(input) {
  if (input.value === input.defaultValue) {
      input.value = "";
  }
}