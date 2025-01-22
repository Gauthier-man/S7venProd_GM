const teamItem = document.getElementById('team_item');
let teamTitle = document.querySelector('nav h1');

// Fonction pour gérer la visibilité du titre en fonction de la taille de l'écran
function toggleTitleVisibility() {
  if (window.matchMedia("(max-width: 650px)").matches) {
    // Sur mobile, laisser le titre intact sans ajout ni suppression
    teamTitle.style.display = 'none'; // Masquer le titre en version mobile (si nécessaire)
  } else {
    // Sur desktop, réafficher le titre (si masqué par le CSS)
    teamTitle.style.display = 'block';
    
    // Mettre à jour le texte du titre avec l'élément actif
    const activeItem = document.querySelector('.menu-item.active a');
    if (activeItem) {
      teamTitle.textContent = activeItem.textContent; // Mettre à jour le titre avec le texte de l'élément actif
    }
  }
  // Réattacher les événements de survol pour garantir qu'ils sont appliqués
  addHoverEvents();
}

// Fonction pour ajouter les événements de survol sur l'élément "ÉQUIPE"
function addHoverEvents() {
  // Supprimer les anciens événements s'ils existent
  teamItem.removeEventListener('mouseenter', onHoverEnter);
  teamItem.removeEventListener('mouseleave', onHoverLeave);

  // Ajouter les événements de survol
  teamItem.addEventListener('mouseenter', onHoverEnter);
  teamItem.addEventListener('mouseleave', onHoverLeave);
}

// Fonction exécutée lors du survol de "ÉQUIPE"
function onHoverEnter() {
  // Ne pas cacher le titre en version mobile
  if (window.matchMedia("(min-width: 651px)").matches) {
    teamTitle.style.display = 'none'; // Masquer le titre en version bureau
  }
}

// Fonction exécutée lors de la sortie du survol
function onHoverLeave() {
  // Ne pas afficher le titre en version mobile
  if (window.matchMedia("(min-width: 651px)").matches) {
    teamTitle.style.display = 'block'; // Afficher le titre en version bureau
  }
}

// Initialiser la visibilité du titre lors du chargement de la page
toggleTitleVisibility();

// Ajouter un événement pour gérer les redimensionnements de la fenêtre
window.addEventListener('resize', toggleTitleVisibility);
