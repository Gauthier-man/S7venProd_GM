
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Empêcher l'envoi du formulaire pour la démo

    // Réinitialiser la classe shake pour tous les champs
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.classList.remove('shake');
    });

    // Vérifier si les champs sont remplis
    let formValid = true;

    inputs.forEach(input => {
      if (!input.value) {
        input.classList.add('shake');
        formValid = false;
      }
    });

    if (formValid) {
      // Si tout est valide, soumettre le formulaire (simulé ici)
      alert('Formulaire soumis !');
    } else {
      alert('Veuillez remplir tous les champs');
    }


// Récupérer tous les éléments de menu contenant un sous-menu
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach((item) => {
  const submenu = item.querySelector('.submenu');

  if (submenu) {
    // Afficher le sous-menu au survol
    item.addEventListener('mouseenter', () => {
      submenu.style.display = 'block';
    });

    // Cacher le sous-menu lorsque la souris quitte
    item.addEventListener('mouseleave', () => {
      submenu.style.display = 'none';
    });

    // Gestion du menu sur mobile : affichage au clic
    item.addEventListener('click', () => {
      if (window.matchMedia("(max-width: 650px)").matches) {
        const isDisplayed = submenu.style.display === 'block';
        submenu.style.display = isDisplayed ? 'none' : 'block';
      }
    });
  }
});





  });


