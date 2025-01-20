const burgerIcon = document.getElementById('burger-icon');
const closeIcon = document.getElementById('close-icon');
const menu = document.getElementById('menu');

// Afficher le menu en version mobile
burgerIcon.addEventListener('click', () => {
  menu.style.display = 'block';
  burgerIcon.style.display = 'none';
  closeIcon.style.display = 'block';
});

// Fermer le menu en version mobile
closeIcon.addEventListener('click', () => {
  menu.style.display = 'none';
  burgerIcon.style.display = 'block';
  closeIcon.style.display = 'none';
});

// Réinitialiser l'état du menu et des icônes lorsque la taille d'écran change
window.addEventListener('resize', () => {
  if (window.innerWidth > 650) {
    // Version desktop : afficher le menu et masquer les icônes
    menu.style.display = 'block';
    burgerIcon.style.display = 'none';
    closeIcon.style.display = 'none';
  } else {
    // Version mobile : masquer le menu et afficher l'icône burger
    menu.style.display = 'none';
    burgerIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  }
});
